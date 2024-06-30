import { Stack, Typography } from '@mui/material';
import Link from 'next/link';

const Nav = () => {
	const navLinks: {
		title: string;
		path: string;
	}[] = [
		{ title: 'Home', path: '/' },
		{ title: 'About', path: '/about' },
		{ title: 'Contact', path: '/contact' },
		{ title: 'Services', path: '/services' }
	];

	return (
		<>
			<Stack
				direction='row'
				justifyContent='space-between'
				alignItems='center'
				py={1}
				sx={{
					position: 'sticky',
					top: 0,
					zIndex: 100,
					backgroundColor: 'primary.main',
					display: { xs: 'none', sm: 'flex' },
					borderBottom: '1px solid #455a6477',
					mb: 2
				}}
			>
				{/* text logo */}
				<Link href='/'>
					<Typography
						aria-label='GSJoy Logo'
						sx={{
							fontWeight: '900',
							color: 'secondary.main',
							transition: 'color 0.2s',
							fontSize: '2rem',
							'&:hover': {
								color: '#fff'
							}
						}}
					>
						GSJoy
					</Typography>
				</Link>
				<Stack direction='row' gap={3}>
					{navLinks.map((link, index) => (
						<Link key={index} href={link?.path}>
							<Typography
								aria-label={link?.title}
								sx={{
									fontWeight: '500',
									transition: 'color 0.2s',
									color: 'secondary.main',
									'&:hover': {
										color: '#fff',
										textDecoration: 'underline',
										textUnderlineOffset: '5px'
									}
								}}
							>
								{link?.title}
							</Typography>
						</Link>
					))}
				</Stack>
			</Stack>
		</>
	);
};

export default Nav;
