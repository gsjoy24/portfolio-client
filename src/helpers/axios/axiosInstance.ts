import { TGenericErrorResponse, TResponseSuccess } from '@/types';
import axios from 'axios';

const axiosInstance = axios.create();
axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
axiosInstance.defaults.headers['Accept'] = 'application/json';
axiosInstance.defaults.timeout = 60000;

// Add a response interceptor
axiosInstance.interceptors.response.use(
	//@ts-ignore
	function (response) {
		const responseObj: TResponseSuccess = {
			success: response?.data?.success,
			message: response?.data?.message,
			data: response?.data?.data,
			meta: response?.data?.meta
		};

		return responseObj;
	},
	function (error) {
		const responseObj: TGenericErrorResponse = {
			success: error?.response?.data?.success,
			statusCode: error?.response?.status || 500,
			message: error?.response?.data?.message || 'Something went wrong!',
			errorMassages: error?.response?.data?.message || 'Something went wrong!'
		};
		return responseObj;
	}
);

export default axiosInstance;
