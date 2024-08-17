import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {aboutMe} from '../constants/constant'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useRef} from 'react'

gsap.registerPlugin(ScrollTrigger)

function About() {
 
  const aboutContainer = useRef<HTMLDivElement>(null)
    
  useGSAP(()=>{
     gsap.timeline({scrollTrigger:{trigger:aboutContainer.current,
      start:'top 10%',
      end:'+=100',
      pin:true,
      onLeave:(self)=>{
        self.disable()
        self.scroll(self.start);	
        ScrollTrigger.refresh()
      }
    }})
    .pause()
   .from('.about-section h1 span',{y:400,stagger:0.09,})
   .from('.about-section p span',{y:600,stagger:0.09,},'<+=0.3')
   
  },{scope:aboutContainer})

  return (
    <section className='about-section'>
      <div id="about" className="about-div" ref={aboutContainer}>
        <div className="title">
          <h1 style={{overflow:'hidden'}}>{aboutMe.title.split('').map((letter,i)=><span className='text-anim' key={i}>{letter}</span>)}</h1>
        </div>
        <div className="text">
          <div>
            {aboutMe.comment.split(/\.|\?|\!/).map((line,i)=>
            <p key={i} style={{overflow:'hidden'}}>
              <span className='text-anim' >{line}</span>
            </p>
              )}
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default About