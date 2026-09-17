import { motion } from "framer-motion";
import { journey } from "../data/profile";
import "./Journey.css";
import Fade from "./Fade";

const fadeIn = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function Journey() {
  return (
    <div>
      <section className="journey" id="journey" aria-label="My journey">
          <Fade>
            <motion.div
              className="journey-header"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: "-80px",
              }}
            >
              <p className="eyebrow">02 / My Journey</p>
              <h2>
                {" "}
                How curiosity became <em>a calling.</em>{" "}
              </h2>
            </motion.div>
          </Fade>

          <div className="journey-stages">
            <div className="journey-line" aria-hidden="true"></div>

            {journey.map((stage, index) => (
              <motion.div
                key={stage[0]}
                className="journey-stage"
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-60px",
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <div className="journey-stage-content">
                  <p className="journey-stage-label">{stage[1]}</p>
                  <p className="journey-stage-year journey-stage-year-mobile">
                    {stage[2]}
                  </p>
                  <h3 className="journey-stage-title">{stage[3]}</h3>
                  <p className="journey-stage-description">{stage[4]}</p>
                </div>
                <div className="journey-stage-dot-col">
                  <motion.div
                    className="journey-stage-dot"
                    initial={{
                      scale: 0,
                    }}
                    whileInView={{
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                      margin: "-60px",
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.2,
                    }}
                    aria-hidden="true"
                  />
                </div>
                <div className="journey-stage-year-side">
                  <p className="journey-stage-year">{stage[2]}</p>
                </div>
              </motion.div>
            ))}
          </div>
      </section>
      <section className="human">
        <Fade>
          <p className="eyebrow">A HUMAN NOTE</p>
          <h2>
            Human experiences are rarely <em>simple.</em>
          </h2>
          <div className="phrases">
            <i>Feeling overwhelmed.</i>
            <i>Questioning yourself.</i>
            <i>Trying to make sense of change.</i>
            <i>Wanting to be understood.</i>
            <i>Starting again.</i>
          </div>
          <p>These experiences are part of being human.</p>
        </Fade>
      </section>
    </div>
  );
}
