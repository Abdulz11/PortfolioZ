import { useRef, useState } from "react"
import CardProject from "./CardProject"
import leftArrow from '../assets/left-arrow-svgrepo-com (1).svg'
import rightArrow from '../assets/right-arrow-svgrepo-com (1).svg'
import downArrow from '../assets/downarrow.svg' 
// import arrowDown from '../assets/arrowdown.png'
import { seeProjectsText } from "../constants/constant"
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import { projects } from "../constants/constant"

function Projects() {
  const [slide,setSlide] = useState(0)
  const projectContainer = useRef<null | HTMLDivElement>(null)

  function handleRight(){
    if(checkLastSlide())return
    setSlide(prev=>prev - 1)
  }

  function handleLeft(){
    if(slide === 0) return
    setSlide(prev=>prev + 1)
  }

  function checkLastSlide(){
    const container = document.querySelector('.project-container')
    const slide = document.querySelector('.slide')
    const containerEdge = container?.getBoundingClientRect().right
    const slideEdge = slide?.getBoundingClientRect().right
    if(slideEdge && containerEdge){
      return slideEdge < containerEdge 
    }
  }

  useGSAP(()=>{
   gsap.from('.text-anim',{opacity:0.06,scrollTrigger:{trigger:'.check-out-proj-div',start:'top center',end:'bottom center',scrub:1},stagger:0.07})

  },{scope:projectContainer})
  
  return (
    <div className="project-section" ref={projectContainer} id='projects'>
      <div className="check-out-proj-div">
        <h3>
          {seeProjectsText.split('').map((text,i)=><span className="text-anim" style={{minWidth:'10px',minHeight:'10px'}} key={i}>{text}</span>)}
        </h3>
        <div className="text-anim" style={{paddingTop:'70px'}}><img src={downArrow} alt="downarrow" /></div>
      </div>
      <div className="overall-project-div">
        <div onClick={()=>handleLeft()} style={{cursor:'pointer',width:'70px',backgroundColor:'white',}}>
          <img src={leftArrow} alt="left-arrow-icon" />
        </div>
        <div className="project-container">
          <div className="slide" style={{transform:`translateX(${slide * 500}px)`}}>
            {projects.map(proj=>
              <CardProject key={proj.name} link={proj.links} img={proj.img} name={proj.name} overview={proj.overview}/>)
            }
          </div>
        </div>
        <div onClick={()=>handleRight()} style={{cursor:'pointer',width:'70px',backgroundColor:'white',}}>
        <img src={rightArrow} alt="left-arrow-icon" />
        </div>
      </div>
    </div>
    
    
  )
}

export default Projects