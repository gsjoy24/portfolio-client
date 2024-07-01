'use client';
import About from '@/components/Home/About';
import HeroSection from '@/components/Home/HeroSection';
import { useGetProfileQuery } from '@/redux/api/apis';
import Loading from '../loading';

export default function Home() {
	const { data, isLoading } = useGetProfileQuery({});
	return isLoading ? (
		<Loading />
	) : (
		<>
			<HeroSection data={data?.data} />
			<About data={data?.data?.introduction} />
		</>
	);
}
