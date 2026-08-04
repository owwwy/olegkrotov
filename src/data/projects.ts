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
		gallery: numberedGallery('busa', 12),
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
		gallery: numberedGallery('upravlead', 29),
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
		gallery: numberedGallery('jetsite', 25, { 7: 'webm', 10: 'webm', 12: 'webm', 15: 'webm' }, 1),
	},
	{
		slug: 's-industrial',
		title: 'S-INDUSTRIAL',
		caseDescription: 'Дизайн интернет-магазина спорт оборудования',
		website: 'индустрия-спорта.рф',
		category: 'Дизайн интернет-магазина спорт оборудования',
		image: '/projects/s-industrial.webp',
		imageAlt: 'Проект S-INDUSTRIAL',
		gallery: numberedGallery('s-industrial-case', 19, { 10: 'webm' }),
	},
	{
		slug: 'podryado',
		title: 'PODRYADO',
		caseDescription: 'Дизайн бизнес портала для строителей и клиентов',
		website: 'podryado.ru',
		category: 'Дизайн бизнес-портала для строителей и клиентов',
		image: '/projects/podryado.webp',
		imageAlt: 'Проект PODRYADO',
		gallery: numberedGallery('podryado', 32, { 2: 'webm', 15: 'webm' }),
	},
];
