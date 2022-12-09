<template>
<layer v-model="payLayer"  styles="background-color:transparent;width:100%;
    max-width:100%;"
    skin="footer"
    anim="up"
    className="payModal"
    >
      <div class="payModalContent">
          <img src="//img.ibestfanli.com/sign_static_quick3/failToDrawModal_closeIcon.png" class="closeIcon" @click="payLayer=false"/>
          <div class="header">
            <div class="flex titleBox column-center">
            <img src="//img.ibestfanli.com/sign_static_quick3/balance_redIcon.png" class="redIcon"/>
            <span class="text">当前余额</span>
            </div>
            <div class="price">
              <span>13.54</span>
              <span class="priceUnit">元</span>
            </div>
          </div>
          
          <div class="videogg">
              <img src="//img.ibestfanli.com/sign_static_quick3/balance_five_unlock.png" class="bannerIcon"/>
          </div>
          <div class="flex-sb">
            <div class="tit">选择提现金额</div>
            <div class="guize">活动规则></div>
          </div>
          <div class="tabPrice flex">
            <div class="itemPrice fiveMoney">
              <span>随机金额</span>
            </div>
            <div class="itemPrice on pointThreeMoney">
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
            </div>
          </div>
          <div class="FingerMain">
            <div class="FingerButton">
              <div class="button1">微信提现</div>
              <div class="button2">支付宝提现</div>
              <div class="button3">支付宝提现</div>
              <div class="button4">看视频领5元</div>
              <div class="button5">看视频领5元</div>
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
    </layer>

</template>