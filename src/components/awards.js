import React from "react";

function Awards(props) {
  return (
    <section id="awards" className="section--bordered">
      <div className="awards-block">
        <div className="heading-block">
          <h2>awards</h2>
          <hr className="heading__line"></hr>
        </div>
        <div className="awards__images">
          <picture className="awards__img">
            <source type="./webp" srcSet="./image/win1.webp 1x" />
            <source type="./png" srcSet="./image/win1.png 1x" />
            <img src="./images/win1.png" alt="" />
          </picture>
          <picture className="awards__img">
            <img src="./images/poster.jpg" alt="" />
          </picture>
          <picture className="awards__img">
            <source type="./webp" srcSet="./image/win2.webp 1x" />
            <source type="./png" srcSet="./image/win2.png 1x" />
            <img src="./images/win2.png" alt="" />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default Awards;
