import { Box, Button, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { TfiHeadphoneAlt } from 'react-icons/tfi';

const Nav = () => {
	const navLinks = [
		{ title: 'Home', link: '/' },
		{ title: 'About', link: '/about' },
		{ title: 'Contact', link: '/contact' },
		{ title: 'Services', link: '/services' }
	];
	return (
		<Stack
			direction='row'
			justifyContent='space-between'
			alignItems='center'
			py={1}
			sx={{
				position: 'sticky',
				top: 0,
				zIndex: 100,
				backgroundColor: 'white',
				display: { xs: 'none', md: 'flex' }
			}}
		>
			{/* text logo */}
			<Link href='/'>
				<Typography
					variant='h5'
					sx={{
						fontWeight: 'bold',
						color: 'secondary.main',
						transition: 'color 0.2s',
						'&:hover': {
							color: 'primary.main'
						}
					}}
				>
					NextJS
				</Typography>
			</Link>
			<Stack direction='row' gap={2}>
				{navLinks.map((link, index) => (
					<Link key={index} href={link.link}>
						<Typography
							sx={{
								fontWeight: '500',
								transition: 'color 0.2s',
								color: 'secondary.main',
								'&:hover': {
									color: 'primary.main'
								}
							}}
						>
							{link.title}
						</Typography>
					</Link>
				))}
			</Stack>

			<Button>Contact Us</Button>
		</Stack>
	);
};

export default Nav;
