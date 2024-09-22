import Bird from '../assets/sangaa-21.jpg'
import gsap from 'gsap'
import gitIcon from '../assets/github-svgrepo-com.svg'
import linkIcon from '../assets/link-alt-1-svgrepo-com.svg'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useState } from 'react'
gsap.registerPlugin(ScrollTrigger)

type ProjectProps ={
    name:string;
    link?:{live:string,github:string};
    img?:string
    overview:string
}

function CardProject(props:ProjectProps) {
const [links, setLinks] = useState(false)

function showLinks(){
    setLinks((prev)=>!prev)
 }
  return (
    <div className='card-project'>
        <div className="image-container">
            <img src={(props.img) ? props.img : Bird} alt="" onLoad={()=>ScrollTrigger.refresh()} />
        </div>
        <div className="description">
            <h3 className="project-title">
                {props.name}
            </h3>
            <p>
            {props.overview}
            </p>
        </div>
        <div className='btn-div' style={{cursor:'pointer'}}>
            <a  onClick={showLinks}>View</a>
            {links && <div className='project-link-div'>
                <div>
                    <img src={gitIcon} alt="" />
                    <a href={props.link?.github}>Github</a>
                </div>
                <div>
                    <img src={linkIcon} alt="" />
                    <a href={props.link?.live} >Live site</a>
                </div>
            </div>
            }
            
        </div>
    </div>
  )
}

export default CardProject
