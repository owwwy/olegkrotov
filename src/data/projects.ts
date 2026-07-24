export interface Project {
	slug: string;
	title: string;
	caseDescription: string;
	website: string;
	category: string;
	image: string;
	imageAlt: string;
	gallery?: string[];
}

const numberedGallery = (
	directory: string,
	count: number,
	extensions: Record<number, string> = {},
	padding = 2,
) =>
	Array.from({ length: count }, (_, index) => {
		const number = index + 1;
		return `/projects/${directory}/${String(number).padStart(padding, '0')}.${extensions[number] ?? 'jpg'}`;
	});

export const projects: Project[] = [
	{
		slug: 'addinol',
		title: 'ADDINOL',
		caseDescription: 'Редизайн сайта дистрибьютора смазочных материалов',
		website: 'addinol.ru',
		category: 'редизайн сайта дистрибьютора смазочных материалов',
		image: '/projects/addinol.webp',
		imageAlt: 'Проект ADDINOL',
		gallery: numberedGallery('addinol', 17, {}, 1),
	},
	{
		slug: 'jetsite',
		title: 'JETSITE',
		caseDescription: 'Редизайн сайта студии реактивной разработки',
		website: 'jet-site.ru',
		category: 'редизайн сайта студии реактивной разработки',
		image: '/projects/jetsite.webp',
		imageAlt: 'Проект JETSITE',
		gallery: numberedGallery('jetsite', 25, {
			2: 'png',
			4: 'png',
			7: 'png',
			10: 'png',
			12: 'png',
			15: 'png',
			17: 'png',
			19: 'png',
			24: 'png',
		}, 1),
	},
	{
		slug: 's-industrial',
		title: 'S-INDUSTRIAL',
		caseDescription: 'Дизайн интернет-магазина спорт оборудования',
		website: 'индустрия-спорта.рф',
		category: 'дизайн интернет-магазина спорт оборудования',
		image: '/projects/s-industrial.webp',
		imageAlt: 'Проект S-INDUSTRIAL',
		gallery: numberedGallery('s-industrial-case', 19, { 9: 'png', 10: 'png', 12: 'png' }),
	},
	{
		slug: 'podryado',
		title: 'PODRYADO',
		caseDescription: 'Дизайн бизнес портала для строителей и клиентов',
		website: 'podryado.ru',
		category: 'дизайн бизнес-портала для строителей и клиентов',
		image: '/projects/podryado.webp',
		imageAlt: 'Проект PODRYADO',
		gallery: numberedGallery('podryado', 32, { 2: 'png', 15: 'png', 28: 'png' }),
	},
];
