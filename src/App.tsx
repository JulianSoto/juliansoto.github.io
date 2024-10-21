import type { Component } from 'solid-js';

import classes from './App.module.css';

const App: Component = () => {
  return (
    <div>
      <header class={classes.header}>
        <h1 class={classes.heading}>Julian soto</h1>
        <h2 class={classes.subheading}>Web developer</h2>
        <ul class={classes['info-list']}>
          <li>
            <a href="https://github.com/JulianSoto">github.com/JulianSoto</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/juliansotodev/">
              linkedin.com/in/juliansotodev
            </a>
          </li>
          <li>Mexico</li>
        </ul>
      </header>
      <main class={classes.main}>
        <div class={classes.wrapper}>
          <p>
            Hey! I am Julian Soto, a Web Developer with a strong foundation in
            JavaScript and TypeScript, dedicated to building robust and scalable
            applications. My expertise spans both front-end and back-end
            development, specializing in technologies such as HTML, CSS,
            React.js, and Node.js. I have a particular focus on creating
            seamless user experiences through effective user interface design
            and responsive web design.
          </p>
          <br />
          <p>
            I excel in reactive programming and RESTful API design, ensuring
            that my applications are not only efficient but also well-structured
            for optimal performance. Problem-solving is at the core of my work;
            while keeping up with the latest advancements in web technologies
            thanks to my passion for continuous learning, I strive to develop
            innovative solutions that maintain clean and evergreen code.
          </p>
          <br />
          <p>
            I'm always eager to apply my skills to create impactful software.
            Checkout my{' '}
            <a href="https://github.com/JulianSoto">Github profile</a> where I
            showcase some of my latest personal projects or send me a message
            through{' '}
            <a href="https://www.linkedin.com/in/juliansotodev/">Linkedin</a>{' '}
            where I will happily answer any of your question!
          </p>
        </div>
      </main>
    </div>
  );
};

export default App;
