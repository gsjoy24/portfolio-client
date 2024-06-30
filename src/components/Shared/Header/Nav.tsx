import { navLinks } from '@/constant';
import { Container, Divider, Stack, Typography } from '@mui/material';
import Link from 'next/link';

const Nav = () => {
	return (
		<>
			<Container>
				<Stack
					direction='row'
					justifyContent='space-between'
					alignItems='center'
					py={1}
					sx={{
						position: 'sticky',
						top: 0,
						zIndex: 999,
						backgroundColor: '#f8f7ff',
						display: { xs: 'none', sm: 'flex' },
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
								fontSize: '2rem'
							}}
						>
							GSJoy
						</Typography>
					</Link>
					{/* nav links */}
					<Stack direction='row' gap={3}>
						{navLinks?.map((link, index) => (
							<Link key={index} href={link?.path}>
								<Typography
									aria-label={link?.title}
									sx={{
										fontWeight: '500',
										transition: 'color 0.2s',
										color: 'secondary.main',
										position: 'relative',
										'&::after': {
											content: '""',
											position: 'absolute',
											bottom: '-5px',
											left: 0,
											right: 0,
											transition: 'width 0.2s',
											width: '0px',
											height: '2px',
											backgroundColor: '#000'
										},
										'&:hover': {
											'&::after': {
												width: '100%'
											}
										}
									}}
								>
									{link?.title}
								</Typography>
							</Link>
						))}
					</Stack>
				</Stack>
			</Container>
			<Divider />
		</>
	);
};

export default Nav;
