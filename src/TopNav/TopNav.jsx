import React, {useState} from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Cookies from 'js-cookie';
import "../index.scss"

function TopNav(){

    const [icon, setIcon] = useState('bi bi-sun'); 
    const [darkMode, setDarkMode] = useState(true); 

    // Theme Changer Function
    const changeTheme = () => {
        // Initialise Light Theme
        if (darkMode) {
            // Set colors for light theme
            document.documentElement.style.setProperty('--primary-color', '#ff8edf');
            document.documentElement.style.setProperty('--background-color', '#FFF');
            document.documentElement.style.setProperty('--primary-text-color', '#000');
            document.documentElement.style.setProperty('--secondary-text-color', '#555');
            document.documentElement.style.setProperty('--primary-border-color', '#E5E5E5');
            document.documentElement.style.setProperty('--opposite-color', '#000');
            document.documentElement.style.setProperty('--button-box-shadow', 'none');
            document.documentElement.style.setProperty('--box-shadow', 'none');
            document.documentElement.style.setProperty('--box-shadow-hover', 'none');
            document.documentElement.style.setProperty('--active-background-bg', '#ff8edf');

            
            // Set Dark Mode to False
            setDarkMode(false);
            Cookies.set('userTheme', 'light', {expires: 365 * 100}); 

            // Set Icon to Moon
            setIcon('bi bi-moon');
        // Initialise Dark Theme
        } else {
            // Set colors for dark theme
            document.documentElement.style.setProperty('--primary-color', '#ff8edf');
            document.documentElement.style.setProperty('--background-color', '#000');
            document.documentElement.style.setProperty('--primary-text-color', '#fcdcf3');
            document.documentElement.style.setProperty('--secondary-text-color', '#8c8d8e');
            document.documentElement.style.setProperty('--primary-border-color', '#111');
            document.documentElement.style.setProperty('--opposite-color', '#FFF');
            document.documentElement.style.setProperty('--button-box-shadow', '0 0 10px rgba(25, 0, 255, 0.6), 0 0 20px rgba(0, 123, 255, 0.4), 0 0 30px rgba(0, 123, 255, 0.2)');
            document.documentElement.style.setProperty('--box-shadow', '0 0 10px rgba(25, 0, 255, 0.15), 0 0 20px rgba(0, 123, 255, 0.1), 0 0 30px rgba(0, 123, 255, 0.05)');
            document.documentElement.style.setProperty('--box-shadow-hover', '0 0 20px rgba(25, 0, 255, 0.25), 0 0 3px rgba(0, 123, 255, 0.2), 0 0 40px rgba(0, 123, 255, 0.15)');
            document.documentElement.style.setProperty('--active-background-bg', '#000');

            // Set Dark Mode to True
            setDarkMode(true);
            Cookies.set('userTheme', 'dark', {expires: 365 * 100}); 

            // Set icon to Sun
            setIcon('bi bi-sun');
        }
    };

    return(
        <Navbar className="navBar" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand className="logo" href="#home">dylan wilson</Navbar.Brand>
                <Navbar.Toggle className="navCollapse" aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className="link" href="https://github.com/dhil1512/" target="_blank">GitHub</Nav.Link>
                </Nav>
                <button className="themeChangerBtn" onClick={() => changeTheme()}>
                    <i className={icon}></i>
                </button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  );
};

export default TopNav