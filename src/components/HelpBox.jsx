import React,{useState} from 'react'
import './HelpBox.css'

const HelpBox = () => {
    return(
        <div className="help-box__outer-container">
            <div className="help-box__inner-container">
                <div className="help-box__icon-container">
                    <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="help-box__icon-container">
                    <i className="far fa-comment-dots"></i>   
                </div>
                <div className="help-box__icon-container">
                    <i className="far fa-envelope"></i>
                </div>
                
            </div>
            
        </div>
    )
}

export default HelpBox