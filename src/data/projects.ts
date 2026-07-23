export interface Project {
	slug: string;
	title: string;
	category: string;
	image: string;
	imageAlt: string;
	gallery?: string[];
}

const numberedGallery = (directory: string, count: number, extensions: Record<number, string> = {}) =>
	Array.from({ length: count }, (_, index) => {
		const number = index + 1;
		return `/projects/${directory}/${String(number).padStart(2, '0')}.${extensions[number] ?? 'jpg'}`;
	});

export const projects: Project[] = [
	{
		slug: 'addinol',
		title: 'ADDINOL',
		category: 'e-commerce',
		image: '/projects/addinol.webp',
		imageAlt: 'Проект ADDINOL',
	},
	{
		slug: 'jetsite',
		title: 'JETSITE',
		category: 'web design',
		image: '/projects/jetsite.webp',
		imageAlt: 'Проект JETSITE',
	},
	{
		slug: 's-industrial',
		title: 'ИНДУСТРИЯ СПОРТА',
		category: 'web-site',
		image: '/projects/s-industrial.webp',
		imageAlt: 'Проект «Индустрия спорта»',
		gallery: numberedGallery('s-industrial-case', 19, { 9: 'png', 10: 'png', 12: 'png' }),
	},
	{
		slug: 'podryado',
		title: 'ПОДРЯДЧИК',
		category: 'web-site',
		image: '/projects/podryado.webp',
		imageAlt: 'Проект «Подрядчик»',
		gallery: numberedGallery('podryado', 32, { 2: 'png', 15: 'png', 28: 'png' }),
	},
];
