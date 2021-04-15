import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <div className="header">
            <div className="halfcircle--bottom"></div>
            <img src="..\img\pawprint.png" alt="" className="headerLogo"/>
            <h2 class = "headerHeadline">Doggy Daycare</h2>
        </div>
    )
}

export default Header