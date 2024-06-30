'use client';
import { navLinks } from '@/constant';
import { Container, IconButton, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { CgMenuRightAlt } from 'react-icons/cg';
import { IoClose } from 'react-icons/io5';
import { MdOutlineArrowOutward } from 'react-icons/md';
import SocialSection from '../../SocialSection';

const MobileNav = () => {
	const [open, setOpen] = useState<boolean>(false);
	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};

	const textVariant = {
		initial: {
			x: -500,
			opacity: 0
		},
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 1,
				staggerChildren: 0.2
			}
		}
	};

	const DrawerList = (
		<Box
			sx={{ width: 350, zIndex: 999 }}
			role='presentation'
			px={2}
			component={motion.div}
			variants={textVariant}
			initial='initial'
			animate='animate'
		>
			<Box
				component={motion.div}
				variants={textVariant}
				initial='initial'
				animate='animate'
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					p: 2,
					borderBottom: '1px solid #455a6477',
					mb: 3,
					position: 'sticky',
					top: 0,
					bgcolor: 'background.paper',
					zIndex: 1
				}}
			>
				{/* text logo */}
				<Link href='/'>
					<Typography
						component={motion.div}
						variants={textVariant}
						initial='initial'
						animate='animate'
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
				<IconButton
					size='small'
					onClick={toggleDrawer(false)}
					aria-label='close drawer'
					sx={{
						bgcolor: 'background.paper',
						color: 'secondary.main'
					}}
				>
					<IoClose size={22} />
				</IconButton>
			</Box>

			{/* links */}
			<Stack direction='column' gap={2} p={2} mt={2}>
				{navLinks?.map((link, index) => (
					<Link key={index} href={link?.path} onClick={toggleDrawer(false)}>
						<Stack
							component={motion.div}
							variants={textVariant}
							initial='initial'
							animate='animate'
							direction='row'
							justifyContent='space-between'
							align-items='center'
							sx={{
								transition: 'all 0.3s',
								fontSize: 20,
								pb: '5px',
								borderBottom: '1px solid #132a1346'
							}}
						>
							<span>{link?.title}</span>
							<MdOutlineArrowOutward />
						</Stack>
					</Link>
				))}
			</Stack>
			<SocialSection />
		</Box>
	);

	return (
		<Container>
			<Stack
				direction='row'
				justifyContent='space-between'
				alignItems='center'
				gap={2}
				sx={{ display: { xs: 'flex', sm: 'none' } }}
				py={1}
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
				<IconButton
					onClick={toggleDrawer(true)}
					aria-label='open drawer'
					sx={{
						color: 'secondary.main'
					}}
				>
					<CgMenuRightAlt size={32} />
				</IconButton>
			</Stack>
			<Drawer open={open} onClose={toggleDrawer(false)}>
				{DrawerList}
			</Drawer>
		</Container>
	);
};

export default MobileNav;
