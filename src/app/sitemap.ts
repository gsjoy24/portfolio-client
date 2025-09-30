import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://joy.vertoone.com',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1
		},
		{
			url: 'https://joy.vertoone.com/blogs',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8
		},
		{
			url: 'https://joy.vertoone.com/contact',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.5
		}
	];
}
