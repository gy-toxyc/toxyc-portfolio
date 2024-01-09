import React, { useRef, useEffect } from 'react'
import Lottie from 'lottie-react'
import skillsAnimation from '../assets/animations/skills-animation.json'

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
        </div>
    )
}