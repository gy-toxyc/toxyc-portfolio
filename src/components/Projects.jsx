import '../styles/Projects.css'
import { ProjectCard } from './ProjectCard'
import Project from '../entities/Project.js'

import electronifyImage from '../assets/img/projects/electronify-image.webp'
import gycodingImage from '../assets/img/projects/gycoding-image.webp'
import serverImage from '../assets/img/projects/server-image.webp'
import mobileImage from '../assets/img/projects/mobile-image.png'

export function Projects({ title }) {
	const projectElectronify = new Project(
		"Electronify", 
		"Programa de escritorio que crea proyectos de Electron desarrollado con el propio Electron, NodeJS, HTML, CSS y JavaScript Vanilla.",
		electronifyImage,
		"https://github.com/gy-toxyc/electronify/releases/tag/v1.0.0"
	);
	const projectGY = new Project(
		"GYCODING Website", 
		"Página oficial de GYCODING, el grupo de desarrollo que tenemos mi amigo Guillermo Figueras y yo.", 
		gycodingImage,
		"https://www.gycoding.com"
	);
	const projectServer = new Project(
		"Servidor de Usuarios", 
		"Servidor HTTP de gestión de usuarios desarrollado con Ktor, Kotlin. Desplegado con Docker y con acceso a una base de datos remota. Antes usaba AWS RDS con MySQL.",
		serverImage,
		"https://github.com/GY-CODING/login-server"
	);
	const projectMobileApp 	= new Project(
		"Aplicación Móvil", 
		"Aplicación móvil de gestión e información de personajes de un videojuego que presenta un inicio de sesión y un registro de usuarios, además de almacenamiento de datos en una base de datos remota.", 
		mobileImage,
		"https://github.com/gy-toxyc/practica-fotg"
	);
	
	return (
		<div id="projects" className="projects">
			<h1 className="projects-title">{title}</h1>
			<ul className="projects-list">
				<a href={projectElectronify.url} target="_blank" rel="noreferrer noopener"><ProjectCard name={projectElectronify.name} desc={projectElectronify.desc} image={projectElectronify.img} /></a>
				<a href={projectGY.url} target="_blank" rel="noreferrer noopener"><ProjectCard name={projectGY.name} desc={projectGY.desc} image={projectGY.img} /></a>
				<a href={projectServer.url} target="_blank" rel="noreferrer noopener"><ProjectCard name={projectServer.name} desc={projectServer.desc} image={projectServer.img} /></a>
				<a href={projectMobileApp.url} target="_blank" rel="noreferrer noopener"><ProjectCard name={projectMobileApp.name} desc={projectMobileApp.desc} image={projectMobileApp.img} /></a>
			</ul>
		</div>
	)
}