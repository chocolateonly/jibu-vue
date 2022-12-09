import axios from 'axios'

// 创建axios实例
const service = axios.create({
  withCredentials: true,
  // baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000, // 请求超时时间
  responseType: 'json'
})

// 处理请求参数
function getFormData(codeKey, key, value) {
  let fromData = ''
  for (let i = 0; i < value.length; i++) {
    for (let skey in value[i]) {
      if (value[i][skey] && value[i][skey].length !== 0) {
        if (Array.isArray(value[i][skey])) {
          let newArr = value[i][skey]
          for (let ai = 0; ai < newArr.length; ai++) {
            for (let akey in newArr[ai]) {
              fromData += codeKey + '[' + i + '].' + skey + '[' + ai + '].' + encodeURIComponent(akey) + '=' + encodeURIComponent(newArr[ai][akey]) + '&'
            }
          }
        } else {
          fromData += codeKey + '[' + i + '].' + encodeURIComponent(skey) + '=' + encodeURIComponent(value[i][skey]) + '&'
        }
      }
    }
  }
  return fromData
}

// request拦截器
service.interceptors.request.use(
  config => {
    //config.headers['token'] = ''
    if (/^(post)|(put)|(delete)$/i.test(config.method)) { // 处理POST请求默认行为
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
      config.transformRequest = [function (data) {
        let ret = ''
        for (let key in data) {
          if (Array.isArray(data[key])) {
            if (/(\[|\])/g.exec(JSON.stringify(data[key])).length === 2 && (data[key] + '').indexOf('object') === -1) {
              ret += encodeURIComponent(key) + '=' + encodeURIComponent(data[key]) + '&'
            } else {
              ret += getFormData(key, key, data[key])
            }
          } else {
            ret += encodeURIComponent(key) + '=' + encodeURIComponent(data[key]) + '&'
          }
        }
        return ret
      }]
    } else {
      config.headers['Content-Type'] = 'application/json' // 处理GET请求默认行为
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非200是抛错 可结合自己业务进行修改
     */
    const res = response.data
    if (res.code !== 200) {
      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      if (res.code === 401 || res.code === 402) {
        console.log('token过期')
      }
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service