import React from 'react';
import {Link} from 'react-router-dom';
import LogoTwitterIcon from "../../assets/img/logo_twitter.png";
import LogoInstaBlacIcon from "../../assets/img/logo_insta_blanc.png";
import LogoYtBlancIcon from "../../assets/img/logo_yt_blanc.png";
import LogoTwitchBlancIcon from "../../assets/img/logo_twitch_bpanc.png";
import LogoDiscordBlancIcon from "../../assets/img/logo_discord_blanc.png";
import LogoTiktokIcon from "../../assets/img/logo_tiktok.png";
import './home.css';

function Home(props) {
	const scroll = () => {
		
	}
	return (
		<div>
		    <section className="index">
		        <section className="main">
		            <div>
		                <div className="presentation">
		                    <div className="box">
		                        <h2 className="big-title" align="center">Traker</h2>
		                        <p align="center">ESPORT</p>
		                    </div>
		                </div>
		                <div className="down-arrow">
		                    <button onClick={scroll}><i className="fa-solid fa-angle-down"></i></button>
		                </div>
		            </div>
		        </section>
		    </section>		
	        <section className="home-news">
	            <div className="home-news">
	                <h2 className="big-title" align="center">Presentation</h2>
	            </div>
	            <p className="text-presentation"><b>Traker eSport</b> est une association esportive, fondée le 15 septembre 2017, par un passionné qui voulait faire de son rêve une réalité. Son objectif créer une <b>grande famille</b> avec un seul objectif: être les <b>meilleurs</b> ! Pour cela il a su s’entourer de personnes de confiance et d’une communauté en <b>or</b> afin d’atteindre son but. <br/> <br/>

	                Présente sur différents jeux (Fortnite, League of Legend et Valorant), la traker met en place des événements toujours plus différents les uns des autres afin de divertir le monde et démocratiser l’esport. Le club pousse à l’avancement et ne compte pas s’arrêter en si bon chemin. <br/> <br/>

	                En 2022 tout change, fort de nouveaux partenariats et contacts, Traker passe à la vitesse supérieure en recrutant les meilleurs joueurs amateurs et professionnels dans la vie courante tout comme au sein de ses staffs.
	            </p>
	        
	        </section>
	        <section className="socials">
	            <div className="presentation">
	                <div className="box">
	                    <h2 className="big-title" align="center">SUIVEZ-NOUS</h2>
	                    <p align="center">SUR</p>
	                    <div className="reseaux" align="center">
	                        <Link className="twitter" href="https://twitter.com/TrakerEsport" target="_blank">
	                            <img src={LogoTwitterIcon} />
	                        </Link>
	                        <Link className="instagram" href="https://www.instagram.com/trakeresport/?hl=fr" target="_blank">
	                            <img src={LogoInstaBlacIcon}/>
	                        </Link>
	                        <Link className="yt" href="https://www.youtube.com/channel/UCuVOZVYC3GV1ghiYG6FHohg" target="_blank">
	                            <img src={LogoYtBlancIcon} />
	                        </Link>
	                        <Link className="twitch" href="https://www.twitch.tv/trakeresport" target="_blank">
	                            <img src={LogoTwitchBlancIcon}/>
	                        </Link>
	                        <Link className="discord" href="https://discord.gg/pmPST9Cf" target="_blank">
	                            <img src={LogoDiscordBlancIcon}/>
	                        </Link>
	                        <Link className="tiktok" href="https://www.tiktok.com/@trakeresport" target="_blank">
	                            <img src={LogoTiktokIcon}/>
	                        </Link>
	                    </div> 
	                </div>

	            </div>
	        </section>		
		</div>
	)
}

export default Home;