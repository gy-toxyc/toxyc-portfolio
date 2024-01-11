import React, { useRef, useEffect } from 'react'
import Lottie from 'lottie-react'
import { Skill } from './Skill'

import skillsAnimation from '../assets/animations/skills-animation.json'

import javascriptLogo from '../assets/img/skills/javascript-logo.png'
import javaLogo from '../assets/img/skills/java-logo.png'
import kotlinLogo from '../assets/img/skills/kotlin-logo.png'
import electronLogo from '../assets/img/skills/java-logo.png'
import sqlLogo from '../assets/img/skills/java-logo.png'

import '../styles/Skills.css'

export function Skills() {
    const ANIMATION_SPEED = 1;

	const lottieRef = useRef();

	useEffect(() => {
		if (lottieRef.current) {
			lottieRef.current.setSpeed(ANIMATION_SPEED);
		}
	}, []);

    return (
        <div id="skills" className="skills">
			<Lottie className="skills-animation" animationData={skillsAnimation} lottieRef={lottieRef} draggable="false" />

		<div className="skills-box">
			<h1 className="skills-title">SKILLS</h1>
			<ul className="hard-skills">
				<Skill name="Java" image={javaLogo} />
				<Skill name="Kotlin" image={kotlinLogo} />
				<Skill name="SQL" image={sqlLogo} />
				<Skill name="???" image={javascriptLogo} />
				<Skill name="JavaScript" image={javascriptLogo} />
				<Skill name="Electron" image={electronLogo} />
			</ul>
		</div>
			
        </div>
    )
}