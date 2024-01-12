import Lottie from 'lottie-react'
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

import '../styles/Footer.css'
import toxycLogo from '../assets/img/toxyc-logo.png'

export function Footer() {
	return (
		<footer className="footer">
			<img src={toxycLogo} alt="toxycLogo" className="footer-logo" draggable="false" />

			<ul className="footer-media">
				<li className="footer-media-element">
					<FaGithubSquare className="intro-media-icon github" />
				</li>
				<li className="footer-media-element">
					<FaLinkedin className="intro-media-icon linkedin" />
				</li>
			</ul>

			<h6 className="footer-copy">Iván Vicente 2024</h6>
		</footer>
	)
}