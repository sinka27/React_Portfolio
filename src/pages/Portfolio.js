import React from "react";
import Project from "../components/Project";
import { Row, Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container'

import artsea from '../images/artsea.png';
import movie from '../images/MovieMadness.png';
import codeQuiz from '../images/CodeQuiz.png';
import noteTaker from '../images/noteTaker.png';

export default function Portfolio() {
  // loop through porject info, pass in data as props and render a card for each project
  const proj = [
    {
      name: 'ArtSea', 
      img:   artsea,
      github: "https://github.com/bdibil/PNW-ArtSea",
      link: 'https://artsea-2022.herokuapp.com/'
    }, 
    {
      name: 'MovieMadness', 
      img: movie, 
      github: "https://github.com/BUButtercup/MovieMadness",
      link: 'https://bubuttercup.github.io/MovieMadness/'
    },
    {
      name: 'Code Quiz', 
      img: codeQuiz,
      github: "https://github.com/sinka27/Code_Quiz",
      link: 'https://sinka27.github.io/Code_Quiz/'
    }, 
    {
      name: 'Note Taker', 
      img: noteTaker,
      github: "https://github.com/sinka27/Note_Taker",
      link: 'https://note-taker-parul.herokuapp.com'
    }
  ]
  return (
    <Container className="content ">
      <Row xs={1} md={2} className="g-2">
      {proj.map((project, index) => (
        <Col>
          <Project key={index} name={project.name} img={project.img} description={project.description} link={project.link}/>
        </Col>
      ))}
    </Row>
    
    </Container>
    
  );
}