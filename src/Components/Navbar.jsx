import { useState } from "react";
import { profile } from "../data/profile";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <a className="brand" href="#top">
        {profile.name}
        <i>.</i>
      </a>
      <button
        className="menu"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav className={open ? "open" : ""}>
        {[
          "About",
          "Journey",
          "Research",
          "Projects",
          "Testimonials",
          "Future Work",
        ].map((x) => (
          <a
            onClick={() => setOpen(false)}
            href={"#" + x.toLowerCase().replace(" ", "-")}
            key={x}
          >
            {x}
          </a>
        ))}
        <a className="nav-cta" href="#contact">
          Reach Out <span>↗</span>
        </a>
      </nav>
    </header>
  );
}
