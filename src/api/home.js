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
    //签到每天金额获取
    getQiandaoOptions(){
        return http.get('/step_counting/sign_in_record/sign_in_show')
    },
    // 签到完成后，获取奖励
    qiandao(data) {
        return http.get('/step_counting/sign_in_record')
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
    //摇一摇信息
    yaoyiyaoUserInfo(){
        return http.get('/step_counting/shake_one_shake/user_game_state')
    },
    //摇一摇奖励触发
    yaoyiyaoShakeReward(){
        return http.get('/step_counting/shake_one_shake/play_game')
    },
    //每日提现
    yaoyiyaoDayReward(){
        return http.get('/step_counting/shake_one_shake')
    },
    //每日提现-触发
    yaoyiyaoDayRewardSet(){
        return http.get('/step_counting/shake_one_shake/receive_task_reward')
    },
   //额外奖励-触发
    yaoyiyaoAddtionalReward(){
        return http.get('/step_counting/shake_one_shake/additional_reward')
    },
    //漂浮金豆
    jindouReward(){
        return http.get('/step_counting/limit_reward')
    },
        //漂浮金豆-领取
    jindouRewardSet(){
        return http.post('/step_counting/limit_reward')
    },

    //漂浮金币
    jinbiReward(){
        return http.get('/step_counting/float_reward/float_coin')
    }

}
export default homeApi