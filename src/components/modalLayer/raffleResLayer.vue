<template>
  <layer v-model="ruleLayer" styles="background-color:transparent;width:100%;
    max-width:100%;"
         className="modal withdrawRuleBacground "
  >
    <div class="modal-content ">
      <div class="withdrawRuleMain">
        <div class="title">谢谢参与</div>
        <div class="tip">
          真遗憾！有100%的用户继续完成任务都中奖了
        </div>
        <div class="button" @click="ruleLayer=false">继续领取</div>
      </div>

      <div class="withdrawRuleMain" v-if="false">
        <div class="title">余额不足</div>
        <div class="tip">
          微信需要超过0.3元才能提现
        </div>
        <div class="button" @click="ruleLayer=false">继续领取</div>
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


}
</script>

<style scoped>

</style>