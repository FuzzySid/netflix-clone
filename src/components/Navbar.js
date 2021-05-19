import React,{useState,useEffect} from 'react'
import Logo from '../logo.png';
import AvatarLogo from '../Netflix-avatar.png';
import './Navbar.css';

export const Navbar = () => {
    const [show,handleShow]=useState(false)
    useEffect(() => {
        window.addEventListener('scroll',()=>{
            if(window.scrollY>100){
                handleShow(true);
            }
            else
            handleShow(false);
        })
            return ()=>{
                window.removeEventListener('scroll');
            }
       
    }, [])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" src={Logo} alt="Netflix Logo"/>
            <img className="nav__avatar" src={AvatarLogo} alt="Netflix Avatar"/>
        </div>
    )
}
