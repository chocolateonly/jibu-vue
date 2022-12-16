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
    /**
     * 提现展示
     */
    getWithdrawOptions() {
     return http.get('/step_counting/withdraw')
    },
    //随机金额 - 展示/触发视频任务 state 0展示看了多少视频，1触发一次看视频
    getVideoLockInfo(data){
      return http.post('/step_counting/withdraw',data)
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
    //获取视频解锁进度
    getVideoProgress(){
        return http.get('/step_counting/video_task/video_state')
    },
    //获取视频任务答题
    getVideoLockQuestion(){
        return http.get('/step_counting/video_task/subject')
    },
    //获取视频任务红包展示
    addVideoProgress(){
        return http.get('/step_counting/video_task')
    },
    //视频任务红包翻倍
    setVideoProgressDouble(data){
        return http.post('/step_counting/video_task',data)
    },
    //抽奖结果
    getRaffleRes(){
        return http.get('/step_counting/video_task/luck_draw')
    },
    //提现抽奖
    getRaffleOptions(){
        return http.get('/step_counting/video_task/turntable')
    },

}
export default homeApi