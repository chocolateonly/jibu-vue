<template>
  <layer v-model="addedBonusModalLayer" styles="background-color:transparent;width:100%;
    max-width:100%;"
         className="addedBonusModal"
  >
    <div class="content">
      <div class="top-bar">
        答题
      </div>

      <div class="top-box">

        <div class="title">
          <img class="t-left-img" src="../../assets/images/dtxxtc_icon_hongbao.png" alt="">
          <span>答对即可翻倍红包</span>
        </div>

        <div class="question">
          {{ question.title }}
        </div>

        <div class="answer">
<!--          todo： 答案只返回了一个-->
          <div class="answer-item" @click="answer">{{question.answer}}</div>
        </div>

      </div>

    </div>
  </layer>
</template>

<script>
import homeApi from "@/api/home";

export default {
  name: "moneyLayer",
  data(){
    return {
      addedBonusModalLayer:false,
      question:{
        title:'',
        answer:''
      }
    }
  },
  methods:{
    async showModalFn() {
      this.addedBonusModalLayer = true
      let resData = await homeApi.getVideoLockQuestion()
      this.question = resData.data
    },
    hideModalFn() {
      this.addedBonusModalLayer = false
    },
    answer(){
      this.hideModalFn()
      this.$emit('openMoneyPackage')
    },
  }
}
</script>

<style lang="scss" scoped>
.addedBonusModal .content {
  width:700px;
  height:800px;
  margin:0 auto;
  position:relative;
  background:url('../../assets/images/dtxxtc_beijing.png')  no-repeat;
  background-size:contain;
  background-position: center;
  .top-bar{
    color: #8E5D3C;
    background: #FDF2CA;
    border-radius:0 0 20px 20px;
    padding: 20px;
    font-size:30px;
    width: 100px;
    margin: 0 auto;
  }
  .top-box{
    width: 500px;
    height: 650px;
    overflow-y: auto;
    margin: 20px auto;
    padding:20px;
    background: #fff;
    border-radius: 20px;
  }
  .t-left-img{
    vertical-align: middle;
  }
  .title{
    font-size: 30px;
    font-weight: bold;
    color: #64291C;
  };
  .question{
    color: #691311;
    font-size: 40px;
    margin: 20px 0 40px 0;
    line-height: 7vw;
  }
  .answer-item{
    color:#722F15;
    font-size: 30px;
    margin-top: 20px;
    width: 80%;
    height: 100px;
    line-height: 100px;
    background: url("../../assets/images/btn_tanchuang-Y-1.png") no-repeat;
    background-size: contain;
    background-position: center;
    margin: 20px auto 0 auto;
  }


}
</style>