import { dm_sans } from '@/app/fonts';
import { createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#023047'
		},
		secondary: {
			main: '#132a13'
		}
	},
	components: {
		MuiButton: {
			defaultProps: {
				variant: 'outlined'
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
