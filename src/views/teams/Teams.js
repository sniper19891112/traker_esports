import React from 'react';
import {Link} from 'react-router-dom';
import './teams.css';
import LogoTwitterIcon from "../../assets/img/logo_twitter.png";
import LogoInstaBlacIcon from "../../assets/img/logo_insta_blanc.png";
import LogoYtBlancIcon from "../../assets/img/logo_yt_blanc.png";
import LogoTwitchBlancIcon from "../../assets/img/logo_twitch_bpanc.png";
import LogoTiktokIcon from "../../assets/img/logo_tiktok.png";
import pdp_astral_icon from "../../assets/img/pdp/pdp_astral.jpg";
import pdp_axia_icon from "../../assets/img/pdp/pdp_axia.jpg";
import pdp_emiva_icon from "../../assets/img/pdp/pdp_emiva.jpg.jfif";
import pdp_fixster_icon from "../../assets/img/pdp/pdp_fixster.jpg";
import pdp_lindra_icon from "../../assets/img/pdp/pdp_lindra.jpg";
import pdp_oxo_icon from "../../assets/img/pdp/pdp_oxo.jpg";
import pdp_thenono_icon from "../../assets/img/pdp/pdp_thenono.jpg";
import pdp_zdead_icon from "../../assets/img/pdp/pdp_zdead.jpg";
import pdp_zota_icon from "../../assets/img/pdp/pdp_zota.png";
import pdp_ade_icon from "../../assets/img/pdp/pdp-ade.jpg";
import pdp_allan_icon from "../../assets/img/pdp/pdp-allan.png";
import pdp_arthur_icon from "../../assets/img/pdp/pdp-arthur.jpg";
import pdp_clem_icon from "../../assets/img/pdp/pdp-clem.jpg";
import pdp_colombine_icon from "../../assets/img/pdp/pdp-colombine.jpg";
import pdp_diaxs_icon from "../../assets/img/pdp/pdp-diaxs.jpg";
import pdp_frozen_icon from "../../assets/img/pdp/pdp-frozen.jpg";
import pdp_kanna_icon from "../../assets/img/pdp/pdp-kanna.jpg";
import pdp_leo_icon from "../../assets/img/pdp/pdp-leo.png";
import pdp_magical_icon from "../../assets/img/pdp/pdp-magical.png";
import pdp_mytrix_icon from "../../assets/img/pdp/pdp-mytrix.png";
import pdp_nerox_icon from "../../assets/img/pdp/pdp-nerox.jfif";
import pdp_ows_icon from "../../assets/img/pdp/pdp-ows.png";
import pdp_pikatchette_icon from "../../assets/img/pdp/pdp-pikatchette.png";
import pdp_shizu_icon from "../../assets/img/pdp/pdp-shizu.png";
import pdp_zefra_icon from "../../assets/img/pdp/pdp-zefra.jpg";
import pdp_zeleph_icon from "../../assets/img/pdp/pdp-zeleph.jpg";

function Teams(props) {
	const scroll = () => {
	}
	
	return (
		<div>
		    <section className="index">
		        <section className="main">
		            <div>
		                <div className="presentation">
		                    <div className="box">
		                        <h2 className="big-title" align="center">Notre team</h2>
		                        <p align="center">ESPORT</p>
		                    </div>
		                </div>
		                <div className="down-arrow">
		                    <button onClick={scroll}><i className="fa-solid fa-angle-down"></i></button>
		                </div>
		            </div>
		        </section>
		    </section>
			<section className="all">
			    <h3 align="center">Présidents</h3>
			    <section className="head-staff">
			            <div className="profile">
			                <div className="profile-content">
			                    <div className="head-presentation">
			                        <p className="pseudo">Axiatis</p>
			                        <p className="role">Président</p>
			                    </div>
			                    <img className="pdp" src={pdp_axia_icon}/>
			                    <p className="presentation">Je suis Antoine TOQUEC, 18 ans. Cela fait maintenant 7 ans que je prends part à différents projets au sein de l'eSport, de joueur professionnel, caster , streamer, manager à président eSport, j'ai pu toucher à tous les domaines.
			                        Ainsi, j'ai une belle expérience que je compte bien mettre à profit du projet de la nouvelle ère Traker en tant que Président/Fondateur , afin d'assurer une structure saine et ambitieuse !</p>
			                </div>
			                <div className="profile-links">
			                    <Link className="twitter" to="https://twitter.com/AxiaFPS" target="_blank"><img className="img-twitter" src={LogoTwitterIcon} /></Link>
			                    <Link className="insta" to="https://instagram.com/axiatis_" target="_blank"><img className="img-insta" src={LogoInstaBlacIcon}/></Link>
			                    <Link className="twitch" to="https://twitch.tv/axiatis" target="_blank"><img className="img-twitch" src={LogoTwitchBlancIcon}/></Link>
			                </div>
			            </div>
			            <div className="profile">
			                <div className="profile-content">
			                    <div className="head-presentation">
			                        <p className="pseudo">Fixster</p>
			                        <p className="role">Co-président</p>
			                    </div>
			                    <img className="pdp" src={pdp_fixster_icon}/>
			                    <p className="presentation">Encore étudiant je consacre mon temps libre au vélo et à l'esport, surtout du coté relationnel, dans la partie informatique et gestion. J'ai à coeur de rendre se projet incroyable !</p>
			                </div>
			                <div className="profile-links">
			                    <Link className="twitter" to="https://twitter.com/fixster5" target="_blank"><img className="img-twitter" src={LogoTwitterIcon}/></Link>
			                    <Link className="insta" to="https://www.instagram.com/axeldufour/?hl=fr" target="_blank"><img className="img-insta" src={LogoInstaBlacIcon}/></Link>
			                </div>
			            </div>
			            <div className="profile">
			                <div className="profile-content">
			                    <div className="head-presentation">
			                        <p className="pseudo">TheNono</p>
			                        <p className="role">Vice-président</p>
			                    </div>
			                    <img className="pdp" src={pdp_thenono_icon}/>
			                    <p className="presentation">Je m'appelle Nolann "TheNono", j'ai 19 ans et j'entame ma deuxième année post bac. 
			                        En dehors des cours je m'occupe de la communication et de la gestion de communauté pour plusieurs entreprises privées et pour certaines structures Esportives.</p>
			                </div>
			                <div className="profile-links">
			                    <Link className="twitter" to="https://twitter.com/TheNoNo_" target="_blank"><img className="img-twitter" src={LogoTwitterIcon}/></Link>
			                    <Link className="insta" to="https://www.instagram.com/_nolann09/" target="_blank"><img className="img-insta" src={LogoInstaBlacIcon}/></Link>
			                    <Link className="twitch" to="https://twitch.tv/Thenono_ " target="_blank"><img className="img-twitch" src={LogoTwitchBlancIcon}/></Link>
			                    <Link className="tiktok" to="https://www.tiktok.com/@_nolann09" target="_blank"><img className="img-tiktok" src={LogoTiktokIcon}/></Link>
			                </div>
			            </div>
			    </section>

			    <h3 align="center">Direction</h3>
			    <section className="direction">
			        <div className="profile">
			            <div className="profile-content">
			                <div className="head-presentation">
			                    <p className="pseudo">Zefra</p>
			                    <p className="role">Directeur Général</p>
			                </div>
			                <img className="pdp" src={pdp_zefra_icon}/>
			                <p className="presentation">Moi c'est Mathis alias " Zefra", j'aurais 15 ans à la fin de cette année. Je suis mature, ambitieux,  professionnel, motivé et investi dans les projets que j'entreprends. Tous au long de ma carrière j'ai occuper plusieurs poste comme Coach, Manger, Vice Président, CEO, Directeur eSport et Directeur Général.</p>
			            </div>
			            <div className="profile-links">
			                <Link className="twitter" to="https://twitter.com/Zefra91" target="_blank"><img className="img-twitter" src={LogoTwitterIcon}/></Link>
			            </div>
			        </div>
			        <div className="profile">
			            <div className="profile-content">
			                <div className="head-presentation">
			                    <p className="pseudo">Nerox</p>
			                    <p className="role">DRH</p>
			                </div>
			                <img className="pdp" src={pdp_nerox_icon}/>
			                <p className="presentation">Salut, moi c'est Sasha 15ans alias Nerox je suis le drh de la strutcure je suis sérieux et ambitieux dans la vie. J'ai pus dans l'esport faire partie de structure tels que homyno, onest esport, fuzion et bien d'autres. J'ai occupé les postes d'animateur drh helpers. Mon avenir professionnel : travailler dans la santé mentale d'equipes esport. </p>
			            </div>
			            <div className="profile-links">
			                <Link className="twitter" to="https://twitter.com/Nerox_gang" target="_blank"><img className="img-twitter" src={LogoTwitterIcon}/></Link>
			                <Link className="twitch" to="https://www.twitch.tv/nerox_0910" target="_blank"><img className="img-twitch" src={LogoTwitchBlancIcon}/></Link>
			                <Link className="yt" to="https://youtube.com/channel/UC7AfiLE3WMYSm4idn-iqVCg" target="_blank"><img className="img-yt" src={LogoYtBlancIcon}/></Link>
			            </div>
			        </div>
			        <div className="profile">
			            <div className="profile-content">
			            <div className="head-presentation">
			                    <p className="pseudo">Colombine</p>
			                    <p className="role">Directrice Web-Tv</p>
			                </div>
			                <img className="pdp" src={pdp_colombine_icon}/>
			                <p className="presentation">Encore étudiante au lycée afin de devenir professeur des écoles. je suis la directrice WEBTV de cette structure,mon but a l'aide des streameurs et autres membres de l'équipe est de  vous faire passer de bons moments sur leurs streams ainsi que de vous préparer des évènements communautaire et autres....</p>
			            </div>
			        </div>
			        <div className="profile">
			            <div className="profile-content">
			                <div className="head-presentation">
			                    <p className="pseudo">Emiva</p>
			                    <p className="role">Directrice évenementiel</p>
			                </div>
			                <img className="pdp" src={pdp_emiva_icon}/>
			                <p className="presentation">Ici pour aider et organiser des évents pour Tracker, En formation de graphisme et diplômée en Design, je suis passionnée par la vie numérique et le monde du Jeux Vidéo. Grande fan d'Overwatch, de Story Rich et d'art numérique. 
			                    Les événements sur les réseaux sociaux et les événement eSport sont plaisant et distinguer, nous avons de quoi faire pour participer et réaliser de beaux évents : )</p>
			            </div>
			            <div className="profile-links">
			                <Link className="twitter" to="https://twitter.com/Emiva_Design" target="_blank"><img className="img-twitter" src={LogoTwitterIcon}/></Link>
			                <Link className="twitch" to="https://www.twitch.tv/emiva" target="_blank"><img className="img-twitch" src={LogoTwitchBlancIcon}/></Link>
			                <Link className="insta" to="https://www.instagram.com/emivaea/" target="_blank"><img className="img-insta" src={LogoInstaBlacIcon}/></Link>
			                <Link className="behance" to="https://www.behance.net/emilieblancportfolio" target="_blank"><img className="img-behance" src="/static/img/logo_behance.png"/></Link>
			            </div>
			        </div>
			    </section>
			    <h3 align="center">Fortnite</h3>
			    <section className="ftn">
			            <div className="profile">
			                <div className="profile-content">
			                    <div className="head-presentation">
			                        <p className="pseudo">Clem</p>
			                        <p className="role">Responsable Fortnite</p>
			                    </div>
			                    <img className="pdp" src={pdp_clem_icon}/>
			                    <p className="presentation">Salut, moi c'est Clement DEROO, plus connu sous le pseudo Clem, sa fait 1 an que je suis dans l'esport et je suis responsable Fortnite pour la traker.</p>
			                </div>
			                <div className="profile-links">
			                    <Link className="twitter" to="https://twitter.com/Clemderr_" target="_blank"><img className="img-twitter" src={LogoTwitterIcon}/></Link>
			                </div>
			            </div>
			            <div className="profile">
			                <div className="profile-content">
			                    <div className="head-presentation">
			                        <p className="pseudo">Astral</p>
			                        <p className="role">Manageur Fortnite</p>
			                    </div>
			                    <img className="pdp" src={pdp_astral_icon}/>
			                    <p className="presentation">Bonjour, je m'appelle Therence "Astral" Ho-A-Sim, j'ai actuellement 16 ans et je suis manager pour le roster Fortnite de la Traker</p>
			                </div>
			                <div className="profile-links">
			                    <Link className="twitter" to="https://twitter.com/astralhimself" target="_blank"><img className="img-twitter" src={LogoTwitterIcon}/></Link>
			                    <Link className="twitch" to="https://www.twitch.tv/astral_san" target="_blank"><img className="img-twitch" src={LogoTwitchBlancIcon}/></Link>
			                </div>
			            </div>
			            <div className="profile">
			                <div className="profile-content">
			                    <div className="head-presentation">
			                        <p className="pseudo">Lindra</p>
			                        <p className="role">Manageuse Fortnite</p>
			                    </div>
			                    <img className="pdp" src={pdp_lindra_icon}/>
			                    <p className="presentation">Bonjour, je m’appelle Louna et j’ai 15 ans. Cela fait 2 ans que je suis dans l’esport en tant que staff. J’ai été dans des structures en tant que Directrice générale, responsable staff, administratrice, modératrice..... mais il y a pas longtemps j’ai décidé de me lancer dans l’esport en tant que manageuse ! Sinon je souhaite devenir pompier professionnelle. Pour quoi ? Car j’adore aider/secourir les gens, c’est un métier où il faut être bon en sport et depuis toute petite je souhaite devenir pompier.</p>
			                </div>
			                <div className="profile-links">
			                    <Link className="twitter" to="https://twitter.com/Lindr_a_" target="_blank"><img className="img-twitter" src={LogoTwitterIcon}/></Link>
			                </div>
			            </div>
			            <div className="profile">
			                <div className="profile-content">
			                    <div className="head-presentation">
			                        <p className="pseudo">Leo</p>
			                        <p className="role">Joueur Fortnite</p>
			                    </div>
			                    <img className="pdp" src={pdp_leo_icon}/>
			                    <p className="presentation">Salut, moi c'est Léo, J'ai 15 ans et je suis joueur pour la traker !</p>
			                </div>
			            </div>
			        <div className="profile">
			            <div className="profile-content">
			                <div className="head-presentation">
			                    <p className="pseudo">Shizzu</p>
			                    <p className="role">Joueur Fortnite</p>
			                </div>
			                <img className="pdp" src={pdp_shizu_icon}/>
			                <p className="presentation">Shizzu, j'ai 17ans, originaire de corse, je grind fortnite depuis maintenant 2ans</p>
			            </div>
			        </div>
			        <div className="profile">
			            <div className="profile-content">
			                <div className="head-presentation">
			                    <p className="pseudo">Zota</p>
			                    <p className="role">Joueur Fortnite</p>
			                </div>
			                <img className="pdp" src={pdp_zota_icon}/>
			                <p className="presentation">Hey je m'apelle noa j'ai 16ans sa fait 1 ans que je suis dans l'eSport j'ai déjà était chez traker au par avant puis elle a fermée ses portes j'ai donc était joueur dans plusieurs structures commes skurt oxes et d'autres...</p>
			            </div>
			            <div className="profile-links">
			                <Link className="twitter" to="https://twitter.com/Zotqqqq" target="_BLANK"><img className="img-twitter" src={LogoTwitterIcon}/></Link>
			            </div>
			        </div>
			    </section>
			    <section className="staff">
			        <section className="event">
			                <div className="profile">
			                    <div className="profile-content">
			                        <div className="head-presentation">
			                            <p className="pseudo">Adé_6z</p>
			                            <p className="role">Event creator</p>
			                        </div>
			                        <img className="pdp" src={pdp_ade_icon}/>
			                        <p className="presentation">Bonjour, je suis adé , j’habite dans le 60 et je travail dans l’événementiel pour la traker. Je fais également diverses tâches au sein de l’organisation afin de la faire avancer au maximum !</p>
			                    </div>
			                    <div className="profile-links">
			                        <Link className="twitter" to="https://twitter.com/Panna6z" target="_blank"><img className="img-twitter" src={LogoTwitterIcon}/></Link>
			                    </div>
			                </div>
			        </section>
			        <section className="web-tv">
			                <div className="profile">
			                    <div className="profile-content">
			                        <div className="head-presentation">
			                            <p className="pseudo">Mytrix</p>
			                            <p className="role">Streamer</p>
			                        </div>
			                        <img className="pdp" src={pdp_mytrix_icon}/>
			                        <p className="presentation">Streamer depuis 2015 et passionné par les jeux vidéo, je propose des contenus divertissants sur YouTube et Twitch.
			                            Joueur amateur puis compétitif sur Fortnite j'allie Streaming et compétitions lors de mes streams. Anciennement organisateur événementiel et Directeur WebTV, je connais le divertissement et la compétition. Alors, suivez nous ! </p>
			                    </div>
			                    <div className="profile-links">
			                        <Link className="twitter" to="https://twitter.com/mytrixftn" target="_blank"><img className="img-twitter" src={LogoTwitterIcon}/></Link>
			                        <Link className="twitch" to="https://www.twitch.tv/mytrixftn" target="_blank"><img className="img-twitch" src={LogoInstaBlacIcon}/></Link>
			                        <Link className="yt" to="https://www.youtube.com/channel/UCJHLR2qoiVCnGKCDqrdSk6Q" target="_blank"><img className="img-yt" src={LogoYtBlancIcon}/></Link>
			                    </div>
			                </div>
			                <div className="profile">
			                    <div className="profile-content">
			                        <div className="head-presentation">
			                            <p className="pseudo">Allanfmhc</p>
			                            <p className="role">Streamer</p>
			                        </div>
			                        <img className="pdp" src={pdp_allan_icon}/>
			                        <p className="presentation">Bonjour, je m'appelle Allan et je viens d'avoir 21ans. Je suis actuellement étudiant en 2ème années de STAPS et à mes heures perdu je suis également un grand amateur des jeux vidéos !</p>
			                    </div>
			                    <div className="profile-links">
			                        <Link className="insta" to="https://www.instagram.com/allanfmhc/?hl=fr" target="_blank"><img className="img-insta" src={LogoInstaBlacIcon}/></Link>
			                    </div>
			                </div>
			                <div className="profile">
			                    <div className="profile-content">
			                        <div className="head-presentation">
			                            <p className="pseudo">zDeadTTV</p>
			                            <p className="role">Streamer</p>
			                        </div>
			                        <img className="pdp" src={pdp_zdead_icon}/>
			                        <p className="presentation">Je suis Frédéric TOUCHARD, j'ai 19 et déjà plus de 5 ans dans l'esport , j'ai toujours était joueur dans toute les structures que j'ai pu faire et la je me présente en tant que streamer pour la Traker et je vais tout donner pour qu'elle soit au meilleur niveau.</p>
			                    </div>
			                    <div className="profile-links">
			                        <Link className="twitter" to="https://twitter.com/zDeadFN" target="_blank"><img className="img-twitter" src={LogoTwitterIcon}/></Link>
			                    </div>
			                </div>
			                <div className="profile">
			                    <div className="profile-content">
			                        <div className="head-presentation">
			                            <p className="pseudo">Kanna</p>
			                            <p className="role">Streamer</p>
			                        </div>
			                        <img className="pdp" src={pdp_kanna_icon}/>
			                        <p className="presentation">Salut moi c'est Charly Alias KANNA !
			                            J'aime Stream pour divertir les gens pour leurs apporter de la bonne humeur et autre ! 
			                            Je Stream pour partager mon contenu sur divers jeux mais principalement Compétitif :) (même si je suis pas bon la plus pars du temps XD)
			                            J'ai commencer mes aventure sur internet via YouTube sur Minecraft inspiré des meilleur youtubeur Mc de l'époque (Siphano, Frigiel … & plein d'autre !)
			                            Puis Fortnite est arrivé et j'ai pris le train en route Streamer depuis maintenant 3 ans chose logique a mon évolution sur internet 🙂 
			                             
			                            </p>
			                    </div>
			                    <div className="profile-links">
			                        <Link className="twitter" to="https://twitter.com/kannatv_" target="_blank"><img className="img-twitter" src={LogoTwitterIcon}/></Link>
			                        <Link className="twitch" to="https://www.twitch.tv/kannatv_" target="_blank"><img className="img-twitch" src={LogoTwitchBlancIcon}/></Link> 
			                    </div>
			                </div>
			                <div className="profile">
			                    <div className="profile-content">
			                        <div className="head-presentation">
			                            <p className="pseudo">Pikatchette</p>
			                            <p className="role">Casteuse</p>
			                        </div>
			                        <img className="pdp" src={pdp_pikatchette_icon}/>
			                        <p className="presentation">Miss Pikatchette, streameuse passionnée de jeux vidéos, réalise des lives sur Twitch sur de multiples plateformes, notamment sur mobile et PC (jeux multi / fps ). 
			                            Casteuse à la rapidité d’eminem ! </p>
			                    </div>
			                    <div className="profile-links">
			                        <Link className="twitter" to="https://twitter.com/MissPikatchette" target="_blank"><img className="img-twitter" src={LogoTwitterIcon}/></Link>
			                        <Link className="twitch" to="https://www.twitch.tv/miss_pikatchette" target="_blank"><img className="img-twitch" src={LogoTwitchBlancIcon}/></Link> 
			                        <Link className="insta" to="https://www.instagram.com/misspikatchette/" target="_blank"><img className="img-insta" src={LogoInstaBlacIcon}/></Link>
			                        <Link className="yt" to="https://www.youtube.com/channel/UC_RGEE45ZOPWp5R0AgStsbQ" target="_blank"><img className="img-yt" src={LogoYtBlancIcon}/></Link>
			                    </div>
			                </div>
			        </section>
			        <section className="content-creator">
			                <div className="profile">
			                    <div className="profile-content">
			                    <div className="head-presentation">
			                        <p className="pseudo">Frozen</p>
			                        <p className="role">Ambassadeur</p>
			                    </div>
			                    <img className="pdp" src={pdp_frozen_icon}/>
			                    <p className="presentation">Je m’appelle Corentin "FRoZeN". 20ans. Passionné par les jeux vidéos, sa fais 4ans que je suis dans l’Esport. Je stream depuis 2019. Anciennement joueur sur Fortnite dans quelques structures, aujourd’hui je suis Ambassadeur pour la Traker Esport. 
			                    </p>
			                </div>
			                <div className="profile-links">
			                    <Link className="twitter" to="https://twitter.com/frozen_l2r2" target="_blank"><img className="img-twitter" src={LogoTwitterIcon}/></Link>
			                    <Link className="twitch" to="https://twitch.tv/frozen_l2r2" target="_blank"><img className="img-twitch" src={LogoTwitchBlancIcon}/></Link>
			                    <Link className="yt" to="https://youtube.com/channel/UCieR-emN9put-IeyH8zJn1w" target="_blank"><img className="img-yt" src={LogoYtBlancIcon}/></Link>
			                </div>
			                </div>
			                <div className="profile">
			                    <div className="profile-content">
			                        <div className="head-presentation">
			                            <p className="pseudo">Diaxs</p>
			                            <p className="role">Content-creator</p>
			                        </div>
			                        <img className="pdp" src={pdp_diaxs_icon}/>
			                        <p className="presentation">Bonjour;
			                            je me présente je m’appelle Diaxs et je suis content créateur chez la traker je  fais beaucoup de vidéo sur Youtube et  twitch cela est ma passion je fais des vidéos depuis 1 mois et je compte faire beaucoup de vidéo par la suite pour développer mon projet qui ait d'atteindre les 10k sur ma chaine 
			                            J'ai actuellement 590 abonnés sur ma chaine Youtube 21 sur mon twitch 420 sur mon twitter</p>
			                    </div>
			                    <div className="profile-links">
			                        <Link className="twitter" to="https://twitter.com/DIAXS_YT" target="_blank"><img className="img-twitter" src={LogoTwitterIcon}/></Link>
			                        <Link className="twitch" to="https://www.twitch.tv/diaxsdzn" target="_blank"><img className="img-twitch" src={LogoTwitchBlancIcon}/></Link>
			                        <Link className="yt" to="https://www.youtube.com/channel/UCS7XSJ0up7zBYOS3ce77Qig" target="_blank"><img className="img-yt" src={LogoYtBlancIcon}/></Link>
			                    </div>
			                </div>
			                <div className="profile">
			                    <div className="profile-content">
			                        <div className="head-presentation">
			                            <p className="pseudo">OWS</p>
			                            <p className="role">Content-creator</p>
			                        </div>
			                        <img className="pdp" src={pdp_ows_icon}/>
			                        <p className="presentation">Je suis créateur de contenu principe sur ma chaîne Twitch ou je Stream très régulièrement ou je joue à valorant ainsi que à fortnite j’essaye d’organiser des événements pour satisfaire mes followers se qui me motive c'est de pouvoir interagir avec des personnes a travers mon écran et de les divertirs</p>
			                    </div>
			                </div>
			        </section>
			        <section className="graphiste">
			                <div className="profile">
			                    <div className="profile-content">
			                        <div className="head-presentation">
			                            <p className="pseudo">Oxo</p>
			                            <p className="role">Graphiste</p>
			                        </div>
			                        <img className="pdp" src={pdp_oxo_icon}/>
			                        <p className="presentation">Salut, je suis étudiant en communication je suis passionné d'aviation et du moyen age je vie en outre mer sur l'île de la réunion et j'ai 19 ans</p>
			                    </div>
			                    <div className="profile-links">
			                        <Link className="behance" to="https://www.behance.net/broxoff" target="_blank"><img className="img-behance" src="/static/img/logo_behance.png"/></Link>
			                    </div>
			                </div>
			        </section>
			        <section className="producteur">
			                <div className="profile">
			                    <div className="profile-content">
			                        <div className="head-presentation">
			                            <p className="pseudo">Arthur</p>
			                            <p className="role">Producteur/Réalisateur</p>
			                        </div>
			                        <img className="pdp" src={pdp_arthur_icon}/>
			                        <p className="presentation">je réalise quelques vidéos pour traker et je dessine aussi (checkez mon insta y'a du lourd qui arrive;) )</p>
			                    </div>
			                    <div className="profile-links">
			                        <Link className="twitter" to="https://twitter.com/335arthur" target="_blank"><img className="img-twitter" src={LogoTwitterIcon}/></Link>
			                        <Link className="insta" to="https://www.instagram.com/arthur.03__/" target="_blank"><img className="img-insta" src={LogoInstaBlacIcon}/></Link>
			                    </div>
			                </div>
			        </section>
			        <section className="developpeur">
			                <div className="profile">
			                    <div className="profile-content">
			                        <div className="head-presentation">
			                            <p className="pseudo">Magical Cloud</p>
			                            <p className="role">Développeur</p>
			                        </div>
			                        <img className="pdp" src={pdp_magical_icon}/>
			                        <p className="presentation">Je suis Magical Cloud, j'ai 16 ans et je m'intérresse à la programmation en général depuis 4 ans je maîtrise le développement web ainsi que le développement Java. Dans mes heures perdu je fais aussi du graphisme.</p>
			                    </div>
			                    <div className="profile-links">
			                        <Link className="twitter" to="https://twitter.com/MagicalCloudGFX" target="_blank"><img className="img-twitter" src={LogoTwitterIcon}/></Link>
			                        <Link className="behance" to="https://www.behance.net/magicalcloud" target="_blank"><img className="img-behance" src="/static/img/logo_behance.png"/></Link>
			                    </div>
			                </div>
			                <div className="profile">
			                    <div className="profile-content">
			                        <div className="head-presentation">
			                            <p className="pseudo">Zeleph</p>
			                            <p className="role">Administrateur discord</p>
			                        </div>
			                        <img className="pdp" src={pdp_zeleph_icon}/>
			                        <p className="presentation">Salut je m'appelle Brandon et j'ai 17 ans, mon pseudo c'est Zeleph sur les réseaux, je suis passionné de gaming et je propose mon aide pour la tracker esport en tant qu'administrateur et je développe leurs serveur discord.</p>
			                    </div>
			                    <div className="profile-links">
			                        <Link className="twitter" to="https://twitter.com/TEA_Zeleph?t=akrPMUw5qUDhnojevxWB_Q&s=09 " target="_blank"><img className="img-twitter" src={LogoTwitterIcon}/></Link>
			                    </div>
			                </div>
			    </section>
			    </section>
			</section>		    	
		</div>
	)
}

export default Teams;