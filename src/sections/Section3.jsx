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
        <div
          className="section-3-img-container relative"
          // style={{ width: "100%" }}
        >
          <Link
            to="https://jobify-frontend-8jr6.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/shutterstock.jpg" alt="" />
            <p className="absolute">JOB FIND APP</p>
          </Link>
        </div>

        <div
          className="section-3-img-container relative"
          // style={{ width: "100%" }}
        >
          <Link
            to="https://mazi-commerce-real.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/ecommerce.png" alt="" />
            <p className="absolute">ECOMMERCE</p>
          </Link>
        </div>

        <div
          className="section-3-img-container relative"
          // style={{ width: "100%" }}
        >
          <Link
            to="https://mazi-quiz.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/quiz-rel.png" alt="" />
            <p className="absolute">MY QUIZ APP</p>
            {/* https://mazi-commerce-real.netlify.app */}
          </Link>
        </div>
        <div className="section-3-img-container relative">
          <Link
            to="https://mazi-todo-real.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/todo.png" alt="" />
            <p className="absolute">MY TODO APP</p>
          </Link>
        </div>
        <div className="section-3-img-container relative">
          <Link
            to="https://hacker-news-mazi.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/news.jpg" alt="" />
            <p className="absolute">MY HACKER NEWS APP</p>
          </Link>
        </div>
        <div className="section-3-img-container relative">
          <Link
            to="https://mazi-cocktails.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/cocktails.jpg" alt="" />
            <p className="absolute">COCKTAILS API APP</p>
          </Link>
        </div>
        <div className="section-3-img-container">
          <Link
            to="https://simple-calcus.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/calcus.png" alt="" />
            <p>CALCULATOR APP</p>
          </Link>
        </div>
        <div className="section-3-img-container">
          <Link
            to="https://cart-my-app.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/cart.jpg" alt="" />
            <p>CART APP</p>
          </Link>
        </div>
        <div className="section-3-img-container">
          <Link
            to="https://mazirama.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/bookorama.avif" alt="" />
            <p>BOOKORAMA</p>
          </Link>
        </div>
        <div className="section-3-img-container">
          <Link
            to="https://review-niger.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/review.jpg" alt="" />
            <p>REVIEW</p>
          </Link>
        </div>
        <div className="section-3-img-container">
          <Link
            to="https://mazi-menu.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/web6.png" alt="" />
            <p>MENU</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section3;
