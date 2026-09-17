import "./Footer.css";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <div>
      <div className="crisis">
        <h3>Need immediate support?</h3>
        <p>
          This website is not an emergency service. If you or someone else is in
          immediate danger, contact your local emergency services or a verified
          crisis helpline.
        </p>
        <a href="#contact">
          [Local emergency number / verified crisis resource]
        </a>
      </div>
      <div className="shell footer-top">
        <div>
          <a className="wordmark" href="#top">
            {profile.name}
          </a>
          <p>Applied Psychologist · Researcher · Educator</p>
        </div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#journey">Journey</a>
          <a href="#research">Research</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Reach out</a>
        </div>
        <div className="social-media">
          <a href="#contact">LinkedIn</a>
          <a href="#contact">ResearchGate</a>
          <a href="#contact">Google Scholar</a>
        </div>
      </div>
      <div className="foot">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Built with curiosity, grounded in psychology.</span>
        <span>
          <a href="#top">Back to top ↑</a>
        </span>
      </div>
    </div>
  );
}
