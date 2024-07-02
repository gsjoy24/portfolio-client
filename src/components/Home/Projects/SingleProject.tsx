import { TProject } from '@/types';
import { Box, Button, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdOpen } from 'react-icons/io';

const SingleProject = ({ project, delay }: { project: TProject; delay: number }) => {
	return (
		<Box
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
				duration: 0.5,
				delay
			}}
			whileHover={{
				scale: 1.05,
				transition: {
					duration: 0.2
				}
			}}
			sx={{
				p: 3,
				my: 2,
				bgcolor: 'background.paper',
				borderRadius: 4,
				boxShadow: 2
			}}
		>
			<Image src={project.image} alt='project image' height={340} width={340} />
			<Typography
				variant='h5'
				sx={{
					fontWeight: 'bold',
					my: 2,
					fontSize: '1rem'
				}}
			>
				{project.title}
			</Typography>
			<Stack spacing={2} direction='row'>
				<Button component={Link} href={project?.liveLink} endIcon={<IoMdOpen size={16} />}>
					Live
				</Button>
				<Button component={Link} href={`project/${project?._id}`}>
					See Details
				</Button>
			</Stack>
		</Box>
	);
};

export default SingleProject;