'use client';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import { FieldValues } from 'react-hook-form';
import { FaRegPaperPlane } from 'react-icons/fa';

const HeroSection = () => {
	return (
		<>
			<Typography variant='h1' sx={{ fontWeight: 'bold', fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
				Welcome to my portfolio website!
			</Typography>
			<Typography variant='h2' sx={{ fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '2rem' } }}>
				I am Gour Chandra Saha, a passionate full-stack developer dedicated to creating captivating and user-friendly
				web experiences.
			</Typography>
		</>
	);
};

export default HeroSection;
