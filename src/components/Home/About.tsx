import developer from '@/assets/developer.svg';
import { Box, Container, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = ({ data }: { data: string }) => {
	const title = 'About Me'.split('');
	const content = data.split(' ');
	return (
		<Container
			maxWidth='md'
			sx={{
				my: 8
			}}
		>
			<Stack
				direction={{
					xs: 'column',
					md: 'row'
				}}
				alignItems='center'
				justifyContent='space-between'
				spacing={2}
			>
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
						duration: 0.3,
						delay: 0.5
					}}
				>
					<Image src={developer} alt='developer image' height={340} width={340} />
				</Box>
				<Box
					sx={{
						width: {
							xs: '100%',
							md: '50%'
						}
					}}
				>
					<Typography
						variant='h4'
						sx={{
							fontWeight: 'bold',
							marginBottom: 4
						}}
						aria-label='About Me'
					>
						{title.map((el: string, i: number) => (
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
					<Typography variant='body1' sx={{ textAlign: 'justify' }}>
						{content.map((el: string, i: number) => (
							<motion.span
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{
									duration: 0.15,
									delay: i / 20
								}}
								key={i}
							>
								{el}{' '}
							</motion.span>
						))}
					</Typography>
				</Box>
			</Stack>
		</Container>
	);
};

export default About;
