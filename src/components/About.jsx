import React, { useRef, useEffect } from 'react'
import Lottie from 'lottie-react'
import aboutAnimation from '../assets/animations/about-animation.json'

import '../styles/About.css'

export function About(props) {
    const ANIMATION_SPEED = 1;

	const lottieRef = useRef();

	useEffect(() => {
		if (lottieRef.current) {
			lottieRef.current.setSpeed(ANIMATION_SPEED);
		}
	}, []);

    return (
        <div className="about">
            <div className="about-info-box">
                <h1 className="about-info-title">ABOUT ME</h1>
                <p className="about-info-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi tenetur nihil, expedita dolor repellat cumque rerum veritatis sequi laboriosam error mollitia harum,<br />
                    eum voluptatibus nesciunt, deleniti doloribus fugit facilis dolorum.
                </p>
            </div>
            
			<Lottie className="about-animation" animationData={aboutAnimation} lottieRef={lottieRef} draggable="false" />
        </div>
    )
}