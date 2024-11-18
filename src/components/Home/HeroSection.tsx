"use client";
import { TProfile } from "@/types";
import convertToDownloadLink from "@/utils/convertToDownloadLink";
import { Box, Button, ButtonGroup, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaCode } from "react-icons/fa6";
import { GoDownload, GoEye } from "react-icons/go";
import { MdConnectWithoutContact } from "react-icons/md";
import AnimatedText from "../Shared/AnimatedText";

const HeroSection = ({ data }: { data: TProfile }) => {
	const downloadLink = convertToDownloadLink(data?.resumeLink);
	return (
		<Box
			sx={{
				position: "relative",
				overflow: "hidden"
			}}
		>
			<Container>
				<Stack
					direction={{
						xs: "column-reverse",
						sm: "row"
					}}
					gap={5}
					py={2}
					justifyContent='space-between'
					alignItems='center'
				>
					<Box>
						<Typography
							variant='h1'
							sx={{
								fontWeight: "bold",
								fontSize: { xs: "2.5rem", md: "4.5rem" },
								display: "flex",
								flexDirection: "column",
								gap: "0.5rem"
							}}
							aria-label={`Hi there, I am ${data?.name}`}
						>
							<span className='text-[1.3rem] lg:text-[2rem] mb-4'>
								<AnimatedText text='Hi there, I am' />
							</span>
							<span>
								<AnimatedText text={data.name} />
							</span>
						</Typography>

						<Typography
							variant='h2'
							sx={{ fontWeight: "bold", fontSize: "1.5rem", my: 3 }}
							aria-label={data?.designation}
						>
							<AnimatedText text={data.designation} delay={0.2} />
						</Typography>

						{/* resume download and see button */}
						<Stack direction='row' alignItems='center' gap={2}>
							<ButtonGroup
								aria-label='Download or see resume'
								component={motion.div}
								sx={{ borderColor: "secondary.main", color: "secondary.main" }}
								initial={{
									opacity: 0,
									scale: 0
								}}
								whileInView={{
									opacity: 1,
									scale: 1
								}}
								transition={{
									duration: 0.25,
									delay: 1
								}}
								viewport={{ once: true }}
							>
								<Button
									aria-label='Download the resume'
									endIcon={<GoDownload />}
									href={downloadLink}
									download
									sx={{
										borderColor: "#F5F7F877",
										color: "secondary.main",
										"&:hover": {
											backgroundColor: "primary.main",
											color: "white",
											borderColor: "white"
										}
									}}
								>
									Resume
								</Button>
								<Button
									href={data?.resumeLink}
									target='_blank'
									aria-label='See the resume'
									sx={{
										borderColor: "#F5F7F877",
										color: "secondary.main",
										"&:hover": {
											backgroundColor: "primary.main",
											color: "white",
											borderColor: "white"
										}
									}}
								>
									<GoEye size={20} />
								</Button>
							</ButtonGroup>

							{/* Contact Me button */}
							<motion.div
								initial={{
									opacity: 0,
									scale: 0
								}}
								whileInView={{
									opacity: 1,
									scale: 1
								}}
								transition={{
									duration: 0.25,
									delay: 1.5
								}}
								viewport={{ once: true }}
							>
								<Button
									component={Link}
									href='/contact'
									variant='outlined'
									startIcon={<MdConnectWithoutContact />}
									sx={{
										"&:hover": {
											backgroundColor: "primary.main",
											color: "white"
										}
									}}
								>
									Contact Me
								</Button>
							</motion.div>
						</Stack>
					</Box>

					{/* image */}
					<Box
						className='-z-40 max-w-[23rem] lg:max-w-[30rem] w-full min-h-[50vh] h-auto'
						component={motion.div}
						initial={{
							opacity: 0,
							scale: 0.5
						}}
						whileInView={{
							opacity: 1,
							scale: 1
						}}
						transition={{
							duration: 0.5,
							delay: 0.3
						}}
						viewport={{ once: true }}
					>
						<Image
							aria-label={`Picture of ${data?.name}`}
							src={data?.profilePicture}
							alt={`Picture of ${data?.name}`}
							width={800}
							height={800}
							className='rounded-[40px] w-full h-auto'
						/>
					</Box>
				</Stack>
			</Container>
			<motion.div
				className='text-[200px] font-bold absolute bottom-0 whitespace-nowrap opacity-10  overflow-visible -z-30 w-[80%]'
				animate={{
					translateX: "-450%"
				}}
				transition={{
					duration: 25,
					repeat: Infinity,
					repeatType: "loop",
					ease: "linear"
				}}
				aria-hidden
			>
				<h3>
					<span className='mr-16 inline-block'>
						{data?.name} <FaCode className='inline-block' /> {data?.designation}
					</span>
					<span className='mr-16 inline-block'>
						{data?.name} <FaCode className='inline-block' /> {data?.designation}
					</span>
					<span>
						{data?.name} <FaCode className='inline-block' /> {data?.designation}
					</span>
				</h3>
			</motion.div>
		</Box>
	);
};

export default HeroSection;
