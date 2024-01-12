import React, { useRef, useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import { Skill } from './Skill'

import skillsAnimation from '../assets/animations/skills-animation.json'

import htmlLogo from '../assets/img/skills/html-logo.webp'
import cssLogo from '../assets/img/skills/css-logo.webp'
import javascriptLogo from '../assets/img/skills/javascript-logo.webp'
import reactLogo from '../assets/img/skills/react-logo.webp'

import javaLogo from '../assets/img/skills/java-logo.webp'
import kotlinLogo from '../assets/img/skills/kotlin-logo.webp'
import sqlLogo from '../assets/img/skills/sql-logo.webp'

import androidLogo from '../assets/img/skills/android-logo.webp'
import electronLogo from '../assets/img/skills/electron-logo.webp'
import githubLogo from '../assets/img/skills/github-logo.webp'
import ktorLogo from '../assets/img/skills/ktor-logo.webp'
import dockerLogo from '../assets/img/skills/docker-logo.webp'


import '../styles/Skills.css'

export function Skills({ title }) {
	const SKILL_FRONTEND 		= "FRONTEND"
	const SKILL_BACKEND 		= "BACKEND"
	const SKILL_OTHER 			= "OTHER"

	const ANIMATION_SPEED 		= 1;
	const lottieRef 			= useRef();

	const [skill, setSkill] 	= useState(SKILL_FRONTEND);

	useEffect(() => {
		if (lottieRef.current) {
			lottieRef.current.setSpeed(ANIMATION_SPEED);
		}
	}, []);

	const handleSkillChange = (newSkill) => {
	  	setSkill(newSkill);
	};

    return (
        <div id="skills" className="skills">
			<Lottie className="skills-animation" animationData={skillsAnimation} lottieRef={lottieRef} draggable="false" />

		<div className="skills-box">
			<h1 className="skills-title">{title}</h1>
			<div className="skills-buttons-box">
				<div className="skills-button skill-frontend-button" active={skill === SKILL_FRONTEND ? 'true' : 'false'} onClick={() => {handleSkillChange(SKILL_FRONTEND)}}>
					<h3 className="skills-name">{SKILL_FRONTEND}</h3>
				</div>
				<div className="skills-button skill-backend-button" active={skill === SKILL_BACKEND ? 'true' : 'false'} onClick={() => {handleSkillChange(SKILL_BACKEND)}}>
					<h3 className="skills-name">{SKILL_BACKEND}</h3>
				</div>
				<div className="skills-button skill-other-button" active={skill === SKILL_OTHER ? 'true' : 'false'} onClick={() => {handleSkillChange(SKILL_OTHER)}}>
					<h3 className="skills-name">{SKILL_OTHER}</h3>
				</div>
			</div>
			<ul className="skills-list frontend-skills" active={skill === SKILL_FRONTEND ? 'true' : 'false'}>
				<Skill name="HTML" image={htmlLogo} />
				<Skill name="CSS" image={cssLogo} />
				<Skill name="JavaScript" image={javascriptLogo} />
				<Skill name="React" image={reactLogo} />
			</ul>
			
			<ul className="skills-list backend-skills" active={skill === SKILL_BACKEND ? 'true' : 'false'}>
				<Skill name="Java" image={javaLogo} />
				<Skill name="Kotlin" image={kotlinLogo} />
				<Skill name="SQL" image={sqlLogo} />
			</ul>
			
			<ul className="skills-list other-skills" active={skill === SKILL_OTHER ? 'true' : 'false'}>
				<Skill name="Android" image={androidLogo} />
				<Skill name="Electron" image={electronLogo} />
				<Skill name="GIT / GitHub" image={githubLogo} />
				<Skill name="Docker" image={dockerLogo} />
				<Skill name="Ktor" image={ktorLogo} />
			</ul>
		</div>
			
        </div>
    )
}