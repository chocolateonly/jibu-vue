<template>
  <div>

  <layer v-model="qiandaoPayLayer" styles="background-color:transparent;width:100%;
    max-width:100%;"
    className="qiandaoModal"
    >
     <div class="qiandaomodal-content modal-content">
        <div class="signinMain">
                <img class="close" @click="closeQiandaoLayer" src="//img.ibestfanli.com/sign_static_quick3/reward_modal_close.png" alt="关闭">
                <div class="content">
                    <div class="top">
                        <div class="rule flex column-center" @click="showRule">
                            <span>签到规则</span>
                            <img class="question" src="//img.ibestfanli.com/sign_static_quick3/question_icon.png" alt="问号">
                        </div>
                    </div>
                    <div class="bottom" v-if="qiandaoInfo">
                        <!-- 签到次数 -->
                        <template >
                            <div class="item off" :key="'a'+index" v-for="(item,index) in qiandaoInfo.check_in_day">
                                <div class="days">{{item}}天</div>
                                <div class="signinRedpack" style="background: url(&quot;//img.ibestfanli.com/sign_static_quick3/redpack.png&quot;);">
                                    <div class="money" style="color: rgb(255, 255, 255);" v-if="index!=6">{{ options[index].reward }}<div class="unit">元</div>
                                    </div>
                                </div>
                            </div>

                            <div class="item" :key="'b'+index" v-for="(item,index) in 7 - qiandaoInfo.check_in_day">
                                <template v-if="item < (7 - qiandaoInfo.check_in_day)">
                                    <div class="days">{{item+qiandaoInfo.check_in_day}}天</div>
                                    <div class="signinRedpack" style="background: url(&quot;//img.ibestfanli.com/sign_static_quick3/redpack.png&quot;);">
                                        <div class="money" style="color: rgb(255, 255, 255);"  v-if="index!=6">{{ options[index].reward }}<div class="unit">元</div>
                                        </div>
                                    </div>
                                </template>
                                <template v-else>
                                    <img class="redpackLight" src="//img.ibestfanli.com/sign_static_quick3/redpack_bg_light.png" alt="红包光">
                                    <div class="days">7天</div>
                                    <div class="signinRedpack" style="background: url(&quot;//img.ibestfanli.com/sign_static_quick3/redpack.png&quot;);"></div>
                                </template>
                            </div>
                        </template>

                    </div>
                </div>
                <div class="signButton" v-if="qiandaoInfo && qiandaoInfo.state" @click="qiandaoJiangliFn">
                    <img src="//fasthuyitool.jidiandian.cn/web_static_assets/sign_static_quick4/index/sign_button_play.png" class="playIcon">
                    <div class="buttonText">立即领取</div>
                </div>
                <div class="disableBtn" v-else>
                    <div class="buttonText">明天再来</div>
                </div>
            </div>
     </div>
    </layer>
      <!--      规则-->
      <layer v-model="ruleLayer" styles="background-color:transparent;width:100%;
    max-width:100%;"
             className="modal withdrawRuleBacground "
      >
        <div class="modal-content ">
          <div class="withdrawRuleMain">
            <div class="title">签到规则</div>
            <div class="tip">
              <p>1、点击签到按钮观看视频完成签到</p>
              <p>2、完成签到可获得随机红包奖励，金额以获得奖励页面为准；</p>
              <p>3、获得奖励金额累计进账户余额，非独立提现模块，提现相关操作以余额提现页面为准；</p>
              <p>4、禁止通过一切作弊手段获得奖励。</p>
            </div>
            <div class="button" @click="ruleLayer=false">我知道了</div>
          </div>
        </div>
      </layer>
    </div>
</template>

<script>
import homeApi from '@/api/home.js'
import * as dayjs from 'dayjs'
export default {
  name: "qiandaoLayer",
  props:[],
  data() {
    return {
        qiandaoPayLayer:false,
        qiandaoInfo:null, // 签到数据
        ruleLayer:false,
        options:[]
    }
  },
  methods: {
    showModalFn() {
        this.qiandaoPayLayer =   true
        this.getQiandaoInfo()
    },
    hideModalFn() {
        this.qiandaoPayLayer = false
    },
    showRule(){
      this.ruleLayer = true
    },
    // 获取签到状态数据
    async getQiandaoInfo() {
        let resData = await homeApi.getQiandaoStatus()
        let options = await homeApi.getQiandaoOptions()
        this.options = options.data.list
        if(resData.message === 'success') {
            this.qiandaoInfo = {
              check_in_day:resData.data.check_in_day,
              state:resData.data.state
            }
            //     {
            //     check_in_day: 1,
            //     // check_in_day: 0,
            //     // check_in_day: 7,
            //     state: false
            // }
        }
    },
    // 点击领取签到奖励
    qiandaoJiangliFn() {
      this.hideModalFn()
        // 播放激励视频
        this.$emit('viewVideoAndQiandao',qiandaoInfo.check_in_day+1)
    },
    closeQiandaoLayer(){
          this.hideModalFn()
         this.$emit('closeQiandaoLayer')
    }
  }
}
</script>
<style lang="scss" scope>
.qiandaomodal-content {
    &.modal-content {
        -webkit-animation: modal-scale-in .3s cubic-bezier(.5,0,.2,1.5) 1;
        animation: modal-scale-in .3s cubic-bezier(.5,0,.2,1.5) 1;
    }
    .signinMain {
        position:relative;
        width:750px;
        height:800px;
        margin:0 auto;
        background:url(//img.ibestfanli.com/sign_static_quick3/modal_bg.png);
        background-size:100% 100%;
        overflow:hidden;
    }
.signinMain .toast {
    position:absolute;
    top:6rem;
    right:50%;
    -webkit-transform:translateX(50%);
    transform:translateX(50%);
    width:-webkit-fit-content;
    width:fit-content;
    max-width:50%;
    background-color:rgba(0, 0, 0, .8);
    border-radius:.48rem;
    padding:.2rem .6rem;
    color:#ccc;
    word-wrap:break-word;
    text-align:center;
    z-index:10000;
}
.signinMain .close {
    position:absolute;
    top:45px;
    right:65px;
    width:70px;
    height:70px;
}
.signinMain .content {
    width:500px;
    height:385px;
    margin:240px auto auto;
}
.signinMain .content .top {
    width:100%;
    display:-webkit-box;
    display:-webkit-flex;
    display:flex;
}
.signinMain .content .top .rule {
    margin:20px auto 10px 15px ;
}
.signinMain .content .top .rule .question {
    width:26px;
    height:26px;
    margin-left:5px;
}
.signinMain .content .top .tip {
    margin:20px 10px 0 0;
    line-height:20px;
}
.signinMain .content .top .tip .switch {
    width:30px;
    height:20px;
    margin-left:.15rem;
}
.signinMain .content .top .rule, .signinMain .content .top .tip {
    font-size:24px;
    color:#999;
}
.signinMain .content .bottom {
    width:100%;
    height:-webkit-fit-content;
    height:fit-content;
    display:-webkit-box;
    display:-webkit-flex;
    display:flex;
    -webkit-flex-wrap:wrap;
    flex-wrap:wrap;
    margin:10px 15px 0;
}
.signinMain .content .bottom .item {
    position:relative;
    width:110px;
    height:152px;
    background:url(//img.ibestfanli.com/sign_static_quick3/redpack_bg.png);
    background-size:100% 100%;
    margin-right:10px;
    margin-bottom:10px;
    &.off {
        opacity: .6;
    }
}
.signinMain .content .bottom .item .redpackLight {
    position:absolute;
    top:20px;
    right:50%;
    -webkit-transform:translateX(50%);
    transform:translateX(50%);
    width:150px;
    height:150px;
    -webkit-animation:signinRedpackLightAnimation 6s linear infinite;
    animation:signinRedpackLightAnimation 6s linear infinite;
}
.signinMain .content .bottom .item .days {
    text-align:center;
    font-size:30px;
    color:#d48667;
    margin-top:10px;
}
.signinMain .content .bottom .item .signinRedpack {
    position:absolute;
    top:50px;
    right:50%;
    -webkit-transform:translateX(50%);
    transform:translateX(50%);
    width:80px;
    height:90px;
    background-size:100% 100%!important;
}
.signinMain .content .bottom .item .signinRedpack .money {
    font-size:30px;
    font-weight:700;
    font-family:Akrobat-Bold, Akrobat;
    display:-webkit-box;
    display:-webkit-flex;
    display:flex;
    -webkit-box-pack:center;
    -webkit-justify-content:center;
    justify-content:center;
    margin-top:15px;
    color:#fff;
}
.signinMain .content .bottom .item .signinRedpack .money .unit {
    font-size:18px;
    font-weight:400;
    margin-top:2px;
}
.signinMain .content .bottom .item .mask {
    position:absolute;
    top:0;
    width:100%;
    height:100%;
    background-color:hsla(0, 0%, 100%, .5);
}
.signinMain .content .bottom .item .mask .maskImg {
    position:absolute;
    top:0;
    left:0;
    width:30px;
    height:26px;    
    border:1px solid red;
}
.signinMain .content .bottom .item:last-child {
    width:228px;
    height:152px;
    background:url(//img.ibestfanli.com/sign_static_quick3/redpack_bg_big.png);
    background-size:100% 100%;
}
.signinMain .content .bottom .item:last-child .signinRedpack {
    width:120px;
    height:80px;
    background:url(//img.ibestfanli.com/sign_static_quick3/redpack_big.png)!important;
    background-size:100% 100%!important
}
.signinMain>.signButton {
    background:url(//fasthuyitool.jidiandian.cn/web_static_assets/sign_static_quick4/index/sign_button_BG.png) no-repeat;
    background-size:100% 100%;
    width:420px;
    height:120px;
    margin:20px auto 0;
    -webkit-animation:signinBtnAnimation .72s linear infinite;
    animation:signinBtnAnimation .72s linear infinite;
    display:-webkit-box;
    display:-webkit-flex;
    display:flex;
    -webkit-box-align:center;
    -webkit-align-items:center;
    align-items:center;
    -webkit-box-pack:center;
    -webkit-justify-content:center;
    justify-content:center
}
.signinMain>.disableBtn {
    width:420px;
    height:100px;
    border-radius: 55px;
    margin:40px auto 0;
    font-size:35px;
    display:-webkit-box;
    display:-webkit-flex;
    display:flex;
    -webkit-box-align:center;
    -webkit-align-items:center;
    align-items:center;
    -webkit-box-pack:center;
    -webkit-justify-content:center;
    justify-content:center;
    background: rgba(255,255,255,1);
}
.signinMain>.signButton>.playIcon {
    width:42px;
    height:42px;
    margin:0 10px 0 0
}
.signinMain>.signButton>.buttonText {
    font-size:35px;
    font-weight:600;
    color:#c10600;
    line-height:35px;
}
.signinMain .btn {
    width:6.84rem;
    height:1.59rem;
    margin:.36rem 1.98rem 1.98rem
}

@-webkit-keyframes signinRedpackLightAnimation {
    0% {
        -webkit-transform:translateX(50%) rotate(0);
        transform:translateX(50%) rotate(0)
    }
    to {
        -webkit-transform:translateX(50%) rotate(1turn);
        transform:translateX(50%) rotate(1turn)
    }
}
@keyframes signinRedpackLightAnimation {
    0% {
        -webkit-transform:translateX(50%) rotate(0);
        transform:translateX(50%) rotate(0)
    }
    to {
        -webkit-transform:translateX(50%) rotate(1turn);
        transform:translateX(50%) rotate(1turn)
    }
}

@-webkit-keyframes signinBtnAnimation {
    0% {
        -webkit-transform:translateZ(0) scale(1);
        transform:translateZ(0) scale(1);
        z-index:99998;
    }
    50% {
        -webkit-transform:translateZ(0) scale(1.1);
        transform:translateZ(0) scale(1.1);
        z-index:99998;
    }
    to {
        -webkit-transform:translateZ(0) scale(1);
        transform:translateZ(0) scale(1);
        z-index:99998;
    }
}
@keyframes signinBtnAnimation {
    0% {
        -webkit-transform:translateZ(0) scale(1);
        transform:translateZ(0) scale(1);
        z-index:99998;
    }
    50% {
        -webkit-transform:translateZ(0) scale(1.1);
        transform:translateZ(0) scale(1.1);
        z-index:99998;
    }
    to {
        -webkit-transform:translateZ(0) scale(1);
        transform:translateZ(0) scale(1);
        z-index:99998;
    }
}

}
</style>