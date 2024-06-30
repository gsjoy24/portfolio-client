import MobileNav from '@/components/Shared/Header/MobileNav/MobileNav';
import Nav from '@/components/Shared/Header/Nav';
import { useGetProfileQuery } from '@/redux/api/apis';
import { Container } from '@mui/material';
const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<Container>
			<Nav />
			<MobileNav />
			{children}
		</Container>
	);
};

export default Layout;
