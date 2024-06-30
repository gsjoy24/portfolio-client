import './LoadingCompo.css';
const LoadingCompo = () => {
	return (
		<div className='h-[90vh] w-full flex flex-col justify-center items-center gap-12'>
			<svg className='loader' viewBox='0 0 48 30' width='48px' height='30px'>
				<g fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1'>
					<g transform='translate(9.5,19)'>
						<circle className='loader_tire' r='9' strokeDasharray='56.549 56.549'></circle>
						<g className='loader_spokes-spin' strokeDasharray='31.416 31.416' strokeDashoffset='-23.562'>
							<circle className='loader_spokes' r='5'></circle>
							<circle className='loader_spokes' r='5' transform='rotate(180,0,0)'></circle>
						</g>
					</g>
					<g transform='translate(24,19)'>
						<g
							className='loader_pedals-spin'
							strokeDasharray='25.133 25.133'
							strokeDashoffset='-21.991'
							transform='rotate(67.5,0,0)'
						>
							<circle className='loader_pedals' r='4'></circle>
							<circle className='loader_pedals' r='4' transform='rotate(180,0,0)'></circle>
						</g>
					</g>
					<g transform='translate(38.5,19)'>
						<circle className='loader_tire' r='9' strokeDasharray='56.549 56.549'></circle>
						<g className='loader_spokes-spin' strokeDasharray='31.416 31.416' strokeDashoffset='-23.562'>
							<circle className='loader_spokes' r='5'></circle>
							<circle className='loader_spokes' r='5' transform='rotate(180,0,0)'></circle>
						</g>
					</g>
					<polyline className='loader_seat' points='14 3,18 3' strokeDasharray='5 5'></polyline>
					<polyline
						className='loader_body'
						points='16 3,24 19,9.5 19,18 8,34 7,24 19'
						strokeDasharray='79 79'
					></polyline>
					<path className='loader_handlebars' d='m30,2h6s1,0,1,1-1,1-1,1' strokeDasharray='10 10'></path>
					<polyline className='loader_front' points='32.5 2,38.5 19' strokeDasharray='19 19'></polyline>
				</g>
			</svg>
			<p className='text-[20px] md:text-[52px] font-[900]'>Patience is the road to wisdom...</p>
		</div>
	);
};

export default LoadingCompo;
