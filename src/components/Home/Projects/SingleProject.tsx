import AnimatedText from '@/components/Shared/AnimatedText';
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
				boxShadow: 2,
				maxWidth: 500,
				width: '100%'
			}}
		>
			<Image src={project?.image} className='w-full ' alt='project image' height={340} width={340} />
			<AnimatedText
				text={project?.title}
				variant='h1'
				sx={{
					fontWeight: 'bold',
					my: 2,
					fontSize: '1rem'
				}}
			/>
			<Stack gap={2} direction='row' justifyContent='end'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.25,
						delay: 0.5
					}}
				>
					<Button component={Link} href={project?.liveLink} endIcon={<IoMdOpen size={16} />}>
						Live
					</Button>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.25,
						delay: 0.7
					}}
				>
					<Button component={Link} href={`project/${project?._id}`}>
						See Details
					</Button>
				</motion.div>
			</Stack>
		</Box>
	);
};

export default SingleProject;
