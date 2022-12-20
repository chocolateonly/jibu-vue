import Vue from 'vue'
import Vuex from 'vuex'
import homeApi from "@/api/home";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        base_data: {
            userId: '',
            productId: '',
            channel: '',
            versions: '',
            Authorization: ''
        },
        video_progress: {
            lock_status: 1,//视频解锁状态 1 未解锁 视频解锁 2 已解锁小于 明日再来 3 已解锁大于两天 立即提现 4 消失
            time: 0,//随机金额冷却时间，为0时重新变为随机金额 视频解锁
            video_task:0,//需要完成视频任务数量 视频任务
            video_nums:0//已完成视频任务数量 视频任务
        },
        video_lock:{
            total:3, //需要解锁数
            complete_num:0,  //视频解锁进度
            reward:'', //奖励金额
        },
        reward_money:0 ,//抽奖金额
        yaoyiyao:{
            cash:0,
            cash_currency:0,
            game_num:0,
            end_time:0,
            next_game_time:0,
            additional_num:0,
            num:0,
            money1:0,
            money2:0,
            headimgurl:'',
            nickname:'',
            reward:0,
            state:1, //现金1，金币2
            days_reward:[],

        }
    },
    mutations: {
        setBaseData(state, data) {
            state.base_data = data
        },
        setVideoProgress(state, data) {
            state.video_progress.video_task = data.video_task
            state.video_progress.video_nums = data.video_nums
        },
        setWithdraw(state, data) {
            state.video_progress.lock_status = data.lock_status
            state.video_progress.time = data.time
        },
        setVideoLockInfo(state,data){
            state.video_lock.complete_num = data.complete_num
        },
        setVideoReward(state,data){
            state.video_lock.reward = data.reward
        },
        setRewardInfo(state,data){
            state.reward_money = data
        },
        setYaoyiyaoUserInfo(state,data){
            state.yaoyiyao.cash = data.cash
            state.yaoyiyao.cash_currency = data.cash_currency
            state.yaoyiyao.game_num = data.game_num
            state.yaoyiyao.end_time = data.end_time
            state.yaoyiyao.next_game_time = data.next_game_time
            state.yaoyiyao.additional_num = data.additional_num
            state.yaoyiyao.num = data.num
            state.yaoyiyao.money1 = data.money1
            state.yaoyiyao.money2 = data.money2
            state.yaoyiyao.headimgurl = data.headimgurl
            state.yaoyiyao.nickname = data.nickname
        },
        setYaoyiyaoShakeReward(state,data){
            state.yaoyiyao.reward = data.reward
            state.yaoyiyao.state = data.state
            state.yaoyiyao.additional_num = data.additional_num
            state.yaoyiyao.num = data.num
        },
        setYaoyiyaoDayReward(state,data){
            state.yaoyiyao.days_reward = data.list
        },
    },
    actions: {
        getBaseData(context, data) {
            context.commit('setBaseData', data)
        },
        getVideoProgress(context, data) {
            context.dispatch('getVideoNum',data)
            context.dispatch('getWithdraw')
        },
        async addVideoProgress(context,data){
            try {
                let resData = await homeApi.addVideoProgress()
                context.commit('setVideoReward',resData.data)
                context.dispatch('getVideoProgress',data)
            }catch (e) {

            }
        },
        async getVideoProgressDouble(context,data){
            try {
                let resData = await homeApi.setVideoProgressDouble({state:data.state})
                context.commit('setVideoReward',resData.data)
            }catch (e) {

            }
        },
        async getVideoNum(context, data) {
            try {
                let resData = await homeApi.getVideoProgress()
                context.commit('setVideoProgress', resData.data)
                //用于判断奇偶
                if(data.callback) data.callback()
            } catch (e) {

            }
        },
        async getWithdraw(context, data) {
            try {
                let resData = await homeApi.getWithdrawOptions()
                context.commit('setWithdraw', resData.data)
            } catch (e) {

            }
        },
        async getVideoLockInfo(context, data) {
            try {
                let resData = await homeApi.getVideoLockInfo()
                context.commit('setVideoLockInfo', resData.data)
            } catch (e) {

            }
        },
       async yaoyiyaoUserInfo(context, data) {
            try {
                let resData = await homeApi.yaoyiyaoUserInfo()
                context.commit('setYaoyiyaoUserInfo', resData.data)
            } catch (e) {

            }
        },
      async yaoyiyaoShakeReward(context, data) {
            try {
                let resData = await homeApi.yaoyiyaoShakeReward()
                context.commit('setYaoyiyaoShakeReward', resData.data)
                if(data.callback) data.callback()
            } catch (e) {

            }
        },
      async yaoyiyaoDayReward(context, data) {
            try {
                let resData = await homeApi.yaoyiyaoDayReward()
                context.commit('setYaoyiyaoDayReward', resData.data)
            } catch (e) {

            }
        },
      async yaoyiyaoDayRewardSet(context, data) {
            try {
                let resData = await homeApi.yaoyiyaoDayRewardSet()
                context.commit('setYaoyiyaoDayReward', resData.data)
            } catch (e) {

            }
        },

    }
})
