import { dm_sans } from '@/app/fonts';
import { createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#3a5a40'
		},
		secondary: {
			main: '#1F2F27'
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
				maxWidth: 'xl'
			}
		}
	}
});
