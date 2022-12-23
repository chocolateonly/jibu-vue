<template>
    <layer  v-model="isShowModal" 
        styles="background-color:transparent;width:100%;max-width:100%;"
        className="piaofujinbiModal"
    >
        <div class="modal-content ">
            <div class="shakeEnvelopeModal">
                <img class="closeIcon"  @click="closeJindouLayer" src="//img.ibestfanli.com/sign_static_quick3/failToDrawModal_closeIcon.png"/>
                <div class="contentbox">
                   <div class="messText">大量金币 和 现金</div>
                </div>
            </div>
        </div>
    </layer>
</template>
<script>
export default {
    data() {
        return {
            isShowModal:false
        }
    },
    methods: {
        showModalFn() {
            this.isShowModal = true
        },
        hideModalFn() {
            this.isShowModal = false
        },
      continueJindouLayer(){
          this.hideModalFn()
          this.$emit('continueLuckLayer')
      },
      closeJindouLayer(){
          this.hideModalFn()
          this.$emit('closeLuckLayer')
      }
    }
}
</script>
<style lang="scss" scoped>
.piaofujinbiModal {
    &.modal-content {
    -webkit-animation: modal-scale-in .3s cubic-bezier(.5,0,.2,1.5) 1;
    animation: modal-scale-in .3s cubic-bezier(.5,0,.2,1.5) 1;
  }


  .shakeEnvelopeModal {
    height:700px;
    width:550px;
    margin:0 auto;
    background:url(//img.ibestfanli.com/shakeEnvelopeActivity/shakeEnvelope/shakeEnvelopeModalBg.png) no-repeat;
    background-size:100% 100%;
    display:-webkit-box;
    display:-webkit-flex;
    display:flex;
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
    -webkit-flex-direction:column;
    flex-direction:column;
    -webkit-box-align:center;
    -webkit-align-items:center;
    align-items:center;
    position:relative;
        .closeIcon {
            position: absolute;
            height: 70px;
            width: 70px;
            top: 10px;
            right: 50px;
        }

        .contentbox {

            .messText {
                color: #FBECB8;
                font-size:40px;
                .dou {
                    color:yellow;
                    margin-left:10px;
                }
            }
            .messtip {
                margin-top:30px;
                color:rgba(255,255,255,.7);
                font-size:24px;
            }
            .button {
                background:url(//img.ibestfanli.com/sign_static_quick/withdrawType_button.png) no-repeat;
                background-size:100% 100%
            }

            .button {
                font-size:30px;
                font-weight:500;
                color:#fff;
                margin:20px auto 0;
                line-height:120px;
                width:400px;
                height:120px;
                text-align:center;
            }
        }
    }

}

</style>
<style lang="scss">
.piaofujinbiModal {
  .layui-m-layercont {
    padding:0;
  }
}

</style>