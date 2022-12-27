<template>
  <layer v-model="addedBonusModalLayer" styles="background-color:transparent;width:100%;
    max-width:100%;"
         className="addedBonusModal"
  >
<!--    恭喜获得-->
    <img class="congrua" src="../../assets/images/xzlqhb_biaoti.png" alt="">
    <div class="content">
      <img class="close" src="../../assets/images/icon_close_yell.png" @click="closeMoneyPackageLayer">

      <div class="top-box">
      <div class="title">
        <img class="t-left-img" src="../../assets/images/dtxxtc_icon_hongbao.png" alt="">
        <span>现金红包</span>
      </div>

      <div class="price">
        <animate-number  from="0" :to="$store.state.video_lock.reward" :key="$store.state.video_lock.reward" duration="4500" :formatter="priceFormatter">
        </animate-number>
        <span class="priceAfter">翻1～3倍</span>
      </div>
      </div>

      <div id="btn" class="btn" @click="openDoublePackageLayer">
        点击翻倍红包
      </div>
    </div>
  </layer>
</template>

<script>
export default {
  name: "moneyLayer",
  data(){
    return {
      addedBonusModalLayer:false,
    }
  },
  methods:{
    showModalFn() {
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
    padding-top: 4.333vw;
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
    background:rgba(101, 226 ,52,.2);
    color:#fff;
    padding:8px 12px;
    border-radius:20px 10px 15px 0;
    top:-8vw;
    right:-12vw;
  }
}

.congrua{
  width: 400px;
}
</style>