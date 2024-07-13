import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://goursahajoy.me',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1
		},
		{
			url: 'https://goursahajoy.me/blogs',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8
		},
		{
			url: 'https://goursahajoy.me/contact',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.5
		}
	];
}
