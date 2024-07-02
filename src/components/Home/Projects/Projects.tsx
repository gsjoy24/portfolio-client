'use client';
import LoadingCompo from '@/components/Loading/LoadingCompo';
import { useGetProjectsQuery } from '@/redux/api/apis';
import { TProject } from '@/types';
import { Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import SingleProject from './SingleProject';

const Projects = () => {
	const { data, isLoading } = useGetProjectsQuery({});
	// const project = {
	// 	title: 'Dream Gadgets Management Dashboard',
	// 	description:
	// 		'<p><strong>Electric Gadgets Management Dashboard</strong> is a comprehensive web application designed to efficiently manage electric gadgets inventory, track sales, and analyze sales history. This user-friendly dashboard provides an intuitive interface for users to perform CRUD operations, manage state, and see real-time UI updates.</p><p>Our platform is built to handle the unique requirements of managing electronic devices, providing robust filtering options, sales tracking, and an organized inventory management system.</p><h3>Key Features:</h3><ul><li><strong>User Authentication & Roles:</strong> Secure user registration and login with JWT. Users can perform CRUD operations on their own products, while managers have full CRUD capabilities on any product in the inventory.</li><li><strong>Inventory Management:</strong> Add, update, and delete electric gadgets. Utilize a comprehensive filtering system to narrow down gadget selections based on criteria such as price range, release date, brand, model number, category, operating system, connectivity, power source, and more.</li><li><strong>Sales History:</strong> View categorized sales history by weekly, daily, monthly, and yearly intervals. This feature provides valuable insights into sales trends and performance.</li><li><strong>Bulk Delete Feature:</strong> Managers can efficiently manage inventory by selecting and deleting multiple gadgets simultaneously.</li><li><strong>Cart System:</strong> Users can add products to the cart, and the checkout page provides a summary of cart contents, with the ability to adjust quantities and ensure the quantity does not exceed available stock.</li><li><strong>Duplicate & Edit:</strong> Create new products based on existing ones with a pre-filled form for modifications.</li></ul><p>The Electric Gadgets Management Dashboard is powered by a robust technology stack. The frontend is built using <strong>React</strong>, ensuring a seamless user experience with server-side rendering and static site generation. <strong>Tailwind CSS</strong> is used for responsive and modern design, while <strong>RTK Query</strong> and <strong>Redux</strong> handle efficient state management and CRUD operations.</p><p>On the backend, <strong>Node.js</strong> and <strong>Express.js</strong> manage server-side logic and API requests, with <strong>MongoDB</strong> providing a scalable database solution. The dashboard also leverages real-time updates and ensures data accuracy with re-fetching functionality.</p><p>We are dedicated to continuously improving the Electric Gadgets Management Dashboard, providing an efficient and user-friendly tool for managing electronic device inventories. Explore the platform to experience its full range of features and capabilities.</p>',
	// 	frontEndTech: 'React.js, Ant Design, Tailwind Css, Redux, RTK Query, Typescript',
	// 	backEndTech: 'Typescript, Node.js, Express.js, MongoDB, Mongoose, Bcrypt, JWT',
	// 	frontEndRepo: 'https://github.com/gsjoy24/second-dream-gadgets-client',
	// 	backEndRepo: 'https://github.com/gsjoy24/second-dream-gadgets-server',
	// 	liveLink: 'http://getback.vercel.app/',
	// 	image: 'https://res.cloudinary.com/dghszztcc/image/upload/v1719901180/dream-gadgets_rcwgr3.png',
	// 	duration: '1 week',
	// 	_id: '6683a26e815063457f20da86'
	// };

	return isLoading ? (
		<LoadingCompo />
	) : (
		<Container
			id='projects'
			maxWidth='md'
			sx={{
				my: 8
			}}
		>
			<Typography
				variant='h4'
				sx={{
					fontWeight: 'bold',
					marginBottom: 4
				}}
			>
				{'My Projects'.split('').map((el: string, i: number) => (
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
			<Grid container>
				{data?.data?.map((project: TProject, i: number) => (
					<Grid
						item
						key={project._id}
						xs={12}
						md={6}
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<SingleProject project={project} delay={i / 10} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default Projects;
