import "./Footer.css"

import vk from "./icons/vk.svg"
import insta from "./icons/instagram.svg"
import twit from "./icons/twitter.svg"
import linked from "./icons/linkedIn.svg"
import git from "./icons/gitHub.svg"

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
						<li className="social__item"><a href="#!"><img src={vk} alt="Link" /></a></li>
						<li className="social__item"><a href="#!"><img src={insta} alt="Link" /></a></li>
						<li className="social__item"><a href="#!"><img src={twit} alt="Link" /></a></li>
						<li className="social__item"><a href="#!"><img src={git} alt="Link" /></a></li>
						<li className="social__item"><a href="#!"><img src={linked} alt="Link" /></a></li>
					</ul>
					<div className="copyright">
						<p>© 2025 Jakob Herlein. All rights reserved.</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;