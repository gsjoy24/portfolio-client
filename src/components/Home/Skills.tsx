import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { ImDisplay } from 'react-icons/im';
import { IoServerOutline } from 'react-icons/io5';
import { MdOutlineCodeOff } from 'react-icons/md';
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

			<Grid container justifyContent='center'>
				<Grid item xs={12} md={5}>
					<Typography variant='h5' sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
						<ImDisplay size={16} />
						{'Frontend'.split(' ').map((el: string, i: number) => (
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
					<Box>
						{data?.frontEndSkills.split(',').map((el: string, i: number) => (
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
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					md={3}
					sx={{
						mt: {
							xs: 3,
							md: 0
						}
					}}
				>
					<Typography variant='h5' sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
						<IoServerOutline size={16} />
						{'Backend'.split(' ').map((el: string, i: number) => (
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
						{data?.backEndSkills.split(',').map((el: string, i: number) => (
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
				</Grid>
				<Grid
					item
					xs={12}
					md={4}
					sx={{
						mt: {
							xs: 3,
							md: 0
						}
					}}
				>
					<Typography variant='h5' sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
						<MdOutlineCodeOff size={16} />
						{'Tools'.split(' ').map((el: string, i: number) => (
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
					<Box>
						{data?.tools.split(',').map((el: string, i: number) => (
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
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Skills;
