import type { APIRoute } from 'astro';
import { projects } from '../data/projects';

const origin = 'https://olegkrotov.ru';
const pages = [
	{ path: '/', priority: '1.0', changefreq: 'monthly' },
	{ path: '/info', priority: '0.7', changefreq: 'yearly' },
	{ path: '/contacts', priority: '0.6', changefreq: 'yearly' },
	...projects.map((project) => ({ path: `/${project.slug}`, priority: '0.8', changefreq: 'monthly' })),
];

export const GET: APIRoute = () => {
	const urls = pages.map(({ path, priority, changefreq }) => `
	<url>
		<loc>${new URL(path, origin).href}</loc>
		<changefreq>${changefreq}</changefreq>
		<priority>${priority}</priority>
	</url>`).join('');
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;
	return new Response(body, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' },
	});
};
