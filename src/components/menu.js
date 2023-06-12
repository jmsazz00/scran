import React from "react";

function Menu(props) {
  return (
    <section id="menu" className="section--bordered">
      <div className="menu-block container">
        <div className="heading-block">
          <h2>menu</h2>
          <hr className="heading__line"></hr>
        </div>
        <div className="menu__img">
          <img src="./images/menunew.png" alt="" />
          <img src="./images/menu.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Menu;
