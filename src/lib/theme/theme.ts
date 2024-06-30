import { dm_sans } from '@/app/fonts';
import { createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#f8f7ff'
		},
		secondary: {
			main: '#132a13'
		}
	},
	components: {
		MuiButton: {
			defaultProps: {
				variant: 'contained'
			},
			styleOverrides: {
				root: {
					textTransform: 'none',
					background: 'primary.main'
				}
			}
		},
		MuiTypography: {
			defaultProps: {
				color: 'secondary.main'
			},
			styleOverrides: {
				root: {
					fontFamily: dm_sans.style.fontFamily
				}
			}
		},
		MuiContainer: {
			defaultProps: {
				maxWidth: 'lg'
			}
		}
	}
});
