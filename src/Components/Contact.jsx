import "./Contact.css"
import Fade from "./Fade";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <Fade>
        <p className="eyebrow">08 / START WITH A CONVERSATION</p>
        <h2>
          You don’t need to write the <em>perfect message.</em>
        </h2>
        <p>
          If you’d like to know more about my work, discuss a collaboration, or
          simply ask a question, you’re welcome to reach out.
        </p>
        <div className="contact-grid">
          <a href="mailto:[Email]">
            [Email] <b>↗</b>
          </a>
          <span>[Institution / LinkedIn / ResearchGate]</span>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Name
            <input placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea placeholder="Whatever you’d like to share..."></textarea>
          </label>
          <button className="button">
            Send Message <b>→</b>
          </button>
        </form>
      </Fade>
    </section>
  );
}
