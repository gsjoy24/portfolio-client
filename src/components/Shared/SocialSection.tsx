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
	const iconDesign =
		'text-[20px] h-10 w-10 flex justify-center items-center bg-[#023047] hover:bg-[#fff] duration-200 rounded-full text-white hover:text-[#023047] border border-[#023047]';

	return (
		<>
			<Typography variant='h6' my={2} aria-label='Follow me on my social accounts'>
				{'Follow_Me'.split('_').map((el: string, i: number) => (
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							duration: 0.25,
							delay: i / 10
						}}
						key={i}
					>
						{el}{' '}
					</motion.span>
				))}
			</Typography>
			<Stack direction='row' align-items='center' gap={1}>
				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<Link target='_black' href={socialLinks?.linkedin} className={iconDesign}>
						<FaLinkedinIn />
					</Link>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					transition={{ duration: 0.5, delay: 0.5 }}
				>
					<Link target='_black' href={socialLinks?.facebook} className={iconDesign}>
						<FaFacebookF />
					</Link>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					transition={{ duration: 0.5, delay: 0.6 }}
				>
					<Link target='_black' href={socialLinks?.github} className={iconDesign}>
						<FaGithub />
					</Link>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					transition={{ duration: 0.5, delay: 0.7 }}
				>
					<Link target='_black' href={socialLinks?.youtube} className={iconDesign}>
						<FaYoutube />
					</Link>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					transition={{ duration: 0.5, delay: 0.8 }}
				>
					<Link target='_black' href={socialLinks?.x} className={iconDesign}>
						<XIcon />
					</Link>
				</motion.div>
			</Stack>
		</>
	);
};

export default SocialSection;
