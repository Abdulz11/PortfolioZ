import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import {skills} from "../constants/constant"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function SkillBanner() {
 
  useGSAP(()=>{
   
    const anim = gsap.to('.skill-banner',{scrolltrigger:{trigger:'.skill-banner'},xPercent:-49.2,repeat:-1,duration:20,ease:'linear'})
    
  })

  return (
    <div className="skill-banner">
      {skills.map(skill=><span key={skill}>{skill}</span>)}
      {skills.map(skill=><span key={skill}>{skill}</span>)}
    </div>
  )
}

export default SkillBanner