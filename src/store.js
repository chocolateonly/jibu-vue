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

  },
  actions: {
     getBaseData(data){
       this.base_data = data
       console.log('~~~base_data~~~',data)
     }
  }
})
