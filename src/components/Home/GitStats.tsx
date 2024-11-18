/* eslint-disable @next/next/no-img-element */
import { Container, Grid, Typography } from "@mui/material";
import GitHubCalendar from "react-github-calendar";
import AnimatedText from "../Shared/AnimatedText";

const GitStats = () => {
	const stats = [""];
	return (
		<Container maxWidth='lg'>
			<Typography variant='h4' sx={{ fontWeight: "bold", marginTop: 2, marginBottom: 6, textAlign: "center" }}>
				<AnimatedText text='My Activity Stats' />
			</Typography>

			<Grid container spacing={4}>
				<Grid item xs={12} md={6}>
					<img
						className='w-full'
						src='https://github-readme-stats.vercel.app/api?username=gsjoy24&show_icons=true&theme=github_dark&custom_title=GitHub%20Stats'
						alt='Git Stats'
						width='500'
						height='300'
					/>
				</Grid>

				<Grid item xs={12} md={6}>
					<img
						className='w-full'
						src='https://github-readme-streak-stats.herokuapp.com/?user=gsjoy24&layout=compact&theme=dark'
						alt='Git Stats'
						width='500'
						height='300'
					/>
				</Grid>

				<Grid item xs={12} md={6}>
					<img
						className='w-full'
						src='https://github-readme-stats.vercel.app/api/wakatime?username=goursahajoy&custom_title=Last%207%20Days%20Coding%20Time&layout=compact&theme=github_dark'
						alt='Git Stats'
						width='500'
						height='300'
					/>
				</Grid>

				<Grid item xs={12} md={6}>
					<img
						className='w-full'
						src='https://github-readme-stats.vercel.app/api/top-langs?username=gsjoy24&custom_title=Top%20Languages%20I%20Used&layout=compact&theme=github_dark'
						alt='Git Stats'
						width='500'
						height='300'
					/>
				</Grid>

				<Grid
					item
					xs={12}
					md={12}
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						my: 4
					}}
				>
					<img
						src='https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=gsjoy24&theme=radical'
						alt='Git Stats'
						width='1200'
						height='600'
					/>
				</Grid>
				<Grid
					item
					xs={12}
					md={12}
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						mb: 4
					}}
				>
					<GitHubCalendar username='gsjoy24' style={{ width: "100%" }} />
				</Grid>
			</Grid>
		</Container>
	);
};

export default GitStats;
