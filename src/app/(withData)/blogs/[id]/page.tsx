'use client';
import LoadingCompo from '@/components/Loading/LoadingCompo';
import { useGetBlogQuery } from '@/redux/api/apis';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import parse from 'html-react-parser';
import Image from 'next/image';

const FullBlog = ({ params }: { params: { id: string } }) => {
	const { data, isLoading } = useGetBlogQuery(params?.id);
	const content: string = data?.data?.content || '';
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
					<Image
						src={data?.data?.image}
						alt='blog image'
						height={900}
						width={1200}
						className='w-full max-w-[700px] mx-auto'
					/>
				</motion.div>
				<Box>
					<Typography
						variant='h1'
						sx={{
							fontWeight: 'bold',
							my: 4,
							fontSize: {
								xs: '1.6rem',
								md: '2.2rem'
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
									key={`${el}-${i}`}
								>
									{el}{' '}
								</motion.span>
							))}
						</span>
					</Typography>

					<motion.div
						className='mt-5'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						{parse(content)}
					</motion.div>
				</Box>
			</Box>
		</Container>
	);
};

export default FullBlog;
