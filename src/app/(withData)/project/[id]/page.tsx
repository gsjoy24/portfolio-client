"use client";
import LoadingCompo from "@/components/Loading/LoadingCompo";
import AnimatedText from "@/components/Shared/AnimatedText";
import { useGetProjectQuery } from "@/redux/api/apis";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import parse from "html-react-parser";
import Image from "next/image";
import { IoLogoGithub } from "react-icons/io";
import { MdOpenInNew } from "react-icons/md";

const ProjectDetails = ({ params }: { params: { id: string } }) => {
	const { data, isLoading } = useGetProjectQuery(params?.id);
	const description: string = data?.data?.description || "";
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
							fontWeight: "bold",
							my: 4,
							fontSize: {
								xs: "1.6rem",
								md: "2.2rem"
							}
						}}
						aria-label={data?.data?.title}
					>
						<span>
							<AnimatedText text={data?.data?.title} />
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
							fontWeight: "bold",
							fontSize: {
								sx: 18,
								sm: 22
							},
							mb: 1
						}}
					>
						<AnimatedText text='Frontend Technologies:' />
					</Typography>
					<Typography>
						<AnimatedText text={data?.data?.frontEndTech} />
					</Typography>

					{/* backend */}
					<Typography
						sx={{
							fontWeight: "bold",
							fontSize: {
								sx: 18,
								sm: 22
							},
							my: 1
						}}
					>
						<AnimatedText text='Backend Technologies:' />
					</Typography>
					<Typography>
						<AnimatedText text={data?.data?.backEndTech} />
					</Typography>

					<Typography sx={{ fontWeight: "bold", fontSize: 22, my: 1 }}>
						<AnimatedText text={`It took ${data?.data?.duration} to complete this project.`} />
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
