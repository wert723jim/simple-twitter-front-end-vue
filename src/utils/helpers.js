import axios from 'axios'
import Swal from 'sweetalert2'

const baseURL = 'http://localhost:3000/api'

const axiosInstance = axios.create({
  baseURL,
  // 新增這項設定，讓接到 response header set-cookie
  withCredentials: true
})

export const apiHelper = axiosInstance

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})