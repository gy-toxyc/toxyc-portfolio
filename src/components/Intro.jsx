import React, { useRef, useEffect } from 'react'
import Lottie from 'lottie-react'
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

import introAnimation from '../assets/animations/intro-animation.json'

import '../styles/Intro.css'

export function Intro() {
	const TXT_INTRO 		= "<span>IVÁN VICENTE</span><br />SOFTWARE DEVELOPER";
    const ANIMATION_SPEED 	= 0.2;

	const lottieRef 		= useRef();

	useEffect(() => {
		if (lottieRef.current) {
			lottieRef.current.setSpeed(ANIMATION_SPEED);
		}
	}, []);

	return (
		<div id="home" className="intro">
			<Lottie className="intro-animation" animationData={introAnimation} lottieRef={lottieRef} draggable="false" />

			<div className="intro-box">
				<h3 className="intro-text" dangerouslySetInnerHTML={{ __html: TXT_INTRO }} />

				<ul className="intro-media">
					<li className="intro-media-element">
						<a href="https://github.com/gy-toxyc" rel="noreferrer noopener" target="_blank"><FaGithubSquare className="intro-media-icon github" /></a>
					</li>
					<li className="intro-media-element">
						<a href="https://www.linkedin.com/in/srtoxyc/" rel="noreferrer noopener" target="_blank"><FaLinkedin className="intro-media-icon linkedin" /></a>
					</li>
				</ul>
			</div>
		</div>
	)
}