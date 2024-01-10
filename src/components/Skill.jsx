import '../styles/Skill.css'

export function Skill({ name, image }) {
	return (
		<li className={"skill-element " + name} skill={name}>
			<h2 className="skill-name">{name}</h2>
			<img src={image} alt="skill-image" className="skill-image" />
		</li>
	)
}