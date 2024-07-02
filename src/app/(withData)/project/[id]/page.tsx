'use client';
import LoadingCompo from '@/components/Loading/LoadingCompo';
import { useGetProjectQuery } from '@/redux/api/apis';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import parse from 'html-react-parser';
import Image from 'next/image';
import { IoLogoGithub } from 'react-icons/io';
import { MdOpenInNew } from 'react-icons/md';

const ProjectDetails = ({ params }: { params: { id: string } }) => {
	const { data, isLoading } = useGetProjectQuery(params?.id);
	const description = data?.data?.description || '';
	// console.log(data);
	// const isLoading = false;
	// const data = {
	// 	data: {
	// 		title: 'Dream Gadgets Management Dashboard',
	// 		description:
	// 			'<p><strong>Electric Gadgets Management Dashboard</strong> is a comprehensive web application designed to efficiently manage electric gadgets inventory, track sales, and analyze sales history. This user-friendly dashboard provides an intuitive interface for users to perform CRUD operations, manage state, and see real-time UI updates.</p><p>Our platform is built to handle the unique requirements of managing electronic devices, providing robust filtering options, sales tracking, and an organized inventory management system.</p><h3>Key Features:</h3><ul><li><strong>User Authentication & Roles:</strong> Secure user registration and login with JWT. Users can perform CRUD operations on their own products, while managers have full CRUD capabilities on any product in the inventory.</li><li><strong>Inventory Management:</strong> Add, update, and delete electric gadgets. Utilize a comprehensive filtering system to narrow down gadget selections based on criteria such as price range, release date, brand, model number, category, operating system, connectivity, power source, and more.</li><li><strong>Sales History:</strong> View categorized sales history by weekly, daily, monthly, and yearly intervals. This feature provides valuable insights into sales trends and performance.</li><li><strong>Bulk Delete Feature:</strong> Managers can efficiently manage inventory by selecting and deleting multiple gadgets simultaneously.</li><li><strong>Cart System:</strong> Users can add products to the cart, and the checkout page provides a summary of cart contents, with the ability to adjust quantities and ensure the quantity does not exceed available stock.</li><li><strong>Duplicate & Edit:</strong> Create new products based on existing ones with a pre-filled form for modifications.</li></ul><p>The Electric Gadgets Management Dashboard is powered by a robust technology stack. The frontend is built using <strong>React</strong>, ensuring a seamless user experience with server-side rendering and static site generation. <strong>Tailwind CSS</strong> is used for responsive and modern design, while <strong>RTK Query</strong> and <strong>Redux</strong> handle efficient state management and CRUD operations.</p><p>On the backend, <strong>Node.js</strong> and <strong>Express.js</strong> manage server-side logic and API requests, with <strong>MongoDB</strong> providing a scalable database solution. The dashboard also leverages real-time updates and ensures data accuracy with re-fetching functionality.</p><p>We are dedicated to continuously improving the Electric Gadgets Management Dashboard, providing an efficient and user-friendly tool for managing electronic device inventories. Explore the platform to experience its full range of features and capabilities.</p>',
	// 		frontEndTech: 'React.js, Ant Design, Tailwind Css, Redux, RTK Query, Typescript',
	// 		backEndTech: 'Typescript, Node.js, Express.js, MongoDB, Mongoose, Bcrypt, JWT',
	// 		frontEndRepo: 'https://github.com/gsjoy24/second-dream-gadgets-client',
	// 		backEndRepo: 'https://github.com/gsjoy24/second-dream-gadgets-server',
	// 		liveLink: 'http://getback.vercel.app/',
	// 		image: 'https://res.cloudinary.com/dghszztcc/image/upload/v1719901180/dream-gadgets_rcwgr3.png',
	// 		duration: '1 week',
	// 		_id: '6683a26e815063457f20da86',
	// 		__v: 0
	// 	}
	// };

	return isLoading ? (
		<LoadingCompo />
	) : (
		<Container>
			<Box
				sx={{
					my: 8
				}}
			>
				<motion.div
					initial={{ opacity: 0, y: 20, scale: 0.7 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.3 }}
				>
					<Image src={data?.data?.image} alt='project image' height={900} width={1200} className='w-full' />
				</motion.div>
				<Box>
					<Typography
						variant='h1'
						sx={{
							fontWeight: 'bold',
							my: 4,
							fontSize: {
								xs: '2.2rem',
								md: '3rem'
							}
						}}
						aria-label={data?.data?.title}
					>
						<span>
							{data?.data?.title.split(' ').map((el: string, i: number) => (
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
						</span>
					</Typography>

					{/* buttons */}
					<Stack direction='row' spacing={2} sx={{ mb: 2 }}>
						<Button href={data?.data?.liveLink} target='_blank' endIcon={<MdOpenInNew />}>
							Live
						</Button>
						<Button href={data?.data?.frontEndRepo} target='_blank' startIcon={<IoLogoGithub />}>
							Frontend
						</Button>
						{data?.data?.backEndRepo && (
							<Button href={data?.data?.backEndRepo} target='_blank' startIcon={<IoLogoGithub />}>
								Backend
							</Button>
						)}
					</Stack>

					<Typography
						sx={{
							fontWeight: 'bold',
							fontSize: {
								sx: 18,
								sm: 22
							},
							mb: 1
						}}
					>
						{'Frontend Technologies:'.split(' ').map((el: string, i: number) => (
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
					<Typography>
						{data?.data?.frontEndTech.split(' ').map((el: string, i: number) => (
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

					{/* backend */}
					<Typography
						sx={{
							fontWeight: 'bold',
							fontSize: {
								sx: 18,
								sm: 22
							},
							my: 1
						}}
					>
						{'Backend Technologies:'.split(' ').map((el: string, i: number) => (
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
					<Typography>
						{data?.data?.backEndTech.split(' ').map((el: string, i: number) => (
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

					<Typography sx={{ fontWeight: 'bold', fontSize: 22, my: 1 }}>
						{`It took ${data?.data?.duration} to complete this project.`.split(' ').map((el: string, i: number) => (
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

					<motion.div
						className='mt-5'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						{parse(description)}
					</motion.div>
				</Box>
			</Box>
		</Container>
	);
};

export default ProjectDetails;
