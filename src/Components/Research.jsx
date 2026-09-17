import "./Research.css"
import Fade from "./Fade";
import { research } from "../data/profile";

export default function Research() {
  return (
    <section id="research" className="research">
      <Fade>
        <p className="eyebrow">03 / RESEARCH & INQUIRY</p>
        <h2>
          Curiosity about people
          <br />
          leads to <em>better questions.</em>
        </h2>
      </Fade>
      <div className="research-list">
        {research.map((r, i) => (
          <Fade className="research-item" key={r[0]}>
            <b>0{i + 1}</b>
            <div>
              <h3>{r[0]}</h3>
              <p>{r[1]}</p>
              <small>{r[2]}</small>
            </div>
            <span>↗</span>
          </Fade>
        ))}
      </div>
      <Fade className="publication">
        <p className="eyebrow">SELECTED RESEARCH</p>
        <h3>[Publication Title]</h3>
        <p>
          [Authors] &nbsp; · &nbsp; [Journal / Conference] &nbsp; · &nbsp;
          [Year]
        </p>
        <a href="#contact">
          View publication <b>→</b>
        </a>
      </Fade>
    </section>
  );
}
