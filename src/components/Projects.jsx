import '../styles/Projects.css'
import { ProjectCard } from './ProjectCard'

import electronifyImage from '../assets/img/projects/electronify-image.png'
import gycodingImage from '../assets/img/projects/gycoding-image.png'

export function Projects() {
	return (
		<div id="projects" className="projects">
			<h1 className="projects-title">PROJECTS</h1>
			<ul className="projects-list">
				<ProjectCard name="Electronify" desc="Programa de escritorio que crea proyectos de Electron desarrollado con el propio Electron, NodeJS, HTML, CSS y JavaScript Vanilla." image={electronifyImage} />
				<ProjectCard name="GYCODING Website" desc="Página oficial de GYCODING, el grupo de desarrollo que tenemos mi amigo Guillermo Figueras y yo." image={gycodingImage} />
				<ProjectCard name="Servidor de Usuarios" desc="Servidor HTTP de gestión de usuarios desarrollado con Ktor, Kotlin. Desplegado con Docker y con acceso a una base de datos remota. Antes usaba AWS RDS con MySQL." image={electronifyImage} />
				<ProjectCard name="Aplicación Móvil" desc="Aplicación móvil de gestión e información de personajes de un videojuego que presenta un inicio de sesión y un registro de usuarios, además de almacenamiento de datos en una base de datos remota." image={electronifyImage} />
			</ul>
		</div>
	)
}