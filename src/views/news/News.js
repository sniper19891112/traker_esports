import React from 'react';
import {Link} from 'react-router-dom';
import './news.css';

function News(props) {
	const scroll = () => {

	}

	return (
		<div>
		    <section className="index">
		        <section className="main">
		            <div>
		                <div className="presentation">
		                    <div className="box">
		                        <h2 className="big-title" align="center">Page en cours de developpement</h2>
		                        <p align="center"></p>
		                    </div>
		                </div>
		                <div className="down-arrow">
		                    <button onClick={scroll}><i className="fa-solid fa-angle-down"></i></button>
		                </div>
		            </div>
		        </section>
		    </section>	
		</div>
	)
}

export default News;