import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import Notafication from '../components/Notification';

const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === 'production' ? '/api' : import.meta.env.VITE_API_PREFIX
})

const request = async (url: string, config: AxiosRequestConfig) => {
  try {
    return await axiosInstance({
      url,
      ...config
    })
  } catch (error) {
    const err = error as AxiosError
    if (typeof err.response?.data === 'string') {
      Notafication.send(err.response?.data)
    }
    return Promise.reject(err.response?.data)
  }
}

export default request