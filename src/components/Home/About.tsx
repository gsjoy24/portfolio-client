import developer from "@/assets/developer.svg";
import { Box, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedText from "../Shared/AnimatedText";

const About = ({ data }: { data: string }) => {
	return (
		<Container
			maxWidth='lg'
			sx={{
				my: 8
			}}
		>
			<Stack
				direction={{
					xs: "column",
					md: "row"
				}}
				alignItems='center'
				justifyContent='space-between'
				spacing={2}
			>
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
						duration: 0.3,
						delay: 0.5
					}}
				>
					<Image src={developer} alt='developer image' height={440} width={440} />
				</Box>
				<Box
					sx={{
						width: {
							xs: "100%",
							md: "50%"
						}
					}}
				>
					<Typography
						variant='h4'
						sx={{
							fontWeight: "bold",
							marginBottom: 4
						}}
						aria-label='About Me'
					>
						<AnimatedText text='About Me' />
					</Typography>
					<Typography variant='body1' sx={{ textAlign: "justify" }}>
						<AnimatedText text={data} delay={0.02} />
					</Typography>
				</Box>
			</Stack>
		</Container>
	);
};

export default About;
