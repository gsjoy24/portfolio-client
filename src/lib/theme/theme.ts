import { dm_sans } from "@/app/fonts";
import { createTheme } from "@mui/material";

export const theme = createTheme({
	palette: {
		primary: {
			main: "#0D1224"
		},
		secondary: {
			main: "#EEEEEE"
		}
	},
	components: {
		MuiButton: {
			defaultProps: {
				variant: "outlined",
				color: "secondary"
			},
			styleOverrides: {
				root: {
					textTransform: "none",
					background: "primary.main"
				}
			}
		},
		MuiTextField: {
			defaultProps: {
				variant: "outlined",
				color: "secondary"
			},
			styleOverrides: {
				root: {
					fontFamily: dm_sans.style.fontFamily
				}
			}
		},
		MuiTypography: {
			defaultProps: {
				color: "secondary.main"
			},
			styleOverrides: {
				root: {
					fontFamily: dm_sans.style.fontFamily
				}
			}
		},
		MuiContainer: {
			defaultProps: {
				maxWidth: "xl"
			}
		}
	}
});
