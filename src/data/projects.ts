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
		title: 's-industrial',
		category: 'индустрия спорта',
		image: '/projects/s-industrial.webp',
		imageAlt: 'Проект s-industrial',
	},
	{
		title: 'podryado',
		category: 'Подрядчик',
		image: '/projects/podryado.webp',
		imageAlt: 'Проект podryado',
	},
];
