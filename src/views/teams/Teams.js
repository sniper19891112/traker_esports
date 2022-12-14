import React from 'react';
import {Link} from 'react-router-dom';
import './teams.css';
import LogoTwitterIcon from "../../assets/img/logo_twitter.png";
import LogoInstaBlacIcon from "../../assets/img/logo_insta_blanc.png";
import LogoYtBlancIcon from "../../assets/img/logo_yt_blanc.png";
import LogoTwitchBlancIcon from "../../assets/img/logo_twitch_bpanc.png";
import LogoTiktokIcon from "../../assets/img/logo_tiktok.png";
import LogoBehanceIcon from "../../assets/img/logo_behance.png";
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
			    <h3 align="center" className="pd-h3">Pr??sidents</h3>
			    <section className="head-staff">
			            <div className="profile">
			                <div className="profile-content">
			                    <div className="head-presentation">
			                        <p className="pseudo">Axiatis</p>
			                        <p className="role">Pr??sident</p>
			                    </div>
			                    <img className="pdp" src={pdp_axia_icon}/>
			                    <p className="presentation">Je suis Antoine TOQUEC, 18 ans. Cela fait maintenant 7 ans que je prends part ?? diff??rents projets au sein de l'eSport, de joueur professionnel, caster , streamer, manager ?? pr??sident eSport, j'ai pu toucher ?? tous les domaines.
			                        Ainsi, j'ai une belle exp??rience que je compte bien mettre ?? profit du projet de la nouvelle ??re Traker en tant que Pr??sident/Fondateur , afin d'assurer une structure saine et ambitieuse !</p>
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
			                        <p className="role">Co-pr??sident</p>
			                    </div>
			                    <img className="pdp" src={pdp_fixster_icon}/>
			                    <p className="presentation">Encore ??tudiant je consacre mon temps libre au v??lo et ?? l'esport, surtout du cot?? relationnel, dans la partie informatique et gestion. J'ai ?? coeur de rendre se projet incroyable !</p>
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
			                        <p className="role">Vice-pr??sident</p>
			                    </div>
			                    <img className="pdp" src={pdp_thenono_icon}/>
			                    <p className="presentation">Je m'appelle Nolann "TheNono", j'ai 19 ans et j'entame ma deuxi??me ann??e post bac. 
			                        En dehors des cours je m'occupe de la communication et de la gestion de communaut?? pour plusieurs entreprises priv??es et pour certaines structures Esportives.</p>
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
			                    <p className="role">Directeur G??n??ral</p>
			                </div>
			                <img className="pdp" src={pdp_zefra_icon}/>
			                <p className="presentation">Moi c'est Mathis alias " Zefra", j'aurais 15 ans ?? la fin de cette ann??e. Je suis mature, ambitieux,  professionnel, motiv?? et investi dans les projets que j'entreprends. Tous au long de ma carri??re j'ai occuper plusieurs poste comme Coach, Manger, Vice Pr??sident, CEO, Directeur eSport et Directeur G??n??ral.</p>
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
			                <p className="presentation">Salut, moi c'est Sasha 15ans alias Nerox je suis le drh de la strutcure je suis s??rieux et ambitieux dans la vie. J'ai pus dans l'esport faire partie de structure tels que homyno, onest esport, fuzion et bien d'autres. J'ai occup?? les postes d'animateur drh helpers. Mon avenir professionnel : travailler dans la sant?? mentale d'equipes esport. </p>
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
			                <p className="presentation">Encore ??tudiante au lyc??e afin de devenir professeur des ??coles. je suis la directrice WEBTV de cette structure,mon but a l'aide des streameurs et autres membres de l'??quipe est de  vous faire passer de bons moments sur leurs streams ainsi que de vous pr??parer des ??v??nements communautaire et autres....</p>
			            </div>
			        </div>
			        <div className="profile">
			            <div className="profile-content">
			                <div className="head-presentation">
			                    <p className="pseudo">Emiva</p>
			                    <p className="role">Directrice ??venementiel</p>
			                </div>
			                <img className="pdp" src={pdp_emiva_icon}/>
			                <p className="presentation">Ici pour aider et organiser des ??vents pour Tracker, En formation de graphisme et dipl??m??e en Design, je suis passionn??e par la vie num??rique et le monde du Jeux Vid??o. Grande fan d'Overwatch, de Story Rich et d'art num??rique. 
			                    Les ??v??nements sur les r??seaux sociaux et les ??v??nement eSport sont plaisant et distinguer, nous avons de quoi faire pour participer et r??aliser de beaux ??vents : )</p>
			            </div>
			            <div className="profile-links">
			                <Link className="twitter" to="https://twitter.com/Emiva_Design" target="_blank"><img className="img-twitter" src={LogoTwitterIcon}/></Link>
			                <Link className="twitch" to="https://www.twitch.tv/emiva" target="_blank"><img className="img-twitch" src={LogoTwitchBlancIcon}/></Link>
			                <Link className="insta" to="https://www.instagram.com/emivaea/" target="_blank"><img className="img-insta" src={LogoInstaBlacIcon}/></Link>
			                <Link className="behance" to="https://www.behance.net/emilieblancportfolio" target="_blank"><img className="img-behance" src={LogoBehanceIcon}/></Link>
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
			                    <p className="presentation">Bonjour, je m???appelle Louna et j???ai 15 ans. Cela fait 2 ans que je suis dans l???esport en tant que staff. J???ai ??t?? dans des structures en tant que Directrice g??n??rale, responsable staff, administratrice, mod??ratrice..... mais il y a pas longtemps j???ai d??cid?? de me lancer dans l???esport en tant que manageuse ! Sinon je souhaite devenir pompier professionnelle. Pour quoi ? Car j???adore aider/secourir les gens, c???est un m??tier o?? il faut ??tre bon en sport et depuis toute petite je souhaite devenir pompier.</p>
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
			                    <p className="presentation">Salut, moi c'est L??o, J'ai 15 ans et je suis joueur pour la traker !</p>
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
			                <p className="presentation">Hey je m'apelle noa j'ai 16ans sa fait 1 ans que je suis dans l'eSport j'ai d??j?? ??tait chez traker au par avant puis elle a ferm??e ses portes j'ai donc ??tait joueur dans plusieurs structures commes skurt oxes et d'autres...</p>
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
			                            <p className="pseudo">Ad??_6z</p>
			                            <p className="role">Event creator</p>
			                        </div>
			                        <img className="pdp" src={pdp_ade_icon}/>
			                        <p className="presentation">Bonjour, je suis ad?? , j???habite dans le 60 et je travail dans l?????v??nementiel pour la traker. Je fais ??galement diverses t??ches au sein de l???organisation afin de la faire avancer au maximum !</p>
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
			                        <p className="presentation">Streamer depuis 2015 et passionn?? par les jeux vid??o, je propose des contenus divertissants sur YouTube et Twitch.
			                            Joueur amateur puis comp??titif sur Fortnite j'allie Streaming et comp??titions lors de mes streams. Anciennement organisateur ??v??nementiel et Directeur WebTV, je connais le divertissement et la comp??tition. Alors, suivez nous ! </p>
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
			                        <p className="presentation">Bonjour, je m'appelle Allan et je viens d'avoir 21ans. Je suis actuellement ??tudiant en 2??me ann??es de STAPS et ?? mes heures perdu je suis ??galement un grand amateur des jeux vid??os !</p>
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
			                        <p className="presentation">Je suis Fr??d??ric TOUCHARD, j'ai 19 et d??j?? plus de 5 ans dans l'esport , j'ai toujours ??tait joueur dans toute les structures que j'ai pu faire et la je me pr??sente en tant que streamer pour la Traker et je vais tout donner pour qu'elle soit au meilleur niveau.</p>
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
			                            Je Stream pour partager mon contenu sur divers jeux mais principalement Comp??titif :) (m??me si je suis pas bon la plus pars du temps XD)
			                            J'ai commencer mes aventure sur internet via YouTube sur Minecraft inspir?? des meilleur youtubeur Mc de l'??poque (Siphano, Frigiel ??? & plein d'autre !)
			                            Puis Fortnite est arriv?? et j'ai pris le train en route Streamer depuis maintenant 3 ans chose logique a mon ??volution sur internet ???? 
			                             
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
			                        <p className="presentation">Miss Pikatchette, streameuse passionn??e de jeux vid??os, r??alise des lives sur Twitch sur de multiples plateformes, notamment sur mobile et PC (jeux multi / fps ). 
			                            Casteuse ?? la rapidit?? d???eminem ! </p>
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
			                    <p className="presentation">Je m???appelle Corentin "FRoZeN". 20ans. Passionn?? par les jeux vid??os, sa fais 4ans que je suis dans l???Esport. Je stream depuis 2019. Anciennement joueur sur Fortnite dans quelques structures, aujourd???hui je suis Ambassadeur pour la Traker Esport. 
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
			                            je me pr??sente je m???appelle Diaxs et je suis content cr??ateur chez la traker je  fais beaucoup de vid??o sur Youtube et  twitch cela est ma passion je fais des vid??os depuis 1 mois et je compte faire beaucoup de vid??o par la suite pour d??velopper mon projet qui ait d'atteindre les 10k sur ma chaine 
			                            J'ai actuellement 590 abonn??s sur ma chaine Youtube 21 sur mon twitch 420 sur mon twitter</p>
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
			                        <p className="presentation">Je suis cr??ateur de contenu principe sur ma cha??ne Twitch ou je Stream tr??s r??guli??rement ou je joue ?? valorant ainsi que ?? fortnite j???essaye d???organiser des ??v??nements pour satisfaire mes followers se qui me motive c'est de pouvoir interagir avec des personnes a travers mon ??cran et de les divertirs</p>
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
			                        <p className="presentation">Salut, je suis ??tudiant en communication je suis passionn?? d'aviation et du moyen age je vie en outre mer sur l'??le de la r??union et j'ai 19 ans</p>
			                    </div>
			                    <div className="profile-links">
			                        <Link className="behance" to="https://www.behance.net/broxoff" target="_blank"><img className="img-behance" src={LogoBehanceIcon}/></Link>
			                    </div>
			                </div>
			        </section>
			        <section className="producteur">
			                <div className="profile">
			                    <div className="profile-content">
			                        <div className="head-presentation">
			                            <p className="pseudo">Arthur</p>
			                            <p className="role">Producteur/R??alisateur</p>
			                        </div>
			                        <img className="pdp" src={pdp_arthur_icon}/>
			                        <p className="presentation">je r??alise quelques vid??os pour traker et je dessine aussi (checkez mon insta y'a du lourd qui arrive;) )</p>
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
			                            <p className="role">D??veloppeur</p>
			                        </div>
			                        <img className="pdp" src={pdp_magical_icon}/>
			                        <p className="presentation">Je suis Magical Cloud, j'ai 16 ans et je m'int??rresse ?? la programmation en g??n??ral depuis 4 ans je ma??trise le d??veloppement web ainsi que le d??veloppement Java. Dans mes heures perdu je fais aussi du graphisme.</p>
			                    </div>
			                    <div className="profile-links">
			                        <Link className="twitter" to="https://twitter.com/MagicalCloudGFX" target="_blank"><img className="img-twitter" src={LogoTwitterIcon}/></Link>
			                        <Link className="behance" to="https://www.behance.net/magicalcloud" target="_blank"><img className="img-behance" src={LogoBehanceIcon}/></Link>
			                    </div>
			                </div>
			                <div className="profile">
			                    <div className="profile-content">
			                        <div className="head-presentation">
			                            <p className="pseudo">Zeleph</p>
			                            <p className="role">Administrateur discord</p>
			                        </div>
			                        <img className="pdp" src={pdp_zeleph_icon}/>
			                        <p className="presentation">Salut je m'appelle Brandon et j'ai 17 ans, mon pseudo c'est Zeleph sur les r??seaux, je suis passionn?? de gaming et je propose mon aide pour la tracker esport en tant qu'administrateur et je d??veloppe leurs serveur discord.</p>
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