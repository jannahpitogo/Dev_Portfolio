import jannah from "../assets/jannah.png";

export default function About() {
  return (
    <section id="about" className="about">
      <img className="about-img filter" src={jannah} alt="Jannah Pitogo" />

      <span className="about-content">
        <h2 className="about-text">About Me</h2>
        <p>
          Hi! I'm Jannah, a Junior Full-Stack Web Developer based in Barcelona.
        </p>
        <p>
          I love creating things. Whether it's learning a new instrument,
          writing in my journal, building an application, or developing a game,
          I enjoy turning ideas into something real. Music and programming have
          a lot in common to me, both require curiosity, patience, and a
          willingness to keep learning. The more I learn, the more I realize
          there's always more to discover, and that's what keeps me excited.
        </p>
        <p>
          I enjoy and challenge myself by building applications that solve
          everyday problems, especially the ones I experience myself. If I find
          a better way to do something, I'll probably try to build it.
          Journaling has also shaped how I approach challenges by helping me
          organize my thoughts and break problems into smaller pieces.
        </p>
        <p>
          Above all, I'm someone who loves learning and challenging myself.
          Whether it's picking up a new technology, a new instrument, or
          building something I've never built before, I enjoy stepping outside
          my comfort zone. I believe the best developers aren't the ones who
          know everything—especially when information is everywhere, but the
          ones who stay curious, keep building, keep learning, and never stop
          improving. Because you only fail when you stop trying, and I don't
          plan on stopping anytime soon.
        </p>
      </span>
    </section>
  );
}
