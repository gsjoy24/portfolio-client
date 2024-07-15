const config = {
	server_url: process.env.NEXT_PUBLIC_SERVER_URL,
	email_service_id: process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
	email_template_id: process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string,
	email_public_id: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_ID as string,
	googleAnalyticsId: process.env.NEXT_PUBLIC_MEASUREMENT_ID as string
};

export default config;
