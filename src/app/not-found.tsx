import notFound from '@/assets/not-found.svg';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';

const NotFoundPage = () => {
	return (
		<Stack
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				gap: 3,
				minHeight: 'calc(100vh - 64px)',
				textAlign: 'center',
				py: 5
			}}
		>
			<Box
				sx={{
					maxWidth: '350px',
					width: '100%'
				}}
			>
				<Image src={notFound} alt='Not Found' width={300} height={300} className='w-full' />
			</Box>
			<Box>
				<Typography variant='h1' sx={{ fontWeight: 'bold', fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
					404 - Page Not Found
				</Typography>
				<Typography sx={{ fontWeight: 'bold' }}>
					The page you are looking for might have been removed or is temporarily unavailable.
				</Typography>
			</Box>
		</Stack>
	);
};

export default NotFoundPage;
