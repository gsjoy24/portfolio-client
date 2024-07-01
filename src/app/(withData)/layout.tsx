import Footer from '@/components/Shared/Footer';
import MobileNav from '@/components/Shared/Header/MobileNav/MobileNav';
import Nav from '@/components/Shared/Header/Nav';
import { useGetProfileQuery } from '@/redux/api/apis';
const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Nav />
			<MobileNav />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
