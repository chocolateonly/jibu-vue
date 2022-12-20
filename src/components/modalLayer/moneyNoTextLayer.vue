<template>
  <layer v-model="addedBonusModalLayer" styles="background-color:transparent;width:100%;
    max-width:100%;"
         className="addedBonusModal"
  >
    <img class="congru" src="../../assets/images/xzlqhb_biaoti.png" alt="">
    <div class="content">
      <img class="close" src="../../assets/images/icon_close_yell.png" @click="close">
<!--金币-->
      <div class="top-box" v-if="$store.state.yaoyiyao.state==2&&!money">
        <div class="title">
          <img class="t-left-img" src="../../assets/images/dtxxtc_icon_hongbao.png" alt="">
          <span>获得现金币</span>
        </div>

        <div class="price">
          <animate-number  from="0" :to="reward" :key="reward" duration="4500" :formatter="priceFormatter">
          </animate-number>
        </div>
        <div class="tip">
          <div>10000个金币=0.01元</div>
          <div>可提现至微信零钱</div>
        </div>
      </div>

      <div class="top-box" v-else>
        <div class="title">
          <img class="t-left-img" src="../../assets/images/dtxxtc_icon_hongbao.png" alt="">
          <span>获得现金</span>
        </div>

        <div class="price">
          <animate-number  from="0" :to="money?money:reward" :key="money?money:reward" duration="4500" :formatter="priceFormatter">
          </animate-number>
        </div>
        <div class="tip">可提现至微信零钱</div>
      </div>



      <div id="btn" class="btn" @click="getIt">
        {{$store.state.yaoyiyao.state==2?'马上去提现':'开心收下'}}
      </div>
      <div class="tip footer-tip" v-if="money" >活动红包将于72小时后过期</div>
    </div>
  </layer>
</template>

<script>
export default {
  name: "moneyNoTextLayer",
  data(){
    return {
      addedBonusModalLayer:false,
      money:0
    }
  },
  computed:{
    reward(){
      return this.$store.state.yaoyiyao.reward
    }
  },
  methods:{
    showModalFn(money) {
      this.addedBonusModalLayer = true
      this.money = money
    },
    hideModalFn() {
      this.addedBonusModalLayer = false
    },
    // 格式化金额
    priceFormatter: function (num) {
      return num.toFixed(2)
    },
    close(){
      this.hideModalFn()
      this.$emit('closeLayer')
    },
    getIt(){
         this.close()
    }
  }
}
</script>

<style lang="scss" scoped>
.addedBonusModal .btn {
  position:absolute;
  left:50%;
  transform:translate(-50%);
  line-height: 12vw;
  width: 50vw;
  bottom:200px;
  background: url("../../assets/images/btn_tanchuang-Y-1.png") no-repeat;
  background-size: contain;
  color:#64120F;
  font-size: 40px;
  text-align: center;
}
.addedBonusModal .content {
  width:700px;
  height:800px;
  margin:0 auto;
  position:relative;
  background:url('../../assets/images/hdhbtc_tanchuanghongbao.png')  no-repeat;
  background-size:contain;
  background-position: center;
  .top-box{
    padding-top: 14.333vw;
    padding-right: 5vw;
  }
  .t-left-img{
    vertical-align: middle;
  }
  .title{
    font-size: 40px;
    font-weight: bold;
    color: #64291C;
  };
}
.addedBonusModal .content>.close {
  z-index:10;
  position:absolute;
  top: 6.667vw;
  right: 17.333vw;
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
  .pricebefoter {
    font-size:45px;
  }
  .priceAfter {
    position: absolute;
    font-size:22px;
    background:rgba(101, 226 ,52,1);
    color:#fff;
    padding:8px 12px;
    border-radius:20px 10px 15px 0;
    top:-8vw;
    right:-12vw;
  }
  .congrua{
    width: 400px;
  }
}
.tip{
  font-size: 20px;
  color: #CA9857;
}
.footer-tip{
  position: absolute;
  text-align: center;
  width: 100%;
  bottom: 0;
}
</style>