import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
const About = ({ data }: { data: string }) => {
	const title = 'About  Me'.split('');
	const content = data.split(' ');
	return (
		<Container
			maxWidth='md'
			sx={{
				mt: 4
			}}
		>
			<Typography
				variant='h4'
				sx={{
					fontWeight: 'bold',
					marginBottom: 4
				}}
			>
				{title.map((el, i) => (
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
				{content.map((el, i) => (
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
		</Container>
	);
};

export default About;
