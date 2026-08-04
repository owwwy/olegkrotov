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
		return `/projects/${directory}/${String(number).padStart(padding, '0')}.${extensions[number] ?? 'webp'}`;
	});

export const projects: Project[] = [
	{
		slug: 'busa',
		title: 'BUSA',
		caseDescription: 'Дизайн платформы алгоритмической криптоторговли',
		website: 'busa.app',
		category: 'Дизайн платформы алгоритмической криптоторговли',
		image: '/projects/busa.webp',
		imageAlt: 'Проект BUSA',
		gallery: numberedGallery('busa', 12, { 3: 'png' }),
	},
	{
		slug: 'petradin',
		title: 'PETRADIN',
		caseDescription: 'Дизайн сайта промышленного поставщика',
		website: 'petradin.ru',
		category: 'Дизайн сайта промышленного поставщика',
		image: '/projects/petradin.webp',
		imageAlt: 'Проект PETRADIN',
		gallery: numberedGallery('petradin', 11),
	},
	{
		slug: 'upravlead',
		title: 'UPRAVLEAD',
		caseDescription: 'UI-фреймворк для B2B-платформ, CRM и ERP',
		website: 'upravlead.ru',
		category: 'UI-фреймворк для B2B-платформ, CRM и ERP',
		image: '/projects/upravlead.webp',
		imageAlt: 'Проект UPRAVLEAD',
		gallery: numberedGallery('upravlead', 21, { 1: 'png', 2: 'png', 3: 'png', 4: 'png', 5: 'png', 6: 'png', 7: 'png', 8: 'png', 9: 'png', 10: 'png', 11: 'png', 12: 'png', 13: 'png', 14: 'png', 15: 'png', 16: 'png', 17: 'png', 18: 'png', 19: 'png', 20: 'png', 21: 'png' }),
	},
	{
		slug: 'addinol',
		title: 'ADDINOL',
		caseDescription: 'Редизайн сайта дистрибьютора смазочных материалов',
		website: 'addinol.ru',
		category: 'Редизайн сайта дистрибьютора смазочных материалов',
		image: '/projects/addinol.webp',
		imageAlt: 'Проект ADDINOL',
		gallery: numberedGallery('addinol', 17, {}, 1),
	},
	{
		slug: 'jetsite',
		title: 'JETSITE',
		caseDescription: 'Редизайн сайта студии реактивной разработки',
		website: 'jet-site.ru',
		category: 'Редизайн сайта студии реактивной разработки',
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
		category: 'Дизайн интернет-магазина спорт оборудования',
		image: '/projects/s-industrial.webp',
		imageAlt: 'Проект S-INDUSTRIAL',
		gallery: numberedGallery('s-industrial-case', 19, { 9: 'png', 10: 'png', 12: 'png' }),
	},
	{
		slug: 'podryado',
		title: 'PODRYADO',
		caseDescription: 'Дизайн бизнес портала для строителей и клиентов',
		website: 'podryado.ru',
		category: 'Дизайн бизнес-портала для строителей и клиентов',
		image: '/projects/podryado.webp',
		imageAlt: 'Проект PODRYADO',
		gallery: numberedGallery('podryado', 32, { 2: 'png', 15: 'png', 28: 'png' }),
	},
];
