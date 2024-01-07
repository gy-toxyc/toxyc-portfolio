import { Navbar } from './Navbar'
import { IntroContent } from './IntroContent'

import '../styles/Intro.css'

export function Intro(props) {
    return (
        <div className="intro">
            <Navbar />
            <IntroContent />
        </div>
    )
}
