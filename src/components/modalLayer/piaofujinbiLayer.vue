<template>
    <layer  v-model="isShowModal" 
        styles="background-color:transparent;width:100%;max-width:100%;"
        className="piaofujinbiModal"
    >
        <div class="modal-content ">
            <div class="piaofujinbiBox">
              <div class="jindou">
                <img src="../../assets/images/jindou_icon.png">
              </div>
                <img class="closeIcon"  @click="closeJindouLayer" src="//img.ibestfanli.com/sign_static_quick3/failToDrawModal_closeIcon.png"/>
                <div class="contentbox">
                    <div class="messText">
                        <span>恭喜获得</span>
                        <span class="dou">{{$store.state.jinbi_reward}}现金豆</span>
                    </div>
<!--                    <div class="messtip">我的现金豆：</div>-->

                    <div class="button" v-if="rewrad_type=='step'" @click="continueJindouLayer">再领200</div>
                    <div class="button" v-else-if="rewrad_type=='xianshi'"  @click="continueJindouLayer">奖励翻倍</div>
                    <div class="button" v-else @click="continueJindouLayer">奖励翻倍</div>
                </div>
            </div>
        </div>
    </layer>
</template>
<script>
export default {
  props:{
    rewrad_type:{
      type:String,
      default:''
    }
  },
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
          this.$emit('continueJindouLayer')
      },
      closeJindouLayer(){
          this.hideModalFn()
          this.$emit('closeJindouLayer')
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

  .piaofujinbiBox {
        position: relative;
        padding:0 50px;
        .closeIcon {
            position: absolute;
            height: 70px;
            width: 70px;
            top: 10px;
            right: 50px;
        }

        .contentbox {
            background:#fff;
            padding:20px 30px;
            border-radius: 20px;
            padding-top: 100px;
            .messText {
                color: #333;
                font-size:32px;
                .dou {
                    color:#F28B3C;
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
.jindou{
  background: url("../../assets/images/jindou_line.png") no-repeat;
  background-size: contain;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 35vw;
  top: -15vw;
  img{
    width: 70px;
    height: 70px;
  }
}
</style>