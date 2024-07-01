'use client';
import Loading from '@/app/loading';
import GForm from '@/components/Form/GForm';
import GInput from '@/components/Form/GInput';
import SocialSection from '@/components/Shared/SocialSection';
import config from '@/lib/config';
import { useGetProfileQuery } from '@/redux/api/apis';
import sendEmailSchema from '@/validationSchema/SendEmail.validation';
import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { HiOutlineMail } from 'react-icons/hi';
import { SlPhone } from 'react-icons/sl';

const ContactPage = () => {
	const router = useRouter();
	const [reset, setReset] = useState<boolean>(false);
	const { data, isLoading } = useGetProfileQuery({});
	const text =
		"I'm always excited to connect with fellow developers, potential collaborators, and anyone interested in web development. Whether you have a project in mind, a question about my work, or just want to chat about the latest in tech, feel free to reach out!";

	const onSubmit = async (data: any) => {
		setReset(true);
		emailjs.send(config.email_service_id, config.email_template_id, data, config.email_public_id).then(
			(result) => {
				if (result.status === 200) {
					toast.success('Message sent successfully!');
					// redirect to home page
					router.push('/');
				} else {
					toast.error('Failed to send! please try again later!');
				}
			},
			(error) => {}
		);
	};

	return isLoading ? (
		<Loading />
	) : (
		<Container
			sx={{
				minHeight: '90vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<Grid container alignItems='center'>
				<Grid item xs={12} md={5} p={2}>
					<Box
						sx={{
							fontSize: '1.2rem'
						}}
					>
						<Typography variant='h4' sx={{ fontWeight: 'bold', mb: 2 }}>
							{'Get In Touch'.split(' ').map((el: string, i: number) => (
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
						<Typography sx={{ fontSize: 14, mb: 2 }}>
							{text.split(' ').map((el: string, i: number) => (
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
						<Stack direction='row' alignItems='center' gap={1} mb={1}>
							<HiOutlineMail size={20} />
							<Link href={`mailto:${data?.data?.contact?.email}`}>
								{data?.data?.contact?.email.split('').map((el: string, i: number) => (
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
							</Link>
						</Stack>
						<Stack direction='row' alignItems='center' gap={1}>
							<SlPhone size={20} />
							<p>
								{data?.data?.contact?.phone.split('').map((el: string, i: number) => (
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
							</p>
						</Stack>
					</Box>
					<SocialSection socialLinks={data?.data?.socialLinks} />
				</Grid>

				{/* form */}
				<Grid item xs={12} md={7} p={2}>
					<Typography
						variant='h4'
						sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}
						aria-label='Send Message Form'
					>
						{'Send Message'.split(' ').map((el: string, i: number) => (
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
					<GForm onSubmit={onSubmit} resetForm={reset} resolver={zodResolver(sendEmailSchema)}>
						<Stack gap={2}>
							<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
								<GInput name='name' label='Name' />
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.5,
									delay: 0.2
								}}
							>
								<GInput name='email' label='Email' />
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.5,
									delay: 0.3
								}}
							>
								<GInput name='number' label='Number (optional)' />
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.5,
									delay: 0.4
								}}
							>
								<GInput name='message' label='Message' multiline />
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.5,
									delay: 0.5
								}}
							>
								<Button type='submit' fullWidth>
									Send
								</Button>
							</motion.div>
						</Stack>
					</GForm>
				</Grid>
			</Grid>
		</Container>
	);
};

export default ContactPage;
