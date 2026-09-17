import "./Footer.css"
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
      <div className="foot">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>
          <a href="#top">Back to top ↑</a>
        </span>
      </div>
    </div>
  );
}
