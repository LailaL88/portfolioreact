import PortfolioItem from "./PortfolioItem";
import sparkleheart from "../img/sparkleheart.png";
import recipes from "../img/recipes.png";
import menuapp from "../img/menu-app.png";
import portfoliowp from "../img/portfoliowp.png";
import portfolio2 from "../img/portfolio2.png";
import ekonams from "../img/ekonams.png";
import ourworld from "../img/our-world.png";
import poetik from "../img/poetik.png";
import pineapple from "../img/pineapple.png";
import weatherapp from "../img/weather-app.png";
import keeper from "../img/keeper.png";
import todolist from "../img/todo-list.png";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h1>Portfolio</h1>
        <div className="portfolio-items">
          <PortfolioItem img={recipes} link="http://recipes.juniordev.tech/" />
          <PortfolioItem img={sparkleheart} link="http://sparkleh.juniordev.tech/"/>
          <div className="menu-app">
            <img src={menuapp} alt="menu app" />
            <p>HTML, CSS, JS, WordPress</p>
            <a href="#"><button className='button'><span>Visit site</span></button></a>
          </div>
          <PortfolioItem img={portfoliowp} link="http://portfoliowp.juniordev.tech/"/>
          <PortfolioItem img={portfolio2} link="http://portfolio2.juniordev.tech/" />
          <PortfolioItem img={ekonams} link="https://lailal88.github.io/eko-nams/" />
          <PortfolioItem img={ourworld}/>
          <PortfolioItem img={poetik} link="http://poetik.juniordev.tech/" />
          <PortfolioItem img={pineapple} link="https://newslettertask.000webhostapp.com/index.php?page=index" />
          <PortfolioItem img={weatherapp} link="https://lailal88.github.io/weather/" />
          <PortfolioItem img={todolist} link="https://lailal88.github.io/reacttodo/" />
          <PortfolioItem img={keeper} link="https://lailal88.github.io/keeper/" />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
