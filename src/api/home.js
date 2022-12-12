import http from './request.js';

// 首页相关接口
const homeApi = {
    /**
     * 获取新人红包信息
     */
    getNewUserInfo() {
        // return http({
        //     url: '/step_counting/new_user',
        //     method: 'get',
        //     parmas
        // })
     return http.get('/step_counting/new_user')
    },

    // 新人翻倍红包
    setNewUserHongBao(data) {
        return http.post('/step_counting/new_user',data)
    },

    // 获取签到状态
    getQiandaoStatus(data) {
        return http.get('/step_counting/sign_in_record/sign_in_see')
    },
    // 签到完成后，获取奖励
    qiandao(data) {
        return http.get('/step_counting/sign_in_record')
    },
    // 勋章
    xunzhang(data) {
        return http.get('/step_counting/medal')
    },

}
export default homeApi