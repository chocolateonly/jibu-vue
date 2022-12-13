<template>
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
          
          <div class="videogg">
              <img src="//img.ibestfanli.com/sign_static_quick3/balance_five_unlock.png" class="bannerIcon"/>
          </div>
          <div class="flex-sb">
            <div class="tit">选择提现金额</div>
            <div class="guize" @click="ruleLayer=true">活动规则></div>
          </div>
          <div class="tabPrice flex">
            <div class="itemPrice"
            :class="[item.user_reward ==='随机金额'?'fiveMoney':item.user_reward ==='0.3'?'pointThreeMoney':'',item.checked?'on':'']" 
            v-for="(item,index) in data.priceList" 
            :key="item.id"
            @click="selectPriceFn(index)"
            >
              <span :class="[Number(item.user_reward)?'money':'']">{{item.user_reward}}</span>
              <span class="priceUnit" v-if="item.unit">{{item.unit}}</span>
            </div>

            <!-- <div class="itemPrice on pointThreeMoney">
              <span class="money">0.3</span>
              <span class="priceUnit">元</span>
            </div>
            <div class="itemPrice">
              <span class="money">150</span>
              <span class="priceUnit">元</span>
            </div>

            <div class="itemPrice">
              <span class="money">150</span>
              <span class="priceUnit">元</span>
            </div> -->
          </div>
          <div class="FingerMain">
            <!-- <div class="FingerTip">
              <img src="//img.ibestfanli.com/sign_static_quick3/balance_tip.png" class="tipIcon">
            </div> -->
            <div class="FingerButton" v-if="data.priceList.length>0">
              <div class="button1" @click="vxTixianBtnFn" v-if="(data.priceList[data.checkIndex].user_reward === 0.3)">微信提现</div>
              <!-- <div class="button2">支付宝提现</div> -->
              <div class="button3" v-if="(data.priceList[data.checkIndex].user_reward === 150 || data.priceList[data.checkIndex].user_reward === 200)">立即赚钱</div>
              <div class="button4" v-if="data.priceList[data.checkIndex].user_reward === '随机金额'">看视频领5元</div>
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
                  <div class="contentTip">看5个视频可立即提现</div>
                  <div class="contentPlan">
                    <div class="bar">
                      <div class="length" style="width: 20%;"></div>
                  </div>
                  <div class="num">
                    <span>1</span>
                    <span>/</span>
                    <span>5</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="videoButton"> 去完成 </div>
          </div>
        </div>
      </div>


<!--      活动规则-->
      <layer v-model="ruleLayer" styles="background-color:transparent;width:100%;
    max-width:100%;"
             className="modal withdrawRuleBacground "
      >
      <div class="modal-content ">
        <div class="withdrawRuleMain">
          <div class="title">活动规则</div>
          <div class="tip"><p>一、参与对象：同一终端设备、同一微信号、或同一用户ID等均视为同一用户。</p>
            <p>二、本APP提供现金提现功能，可按照规则提取到微信、支付宝账户。</p>
            <p>三、活动及提现规则：</p>
            <p>1.新人专享福利：任一新人用户可享受一次新人专享福利0.3元，金额可直接申请提现。</p>
            <p>
              2.最高5元的随机金额福利：用户完成页面指定观看视频次数，APP综合用户行为及参与情况，为用户随机提供最高5元的金额福利，具体提现金额以当日页面随机获得的金额为准。任一用户仅可享受一次该福利。</p>
            <p>
              3.抽奖活动提现：完成页面指定观看视频次数可获得抽奖机会，用户理解结果是否中奖情况为随机。抽中金额在0.1元-20元间随机提供，抽中可立即提现或将抽中金额累积到下一次抽奖中一同提现。</p>
            <p>
              4.大额150元金额提现：观看软件指定视频后，用户可随机获得金额奖励，累计奖励的金额在软件账户余额中展示，用户可进行查看。随着用户使用本APP时长的增加，用户获得的随机金额奖励可能减少。当账户余额累计到149元，停止获得观看视频的金额奖励，用户可同时按照以下要求，继续获取1元奖励：</p>
            <p>（1）累计签到180天；</p>
            <p>（2）邀请新用户好友注册使用本APP的人数达30位以上。</p>
            <p>用户满足以上签到和邀请好友的条件后发放1元奖励，余额达到150元即可发起提现申请，3-5个工作日内审核到账。</p>
            <p>四、重要提示：</p>
            <p>
              1.为保证您顺利提现，提现需按照提现页面规范操作，如您因未按提现要求操作（如填写错误信息）或不符合第三方支付平台的要求等因素导致不能收款（如未做实名认证或提现前与平台账号解绑等），所获得的奖励将无法提现，本平台/APP无需承担任何责任。</p>
            <p>
              2.在参与本平台奖励领取过程中，如用户存在违规行为（包括但不限于恶意套现、机器作弊、刷信誉、提供虚假信息等），我们将取消违规用户的领取资格，并有权撤销相关违规交易，收回奖品（包括已使用的及未使用的），必要时追究法律责任。</p>
            <p>
              3.未成年人用户应在其监护人的陪同下使用本App/平台并应在征得其监护人的同意后进行，用户均应确保提供的信息准确无误，如因填写信息错误等非本平台原因导致不能提现/兑换，视为用户自愿放弃全部金额，平台不承担责任。</p>
            <p>
              4.如出现不可抗力或情势变更的情况（包括但不限于重大灾害事件、活动受政府机关指令需要停止举办或调整的、活动遭受严重网络攻击或因系统故障需要暂停举办的），我们可依照相关法律法规的规定主张免责。</p>
            <p>
              5.我国部分地区，以及部分国家的法律法规对参与和举办以随机性的方法决定用户可能获得奖励的活动（例如抢红包、抽奖、抢特定优惠秒杀商品等）有限制性规定，故此类活动只限于位于此类地区以及此类国家外的消费者参与。主办方提醒居住于中国香港、澳门、台湾等地区，以及其他受限制国家的消费者（包括但不限于新加坡，马来西亚等地消费者）请勿参与此类活动。</p>
            <p>
              6.用户理解并同意，APP内的“奖励”、“福利”、“余额”（包括但不限于红包、现金豆等）是APP内“虚拟积分”，在用户满足提现且通过提现审核前，不属于用户的个人财产，亦不等同APP承诺给用户的人民币资产，不可作为其他用途依据。</p>
            <p>
              7.用户参与本平台提现活动，即表示用户已经理解并同意活动规则，每位用户需严格遵守活动规则，请理性参与本平台活动，本平台对于恶意投诉、举报、诋毁的行为，我们将取消用户提现资格，并有权采取冻结、限制用户账号登录等措施，保留追究用户法律责任的权利。</p>
            <p>8.用户理解并知悉，活动规则会适时调整，届时会通知用户，请适用最新的活动规则。</p>
            <p>9.用户对于本平台任何活动规则存在疑问时，可随时联系平台客服。</p>
            <p>10.本平台保留在法律法规允许的范围内对上述规则解释的权利。</p></div>
          <div class="button" @click="ruleLayer=false">我知道了</div>
        </div>
      </div>
      </layer>

    </layer>
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
      this.$emit('vxTixianFn','isVxTixian')
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

.withdrawRuleMain {
  width: 60%;
  height: 400px;
  margin: 0 auto;
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  position: relative;
  .title {
    font-size:20px;
    font-weight: 600;
    color: #333;
    text-align: center;
    margin:20px 0;
  }
  .tip {
    height: 250px;
    overflow: auto;
    padding: 20px;

    p {
      font-size: 15px;
      font-weight: 400;
      color: #666;
    }
  }
  .button {
    background: url(//fasthuyitool.jidiandian.cn/web_static_assets/sign_static_quick4/fiveMoney/rule_button.png) no-repeat center;
    background-size: contain;
    width: 350px;
    height: 80px;
    line-height: 80px;
    font-size: 15px;
    font-weight: 500;
    color: #fff;
    text-align: center;
    margin: 0 auto;
    cursor: pointer;
  }

}

</style>