<template>
  <layer v-model="addedBonusModalLayer" styles="background-color:transparent;width:100%;
    max-width:100%;"
         className="addedBonusModal"
  >
    <!--    恭喜获得-->
    <img class="congrua" src="../../assets/images/cjjm_biaoti.png" alt="">
    <div class="content">
      <img class="close" src="../../assets/images/cjjm_icon_guanbi.png" @click="closeLayer">
      <div class="top-box" v-if="options.length>0">

        <div class="option-item" v-for="(item,index) in 9" :key="index" :class="item==5?'center':index==selected?'selected':''">
           {{options[index].value=='center'?'':options[index].value}}
<!--          <span v-if="options[index].value!='center'">元</span>-->
          <div class="tixian-icon" v-if="item!=5">
            <img src="../../assets/images/gksprwtc_icon_weixinzhifu.png" alt="">
            <span>提现</span>
          </div>
        </div>
      </div>

    </div>

    <div id="btn" class="btn" @click="openLayer">
      点击抽奖
    </div>
    <div class="tip" v-if="false">抽奖金额100%提现，微信支付宝秒到账</div>

  </layer>
</template>

<script>
import homeApi from "@/api/home";

export default {
  name: "moneyLayer",
  data(){
    return {
      addedBonusModalLayer:false,
      selected:0,
      options:[],
      timer:null
    }
  },
  methods:{
    async showModalFn() {
      let resData =await homeApi.getRaffleOptions()
      this.options = resData.data.list
      this.options.splice(4,0,{value:'center'})

      this.addedBonusModalLayer = true

      this.timer = setInterval(()=>{
        const index = Math.floor(Math.random()*9)
        this.selected = index==4?5:index;
      },700)

    },
    hideModalFn() {
      clearInterval(this.timer)
      this.addedBonusModalLayer = false
    },
    closeLayer(){
      this.hideModalFn()
    },
   async openLayer(){
      this.hideModalFn()
      let resData = await homeApi.getRaffleRes()
      this.$store.commit('setRewardInfo',resData.data.withdrawal_num)
      this.$emit('openRaffleMoneyLayer')
    }
  }
}
</script>

<style lang="scss" scoped>
.addedBonusModal .btn {
  line-height: 12vw;
  width: 50vw;
  background: url("../../assets/images/btn_tanchuang-Y-1.png") no-repeat;
  background-size: contain;
  color:#64120F;
  font-size: 40px;
  text-align: center;
  margin: 0 auto;
}
.addedBonusModal .content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 72.667vw;
  height: 100.667vw;
  margin:0 auto;
  position:relative;
  background:url('../../assets/images/cjjm_tanchuangbeijing.png')  no-repeat;
  background-size:contain;
  background-position: center;
  .top-box{
    width: 60vw;
    height: 55vw;
    padding-top: 33vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .option-item{
    position: relative;
     flex:32% 0;
     height: 130px;
    line-height: 130px;
     background: url("../../assets/images/raffle-block.png") no-repeat;
     background-size: cover;
     color: #E35232;
     font-size: 40px;
     text-align: center;
    font-width: 600;
    span{
      font-size: 20px;
    }
     &.center{
       background: url("../../assets/images/raffle-5.png") no-repeat;
       background-size: cover;
     }
    &.selected{
      background: url("../../assets/images/raffle-block-active.png") no-repeat;
      background-size: cover;
    }
    .tixian-icon{
      position: absolute;
      bottom:-40px;
      width: 100%;
      text-align: center;
      img{
        width:30px;
        vertical-align: middle;
      }
      span{
        color:#57BD49;
        font-size: 20px;
      }
    }
  }
}
.addedBonusModal .content>.close {
  z-index:10;
  position:absolute;
  top: 24.667vw;
  right: 0;
  width:50px;
  height:50px;
}
.price {
  position: relative;
  display: inline-block;
  margin:80px 0 60px 0;
  font-weight:600;
  color:#ED4734;
  font-size:90px;
}
.congrua{
  width: 400px;
}
.tip{
  font-size: 25px;
  color: #fff;
  margin-top: 20px;
}

</style>