import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import heroImage from '../assets/480px-Circle_Ring_free_icon.svg.png'
import gsap from 'gsap'
import { useRef} from 'react'

gsap.registerPlugin(ScrollTrigger)

// span style
const spanStyles = {
  display:'inline-block',
  margin:'0 5px'
}

function Hero(props:{setImageLoaded: React.Dispatch<React.SetStateAction<boolean>>}) {

  const {setImageLoaded} = props;
  const svgArrowRight = <svg fill="#ffffff" height="auto" width="auto" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path> </g></svg>
  const svgArrowLeft = <svg fill="#ffffff" height="100%" width="100%" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xmlSpace="preserve" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path> </g></svg>

 

 const OverallHeroContainer = useRef<HTMLDivElement>(null)
 const HeroContainer = useRef<HTMLDivElement>(null)

 

   useGSAP(
    ()=>{
      // initial animation 
     gsap.from('.title-hero-span',{stagger:0.5,y:100,opacity:0,duration:1})
     gsap.from('svg',{y:50,delay:1.5})

      // scroll tl
      const heroTl = gsap.timeline({scrollTrigger:{trigger:HeroContainer.current,start:'top top',end:'bottom 60%',pin:true,scrub:1,}})


      heroTl.to('.hero-image-div',{scale:5,duration:3})
      .to('.hero-image-div',{opacity:0})
      .to('.hero-container .text',{y:-150,opacity:0,duration:3})
      .to('.hero-image-div',{display:'none'}) 
    },{scope:OverallHeroContainer}

   )
  
  

  return ( 
    <div ref={OverallHeroContainer} className='absolute-div'>
      <div className='hero-container' ref={HeroContainer}>
        <div className='hero-image-div'>
          <img 
            src={heroImage} 
            alt="circle" 
            onLoad={
              ()=>{
                ScrollTrigger.refresh();
                setImageLoaded(true)
              } 
            } 
          />
        </div>
        <div className="text">
          {/* <span className='svgArrowleftright'>
            {svgArrowLeft}
          </span> */}
          <span className='title-hero-span' style={spanStyles}>Frontend</span>
          <span className='title-hero-span' style={spanStyles}>Developer</span>
          {/*   */}
        </div>
      </div>
    </div>
   
  )
}

export default Hero