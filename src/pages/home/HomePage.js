import Header from "../../components/header/Header";

import "./HomePage.css"

import { FaHtml5, FaCss3Alt, FaSass, FaJs, FaReact } from 'react-icons/fa';
import { FaPython, FaNodeJs, FaDocker, FaGit } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiUbuntu } from 'react-icons/si';



const Home = () => {
	return (
		<>
			<Header />

			<main className="section">
				<div className="container">
					<h1 className="title-1">Skills</h1>


					<ul className="content-list__skills">
						<li className="content-item__skills">
							<h2 className="title-2 skill-title">Frontend</h2>
							<ul className="skills">
								<li className="skill__item"><FaHtml5 size={40} color="#e34c26" /><span className="skill__text">HTML5</span></li>
								<li className="skill__item"><FaCss3Alt size={40} color="#3595cf" /><span className="skill__text">CSS3</span></li>
								<li className="skill__item"><FaJs size={40} color="#f7d800" /><span className="skill__text">JavaScript</span></li>
								<li className="skill__item"><FaSass size={40} color="#cc6699" /><span className="skill__text">SCSS</span></li>
								<li className="skill__item"><SiTailwindcss size={40} color="#38bdf8" /><span className="skill__text">Tailwind</span></li>
								<li className="skill__item"><FaReact size={40} color="#61dafb" /><span className="skill__text">React</span></li>
							</ul>
						</li>
						<li className="content-item__skills">
							<h2 className="title-2 skill-title">Backend</h2>
							<ul className="skills">
								<li className="skill__item"><SiUbuntu size={40} color="#E95420" /><span className="skill__text">Linux</span></li>
								<li className="skill__item"><FaPython size={40} color="#3776ab" /><span className="skill__text">Python</span></li>
								<li className="skill__item"><FaNodeJs size={40} color="#3c873a" /><span className="skill__text">Node.js</span></li>
								<li className="skill__item"><FaDocker size={40} color="#0db7ed" /><span className="skill__text">Docker</span></li>
								<li className="skill__item"><FaGit size={40} color="#f1502f" /><span className="skill__text">Git</span></li>
								<li className="skill__item"><SiMongodb size={40} color="#47a248" /><span className="skill__text">MongoDB</span></li>
							</ul>
						</li>
					</ul>

				</div>
			</main>
		</>
	);
}

export default Home
