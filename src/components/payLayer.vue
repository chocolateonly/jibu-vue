<template>
  <div>
    <layer v-model="isShowPayLayer" styles="background-color:transparent;width:100%;
    max-width:100%;"
    skin="footer"
    :uuid="3"
    anim="up"
    className="payModal"
    >
      <div class="payModalContent">
          <img src="//img.ibestfanli.com/sign_static_quick3/failToDrawModal_closeIcon.png" class="closeIcon" @click="closePayLayerFn"/>
          <div class="header">
            <div class="flex titleBox column-center">
            <img src="//img.ibestfanli.com/sign_static_quick3/balance_redIcon.png" class="redIcon"/>
            <span class="text">当前余额</span>
            </div>
            <div class="price">
              <span>{{data.price || 0}}</span>
              <span class="priceUnit">元</span>
            </div>
          </div>
          
          <div class="videogg" v-if="$store.state.video_progress.lock_status!=4">
<!--            视频解锁  明日再来 立即提现-->
              <img v-if="$store.state.video_progress.lock_status==1" src="//img.ibestfanli.com/sign_static_quick3/balance_five_unlock.png" class="bannerIcon" @click="showAddedBonuseModal"/>
              <img v-else-if="$store.state.video_progress.lock_status==2" src="../assets/images/txtc_btn_mingrizailai.png" class="bannerIcon" @click="openAgainLayer"/>
              <img v-else-if="$store.state.video_progress.lock_status==3" src="../assets/images/txtc_btn_lijitixian.png" class="bannerIcon" @click="showAddedBonuseModal"/>
          </div>
          <div class="flex-sb">
            <div class="tit">选择提现金额</div>
            <div class="guize" @click="ruleLayer=true">活动规则></div>
          </div>
          <div class="tabPrice flex">

            <div class="itemPrice"
            :class="[item.sign ==='最高5元'?'fiveMoney':item.user_reward ==='0.3'?'pointThreeMoney':'',item.checked?'on':'']"
            v-for="(item,index) in data.priceList" 
            :key="item.id"
            @click="selectPriceFn(index)"
            >
              <span :class="[Number(item.user_reward)?'money':'']">{{item.user_reward}}</span>
              <span class="priceUnit" v-if="item.unit">{{item.unit}}</span>

              <div class="rondom-hour" v-if="item.sign ==='最高5元'&&item.user_reward!='随机金额'">{{$store.state.video_progress.time}}时后过期</div>
            </div>

          </div>
          <div class="FingerMain">
            <!-- <div class="FingerTip">
              <img src="//img.ibestfanli.com/sign_static_quick3/balance_tip.png" class="tipIcon">
            </div> -->
            <div class="FingerButton" v-if="data.priceList.length>0">
              <div class="button1" v-if="data.priceList[data.checkIndex].sign =='额外奖励'" @click="otherBtnFn">微信提现</div>
              <div class="button1" @click="vxTixianBtnFn" v-if="(data.priceList[data.checkIndex].user_reward == 0.3)">微信提现</div>
              <div class="button3" v-if="(data.priceList[data.checkIndex].user_reward == 150 || data.priceList[data.checkIndex].user_reward == 200)" @click="receiveMoney">立即赚钱</div>
              <div class="button4" v-if="data.priceList[data.checkIndex].user_reward == '随机金额'" @click="showAddedBonuseModal">看视频领5元</div>
               <div class="button2" v-if="data.priceList[data.checkIndex].sign =='最高5元'&&data.priceList[data.checkIndex].user_reward!='随机金额'" @click="zfbTixianBtnFn">支付宝提现</div>

              <!-- <div class="button5">看视频领5元</div> -->
              <div class="circle" style="bottom: -0.2rem; right: -0.12rem;">
                <i class="circle1"></i>
                <i class="circle2"></i>
                <i class="circle3"></i>
              </div>
              <img class="finger" src="//img.ibestfanli.com/sign_static_quick/withdrawType_fingerIcon.png" alt="手指" style="bottom:0px; right: -10px;">
            </div>
          </div>
          <!-- 底部 -->
          <div class="footer">
            <div class="footerTitle">额外奖励</div>
            <img src="//fasthuyitool.jidiandian.cn/web_static_assets/sign_static_quick4/fiveMoney/turntable_icon2.png" class="turntableIcon2">
            <div class="footerContent">
              <div class="contentLeft">
                <img src="//img.ibestfanli.com/sign_static_quick3/failToDrawModal_red.png" class="red">
                <div class="content">
                  <div class="contentTip">看{{$store.state.video_progress.video_task}}个视频可立即提现</div>
                  <div class="contentPlan">
                    <div class="bar">
                      <div class="length" :style="{width:($store.state.video_progress.video_nums/$store.state.video_progress.video_task)*100 +'%'}"></div>
                  </div>
                  <div class="num">
                    <span>{{$store.state.video_progress.video_nums}}</span>
                    <span>/</span>
                    <span>{{$store.state.video_progress.video_task}}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="videoButton" @click="viewProgressToFinish"> 去完成 </div>
          </div>
        </div>
      </div>


    </layer>

  <!--      活动规则-->
  <layer v-model="ruleLayer" styles="background-color:transparent;width:100%;
    max-width:100%;"
         className="modal withdrawRuleBacground "
  >
    <div class="modal-content ">
      <div class="withdrawRuleMain">
        <div class="title">活动规则</div>
        <div class="tip">
          <p>一、参与对象：同一终端设备、同一微信号、或同一用户ID等均视为同一用户。</p>
          <p>二、本APP提供现金提现功能，可按照规则提取到微信、支付宝账户。</p>
          <p>三、活动及提现规则：</p>
          <p>1.新人专享福利：任一新人用户可享受一次新人专享福利0.3元，金额可直接申请提现。</p>
          <p>
            2.最高5元的随机金额福利：用户完成页面指定观看视频次数，APP综合用户行为及参与情况，为用户随机提供最高5元的金额福利，具体提现金额以当日页面随机获得的金额为准。任一用户仅可享受一次该福利。</p>
          <p>
            3.抽奖活动提现：完成页面指定观看视频次数可获得抽奖机会，用户理解结果是否中奖情况为随机。抽中金额在0.1元-20元间随机提供，抽中可立即提现或将抽中金额累积到下一次抽奖中一同提现。</p>
          <p>
            4.大额150元金额提现：观看软件指定视频后，用户可随机获得金额奖励，累计奖励的金额在软件账户余额中展示，用户可进行查看。随着用户使用本APP时长的增加，用户获得的随机金额奖励可能减少。</p>

      </div>
        <div class="button" @click="ruleLayer=false">我知道了</div>
      </div>
    </div>
  </layer>
  </div>
</template>

<script>
export default {
  name: "payLayer",
  props:['data','isNew03Flag','ecpm'],
  data() {
    return {
        isShowPayLayer:false, // 支付弹窗标识
        isShowWeixinBtn:false, // 微信可提现按钮显示标识
        ruleLayer:false  //活动规则弹窗
    }
  },
  // watch: {
  //   'data.priceList': {
  //       handler(newVal,oldVal) {
  //         newVal.forEach((item,index) => {

  //         })
  //       },
  //       deep:true
  //   }
  // },
  created() {
    console.log(this.data)
  },
  methods: {
    // 选择价格
    selectPriceFn(index) {
      this.$emit('selectPriceFn',index)
    },
    // 关闭弹框
    closePayLayerFn() {
      this.isShowPayLayer = false
      this.$emit('showAddedBonuseModal')
    },
    // 点击微信提现按钮
    vxTixianBtnFn() {
      this.$emit('vxTixianFn')
    },
    //视频解锁
    showAddedBonuseModal(){
        this.$emit('showAddedBonuseModal','isVideoUnlock')
    },
    //明日再来
    openAgainLayer(){
      this.$emit('openAgainLayer')
    },
    viewProgressToFinish(){
      this.$emit('viewProgressToFinish')
    },
    //支付宝提现
    zfbTixianBtnFn(){
      this.$emit('zfbTixianFn','isZfbTixian')
    },
    //额外奖励
    otherBtnFn(){
      if(Number(this.data.priceList[this.data.checkIndex].user_reward)<0.3){
        this.$layer.msg('余额不足0.3元，继续赚钱吧')
      }else{
         this.vxTixianBtnFn()
      }
    },
    //立即赚钱
    receiveMoney(){
      this.$emit('receiveMoney')
    }
  }
}
</script>
<style lang="scss" scoped>
/* 支付弹框 */
.payModalContent {
    background:#fff;
    border-radius:40px 40px 0 0;
    padding:30px;
    position: relative;

   .header {
      background: url(//img.ibestfanli.com/sign_static_quick3/balance_header_bg2.png) no-repeat;
      background-size: 100% 100%;
      width: 100%;
      height: 200px;
      background-position: center bottom;
    }
    .closeIcon {
          position: absolute;
          height: 70px;
          width: 70px;
          top: 15px;
          right: 20px;
          font-size:45px;
          color:#999;
    }
    .titleBox {
      .text {
        font-size:30px;
        font-weight:600;
      }
      .redIcon {
         width: 30px;
          height: 35px;
          margin: 0 10px 0 0;
      }
      
    }
    .price {
      margin-top:60px;
      font-size:70px;
      text-align:left;
      font-weight:600;
      .priceUnit {
        font-size:40px;
        margin-left:5px;
      }
    }
    .videogg {
      width:100%;
      height:150px;
      background: url(//img.ibestfanli.com/sign_static_quick3/balance_fivebanner.png);
      background-size: 100% 100%;
      position: relative;
      margin: 0 0 40px;
      .bannerIcon {
          position: absolute;
          width: 100px;
          height:100px;
          top: 30px;
          right: 20px;
      }
    }
    .tit {
      font-size:28px;
      color:#222;
    }
    .guize {
      font-size:28px;
      color:#999;
      cursor: pointer;
    }
    .tabPrice {
      margin-top:40px;
      margin-bottom:40px;
      flex-wrap: wrap;
      .itemPrice {
        width:200px;
        height:110px;
        box-sizing: border-box;
        display:flex;
        justify-content: center;
        align-items: center;
        margin-bottom:30px;
        border-radius:18px;
        border:2px solid #ccc;
        text-align:center;
        margin-right:25px;
        font-size:32px;
        font-weight: 600;
        color: #333;
        position: relative;
        .rondom-hour{
         position: absolute;
          bottom: 0px;
          font-size: 15px;
        }
        &.fiveMoney {
          &:after {
            content: "";
            background: url(//img.ibestfanli.com/sign_static_quick3/money_fiveTip.png) no-repeat;
            background-size: 100% 100%;
            width: 90px;
            height:25px;
            position: absolute;
            left: -1px;
            top: -1px;
          }
        }
        &.pointThreeMoney {
          &:after {
              content: "";
              background: url(//img.ibestfanli.com/sign_static_quick3/money_newUserTip.png) no-repeat;
              background-size: 100% 100%;
              width:90px;
              height: 25px;
              position: absolute;
              left: 0;
              top:-1px;
          }
        }
        
        .money {
            font-size:45px;
          }
          
        &.on {
          border:4px solid red;
          color:red;
          width:200px;
          height:110px;
          font-weight:700;
          &:before {
            content: "";
              background: url(//img.ibestfanli.com/sign_static_quick3/balance_checked.png) no-repeat;
              background-size: 100% 100%;
              width: 32px;
              height: 28px;
              position: absolute;
              right: -0.06rem;
              bottom: -0.06rem;
          }
        }
        &:nth-child(3n) {
          margin-right:0;
        }
        .priceUnit {
          font-size:18px;
          margin-top:10px;
        }
      }
    }

.FingerMain {
    position:relative;
    width:60%;
    margin:0 auto;
    z-index:10;
    .FingerTip {
      position:absolute;
      z-index:10;
      -webkit-animation:tipAnimation 1.5s infinite;
      animation:tipAnimation 1.5s infinite
  }
  .FingerTip {
    position:absolute;
    z-index:10;
    -webkit-animation:tipAnimation 1.5s infinite;
    animation:tipAnimation 1.5s infinite
}


  .FingerButton {
    -webkit-animation:btnAnimation .72s infinite;
    animation:btnAnimation .72s infinite;
    .finger {
        position:absolute;
        bottom:-.32rem;
        right:-.28rem;
        width:100px;
        height:95px;
        -webkit-animation:fingerAnimation .72s infinite;
        animation:fingerAnimation .72s infinite
    }
    .circle {
        position:absolute;
        top:12px;
        right:-10px;
        width:100px;
        height:100px;
        .circle1 {
            position:absolute;
            display:block;
            top:-10px;
            left:-10px;
            width:80px;
            height:80px;
            border:1px solid #fff;
            border-radius:50%;
            -webkit-animation:circleAnimation1 .72s infinite;
            animation:circleAnimation1 .72s infinite
        }
        .circle2 {
          position:absolute;
          top:0;
          left:0;
          display:block;
          width:60px;
          height:60px;
          border:1px solid #fff;
          border-radius:50%;
          -webkit-animation:circleAnimation2 .72s infinite;
          animation:circleAnimation2 .72s infinite
      }

      .circle3 {
          position:absolute;
          top:10px;
          left:10px;
          display:block;
          width:40px;
          height:40px;
          border:1px solid #fff;
          border-radius:50%;
          -webkit-animation:circleAnimation3 .72s infinite;
          animation:circleAnimation3 .72s infinite
      }

    }
}
}
.button1 {
    background:url(//img.ibestfanli.com/sign_static_quick3/balance_wechatButton_Bg.png);
    background-size:100% 100%;
    width:100%;
    height:120px;
    display:-webkit-box;
    display:-webkit-flex;
    display:flex;
    -webkit-box-pack:center;
    -webkit-justify-content:center;
    justify-content:center;
    font-size:35px;
    font-weight:500;
    color:#fff;
    line-height:90px;
    box-sizing:border-box;
    position:relative
}
.button1:before {
    content:"";
    background:url(//img.ibestfanli.com/sign_static_quick3/balance_wechatIcon.png) no-repeat;
    background-size:100% 100%;
    width:50px;
    height:50px;
    position:absolute;
    top:20px;
    left:70px;
}
.button2 {
    background:url(//img.ibestfanli.com/sign_static_quick3/balance_apilyButton_Bg.png);
    background-size:100% 100%;
    width:100%;
    height:120px;
    display:-webkit-box;
    display:-webkit-flex;
    display:flex;
    -webkit-box-pack:center;
    -webkit-justify-content:center;
    justify-content:center;
    font-size:35px;
    font-weight:500;
    color:#fff;
    line-height:90px;
    box-sizing:border-box;
    position:relative
}
.button2:before {
    content:"";
    background:url(//img.ibestfanli.com/sign_static_quick3/balance_apilyIcon.png) no-repeat;
    background-size:100% 100%;
    width:50px;
    height:50px;
    position:absolute;
    top:20px;
    left:70px;
}
.button3 {
    background:url(//img.ibestfanli.com/sign_static_quick3/balance_Button_Bg.png);
    background-size:100% 100%;
    width:100%;
    height:120px;
    display:-webkit-box;
    display:-webkit-flex;
    display:flex;
    -webkit-box-pack:center;
    -webkit-justify-content:center;
    justify-content:center;
    font-size:35px;
    font-weight:500;
    color:#fff;
    line-height:90px;
    box-sizing:border-box;
    position:relative
}
.tipIcon {
    width:320px;
    height:65px;
    -webkit-transform:translate(50px, -15px);
    transform:translate(50px,-15px);
    position:relative;
    top:-30px;
}
.button4 {
    background:url(//img.ibestfanli.com/sign_static_quick3/balance_Button_Bg.png);
    background-size:100% 100%
}
 .button4, .button5 {
  width:100%;
    height:120px;
    display:-webkit-box;
    display:-webkit-flex;
    display:flex;
    -webkit-box-pack:center;
    -webkit-justify-content:center;
    justify-content:center;
    font-size:35px;
    font-weight:500;
    color:#fff;
    line-height:90px;
    box-sizing:border-box;
    position:relative
}
.button5 {
    background:url(//img.ibestfanli.com/sign_static_quick3/balance_waitButton_Bg.png);
    background-size:100% 100%
}
.button6 {
    background:url(//img.ibestfanli.com/sign_static_quick3/balance_Button_Bg.png);
    background-size:100% 100%;
    width:6.54rem;
    height:1.89rem;
    margin:.93rem 0 0;
    display:-webkit-box;
    display:-webkit-flex;
    display:flex;
    -webkit-box-pack:center;
    -webkit-justify-content:center;
    justify-content:center;
    font-size:.54rem;
    font-family:PingFangSC-Medium, PingFang SC;
    font-weight:500;
    color:#fff;
    line-height:.75rem;
    padding:.39rem 0 0;
    box-sizing:border-box;
    position:relative
}

/* 底部 */

.footer {
    background:url(//img.ibestfanli.com/sign_static_quick3/balance_footerBg.png) no-repeat;
    background-size:100% 100%;
    width:100vw;
    height:220px;
    position:relative;
    margin-top:20px;
    margin-left:-30px;
    margin-bottom:-30px;
    right:0;
}
.footer>.footerTitle {
    font-size:30px;
    font-weight:500;
    color:#9c4024;
    text-align:center;
    padding:15px 0 0
}
.footer>.turntableIcon2 {
    position:absolute;
    width:140px;
    height:140px;
    top:-50px;
    right:10px;
}
.footer>.footerContent {
    height:130px;
    background:hsla(0, 0%, 100%, .8);
    border-radius:.24rem;
    margin:30px 20px;
    padding:20px 30px;
    box-sizing:border-box;
    -webkit-box-pack:justify;
    -webkit-justify-content:space-between;
    justify-content:space-between;
    position:relative;
    z-index:2
}
.footer>.footerContent, .footer>.footerContent>.contentLeft {
    display:-webkit-box;
    display:-webkit-flex;
    display:flex
}
.footer>.footerContent>.contentLeft>.red {
    width:65px;
    height:80px;
    margin:0 20px 0 0
}
.footer>.footerContent>.contentLeft>.content>.contentTip {
    font-size:28px;
    font-weight:600;
    color:#333;
    line-height:20px;
    text-align:left;
    margin-top:10px;
}
.footer>.footerContent>.contentLeft>.content>.contentPlan {
    margin:10px 0 0;
    display:-webkit-box;
    display:-webkit-flex;
    display:flex
}
.footer>.footerContent>.contentLeft>.content>.contentPlan>.bar {
    width:250px;
    height:22px;
    background:rgba(255, 218, 182, .6);
    border-radius:15px;
    border:1px solid #fdc790;
    margin-top:10px;
}
.footer>.footerContent>.contentLeft>.content>.contentPlan>.bar>.length {
    width:250px;
    height:20px;
    background:-webkit-linear-gradient(right, #ff871b, #fdb842);
    background:linear-gradient(270deg, #ff871b, #fdb842);
    border-radius:.18rem;
    max-width:100%;
}
.footer>.footerContent>.contentLeft>.content>.contentPlan>.num {
    font-size:26px;
    font-weight:600;
    color:#333;
    line-height:50px;
    margin-left:10px;
}
.footer>.footerContent>.videoButton {
    background:-webkit-linear-gradient(left, #fb6d13, #fe4318);
    background:linear-gradient(90deg, #fb6d13, #fe4318);
    color:#fff;
    line-height:55px;
    -webkit-animation:btnAnimation .72s infinite;
    animation:btnAnimation .72s infinite
}
.footer>.footerContent>.finishButton, .footer>.footerContent>.videoButton {
    width:150px;
    height:55px;
    border-radius:30px;
    font-size:26px;
    font-weight:600;
    text-align:center;
    margin:20px 0 0;
}
.footer>.footerContent>.finishButton {
    background:#e6e6e6;
    color:#999;
    line-height:55px;
}

}



@-webkit-keyframes btnAnimation {
    0% {
        -webkit-transform:translateZ(0) scale(1);
        transform:translateZ(0) scale(1);
        z-index:99998
    }
    50% {
        -webkit-transform:translateZ(0) scale(1.1);
        transform:translateZ(0) scale(1.1);
        z-index:99998
    }
    to {
        -webkit-transform:translateZ(0) scale(1);
        transform:translateZ(0) scale(1);
        z-index:99998
    }
}
@keyframes btnAnimation {
    0% {
        -webkit-transform:translateZ(0) scale(1);
        transform:translateZ(0) scale(1);
        z-index:99998
    }
    50% {
        -webkit-transform:translateZ(0) scale(1.1);
        transform:translateZ(0) scale(1.1);
        z-index:99998
    }
    to {
        -webkit-transform:translateZ(0) scale(1);
        transform:translateZ(0) scale(1);
        z-index:99998
    }
}
@-webkit-keyframes circleAnimation1 {
    0% {
        -webkit-transform:translateZ(0) scale(0);
        transform:translateZ(0) scale(0);
        opacity:0
    }
    50% {
        -webkit-transform:translateZ(0) scale(1);
        transform:translateZ(0) scale(1);
        opacity:.5
    }
    to {
        -webkit-transform:translateZ(0) scale(0);
        transform:translateZ(0) scale(0);
        opacity:0
    }
}
@keyframes circleAnimation1 {
    0% {
        -webkit-transform:translateZ(0) scale(0);
        transform:translateZ(0) scale(0);
        opacity:0
    }
    50% {
        -webkit-transform:translateZ(0) scale(1);
        transform:translateZ(0) scale(1);
        opacity:.5
    }
    to {
        -webkit-transform:translateZ(0) scale(0);
        transform:translateZ(0) scale(0);
        opacity:0
    }
}
@-webkit-keyframes circleAnimation2 {
    0% {
        -webkit-transform:translateZ(0) scale(0);
        transform:translateZ(0) scale(0);
        opacity:0
    }
    50% {
        -webkit-transform:translateZ(0) scale(1);
        transform:translateZ(0) scale(1);
        opacity:.7
    }
    to {
        -webkit-transform:translateZ(0) scale(0);
        transform:translateZ(0) scale(0);
        opacity:0
    }
}
@keyframes circleAnimation2 {
    0% {
        -webkit-transform:translateZ(0) scale(0);
        transform:translateZ(0) scale(0);
        opacity:0
    }
    50% {
        -webkit-transform:translateZ(0) scale(1);
        transform:translateZ(0) scale(1);
        opacity:.7
    }
    to {
        -webkit-transform:translateZ(0) scale(0);
        transform:translateZ(0) scale(0);
        opacity:0
    }
}
  @-webkit-keyframes circleAnimation3 {
    0% {
        -webkit-transform:translateZ(0) scale(0);
        transform:translateZ(0) scale(0);
        opacity:0
    }
    50% {
        -webkit-transform:translateZ(0) scale(1);
        transform:translateZ(0) scale(1);
        opacity:.9
    }
    to {
        -webkit-transform:translateZ(0) scale(0);
        transform:translateZ(0) scale(0);
        opacity:0
    }
}
@keyframes circleAnimation3 {
    0% {
        -webkit-transform:translateZ(0) scale(0);
        transform:translateZ(0) scale(0);
        opacity:0
    }
    50% {
        -webkit-transform:translateZ(0) scale(1);
        transform:translateZ(0) scale(1);
        opacity:.9
    }
    to {
        -webkit-transform:translateZ(0) scale(0);
        transform:translateZ(0) scale(0);
        opacity:0
    }
}



@-webkit-keyframes fingerAnimation {
    0% {
        -webkit-transform:translate(.5rem, .5rem);
        transform:translate(.5rem, .5rem)
    }
    50% {
        -webkit-transform:translate(0);
        transform:translate(0)
    }
    to {
        -webkit-transform:translate(.5rem, .5rem);
        transform:translate(.5rem, .5rem)
    }
}
@keyframes fingerAnimation {
    0% {
        -webkit-transform:translate(.5rem, .5rem);
        transform:translate(.5rem, .5rem)
    }
    50% {
        -webkit-transform:translate(0);
        transform:translate(0)
    }
    to {
        -webkit-transform:translate(.5rem, .5rem);
        transform:translate(.5rem, .5rem)
    }
}

@-webkit-keyframes tipAnimation {
    0% {
        -webkit-transform:translateZ(0) translateY(0);
        transform:translateZ(0) translateY(0);
        z-index:99999
    }
    50% {
        -webkit-transform:translateZ(0) translateY(-.2rem);
        transform:translateZ(0) translateY(-.2rem);
        z-index:99999
    }
    to {
        -webkit-transform:translateZ(0) translateY(0);
        transform:translateZ(0) translateY(0);
        z-index:99999
    }
}
@keyframes tipAnimation {
    0% {
        -webkit-transform:translateZ(0) translateY(0);
        transform:translateZ(0) translateY(0);
        z-index:99999
    }
    50% {
        -webkit-transform:translateZ(0) translateY(-.2rem);
        transform:translateZ(0) translateY(-.2rem);
        z-index:99999
    }
    to {
        -webkit-transform:translateZ(0) translateY(0);
        transform:translateZ(0) translateY(0);
        z-index:99999
    }
}

</style>