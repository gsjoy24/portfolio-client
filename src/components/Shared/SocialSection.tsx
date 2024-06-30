import XIcon from '@mui/icons-material/X';
import { Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';

const SocialSection = () => {
	const socialLinks = {
		facebook: 'https://www.facebook.com/goursahajoy',
		instagram: 'https://www.instagram.com/goursahajoy',
		youtube: 'https://www.youtube.com/@goursahajoy',
		x: 'https://www.x.com/goursahajoy',
		linkedin: 'https://www.linkedin.com/in/goursahajoy'
	};

	const iconDesign =
		'text-[20px] h-10 w-10 flex justify-center items-center bg-[#132a13] hover:bg-[#fff] duration-200 rounded-full text-white hover:text-[#132a13] border border-[#132a13]';

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
					<Link href={socialLinks.linkedin} className={iconDesign}>
						<FaLinkedinIn />
					</Link>
				</motion.div>
				<motion.div variants={textVariant} initial='initial' animate='animate'>
					<Link href={socialLinks.facebook} className={iconDesign}>
						<FaFacebookF />
					</Link>
				</motion.div>
				<motion.div variants={textVariant} initial='initial' animate='animate'>
					<Link href={socialLinks.instagram} className={iconDesign}>
						<FaInstagram />
					</Link>
				</motion.div>
				<motion.div variants={textVariant} initial='initial' animate='animate'>
					<Link href={socialLinks.youtube} className={iconDesign}>
						<FaYoutube />
					</Link>
				</motion.div>
				<motion.div variants={textVariant} initial='initial' animate='animate'>
					<Link href={socialLinks.x} className={iconDesign}>
						<XIcon />
					</Link>
				</motion.div>
			</Stack>
		</>
	);
};

export default SocialSection;
