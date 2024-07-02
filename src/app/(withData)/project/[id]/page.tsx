'use client';
import LoadingCompo from '@/components/Loading/LoadingCompo';
import { useGetProjectQuery } from '@/redux/api/apis';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import parse from 'html-react-parser';
import Image from 'next/image';
import { IoLogoGithub } from 'react-icons/io';
import { MdOpenInNew } from 'react-icons/md';

const ProjectDetails = ({ params }: { params: { id: string } }) => {
	const { data, isLoading } = useGetProjectQuery(params?.id);
	const description: string = data?.data?.description || '';
	return isLoading ? (
		<LoadingCompo />
	) : (
		<Container>
			<Box
				sx={{
					my: 8
				}}
			>
				<motion.div
					initial={{ opacity: 0, y: 20, scale: 0.7 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.3 }}
				>
					<Image src={data?.data?.image} alt='project image' height={900} width={1200} className='w-full' />
				</motion.div>
				<Box>
					<Typography
						variant='h1'
						sx={{
							fontWeight: 'bold',
							my: 4,
							fontSize: {
								xs: '2.2rem',
								md: '3rem'
							}
						}}
						aria-label={data?.data?.title}
					>
						<span>
							{data?.data?.title.split(' ').map((el: string, i: number) => (
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

					{/* buttons */}
					<Stack direction='row' spacing={2} sx={{ mb: 2 }}>
						<Button href={data?.data?.liveLink} target='_blank' endIcon={<MdOpenInNew />}>
							Live
						</Button>
						<Button href={data?.data?.frontEndRepo} target='_blank' startIcon={<IoLogoGithub />}>
							Frontend
						</Button>
						{data?.data?.backEndRepo && (
							<Button href={data?.data?.backEndRepo} target='_blank' startIcon={<IoLogoGithub />}>
								Backend
							</Button>
						)}
					</Stack>

					<Typography
						sx={{
							fontWeight: 'bold',
							fontSize: {
								sx: 18,
								sm: 22
							},
							mb: 1
						}}
					>
						{'Frontend Technologies:'.split(' ').map((el: string, i: number) => (
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
					<Typography>
						{data?.data?.frontEndTech.split(' ').map((el: string, i: number) => (
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

					{/* backend */}
					<Typography
						sx={{
							fontWeight: 'bold',
							fontSize: {
								sx: 18,
								sm: 22
							},
							my: 1
						}}
					>
						{'Backend Technologies:'.split(' ').map((el: string, i: number) => (
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
					<Typography>
						{data?.data?.backEndTech.split(' ').map((el: string, i: number) => (
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

					<Typography sx={{ fontWeight: 'bold', fontSize: 22, my: 1 }}>
						{`It took ${data?.data?.duration} to complete this project.`.split(' ').map((el: string, i: number) => (
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

					<motion.div
						className='mt-5'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						{parse(description)}
					</motion.div>
				</Box>
			</Box>
		</Container>
	);
};

export default ProjectDetails;
