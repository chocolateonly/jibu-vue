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
        }
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

    }
})
