import React, { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import '../styles/About.css'

import toxycPicture from '../assets/img/toxyc/toxyc-picture-nobg.webp'

export function About({ title }) {
    const TXT_DESCRIPTION   = "Apasionado del desarrollo de 21 años.<br />Desde la adolescencia, se ha sumergido en el fascinante mundo de la programación, enfocándose especialmente en el desarrollo de videojuegos y el desarrollo back-end.<br /><br />Su interés se extiende al desarrollo full-stack, y cuenta con experiencia en Java/Kotlin, JavaScript y SQL. Además, posee un nivel de inglés casi-nativo (C1).<br />Su pasión y habilidades suponen una importante adición a proyectos innovadores.<br />";
    const TXT_CV_BUTTON     = "Descargar CV";

	useEffect(() => {
		VanillaTilt.init(document.querySelectorAll('.tilt-card'), {
			max: 4,
			speed: 150,
			glare: true,
			'max-glare': 1,
		});
	}, []);

    return (
        <div id="about" className="about">
            <div className="about-info-box">
                <h1 className="about-info-title">{title}</h1>
                <p className="about-info-desc" dangerouslySetInnerHTML={{ __html: TXT_DESCRIPTION }} />
                <div className="about-cv-button">
                    <h4 className="about-cv-text">{TXT_CV_BUTTON}</h4>
                </div>
            </div>
            <div className="about-picture-box">
			    <img src={toxycPicture} alt="aboutPicture" className="about-picture tilt-card" />
            </div>
        </div>
    )
}