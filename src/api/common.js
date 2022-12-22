import http from './request.js';

// 公共相关接口
const commonApi = {
    /**
     * 获取当前登录用户信息
     */
    getLoginUserInfo(data) {
     return http.post('/step_counting/wechat_user',data)
    },

}
export default commonApi