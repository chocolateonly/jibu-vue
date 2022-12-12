import axios from 'axios'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  // withCredentials: true,
  timeout: 50000
})

// 请求前的统一处理
service.interceptors.request.use(
  (config) => {
    // JWT鉴权处理
    // if (config.headers) {
      console.log('~~~config~~~',config)

      const useObj = JSON.parse(localStorage.getItem('base_data'))
        config.headers['Authorization'] = useObj.Authorization
        config.headers['userId'] = useObj.userId
        config.headers['productId'] = useObj.productId
        config.headers['channel'] = useObj.channel
        config.headers['versions'] = useObj.versions
      // }
    return config
  },
  (error) => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.status === 200) {
      return res
    } else {
      showError(res)
      return Promise.reject(res)
    }
  },
  (error) => {
    const badMessage = error.message || error
    const statusCode = parseInt(badMessage.toString().replace('Request failed with status code', ''))
    let tips = { statusCode, message: badMessage }
    if (statusCode === 400) {
      tips.message = '请求参数错误！'
    }
    showError(tips)
    return Promise.reject(error)
  }
)

// 错误处理
function showError(error) {
  // token过期，清除本地数据，并跳转至登录页面
  if (error.status === 401) {
    // to re-login
  } else {
    console.log(error)
  }
}

export default service
