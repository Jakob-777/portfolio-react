
import project01 from "./../assets/img/01.jpg";
import project01Big from "./../assets/img/01-big.jpg";

import project02 from "./../assets/img/02.jpg";
import project02Big from "./../assets/img/02-big.jpg";

import project03 from "./../assets/img/03.jpg";
import project03Big from "./../assets/img/03-big.jpg";

const projects = [
	{
		id: 1,
		title: 'Blog Website Template',
		skills: 'HTML, SCSS, JavaScript',
		img: project01,
		imgBig: project01Big,
		gitHubLink: 'https://github.com/Jakob-777/future-tech',
	},
	{
		id: 2,
		title: 'Streaming Website',
		img: project02,
		imgBig: project02Big,
		skills: 'React, Tailwind',
	},
	{
		id: 3,
		title: 'Real Estate Website',
		img: project03,
		imgBig: project03Big,
		skills: 'React, Node.js, MongoDB',
	},
];

export {projects}