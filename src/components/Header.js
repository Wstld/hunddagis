import React,{useState} from 'react'
import './Header.css'
import {Link} from 'react-router-dom'


const Overlay = () => {
    return(
        <div className="overlay"/>
    )
}

const PhoneMenu = (props) => {
    return(
        <div className="menu--phone_cont">
        <i className="fas fa-times menu--phone_xbtn" onClick = {props.toggelMenu}></i>
        <div className="menu--phone">
            <ul>
                <img src="..\img\pawprint.png" alt="" className="menu--phone_Logo"/>
                <li>Register</li>
                <li>menu Item</li>
                <li>menu Item2</li>
            </ul>
        </div>
        </div>
    )
}

const DesktopMenuBar = () => {
    return(
        <div className="menu--desktopBar">
            <button className="menuBtn--desktop">Hejjj</button>
            <button className="menuBtn--desktop">heeejj</button>
            <button className="menuBtn--desktop">heejj</button>
        </div>
    )
}

const Header = () => {
    let wide = window.innerWidth > 1400 ? true : false;
    const [wideMenu,setWideMenu] = useState(wide)
    const [menuOpen,setMenuOpen] = useState(false)
    const toggelMenu = () => {
        setMenuOpen(!menuOpen);
    }
    window.addEventListener('resize',() => {
        setWideMenu(window.innerWidth > 1400 ? true : false)
    })
    return(
    <>  
        { menuOpen ? <PhoneMenu toggelMenu = {toggelMenu}/> : null }
       
        <div className="header">
            {
                wideMenu ? 
                <DesktopMenuBar/>
                : 
                <div className="menu--phone_menuBars" onClick= {toggelMenu}>
                <i className="fas fa-bars"></i>
            </div>
            }
            
            <div className="header_decore"></div>
            <div className="logo--cont">
                 <h2 className="headerHeadline">Doggy<br/>Daycare</h2>
                <img src="..\img\pawprint.png" alt="" className="headerLogo"/>
            </div>
        </div>
        { menuOpen? <Overlay/> : null }

    </>
    )
}

export default Header