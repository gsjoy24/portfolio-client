'use client';
import { TProfile } from '@/types';
import convertToDownloadLink from '@/utils/convertToDownloadLink';
import { Box, Button, ButtonGroup, Container, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaCode } from 'react-icons/fa6';
import { GoDownload, GoEye } from 'react-icons/go';
import { MdConnectWithoutContact } from 'react-icons/md';

const sliderTextVariant = {
	initial: {
		x: 0
	},
	animate: {
		x: '-500%',
		transition: {
			repeat: Infinity,
			duration: 30,
			ease: 'linear',
			repeatType: 'mirror' as const
		}
	}
};

const HeroSection = ({ data }: { data: TProfile }) => {
	const downloadLink = convertToDownloadLink(data?.resumeLink);
	return (
		<Box
			sx={{
				position: 'relative',
				overflow: 'hidden'
			}}
		>
			<Container>
				<Stack
					direction={{
						xs: 'column-reverse',
						md: 'row'
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
								fontWeight: 'bold',
								fontSize: { xs: '2.5rem', md: '4.5rem' },
								display: 'flex',
								flexDirection: 'column',
								gap: '0.5rem'
							}}
						>
							<span className='text-[30px]'>
								{'Hi there, I am'.split(' ').map((el: string, i: number) => (
									<motion.span
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1 }}
										transition={{
											duration: 0.25,
											delay: i / 10
										}}
										key={i}
									>
										{el}{' '}
									</motion.span>
								))}
							</span>
							<span>
								{data?.name.split(' ').map((el: string, i: number) => (
									<motion.span
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1 }}
										transition={{
											duration: 0.25,
											delay: i / 10
										}}
										key={i}
									>
										{el}{' '}
									</motion.span>
								))}
							</span>
						</Typography>
						<Typography variant='h2' sx={{ fontWeight: 'bold', fontSize: '1.5rem', mb: 3 }}>
							{data.designation.split(' ').map((el: string, i: number) => (
								<motion.span
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									transition={{
										duration: 0.25,
										delay: i / 10
									}}
									key={i}
								>
									{el}{' '}
								</motion.span>
							))}
						</Typography>

						{/* resume download and see button */}
						<Stack direction='row' alignItems='center' gap={2}>
							<ButtonGroup
								aria-label='Download or see resume'
								component={motion.div}
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
							>
								<Button
									aria-label='Download the resume'
									endIcon={<GoDownload />}
									href={downloadLink}
									download
									sx={{
										'&:hover': {
											backgroundColor: 'primary.main',
											color: 'white'
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
										'&:hover': {
											backgroundColor: 'primary.main',
											color: 'white'
										}
									}}
								>
									<GoEye size={20} />
								</Button>
							</ButtonGroup>
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
									delay: 2
								}}
							>
								<Button
									component={Link}
									href='/contact'
									variant='outlined'
									startIcon={<MdConnectWithoutContact />}
									sx={{
										'&:hover': {
											backgroundColor: 'primary.main',
											color: 'white'
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
						className='-z-40'
						component={motion.div}
						initial={{
							opacity: 0,
							scale: 0
						}}
						whileInView={{
							opacity: 1,
							scale: 1
						}}
						transition={{
							duration: 0.3,
							delay: 0.5
						}}
					>
						<Image
							aria-label={`Picture of ${data?.name}`}
							src={data?.profilePicture}
							alt={`Picture of ${data?.name}`}
							width={250}
							height={300}
							className='rounded-[40px] w-[250px] sm:w-auto'
						/>
					</Box>
				</Stack>
			</Container>
			<motion.div
				className='text-[200px] font-bold absolute bottom-0 whitespace-nowrap opacity-10  overflow-visible -z-30 w-[50%]'
				variants={sliderTextVariant}
				initial='initial'
				animate='animate'
				aria-hidden
			>
				<h3>
					{data?.name} <FaCode className='inline-block' /> {data?.designation}
				</h3>
			</motion.div>
		</Box>
	);
};

export default HeroSection;
