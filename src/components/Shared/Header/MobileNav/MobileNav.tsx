"use client";
import { navLinks } from "@/constant";
import { useGetProfileQuery } from "@/redux/api/apis";
import { Container, IconButton, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import SocialSection from "../../SocialSection";

const MobileNav = () => {
	const [open, setOpen] = useState<boolean>(false);
	const { data, isLoading } = useGetProfileQuery({});
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
		<Box sx={{ width: 350, zIndex: 999 }} px={2}>
			<Box
				component={motion.div}
				initial={{ x: -500, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{
					duration: 1
				}}
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					p: 2,
					borderBottom: "1px solid #455a6477",
					mb: 3,
					position: "sticky",
					top: 0,
					bgcolor: "background.paper",
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
							fontWeight: "900",
							color: "secondary.main",
							transition: "color 0.2s",
							fontSize: "2rem",
							"&:hover": {
								color: "#fff"
							}
						}}
					>
						@goursahajoy
					</Typography>
				</Link>
				<IconButton
					size='small'
					onClick={toggleDrawer(false)}
					aria-label='close drawer'
					sx={{
						bgcolor: "#eee",
						color: "secondary.main"
					}}
				>
					<IoClose size={25} />
				</IconButton>
			</Box>

			{/* links */}
			<Stack direction='column' gap={2} p={2} mt={2}>
				{navLinks?.map((link, index) => (
					<Link key={index} href={link?.path} onClick={toggleDrawer(false)}>
						<Stack
							component={motion.div}
							initial={{ x: -500, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{
								duration: 1,
								delay: index * 0.2
							}}
							direction='row'
							justifyContent='space-between'
							align-items='center'
							sx={{
								transition: "all 0.3s",
								fontSize: 24,
								pb: "5px",
								borderBottom: "1px solid #132a1346"
							}}
						>
							<span>{link?.title}</span>
							<MdOutlineArrowOutward />
						</Stack>
					</Link>
				))}
			</Stack>
			{!isLoading && <SocialSection socialLinks={data?.data?.socialLinks} />}
		</Box>
	);

	return (
		<>
			<Box
				sx={{
					position: "sticky",
					top: 0,
					zIndex: 999,
					backgroundColor: "#22283199",
					backdropFilter: "blur(10px)",
					display: { xs: "flex", sm: "none" }
				}}
			>
				<Container>
					<Stack
						direction='row'
						justifyContent='space-between'
						alignItems='center'
						gap={2}
						sx={{ display: { xs: "flex", sm: "none" } }}
						py={1}
					>
						{/* text logo */}
						<Link href='/'>
							<Typography
								aria-label='GSJoy Logo'
								sx={{
									fontWeight: "900",
									color: "secondary.main",
									transition: "color 0.2s",
									fontSize: "1.5rem"
								}}
							>
								@goursahajoy
							</Typography>
						</Link>
						<IconButton
							onClick={toggleDrawer(true)}
							aria-label='open drawer'
							sx={{
								color: "secondary.main"
							}}
						>
							<CgMenuRightAlt size={32} />
						</IconButton>
					</Stack>
				</Container>
			</Box>
			<Drawer open={open} onClose={toggleDrawer(false)}>
				{DrawerList}
			</Drawer>
		</>
	);
};

export default MobileNav;
