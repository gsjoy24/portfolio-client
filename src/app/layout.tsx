import Providers from '@/lib/Providers/Providers';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Metadata } from 'next';
import { dm_sans } from './fonts';
import './globals.css';

export const metadata: Metadata = {
	title: 'Gour Saha Joy - Full-Stack Web Developer',
	description:
		"Hello, and welcome to my portfolio website! I'm Gour Chandra Saha, a passionate full-stack developer dedicated to creating captivating and user-friendly web experiences. With a strong foundation in HTML, CSS, and JavaScript, I strive to bring creative ideas to life through clean and efficient code. Constantly expanding my skill set and keeping up with the latest industry trends, I deliver modern and responsive websites. I believe in the power of collaboration and enjoy working closely with clients and teams to turn visions into reality. My goal is to contribute to impactful projects that make a positive difference in people's lives. Take a look at my work, and let's embark on this exciting journey together!",
	keywords:
		'Full-Stack Web Developer, Gour Saha Joy, web developer portfolio, goursahajoy, frontend web developer in bd, backend web developer in bd, fullstack web developer in bd, Full-Stack Web Developer Portfolio, Gour Saha Joy Web Development Projects, freelance web developer, web development services, front end web developer, top web developers in bd, best web developers in bd',
	authors: [{ name: 'Gour Saha Joy' }],
	twitter: {
		card: 'summary_large_image',
		site: '@goursahajoy',
		creator: '@goursahajoy',
		images: 'https://i.ibb.co/qjWWsX1/goursahajoy.jpg'
	},
	openGraph: {
		type: 'website',
		title: 'Gour Saha Joy - Full-Stack Web Developer',
		description:
			"Hello, and welcome to my portfolio website! I'm Gour Chandra Saha, a passionate full-stack developer dedicated to creating captivating and user-friendly web experiences. With a strong foundation in HTML, CSS, and JavaScript, I strive to bring creative ideas to life through clean and efficient code.",
		images: 'https://i.ibb.co/qjWWsX1/goursahajoy.jpg'
	}
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<Providers>
			<html lang='en'>
				<body className={dm_sans.className}>
					<AppRouterCacheProvider>{children}</AppRouterCacheProvider>
				</body>
			</html>
		</Providers>
	);
}
