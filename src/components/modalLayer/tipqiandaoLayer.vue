<template>
<layer v-model="rePqiandaoPayLayer" styles="background-color:transparent;width:100%;
    max-width:100%;"
    className="zaichiqiandaoModal"
    >
    <div class="xinrenhongbao modal-content ">
        <!-- 再次签到提示 -->
        <div class="wchartModal">
            <img class="closeIcon" @click="close" src="//img.ibestfanli.com/sign_static_quick/closeIcon.png"/>
            <div class="contentbox">
              <div class="flex-center">
                <span class="wechatTitle">连续签到7天得150元</span>
              </div>
              <div class="content-tip">
<!--                todo:等图-->

              </div>
              <div class="wechatBody">
                <div class="fbBtn" @click="close">我知道了</div>
              </div>
            </div>
          </div>
      </div>
</layer>
</template>
<script>
export default {
    data() {
        return {
            rePqiandaoPayLayer:false
        }
    },
  methods:{
    showModal(){
      this.rePqiandaoPayLayer = true
    },
    close(){
      this.rePqiandaoPayLayer = false
       this.$emit('closeTipQiandaoLayer')
    }
  }
}
</script>
<style lang="scss" scoped>
.zaichiqiandaoModal {
    .wchartModal {
        position: relative;
        padding:0 50px;
        .closeIcon {
                position: absolute;
                height: 70px;
                width: 70px;
                top: -80px;
                right: 30px;
            }
        .contentbox {
            background:#fff;
            padding:20px 30px;
            border-radius: 20px;
            .wechatIco {  
            width:50px;
            height:50px;
            }
            .redpickIco {
            width:40px;
            height:40px;
            }
            .wechatTitle {
                font-size:30px;
                margin-left:10px;
                font-weight:700;
            }
            .wechatBody {
            margin-top:50px;
            .wechatTitle {
                color:#222;
                font-weight:500;
            }
            .price {
                position: relative;
                display: inline-block;
                margin:50px 0;
                font-weight:600;
                color:#222;
                font-size:70px;
                .pricebefoter {
                font-size:45px;
                }
                .priceAfter {
                position: absolute;
                font-size:28px;
                background:rgba(243,195,138,.2);
                color:#F3C38A;
                padding:8px 12px;
                border-radius:20px 10px 15px 0;
                top:-45px;
                right:-75px;
                }
            }
            .textItem {
                line-height:50px;
                margin:5px 0;
            }
            .labtitle {
                font-size:30px;
                color:#999;
            }
            .labtext {
                font-size:30px;
                color:#222;
                margin-left:30px;
                &.yellow {
                color:#F3C38A;
                }
            }
            .fbBtn {
                width:80%;
                height:90px;
                line-height:90px;
                margin:30px auto;
                border-radius:20px;
                background:url(//fasthuyitool.jidiandian.cn/web_static_assets/sign_static_quick4/fiveMoney/rule_button.png) no-repeat center;
                background-size: contain;
                font-size:30px;
                color:#fff;
            }
            }
        } 
        }
}
</style>
