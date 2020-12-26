import './App.css';
import React from 'react';
import Particles from 'react-particles-js';
import { Pane, Button } from 'evergreen-ui'
import Card from 'react-bootstrap/Card';
import Carousel from "react-elastic-carousel";
import Item from "./Item";

// social media icons
import git from './assets/social_media/github_logo.png';
import fb from './assets/social_media/facebook_logo.png';
import mail from './assets/social_media/gmail_logo.png';
import link from './assets/social_media/linkedin_logo.png';

// title icons
import name from './assets/my_name.gif';
import logo from './assets/my_logo.png';

// side project icons
import pw from './assets/projects/personal_site.png';
import sc from './assets/projects/sportcred.png';
import tg from './assets/projects/translation_game.png';
import ms from './assets/projects/mock_shell.png';

const breakPoints = [
  { width: 550, itemsToShow: 1, itemsToScroll: 1 }
];

export default function App() {
  return (
    <div className="App" >
      <ul class="navbar">
        <li><a href="#sideprojects">projects</a></li>
        <li><a href="#selectexperiences">experience</a></li>
        <li><a href="#aboutme">about me</a></li>
        <li><a href="#">home</a></li>
        <img class="logo" src={logo} width="40" height="40"></img>
      </ul>

      <Particles className="snow"
        params={{
          "particles": {
            "number": {
              "value": 300,
              "density": {
                "enable": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "speed": 4,
                "size_min": 1,
                "size_max": 5
              }
            },
            "line_linked": {
              "enable": false
            },
            "move": {
              "random": true,
              "speed": 1,
              "direction": "top",
              "out_mode": "out"
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": false
              }
            }
          }
        }} />

      <div className="intro">
        <img src={name} alt="myname!" />
      </div>

      <div className="text">
        <Pane
          className="resume-effect"
          height={50}
          width={430}
          display="flex"
          background="#9f5f80"
          opacity={0.7}
          borderTopLeftRadius={5}
          margin="auto"
          marginTop={20}
          borderTopRightRadius={5}
          borderBottomLeftRadius={5}
          borderBottomRightRadius={5}
          elevation={1}
          float="center"
          alignItems="center"
          justifyContent="center">

          <Button
            is="a" href='https://drive.google.com/file/d/1y1Bx93akLQTKsSh3GPg1ueAMFtJZ341W/view?usp=sharing'
            className="resume"
            appearance="minimal"
            size={500}
            fontSize={23}>
            <div className="effect">
              {'\u2728'} click here to view my resume! {'\u2728'}
            </div>
          </Button>
        </Pane>
      </div>

      <div className="wrapper">
        <Pane
          width={1250}
          height={2850}
          display="flex"
          background="#ffe9d6"
          opacity={0.7}
          borderTopLeftRadius={5}
          margin="auto"
          marginTop={20}
          borderTopRightRadius={5}
          borderBottomLeftRadius={5}
          borderBottomRightRadius={5}
          elevation={2}
          float="center"
          alignItems="center"
          justifyContent="center">


          <div className="titles">
            <ul class="names">
              <li class="about" id="aboutme">ABOUT ME</li>
              <li class="sel" id="selectexperiences">SELECT EXPERIENCE</li>
              <li class="side" id="sideprojects">SIDE PROJECTS</li>
            </ul>

          </div>

          <div className="introduction">
            <Pane
              className="intro-effect"
              width={930}
              height={480}
              display="flex"
              background="linear-gradient(to right, #ffd5cd, #efbbcf, #c3aed6, #8675a9)"
              opacity={0.95}
              borderTopLeftRadius={8}
              margin="auto"
              borderTopRightRadius={8}
              borderBottomLeftRadius={8}
              borderBottomRightRadius={8}
              elevation={3}
              float="left"
              alignItems="start">

              <p class="para"> Hiya! My name is Yara Radwan. Welcome! 😺 <br /><br />I am currently a second year
        Computer Science Co-op student at the University of Toronto, with a
        specialist in Software Engineering and a major in Statistics. <br /> (current cGPA: 3.95) <br /><br />

        My hobbies include listening to music, playing with my cat (😻), exercising and
        of course, coding! I was able to combine my love for CS and helping others by working as a Teaching Assistant
        for <a href="https://utsc.calendar.utoronto.ca/course/csca08h3">CSCA08</a> this fall. <br /><br />

        I have experience in: Python, C, Java, React, Neo4j, MongoDB. Please enjoy my website! 😸
        <br /> <br />~ Yara 🌸
        </p>
            </Pane>
          </div>

          <div className="select">
            <Pane
              className="exp-effect"
              width={1100}
              height={1050}
              display="flex"
              background="rgb(83, 235, 255, 0)"
              borderTopLeftRadius={8}
              margin="auto"
              borderTopRightRadius={8}
              borderBottomLeftRadius={8}
              borderBottomRightRadius={8}
              float="left"
              alignItems="start">

              <Card class="ta">
                <Card.Header class="uoft"> <span class="uoft-title"> University of Toronto</span><p class="name1">SEP 2020 - DEC 2020</p></Card.Header>
                <Card.Body>
                  <Card.Title class="position"> <span class="uoft-ta">Teaching Assistant</span></Card.Title>
                  <Card.Title class="subject"><span class="uoft-subject">PYTHON</span></Card.Title>
                  <Card.Text class="uoft-desc">
                    <p class="ta-desc"> In the fall semester, I was offered to TA CSCA08 (Introduction to Computer Science), a course taken by <br />
            first year Computer Science students. Some of my responsibilities included attending lectures and <br /> helping students complete weekly worksheets,
            answering questions on Piazza, as well as invigilating <br /> and grading the midterms and the final exam. <br />I had a wonderful time being a Teaching Assistant and I hope
            to do it again in the future! </p>
                  </Card.Text>
                  <div class="linka08">
                    <a class="a08" href="https://www.utsc.utoronto.ca/~atafliovich/csca08/index.html">LEARN MORE ABOUT CSCA08</a> </div>
                </Card.Body>
              </Card>

              <Card class="femin">
                <Card.Header class="feminstem"><span class="feminstem-title">FeminSTEM</span><p class="name2">AUG 2020</p></Card.Header>
                <Card.Body>
                  <Card.Title class="femposition"><span class="fem-mentor">Mathematics Mentor</span></Card.Title>
                  <Card.Title class="topic"><span class="femin-subject1">PROBABILITY</span> <span class="femin-subject2">ESTIMATION</span></Card.Title>
                  <Card.Text class="fem-desc">
                    <p class="mentor-desc">In the summer of 2020, I was offered to be a Mathematics Mentor for FeminSTEM, an initiative made <br />
            to introduce high school girls to the vast and diverse world of STEM. As a Mathematics mentor, I was responsible for preparing
            and delivering a 2 hour jam-packed lesson filled with probability and <br />
            estimation galore! I had a great time showing the girls how fun mathematics can be, and I hope to
            <br /> return to mentoring next summer!
            </p>
                  </Card.Text>
                  <div class="linkfem">
                    <a class="fem" href="https://www.feminstem.ca/">LEARN MORE ABOUT FEMINSTEM</a> </div>
                </Card.Body>
              </Card>

              <Card class="comtel">
                <Card.Header class="commarket"><span class="comtel-title">Comtel Marketing</span><p class="name3">JUN 2019 - AUG 2019</p></Card.Header>
                <Card.Body>
                  <Card.Title class="composition"><span class="sales">Sales Associate</span></Card.Title>
                  <Card.Text class="com-desc">
                    <p class="sales-desc"> My first part-time job was at Comtel Marketing, located at the heart of downtown Toronto. As a <br /> Sales Associate,
            I was responsible for selling the Globe and Mail Newspaper subscriptions, and later <br /> on, I would work on projects to earn
            past subscibers back. I was the youngest worker, and yet, I <br />continually surpassed my managers' expectations! I was gifted an award for
            being the top seller <br /> of the week thrice within the 3 months I worked there! This job really helped me develop confidence
            in<br /> my communication ability, and I learned about how to be a persuasive and charasmatic seller just with <br /> my voice!
            It was truly an honor to work at Comtel, and I will forever take the skills I learned there <br /> wherever I go!
            </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Pane>
          </div>

          <div className="showcase">
            <Pane
              className="side-effect"
              width={1100}
              height={800}
              display="flex"
              background="rgb(255, 255, 255,0)"
              borderTopLeftRadius={8}
              margin="auto"
              borderTopRightRadius={8}
              borderBottomLeftRadius={8}
              borderBottomRightRadius={8}
              float="left"
              alignItems="start">
              <Carousel breakPoints={breakPoints}>
                <Item> <a href="#popup1" class="slidetitle"><p class="labels">PERSONAL SITE</p></a> <img position="absolute" border="0" alt="personalwebsite" src={pw} width="900" height="700" /> </Item>
                <Item> <a href="#popup2" class="slidetitle"><p class="labels">SPORTCRED</p></a> <img position="absolute" border="0" alt="sportcredproj" src={sc} width="900" height="700" />  </Item>
                <Item> <a href="#popup3" class="slidetitle"><p class="labels">UNIX SHELL</p></a> <img position="absolute" border="0" alt="mockshell" src={ms} width="900" height="700" /> </Item>
                <Item> <a href="#popup4" class="slidetitle"><p class="labels">TRANSLATION GAME</p></a> <img position="absolute" border="0" alt="game" src={tg} width="900" height="703" /> </Item>
              </Carousel>



              <div id="popup1" class="overlay">
                <div class="popup">
                  <h2>🦋 MY PERSONAL WEBSITE 🦋</h2>
                  <a class="close" href="#sideprojects">&times;</a>
                  <p class="content">
                    My personal website is created with <span class="tech">React</span>. I believe that a website
      is a great medium <br /> to explore your creative side and showcase your technical skills! I had a blast
      styling my <br /> website and using what I learned from my courses to create something of my own. I hope you
      <br /> enjoy my own little home as much as I do. 😊
		</p>
                  <div className="projectlink">
                    <a href="https://github.com/radwin01/personal-website">
                      <img class="links" border="0" alt="github" src={git} width="70" height="70" />
                    </a></div>
                </div>
              </div>

              <div id="popup2" class="overlay">
                <div class="popup">
                  <h2>🏀 SPORTCRED 🏀</h2>
                  <a class="close" href="#sideprojects">&times;</a>
                  <p class="content">
                    SPORTCRED is a web-app created as part of a team project for CSCC01. This interactive app used <span class="tech">React</span>
                    <br />for frontend, <span class="tech">Java</span> for backend, and <span class="tech">Neo4j</span> as a graph database. Users can create an account,
      test their <br />knowledge by playing some head-to-head trivia, participate in debates, check out latest game information to <br />increase
      their analyst credibility score. This project was one of the highlights of the past four months, and the<br /> product owners were very
      pleased with the final product! 🏆
		</p>
                  <div className="projectlink">
                    <a href="https://github.com/radwin01/SPORTCRED">
                      <img class="links" border="0" alt="github" src={git} width="70" height="70" />
                    </a></div>
                </div>
              </div>

              <div id="popup3" class="overlay">
                <div class="popup">
                  <h2>💻  MOCK UNIX SHELL 💻 </h2>
                  <a class="close" href="#sideprojects">&times;</a>
                  <p class="content">
                    This bash shell is created as part of a team project for CSCB07. Created with <span class="tech">Java</span>, this shell replicate the shell all of us <br />
      computer scientists use daily! Use your favourite commands to build your very own filesystem from scratch! This project <br />
      allowed us to apply SOLID principles, scrum principles, and many of the design patterns that were taught in the course. 🪐
		</p>
                  <div className="projectlink">
                    <a href="https://github.com/radwin01/MockUnixShell">
                      <img class="links" border="0" alt="github" src={git} width="70" height="70" />
                    </a></div>
                </div>
              </div>

              <div id="popup4" class="overlay">
                <div class="popup">
                  <h2>🍎 TRANSLATION GAME 🍌 </h2>
                  <a class="close" href="#sideprojects">&times;</a>
                  <p class="content">
                    I created this French-English game when I still a wee coder! This game was created with <span class="tech">Java</span> and its <span class="tech">GUI components</span>.
      <br />Test your French interpreter skills by writing the correct translation to the fruits that appear on your screen! This project <br />
      was what inspired me to pursue a career in Computer Science, and I have never looked back since! 🤓
		</p>
                  <div className="projectlink">
                    <a href="https://github.com/radwin01/TranslationGame">
                      <img class="links" border="0" alt="github" src={git} width="70" height="70" />
                    </a></div>
                </div>
              </div>
            </Pane>
          </div>
        </Pane>
      </div>

      <div className="end">
        <footer>
          <Pane
            className="leend"
            height={200}
            width={1000}
            display="flex"
            background="linear-gradient(to right, #ffd5cd, #efbbcf, #c3aed6, #8675a9)"
            opacity={0.7}
            margin="auto"
            marginTop={20}
            borderTopLeftRadius={5}
            borderTopRightRadius={5}
            borderBottomLeftRadius={5}
            borderBottomRightRadius={5}
            elevation={2}

            float="center"
            alignItems="center"
            justifyContent="center">

            <p> enjoyed your stay? 😉 {"  "}feel free to connect with me
        on the following platforms! <br />
            </p>

            <div className="endlinks">
              <a href="https://github.com/radwin01">
                <img class="links" border="0" alt="github" src={git} width="100" height="100" />
              </a>

              <a href="https://www.linkedin.com/in/yara-r-81b044135/">
                <img class="links" border="0" alt="linkedin" src={link} width="100" height="100" />
              </a>

              <a href="https://www.facebook.com/yr.rdwn011009/">
                <img class="links" border="0" alt="facebook" src={fb} width="104" height="104" />
              </a>

              <a href="mailto:y9rdwn0110@gmail.com">
                <img class="links" border="0" alt="gmail" src={mail} width="100" height="100" />
              </a>

            </div>
          </Pane>
        </footer>
      </div>

      <div className="credits">
        <p> my personal website was created with React and is hosted on Netlify,
        with special help from Evergreen-UI, React Bootstrap and Textanim. <br /><br />
        Copyright © 2021 Yara Radwan
      </p>
      </div>

    </div>
  );
}
