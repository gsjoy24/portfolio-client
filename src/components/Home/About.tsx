import { Box, Typography } from '@mui/material';

const About = ({ data }: { data: string }) => {
	return (
		<Box>
			<Typography variant='h4' gutterBottom>
				About Me
			</Typography>
			<Typography variant='body1' sx={{ textAlign: 'justify' }}>
				{data}
			</Typography>
		</Box>
	);
};

export default About;
