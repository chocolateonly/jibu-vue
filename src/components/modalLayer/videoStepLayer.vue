<template>
    <layer  v-model="isShowVideoStepModal" 
    styles="background-color:transparent;width:100%;max-width:100%;"
    className="payTypeModal"
    >
      <div class="xinrenhongbao modal-content ">
        <div class="videoStepModal withdrawTypeMain">
            <img class="closeIcon"  @click="hideModalFn" src="//img.ibestfanli.com/sign_static_quick3/failToDrawModal_closeIcon.png"/>
            <div class="contentbox">
              <img src="../../assets/images/gksprwtc_beijing.png" alt="">
                <div class="stepBody">
                    <div class="li1" v-for="(item,index) in $store.state.video_lock.total" :key="index">
                        <div class="liItem">
                            <div class="node" :class="[$store.state.video_lock.complete_num >= item?'on':item<$store.state.video_lock.complete_num?'off':'']">
                                <div class="num">{{item}}</div>
                                <div>观看第{{item}}个视频</div>
                            </div>
                            <div class="borderLeft"></div>
                        </div>
                    </div>
                    <div class="li1">
                        <div>
                            <div class="node" :class="$store.state.video_lock.complete_num==$store.state.video_lock.total?'on':''" style="font-size: 5vw;">
                                <img src="../../assets/images/gksprwtc_icon_weixinzhifu.png" class="oksrc"/>
                                <div>最高提现5元</div>
                            </div>
                            <div class="borderLeft"></div>
                        </div>
                    </div>
                    
                </div>
                <div class="button" @click="viewTixian">观看提现</div>
            </div>
            
        </div>
      </div>
    </layer>
</template>

<script>
export default {
  name: "videoStepLayer",
  props:[],
  data() {
    return {
        isShowVideoStepModal:false,
    }
  },
  methods: {
    async showModalFn() {
      //获取视频解锁进度
        this.$store.dispatch('getVideoLockInfo',{state:0})
        this.isShowVideoStepModal = true
    },
    hideModalFn() {
        this.isShowVideoStepModal = false
    },
    viewTixian(){
      this.$emit('viewTixian')
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

  .videoStepModal {
        position: relative;
        padding: 0 9.667vw;
        .closeIcon {
            position: absolute;
            height: 70px;
            width: 70px;
            top: -95px;
            right: 40px;
        }
        .contentbox {
            border-radius: 6.667vw;
            background: url("../../assets/images/txcgdz_tanchuangbeijing.png") no-repeat;
            background-size:cover;
            .stepBody {
                width:280px;
                margin:0 auto;
            }
            .li1 {
                    list-style: none;
                    box-sizing: border-box;
                    padding-left:40px;
                    position: relative;
                    .liItem {
                        padding-bottom: 70px;
                    }
                }

                .borderLeft {
                    width: 2px;
                    height: 100%;
                    background-color: #ddd;
                    position: absolute;
                    top: 11.225px;
                    bottom: 0;
                    left: -1px;
                }

                .borderLeft1 {
                    background-color: #e6e6e6;
                }

                .node .num {
                    z-index: 1;
                    content: "";
                    background-color: #fff;
                    border:1px solid #999;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color:#999;
                    position: absolute;
                    border-radius: 10px;
                    left: 0;
                    top: 11.225px;
                    transform: translate(-50%, -50%);
                }

                .node {
                    font-size: 30px;
                    color: #999999;
                    text-align:left;
                    .oksrc {
                        width:50px;
                        height:50px;
                        position: absolute;
                        left:-25px;
                        top:-10px;
                      z-index: 99;
                    }
                }

                .on {
                    color: #ff3b30;
                    font-weight: 600;
                    .num {
                        background-color: #ff3b30;
                        color:#fff;
                        border-color:#ff3b30;
                    }
                }
                .off {
                    color: #999;
                    .num {
                        background-color: #999;
                        color:#fff;
                        border-color:#999;
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
            margin:50px auto 0;
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
    }
}
</style>