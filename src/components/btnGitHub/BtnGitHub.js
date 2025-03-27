import "./BtnGitHub.css"

import gitHubIcon from "./gitHub-black.svg"

const BtnGitHub = ({ link }) => {
	return (
		<a href={link} className="btn-outline" target="_blank" rel="noreferrer">
			<img src={gitHubIcon} alt="" />
			GitHub repo
		</a>
	);
}

export default BtnGitHub;