import React from "react";
import styled from 'styled-components';
import Sidebar from "./components/Sidebar";
import { Route , Routes} from "react-router-dom";
// import Switch from '@material-ui/core/Switch';
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

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
          <Routes> 
             <Route path="/" element={<Homepage/>} />
             <Route path="/about" element={<Aboutpage/>} />
             <Route path="/resume" element={<Resume/>} />
             <Route path="/portfolio" element={<Portfolio/>} />
             <Route path="/contact" element={<Contact/>} />
            
          </Routes>
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
