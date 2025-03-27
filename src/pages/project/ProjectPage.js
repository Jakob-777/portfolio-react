import { useParams } from "react-router-dom";
import { projects } from "../../helpers/projectsList";

import BtnGitHub from "../../components/btnGitHub/BtnGitHub";

import "./ProjectPage.css"



const Project = () => {

	const { id } = useParams()

	// IDs aus useParams sind STRINGS – konvertiere zum Vergleich:
	const project = projects.find((p) => String(p.id) === id);

	if (!project) {
		return <div>Projekt nicht gefunden 😢</div>;
	}

	return (
		<main className="section">
			<div className="container">
				<div className="project-details">

					<h1 className="title-1">{project.title}</h1>

					<img src={project.imgBig} alt="{id.title}" className="project-details__cover" />

					<div className="project-details__desc">
						<p>{project.skills}</p>
					</div>

					{project.gitHubLink && (<BtnGitHub link="https://github.com" />)}

				</div>
			</div>
		</main>
	);
}

export default Project;