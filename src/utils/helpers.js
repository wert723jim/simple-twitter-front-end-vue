import axios from 'axios'
import Swal from 'sweetalert2'
import authAPI from '../apis/authorization'

const baseURL = 'http://localhost:3000/api'
// const baseURL = 'https://simpletwitter-1-a0198651.deta.app/api'

const axiosInstance = axios.create({
  baseURL,
  // 新增這項設定，讓接到 response header set-cookie
  withCredentials: true
})
  // 發送 request 之前，使用 interceptors 處理
axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')

    if(token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
  },
  err => Promise.reject(err)
)

axiosInstance.interceptors.response.use(
  res => {
    return res
  },
  async err => {
    const originalConfig = err.config
    const passURL = ['/auth', '/refresh']
    if(!passURL.includes(originalConfig.url) && err.response) {
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true
        try {
          const { data } = await authAPI.getAccessToken()
          localStorage.setItem('token', data)

          return axiosInstance(originalConfig)
        } catch(err) {
          return Promise.reject(err)
        }
      }
    }
    // 回傳原本的錯誤訊息
    return Promise.reject(err)
  }
)

export const apiHelper = axiosInstance

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  customClass: {
    container: 'swal_z'
  }
})