import { useGSAP } from '@gsap/react'
// import myImage from '../assets/IMG-20210317-WA0036.jpg'
import profilePic from '../assets/profilepic.jpg'
import Navbar from './Navbar'
import gsap from 'gsap'
import { useRef } from 'react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)



function Intro(props:{imageLoaded:boolean}) {
  const introContainer = useRef<HTMLElement>(null)
  const navRef = useRef<HTMLElement>(null)
  
  useGSAP(()=>{
    const getNameSpanTransformHeight = ()=>{
      if(window.innerWidth == 320){
        return -60
      }
      else if(window.innerWidth == 375){
        return -80
      }else{
        return -100
      }
    } 
    const navTl = gsap.timeline({ease:'bounce',scrollTrigger:{trigger:introContainer.current,start:'top 80%',toggleActions:'play none none reverse',}})

    //  add to its own separate timeline
    .to(navRef.current,{opacity:0})
    .to(navRef.current,{display:'block'})
    .to(navRef.current,{opacity:1},'<')

    const introTl = gsap.timeline(
      {
        onComplete:()=> endScrollTrigger(),
        scrollTrigger:{
        trigger:introContainer.current,
        start:'top 15%',
        // end:'+=150vh',
        end:()=> window.innerWidth == 320 ? '+=150vh' : "bottom top",
        onRefresh:()=>getNameSpanTransformHeight(),
        // end only at 350px
        scrub:1,
        pin:true,
        pinSpacing:true,

        }
        
      }
    )
    .from('.img-div',{x:-500})
    .from(['.text h1','.text span'],{stagger:0.4,x:1200})
    .to('.intro-img-overlay',{width:0})
    .from('.intro-image',{scale:2},'<')
    .to('.intro-name-span',
      {
        y:getNameSpanTransformHeight()
      }
    )
    // -60 at 320px
    // -80 at 375px
    // -100 at large screen sizes
    .to('.strikethrough-span',{display:'none'})

    // END ANIMATION
    // function navBarAnimation(){}
    function endScrollTrigger(){
      if(introTl.totalProgress() == 1){
        introTl.kill()
      }
    }
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
              <span className='intro-name-span'>
                <h1>Slim shady</h1>
                <h1>Abdul</h1>
                <span className='strikethrough-span'></span>
              </span>
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
