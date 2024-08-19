import { Container, Stack } from '@mui/material';
import AnimatedText from '../Shared/AnimatedText';

const GitStats = () => {
	const stats = [''];
	return (
		<Container maxWidth='lg'>
			<AnimatedText text='My Git Stats' variant='h4' sx={{ fontWeight: 'bold', marginBottom: 4 }} />
			<Stack></Stack>
		</Container>
	);
};

export default GitStats;
