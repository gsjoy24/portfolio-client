import { TBlog } from "@/types";
import { ClassNames } from "@emotion/react";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "../AnimatedText";

const BlogCard = ({ blog, delay }: { blog: TBlog; delay: number }) => {
	return (
		<Box
			component={motion.div}
			initial={{
				opacity: 0,
				scale: 0
			}}
			whileInView={{
				opacity: 1,
				scale: 1
			}}
			transition={{
				duration: 0.5,
				delay
			}}
			whileHover={{
				scale: 1.05,
				transition: {
					duration: 0.2
				}
			}}
			sx={{
				p: 3,
				my: 2,
				bgcolor: "#181e26",
				borderRadius: 4,
				boxShadow: 2
			}}
		>
			<Image src={blog?.image} alt='blog image' height={340} width={340} className='w-full' />
			<Typography
				variant='h5'
				sx={{
					fontWeight: "bold",
					my: 2,
					fontSize: "1rem"
				}}
				arial-label={blog?.title}
			>
				<AnimatedText text={blog?.title} />
			</Typography>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.25,
					delay: 0.7
				}}
				className='flex justify-end'
			>
				<Button component={Link} href={`blogs/${blog?._id}`}>
					Explore
				</Button>
			</motion.div>
		</Box>
	);
};

export default BlogCard;
