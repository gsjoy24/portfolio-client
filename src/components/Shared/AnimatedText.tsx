import { Typography } from '@mui/material';
import { motion } from 'framer-motion';

type TAnimatedText = {
	text: string;
	[x: string]: any;
};

const AnimatedText = ({ text, ...rest }: TAnimatedText) => {
	const key = Math.random().toString(36).substring(7);
	return (
		<Typography {...rest} aria-label={text}>
			{text.split(' ').map((el: string, i: number) => (
				<motion.span
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{
						duration: 0.25,
						delay: i / 10
					}}
					key={key}
				>
					{el}{' '}
				</motion.span>
			))}
		</Typography>
	);
};

export default AnimatedText;
