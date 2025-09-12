import { useTypingAnimation, useScrollAnimation } from '../hooks/useAnimations';

export default function Intro() {
  const quote = "The web is a canvas, and code is the brush that brings our imagination to life. But the true art is not in the code itself, but in the way we choose to wield it.";
  const { displayedText } = useTypingAnimation(quote, 30);
  const { ref: introRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  return (
    <>
      <div>
        <h1
          className={`animate-scale-in ${isVisible ? 'animation-delay-100' : ''}`}
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
        <div ref={introRef as React.RefObject<HTMLDivElement>} className={`intro ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <blockquote>
            <em>
              {displayedText}<span className="typing-cursor"></span>
            </em>
          </blockquote>
          <p className={`animate-on-scroll ${isVisible ? 'visible animation-delay-200' : ''}`}>
            Welcome! I'm Nohé, and I bring big ideas to life through code 💡✨.
            Driven by curiosity and fueled by coffee, I'm all about crafting
            digital experiences that inspire, connect, and make an impact. Let's
            create something unforgettable!
          </p>

          <p className={`animate-on-scroll ${isVisible ? 'visible animation-delay-300' : ''}`}>
            My passion for development is grounded in the belief that technology
            can make life simpler, smarter, and more connected. Each project I
            undertake is an opportunity to refine my skills and deliver
            innovative solutions. I'm excited by the endless potential of modern
            tools and languages, and I thrive on bringing ideas to life with a
            commitment to quality and creativity.
          </p>
          <p className={`animate-on-scroll ${isVisible ? 'visible animation-delay-400' : ''}`}>
            Feel free to explore my work! Whether you'd like to discuss a
            project, share insights on web development, or just connect, I'd
            love to hear from you. Let's build something remarkable together.
          </p>
        </div>
      </div>
    </>
  );
}
