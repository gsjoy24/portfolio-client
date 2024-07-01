import { Box, Chip, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { ImDisplay } from 'react-icons/im';
import { IoServerOutline } from 'react-icons/io5';
type TProp = {
	frontEndSkills: string;
	backEndSkills: string;
	tools: string;
};

const Skills = ({ data }: { data: TProp }) => {
	const title = 'My Skills'.split('');
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
			<Box>
				<Typography variant='h5' sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 1 }}>
					<ImDisplay size={16} />
					{'Frontend'.split(' ').map((el, i) => (
						<motion.span
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{
								duration: 0.25,
								delay: i / 10
							}}
							key={i}
						>
							{el}
						</motion.span>
					))}
				</Typography>
				<Typography variant='body1'>
					{data?.frontEndSkills.split(',').map((el, i) => (
						<motion.span
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{
								duration: 0.25,
								delay: i / 10
							}}
							key={i}
						>
							<Chip variant='outlined' label={el} sx={{ m: 1 }} />
						</motion.span>
					))}
				</Typography>
			</Box>
			<Box mt={2}>
				<Typography variant='h5' sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 1 }}>
					<IoServerOutline size={16} />
					{'Backend'.split(' ').map((el, i) => (
						<motion.span
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{
								duration: 0.25,
								delay: i / 10
							}}
							key={i}
						>
							{el}
						</motion.span>
					))}
				</Typography>
				<Typography variant='body1'>
					{data?.backEndSkills.split(',').map((el, i) => (
						<motion.span
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{
								duration: 0.25,
								delay: i / 10
							}}
							key={i}
						>
							<Chip variant='outlined' label={el} sx={{ m: 1 }} />
						</motion.span>
					))}
				</Typography>
			</Box>
		</Container>
	);
};

export default Skills;
