import { useGSAP } from '@gsap/react'
// import logoImage from '../assets/sangaa-21.jpg'
import { forwardRef, LegacyRef } from 'react'

const Navbar = forwardRef(function Navbar(props,ref:LegacyRef<HTMLElement> | undefined) {

  // useGSAP(()=>{
  //   const navbarTl = gsap.timeline({scrollTrigger:{trigger:navRef.current}})
  //   gsap.from('.link-container a',{y:-100,opacity:0})
  // })

  
  return (
    <nav  className='nav-bar' ref={ref}>
      <div className='nav-inner-container'>
          <div className="logo-container">
            <h2>Z</h2>
          </div>
          <div className="link-container">
          <a href="#about">About</a>
          <a href="#projects">Project</a>
          <a href="#contact">Contact</a>
          </div>
      </div>
    </nav>
  )
}
)
export default Navbar