<template>
<div v-if="isOpen">
  <!--恭喜获得0.2元-->
  <div  class="congrua">
    <img src="../assets/images/xzlqhb_biaoti.png" alt="">
    <i>{{$store.state.reward_money}}元</i>
  </div>

  <div class="content">
      <div class="package">
        <div class="package-num">{{ $store.state.reward_money }}元</div>
      </div>
    <canvas class="canvas" id="pag"></canvas>

  </div>

</div>
</template>

<script>
export default {
  name: "moneyTip",
  data(){
    return {
      money:0,
      isOpen:false,
      timer:null
    }
  },
  watch:{
    isOpen(){
      if(!this.isOpen){
        if(this.timer) clearTimeout(this.timer)
        this.utils.hidePag()
      }
    }
  },
  methods:{
    showModal(type){
      if(type=='onlyShow'){
        this.timer = setTimeout(()=>{
          this.isOpen = false
          this.$emit('onlyShowCallback')
        },2000)
      }
      this.isOpen = true
      this.utils.onPag('./pag/package-sunshine.pag')
    },
  },
  beforeDestroy() {

  }
}
</script>

<style lang="scss" scoped>

.congrua{
  color: #FDEDBE;
  font-size: 8.333vw;
  text-align: center;
  font-weight: bolder;
  text-shadow: 2px 2px #e47338;
  img{
    width: 300px;
    vertical-align: middle;
  }
}


.content{
  width: 500px;
  height: 500px;
  margin: 0 auto 20px auto;
  position: relative;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
  .package{
    width: 200px;
    height: 200px;
    background: url('../assets/images/package-bg.png') no-repeat;
    background-size: contain;
    background-position: center;
    position: relative;
    .package-num{
      position: absolute;
      width: 100%;
      font-size: 40px;
      color: #fff;
      text-align: center;
      bottom: 40px;

    }
  }
}


</style>