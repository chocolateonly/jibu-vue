<template>
    <layer  v-model="isShowModal" 
        styles="background-color:transparent;width:100%;max-width:100%;"
        className="piaofujinbiModal"
    >

      <!--    恭喜获得-->
      <img class="congrua" src="../../assets/images/luck_pak_txt.png" alt="">
        <div class="modal-content " @click="continueJindouLayer">
            <div class="shakeEnvelopeModal">
                <img class="closeIcon"  @click.prevent="closeJindouLayer" src="//img.ibestfanli.com/sign_static_quick3/failToDrawModal_closeIcon.png"/>
                <div class="contentbox">
                   <div class="messText">
                     <div>大量金币</div>
                     <div>和</div>
                     <div class="price">
                       {{ $store.state.float.reward }}元

                       <span class="priceAfter">最高</span>
                     </div>
                   </div>

                </div>
            </div>
        </div>

       <canvas class="canvas" id="luck" />
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
            this.utils.onPag('./pag/package-line.pag','luck')
        },
        hideModalFn() {
            this.isShowModal = false
            this.utils.hidePag('luck')
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
    height:600px;
    width:450px;
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
                height: 48vw;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                line-height: 8vw;
                font-weight: bold;
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
.piaofujinbiModal {
  .layui-m-layercont {
    padding:0;
  }
}
.congrua{
  width:300px;
}
#luck{
  position: absolute;
  top: 0;
  left: 0;
}

.price {
  position: relative;
  display: inline-block;
  .priceAfter {
    position: absolute;
    font-size:22px;
    background:#fbecb8;
    color:#e74b46;
    padding:0 12px;
    border-radius:20px 10px 15px 0;
    top:-4vw;
    right:-10vw;
    line-height: 5vw;
  }
  .congrua{
    width: 300px;
  }
}
</style>