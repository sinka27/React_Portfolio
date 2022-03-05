import React from "react";
import styled from 'styled-components';
import Navigation from './Navigation';


//const App = () => <PortfolioContainer />;
function Sidebar() {
    return (
        <SidebarStyled>
            <Navigation />
            </SidebarStyled>
    )}

//customised div
const SidebarStyled = styled.div`
width: 16rem;
position:fixed;
height: 100vh;
background-color: var(--sidebar-dark-color)
`;
export default Sidebar;