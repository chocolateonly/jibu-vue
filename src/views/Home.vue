<template>
  <div>
    <button @click="onTest">getBaseJson</button>
    获取的基础数据：{{test}}

  </div>
</template>

<script>
export default {
  data(){
    return{
      test:''
    }
  },
  created() {

    //获取基本信息
    this.utils.webDataToApp('getBaseJson', {})
    window.setBaseData =data=>this.setBaseData(data)

  },
  methods:{
    onTest(){
      this.utils.webDataToApp('getBaseJson', {})
    },
    setBaseData(data){
      this.test = data
      console.log('~~~h5设置基础数据~~~',data)
      localStorage.setItem('base_data',data)
      this.$layer.msg(data)
      this.$store.dispatch('getBaseData',JSON.parse(data))
    },
  }
}
</script>

<style scoped>

</style>