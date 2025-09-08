import { useGSAP } from '@gsap/react'
import profilePic from '../../assets/profilepic.jpg'
import Navbar from '../Navbar/Navbar'
import gsap from 'gsap'
import { useRef } from 'react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
// import './intro.css'

gsap.registerPlugin(ScrollTrigger)



function Intro(props:{imageLoaded:boolean}) {
  const introContainer = useRef<HTMLElement>(null)
  const navRef = useRef<HTMLElement>(null)
  
  useGSAP(()=>{
    const nameDiv = document.querySelector('.intro-name-div')
    const nameDivHeight = nameDiv?.getBoundingClientRect().height!
    
    const navTl = gsap.timeline({ease:'bounce',scrollTrigger:{trigger:introContainer.current,start:'top 80%',toggleActions:'play none none reverse',}})

    //  add to its own separate timeline
    .to(navRef.current,{opacity:0})
    .to(navRef.current,{display:'block'})
    .to(navRef.current,{opacity:1},'<')

    // END ANIMATION
    // function navBarAnimation(){}
    function endScrollTrigger(){
      if(introTl.totalProgress() == 1){
        introTl.kill()
      }
    }
    const introTl = gsap.timeline(
      {
        onComplete:()=> endScrollTrigger(),
        scrollTrigger:{
        trigger:introContainer.current,
        start:'top 15%',
        scrub:1,
        pin:true,
        pinSpacing:true,

        }
        
       }
     )
    .from('.img-div',{opacity:0})
    .from('.img-div',{x:-500})
    .from(['.text h1','.text span'],{stagger:0.4,x:1200})
    .to('.intro-img-overlay',{width:0})
    .from('.intro-image',{scale:2},'<')
    .to('.intro-name-div',
      {
        y:`-${nameDivHeight}`
      }
    )
    

    
  },{scope:introContainer})

  return (
    <>
      <Navbar ref={navRef} />
      <section ref={introContainer} className='introcontainer-section'>
        <div className="intro-div" >
          <div className="img-div">
            <div className="intro-img-overlay">
            </div>
            <div className="img-overlay">
            </div>
            <img src={profilePic} alt="abdul" onLoad={()=>ScrollTrigger.refresh()} className='intro-image' />
          </div>
          <div className="text">
            <h1>Hi</h1>
            <h1>mY NaMe</h1>
            <h1>iS</h1>
            <div className='intro-name-container'>
              <div className='intro-name-div'>
                <h1>Slim shady</h1>
                <h1 className='name-absolute'>Abdul</h1>
                <span className='strikethrough-span'></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='parallel-effect-div'>
        <div className="overlay"></div>
      </div>
    </>

    
  )
}

export default Intro
