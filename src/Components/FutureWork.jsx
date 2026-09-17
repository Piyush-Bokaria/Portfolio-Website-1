import "./FutureWork.css"
import Fade from "./Fade";
import { motion } from "framer-motion"
import { futureAvenues, fadeUp } from "../data/profile";

export default function FutureWork(){
    return (
        <section id="future-work" className="future">
          <Fade>
            <div className="future-photo">
              <img
                src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1500&q=85"
                alt="A sunlit path leading into a natural landscape"
              />
            </div>
            <div className="future-copy">
              <p className="eyebrow">07 / LOOKING AHEAD</p>
              <h2>
                There is still so much to <em>understand.</em>
              </h2>
              <p>
                Future work may take the form of new research, shared learning,
                community initiatives, publications, workshops, and thoughtful
                interdisciplinary collaboration.
              </p>
              <a className="text-link" href="#contact">
                Let’s start a conversation <b>→</b>
              </a>
            </div>
            <div className="future-grid">
              {futureAvenues.map((avenue, idx) => (
                <motion.div
                  key={avenue.title}
                  className="future-card"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    margin: "-60px",
                  }}
                  transition={{
                    delay: idx * 0.08,
                  }}
                >
                  <div className="future-card-num">{avenue.num}</div>

                  <h3 className="future-card-heading">{avenue.title}</h3>

                  <p className="future-card-desc">{avenue.desc}</p>
                </motion.div>
              ))}
            </div>
          </Fade>
        </section>
    )
}