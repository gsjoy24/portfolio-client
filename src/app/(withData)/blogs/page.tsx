'use client';

import LoadingCompo from '@/components/Loading/LoadingCompo';
import BlogCard from '@/components/Shared/BlogCard/BlogCard';
import { useGetBlogsQuery } from '@/redux/api/apis';
import { TBlog } from '@/types';
import { Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const BlogsPage = () => {
	const { data, isLoading } = useGetBlogsQuery({});
	const description: string =
		"Welcome to my blog! Here, I share insights and tutorials on frontend, backend, and the latest trends in web development. Let's embark on a journey of learning and creativity together in the ever-evolving digital landscape.";

	return isLoading ? (
		<LoadingCompo />
	) : (
		<Container
			maxWidth='md'
			sx={{
				py: 4
			}}
		>
			<div className='text-center'>
				<Typography
					variant='h4'
					sx={{
						fontWeight: 'bold',
						marginBottom: 4
					}}
					aria-label='My Blogs'
				>
					{'Blogs'.split(' ').map((el: string, i: number) => (
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
				<Typography
					sx={{
						marginBottom: 4
					}}
				>
					{description.split(' ').map((el: string, i: number) => (
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
			</div>
			<Grid container>
				{data?.data?.map((project: TBlog, i: number) => (
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
						<BlogCard blog={project} delay={i / 10} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default BlogsPage;
