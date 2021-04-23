import React,{useState,useEffect} from 'react'
import HelpBox from '../components/HelpBox.js'
import './welcome_pg.css'
const WelcomePage = () => {
    const [wideScreen,setWideScreen] = useState(window.innerWidth > 1400 ? true : false)
    const reSize = () => {
        setWideScreen(window.innerWidth > 1400 ? true : false)
    }
    useEffect(()=>{
        let isMounted = true
        if(isMounted){
            window.addEventListener('resize',reSize)
        }
        return () => {
            window.removeEventListener('resize',reSize)
            isMounted = false
        }
    })
    
   
    return(
        <>
            <div className="body__container">
                {wideScreen ? <HelpBox/> : null }
                <div className="body__message-cotainer">
                    <div className="message__heart-cont">
                        <i className="message__heart fas fa-heart"></i>
                    </div>
                  
                    <h2 className="message__headline">
                    Välkommen till Doggy Daycare!  
                    </h2>
                    <p className="message__body-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Cras aliquam iaculis lectus euismod venenatis. 
                    Maecenas eget tempus urna. 
                    Suspendisse at nulla id mi euismod fringilla quis sit amet metus. 
                     </p>  
                </div>
            </div>
           
     

        </>
    )
}

export default WelcomePage