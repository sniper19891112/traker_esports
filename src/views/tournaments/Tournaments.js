import React from 'react';
import {Link} from 'react-router-dom';
import './tournaments.css';

function Tournaments(props) {
	const scroll = () => {
	}

	return (
		<div>
		    <section className="index">
		        <section className="main">
		            <div>
		                <div className="presentation">
		                    <div className="box">
		                        <h2 className="big-title" align="center">Nos tournois</h2>
		                        <p align="center"></p>
		                    </div>
		                </div>
		                <div className="down-arrow">
		                    <button onClick={scroll}><i className="fa-solid fa-angle-down"></i></button>
		                </div>
		            </div>
		        </section>
		    </section>
			<section className="content">
				<div className="tournois_halloween">
				    <img className="affiche" src="https://cdn.discordapp.com/attachments/1014565068849041429/1032200712286904340/Traker_Halloweens_Cup_2022-1.png" height="500px"/>
				    <div><h2>Traker Halloween's Cup 🎃</h2>
				    <p>

				        Halloween est la fête de la peur... <b>Chez TRAKER, c'est une fête qui nous permet de nous rapprocher de vous, la communauté 🤘</b><br/><br/>

				        Le <b>30 octobre 2022</b> aura lieu la <b>Traker Halloween's Cup</b>, une compétition en <b>duo ouverte aux streamers</b>. En effet, la compétition est au format <b>Streamer X Viewer</b>. Le streamer invité ou inscrit <b>invite un de ses viewers</b> pour la compétition 😊 <br/>
				        Un moyen incroyable de <b>nouer des liens avec votre communauté</b>.<br/><br/>

				        Cette compétition se déroulera en <b>mode Créatif avec 3 épreuves en duo !</b> Les épreuves vous seront <b>dévoilées le jour de l'événement</b>, alors faites travailler votre <b>cohésion d'équipe 💪</b><br/><br/>

				        L'événement débutera à <b>19h</b> pour assurer une <b>soirée pleine de frissons et de plaisir</b> ☠️<br/><br/>

				        <b>Nous vous attendons nombreux pour cette événement entre communautés !</b><br/><br/>

				        <b>Comment puis-je m'inscrire ? </b><br/><br/>

				        Direction l'onglet <b><a href="contact">Contact</a> pour nous envoyer par mail</b> : <br/><br/>

				        - Votre <b>Pseudo</b><br/>
				        - Le <b>pseudo de votre Viewer</b><br/>
				        - Vos <b>réseaux</b> ( Twitter et Discord )<br/>
				        - Avez vous <b>déjà participé à un évènement Traker eSport</b> ?<br/><br/>

				        <b>Nous vous attendons nombreux 📽️</b>
				    </p></div>
				</div>
			</section>		    
		</div>
	)
}

export default Tournaments;