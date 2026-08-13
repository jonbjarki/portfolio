import "./about.css";

export default function AboutMeSection() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <header className="about-header">
        <p id="introduction">Hi, my name is</p>
        <h1 id="about-heading">
          <span className="name">Jón Bjarki</span>
          <span className="sr-only">, Full-Stack Software Engineer based in Iceland</span>
        </h1>
        <p id="title">Striving to improve lives with technology</p>
      </header>

      <p id="description">
        As a full-stack software engineer, I work hard to build accessible, easy-to-use software
        that has a real impact on people's lives.
      </p>

      <a id="contact-btn" href="#contact">
        Contact Me
      </a>
    </section>
  );
}
