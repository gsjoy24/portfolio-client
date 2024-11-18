import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

type TAnimatedText = {
	text: string;
	[x: string]: any;
	duration?: number;
	delay?: number;
	animationDelay?: number;
};

const AnimatedText = ({ text, duration, delay, animationDelay }: TAnimatedText) => {
	const key = uuidv4();
	const randomKey = Math.random().toFixed(2);

	return text.split(" ").map((el: string, i: number) => (
		<motion.span
			initial={{ opacity: 0.2 }}
			whileInView={{ opacity: 1 }}
			transition={{
				duration: duration ?? 0.25,
				delay: animationDelay ?? i * (delay ?? 0.2)
			}}
			viewport={{ once: true }}
			key={key + el + randomKey}
		>
			{el}{" "}
		</motion.span>
	));
};

export default AnimatedText;
