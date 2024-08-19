'use client';
import About from '@/components/Home/About';
import GitStats from '@/components/Home/GitStats';
import HeroSection from '@/components/Home/HeroSection';
import Projects from '@/components/Home/Projects/Projects';
import Skills from '@/components/Home/Skills';
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
			<Skills
				data={{
					frontEndSkills: data?.data?.frontEndSkills,
					backEndSkills: data?.data?.backEndSkills,
					tools: data?.data?.tools
				}}
			/>
			<Projects />
			{/* <GitStats /> */}
		</>
	);
}
