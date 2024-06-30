import { dm_sans } from '@/app/fonts';
import { createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#0c1621'
		},
		secondary: {
			main: '#f5f5f5',
			dark: '#f2e8cf'
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
					background: 'secondary.main'
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
