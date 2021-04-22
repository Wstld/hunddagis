import React,{useState} from 'react'
import HelpBox from '../components/HelpBox.js'
import Header from '../components/Header.js'
import './welcome_pg.css'
const WelcomePage = () => {
    const [wideScreen,setWideScreen] = useState(window.innerWidth > 1400 ? true : false)
    window.addEventListener('resize',() => {
        setWideScreen(window.innerWidth > 1400 ? true : false)
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