import ProjectCard from "../../components/projectCard/ProjectCard"
import { projects } from "../../helpers/projectsList";

import "./ProjectsPage.css"

const Projects = () => {
	return (
		<main className="section">
			<div className="container">
				<h2 className="title-1">Projects</h2>
				<ul className="projects">

					{projects.map((project) => {
						return <ProjectCard key={project.id} title={project.title} img={project.img} id={project.id}/>
					})}

				</ul>
			</div>
		</main>
	);
}

export default Projects;