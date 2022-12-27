<template>
    <layer  v-model="isShowModal" 
        styles="background-color:transparent;width:100%;max-width:100%;"
        className="piaofujinbiModal"
    >
      <div class="modal-content " @click="closeLayer">
        <div class="shakeEnvelopeModal">
          <img class="closeIcon"  @click.prevent="closeLayer" src="//img.ibestfanli.com/sign_static_quick3/failToDrawModal_closeIcon.png"/>

          <div class="modal-title">奖励获得</div>
          <div class="contentbox">
            <div class="msg-title">恭喜您获得</div>
            <div class="messText">
               <div class="msg-item">
                 <img src="../../assets/images/luck_jinbi.png">
                 <span>{{$store.state.float.gold_ingot}}</span>
               </div>
              <div class="msg-item">
                <img src="../../assets/images/luck_pak.png" >
                <span>{{$store.state.float.reward}}元</span>
              </div>
            </div>
            <div class="button" @click="closeLayer">开心收下</div>

          </div>
        </div>
      </div>

      <canvas class="canvas" id="luckRes" />
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
          this.utils.onPag('./pag/package-line.pag','luckRes')
        },
        hideModalFn() {
            this.isShowModal = false
          this.utils.hidePag('luckRes')
        },
      closeLayer(){
          this.hideModalFn()
          this.$emit('closeLayer')
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
    background:url('../../assets/images/luck_res-bg.png') no-repeat;
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
      top: 100px;
      right: 50px;
    }

    .contentbox {
       position: relative;
      .messText {
        color: #FBECB8;
        font-size: 5.333vw;
        height: 25vw;
        margin-top: 26vw;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
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
        line-height:90px;
        width:300px;
        height:90px;
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
  width:400px;
}
#luckRes{
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
}

.congrua{
  width: 400px;
}
.modal-title{
  color: #E26734;
  font-size: 3.667vw;
  position: absolute;
  top: 3.333vw;
  left: 24.333vw;
}
.msg-title{
  color: #9D692E;
  font-size: 3.667vw;
  position: absolute;
  top: 15.333vw;
  text-align: center;
  width: 100%;
}
.msg-item{
  display: flex;
  flex-direction: column;
  img{
    width: 100px;
    height: 100px;
    object-fit: contain;
  }
  span{
    color: red;
    font-size: 20px;
  }
}

</style>