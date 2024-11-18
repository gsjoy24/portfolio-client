import XIcon from "@mui/icons-material/X";
import { Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import AnimatedText from "./AnimatedText";

type TProp = {
	linkedin: string;
	github: string;
	x: string;
	facebook: string;
	youtube: string;
};

const SocialIcon = ({ href, children, delay }: { href: string; children: React.ReactNode; delay: number }) => {
	const iconDesign =
		"text-[20px] h-10 w-10 flex justify-center items-center bg-[#EEEEEE30] hover:bg-[#eeeeee] duration-200 rounded-full text-white hover:text-[#023047] border border-[#023047]";

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			transition={{ duration: 0.5, delay }}
		>
			<Link target='_blank' href={href} className={iconDesign} aria-label={`Visit ${href}`}>
				{children}
			</Link>
		</motion.div>
	);
};

const SocialSection = ({ socialLinks }: { socialLinks: TProp }) => {
	const socialIcons = [
		{ href: socialLinks.linkedin, icon: <FaLinkedinIn />, delay: 0.4 },
		{ href: socialLinks.facebook, icon: <FaFacebookF />, delay: 0.5 },
		{ href: socialLinks.github, icon: <FaGithub />, delay: 0.6 },
		{ href: socialLinks.youtube, icon: <FaYoutube />, delay: 0.7 },
		{ href: socialLinks.x, icon: <XIcon />, delay: 0.8 }
	];

	return (
		<>
			<Typography variant='h6' my={2} aria-label='Follow me on my social accounts'>
				<AnimatedText text='Follow me on -' />
			</Typography>
			<Stack direction='row' alignItems='center' gap={1}>
				{socialIcons.map(({ href, icon, delay }, index) => (
					<SocialIcon key={index} href={href} delay={delay}>
						{icon}
					</SocialIcon>
				))}
			</Stack>
		</>
	);
};

export default SocialSection;
