<template>
  <layer v-model="addedBonusModalLayer" styles="background-color:transparent;width:100%;
    max-width:100%;"
         className="addedBonusModal"
  >
    <money-tip />

    <div id="btn" class="btn" @click="openDoublePackageLayer">
      立即提现
    </div>
    <div class="tip" v-if="false">收下，暂时不提现</div>

  </layer>
</template>

<script>
import homeApi from "@/api/home";
import MoneyTip from "@/components/moneyTip";

export default {
  name: "raffleMoneyLayer",
  components: {MoneyTip},
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
.tip{
  font-size: 25px;
  color: #fff;
  margin-top: 20px;
}

</style>