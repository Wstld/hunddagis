import React,{useState, useEffect} from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import HelpBox from './HelpBox.js'




const PhoneMenu = (props) => {
    return(
        <div className="overlay">
            <i className="fas fa-times menu--phone_xbtn" onClick = {props.toggelMenu}></i>
            <HelpBox/>
            <div className="menu--phone_cont">
                    <ul>
                        <img src="..\img\pawprint.png" alt="" className="menu--phone_Logo"/>
                        <Link to="/" onClick={props.toggelMenu}><li>Home</li></Link>
                        <Link to="/register" onClick={props.toggelMenu}><li>Register</li></Link>
                        <Link to="/" onClick={props.toggelMenu}><li>About</li></Link>
                    </ul>
            </div>
        </div>
    
    )
}

const DesktopMenuBar = () => {
    return(
        <div className="menu--desktopBar">
            <Link to="/" className="menuBtn--desktop"><p >Home</p></Link>
            <Link to="/register" className="menuBtn--desktop"><p>Register</p></Link>
            <Link to="/" className="menuBtn--desktop"><p>About</p></Link>
        </div>
    )
}

const Header = () => {
    

    const [wideMenu,setWideMenu] = useState(window.innerWidth > 1400 ? true : false)
    const [menuOpen,setMenuOpen] = useState(false)
    
    const toggelMenu = () => {
        setMenuOpen(!menuOpen);   
    }

    const reSize = () => {
        if(window.innerWidth>1400 && menuOpen){
            toggelMenu()
            
        }
     
        setWideMenu(window.innerWidth > 1400 ? true : false)
        
        
    }
    useEffect( () => {
        var isMounted = true;
        if(isMounted){
            window.addEventListener('resize',reSize)
        }
        return () => { 
            window.removeEventListener('resize',reSize);
            isMounted = false;
        }
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
                  <Link to="/"><img src="..\img\pawprint.png" alt="" className="headerLogo"/></Link>
            </div>
        </div>
    

    </>
    )
}

export default Header