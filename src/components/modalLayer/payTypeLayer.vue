<template>
    <layer  v-model="isShowModal" 
    styles="background-color:transparent;width:100%;max-width:100%;"
    className="payTypeModal"
    >
      <div class="xinrenhongbao modal-content ">
        <!-- 微信通知弹框 -->
        <div class="wchartModal withdrawTypeMain">
            <img class="closeIcon"  @click="hideModalFn" src="//img.ibestfanli.com/sign_static_quick3/failToDrawModal_closeIcon.png"/>
            <div class="contentbox">
              <div class=" wechatTitle">
                选择提现方式
              </div>
              <div class="content">
                <div class="card 
                                alipay 
                                check 
                                alipayTip 
                            "><img src="//img.ibestfanli.com/sign_static_quick/withdrawType_alipayIcon.png" class="imgIcon"><div class="name">支付宝</div><div class="tip">不限额度</div></div><div class="card checked"><img src="//img.ibestfanli.com/sign_static_quick/withdrawType_wechatIcon.png" class="imgIcon"><div class="name">微信</div><div class="tip">需满0.3元</div></div></div>
              <div class="button">去提现</div>

              <div class="footerTip">
                <!-- <img src="//img.ibestfanli.com/sign_static_quick3/widthdraw_check.png" class="tipIcon"></img> -->
                <img src="//img.ibestfanli.com/sign_static_quick3/widthdraw_checked.png" class="tipIcon"></img>
                <div class="textTip">
                    <span>阅读并同意</span>
                    <span style="color: rgb(254, 75, 25);">服务协议</span>
                    <span style="color: rgb(254, 75, 25);">、</span>
                    <span style="color: rgb(254, 75, 25);">隐私政策</span>
                </div>
            </div>
            </div>
          </div>
      </div>
    </layer>
</template>

<script>
export default {
  name: "payTypeLayer",
  props:[],
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
    }
  }
}
</script>

<style lang="scss" scope>
.xinrenhongbao {
  &.modal-content {
    -webkit-animation: modal-scale-in .3s cubic-bezier(.5,0,.2,1.5) 1;
    animation: modal-scale-in .3s cubic-bezier(.5,0,.2,1.5) 1;
  }

  .wchartModal {
        position: relative;
        padding:0 50px;
        .closeIcon {
            position: absolute;
            height: 70px;
            width: 70px;
            top: 20px;
            right: 60px;
        }
        .contentbox {
            background:#fff;
            padding:20px 30px;
            border-radius: 20px;
            .wechatTitle {
                padding:50px 0;
                font-size:35px;
                text-align:center;
            }
            .content {
                    display:-webkit-box;
                    display:-webkit-flex;
                    display:flex;
                    justify-content:center;
                    margin:0 0 40px;
                    .card {
                        width:220px;
                        height:280px;
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
                        .imgIcon {
                            width:80px;
                            height:80px;
                            margin:30px 0 30px;
                        }
                        .name {
                            height:60px;
                            font-size:32px;
                            font-weight:500;
                            color:#333;
                            line-height:60px;

                        }
                        .tip {
                                height:30px;
                                font-size:24px;
                                font-weight:400;
                                color:#999;
                                line-height:30px;
                            }

                    }

                    .check {
                        background:url(//img.ibestfanli.com/sign_static_quick/withdrawType_checkBg.png) no-repeat;
                        background-size:100% 100%
                    }

                    .checked {
                        background:url(//img.ibestfanli.com/sign_static_quick/withdrawType_checkedBg.png) no-repeat;
                        background-size:100% 100%
                    }
                    .alipay {
                        margin:0 30px 0 0
                    }
                    .alipayTip {
                        position:relative;
                        &:before {
                                content:"";
                                background:url(//fasthuyitool.jidiandian.cn/web_static_assets/sign_static_quick4/aliOne/withdrawType_alipayTip2.png) no-repeat;
                                background-size:100% 100%;
                                width:280px;
                                height:60px;
                                position:absolute;
                                top:-40px;
                                left:-40px;
                                /* -webkit-animation:alipayTipAnimation 1s linear infinite;
                                animation:alipayTipAnimation 1s linear infinite */
                        }


                    }


            }
            

            .button {
                background:url(//img.ibestfanli.com/sign_static_quick/withdrawType_button.png) no-repeat;
                background-size:100% 100%
            }
            .button, .button2 {
                    font-size:30px;
                    font-weight:500;
                    color:#fff;
                    margin: 0 auto;
                    line-height:120px;
                    width:400px;
                    height:120px;
                    text-align:center;
            }

            .button2 {
                background:url(//img.ibestfanli.com/sign_static_quick3/widthdraw_waitButtonBg.png) no-repeat;
                background-size:100% 100%
            }
            .buttontTip {
                background:url(//img.ibestfanli.com/sign_static_quick/during_tipBg.png) no-repeat;
                background-size:100% 100%;
                width:4.35rem;
                height:.87rem;
                font-size:.36rem;
                font-weight:500;
                color:#9c4024;
                line-height:.8rem;
                text-align:center
            }


            .footerTip {
                margin:20px 0 20px;
                display:-webkit-box;
                display:-webkit-flex;
                text-align: center;
                justify-content: center;
                display:flex;
                .tipIcon {
                    width:26px;
                    height:26px;
                    position:relative;
                    top:-1px;
                    margin:0 10px 0 0
                }
                .textTip {
                        font-size:25px;
                        font-weight:400;
                        color:#999;
                        line-height:25px;
                    }

            }


        }
    }
}

@-webkit-keyframes alipayTipAnimation {
    0% {
        -webkit-transform:translateY(0);
        transform:translateY(0)
    }
    50% {
        -webkit-transform:translateY(0);
        transform:translateY(0)
    }
    to {
        -webkit-transform:translateY(0);
        transform:translateY(0)
    }
}
@keyframes alipayTipAnimation {
    0% {
        -webkit-transform:translateY(0);
        transform:translateY(0)
    } 
    50% {
        -webkit-transform:translateY(0);
        transform:translateY(0)
    }
    to {
        -webkit-transform:translateY(0);
        transform:translateY(0)
    }
}
</style>