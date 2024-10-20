import 'bootstrap/dist/css/bootstrap.min.css';

import TopNav from "./TopNav/TopNav.jsx"
import "./TopNav/TopNav.scss"
import "./TopNav/themeChanger.scss"

import Intro from "./Intro/Intro.jsx"
import "./Intro/Intro.scss"

import Projects from "./Projects/Projects.jsx"
import "./Projects/Projects.scss"

import Footer from "./Footer/Footer.jsx"
import "./Footer/Footer.scss"

function App() {
   return (
      <>
      <TopNav /> 
      <Intro />
      <Projects /> 
      <Footer />
      </>
   );
}

export default App
