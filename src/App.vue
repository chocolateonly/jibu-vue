<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="router-view"/>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return {
      transitionName:'vux-pop-in'
    }
  },
  created() {
    //获取基本信息
    this.utils.webDataToApp('getBaseJson', {})
    window.setBaseData =this.setBaseData
  },
  mounted() {
   // this.pag()
  },
  methods:{
    //pag 使用示例
     pag(){
      this.utils.onPag('https://pag.art/file/like.pag')
      setTimeout(()=>{
        this.utils.hidePag()
      },2000)
    },
    setBaseData(data){
      this.test = data
      localStorage.setItem('base_data',data)
      this.$store.dispatch('getBaseData',JSON.parse(data))
    },
  },
  watch: {//使用watch 监听$router的变化
    // $route(to, from) {
    //   //如果to索引大于from索引,判断为前进状态,反之则为后退状态
    //   if(to.meta.index > from.meta.index){
    //     //设置动画名称
    //     this.transitionName = 'vux-pop-in';
    //   }else{
    //     this.transitionName = 'vux-pop-out';
    //   }
    // }
  }
}
</script>

<style lang="scss">
#app {
  font-family: PingFangSC-Semibold, PingFang SC;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: relative;

  .router-view{
    width: 100%;
    position: absolute;
    -webkit-transition: all .3s cubic-bezier(.55,0,.1,1);
    -moz-transition: all .3s cubic-bezier(.55,0,.1,1);
    -ms-transition: all .3s cubic-bezier(.55,0,.1,1);
    -o-transition: all .3s cubic-bezier(.55,0,.1,1);
    transition: all .3s cubic-bezier(.55,0,.1,1);
    height:100%;
  }

  .vux-pop-out-enter-active,
  .vux-pop-out-leave-active,
  .vux-pop-in-enter-active,
  .vux-pop-in-leave-active {
    will-change: transform;
    transition: all .5s;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    perspective: 1000;
  }
  .vux-pop-out-enter {
    opacity: 0;
    transform: translate3d(-30%, 0, 0);
  }
  .vux-pop-out-leave-active {
    opacity: 0;
    transform: translate3d(30%, 0, 0);
  }
  .vux-pop-in-enter {
    opacity: 0;
    transform: translate3d(30%, 0, 0);
  }
  .vux-pop-in-leave-active {
    opacity: 0;
    transform: translate3d(-30%, 0, 0);
  }
}
.layui-m-layer-footer .layui-m-layercont{
  background: transparent !important;
}
</style>
