import "./Hero.css"
import Fade from "./Fade";
import { profile } from "../data/profile";

const Leaf = () => (
  <svg className="leaf" viewBox="0 0 140 170" aria-hidden="true">
    <path
      d="M69 164C68 102 75 47 111 8M72 108C45 89 25 61 19 30M75 75c22-14 40-17 58-13M69 130c-20-10-37-11-55-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
    />
    <path
      d="M19 30c27 1 47 22 52 45M111 8c-2 32-19 52-36 67M133 62c-27 1-46 15-58 29M14 125c27-9 47-4 55 5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
    />
  </svg>
);

export default function Hero() {
  return (
    <div>
      <section className="hero">
        <div className="hero-copy">
          <Fade>
            <p className="eyebrow">{profile.role}</p>
            <h1>
              Sometimes, understanding <em>what we’re feeling</em> is the first
              step.
            </h1>
            <p className="lede">{profile.intro}</p>
            <div className="actions">
              <a className="button" href="#about">
                Get to Know My Work <b>→</b>
              </a>
              <a className="text-link" href="#contact">
                Reach Out <b>↘</b>
              </a>
            </div>
          </Fade>
        </div>
        <Fade className="portrait-wrap">
          <div className="sun"></div>
          <img
            src="../assets/portrait-hero.jpg"
            alt="Warmly lit portrait placeholder"
          />
          <span className="scribble">a place to be curious</span>
          <Leaf />
        </Fade>
      </section>
      <section className="welcome">
        <Leaf />
        <Fade>
          <p className="eyebrow">A GENTLE WELCOME</p>
          <h2>
            If you’ve been looking for <em>a place to begin...</em>
          </h2>
          <div className="welcome-text">
            <p>
              Maybe you’re trying to understand something you’re feeling. Maybe
              life has felt heavier than usual. Maybe you simply want to
              understand yourself a little better.
            </p>
            <p>
              You don’t need to have the right words. You don’t need to know
              exactly what’s wrong.
            </p>
            <strong>Sometimes, beginning with a conversation is enough.</strong>
            <p className="breath">Take a breath. You’re welcome here.</p>
          </div>
        </Fade>
      </section>
    </div>
  );
}
