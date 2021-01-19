import './App.css';
import React from 'react';
import Particles from 'react-particles-js';
import { Pane } from 'evergreen-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Carousel from "react-elastic-carousel";
import Item from "./Item";

// social media icons
import git from './assets/social_media/github_logo.png';

import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// title icons
import name from './assets/my_name.gif';
import logo from './assets/my_logo.png';

// side project icons
import pw from './assets/projects/personal_site.png';
import eh from './assets/projects/elle_hacks.png';
import sc from './assets/projects/sportcred.png';
import tg from './assets/projects/translation_game.png';
import ms from './assets/projects/mock_shell.png';
import pb from './assets/projects/party_bot.png';

const breakPoints = [
  { width: 550, itemsToShow: 1, itemsToScroll: 1 }
];

export default function App() {
  return (
    <div className="App">
      <ul class="navbar">
        <li><a href="#contact">contact me</a></li>
        <li><a href="#sideprojects">projects</a></li>
        <li><a href="#selectexperiences">experience</a></li>
        <li><a href="#aboutme">about me</a></li>
        <li><a href="#">home</a></li>
        <img class="logo" src={logo}></img>
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
        <img src={name} class="slogan" alt="myname!" />
      </div>

      <div className="text">
        <Pane
          className="resume-effect"
          display="flex"
          position="relative"
          background="#9f5f80"
          opacity={0.7}
          borderTopLeftRadius={5}
          borderTopRightRadius={5}
          borderBottomLeftRadius={5}
          borderBottomRightRadius={5}
          elevation={1}
          float="center"
          alignItems="center"
          justifyContent="center">

          <a class="resume" href='https://drive.google.com/file/d/1gNy2WuHP2NsJb5KwRedKhRkFNlLSzry-/view?usp=sharing'>
            {'\u2728'} click here to view my resume! {'\u2728'}
          </a>

        </Pane>
      </div>

      <div className="wrapper">
        <Pane
          className="cover"
          display="flex"
          position="relative"
          background="#ffe9d6"
          opacity={0.7}
          borderTopLeftRadius={5}
          borderTopRightRadius={5}
          borderBottomLeftRadius={5}
          borderBottomRightRadius={5}
          elevation={2}>

          <ul class="components">
            <li class="about-title">
              <div className="titles">
                <p class="about" id="aboutme">ABOUT ME</p>
              </div>
            </li>

            <li className="introduction">
              <Pane
                className="intro-effect"
                background="linear-gradient(to right, #ffd5cd, #efbbcf, #c3aed6, #8675a9)"
                opacity={0.95}
                borderTopLeftRadius={8}
                margin="auto"
                borderTopRightRadius={8}
                borderBottomLeftRadius={8}
                borderBottomRightRadius={8}
                elevation={3}
                float="center"
                alignItems="center">
                <p class="para"> Hiya! My name is Yara Radwan. Welcome! 😺 <br /><br />I am currently a second year
        Computer Science Co-op student at the University of Toronto, with a
        specialist in Software Engineering and a major in Statistics. <br /> (current cGPA: <b>3.94</b> / 4.00) <br /><br />

        My hobbies include listening to music, playing with my cat (😻), exercising and
        of course, coding! I have recently been able to combine my love for programming and helping others by working as a Teaching Assistant
        for <a href="https://utsc.calendar.utoronto.ca/course/csca08h3">CSCA08</a> and <a href="https://utsc.calendar.utoronto.ca/course/csca48h3">CSCA48</a>. <br /><br/>

        Please enjoy my website! 😸
        <br /> <br />~ Yara 🌸
        </p>
              </Pane>
            </li>

            <li class="experience-title">
              <div className="titles">
              <p class="sel" id="selectexperiences">SELECT EXPERIENCE</p>
              </div>
            </li>

              <li class="ta">
                <div class="uoft"> <p class="uoft-title"> University of Toronto <span class="name1">SEP 2020 - APR 2021</span ></p> </div>
              </li>
              <li class="position"> <span class="uoft-ta">Teaching Assistant</span> </li>
              <li class="ta-desc"> <p class="uoft-desc">In the fall semester, I was offered to TA CSCA08 (Introduction to Computer Science I), a course taken by
            first year Computer Science students. Some of my responsibilities included: attending lectures and helping students complete weekly worksheets,
            answering questions on Piazza, invigilating and grading the midterms and the final exam. I had a wonderful time being a Teaching Assistant and I
            am very looking forward to TA-ing CSCA48 (Introduction to Computer Science II) in the upcoming winter semester! <br /> <br /></p>
            <div class="linka08">
                    <a class="a08" href="https://www.utsc.utoronto.ca/~atafliovich/csca08/index.html">LEARN MORE ABOUT CSCA08</a> </div>
             </li>

             <li class="femin">
                <div class="feminstem"><p class="feminstem-title">FeminSTEM <span class="name2">AUG 2020</span></p></div>
              </li>
              <li class="femposition"> <span class="fem-mentor">Mathematics Mentor</span> </li>
              <li class="fem-desc"> <p class="mentor-desc">In the summer of 2020, I was offered to be a Mathematics Mentor for FeminSTEM, an initiative made 
                    to introduce high school girls to the vast and diverse world of STEM. As a Mathematics mentor, I was responsible for preparing 
                    and delivering a 2 hour, jam-packed lesson filled with probability and estimation galore! I had a great time showing the girls how fun mathematics can be, and I hope to 
                    return to mentoring next summer! <br /> <br /> </p>
            <div class="linkfem">
            <a class="fem" href="https://www.feminstem.ca/">LEARN MORE ABOUT FEMINSTEM</a> </div>
             </li>

             <li class="comtel">
                <div class="commarket"> <p class="comtel-title">Comtel Marketing <span class="name3">JUN 2019 - AUG 2019</span ></p> </div>
              </li>
              <li class="composition"> <span class="sales">Sales Associate</span> </li>
              <li class="com-desc"> <p class="sales-desc">My first part-time job was at Comtel Marketing, located at the heart of downtown Toronto. As a Sales Associate,
            I was responsible for selling the Globe and Mail Newspaper subscriptions, and later on, I worked on projects to earn
            past subscibers back. I was the youngest employee, and yet, I continually surpassed my managers' expectations! I was gifted an award for
            being the top seller of the week thrice within the 3 months I worked there! This job really helped me develop confidence
            in my communication ability, and I learned about how to be a persuasive and charasmatic seller just with my voice!
            It was truly an honor to work at Comtel, and I will forever take the skills I learned there wherever I go!<br /></p>
             </li>

             <li class="side-title">
              <div className="titles">
                <p class="side" id="sideprojects">SIDE PROJECTS</p>
              </div>
            </li>

            <li className="showcase">
            <Pane
              className="side-effect"
              display="flex"
              background="rgb(255, 255, 255,0)"
              borderTopLeftRadius={8}
              margin="auto"
              borderTopRightRadius={8}
              borderBottomLeftRadius={8}
              borderBottomRightRadius={8}
              float="left"
              alignItems="start">
              <Carousel class="slides" breakPoints={breakPoints}>
              <Item> <a href="#popup6" class="slidetitle"><p class="labels">FINANCE SIMULATOR</p></a> <img class="sideimage" position="absolute" border="0" alt="partybot" src={eh}/> </Item>
                <Item> <a href="#popup5" class="slidetitle"><p class="labels">PARTYBOT</p></a> <img class="sideimage" position="absolute" border="0" alt="partybot" src={pb}/> </Item>
                <Item> <a href="#popup1" class="slidetitle"><p class="labels">THIS SITE!</p></a> <img class="sideimage" position="absolute" border="0" alt="personalwebsite" src={pw}/> </Item>
                <Item> <a href="#popup2" class="slidetitle"><p class="labels">SPORTCRED</p></a> <img class="sideimage" position="absolute" border="0" alt="sportcredproj" src={sc}/> </Item>
                <Item> <a href="#popup3" class="slidetitle"><p class="labels">UNIX SHELL</p></a> <img class="sideimage" position="absolute" border="0" alt="mockshell" src={ms}/> </Item>
                <Item> <a href="#popup4" class="slidetitle"><p class="labels">TRANSLATION GAME</p></a> <img class="sideimage" position="absolute" border="0" alt="game" src={tg}/> </Item>
              </Carousel>
            </Pane>
          </li>

         </ul>
         </Pane>

         <ul class="end-components">
         <li className="end" id="contact">
          <Pane
            className="leend"
            display="flex"
            background="linear-gradient(to right, #ffd5cd, #efbbcf, #c3aed6, #8675a9)"
            opacity={0.7}
            borderTopLeftRadius={5}
            borderTopRightRadius={5}
            borderBottomLeftRadius={5}
            borderBottomRightRadius={5}
            elevation={2}

            float="center"
            alignItems="center"
            justifyContent="center">
            <p class="enjoy"> enjoyed your stay? 😉 feel free to connect with me
        on the following platforms! <br />
            </p>
            <div className="endlinks">
              <a href="https://github.com/radwin01">
              <span className="first" ><FontAwesomeIcon className="icon" icon={faGithubSquare}/></span>
              </a>

              <a href="https://www.linkedin.com/in/yara-radwan/">
              <span ><FontAwesomeIcon className="icon" icon={faLinkedin}/></span>
              </a>

              <a href="https://www.facebook.com/yr.rdwn011009/">
              <span ><FontAwesomeIcon className="icon" icon={faFacebookSquare}/></span>
              </a>

              <a href="mailto:yara.radwan@mail.utoronto.ca">
              <span ><FontAwesomeIcon className="icon" icon={faEnvelope}/></span>
              </a>

            </div>
            </Pane>
            </li>
            <li className="credits">
        <p> my personal website was created with React and is hosted on Netlify,
        with special help from Evergreen-UI and Textanim. <br /><br />
        Copyright © 2021 Yara Radwan
      </p>
      </li>
         </ul>

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
                    <a href="https://github.com/radwin01/PersonalWebsite">
                    <span ><FontAwesomeIcon className="icon" icon={faGithub}/></span>
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
                    <span ><FontAwesomeIcon className="icon" icon={faGithub}/></span>
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
                    <span ><FontAwesomeIcon className="icon" icon={faGithub}/></span>
                    </a></div>
                </div>
              </div>

              <div id="popup4" class="overlay">
                <div class="popup">
                  <h2>🍎 TRANSLATION GAME 🍌 </h2>
                  <a class="close" href="#sideprojects">&times;</a>
                  <p class="content">
                    I created this French-English game when I still a wee coder! This game was created with <span class="tech">Java</span> and <span class="tech">GUI components</span>.
      <br />Test your French interpreter skills by writing the correct translation to the fruits that appear on your screen! This project <br />
      was what inspired me to pursue a career in Computer Science, and I have never looked back since! 🤓
		 </p>
                  <div className="projectlink">
                    <a href="https://github.com/radwin01/TranslationGame">
                      <span ><FontAwesomeIcon className="icon" icon={faGithub}/></span>
                    </a></div>
                </div>
                </div>

                <div id="popup5" class="overlay">
                <div class="popup">
                  <h2>🎉 PARTYBOT 🎉 </h2>
                  <a class="close" href="#sideprojects">&times;</a>
                  <p class="content">
                    My PartyBot is an exciting addition to any discord server! I created it with <span class="tech">Python</span> and <span class="tech">MongoDB</span>.
      <br />PartyBot currently allows you to play three fun-filled minigames against item, such as Rock Paper Scissors and a speed game of Twenty One.
     PartyBot also saves your points earned/lost in the mini games and displays it on a leaderboard to show off to your fellow server members! 🥳
		 </p>
                  <div className="projectlink">
                    <a href="https://github.com/radwin01/PartyBot-public">
                    <span ><FontAwesomeIcon className="icon" icon={faGithub}/></span>
                    </a></div>
                </div>
                </div>

                <div id="popup6" class="overlay">
                <div class="popup">
                  <h2>💵 FINANCE SIMULATOR 💵 </h2>
                  <a class="close" href="#sideprojects">&times;</a>
                  <p class="content">
                   Welcome to Finance Simulator [2021]. Once you enter, you will start off as a 16 year-old with a few dollars in savings. You will be given age-scenarios that will require you to make a financially concious decision and
                   that affects your annual income, expenses and savings. Once the simulation is complete, you will receive your final results and hopefully be inspired to take control of your financial situation! Made for ElleHacks 2021,
                  I worked on this product as part of a team and was in charge of front and back-end development (I used <span class="tech">React</span> and <span class="tech">Java Springboot</span>, BTW).
                  This was my very first hackathon, and I could not be more satisfied with the experience! Not only did I make new friends, but my team won the Rogers Custom Award for having the most innovative product! 💳 
		 </p>
                  <div className="projectlink">
                    <a href="https://github.com/radwin01/ellehacks2021">
                    <span ><FontAwesomeIcon className="icon" icon={faGithub}/></span>
                    </a></div>
                </div>
                </div>
                



                </div>

    </div>
  );
}
