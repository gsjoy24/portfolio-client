import XIcon from '@mui/icons-material/X';
import { Stack, Typography } from '@mui/material';
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

	return (
		<>
			<Typography variant='h6' my={2}>
				Follow Me
			</Typography>
			<Stack direction='row' align-items='center' gap={1}>
				<Link href={socialLinks.linkedin} className={iconDesign}>
					<FaLinkedinIn />
				</Link>
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
