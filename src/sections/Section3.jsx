import { Link } from "react-router-dom";

const Section3 = () => {
  return (
    <section className="section-3">
      <div className="section-3-div-1">
        <h3 className="">Portofolio</h3>
        <p className="">
          Since the beginning of my journey as a freelance designer and
          developer, I've done remote work for
          <span className=""> agencies, </span>
          consulted for <span className="">startups </span>
          and collaborated with talanted people to create digital products for
          both business and consumer use.
        </p>
        <p className="">
          I offer a wide range of services, including brand design, programming
          and teaching.
          <span className="ml-2">
            Below are sites/websites that leads to the projects I have built so
            far.
          </span>
        </p>
      </div>
      <div className="section-3-div-2">
        <div className="section-3-img-container relative">
          <Link to="https://mazi-cocktails.netlify.app">
            <img src="/cocktails.jpg" alt="" />
            <p className="absolute">COCKTAILS API APP</p>
          </Link>
        </div>
        <div className="section-3-img-container">
          <Link to="https://simple-calcus.netlify.app">
            <img src="/calcus.png" alt="" />
            <p>CALCULATOR APP</p>
          </Link>
        </div>
        <div className="section-3-img-container">
          <Link to="https://cart-my-app.netlify.app">
            <img src="/cart.jpg" alt="" />
            <p>CART APP</p>
          </Link>
        </div>
        <div className="section-3-img-container">
          <Link to="https://mazirama.netlify.app">
            <img src="/bookorama.avif" alt="" />
            <p>BOOKORAMA</p>
          </Link>
        </div>
        <div className="section-3-img-container">
          <Link to="https://review-niger.netlify.app">
            <img src="/review.jpg" alt="" />
            <p>REVIEW</p>
          </Link>
        </div>
        <div className="section-3-img-container">
          <Link to="https://mazi-menu.netlify.app">
            <img src="/web6.png" alt="" />
            <p>MENU</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section3;
