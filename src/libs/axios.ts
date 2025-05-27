"use client";

import axios from "axios";

export const clientAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const setAuthToken = (token: string | null) => {
  clientAxios.interceptors.request.clear();
  clientAxios.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
};
