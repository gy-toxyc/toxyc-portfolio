import '../styles/ProjectCard.css'

export function ProjectCard({ name, desc, image }) {
	return (
		<li className={`project-element ${name}`} skill={name}>
            <div className="project-info">
                <h2 className="project-name">{name}</h2>
                <p className="project-desc">{desc}</p>
            </div>

			<img src={image} alt="project-image" className="project-image" />
		</li>
	)
}