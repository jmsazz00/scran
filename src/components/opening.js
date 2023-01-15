import React from "react";

function Opening(props) {
  return (
    <section id="opening">
      <div className="opening-block">
        <picture className="opening__img">
          <source type="./webp" srcSet="../images/chris.webp 1x" />
          <source type="./jpg" srcSet="../images/chris.jpg 1x" />
          <img src="../images/chris.webp" alt="Owner pic"></img>
        </picture>
        <article className="opening__content">
          <h3 className="opening__heading">
            cook good scran and they will come
          </h3>
          <p className="opening__paragraph">
            Here at SCRAN we think of ourselves as not just another cafe. We
            pride ourselves on making our customers feel at ease and welcome the
            minute you walk through the door, and the personal touch is genuine.
            The menu is full of choice with something for everyone. Using the
            best of ingredients e.g. Stornoway black pudding, Corrie Mains eggs,
            Heirloom tomatoes, Myrtle coffee to name but a few. Simple food
            cooked well, with our own wee twist.
          </p>
          <p className="opening__paragraph">
            We've designed the menu with the customer in mind and what YOU want
            to eat. We feel that it's 'Just right' for Dennistoun. Also stocking
            award winning Big Bear Bakery cakes. Officially the top dogs in
            Glasgow... Every weekend we cook up an exquisite special, which
            usually sells out midway through sunday lunch, so be quick!
          </p>
          <p className="opening__paragraph">
            So from Chris and the SCRAN family, we look forward to welcoming you
            to our big hearted cafe soon, and we're sure, once you've
            visited, you'll keep on coming back for more.
          </p>
          <div class="trp-adv">
            <a
              href="https://www.tripadvisor.co.uk/Restaurant_Review-g186534-d15355610-Reviews-Scran-Glasgow_Scotland.html"
              target="_blank"
            >
              <img src="../images/tripadviser.png" alt=""></img>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Opening;
