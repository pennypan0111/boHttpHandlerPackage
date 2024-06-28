import axios from 'axios'
import { ElNotification } from 'element-plus'
import '../css/main.css'

// http request 請求啟動前攔截
axios.interceptors.request.use(
  config => {
    config.headers = {
      'Content-Type': 'application/json'
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// http response 回應攔截
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          ElNotification({
            title: 'Error',
            message: '400 - 請求錯誤',
            type: 'error',
            customClass: 'ElNotification_error'
          })
          break
        case 404:
          ElNotification({
            title: 'Error',
            message: '404 - 找不到該頁面',
            type: 'error',
            customClass: 'ElNotification_error'
          })
          break
        case 500:
          ElNotification({
            title: 'Error',
            message: '500 - 伺服器出錯',
            type: 'error',
            customClass: 'ElNotification_error'
          })
          break
        case 503:
          ElNotification({
            title: 'Error',
            message: '503 - 服務失效',
            type: 'error',
            customClass: 'ElNotification_error'
          })
          break
        default:
          ElNotification({
            title: 'Error',
            message: `Http Status ${error.response.status}`,
            type: 'error',
            customClass: 'ElNotification_error'
          })
      }
    } else {
      ElNotification({
        title: 'Error',
        message: '連接到服務器失敗',
        type: 'error',
        customClass: 'ElNotification_error'
      })
    }
    return Promise.resolve(error.response)
  }
)

// 依照請求類型對 axios 進行封裝
export async function HttpGet(url, params = {}) {
  try {
    const response = await axios.get(url, { params })
    return response.data
  } catch (error) {
    ElNotification({
      title: 'Error',
      message: error,
      type: 'error',
      customClass: 'ElNotification_error'
    })
  }
}

export async function HttpPost(url, data = {}) {
  try {
    const response = await axios.post(url, data)
    return response.data
  } catch (error) {
    ElNotification({
      title: 'Error',
      message: error,
      type: 'error',
      customClass: 'ElNotification_error'
    })
  }
}

export async function HttpDelete(url, data = {}) {
  try {
    const response = await axios.delete(url, { data })
    return response.data
  } catch (error) {
    ElNotification({
      title: 'Error',
      message: error,
      type: 'error',
      customClass: 'ElNotification_error'
    })
  }
}

export async function HttpPut(url, data = {}) {
  try {
    const response = await axios.put(url, data)
    return response.data
  } catch (error) {
    ElNotification({
      title: 'Error',
      message: error,
      type: 'error',
      customClass: 'ElNotification_error'
    })
  }
}

// 將封裝的方法打包起來
export const HttpHandler = {
  get: function (url, params = {}) {
    return HttpGet(url, params)
  },
  post: function (url, data = {}) {
    return HttpPost(url, data)
  },
  delete: function (url, data = {}) {
    return HttpDelete(url, data)
  },
  put: function (url, data = {}) {
    return HttpPut(url, data)
  }
}

// Vue 插件
const BOHttpHandler = {
  install: (app) => {
    app.config.globalProperties.$BOHttpHandler = HttpHandler
  }
}

export default BOHttpHandler
