import React from 'react'
import './ErrorMsg.css'

const ErrorMsg = (props) => {
    const refresh = () =>{
        window.location.reload()
    }
    return(
        <div className="container">
            <div className="message-container">
                <h2>ERROR</h2>
                <p className="errorMsg">{props.errorMsg}</p>
                <p className="errorMsg-end">Smash the refresh button to give it another go!</p>
            </div>
            <button className="btn__refresh" onClick={refresh}>
                <i className="fas fa-sync-alt"></i>
            </button>
        </div>
    )
}

export default ErrorMsg