<template>
    <layer v-model="showLoadingLayer" styles="background-color:transparent;width:100%;
        max-width:100%;"
        className="loadingModal"
        >
        <div class="loadingBox">
        <div>
<!--          0.3的新人红包奖励图片展示-->
          <div v-if="type=='isNew'"></div>
        </div>
        <div>
            <div class="footerTip">
            <div class="bar">
                <div class="length" :style="'width:'+process+'%;'"></div>
            </div>
            </div>
            <div class="loadingText" v-if="type=='getMoney'">恭喜获得现金奖励,视频之后马上获得</div>
            <div class="loadingText">进账中,视频之后马上获得</div>
        </div>
        </div>
    </layer>
</template>
<script>
export default {
    name: "loadingVideo",
    data() {
        return {
            showLoadingLayer:false,
            process:0, // 百分比进度
            type:''
        }
    },
    methods: {
        showModalFn(type) {
            this.type = type
            this.showLoadingLayer = true
            // 显示进度比
            this.timer = setInterval(()=>{
                this.process += 5
                if(this.process >= 100) {
                    this.hideModalFn()
                    this.$emit('playVideoFn')
                }
            }, 50)
        },
        hideModalFn() {
            clearInterval(this.timer)
            this.process = 0
            this.showLoadingLayer = false
        }
    }
}
</script>
<style lang="scss" scope>
/* 看视频loading */
.loadingModal {
    .loadingBox {
      .loadingText {
        font-size:32px;
        color:#fff;
      }
      .footerTip {
            display:flex;
            align-items: center;
            .bar {
              margin:35px auto;
              width:350px;
              height: 30px;
              background:#fff;
              border-radius: 15px;
              .length {
                  height: 30px;
                  background: -webkit-linear-gradient(right,#ff871b,#fdb842);
                  background: linear-gradient(270deg,#ff871b,#fdb842);
                  border-radius: 15px;
                  max-width: 100%;
              }
            }
          }
    }
  }
</style>