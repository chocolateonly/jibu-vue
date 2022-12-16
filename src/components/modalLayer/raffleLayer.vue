<template>
  <layer v-model="addedBonusModalLayer" styles="background-color:transparent;width:100%;
    max-width:100%;"
         className="addedBonusModal"
  >
    <!--    恭喜获得-->
    <img class="congrua" src="../../assets/images/cjjm_biaoti.png" alt="">
    <div class="content">
      <img class="close" src="../../assets/images/cjjm_icon_guanbi.png" @click="closeMoneyPackageLayer">

      <div class="top-box">

        <div class="option-item" v-for="(item,index) in 9" :key="index" :class="item==5?'center':index==selected?'selected':''">
           {{options[index]=='center'?'':options[index]}}
          <span v-if="options[index]!='center'">元</span>
        </div>
      </div>

    </div>

    <div id="btn" class="btn" @click="openDoublePackageLayer">
      点击抽奖
    </div>
    <div class="tip">抽奖金额100%提现，微信支付宝秒到账</div>

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
      options:[
          0.01,0.02,0.3,0.4,'center',0.6,0.7,0.8,0.9
      ]
    }
  },
  methods:{
    async showModalFn() {
      let resData = homeApi.getRaffleOptions()

      this.addedBonusModalLayer = true

    },
    hideModalFn() {
      this.addedBonusModalLayer = false
    },
    // 格式化金额
    priceFormatter: function (num) {
      return num.toFixed(2)
    },
    closeMoneyPackageLayer(){
      this.hideModalFn()
      this.$emit('closeMoneyPackageLayer')
    },
    openDoublePackageLayer(){
      this.hideModalFn()
      this.$emit('openDoublePackageLayer')
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