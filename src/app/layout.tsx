import Providers from '@/lib/Providers/Providers';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import { dm_sans } from './fonts';
import './globals.css';

export const metadata: Metadata = {
	title: 'Gour Saha Joy - Full-Stack Web Developer',
	description:
		'I am Gour Saha Joy, a full-stack developer skilled in JavaScript, React, Next, Redux, Node, Mongodb, PostgreSQL, GraphQl and more. Explore my projects and join me on this journey of creating captivating and user-friendly web experiences. #goursahajoy @goursahajoy',
	keywords:
		'Gour Saha Joy, goursahajoy, Full-Stack Web Developer, frontend developer, backend developer, web developer in Bangladesh',
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
			'I am Gour Saha Joy, a full-stack developer skilled in JavaScript, React, Next, Redux, Node, Mongodb, PostgreSQL, GraphQl and more. Explore my projects and join me on this journey of creating captivating and user-friendly web experiences. #goursahajoy @goursahajoy',
		images: 'https://i.ibb.co/qjWWsX1/goursahajoy.jpg'
	}
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<Providers>
			<html lang='en'>
				<body className={dm_sans.className}>
					<AppRouterCacheProvider>
						{children}
						<Toaster
							position='top-center'
							toastOptions={{
								duration: 3000,
								style: {
									background: '#023047',
									color: '#fff'
								}
							}}
						/>
					</AppRouterCacheProvider>
				</body>
			</html>
		</Providers>
	);
}
