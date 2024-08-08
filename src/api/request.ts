import axios from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_PREFIX??''
})

const axiosErrorHandler = (error: any) => {
  // axios错误处理
}

request.interceptors.request.use((config) => {
  return config
}, axiosErrorHandler)

request.interceptors.response.use((resp) => {
  return resp
}, axiosErrorHandler)

export default request