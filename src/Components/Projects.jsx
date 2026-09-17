import "./Projects.css"
import Fade from "./Fade";
import { projects } from "../data/profile";

export default function Projects() {
  return (
    <div>
      <section id="projects" className="projects">
        <Fade>
          <p className="eyebrow">04 / PROJECTS</p>
          <h2>
            Work that meets the <em>world.</em>
          </h2>
        </Fade>
        {projects.map((p, i) => (
          <Fade className={"project p" + i} key={p[1]}>
            <div className="project-image">
              <img src={p[4]} alt="Project visual placeholder" />
            </div>
            <div className="project-info">
              <p className="eyebrow">
                {p[0]} &nbsp; {p[2]}
              </p>
              <h3>{p[1]}</h3>
              <p>{p[3]}</p>
              <a href="#contact">
                Explore Project <b>→</b>
              </a>
            </div>
          </Fade>
        ))}
      </section>
      <section className="impact">
        <Fade>
          <div>
            <p className="eyebrow">05 / PROFESSIONAL IMPACT</p>
            <h2>
              Psychology
              <br />
              <em>Beyond the Page</em>
            </h2>
          </div>
          <p>
            Research becomes more meaningful when it travels: into classrooms,
            community spaces, shared questions, and practical conversations.
          </p>
          <ul>
            <li>Workshops & educational initiatives</li>
            <li>Community work & awareness programmes</li>
            <li>Student mentoring & public engagement</li>
            <li>Professional collaborations</li>
          </ul>
        </Fade>
      </section>
    </div>
  );
}
