import Lottie from 'lottie-react'
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

import '../styles/Footer.css'
import toxycLogo from '../assets/img/toxyc/toxyc-logo.webp'

export function Footer() {
	const TXT_COPY = "Iván Vicente 2024";

	return (
		<footer className="footer">
			<img src={toxycLogo} alt="toxycLogo" className="footer-logo" draggable="false" />

			<ul className="footer-media">
				<li className="footer-media-element">
				<a href="https://github.com/gy-toxyc" rel="noreferrer noopener" target="_blank"><FaGithubSquare className="footer-media-icon github" /></a>
				</li>
				<li className="footer-media-element">
				<a href="https://www.linkedin.com/in/srtoxyc/" rel="noreferrer noopener" target="_blank"><FaLinkedin className="footer-media-icon linkedin" /></a>
				</li>
			</ul>

			<h6 className="footer-copy">{TXT_COPY}</h6>
		</footer>
	)
}