
const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const escapeHtml = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

export async function onRequestPost({ request, env }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const subject = String(body.subject || "").trim();
  const message = String(body.message || "").trim();

  if (!name || !email || !subject || !message) {
    return json({ error: "Please fill in all fields." }, 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || name.length > 100 || subject.length > 150 || email.length > 200 || message.length > 5000) {
    return json({ error: "Please check your details and try again." }, 400);
  }
  if (!env.RESEND_API_KEY) {
    return json({ error: "Email service is not configured." }, 500);
  }

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
        to: [env.CONTACT_TO_EMAIL || "pitogojannah@outlook.com"],
        reply_to: email,
        subject: `${subject.replace(/[\r\n]+/g, " ")} (from ${name})`,
        html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p><strong>Message:</strong></p>
<p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
      }),
    });
    if (!r.ok) {
      console.error("Resend error:", await r.text());
      return json({ error: "Could not send your message. Please try again." }, 502);
    }
    return json({ ok: true });
  } catch (err) {
    console.error(err);
    return json({ error: "Something went wrong. Please try again." }, 500);
  }
}

export const onRequest = () => json({ error: "Method not allowed" }, 405);
