'use client';
import { navLinks } from '@/constant';
import { IconButton, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
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

	const DrawerList = (
		<Box sx={{ width: 350, zIndex: 999 }} role='presentation' px={2}>
			<Box
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
		<>
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
		</>
	);
};

export default MobileNav;
