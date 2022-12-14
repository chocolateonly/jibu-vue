<template>
    <layer v-model="showAliPopLayer" styles="background-color:transparent;width:100%;
        max-width:100%;"
        className="aliPopModal"
        >
        <div class="aliPopBox">
          <div class="ali-content">
          <img   src="../../assets/images/ali_pay_price_tip.png" alt="" />
          <div class="price">0.02</div>
          </div>
          <img class="ali-btn" @click="zfbTixian" src="../../assets/images/ali_pay_btn.png" alt="" />
        </div>
    </layer>
</template>
<script>
export default {
    name: "aliPop",
    data() {
        return {
          showAliPopLayer:false,
        }
    },
    methods: {
        showModalFn() {
            this.showAliPopLayer = true
            
        },
        hideModalFn() {
            this.showAliPopLayer = false
        },
      zfbTixian(){
          this.hideModalFn()
          this.$emit('zfbTixian')
      }
    }
}
</script>
<style lang="scss" scope>
/* 看视频aliPop */
.aliPopModal {
    .aliPopBox {
      .aliPopText {
        font-size:32px;
        color:#fff;
      }
      .footerTip {
            display:flex;
            align-items: center;
      }
      .ali-content{
        width:600px;
        margin: 0 auto;
        text-align: center;
        position: relative;
        img{
          width: 100%;
        }
        .price{
          width: 100%;
          font-size: 80px;
          color: #fff;
          position: absolute;
          text-align: center;
          bottom: 60px;
          text-indent:-5.667vw;
          letter-spacing: 1.667vw;
        }
      }
      .ali-btn{
        margin-top: 20px;
        width: 500px;
      }
    }
  }
</style>