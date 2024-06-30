import XIcon from '@mui/icons-material/X';
import { Box, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';

const SocialSection = () => {
	const socialLinks = {
		facebook: 'https://www.facebook.com/',
		instagram: 'https://www.instagram.com/',
		youtube: 'https://www.youtube.com/',
		x: 'https://www.x.com/'
	};
	const iconDesign =
		'text-[20px] h-10 w-10 flex justify-center items-center bg-[#29A56C] hover:bg-[#004D29] duration-200 rounded-full text-white';

	return (
		<>
			<Typography variant='h6' gutterBottom>
				Follow Us
			</Typography>
			<Stack direction='row' align-items='center' gap={1}>
				<Link href={socialLinks.facebook} className={iconDesign}>
					<FaFacebookF />
				</Link>
				<Link href={socialLinks.instagram} className={iconDesign}>
					<FaInstagram />
				</Link>
				<Link href={socialLinks.youtube} className={iconDesign}>
					<FaYoutube />
				</Link>
				<Link href={socialLinks.x} className={iconDesign}>
					<XIcon />
				</Link>
			</Stack>
		</>
	);
};

export default SocialSection;
