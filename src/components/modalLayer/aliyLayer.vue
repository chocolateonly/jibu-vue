<template>
    <layer v-model="showAliPopLayer" styles="background-color:transparent;width:100%;
        max-width:100%;"
        className="aliPopModal"
        >
        <div class="aliPopBox">
<!--           todo 等图 支付宝的图-->
          <button @click="zfbTixian">支付宝提现</button>
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
    }
  }
</style>