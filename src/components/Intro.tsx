export default function Intro() {
  return (
    <>
      <div>
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: 700,
            marginBottom: "1rem",
            backgroundImage:
              "linear-gradient(135deg, #f0f0f0 0%, #e0993c 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Portfolio
        </h1>
        <div className="intro">
          <blockquote>
            <em>
              “The web is a canvas, and code is the brush that brings our
              imagination to life. But the true art is not in the code itself,
              but in the way we choose to wield it.”
            </em>
          </blockquote>
          <p>
            Welcome to my developer portfolio! 🚀 My name is Nohé, and I'm a
            passionate web developer with a never-ending love for building
            beautiful, fast, and scalable web applications. I'm always on the
            lookout for new challenges and opportunities to push the boundaries
            of what's possible on the web 🕸.
          </p>
          <p>
            Take a look around, and let me know what you think! I'd love to chat
            with you about any of the projects you see here, or just about web
            development in general.
          </p>
        </div>
      </div>
    </>
  );
}
