import React, { useEffect } from "react";
import { useGlobalContext } from "./navContext";

function Nav(props) {
  let { navOpen, setNavOpen } = useGlobalContext();

  useEffect(() => {
    let event = (ev) => {
      console.log(ev.target);
      if (!ev.target.matches("nav")) setNavOpen(false);
    };
    document.addEventListener("click", event, true);
    return () => document.removeEventListener("click", event);
  }, []);

  return (
    <section id="nav" className={navOpen ? "nav--opened" : ""}>
      <span className="clickable nav-span" onClick={() => setNavOpen(!navOpen)}>
        &lt;
      </span>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#awards">Awards</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Nav;
