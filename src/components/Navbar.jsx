import toxycLogo from '../assets/img/toxyc-logo.png';

import '../styles/Navbar.css';

export function Navbar() {
    return (
        <div className="navbar">
            <img className="navbar-logo" src={toxycLogo} alt="toxycLogo" draggable="false" />

            <ul className="navbar-list">
                <li className="navbar-element">
                    <a href="#home"><h3>HOME</h3></a>
                </li>
                <li className="navbar-element">
                    <a href="#about"><h3>ABOUT</h3></a>
                </li>
                <li className="navbar-element">
                    <a href="#projects"><h3>PROJECTS</h3></a>
                </li>
            </ul>
        </div>
    )
}