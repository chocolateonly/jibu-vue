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
            time: 0,//随机金额冷却时间，为0时重新变为随机金额
            video_task:0,//需要完成视频任务数量
            video_nums:0//已完成视频任务数量
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
    },
    actions: {
        getBaseData(context, data) {
            context.commit('setBaseData', data)
        },
        getVideoProgress(context, data) {
            context.dispatch('getVideoNum')
            context.dispatch('getWithdraw')
        },
        async getVideoNum(context, data) {
            try {
                let resData = await homeApi.getVideoProgress()
                context.commit('setVideoProgress', resData.data)
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

    }
})
