import { useGSAP } from "@gsap/react"
import gsap from 'gsap'



export default function LoaderPage() {
    useGSAP(()=>{
        // initial animation 
        const bodyElement =  document.querySelector('body');
        const counterDiv = document.querySelector('.counter-div')!;
        const mainLoaderContent = document.querySelector('.main-loader-content')!
        const screenWidth = document.documentElement.clientWidth
        const getPercentageXTransition = screenWidth - mainLoaderContent.getBoundingClientRect().width
        const spanElementHeight = counterDiv?.getBoundingClientRect().height
        gsap.set(`.counter-div span`,{height:`${spanElementHeight}`})
        gsap.set(bodyElement,{overflow:'hidden'}) 
        console.log(spanElementHeight)
        

       


          const mainLoaderTl = gsap.timeline({delay:1.3})
          mainLoaderTl
            .to('.counter-units',{y:`-${spanElementHeight * 20}`,duration:2.7,ease:'sine.inOut'})
            .to('.counter-tens',{y:`-${spanElementHeight * 10}`,duration:3,ease:'power3.inOut'},"0.2")
            .to('.counter-hundreds',{y:`-${spanElementHeight * 1}`,duration:3.6,ease:'power3.inOut'},'<')
            .to('.line-content',{width:"100%",duration:2})
            .to('.main-loader-content',{x:"0",duration:2},"<")
            .to('.main-loader-content',{x:`-${getPercentageXTransition}`,duration:0.5,delay:1,ease:'power2.in'})
            .to('.main-loader',{height:0},'+=1')
            .to('.main-loader',{display:'none'},'+=1')
            .to(bodyElement,{overflow:'auto'},'<')
        })

  return (
    <div className="main-loader">
        <div className="line-content"/>
        <div className="main-loader-content">
            <h1>LOADING</h1>
            <div className="counter-div">
            <div className="counter-hundreds">
                <span>0</span>
                <span>1</span>
            </div>
            <div className="counter-tens">
                <span>0</span>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>0</span>
            </div>
            <div className="counter-units">
                <span>0</span>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>0</span>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>0</span>
            </div>
            </div>
            <h1>%</h1>
        </div>
    </div>
  )
}
