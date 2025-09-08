import About from "./components/About/About"
import Hero from "./components/Hero/Hero"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"
import Contact from "./components/Contact/Contact"
import { useState } from "react"
import Footer from "./components/Footer"
import Intro from "./components/Intro/Intro"
import LoaderPage from "./components/LoaderPage/LoaderPage"


function App() {
    const [imageLoaded,setImageLoaded] = useState(false)
  
 return(
    <>
        <LoaderPage />
         <div className='root-container'> 
            <Hero setImageLoaded={setImageLoaded} imageLoaded={imageLoaded}/>
            <Intro imageLoaded={imageLoaded} /> 
             <About />  
             <Projects/> 
            <Skills/>
            <Contact/>
            <Footer/>
        </div> 
    </>
   
 )
}

export default App
