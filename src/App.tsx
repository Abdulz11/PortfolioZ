import About from "./components/About"
import Hero from "./components/Hero"
// import Intro from "./components/Intro"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import { useState } from "react"
import Footer from "./components/Footer"
import Intro from "./components/Intro"
import LoaderPage from "./components/LoaderPage"


function App() {
    const [imageLoaded,setImageLoaded] = useState(false)
  
 return(
    <>
        <LoaderPage />
        <div className='root-container'>
            <Hero setImageLoaded={setImageLoaded} />
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
