<template>
  <layer v-model="ruleLayer" styles="background-color:transparent;width:100%;
    max-width:100%;"
         className="modal withdrawRuleBacground "
  >
    <img class="closeIcon" @click="close" src="//img.ibestfanli.com/sign_static_quick/closeIcon.png"/>

    <div class="modal-content ">
      <div class="withdrawRuleMain" v-if="$store.state.reward_money==0">
        <div class="title">谢谢参与</div>
        <div class="tip">
          真遗憾！有100%的用户继续完成任务都中奖了
        </div>
        <div class="button" @click="open">继续领取</div>
      </div>

      <div class="withdrawRuleMain" v-else-if="$store.state.reward_money<=0.3">
        <div class="title">余额不足</div>
        <div class="tip">
          微信需要超过0.3元才能提现
        </div>
        <div class="button" @click="open">继续领取</div>
      </div>
    </div>
  </layer>
</template>

<script>
export default {
  name: "raffleResLayer",
  data(){
    return{
      ruleLayer:false
    }
  },
  methods:{
    showModalFn(){
      this.ruleLayer = true
    },
    hideModalFn(){
      this.ruleLayer = false
    },
    open(){
      this.hideModalFn()
      this.$emit('showRaffleResVideo')
    },
    close(){
      this.hideModalFn()
      this.$emit('hideRaffleResVideo')
    },
  }

}
</script>

<style lang="scss" scoped>
.withdrawRuleMain{
  height: 400px;
  .title{
    font-size: 6vw;
  }
}
.tip{
  font-size: 30px;
  line-height: 30px;
  text-align: center;
  height: auto;
}
.closeIcon{
  float:right
}
</style>