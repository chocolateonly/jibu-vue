import Vue from 'vue'
import Vuex from 'vuex'
import * as http from "http";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      base_data:{
          userId:'',
          productId:'',
          channel:'',
          versions:'',
          Authorization:''
      }
  },
  mutations: {
       setBaseData(state,data){
           state.base_data = data
       },
  },
  actions: {
     getBaseData(context,data){
       context.commit('setBaseData',data)
     }
  }
})
