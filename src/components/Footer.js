import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

const Footer = () => {
    return(
        <div className="footer">
           <p className="footerHeadline">support @</p>
           <div className="iconsContainer">

                    <img src="..\img\smartphone_IC.png" alt="phone icon" class='footerIcon'/>
    
                    <img src="..\img\mail_IC.png" alt="mail icon" class='footerIcon'/>
             
                    <img src="..\img\chat_IC.png" alt="message icon" class='footerIcon'/>

           </div>
        </div>
    )
}

export default Footer