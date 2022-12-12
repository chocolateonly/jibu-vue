import http from './request.js';

// 公共相关接口
const commonApi = {
    /**
     * 获取当前登录用户信息
     * @param {接口参数} parmas 
     */
    getLoginUserInfo(parmas) {
     return http.get('/step_counting/wechat_user', {param: parmas})
    },

}
export default commonApi