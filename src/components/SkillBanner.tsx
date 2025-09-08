import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import {skills} from "../constants/constant"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function SkillBanner() {
 
  useGSAP(()=>{
    const skillsBanner = document.querySelector('.skill-banner')
    const lengthOfBanner = skillsBanner?.getBoundingClientRect().width as number
    const percentOfLength = (lengthOfBanner/2)/lengthOfBanner * (100)

    // console.log(skillsBanner)
    const anim = gsap.to('.skill-banner',{scrolltrigger:{trigger:'.skill-banner'},xPercent: `-${percentOfLength}`,x:20,repeat:-1,duration:20,ease:'linear'})
    
  })

  return (
    <div className="skill-banner">
      {skills.map(skill=><span key={skill}>{skill}</span>)}
      {skills.map(skill=><span key={skill}>{skill}</span>)}
    </div>
  )
}

export default SkillBanner