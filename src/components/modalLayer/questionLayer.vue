
<template>
  <layer v-model="addedBonusModalLayer" styles="background-color:transparent;width:100%;
    max-width:100%;"
         className="addedBonusModal"
  >
    <div class="content">
      <img class="close" src="../../assets/images/icon_close_yell.png" @click="close">

      <div class="top-box">
        <div class="title">

        </div>

        <div class="price">
          <animate-number  from="0" :to="$store.state.video_lock.reward" :key="$store.state.video_lock.reward" duration="4500" :formatter="priceFormatter">
          </animate-number>
          <span class="priceAfter">待翻倍</span>
        </div>
      </div>
      <img class="dt-txt" src="../../assets/images/dati-txt.png" />
      <div id="btn" class="btn" @click="goAnswer">
        马上挑战
      </div>
      <div class="tip-btn" @click="close">放弃挑战</div>

    </div>
  </layer>
</template>

<script>
export default {
  name: "moneyLayer",
  data(){
    return {
      addedBonusModalLayer:false,
      package:{
        price:16.66,
        isDouble:false
      }
    }
  },
  methods:{
    showModalFn() {
      this.addedBonusModalLayer = true

    },
    hideModalFn() {
      this.addedBonusModalLayer = false
    },
    close(){
      this.hideModalFn()
      this.$emit('closeQuestionLayer')
    },
    // 格式化金额
    priceFormatter: function (num) {
      return num.toFixed(2)
    },
    goAnswer(){
      this.hideModalFn()
      this.$emit('openQuestionContent')
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
  background:url('../../assets/images/dati-bg.png')  no-repeat;
  background-size:contain;
  background-position: center;
  .top-box{
    padding-top: 12.333vw;
    padding-right: 5vw;
  }
  .t-left-img{
    vertical-align: middle;
  }
  .title{
    font-size: 40px;
    font-weight: bold;
    color: #64291C;
    height: 80px;
  };
}
.addedBonusModal .content>.close {
  z-index:10;
  position:absolute;
  //top:16.667vw;
  right:100px;
  width:50px;
  height:50px;
}
.price {
  position: relative;
  display: inline-block;
  margin:6.667vw 0 60px 0;
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
}
.dt-txt{
  width: 45vw;
  margin-top: 7vw;
}
.tip-btn{
   color: #FAD8A0;
   font-size: 30px;
  position: absolute;
  z-index: 10;
  bottom: 18vw;
  text-align: center;
  width: 100%;
}
</style>