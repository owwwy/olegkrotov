export interface Project {
	title: string;
	category: string;
	image: string;
	imageAlt: string;
}

export const projects: Project[] = [
	{
		title: 'ADDINOL',
		category: 'e-commerce',
		image: '/projects/addinol.webp',
		imageAlt: 'Проект ADDINOL',
	},
	{
		title: 'JETSITE',
		category: 'web design',
		image: '/projects/jetsite.webp',
		imageAlt: 'Проект JETSITE',
	},
];
