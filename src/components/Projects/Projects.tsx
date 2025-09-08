import { useRef, useState } from "react"
import CardProject from "../CardProject"
import leftArrow from '../../assets/left-arrow-svgrepo-com (1).svg'
import rightArrow from '../../assets/right-arrow-svgrepo-com (1).svg'
import downArrow from '../../assets/downarrow.svg' 
import { seeProjectsText } from "../../constants/constant"
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import { projects } from "../../constants/constant"
// import './projects.css'


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
  function getSlidingWidth(){
    const projectContainer = document.querySelector('.overall-project-div')
    const slide = document.querySelector('.slide')
    const scrollWidth = projectContainer?.getBoundingClientRect().width;
   
    return scrollWidth ? scrollWidth - 70 : 100
    
   
  }

  function checkLastSlide(){
    const projectContainer = document.querySelector('.overall-project-div');

    const slide = document.querySelector('.slide');

    const scrollWidth = projectContainer?.getBoundingClientRect().width
    const projectContainerEdge = projectContainer?.getBoundingClientRect().right
    const slideEdge = slide?.getBoundingClientRect().right
    
    if(slideEdge && projectContainerEdge){
      return slideEdge < projectContainerEdge 
    }
  }
  checkLastSlide()

  useGSAP(()=>{
   gsap.from('.text-anim',{opacity:0.06,scrollTrigger:{trigger:'.check-out-proj-div',start:'top center',end:'bottom center',scrub:1,onRefresh:()=>getSlidingWidth()},stagger:0.07})

  },{scope:projectContainer})
  
  return (
    <div className="project-section" ref={projectContainer} id='projects'>
      <div className="check-out-proj-div">
        <div className="text-container">
          {seeProjectsText.split(' ')
          .map((text,i)=>
          (<div key={text}>
            {
              text.split('').map((text,i)=><span className="text-anim" key={i}>{text}</span>)
            } 
            </div>
          )
        )}
        
        </div>
        <div className="text-anim down-arrow" ><img src={downArrow} alt="downarrow" /></div>
      </div>
      <div className="overall-project-div">
        <div  className="btn-slide-left"onClick={()=>handleLeft()}>
          <img src={leftArrow} alt="left-arrow-icon" />
        </div>
        <div className="project-container">
          <div className="slide" style={{transform:`translateX(${slide * getSlidingWidth()}px)`}}>
            {projects.map(proj=>
              <CardProject key={proj.name} link={proj.links} img={proj.img} name={proj.name} overview={proj.overview}/>)
            }
          </div>
        </div>
        <div className="btn-slide-right" onClick={()=>handleRight()}>
        <img src={rightArrow} alt="left-arrow-icon" />
        </div>
      </div>
    </div>
    
    
  )
}

export default Projects