import SkillBanner from "../SkillBanner"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import {useRef,useEffect,useState} from 'react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
// import './skills.css'

gsap.registerPlugin(ScrollTrigger)

function Skills() {
    const [letterDiv,setLetterDiv]= useState<string>('Skills') 

    useGSAP(()=>{
        let text = document.querySelector('.skills-section .title h1')! as HTMLHeadingElement
        text.style.overflow = 'hidden'
         
        gsap.from('.title h1 span',{y:100,stagger:0.07,duration:1,scrollTrigger:{trigger:'.skills-section .title h1',start:'bottom 90% '}})    
    },{scope:".skills-section"})

    return (
        <section className='skills-section'>
            <div id="skills" className="skills-div">
                <div className="title">
                    <h1>{letterDiv.split('').map((letter,i)=>
                        <span key={i} className="text-anim">{letter}</span>)}
                    </h1>
                </div>
                <div className="banner-div">
                   <SkillBanner/>
                </div>
            </div>
        </section>
    )
}

export default Skills