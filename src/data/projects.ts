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
	{
		title: 'Индустрия спорта',
		category: 'web-site',
		image: '/projects/s-industrial.webp',
		imageAlt: 'Проект «Индустрия спорта»',
	},
	{
		title: 'Подрядчик',
		category: 'web-site',
		image: '/projects/podryado.webp',
		imageAlt: 'Проект «Подрядчик»',
	},
];
