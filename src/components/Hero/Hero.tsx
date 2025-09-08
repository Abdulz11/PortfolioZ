import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import heroImage from '../../assets/1024px-Circle_Ring_free_icon.svg.png'
import gsap from 'gsap'
import { useRef} from 'react'

gsap.registerPlugin(ScrollTrigger)

// span style
const spanStyles = {
  display:'inline-block',
  margin:'0 5px'
}

function Hero(props:{setImageLoaded: React.Dispatch<React.SetStateAction<boolean>>,imageLoaded:boolean}) {

  const {setImageLoaded,imageLoaded} = props;

  console.log('imageLoaded',imageLoaded)

 const OverallHeroContainer = useRef<HTMLDivElement>(null)
 const HeroContainer = useRef<HTMLDivElement>(null)

 

useGSAP(
  ()=>{
    // initial animation 
    // gsap.set('.hero-image-div'',{marginTop:60px})

    // scroll tl
    const heroTl = gsap.timeline({scrollTrigger:{trigger:HeroContainer.current,start:'top 10%',endTrigger:'.introcontainer-section',pin:true,scrub:1}})

    heroTl.from('.title-hero-span',{stagger:0.5,y:100,opacity:0,duration:1})
    .to('.hero-image-div',{scale:5,duration:3})
    .to('.hero-image-div',{opacity:0})
    .to('.hero-container .text',{y:-150,opacity:0,duration:3})
    .to('.hero-image-div',{display:'none'}) 

  },{}

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
          <span className='title-hero-span' style={spanStyles}>Frontend</span>
          <span className='title-hero-span' style={spanStyles}>Developer</span>
        </div>
      </div>
    </div>
   
  )
}

export default Hero