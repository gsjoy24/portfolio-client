import LoadingCompo from '@/components/Loading/LoadingCompo';

const Loading = () => {
	return (
		<div className='absolute w-full h-full top-0 right-0 left-0 bottom-0 z-[1000]'>
			<LoadingCompo />
		</div>
	);
};

export default Loading;
