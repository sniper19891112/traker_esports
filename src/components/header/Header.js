import React from "react";
import LogoTrakerIcon from "../../assets/img/logo_traker.png";
import NavbarBtnIcon from "../../assets/img/navbar-btn.png";
import {Link} from 'react-router-dom';
import './header.css';
import { useEffect } from 'react';

function Header(props) {
	useEffect(() => {
		const menuHamburger = document.querySelector(".menu-deroulant-img")
        const navLinks = document.querySelector(".div2") 
        menuHamburger.addEventListener('click',()=>{
        	console.log("sdfsdf");
        	navLinks.classList.toggle('mobile-menu')
        });
	});
	return (
	    <nav className="nav-navbar-parent">
	        <div className="div1">
	            <Link className="navbar-brand" to="/"><img src={LogoTrakerIcon} /></Link>
	        </div>
	        <div className="div2">
	            <ul className="navbar-file">
	                <li className="nav-item-active">
	                    <Link className="nav-link" to="/">Accueil</Link>
	                </li>
	                <li className="nav-item">
	                    <Link className="nav-link" to="teams">Team</Link>
	                </li>
	                <li className="nav-item-active">
	                    <Link className="nav-link" to="news">News</Link>
	                </li>
	                <li className="nav-item-active">
	                    <Link className="nav-link" to="tournois">Tournois</Link>
	                </li>
	                <li className="nav-item-active">
	                    <Link className="nav-link" to="contact">Contact</Link>
	                </li>
	            </ul>
	        </div>
	        <div className="div3"></div>

	        <img src={NavbarBtnIcon} alt="menu déroulant" className="menu-deroulant-img" />
	    </nav>
	)
}

export default Header;