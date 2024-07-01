import { Box } from '@mui/material';

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<Box
			component='footer'
			sx={{
				textAlign: 'center',
				padding: '1rem',
				backgroundColor: 'primary.main',
				color: 'white',
				fontSize: '1rem'
			}}
		>
			&copy; {year} Gour Saha Joy. All rights reserved.
		</Box>
	);
};

export default Footer;
