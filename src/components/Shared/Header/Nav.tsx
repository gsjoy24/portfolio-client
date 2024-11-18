import { navLinks } from "@/constant";
import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

const Nav = () => {
	return (
		<Box
			sx={{
				position: "sticky",
				top: 0,
				zIndex: 999,
				backgroundColor: "#22283199",
				display: { xs: "none", sm: "flex" },
				backdropFilter: "blur(10px)"
			}}
		>
			<Container>
				<Stack direction='row' justifyContent='space-between' alignItems='center' py={1}>
					{/* text logo */}
					<Link href='/'>
						<Typography
							aria-label='GSJoy Logo'
							sx={{
								fontWeight: "900",
								color: "secondary.main",
								transition: "color 0.2s",
								fontSize: "2rem"
							}}
						>
							@goursahajoy
						</Typography>
					</Link>
					{/* nav links */}
					<Stack direction='row' gap={3}>
						{navLinks?.map((link, index) => (
							<Link key={index} href={link?.path}>
								<Typography
									aria-label={link?.title}
									sx={{
										fontWeight: "500",
										transition: "color 0.2s",
										color: "secondary.main",
										position: "relative",
										"&::after": {
											content: '""',
											position: "absolute",
											bottom: "-5px",
											left: 0,
											right: 0,
											transition: "width 0.2s",
											width: "0px",
											height: "1px",
											margin: "auto",
											backgroundColor: "#fff"
										},
										"&:hover": {
											"&::after": {
												width: "100%"
											}
										}
									}}
								>
									{link?.title}
								</Typography>
							</Link>
						))}
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
};

export default Nav;
