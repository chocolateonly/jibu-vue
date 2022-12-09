import Vue from 'vue'
import Vuex from 'vuex'
import * as http from "http";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      base_data:{

      }
  },
  mutations: {

  },
  actions: {
     getBaseData(){
       const data = this.utils.webDataToApp('getBaseJson', {})
       this.base_data = data
       console.log('~~~base_data~~~',data)
     }
  }
})
