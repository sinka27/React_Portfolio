import React from 'react';
import {  Button } from 'react-bootstrap'
import { MainLayout} from '../styles/Layouts';
import styled from 'styled-components';

function ResumePage() {
    return (
        <MainLayout>
          <AboutStyled>
            <h1>Skills</h1>
            <a href="https://drive.google.com/file/d/1TaEFiCsuSOhnjFIrJY7IjOJDGkOS_rYq/view?usp=sharing"><Button variant='secondary' role="button" className='resume'><i class="fa fa-file "></i> Download Resume!</Button></a>

            <h4>Front-end Proficiencies</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>jQuery</li>
              <li>React</li>
            </ul>
            <h4>Back-end Proficiencies</h4>
            <ul>
              <li>Node</li>
              <li>Express</li>
              <li>MYSQL - Sequelize</li>
              <li>MongoDB - Mongoose</li>
              <li>Graph QL</li>
            </ul>
          </AboutStyled>     
        </MainLayout>
    )
}
const AboutStyled = styled.section`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);    
    width: 80%;
    color: var(--sidebar-dark-color);
`;

export default ResumePage