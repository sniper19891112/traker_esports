import React, {useEffect} from "react";
import {Link, useLocation} from 'react-router-dom';
import './footer.css';

function Footer(props) {

	const location = useLocation();
  	const pathName = location.pathname;

  	useEffect(() => {
  		let footerElement = document.getElementById('footer');
  		if (pathName == "/") {
  			footerElement.style.top = "400%";
  			footerElement.style.display = "block";
  		}
  		if (pathName == "/teams") {
  			footerElement.style.display = "none";
  		}
  		if (pathName == "/news") {
  			footerElement.style.top = "100%";
  			footerElement.style.display = "block";
  		}
  		if (pathName == "/tournois") {
  			footerElement.style.top = "200%";
  			footerElement.style.display = "block";
  		}
  		if (pathName == "/contact") {
  			footerElement.style.top = "200%";
  			footerElement.style.display = "block";
  		}
  	})  	
  	

	return (
		<div>
		    <footer id="footer">
		        <div className="footer">
		            <div className="about-us footer-box">
		                <h3>À propos</h3>
		                <p>La Traker Esport Association est une team créée en 2017 par Antoine Toquec, alias AxiaTis </p>
		            </div>
		            <div className="links footer-box">
		                <h3>Liens Importants</h3>
		                <div className="contact_info">
		                    <ul>
		                        <li><Link className="twitter" to="https://twitter.com/TrakerEsport" target="_blank">Twitter</Link></li>
		                        <li><Link className="discord" to="https://discord.gg/jdwMnyzM" target="_blank"> Discord</Link></li>
		                        <li><Link className="youtube" to="https://youtube.com/trakeresport" target="_blank"> Youtube</Link></li>
		                        <li><Link className="twitch" to="https://twitch.tv/trakeresport" target="_blank"> Twitch</Link></li>
		                        <li><Link className="instagram" to="https://instagram.com/trakeresport" target="_blank"> Instagram</Link></li>
		                    </ul>
		                </div>
		            </div>
		            <div className="contacts footer-box">
		                <h3>Contacts</h3>
		                <p><Link to="contact">Page contact</Link></p>
		                <p><Link to="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="9ff2feedf4faebf6f1f8b1ebedfef4faeddff8f2fef6f3b1fcf0f2">[email&#160;protected]</Link></p>
		                <p><Link to="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="374345565c5245195458594356544377505a565e5b1954585a">[email&#160;protected]</Link></p>   
		            </div>
		            <div className="copyright">
		                <p className="">Copyright &copy; All rights reserved | Web design by Traker Esport</p>
		            </div>
		        </div>
		    </footer>
		</div>
	)
}

export default Footer;