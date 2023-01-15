import React from "react";
import links from "../links.json";

function Hero(props) {
  return (
    <section id="hero">
      <div className="hero-block">
        <h1 className="hero__intro">WELCOME to</h1>
        <picture className="hero__img">
          <img src="../images/hero.png" alt="Logo"></img>
        </picture>
        <p className="hero__quote">Where desires become reality !</p>
        <div className="hero__media">
          <ul>
            {links.map((l) => (
              <li className="clickable">
                <a href={l.href} target="_blank">
                  <span className={l.icon}></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a href="#opening">
          <span className="fa fa-arrow-down"></span>
        </a>
      </div>
    </section>
  );
}

export default Hero;
