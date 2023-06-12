import React, { useState } from "react";
import awards from "../awards.json";

function Awards(props) {
  let [index, setIndex] = useState(0);

  let decrementIndex = () => {
    if (index === 0) setIndex(awards.length - 1);
    else setIndex(index - 1);
  };

  let incrementIndex = () => {
    if (index === awards.length - 1) setIndex(0);
    else setIndex(index + 1);
  };

  return (
    <section id="awards" className="section--bordered">
      <div className="awards-block container">
        <div className="heading-block">
          <h2>awards</h2>
          <hr className="heading__line"></hr>
        </div>
        <div className="awards__images">
          <span className="scroller clickable" onClick={decrementIndex}>
            &lt;
          </span>
          <div class="awards__list">
            {awards.map((aw, ind) => {
              let cls = "next";
              if (ind === index) cls = "active";
              else if (
                ind === index - 1 ||
                (index === 0 && ind === awards.length - 1)
              )
                cls = "prev";

              return (
                <picture className={"awards__img " + cls}>
                  {aw.sources && (
                    <>
                      <source type="./webp" srcSet={`${aw.webp} 1x`} />
                      <source type="./png" srcSet={`${aw.png} 1x`} />
                    </>
                  )}
                  <img src={aw.src} alt="" />
                </picture>
              );
            })}
          </div>
          <span className="scroller clickable" onClick={incrementIndex}>
            &gt;
          </span>
        </div>
      </div>
    </section>
  );
}

export default Awards;
