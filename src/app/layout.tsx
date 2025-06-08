import GoogleAnalytics from "@/components/GoogleAnalytics/GoogleAnalytics";
import Providers from "@/lib/Providers/Providers";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { dm_sans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
	title: "Gour Saha Joy - Full-Stack Web Developer",
	description:
		"Gour Saha Joy is a full-stack web developer skilled in JavaScript, React, Next, Redux, Node, Mongodb, PostgreSQL, GraphQl and more. Currently working at Next Label Media. #goursahajoy @goursahajoy",
	keywords: "Gour Saha Joy, goursahajoy, Full-stack Web Developer in bd",
	authors: [{ name: "Gour Saha Joy", url: "https://github.com/gsjoy24" }],
	twitter: {
		card: "summary_large_image",
		site: "@goursahajoy",
		creator: "@goursahajoy",
		images: "https://res.cloudinary.com/dghszztcc/image/upload/v1725842738/IMG_20240909_064408_rk8esp.jpg"
	},
	openGraph: {
		type: "website",
		title: "Gour Saha Joy - Full-Stack Web Developer",
		description:
			"I am Gour Saha Joy, a full-stack developer skilled in JavaScript, React, Next, Redux, Node, Mongodb, PostgreSQL, GraphQl and more. #goursahajoy @goursahajoy",
		images: "https://res.cloudinary.com/dghszztcc/image/upload/v1725842738/IMG_20240909_064408_rk8esp.jpg"
	}
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
	return (
		<Providers>
			<html lang='en'>
				<GoogleAnalytics />
				<body className={`${dm_sans.className}`}>
					<AppRouterCacheProvider>
						{children}
						<Toaster
							position='top-center'
							toastOptions={{
								duration: 3000,
								style: {
									background: "#023047",
									color: "#fff"
								}
							}}
						/>
					</AppRouterCacheProvider>
				</body>
			</html>
		</Providers>
	);
}
