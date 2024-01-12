import toxycLogo from '../assets/img/toxyc/toxyc-logo.webp';

import '../styles/Navbar.css';

export function Navbar(props) {
    return (
        <div className="navbar">
            <a href="#home"><img className="navbar-logo" src={toxycLogo} alt="toxycLogo" draggable="false" /></a>

            <ul className="navbar-list">
                <li className="navbar-element about-me">
                    <a href="#about"><h3>{props.about}</h3></a>
                </li>
                <li className="navbar-element my-skills">
                    <a href="#skills"><h3>{props.skills}</h3></a>
                </li>
                <li className="navbar-element my-projects">
                    <a href="#projects"><h3>{props.projects}</h3></a>
                </li>
            </ul>
        </div>
    )
}