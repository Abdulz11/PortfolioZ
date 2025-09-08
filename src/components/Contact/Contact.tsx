import githubImage from '../../assets/github.svg'
import zLetter from '../../assets/zletter.svg'
import linkedinLogo from '../../assets/linkedin-svgrepo-com.svg'
import twitterLogo from '../../assets/icons8-x-logo-250.svg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import pic from '../../assets/profilepic.jpg'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import splash from '../../assets/splash2.jpg'
import { useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)


function Contact() {
    const contactRef = useRef<HTMLDivElement>(null)
    function changeHeader(){
         const changingText = document.querySelector('.changing-text') as HTMLHeadingElement
         if(changingText.textContent == "Holla at"){
            
            changingText.textContent = 'Contact'
         }
         else{
            
             changingText.textContent = "Holla at"
           
         }
       
    }

    useGSAP(()=>{
       

        gsap.timeline({scrollTrigger:{trigger:'.title',end:'40%',onLeaveBack:()=>changeHeader()}})
    },{scope:contactRef})

    return (
    <section>
        <div id="contact" className="contact-div" ref={contactRef}>
            <div className="side-nav">
                    <span>Abdul</span>
                    <span>Web</span> <span>Developer</span> 
            </div>
            <div className="title">
                <h1 className='changing-text' style={{textAlign:"center"}}>Holla at</h1>
                <h1 style={{textAlign:"center"}}>me</h1>
            </div>
            <div className='masked-div'>
                <img src={pic} alt="profile"   />
                <div className="overlay"></div>
            </div>
            <div className="links">
                <div>
                    <a href="https://www.linkedin.com/in/abdul-oyewale-321523223/" className="link-div">
                        <img src={linkedinLogo}/>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/Abdulz11/" className="link-div">
                        <img src={githubImage}/>
                    </a>
                </div>
                <div>
                    <a href="https://x.com/abdul_oyewale/" className="link-div">
                        <img src={twitterLogo}/>
                    </a>
                </div>
            </div>
        </div>
    </section>
        
      )
}

export default Contact
