<template>
  <layer v-model="addedBonusModalLayer" styles="background-color:transparent;width:100%;
    max-width:100%;"
         className="addedBonusModal"
  >
    <money-tip ref="moneyTip" />
    <div class="time"><count-num :end-time="time" @endTimeFn="closeLayer"/>后失效</div>
    <div id="btn" class="btn" @click="openLayer">
      立即提现
    </div>
    <div class="tip" @click="closeLayer">暂时不提现</div>

  </layer>
</template>

<script>
import MoneyTip from "@/components/moneyTip";
import CountNum from "@/components/countNum";

export default {
  name: "moneyTimeLayer",
  components: {CountNum, MoneyTip},
  data(){
    return {
      addedBonusModalLayer:false,
      time:0
    }
  },
  mounted() {
    this.$refs['moneyTip'].showModal()
  },
  methods:{
    async showModalFn(time) {
      this.time = time
      this.addedBonusModalLayer = true

    },
    hideModalFn() {
      this.addedBonusModalLayer = false
    },
    closeLayer(){
      this.hideModalFn()
    },
    openLayer(){
      this.$layer.msg('当前余额不足，快去攒金币提现吧～')
      this.hideModalFn()

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
.tip{
  font-size: 25px;
  color: #fff;
  margin-top: 20px;
}
.time{
  color: #CBC397;
  font-size: 30px;
  margin-bottom: 20px;
}
</style>