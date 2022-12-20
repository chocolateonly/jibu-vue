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
    if (config.headers) {
        // config.headers['token'] = store.state.user.token
        // config.headers['Authorization'] = store.state.user.token
        //my {"userId":"4055029","productId":"10012","channel":"other","versions":"1.0.0",
        // "Authorization":"eyJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjQwNTUwMjksImV4cCI6MTY3MjAzNDY1OH0.Cv5ipbB8uj4WV9gWIs8RoAK_Vf6MO8l_Rnas11uQRqk"}
        // config.headers['userId'] = '4055029'
        // config.headers['productId'] = '10012'
        // config.headers['channel'] = 'other'
        // config.headers['versions'] = '1.0.0'

//test {"userId":"4055134","productId":"10012","channel":"other","versions":"1.0.0",
// "Authorization":"eyJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjQwNTUxMzQsImV4cCI6MTY3MjA0MjQ4MX0.DwyUQm5bRS_tdJ-_Al5CA55-mtwG0XwVR_ZLYFHZPiw"}
//         config.headers['userId'] = '4055134'
//         config.headers['productId'] = '10012'
//         config.headers['channel'] = 'other'
//         config.headers['versions'] = '1.0.0'



        if(localStorage.getItem('base_data')){
        const useObj = JSON.parse(localStorage.getItem('base_data'))
        config.headers['Authorization'] = useObj.Authorization
        config.headers['userId'] = useObj.userId
        config.headers['productId'] = useObj.productId
        config.headers['channel'] = useObj.channel
        config.headers['versions'] = useObj.versions
        }
      }
      console.log('~~~config~~~',config.headers)
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
    if (statusCode === 400||statusCode === 500) {
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
    // this.$layer.msg(error.message)
  }
}

export default service
