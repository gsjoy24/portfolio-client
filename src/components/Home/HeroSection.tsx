'use client';
import { TProfile } from '@/types';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Button, ButtonGroup, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import { FieldValues } from 'react-hook-form';
import { FaRegPaperPlane } from 'react-icons/fa';

const HeroSection = ({ data }: { data: TProfile }) => {
	return (
		<Stack
			direction={{
				xs: 'column-reverse',
				md: 'row'
			}}
			spacing={4}
			justifyContent='space-between'
			alignItems='center'
		>
			<Box>
				<Typography
					variant='h1'
					sx={{
						fontWeight: 'bold',
						fontSize: { xs: '2.5rem', md: '3.5rem', display: 'flex', flexDirection: 'column' },
						gap: '0.5rem'
					}}
				>
					<span className='text-[22px]'>Hello there!</span>

					<span>
						<span className='text-[22px]'>I&#39;m</span> {data?.name}
					</span>
				</Typography>
				<Typography variant='h2' sx={{ fontWeight: 'bold', fontSize: '1.2rem', mb: 3 }}>
					{data?.designation}
				</Typography>
				<ButtonGroup>
					{/* resume download and see button */}
					<Button endIcon={<DownloadForOfflineIcon />} href={data?.resumeLink} download>
						Resume
					</Button>
					<Button href={data?.resumeLink} target='_blank'>
						<VisibilityIcon />
					</Button>
				</ButtonGroup>
			</Box>
			<Box>
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
	);
};

export default HeroSection;
