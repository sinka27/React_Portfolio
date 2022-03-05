import React from "react";
import styled from 'styled-components';
import Sidebar from "./components/Sidebar";
// import { Route } from "react-router-dom";
// import Switch from '@material-ui/core/Switch';
import Homepage from "./pages/Homepage";


function App() {
    return (
        <div className = "App">
             <Sidebar />
        <MainContentStyled>
        <div className="lines">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
            <div className="line-4"></div>
          </div>
          <Homepage />
          {/* <Switching> */}
            {/* <Route path="/" exact>
              <HomePage />
            </Route> */}
            {/* <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/resume" exact>
              <ResumePage />
            </Route>
            <Route path="/portfolios" exact>
              <PortfoliosPage />
            </Route>
            <Route path="/contact" exact>
              <ContactPage />
            </Route> */}
          {/* </Switching> */}
            </MainContentStyled>
        </div>
       
    )}

//customised div
const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  background-color: whitesmoke;
  /* @media screen and (max-width:1200px){
    margin-left: 0;
  } */
  .lines{
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: red;
    }
  }
`;
export default App;
