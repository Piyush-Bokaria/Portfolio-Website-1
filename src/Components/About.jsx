import { profile } from "../data/profile";
import Fade from "./Fade";
import "./About.css"

export default function About() {
  return (
    <div>
      <section id="about" className="about split">
        <Fade className="about-image">
          <img
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=85"
            alt="A person writing in a journal"
          />
          <span>notes from a thoughtful practice</span>
        </Fade>
        <Fade className="about-copy">
          <p className="eyebrow">01 / ABOUT {profile.name}</p>
          <h2>
            A practice grounded in <em>attention.</em>
          </h2>
          <p>
            I have an academic background in Applied Psychology and hold a PhD
            in Psychology as well. My work is interested in the rich overlap
            between research, relationships, wellbeing, and the way people make
            meaning in everyday life.
          </p>
          <blockquote>
            “{profile.quote}”<cite>— Professional philosophy placeholder</cite>
          </blockquote>
        </Fade>
      </section>
      <section className="areas">
        <p className="eyebrow">AREAS OF SPECIALIZATION</p>
        <div>
          {profile.areas.map((a, i) => (
            <span key={a}>
              <b>{String(i + 1).padStart(2, "0")}</b>
              {a}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
