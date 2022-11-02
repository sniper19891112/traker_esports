import React from 'react';
import './contact.css';

function Contact(props) {
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
			<section className="contact-content">
				<h1 className="contact big-title">Nous contacter</h1>
				<div className="form">
				    <form action="" method="POST">
				    <table>
				        <tbody>
				            <tr>
				                <td className="label"><label className="name" htmlFor="name">Nom : </label></td>
				                <td className="label"><label className="surname" htmlFor="surname">Prénom : </label></td>
				            </tr>
				            <tr>
				                <td><input type="text" name="name" id="name" placeholder="Entrez Votre nom" /></td>
				                <td><input type="text" name="surname" id="surname" placeholder="Entrez Votre Prénom" /></td>
				            </tr>
				            <tr>
				                <td className="label"><label className="email" htmlFor="email">Adresse Mail : </label></td>
				                <td className="label"><label className="object" htmlFor="object">Objet : </label></td>
				            </tr>
				            <tr>
				                <td><input type="email" name="email" id="email" placeholder="Entrez votre email"/></td>
				                <td><input type="text" name="object" id="object" placeholder="Entrez l'objet de votre demande" /></td>
				            </tr>
				            <tr>
				                <td colSpan="2" className="label"><label className="content" htmlFor="content">Message : </label></td>
				            </tr>
				            <tr className="textarea">
				                <td colSpan="2"><textarea type="text" name="content" id="content" placeholder="Entrez le contenu de votre message" value="" > </textarea></td>
				            </tr>
				            <tr className="trsubmit">
				                <td colSpan="2"><input className="submit" type="submit" name="btn-ok" value="Envoyer"/></td>
				            </tr>
				        </tbody>
				    </table>
				    <p align="center" style={{color: "red"}}></p>
				    </form>
				</div>
			</section>		
		</div>
	)
}

export default Contact;