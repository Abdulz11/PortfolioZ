import githubImage from '../assets/github.svg'
import zLetter from '../assets/zletter.svg'
import linkedinLogo from '../assets/linkedin-svgrepo-com.svg'
import twitterLogo from '../assets/icons8-x-logo-250.svg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import pic from '../assets/profilepic.jpg'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import splash from '../assets/splash2.jpg'
import { useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)


function Contact() {
    const contactRef = useRef<HTMLDivElement>(null)
    function changeHeader(){
        let contactText = document.getElementById('contactText')
        let hollaText = document.getElementById('hollaText')
        if(!contactText || !hollaText){
            return;
        }
        if(contactText.style.display == 'block'){
            hollaText.style.display = 'block'
            contactText.style.display = 'none'
        }
        else{
            hollaText.style.display = 'none'
            contactText.style.display = 'block'
        }
       
    }

    useGSAP(()=>{
        gsap.timeline({scrollTrigger:{trigger:contactRef.current,end:'40%',onLeaveBack:()=>changeHeader()}})
    },{scope:contactRef})

    return (
    <section>
        <div id="contact" className="contact-div" ref={contactRef}>
            <div className="side-nav">
                <h2>
                    <span>Abdul</span>
                    <span>Web</span> <span>Developer</span>
                </h2>
            </div>
            <div className="title">
                <div className='changing-heading'>
                    <h1 style={{textAlign:"center"}} id="hollaText">Holla at</h1>
                    <h1 id="contactText">Contact</h1>
                </div>
                <h1 style={{textAlign:"center"}}>me</h1>
            </div>
            <div className='masked-div'>
                <img src={pic} alt="profile"   />
            </div>
            <div className="links">
                <a href="https://www.linkedin.com/in/abdul-oyewale-321523223/" className="link-div">
                    <img src={linkedinLogo}/>
                </a>
                <a href="https://github.com/Abdulz11/" className="link-div">
                    <img src={githubImage}/>
                </a>
                <a href="https://x.com/abdul_oyewale/" className="link-div">
                    <img src={twitterLogo}  />
                </a>
            </div>
        </div>
    </section>
        
      )
}

export default Contact