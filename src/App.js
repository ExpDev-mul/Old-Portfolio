import './App.css';
import Page from './Page/Page.jsx';
import Circle from './Circle/Circle.jsx';
import { useEffect } from 'react';
import Row from './Row/Row.jsx';
import Contact from './Contact/Contact.jsx';
import Feedbacks from './Feedbacks/Feedbacks.jsx';

/* global TagCloud */

function App() {
  useEffect(() => {
    const texts = [
      'HTML5', 'CSS3', 'React.js', 'jQuery',
      'PHP', 'MySQL', 'Java',
      'Python', 'C++', 'Lua'
    ]


    TagCloud('.sphere', texts, {
      radius: 100,
      maxSpeed: 'normal',
      initSpeed: 'normal',
      direction: 0,
      keep: true
    })
    
    document.querySelector(".sphere").style.color = "rgb(155, 155, 155)"
  }, [])

  return (
    <>
      <Page index={0} backgroundColor={"rgba(0, 0, 0, 0)"} children={
        <>
          <h1 style={
            {
              color: "white",
              zIndex: "2",
              translate: "40px 20px",
            }
          }>Or Pinto</h1>
          <h3 style={
            {
              color: "rgb(145, 145, 145)",
              zIndex: "2",
              translate: "40px -8px",
              fontWeight: 700
            }
          }>Full Stack Web Developer</h3>
          <Circle x="300" y="90" color="rgba(125, 255, 125, 0.2)" radius="510"/>
          <Circle x="130" y="50" color="rgba(255, 50, 0, 0.2)" radius="390"/>
          <div className='sphere' style={{
            width: "200px",
            height: "400px",
            paddingLeft: "100px",
            paddingRight: "100px",
            backgroundColor: "rgba(0, 0, 0, 0)",
            marginLeft: "calc(50% - 200px)",
            borderRadius: "50%",
            zIndex: 5,
            position: "relative",
          }}><Circle x="200" y="200" color="rgb(0, 0, 0)" radius="600"/></div>
        </>
      }/>

      <Page index={1} backgroundColor={"rgb(0, 0, 0, 0)"} children={
        <>
          <h1 style={
            {
              color: "white",
              zIndex: "2",
              translate: "40px 20px",
            }
          }>Feedbacks</h1>
          <h3 style={
            {
              color: "rgb(145, 145, 145)",
              zIndex: "2",
              translate: "40px -5px",
              fontWeight: 500,
              textOverflow: "break-word",
              paddingRight: "35px",
            }
          }>I have been a Game Programmer for the past 4 years. About 2 years ago I began Full Stack Web Development.</h3>
          
          <Row title="Freelancer" content="Was a freelance Game Programmer completing commissions for numerous clients, contributing to tens of millions of visits and collaborating with elite developers." period="Sep 2022 - Aug 2023 • 6 mos"/>
          <Row title="BlockUp" content="Was contracted to fully-create a complex 3D game involving both front-end and back-end development. There was an emphasis on compatibility and optimization for low-end devices." period="Aug 2023 - Jan 2024 • 1 year"/>

          <Circle x="230" y="250" color="rgba(255, 125, 125, 0.2)" radius="590"/>
          <Circle x="130" y="50" color="rgba(255, 50, 125, 0.2)" radius="390"/>
        </>
      }/>

    <Page index={2} backgroundColor={"rgb(0, 0, 0, 0)"} children={
        <>
          <h1 style={
            {
              color: "white",
              zIndex: "2",
              translate: "40px 20px",
            }
          }>Clients</h1>
          <h3 style={
            {
              color: "rgb(145, 145, 145)",
              zIndex: "2",
              translate: "40px -5px",
              fontWeight: 500,
              textOverflow: "break-word",
              paddingRight: "45px",
            }
          }>While working as a Freelancer and beyond, I have worked with elite developers with some big names on many projects.</h3>
          
          <Feedbacks/>

          <Circle x="230" y="250" color="rgba(125, 125, 250, 0.2)" radius="590"/>
          <Circle x="130" y="50" color="rgba(125, 125, 50, 0.2)" radius="390"/>
        </>
      }/>

      <Page index={3} children={
        <>
          <h1 style={
            {
              color: "white",
              zIndex: "2",
              translate: "40px 20px",
              fontWeight: 700,
            }
          }>Contact</h1>
          <h3 style={
            {
              color: "rgb(145, 145, 145)",
              zIndex: "2",
              translate: "40px -5px",
              fontWeight: 500,
              textOverflow: "break-word",
              paddingRight: "35px"
            }
          }>More medias can be found on my LinkedIn profile, such as project videos, contact details and more.</h3>

          <Contact logo="linkedin" content="LinkedIn Profile" href="https://www.linkedin.com/in/or-pinto-815028319/"/>
          <Contact logo="github" content="GitHub Profile" href="https://github.com/ExpDev-mul"/>
          <Circle x="250" y="90" color="rgba(125, 255, 125, 0.2)" radius="610"/>
          <Circle x="250" y="250" color="rgba(125, 0, 125, 0.2)" radius="400"/>
        </>
      }/>
    </>
  );
}

export default App;