'use client';
import LoadingCompo from '@/components/Loading/LoadingCompo';
import { useGetProjectsQuery } from '@/redux/api/apis';
import { TProject } from '@/types';
import { Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import SingleProject from './SingleProject';

const Projects = () => {
	const { data, isLoading } = useGetProjectsQuery({});

	return isLoading ? (
		<LoadingCompo />
	) : (
		<Container
			id='projects'
			maxWidth='md'
			sx={{
				py: 12
			}}
		>
			<Typography
				variant='h4'
				sx={{
					fontWeight: 'bold',
					marginBottom: 4
				}}
				aria-label='My Projects'
			>
				{'My Projects'.split(' ').map((el: string, i: number) => (
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
			<Grid container>
				{data?.data?.map((project: TProject, i: number) => (
					<Grid
						item
						key={project._id}
						xs={12}
						md={6}
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<SingleProject project={project} delay={i / 10} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default Projects;
