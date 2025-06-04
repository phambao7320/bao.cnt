import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const isClient = typeof window !== undefined;

axiosInstance.interceptors.request.use(async (config) => {
  // const { getToken } = useAuth();
  // const token = await getToken();

  // console.log("token", token);

  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }

  return config;
});
