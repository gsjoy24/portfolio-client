import XIcon from '@mui/icons-material/X';
import { Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';

type TProp = {
	linkedin: string;
	github: string;
	x: string;
	facebook: string;
	youtube: string;
};
const SocialSection = ({ socialLinks }: { socialLinks: TProp }) => {
	console.log(socialLinks);
	const iconDesign =
		'text-[20px] h-10 w-10 flex justify-center items-center bg-[#023047] hover:bg-[#fff] duration-200 rounded-full text-white hover:text-[#023047] border border-[#023047]';

	const textVariant = {
		initial: {
			scale: 0
		},
		animate: {
			scale: 1,
			transition: {
				duration: 1,
				staggerChildren: 0.2,
				staggerDirection: -1,
				delayChildren: 0.5
			}
		}
	};

	return (
		<>
			<Typography variant='h6' my={2}>
				Follow Me
			</Typography>
			<Stack
				direction='row'
				align-items='center'
				gap={1}
				component={motion.div}
				variants={textVariant}
				initial='initial'
				animate='animate'
			>
				<motion.div variants={textVariant} initial='initial' animate='animate'>
					<Link href={socialLinks?.linkedin} className={iconDesign}>
						<FaLinkedinIn />
					</Link>
				</motion.div>
				<motion.div variants={textVariant} initial='initial' animate='animate'>
					<Link href={socialLinks?.facebook} className={iconDesign}>
						<FaFacebookF />
					</Link>
				</motion.div>
				<motion.div variants={textVariant} initial='initial' animate='animate'>
					<Link href={socialLinks?.github} className={iconDesign}>
						<FaGithub />
					</Link>
				</motion.div>
				<motion.div variants={textVariant} initial='initial' animate='animate'>
					<Link href={socialLinks?.youtube} className={iconDesign}>
						<FaYoutube />
					</Link>
				</motion.div>
				<motion.div variants={textVariant} initial='initial' animate='animate'>
					<Link href={socialLinks?.x} className={iconDesign}>
						<XIcon />
					</Link>
				</motion.div>
			</Stack>
		</>
	);
};

export default SocialSection;
