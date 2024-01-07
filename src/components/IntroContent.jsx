import Lottie from 'lottie-react'
import introAnimation from '../assets/animations/intro-animation.json'

import '../styles/IntroContent.css'

export function IntroContent() {
    return (
        <div className="intro-content">
            <Lottie className="intro-animation" animationData={introAnimation} draggable="false"/>

            <div className="intro-box">
                <h3 className="intro-text"><span>IVAN VICENTE</span><br/>SOFTWARE DEVELOPER</h3>
            </div>
        </div>
    )
}