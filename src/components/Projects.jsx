import '../styles/Projects.css'
import { ProjectCard } from './ProjectCard'

import electronifyImage from '../assets/img/projects/electronify-image.png'

export function Projects() {
	return (
		<div id="projects" className="projects">
			<h1 className="projects-title">PROJECTS</h1>
			<ul className="projects-list">
				<ProjectCard name="Electronify" desc="Programa de escritorio desarrollado con Electron, NodeJS, HTML, CSS y JavaScript Vanilla.Programa de escritorio desarrollado con Electron, NodeJS, HTML, CSS y JavaScript Vanilla.Programa de escritorio desarrollado con Electron, NodeJS, HTML, CSS y JavaScript Vanilla.Programa de escritorio desarrollado con Electron, NodeJS, HTML, CSS y JavaScript Vanilla.Programa de escritorio desarrollado con Electron, NodeJS, HTML, CSS y JavaScript Vanilla.Programa de escritorio desarrollado con Electron, NodeJS, HTML, CSS y JavaScript Vanilla.Programa de escritorio desarrollado con Electron, NodeJS, HTML, CSS y JavaScript Vanilla.Programa de escritorio desarrollado con Electron, NodeJS, HTML, CSS y JavaScript Vanilla." image={electronifyImage} />
				<ProjectCard name="GYCODING web" desc="Página oficial de GYCODING." image={electronifyImage} />
			</ul>
		</div>
	)
}