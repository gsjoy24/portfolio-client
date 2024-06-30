'use client';
import { TProfile } from '@/types';
import convertToDownloadLink from '@/utils/convertToDownloadLink';
import { Box, Button, ButtonGroup, Container, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCode } from 'react-icons/fa6';
import { GoDownload, GoEye } from 'react-icons/go';

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

const sliderTextVariant = {
	initial: {
		x: 0
	},
	animate: {
		x: '-220%',
		transition: {
			repeat: 60,
			duration: 20,
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
					gap={4}
					py={2}
					justifyContent='space-between'
					alignItems='center'
				>
					<Box component={motion.div} variants={textVariant} initial='initial' animate='animate'>
						<Typography
							variant='h1'
							component={motion.h1}
							variants={textVariant}
							initial='initial'
							animate='animate'
							sx={{
								fontWeight: 'bold',
								fontSize: { xs: '2.5rem', md: '4rem', display: 'flex', flexDirection: 'column' },
								gap: '0.5rem'
							}}
						>
							<motion.span variants={textVariant} initial='initial' animate='animate' className='text-[30px]'>
								Hello there!
							</motion.span>
							<motion.span variants={textVariant} initial='initial' animate='animate'>
								<span className='text-[30px]'>I&#39;m</span> {data?.name}
							</motion.span>
						</Typography>
						<Typography
							component={motion.h2}
							variants={textVariant}
							initial='initial'
							animate='animate'
							variant='h2'
							sx={{ fontWeight: 'bold', fontSize: '1.5rem', mb: 3 }}
						>
							{data?.designation}
						</Typography>
						<ButtonGroup component={motion.div} variants={textVariant} initial='initial' animate='animate'>
							{/* resume download and see button */}
							<Button endIcon={<GoDownload />} href={downloadLink} download>
								Resume
							</Button>
							<Button href={data?.resumeLink} target='_blank'>
								<GoEye size={20} />
							</Button>
						</ButtonGroup>
					</Box>
					<Box component={motion.div} variants={textVariant} initial='initial' animate='animate' className='-z-40'>
						<Image
							priority={true}
							src={data?.profilePicture}
							alt={`Picture of ${data?.name}`}
							width={400}
							height={400}
							className='rounded-[40%]'
						/>
					</Box>
				</Stack>
			</Container>
			<motion.div
				className='text-[150px] font-bold absolute bottom-0 whitespace-nowrap opacity-15 overflow-visible -z-30 w-[50%]'
				variants={sliderTextVariant}
				initial='initial'
				animate='animate'
			>
				{data?.name} <FaCode className='inline-block' /> {data?.designation}
			</motion.div>
		</Box>
	);
};

export default HeroSection;
