"use client";
import LoadingCompo from "@/components/Loading/LoadingCompo";
import AnimatedText from "@/components/Shared/AnimatedText";
import { useGetProjectsQuery } from "@/redux/api/apis";
import { TProject } from "@/types";
import { Container, Grid, Typography } from "@mui/material";
import SingleProject from "./SingleProject";

const Projects = () => {
	const { data, isLoading } = useGetProjectsQuery({});

	return isLoading ? (
		<LoadingCompo />
	) : (
		<Container
			id='projects'
			sx={{
				py: 12
			}}
		>
			<Typography
				variant='h4'
				sx={{
					fontWeight: "bold",
					marginTop: 2,
					marginBottom: 4,
					textAlign: "center"
				}}
				aria-label='My Projects'
			>
				<AnimatedText text='My Projects' />
			</Typography>
			<Grid container>
				{data?.data?.map((project: TProject, i: number) => (
					<Grid
						item
						key={project._id}
						xs={12}
						md={6}
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center"
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
