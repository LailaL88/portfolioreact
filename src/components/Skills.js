import html from '../img/html-file.png';
import css from '../img/css.png';
import js from '../img/js.png';
import bootstrap from '../img/bootstrap.png';
import react from '../img/react.png';
import php from '../img/php.png';
import figma from '../img/figma.png';
import invision from '../img/invision.png';
import wordpress from '../img/wordpress.png';
import elementor from '../img/elementor.png';
import border from '../img/border.png';

function Skills() {
  return (
    <section className="skills" id='skills'>
      <div className="container">
        <h1>Skills</h1>
        <p>
          During my learning I mostly fucused on standard <span>frontend technologies</span>,<br />
          <span>design tools</span> and <span>React.js</span> framework. I also know what PHP and MySQL
          are.
        </p>
        <div className="skill-icons">
            <img src={html} alt="html-icon" />
            <img src={css} alt="css-icon" />
            <img src={js} alt="js-icon" />
            <img src={react} alt="react-icon" />
            <img src={php} alt="php-icon" />
            <img src={wordpress} alt="wordpress-icon" />
            <img src={elementor} alt="elementor-icon" />
            <img src={bootstrap} alt="bootstrap-icon" />
            <img src={figma} alt="figma-icon" />
            <img src={invision} alt="invision-icon" />
        </div>
      </div>
      <img className='border' src={border} alt="section border" />
    </section>
  );
}

export default Skills;
