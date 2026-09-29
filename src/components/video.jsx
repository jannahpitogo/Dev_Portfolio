const creativeShorts = [
  {
    title: "Jumpers Jump Podcast Content Recycling",
    url: "https://www.youtube.com/watch?v=LGXOqLUepcs&feature=youtu.be",
  },
  {
    title: "Content Recycling (Shorts) From Raw Materials",
    url: "https://youtube.com/shorts/GFIqbOa04KM?si=tPIn8unfCMmswRrE",
  },
  {
    title: "Content Recycling (Shorts) From Raw Materials", 
    url: "https://youtube.com/shorts/SSMRnNsGwOk?si=r2H-QuKIrfD5_pk6",
  }
];

const creativeLongForm = [
  {
    title: "Product Long Form",
    url: "https://youtu.be/ahbB-pnM7So?si=Y4QSyBjkUUZwR7BU",
  },
  {
    title: "Travel Promotional Video",
    url: "https://youtu.be/SXF-5sW2Bn8?si=5dAY1fRfl2CaBnKY",
  },
  {
    title: "Traditional Animation", 
    url: "https://youtu.be/3JiWw3pg0b4"
  },
  {
    title: "Lego Animation", 
    url: "https://youtu.be/z7IAv0xFzKo"
  },
  {
    title: "Corporate Template Video", 
    url: "https://youtu.be/pNL1UX1sN74"
  }
];

function getYouTubeVideoId(videoUrl) {
  try {
    const url = new URL(videoUrl);
    const isYouTubeHost =
      url.hostname === "youtu.be" ||
      url.hostname === "youtube.com" ||
      url.hostname.endsWith(".youtube.com");

    if (!isYouTubeHost) {
      return null;
    }

    const pathMatch = url.pathname.match(/^\/(?:shorts|embed|live)\/([\w-]+)$/);
    const videoId =
      url.hostname === "youtu.be"
        ? url.pathname.slice(1)
        : url.pathname === "/watch"
          ? url.searchParams.get("v")
          : pathMatch?.[1];

    return videoId && /^[\w-]{11}$/.test(videoId) ? videoId : null;
  } catch {
    return null;
  }
}

function CreativeVideoCollection({ videos: videoList, title, mediaClass }) {
  const videos = videoList
    .map((video) => ({ ...video, videoId: getYouTubeVideoId(video.url) }))
    .filter((video) => video.videoId);

  if (!videos.length) {
    return null;
  }

  const headingId = `creative-${title.toLowerCase().replaceAll(" ", "-")}-title`;

  return (
    <section className="creative-shorts" aria-labelledby={headingId}>
      <p className="creative-portfolio__eyebrow">VIDEO COLLECTION</p>
      <h3 className="creative-shorts__title" id={headingId}>
        {title}
      </h3>

      <div className="creative-grid creative-shorts__grid">
        {videos.map((video, index) => (
          <article className="creative-card" key={`${video.url}-${index}`}>
            <div className="creative-card__index">{String(index + 1).padStart(2, "0")}</div>
            <div className={mediaClass}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${video.videoId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="creative-card__footer">
              <h4 className="creative-card__title">{video.title}</h4>
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="creative-card__button"
              >
                Watch <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function CreativeShorts() {
  return (
    <CreativeVideoCollection
      videos={creativeShorts}
      title="Shorts"
      mediaClass="creative-short__media"
    />
  );
}

export function CreativeLongForm() {
  return (
    <CreativeVideoCollection
      videos={creativeLongForm}
      title="Long Form"
      mediaClass="creative-long-form__media"
    />
  );
}

export default function YouTubeEmbed({ videoId }) {
  return (
    <div style={{ aspectRatio: '16/9', width: '100%' }}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ border: 'none' }}
      />
    </div>
  );
}