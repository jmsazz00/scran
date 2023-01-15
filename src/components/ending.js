import React from "react";
import links from "../links.json";

function Ending(props) {
  return (
    <section id="ending">
      <div className="ending-block">
        <div class="google-maps">
          <iframe
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2238.9724791790513!2d-4.21583018417314!3d55.863143890944045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4888415610cc58dd%3A0xfe4262ba3bcc603c!2s594+Alexandra+Parade%2C+Glasgow+G31+3BS!5e0!3m2!1sen!2suk!4v15429896846214"
          ></iframe>
        </div>
        <div className="ending__logo">
          <picture className="hero__img">
            <img src="../images/hero.png" alt="Logo"></img>
          </picture>
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
            <p className="ending__right">
              Website by <mark>JEMES</mark>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ending;
