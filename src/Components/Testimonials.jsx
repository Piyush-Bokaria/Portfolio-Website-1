import "./Testimonials.css"
import Fade from "./Fade";
import { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

function Breathing() {
  const [go, setGo] = useState(false),
  [phase, setPhase] = useState("INHALE");
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!go) return;
    const phases = [
      ["INHALE", 4000],
      ["HOLD", 2000],
      ["EXHALE", 6000],
    ];
    let n = 0;
    let timer;
    const next = () => {
      setPhase(phases[n][0]);
      timer = setTimeout(() => {
        n = (n + 1) % 3;
        next();
      }, phases[n][1]);
    };
    next();
    return () => clearTimeout(timer);
  }, [go]);
  return (
    <section className="pause">
      <Fade>
        <p className="eyebrow">A SMALL PAUSE</p>
        <h2>
          A moment <em>for you.</em>
        </h2>
        <p>Before you continue, take one slow breath.</p>
        <button
          onClick={() => setGo(!go)}
          className={"orb " + (go ? "active" : "")}
          aria-pressed={go}
        >
          <span>
            {go ? phase : "BEGIN"}
            <small>{go ? "one gentle cycle" : "optional"}</small>
          </span>
        </button>
        <p className="quiet">Continue when you’re ready.</p>
      </Fade>
    </section>
  );
}

export default function Testimonials() {
  return (
    <div>
      <section id="testimonials" className="testimonials">
        <Fade>
          <p className="eyebrow">06 / IN THEIR WORDS</p>
          <h2>
            What remains with us is the feeling of being{" "}
            <em>genuinely heard.</em>
          </h2>
          <blockquote>
            “lorem ipsum dolor sit amet”
            <cite>— [Name], [Identity]</cite>
          </blockquote>
          <p className="placeholder">
            Testimonials shown here are intentionally placeholders until
            approved, real feedback is provided.
          </p>
        </Fade>
      </section>
      <Breathing />
    </div>
  );
}
