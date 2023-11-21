import React from "react";

function Gallery(props) {
  return (
    <section id="gallery" className="section--bordered">
      <div className="gallery-block container">
        <div className="heading-block">
          <h2>dishes</h2>
          <hr className="heading__line"></hr>
        </div>
        <div className="gallery__grid grid--1x2 grid--1x3">
          <div className="gallery__img" data-name="duckbun">
            <img src="./images/duckbun1.jpg" alt=""></img>
          </div>
          <div className="gallery__img" data-name="eggblackpud">
            <img src="./images/eggsblackpud2.jpg" alt=""></img>
          </div>
          <div className="gallery__img" data-name="porkcrumb">
            <img src="./images/porkcrumb3.jpg" alt=""></img>
          </div>
          <div className="gallery__img" data-name="eggblackpud">
            <img src="./images/eggsblackpud4.jpg" alt=""></img>
          </div>
          <div className="gallery__img" data-name="macnham">
            <img src="./images/macnham5.jpg" alt=""></img>
          </div>
          <div className="gallery__img" data-name="fullbowl">
            <img src="./images/fullbowl6.jpg" alt=""></img>
          </div>
          <div className="gallery__img" data-name="breakfast">
            <img src="./images/fullbreakfast7.jpg" alt=""></img>
          </div>
          <div className="gallery__img" data-name="indianbeef">
            <img src="./images/indianbeef8.jpg" alt=""></img>
          </div>
          <div className="gallery__img" data-name="florentine">
            <img src="./images/florentine9.jpg" alt=""></img>
          </div>
          <div className="gallery__img" data-name="3-plates">
            <img src="./images/3plates10.jpg" alt=""></img>
          </div>
          <div className="gallery__img" data-name="eggduck">
            <img src="./images/eggduck11.jpg" alt=""></img>
          </div>
          <div className="gallery__img" data-name="Sq&Po">
            <img src="./images/squashnpoach12.jpg" alt=""></img>
          </div>
        </div>
        <a
          href="https://www.instagram.com/scrangla/"
          target="_blank"
          className="gallery__resources clickable"
        >
          More on Instagram <span>-&gt;</span>
        </a>
      </div>
    </section>
  );
}

export default Gallery;
