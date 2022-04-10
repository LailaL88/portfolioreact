import React from "react";

function About() {
  const text = React.useRef(null);
  const button = React.useRef(null);

  function expandText() {
    text.current.classList.toggle("expand-text");
    changeButtonText();
  }

  function changeButtonText() {
    if (button.current.innerText.toLowerCase() == "read more") {
        button.current.innerText = "Show less";
      } else {
        button.current.innerText = "Read more";
      }
  }

  return (
    <section className="about" id="about">
      <div className="container">
        <h1>About me</h1>
        <h2>On my way to master React.js</h2>
        <p className="about-text" ref={text}>
          At the beginning of this year I finished Riga Technical Universitie's
          study program- 'Modern web programming languages'. I also finished
          internship as afrontend developer at Piere.lv. The topics of the
          internship included: work with Figma, Github page, Pixel Perfect,
          Clickup, Slack, IDE editor, compiling SCSS, configuring WordPress,
          work with domains and subdomains, implementing responsiveness, work
          with version control system, browser developer tools, CSS framework,
          development of custom WordPress theme, semantics, image sprites and
          other. Custom WordPress theme was developed, using Advanced Custom
          Fields and Contact Form 7 plugins. I know HTML and CSS (flex,
          Bootstrap) very well and JavaScript to a certain extent (incl. arrow
          functions, ternary operator, destructuring, spread operator), PHP
          (OOP, MVC), MySql, CSS animations (transitions, animations,
          transform). I have created pixel-perfect responsive layouts based on
          Figma, Invisionapp and Photoshop design files (I believe I could learn
          other design tools fast if needed). I know basics of React, some SASS
          (variables, mixins, includes, nesting), Chrome developer tools, Git
          (merge, branch, push, pull, commit, add, status, clone, checkout), Git
          Bash and Github, putting files on a server (C-panel, file manager,
          fixing file paths). The lastest projects I worked on were created
          using React.js. I speak English and Latvian very well. I truly wish to
          learn and improve as a developer.
        </p>
        <button ref={button} className="button" onClick={expandText}>
          <span>Read more</span>
        </button>
      </div>
    </section>
  );
}

export default About;
