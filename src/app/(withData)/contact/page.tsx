'use client';
import Loading from '@/app/loading';
import GForm from '@/components/Form/GForm';
import GInput from '@/components/Form/GInput';
import SocialSection from '@/components/Shared/SocialSection';
import { useGetProfileQuery } from '@/redux/api/apis';
import { Box, Button, Container, Grid, Stack } from '@mui/material';
import Link from 'next/link';
import { FieldValues } from 'react-hook-form';
import { HiOutlineMail } from 'react-icons/hi';
import { SlPhone } from 'react-icons/sl';

const ContactPage = () => {
	const { data, isLoading } = useGetProfileQuery({});
	const onSubmit = (data: FieldValues) => {};
	return isLoading ? (
		<Loading />
	) : (
		<Container>
			<Grid container>
				<Grid item xs={12} md={7} p={2}>
					<GForm onSubmit={onSubmit}>
						<Stack gap={2}>
							<GInput name='name' label='Name' />
							<GInput name='email' label='Email' />
							<GInput name='message' label='Message' multiline />
							<Button type='submit' fullWidth>
								Send
							</Button>
						</Stack>
					</GForm>
				</Grid>
				<Grid item xs={12} md={5} p={2}>
					<Box>
						<Stack direction='row' alignItems='center' gap={1}>
							<HiOutlineMail size={20} />
							<Link href={`mailto:${data?.data?.contact?.email}`}>{data?.data?.contact?.email}</Link>
						</Stack>
						<Stack direction='row' alignItems='center' gap={1}>
							<SlPhone size={20} />
							<p>{data?.data?.contact?.phone}</p>
						</Stack>
					</Box>
					<SocialSection socialLinks={data?.data?.socialLinks} />
				</Grid>
			</Grid>
		</Container>
	);
};

export default ContactPage;
