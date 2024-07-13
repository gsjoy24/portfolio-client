import z from 'zod';

const sendEmailSchema = z.object({
	name: z
		.string({
			required_error: 'Please enter your name!'
		})
		.min(3)
		.max(255),
	number: z.string().optional(),
	email: z.string().email({
		message: 'Invalid email address!'
	}),
	message: z
		.string({
			required_error: 'Please enter your message!'
		})
		.min(10, {
			message: 'Message must be at least 10 characters long!'
		})
		.max(1000, {
			message: 'Message must be at most 1000 characters long!'
		})
});

export default sendEmailSchema;
