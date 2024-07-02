import Footer from '@/components/Shared/Footer';
import MobileNav from '@/components/Shared/Header/MobileNav/MobileNav';
import Nav from '@/components/Shared/Header/Nav';
const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Nav />
			<MobileNav />
			<div className='min-h-[95vh]'>{children}</div>
			<Footer />
		</>
	);
};

export default Layout;
