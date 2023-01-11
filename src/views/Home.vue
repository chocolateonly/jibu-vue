<template>
  <div class="indexbox">
    <section class="wrapper">
      <div class="bannerBox">
        <img src="../assets/images/bnhg15.png" class="imgFooter"/>
        <div class="flex-sb padding-lr-sm headerbox">
          <div class="leftbox flex-center">
            <img src="//img.ibestfanli.com/sign_static_quick4/index_redIcon.png" class="redIcon" />
            <div class="money">
              <span>{{tixianData.price}}</span>
              <span class="unit">元</span>
            </div>
            <div class="greenButton" @click="showTixianPayler">
              <img src="//img.ibestfanli.com/sign_static_quick4/index_wechatIcon.png" alt class="wechatIcon" />
              <span class="buttonText">提现</span>
            </div>
          </div>
          <div class="flex rightbox">
            <div class="flex-center qiandao" @click="showQiandaoHander">
              <img class="coinIcon" src="../assets/images/icon_qiandao.png" alt />
              <span class="signTitle">签到</span>
            </div>
<!--            test-->
            <div class="play flex-center" @click="openZhongjiangLayerFn">
              <img class="playIcon" src="../assets/images/icon_shengyin.png" alt />
              <!-- <img class="playIcon" src="//img.ibestfanli.com/sign_static_quick4/play_openIcon.png" alt /> -->
              <!-- <img class="playIcon" src="//img.ibestfanli.com/sign_static_quick4/play_closeIcon.png" alt /> -->
            </div>
          </div>
        </div>
        <div class="titleBox">
          <!-- <div class="deviceId">3c39c826</div> -->
          <div class="headerTitle">今日步数</div>
        </div>
        <div class="step">
          <span class="stepValue">{{ steps }}</span>
          <span class="stepUnit">步</span>
        </div>

        <!--人行走-->
        <div class="person">
<!--          <img :src="personImg" class="personImg"/>-->
          <img src="../assets/images/renwu_walk00.gif" class="personImg"/>
        </div>

        <!-- 领红包 领现金 人物右侧-->
        <div class="linhongbao" @click="openPersonReceiveMoney">
          <div id="dynamicPaper" class="dynamicPaper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 140" width="120" height="140" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"><defs><clipPath id="__lottie_element_6"><rect width="120" height="140" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_6)"><g class="png" transform="matrix(0.9960553646087646,-0.08873366564512253,0.08873366564512253,0.9960553646087646,5.470680236816406,32.113346099853516)" opacity="1" style="display: block;"><image width="88px" height="106px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g><g class="png" transform="matrix(1,0,0,1,72,6)" opacity="1" style="display: block;"><image width="44px" height="44px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g></g></svg>
          </div>
          <div class="fixedTitle">领现金</div>
          <img src="//img.ibestfanli.com/sign_static_quick/withdrawType_fingerIcon.png" class="redFingerIcon"/>
          <!-- <img src="../assets/images/icon_shouzhi.png" class="redFingerIcon"/> -->
        </div>
<!--        领红包倒计时-->
        <div class="fixedRed" v-if="false">
          <div class="fixedIcon">
            <img src="//img.ibestfanli.com/sign_static_quick/header_redIcon2.png" class="redIcon">
          </div>
          <div class="countdown">00:24</div>
          <div class="fixedTitle">领现金</div>
        </div>

        <!-- 漂浮金币 -->
        <div class="task-list-icon">
          <div class="task-item task-item0 task-item-style1" @click="openFloatLayer" v-if="$store.state.float.reward">
            <div class="coin">{{$store.state.float.reward}}</div>
            <div class="reward-name">漂浮红包</div>
          </div>
          <div class="task-item task-item1 task-item-style1" @click="openStepChangeLayer" v-if="$store.state.step_reward">
            <div class="coin">{{ $store.state.step_reward }}</div>
            <div class="reward-name">步数转化</div>
          </div>
          <div class="task-item task-item2 task-item-style1" @click="openJindouLayer" v-if="$store.state.jinbi_reward">
            <div class="coin">{{ $store.state.jinbi_reward }}</div>
            <div class="reward-name">限时奖励</div>
          </div>
          <div class="task-item task-item3 task-item-style1" v-if="$store.state.medal_reward" @click="jumpPage(2)">
            <div class="coin">{{$store.state.medal_reward}}</div>
            <div class="reward-name">勋章</div>
          </div>

        </div>


        <div class="bigButton" @click="indexVideoBtnFn">观看视频领150元</div>

<!--        <div class="feedback">-->
<!--          <img class="feedbackIcon" src="//fasthuyitool.jidiandian.cn/web_static_assets/sign_static_quick4/index/index_feelback.png" alt />-->
<!--          <div class="feedbackText">留言</div>-->
<!--        </div>-->
      </div>
    </section>

    <section class="VideoBannerMain padding-lr-sm">
      <div class="card" v-if="xinrenConfig.newUserInfoData && xinrenConfig.newUserInfoData.ecpm_state">
        <div class="left">
          <div class="imgIcon">
            <img src="../assets/images/icon_hongbao-1.png"/>
          </div>
          <div class="conterText">
            <div class="headerTitle">
              <span style="margin-left:10px">新人提现</span>
              <span class="total">0.3</span>
              <span class="unit">元</span>
            </div>
            <!-- <div class="footerTip">
              <span class="tip">
                领取后自动到账
              </span>
            </div> -->
          </div>
          <!-- <div class="footerTip flex-center">
            <span class="tip">
              <span>限时奖励</span>
            </span>
            <span class="money">5</span>
            <span class="unit">元</span>
          </div> -->
        </div>
        <div class="button btn1" @click="showTixianPayler">领取</div>
      </div>
      <div class="card commonCard">
        <div class="left">
          <div class="imgIcon">
            <img src="../assets/images/tixianhongbao.png" class="img2"/>
          </div>
          <div class="conterText">
            <div class="headerTitle">
              <span>看</span>
              <span class="total">{{$store.state.video_progress.video_task}}</span>
              <span class="unit">次</span>
              <span>视频可提现</span>
            </div>
            <div class="footerTip">
              <div class="bar">
                <div class="length" :style="{width:($store.state.video_progress.video_nums/$store.state.video_progress.video_task)*100 +'%'}"></div>
              </div>
              <div class="numLength">
                <span style="color: rgb(234, 71, 51);">{{$store.state.video_progress.video_nums}}</span>
                <span>/</span>
                <span>{{$store.state.video_progress.video_task}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="button btn2" @click="indexVideoBtnFn">去提现</div>
      </div>
    </section>
    <section class="CardBannerMain">
      <div class="title">
        热门活动
      </div>
      <div class="list">
        <div class="card" @click="jumpPage(1)">
          <div class="cardTitle">红包摇一摇</div>
          <div class="cardTip">
            <img src="//img.ibestfanli.com/sign_static_quick4/cardBanner_redIcon.png" class="imgIcon">
            <span class="tip">+100元</span>
          </div>
        </div>

        <div class="card" @click="jumpPage(2)">
          <div class="cardTitle">成就勋章墙</div>
          <div class="subCardTitle">大量金币和红包</div>
        </div>

        <div class="card" @click="jumpPage(0)">
          <div class="cardTitle">限时红包雨</div>
          <div class="cardTip">
            <img src="//img.ibestfanli.com/sign_static_quick4/cardBanner_redIcon.png" class="imgIcon">
            <span class="tip">+600元</span>
          </div>
        </div>

        <div class="card" @click="jumpPage(3)">
          <div class="cardTitle">幸运大转盘</div>
          <div class="cardTip">
            <img src="//img.ibestfanli.com/sign_static_quick4/cardBanner_redIcon.png" class="imgIcon">
            <span class="tip">+58元</span>
          </div>
        </div>

      </div>
    </section>
    <!-- 全屏广告 领现金-->
    <div class="MovingEcpmRedpack" id="roll" @click="openPersonReceiveMoney">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 190" width="190" height="190" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"><defs><clipPath id="__lottie_element_122"><rect width="190" height="190" x="0" y="0"></rect></clipPath><clipPath id="__lottie_element_127"><path fill="#ffffff" clip-rule="nonzero" d=" M56.145999908447266,-1.5 C25.298999786376953,-1.5 0.2919999957084656,23.506999969482422 0.2919999957084656,54.354000091552734 C0.2919999957084656,85.20099639892578 25.298999786376953,110.20800018310547 56.145999908447266,110.20800018310547 C86.99299621582031,110.20800018310547 112,85.20099639892578 112,54.354000091552734 C112,23.506999969482422 86.99299621582031,-1.5 56.145999908447266,-1.5" fill-opacity="1"></path></clipPath><clipPath id="__lottie_element_184"><path d="M0,0 L272,0 L272,206 L0,206z"></path></clipPath><clipPath id="__lottie_element_185"><path fill="#ffffff" clip-rule="nonzero" d=" M-0.18199999630451202,-2.75 C-0.18199999630451202,-2.75 19.75,140.63099670410156 19.75,140.63099670410156 C19.75,140.63099670410156 63.792999267578125,145.44900512695312 94.06800079345703,145.44900512695312 C124.34300231933594,145.44900512695312 148.88699340820312,120.90599822998047 148.88699340820312,90.63099670410156 C148.88699340820312,70.26000213623047 152.2530059814453,-2.003999948501587 152.2530059814453,-2.003999948501587 C152.2530059814453,-2.003999948501587 -0.18199999630451202,-2.75 -0.18199999630451202,-2.75" fill-opacity="1"></path></clipPath></defs><g clip-path="url(#__lottie_element_122)"><g class="png" transform="matrix(1,0,0,1,20.5,24)" opacity="1" style="display: block;"><image width="150px" height="150px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g><g clip-path="url(#__lottie_element_184)" transform="matrix(1,0,0,1,0.5,4)" opacity="1" style="display: block;"><g clip-path="url(#__lottie_element_185)"><g class="png" transform="matrix(0.9999936819076538,-0.0035505930427461863,0.0035505930427461863,0.9999936819076538,0.6351470947265625,0.47998046875)" opacity="1" style="display: block;"><image width="270px" height="206px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g></g></g><g class="png" style="display: none;" transform="matrix(0.020246855914592743,0,0,0.020246855914592743,150.63082885742188,88.66532135009766)" opacity="1"><image width="50px" height="46px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAuCAYAAABqK0pRAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAIhklEQVRoge2Za4hdVxWAv7X3edx53Hm/kkyaNGaStEqrpWpDFVqt1oIPWh/QP4UWX7Qg1R8KYgVBBREUpOAPrfmnPwQjLfWP9K3Y2CYt1k7STEwmSRNn8phk7syde+85Z+/lj3PuPJLJe9JWyILLeZ+1vr3WXmvte+CaXJNrck3+n0TeCSV6+Hv3eD91hyHegthVANhOhymPYbv2EMV/kK4HDlyJjqsGotvWl7hj66M+m30IKY2IiVBikBAxcaE9yje2DcJVzxH2/Ei6v/LC5ei7KiC6587bPdkTmPJmTBuYMmLb8fXqguKgA1PqBhxolj9nWr2UNvyW7lu/JTLSuBSdKw6io1sfcZjHsS2YcJB0eg6pHHBJ9ZQFkNAuKA8iTMd6ov4PIEEPaGF7uPFl+m+741JgVhTEHfzaz7Sy47tEA2hWJj2yG63NILFg4hAAU4qXPOMzwWeK7bqBaOg28E2Yod0y8PUbL1b3ioFk/7n/Qa3u+p0EfWS1Mun4LmzoISph4hATeAhaMIFCx1rM0N3o5HO4mcM50FyGlAaJhu/JYSQA756U4ce+cDH6zUpA6JHvrNXq6G+MbcVVQ9J9r2JDj8QBQQgm8IgJcwjA9myFoAOp5wnMRIJpDdD6JI2jz4GJ8zALez6no1sfecdAfOPEU/jTVrMyyf5/Y4Js/pqIw+CR9tWY3g9CWx+U+hHfwB15CzuZIMYioXGmNcDPHsDPTQAWsmPiw4/9SneUe686iCZHH/WVF24W20nj8JH5GLfGEYifv8/2bELKmzADn0J9AyonMW/vRfsLQ6yxEhoXRiHZxCuFVzKkfY3xs/bnVxVEVT+qp7Z/Hz+jZC34UxPFS11+Q2ChpRd1Ge7EG2iRZsVn+EOvQxzAoskvolYjwSUn8Ell/rwL1j9wIa9cNoiqDgG/9DMvxUgsyfFpxDcI7ULGlN4RguHbsF03o9OH4Ohrucd8CrXTsLoXogGkZROmcysSDxdWKVqfKKAr2Gid9cfk/vPZE1wmRAj8FCjp7M42JMLNTCGAeocJEsR7dG4KujKkdxhfnSXoHgJ14FPMzZ8EE6ImQEyMmhgpXw8nnwDAzU1h24ZAG2jrAGT+48DjKwoCPAhsAOr4k0ZtNyS1HNKDZgpkcPwASdBHNLCe6LoteUvi0qVvMgFUTqL1Cn7vK9jjFbJ15eJduXc1qaGpvv98Bl0yiKp+CLi3OEzQxlm1SL1Dileb7ATq1uQFywAe/J5dmC23QNiOnziIvPgUxAESG9K1MZoUsJrM92OasnrFQFS1E3gYWDQRYgUEEwM1cAqmYGvrxvZtBDLU5dVXZ2fR0dfwfgq56bPYntW4jgg2tOEzgUwga2BbexCbAWU4MY6mJCsGAnwVKBUgCpQkum6adLLLlGJcFYwB8R6fZASlEqoJ4oDqNNrRi3S0ox++Ha2+Dm9ux0yBVBJ8Usq9lrl8XFq68ckUUmr16cRuI6mfPZ9hF521VPUuYCOQAknxq0tpZBptqO3pAMB7g8fkMJOH8Uf2o//ag3vmeXTPq+AzgtVrkOMWZBpfnkK3xKhPcYnDN1JM2zrUzSA00OpppDaDn/FvXDGIqg4Dny4gGothpPf+g2hDbKdHwqImuLwV0XpCNjlGMrkf7VJc9jZ+bCd+bAyOVyBxEFl8olBAeG8JezcgehqVdpLRnSbNYpXQ/O2KQFTHYuBLgCsAmjB1IJGueydUOqu4CuH66/Cu8IrL54l4j/SBdheMc/txR3eSrsphSRwuy8hS0IYSDN6ACWfBNSDr8Nno35FqIsbp9isCgY13Aq0sCqcCJmvChMM//KdmU5iOBNs7uATGY1Dv8EmGrxfZqEMxcYBPUtK6RxsZrpoQ9F1P2FlGsxk0GKT+0l8MgIn4c+nb9f2XDaKqq4At5B5oALVlYfq/MU6y4bhkE0TXty+FSQVNNa8v3uHrKS41+EZG1lA0zXA1iIY2EQ70oelJANJ9E2Tje9XXvDb2uV9caLjPuR5RVQt8Hhgiz24REC/ajwALhECIO1ZOntnwZdNHpMEQvhKRjh9C04VMbSwY43G0QJCPoSkPEK0bQYIkb91tC9mhNmrP/DW/HmQ/6fxx8oMrAbkRuKUwOCggzoSxxTYEQnfwhQG36+77ZC2IbVOCfnHTBjdVwdcbeZ9lYkwpRlrKRIMDEDpE51DvIOgj3Qu1Z/P/H8TI8103Dd8jD47XLwRilzupqi3ArSyEnpDXjSa4X3RufkBM1/p6NrN5ovHy0yNBf1XEzGGiutouK7a/TNDfRtjfju2OsO2AngRXQVGorWPu6T3UdryJiS4NYt6AZUBuBN5HPvIhC6HU9IzlbE/Ne6bx8p/WzP7+4buikblSdENdTNfSqSimqMN2teO/g7a6+wjp6OGF64nf1nvndQ9fLMSyIHm63fgRFkIoBFoWGd8EaQKcCVcCQn/qaDr12CdG3JG3PmP7AuxwD7Y7rzPqAnylSjZ2YoluEzJqWsw3e36dvXSxAOcB0WFgDUvnw7lgzpUE/gH7/iIy0jh1H+vqjocEvoiyGbOoLbKCGA7aFnnWtJltlwOwLEiRqTazNFyaIx5ydqgtBoiBGWC7iLy9nDLdtr507Mnxzc3j1oCj5T9y/HKNPx9IJzDI0thvhtG5YJr3TgJPiUhtJQy7VDmz+41Y3KLnsjizZeQhdqaMAS+KiFtB2y5J5kGKsALO6vvjReeKRceSARgTkR1XzcKLlMUGGfLWIyKvD67Yh6Veae7XgHERee1qG3kxMg8iIqnqmMmXHOe+jwWQSRE57xrhnZRz1ZHmRDacXS8C8rky+m7OiTPlXJU9JC9shoXU2oQBOCAi6XLPvluybBtfGFlnYQ3SbOEbsO/gew0CLvBZofBMs+AFwNy7VScuJBf8PlKk5QjgvQpxTd6L8j8lQcdZeJud5QAAAABJRU5ErkJggg=="></image></g><g class="png" style="display: none;" transform="matrix(0.020719999447464943,0,0,0.020719999447464943,32.731998443603516,81.72772216796875)" opacity="1"><image width="50px" height="48px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAwCAYAAABT9ym6AAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAIDElEQVRoge2Za2wc1RXHf2fuzO56197YJCYOJKkJzgOXFBpCU4U+VIlKRYWWUvhQVaKBSqUPVW3TCvEJqUKionxov7SqqraiH6AgPoCKqvJIH9BAEM+GxA1JbJoAediO4/i13pm5955+mF17Y2xIgxOC5L802p2de8+9P51zzz13Fha0oAUt6MMk+X8aq+4scbzn0/j+5ajPI0FMGr/OsmteFbls4kxN8lR0SiB6/NH1uMG7qB66FmKjmtQeZJ8SxKizL6mYvwXBkkdYfveLIuLP2Kxn0XuC6NADX8AO/Rk7EOEtBCFgAPDJOOJTJFdENUHtBCIV8NXtErb8lpW/u/9sAb0riB65qZ3gM4ewA1HWukA6egA7sBNNRhBSvNYMSUTQdD5BqZ2wfD74E6BjuwKNt8qabds+UBB/cOuLmPaNIhWQAsnAy9hjPZiCIMYgJuvuE4u6FE0VUpcZLq8kt/RC8GOoG3/EtJ5/myx7ePBMgQRzPdDnWj8rQT6DwIAbxx7rISyFmFKEac4hkRCu+ya5ri9hmpoIC2AKIKFDh/cTv/5PksFRgrDtK374yE7dd/XVZx2E1N8LeVe/TYb2IhGIESQMEaMEfSPwxvNIuYtwxechV0QiQxAaTD4z7Y7uobr3NbxvWWbtyFNuzxU/UdW5x51PEH229XJ1XOknRgzeZg19TGAEgtxUO9vWjL7yDHqkB0orCds3EK38HEF7NxIJJh8Q5EN8PEq890WoFPAa3Ot6v/bQfMPMbizWT2ji8ZV9YJrBx5BrwztFTJrBBosIl+WgHKHPPoqMDCCta6G4ArNk/ZQpE3pM6AmoMtm7Gzds0Op/bnRv3PDgfMLMasinvgzA0R1gyqlqQlDqQFPwVU/QvB6z8uvI8m8gm7+Mdl6CHukDl6I+QcffBMi80nYhQT5EwhxBkJIe2IUbLaITPTf5N79193zBhLP9qBXfrwiQ4Pp7oqC1RBBGmKY23NAA4c7HYUMVWdWNNq/CrO/IOrrMW2JyELYQLtuARE2oaYbDr6BGcCmkB3YRrF2LH3789iD6+S7g/vcLMmv61cfKq631+7yziCwi3PRDcIdRlzLZ9yRR1WGOTSIxUGxCrroeWdSG+gTcJGi2rsRWUJfiB3bh+vfhUoE0xsceny/T1N2OmJZh0/3SJhHZ/35AZnWrXDe6X1N9hVjQ6ij+jaeRoBkxEeGi1aQFQ7qqBXdpM8okjB3NIA73oX99EAYGEBdnxrzFVY4DYGqAmACpjOGGQOO32rT/nvtUdem8gwAEEb+EbJ2nvU/jhodRl5JbuoYgvwStWDR1+JKgz/8Dv+MR0sF/4XUCwgDUZZukeqLlH4f2ztqAjgCHGCXpH4SwFTfwx27gDlVtmXcQs2Ldg5rKbgBJFbvjPkiawI+QX74BjQq4iRhXjrAXh2jLMIHxSFBAFrWgLsUdPghv/xeAcHEnQbF40hg6MQ4ujyYHW3X0ybXAD1R11nV72iCy8eXUeHObpIpLBZcK1W2/wY8VER2l6eJNmKbz0NjiYo9PskuPj+Jf2oEe3Auvv4p/eSd++3Okh/bjK5V3jOMmUpAcnHiiHbgAuOV0Mtm7dohuHXtOLXcCaFXRqlJ98j78RBl1CVHn5Ujbanxspy7bVcSOHsAP9+DbHb5DsMko9PeiNqnvr++QJvsKta/dwBfnFQSg6XvVu6jqw9lgHk08lUf/QNI7iqon114mf9EmHGWcDVCb4JqV1JNlqbziF2WVTh3CO0GdQGAwpSg710g+BmIgATap6qXzCgJQ3N1xs8DDarPMqomSbH+KyhMv4JM2pDhO0yUfJezowlPAVXXqSqsOrMPbDKAO4VWIOpaC9oMmSGHt8RpEWruuUdXFpwpyykddVQ3Gfpr/vVrdAuDTQOvP8ldtlmhVAYJjSFDEDsX44QHcSD8+cQQ6HU9eM09EKy4gWpKq2iEhqRBdOfgLwiWVGkQCWKAfeEBE5gjI0wCpw4xsjX6sOXOPpllfTWpFZSnU/FWbJewE4RBIAUwerTj82DjeWQITIoWIoJSCPYH6cUgqVPd8srfl1h0PNUDUPeOAPSLy93kFqevE7dFGTfmTT31XBiPgaidaE5C/8lLCiwqEiydA+1FNEMlx0llfE/RInvEXitXyt5/5VXjhuhO1iTdC1D2z/b12/tMCAdAtnYWRtre/byt6J1abNc0izTvAC1gPYUDYtQxzXoRZUgDNajE35PBvHSHpi2m++WcPlW64Y/cMCNvwWU8Cj4lIMu8gdY1/t9QxORnfjnW3eCut2MwzOueQ0ype852/tNz26+drE/VMh1Zau4/JYBzQJyL/nsvW+wapS7d0Fo5V37rZW/dVdXwGT2GutsHi5Uebr9+6rem6H+2dA6LuDVv7zdXa7RCRsTMK0ijd0lkYqBz9VNC8+DLErKNYbgHIdV1h85tvHMtvvPYo0/Ef1ybq5oBIGu6PA6/N9orpjIC8m1Q1B3wEWAGsIdvL6pN3nAzXCFEPs14RGZpp96yDNKoGtYasLAmZhqmH00wIC1SAvTO98oGC1FWreFeTASVkE4eTs1jjwn975lo5J0DqqpUkl9VuZyaAOkQMTIhIf2PfcwoEpsKtGyjxTo/UE0ICDDfuK+ccCEyF2kVkMLNBWCBpDK95f+M3H6oViX3AINMQ9RK/lpZf840HsHPSI3XVJlpm2jNTEPCxuLEqPqdB6qqtmyLTnvEzS/sPBQhMeScE7Nn+N2zedSbe4i9oQQv6kOl/YSw8s+A3z2gAAAAASUVORK5CYII="></image></g><g class="png" style="display: none;" transform="matrix(0.02048914134502411,0,0,0.02048914134502411,35.63221740722656,110.94266510009766)" opacity="1"><image width="40px" height="30px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAFHElEQVRYhe3WT2xcVxXA4d+5972Z8XgcO2ncuvbQ1AmooNIuqqqNgEULEbBBEUFCKiskhOgORSoLEAtWSLAoQqq6KAsESEilRAjUHRUVElVdkio1TVRCURM7ieu/4/GMPZN5795zWDwbUnfshCRILHyk0cyb9+593zv3njMDe7EXe7FryK0Mss6pOln2aZL76gAMfmoBGACGAA80gUWgASwBV0Wk/T8FWudUnfW1Z4hLxy1fuL/4MgfrgYUo1Qdb1I7NU314OyQCa8BZ4A1gGpgREbtjQGv89mnymR8S2vsNB9ohthewfAN8SlIegrSL5U2k+vCyjJ2cxe0P1wFbFFltbb4WgCngryLSuy2gLf3sx4T2d7CM2F0gnz+Nduc3T0bII4SIDIxQuvswUnUg0nX3Pfd30omc/2Swte19jWILnOXNF/4hj34r/6+BNvuDZygf/BFx3eWNtwlLZ5BygqsM42p1dGkayTM0z4m5Yl3FjdxLaeIeEL3mj7x0Dr8v3wW49XkZuAAsbV96tyPu9OQDW7jQniUsncFXU5wXfPUIycST+JFxLC3h0hSfOlw5EFcvkV2+jMVWRa9879Du6wOAAinwEWDczD6QtL5AMxOqj/0ezRxANv9akbmyw631kHN/w2KG2/8Q6eQXcMN1XGI4LzinxOVZYlPR1iujdN+u9LvFDoYB4MD1yP4Z/OPIZ7XyiQdM24TmBUSv4XwxRkZKWPsqNGegPAq+CmHjQ1Nkly9iMoAuPjfWB7Xb1vJAaesg6XeFXtOvS2kIWEc3FvAe/HAdVzuE5SswNohtrOGqNeL8eWJ3g3TyGLr6HsycxUlG3s2xTkDd1Ii7MWrH6AuMPTuaJoLFgGYtNIs4OYzsfwhCF44+gsRrm8tch/JI8WCNWVAFwFlAmx1cqV3B1h1SuxXfh5fYzITMDluwohEDfqWHvPob9A8/gXdeK3Cri9BtgFNcxaGr76HtFSwqpgE10Bgw80Jop9tvs4tp9yIREbMsiGVt0A1caR/xQIJ+bBBN1ovZO+vo6y9jF9+FmCOaI7UDuJFRiIpttmjnEyCCKwdufg/euM1o5he1OQcSSGr3Qh5RjeiAoG/9mfDuKTg4jByehJU59NI/sdhD8xzTgFkxraulSDLcwx/QHTBtih7YADaAsB3fv0h6NpWff+W4f/KryEADKd9F7C3gy4740RRd7+A75QI3fQZdbGJ3e9NyLhbY7GwDuCGQwceam1mRTcBbwBRvvjDT79djex/sC7TMfqdzV4/HxQYMNSlNfJLuhWUIik8D5o3YmkMvXYFhsAGHaYGz6FCD8qFxLDTwo99c2pz2DeAXIrKyQzaBYotdf9x3iQef+OmvyZjv/ullxE8gvkXlyCNYHsk3Apbl5KO+KIgsFEWRu3/j/Ng4bl8P7ME1GXpiGviuiDx7I1xf8E4n2t8vnYjRTiX1SSqfexziFcz20bv0DtZ+H9HNSgg5GrceN8HX65QOBmKzYeWjrz/Nub/8fKc/ArcFBFj9dvIsTk768VEqn/8Mks4Wg3op2XKD2GkhIUdSjwzVSO8CC2vo/Lpq98TXql/55Yu3Crsp4BZSMzkJUDn2OMmk4tzcB64xy8EytNWz7HzNeuf12Ojz86/eLu6mgAAr30i+GIM+jzEJkHy8TjI2iBsoVk4bHc3fDy7OybS2F7489hIX7wTupoFQlP/yU8mXTO2ERn2UyD0Aplx0jtNWTn819mI+dadge7EX/y/xL2XUmprKjx/oAAAAAElFTkSuQmCC"></image></g><g class="png" style="display: none;" transform="matrix(0.047949716448783875,0,0,0.047949716448783875,149.93824768066406,88.02815246582031)" opacity="1"><image width="50px" height="46px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g><g class="png" style="display: none;" transform="matrix(0.048313140869140625,0,0,0.048313140869140625,32.042171478271484,81.06548309326172)" opacity="1"><image width="50px" height="48px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g><g class="png" style="display: none;" transform="matrix(0.04815428704023361,0,0,0.04815428704023361,35.078914642333984,110.5276870727539)" opacity="1"><image width="40px" height="30px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAFHElEQVRYhe3WT2xcVxXA4d+5972Z8XgcO2ncuvbQ1AmooNIuqqqNgEULEbBBEUFCKiskhOgORSoLEAtWSLAoQqq6KAsESEilRAjUHRUVElVdkio1TVRCURM7ieu/4/GMPZN5795zWDwbUnfshCRILHyk0cyb9+593zv3njMDe7EXe7FryK0Mss6pOln2aZL76gAMfmoBGACGAA80gUWgASwBV0Wk/T8FWudUnfW1Z4hLxy1fuL/4MgfrgYUo1Qdb1I7NU314OyQCa8BZ4A1gGpgREbtjQGv89mnymR8S2vsNB9ohthewfAN8SlIegrSL5U2k+vCyjJ2cxe0P1wFbFFltbb4WgCngryLSuy2gLf3sx4T2d7CM2F0gnz+Nduc3T0bII4SIDIxQuvswUnUg0nX3Pfd30omc/2Swte19jWILnOXNF/4hj34r/6+BNvuDZygf/BFx3eWNtwlLZ5BygqsM42p1dGkayTM0z4m5Yl3FjdxLaeIeEL3mj7x0Dr8v3wW49XkZuAAsbV96tyPu9OQDW7jQniUsncFXU5wXfPUIycST+JFxLC3h0hSfOlw5EFcvkV2+jMVWRa9879Du6wOAAinwEWDczD6QtL5AMxOqj/0ezRxANv9akbmyw631kHN/w2KG2/8Q6eQXcMN1XGI4LzinxOVZYlPR1iujdN+u9LvFDoYB4MD1yP4Z/OPIZ7XyiQdM24TmBUSv4XwxRkZKWPsqNGegPAq+CmHjQ1Nkly9iMoAuPjfWB7Xb1vJAaesg6XeFXtOvS2kIWEc3FvAe/HAdVzuE5SswNohtrOGqNeL8eWJ3g3TyGLr6HsycxUlG3s2xTkDd1Ii7MWrH6AuMPTuaJoLFgGYtNIs4OYzsfwhCF44+gsRrm8tch/JI8WCNWVAFwFlAmx1cqV3B1h1SuxXfh5fYzITMDluwohEDfqWHvPob9A8/gXdeK3Cri9BtgFNcxaGr76HtFSwqpgE10Bgw80Jop9tvs4tp9yIREbMsiGVt0A1caR/xQIJ+bBBN1ovZO+vo6y9jF9+FmCOaI7UDuJFRiIpttmjnEyCCKwdufg/euM1o5he1OQcSSGr3Qh5RjeiAoG/9mfDuKTg4jByehJU59NI/sdhD8xzTgFkxraulSDLcwx/QHTBtih7YADaAsB3fv0h6NpWff+W4f/KryEADKd9F7C3gy4740RRd7+A75QI3fQZdbGJ3e9NyLhbY7GwDuCGQwceam1mRTcBbwBRvvjDT79djex/sC7TMfqdzV4/HxQYMNSlNfJLuhWUIik8D5o3YmkMvXYFhsAGHaYGz6FCD8qFxLDTwo99c2pz2DeAXIrKyQzaBYotdf9x3iQef+OmvyZjv/ullxE8gvkXlyCNYHsk3Apbl5KO+KIgsFEWRu3/j/Ng4bl8P7ME1GXpiGviuiDx7I1xf8E4n2t8vnYjRTiX1SSqfexziFcz20bv0DtZ+H9HNSgg5GrceN8HX65QOBmKzYeWjrz/Nub/8fKc/ArcFBFj9dvIsTk768VEqn/8Mks4Wg3op2XKD2GkhIUdSjwzVSO8CC2vo/Lpq98TXql/55Yu3Crsp4BZSMzkJUDn2OMmk4tzcB64xy8EytNWz7HzNeuf12Ojz86/eLu6mgAAr30i+GIM+jzEJkHy8TjI2iBsoVk4bHc3fDy7OybS2F7489hIX7wTupoFQlP/yU8mXTO2ERn2UyD0Aplx0jtNWTn819mI+dadge7EX/y/xL2XUmprKjx/oAAAAAElFTkSuQmCC"></image></g><g class="png" style="display: none;" transform="matrix(0.045626286417245865,0,0,0.045626286417245865,149.996337890625,88.08158874511719)" opacity="1"><image width="50px" height="46px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g><g class="png" style="display: none;" transform="matrix(0.04589371383190155,0,0,0.04589371383190155,32.102657318115234,81.12355041503906)" opacity="1"><image width="50px" height="48px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g><g class="png" style="display: none;" transform="matrix(0.04573486000299454,0,0,0.04573486000299454,35.12730407714844,110.56398010253906)" opacity="1"><image width="40px" height="30px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAFHElEQVRYhe3WT2xcVxXA4d+5972Z8XgcO2ncuvbQ1AmooNIuqqqNgEULEbBBEUFCKiskhOgORSoLEAtWSLAoQqq6KAsESEilRAjUHRUVElVdkio1TVRCURM7ieu/4/GMPZN5795zWDwbUnfshCRILHyk0cyb9+593zv3njMDe7EXe7FryK0Mss6pOln2aZL76gAMfmoBGACGAA80gUWgASwBV0Wk/T8FWudUnfW1Z4hLxy1fuL/4MgfrgYUo1Qdb1I7NU314OyQCa8BZ4A1gGpgREbtjQGv89mnymR8S2vsNB9ohthewfAN8SlIegrSL5U2k+vCyjJ2cxe0P1wFbFFltbb4WgCngryLSuy2gLf3sx4T2d7CM2F0gnz+Nduc3T0bII4SIDIxQuvswUnUg0nX3Pfd30omc/2Swte19jWILnOXNF/4hj34r/6+BNvuDZygf/BFx3eWNtwlLZ5BygqsM42p1dGkayTM0z4m5Yl3FjdxLaeIeEL3mj7x0Dr8v3wW49XkZuAAsbV96tyPu9OQDW7jQniUsncFXU5wXfPUIycST+JFxLC3h0hSfOlw5EFcvkV2+jMVWRa9879Du6wOAAinwEWDczD6QtL5AMxOqj/0ezRxANv9akbmyw631kHN/w2KG2/8Q6eQXcMN1XGI4LzinxOVZYlPR1iujdN+u9LvFDoYB4MD1yP4Z/OPIZ7XyiQdM24TmBUSv4XwxRkZKWPsqNGegPAq+CmHjQ1Nkly9iMoAuPjfWB7Xb1vJAaesg6XeFXtOvS2kIWEc3FvAe/HAdVzuE5SswNohtrOGqNeL8eWJ3g3TyGLr6HsycxUlG3s2xTkDd1Ii7MWrH6AuMPTuaJoLFgGYtNIs4OYzsfwhCF44+gsRrm8tch/JI8WCNWVAFwFlAmx1cqV3B1h1SuxXfh5fYzITMDluwohEDfqWHvPob9A8/gXdeK3Cri9BtgFNcxaGr76HtFSwqpgE10Bgw80Jop9tvs4tp9yIREbMsiGVt0A1caR/xQIJ+bBBN1ovZO+vo6y9jF9+FmCOaI7UDuJFRiIpttmjnEyCCKwdufg/euM1o5he1OQcSSGr3Qh5RjeiAoG/9mfDuKTg4jByehJU59NI/sdhD8xzTgFkxraulSDLcwx/QHTBtih7YADaAsB3fv0h6NpWff+W4f/KryEADKd9F7C3gy4740RRd7+A75QI3fQZdbGJ3e9NyLhbY7GwDuCGQwceam1mRTcBbwBRvvjDT79djex/sC7TMfqdzV4/HxQYMNSlNfJLuhWUIik8D5o3YmkMvXYFhsAGHaYGz6FCD8qFxLDTwo99c2pz2DeAXIrKyQzaBYotdf9x3iQef+OmvyZjv/ullxE8gvkXlyCNYHsk3Apbl5KO+KIgsFEWRu3/j/Ng4bl8P7ME1GXpiGviuiDx7I1xf8E4n2t8vnYjRTiX1SSqfexziFcz20bv0DtZ+H9HNSgg5GrceN8HX65QOBmKzYeWjrz/Nub/8fKc/ArcFBFj9dvIsTk768VEqn/8Mks4Wg3op2XKD2GkhIUdSjwzVSO8CC2vo/Lpq98TXql/55Yu3Crsp4BZSMzkJUDn2OMmk4tzcB64xy8EytNWz7HzNeuf12Ojz86/eLu6mgAAr30i+GIM+jzEJkHy8TjI2iBsoVk4bHc3fDy7OybS2F7489hIX7wTupoFQlP/yU8mXTO2ERn2UyD0Aplx0jtNWTn819mI+dadge7EX/y/xL2XUmprKjx/oAAAAAElFTkSuQmCC"></image></g><g class="png" style="display: block;" transform="matrix(1,0,0,1,124.36720275878906,67.89641571044922)" opacity="1"><image width="50px" height="46px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g><g class="png" style="display: block;" transform="matrix(0.7593931555747986,0,0,0.7593931555747986,14.26517105102539,63.99956512451172)" opacity="1"><image width="50px" height="48px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g><g class="png" style="display: block;" transform="matrix(1,0,0,1,18.103076934814453,96.33732604980469)" opacity="1"><image width="40px" height="30px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAFHElEQVRYhe3WT2xcVxXA4d+5972Z8XgcO2ncuvbQ1AmooNIuqqqNgEULEbBBEUFCKiskhOgORSoLEAtWSLAoQqq6KAsESEilRAjUHRUVElVdkio1TVRCURM7ieu/4/GMPZN5795zWDwbUnfshCRILHyk0cyb9+593zv3njMDe7EXe7FryK0Mss6pOln2aZL76gAMfmoBGACGAA80gUWgASwBV0Wk/T8FWudUnfW1Z4hLxy1fuL/4MgfrgYUo1Qdb1I7NU314OyQCa8BZ4A1gGpgREbtjQGv89mnymR8S2vsNB9ohthewfAN8SlIegrSL5U2k+vCyjJ2cxe0P1wFbFFltbb4WgCngryLSuy2gLf3sx4T2d7CM2F0gnz+Nduc3T0bII4SIDIxQuvswUnUg0nX3Pfd30omc/2Swte19jWILnOXNF/4hj34r/6+BNvuDZygf/BFx3eWNtwlLZ5BygqsM42p1dGkayTM0z4m5Yl3FjdxLaeIeEL3mj7x0Dr8v3wW49XkZuAAsbV96tyPu9OQDW7jQniUsncFXU5wXfPUIycST+JFxLC3h0hSfOlw5EFcvkV2+jMVWRa9879Du6wOAAinwEWDczD6QtL5AMxOqj/0ezRxANv9akbmyw631kHN/w2KG2/8Q6eQXcMN1XGI4LzinxOVZYlPR1iujdN+u9LvFDoYB4MD1yP4Z/OPIZ7XyiQdM24TmBUSv4XwxRkZKWPsqNGegPAq+CmHjQ1Nkly9iMoAuPjfWB7Xb1vJAaesg6XeFXtOvS2kIWEc3FvAe/HAdVzuE5SswNohtrOGqNeL8eWJ3g3TyGLr6HsycxUlG3s2xTkDd1Ii7MWrH6AuMPTuaJoLFgGYtNIs4OYzsfwhCF44+gsRrm8tch/JI8WCNWVAFwFlAmx1cqV3B1h1SuxXfh5fYzITMDluwohEDfqWHvPob9A8/gXdeK3Cri9BtgFNcxaGr76HtFSwqpgE10Bgw80Jop9tvs4tp9yIREbMsiGVt0A1caR/xQIJ+bBBN1ovZO+vo6y9jF9+FmCOaI7UDuJFRiIpttmjnEyCCKwdufg/euM1o5he1OQcSSGr3Qh5RjeiAoG/9mfDuKTg4jByehJU59NI/sdhD8xzTgFkxraulSDLcwx/QHTBtih7YADaAsB3fv0h6NpWff+W4f/KryEADKd9F7C3gy4740RRd7+A75QI3fQZdbGJ3e9NyLhbY7GwDuCGQwceam1mRTcBbwBRvvjDT79djex/sC7TMfqdzV4/HxQYMNSlNfJLuhWUIik8D5o3YmkMvXYFhsAGHaYGz6FCD8qFxLDTwo99c2pz2DeAXIrKyQzaBYotdf9x3iQef+OmvyZjv/ullxE8gvkXlyCNYHsk3Apbl5KO+KIgsFEWRu3/j/Ng4bl8P7ME1GXpiGviuiDx7I1xf8E4n2t8vnYjRTiX1SSqfexziFcz20bv0DtZ+H9HNSgg5GrceN8HX65QOBmKzYeWjrz/Nub/8fKc/ArcFBFj9dvIsTk768VEqn/8Mks4Wg3op2XKD2GkhIUdSjwzVSO8CC2vo/Lpq98TXql/55Yu3Crsp4BZSMzkJUDn2OMmk4tzcB64xy8EytNWz7HzNeuf12Ojz86/eLu6mgAAr30i+GIM+jzEJkHy8TjI2iBsoVk4bHc3fDy7OybS2F7489hIX7wTupoFQlP/yU8mXTO2ERn2UyD0Aplx0jtNWTn819mI+dadge7EX/y/xL2XUmprKjx/oAAAAAElFTkSuQmCC"></image></g><g class="png" style="display: none;"><image width="50px" height="46px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g><g class="png" style="display: none;"><image width="50px" height="48px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g><g class="png" style="display: none;"><image width="40px" height="30px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAFHElEQVRYhe3WT2xcVxXA4d+5972Z8XgcO2ncuvbQ1AmooNIuqqqNgEULEbBBEUFCKiskhOgORSoLEAtWSLAoQqq6KAsESEilRAjUHRUVElVdkio1TVRCURM7ieu/4/GMPZN5795zWDwbUnfshCRILHyk0cyb9+593zv3njMDe7EXe7FryK0Mss6pOln2aZL76gAMfmoBGACGAA80gUWgASwBV0Wk/T8FWudUnfW1Z4hLxy1fuL/4MgfrgYUo1Qdb1I7NU314OyQCa8BZ4A1gGpgREbtjQGv89mnymR8S2vsNB9ohthewfAN8SlIegrSL5U2k+vCyjJ2cxe0P1wFbFFltbb4WgCngryLSuy2gLf3sx4T2d7CM2F0gnz+Nduc3T0bII4SIDIxQuvswUnUg0nX3Pfd30omc/2Swte19jWILnOXNF/4hj34r/6+BNvuDZygf/BFx3eWNtwlLZ5BygqsM42p1dGkayTM0z4m5Yl3FjdxLaeIeEL3mj7x0Dr8v3wW49XkZuAAsbV96tyPu9OQDW7jQniUsncFXU5wXfPUIycST+JFxLC3h0hSfOlw5EFcvkV2+jMVWRa9879Du6wOAAinwEWDczD6QtL5AMxOqj/0ezRxANv9akbmyw631kHN/w2KG2/8Q6eQXcMN1XGI4LzinxOVZYlPR1iujdN+u9LvFDoYB4MD1yP4Z/OPIZ7XyiQdM24TmBUSv4XwxRkZKWPsqNGegPAq+CmHjQ1Nkly9iMoAuPjfWB7Xb1vJAaesg6XeFXtOvS2kIWEc3FvAe/HAdVzuE5SswNohtrOGqNeL8eWJ3g3TyGLr6HsycxUlG3s2xTkDd1Ii7MWrH6AuMPTuaJoLFgGYtNIs4OYzsfwhCF44+gsRrm8tch/JI8WCNWVAFwFlAmx1cqV3B1h1SuxXfh5fYzITMDluwohEDfqWHvPob9A8/gXdeK3Cri9BtgFNcxaGr76HtFSwqpgE10Bgw80Jop9tvs4tp9yIREbMsiGVt0A1caR/xQIJ+bBBN1ovZO+vo6y9jF9+FmCOaI7UDuJFRiIpttmjnEyCCKwdufg/euM1o5he1OQcSSGr3Qh5RjeiAoG/9mfDuKTg4jByehJU59NI/sdhD8xzTgFkxraulSDLcwx/QHTBtih7YADaAsB3fv0h6NpWff+W4f/KryEADKd9F7C3gy4740RRd7+A75QI3fQZdbGJ3e9NyLhbY7GwDuCGQwceam1mRTcBbwBRvvjDT79djex/sC7TMfqdzV4/HxQYMNSlNfJLuhWUIik8D5o3YmkMvXYFhsAGHaYGz6FCD8qFxLDTwo99c2pz2DeAXIrKyQzaBYotdf9x3iQef+OmvyZjv/ullxE8gvkXlyCNYHsk3Apbl5KO+KIgsFEWRu3/j/Ng4bl8P7ME1GXpiGviuiDx7I1xf8E4n2t8vnYjRTiX1SSqfexziFcz20bv0DtZ+H9HNSgg5GrceN8HX65QOBmKzYeWjrz/Nub/8fKc/ArcFBFj9dvIsTk768VEqn/8Mks4Wg3op2XKD2GkhIUdSjwzVSO8CC2vo/Lpq98TXql/55Yu3Crsp4BZSMzkJUDn2OMmk4tzcB64xy8EytNWz7HzNeuf12Ojz86/eLu6mgAAr30i+GIM+jzEJkHy8TjI2iBsoVk4bHc3fDy7OybS2F7489hIX7wTupoFQlP/yU8mXTO2ERn2UyD0Aplx0jtNWTn819mI+dadge7EX/y/xL2XUmprKjx/oAAAAAElFTkSuQmCC"></image></g><g class="png" style="display: none;"><image width="50px" height="46px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g><g class="png" style="display: none;"><image width="50px" height="48px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g><g class="png" style="display: none;"><image width="40px" height="30px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAFHElEQVRYhe3WT2xcVxXA4d+5972Z8XgcO2ncuvbQ1AmooNIuqqqNgEULEbBBEUFCKiskhOgORSoLEAtWSLAoQqq6KAsESEilRAjUHRUVElVdkio1TVRCURM7ieu/4/GMPZN5795zWDwbUnfshCRILHyk0cyb9+593zv3njMDe7EXe7FryK0Mss6pOln2aZL76gAMfmoBGACGAA80gUWgASwBV0Wk/T8FWudUnfW1Z4hLxy1fuL/4MgfrgYUo1Qdb1I7NU314OyQCa8BZ4A1gGpgREbtjQGv89mnymR8S2vsNB9ohthewfAN8SlIegrSL5U2k+vCyjJ2cxe0P1wFbFFltbb4WgCngryLSuy2gLf3sx4T2d7CM2F0gnz+Nduc3T0bII4SIDIxQuvswUnUg0nX3Pfd30omc/2Swte19jWILnOXNF/4hj34r/6+BNvuDZygf/BFx3eWNtwlLZ5BygqsM42p1dGkayTM0z4m5Yl3FjdxLaeIeEL3mj7x0Dr8v3wW49XkZuAAsbV96tyPu9OQDW7jQniUsncFXU5wXfPUIycST+JFxLC3h0hSfOlw5EFcvkV2+jMVWRa9879Du6wOAAinwEWDczD6QtL5AMxOqj/0ezRxANv9akbmyw631kHN/w2KG2/8Q6eQXcMN1XGI4LzinxOVZYlPR1iujdN+u9LvFDoYB4MD1yP4Z/OPIZ7XyiQdM24TmBUSv4XwxRkZKWPsqNGegPAq+CmHjQ1Nkly9iMoAuPjfWB7Xb1vJAaesg6XeFXtOvS2kIWEc3FvAe/HAdVzuE5SswNohtrOGqNeL8eWJ3g3TyGLr6HsycxUlG3s2xTkDd1Ii7MWrH6AuMPTuaJoLFgGYtNIs4OYzsfwhCF44+gsRrm8tch/JI8WCNWVAFwFlAmx1cqV3B1h1SuxXfh5fYzITMDluwohEDfqWHvPob9A8/gXdeK3Cri9BtgFNcxaGr76HtFSwqpgE10Bgw80Jop9tvs4tp9yIREbMsiGVt0A1caR/xQIJ+bBBN1ovZO+vo6y9jF9+FmCOaI7UDuJFRiIpttmjnEyCCKwdufg/euM1o5he1OQcSSGr3Qh5RjeiAoG/9mfDuKTg4jByehJU59NI/sdhD8xzTgFkxraulSDLcwx/QHTBtih7YADaAsB3fv0h6NpWff+W4f/KryEADKd9F7C3gy4740RRd7+A75QI3fQZdbGJ3e9NyLhbY7GwDuCGQwceam1mRTcBbwBRvvjDT79djex/sC7TMfqdzV4/HxQYMNSlNfJLuhWUIik8D5o3YmkMvXYFhsAGHaYGz6FCD8qFxLDTwo99c2pz2DeAXIrKyQzaBYotdf9x3iQef+OmvyZjv/ullxE8gvkXlyCNYHsk3Apbl5KO+KIgsFEWRu3/j/Ng4bl8P7ME1GXpiGviuiDx7I1xf8E4n2t8vnYjRTiX1SSqfexziFcz20bv0DtZ+H9HNSgg5GrceN8HX65QOBmKzYeWjrz/Nub/8fKc/ArcFBFj9dvIsTk768VEqn/8Mks4Wg3op2XKD2GkhIUdSjwzVSO8CC2vo/Lpq98TXql/55Yu3Crsp4BZSMzkJUDn2OMmk4tzcB64xy8EytNWz7HzNeuf12Ojz86/eLu6mgAAr30i+GIM+jzEJkHy8TjI2iBsoVk4bHc3fDy7OybS2F7489hIX7wTupoFQlP/yU8mXTO2ERn2UyD0Aplx0jtNWTn819mI+dadge7EX/y/xL2XUmprKjx/oAAAAAElFTkSuQmCC"></image></g><g class="png" clip-path="url(#__lottie_element_127)" transform="matrix(1,0,0,1,38,40.25)" opacity="1" style="display: block;"><image width="112px" height="112px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g><g class="png" transform="matrix(1,0,0,1,33.54199981689453,130.01499938964844)" opacity="1" style="display: block;"><image width="118px" height="36px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g></g></svg>
    </div>

    <!--新人红包弹框-->
    <layer v-model="showXinrenHongbaoLayer" styles="background-color:transparent;width:100%;
    max-width:100%;"
           className="xinrenModal"
    >
      <div class="xinrenhongbao modal-content ">
        <div class="openRedPacketMain" >
          <!-- <img class="closeIcon" @click="showXinrenHongbaoLayer = false" src="//img.ibestfanli.com/sign_static_quick/closeIcon.png"/> -->
          <div class="btn" id="btn" @click="showXinrenHongbaoLayer=false;showWchatLayer=true">
          </div>
          <div class="tips">{{xinrenConfig.timeNum}}秒后自动领取</div>
<!--          <canvas class="canvas" id="xinrenhongbao" />-->
        </div>
      </div>
    </layer>

    <!--红包弹框 无套路 无门槛-->
    <layer v-model="showHongbaoLayer" styles="background-color:transparent;width:100%;
    max-width:100%;"
           className="xinrenModal"
    >
      <div class="xinrenhongbao modal-content ">
        <!-- 新人红包弹框 -->
        <div class="openRedPacketMain openRedPacketMain-bg" >
          <img class="closeIcon" @click.prevent="closeHongbao" src="//img.ibestfanli.com/sign_static_quick/closeIcon.png"/>
          <div class="btn" id="btn" @click="openHongbao">
            <div class="circle" style="bottom: -0.2rem; right: -0.12rem;">
              <i class="circle1"></i>
              <i class="circle2"></i>
              <i class="circle3"></i>
            </div>
            <img class="finger" src="//img.ibestfanli.com/sign_static_quick/withdrawType_fingerIcon.png" alt="手指" style="bottom:0px; right: -10px;">
          </div>

          <div class="bar">
            <div class="length" :style="{width:($store.state.video_progress.video_nums/$store.state.video_progress.video_task)*100 +'%'}"></div>
            <div class="num">{{$store.state.video_progress.video_nums}}/{{$store.state.video_progress.video_task}}</div>
            <div class="cashWechatIcon">提现</div>
          </div>
        </div>
      </div>
    </layer>
    <!-- 微信弹框 -->
    <layer v-model="showWchatLayer" styles="background-color:transparent;width:100%;
    max-width:100%;"
           className="xinrenModal"
    >
      <div class="xinrenhongbao modal-content ">
        <!-- 微信通知弹框 -->
        <div class="wchartModal">
          <img class="closeIcon" @click="tixianFn('close')" src="//img.ibestfanli.com/sign_static_quick/closeIcon.png"/>
          <div class="contentbox">
            <div class="flex column-center">
              <img class="wechatIco" src="../assets/images/icon_weixinzhifu.png"/>
              <span class="wechatTitle">微信通知</span>
            </div>
            <div class="wechatBody">
              <div class="flex-center">
                <img class="redpickIco" src="//img.ibestfanli.com/sign_static_quick4/index_redIcon.png"/>
                <span class="wechatTitle">新人红包自动到账</span>
              </div>
              <div class="price">
                <span class="pricebefoter">￥</span>
                <animate-number from="0" :to="xinrenConfig.xinrenPrice" :key="xinrenConfig.xinrenPrice" duration="4500" :formatter="priceFormatter">
                </animate-number>
                <span class="priceAfter" v-if="!xinrenConfig.isViewVideo">x2</span>
              </div>
              <div class="flex column-center textItem">
                <span  class="labtitle">入账账户</span>
                <span class="labtext">零钱</span>
              </div>
              <div class="flex column-center textItem">
                <span class="labtitle">入账详情</span>
                <span class="labtext yellow">待提现</span>
              </div>
              <div class="fbBtn" @click="fanbeiHongBaoFn" v-if="!xinrenConfig.isViewVideo">点击翻倍红包</div>
              <div class="fbBtn" @click="showTixianPayler" v-else>去提现</div>
            </div>
          </div>
          <!-- 信息流 -->
<!--          <div style="border:1px solid #fff; margin-top:30px; height:150px">
            信息流
          </div>-->
        </div>
      </div>
    </layer>

    <!-- 提现弹框 -->
    <pay-layer ref="payLayer" :ecpm="ecpm" :isNew03Flag="xinrenConfig.isNewFlag"  :data="tixianData"
               @selectPriceFn="selectPriceFn"
               @showAddedBonuseModal = "showAddedBonuseModal"
               @showTixianTypeModal = "showTixianTypeModal"
               @vxTixianFn = "vxTixianFn"
               @openAgainLayer="openAgainLayer"
               @viewProgressToFinish="viewProgressToFinish"
               @zfbTixianFn="zfbTixianFn"
               @receiveMoney="receiveMoney"
    ></pay-layer>

    <!-- 百分百可提现 -->
    <layer v-model="addedBonusModalLayer" styles="background-color:transparent;width:100%;
    max-width:100%;"
           className="addedBonusModal"
    >
      <div class="content"  @click="closeBonus"
      >
        <img class="close" src="//img.ibestfanli.com/sign_static_quick3/addedBonusModalClose.png" >
        <div id="btn" class="btn">
        </div>
      </div>
    </layer>

    <!-- 提现成功弹框 -->
    <layer v-model="tixianSuccessLayer" styles="background-color:transparent;width:100%;
    max-width:100%;"
           className="tixianSuccessModal"
    >
      <img class="closeIcon" @click="closeTiXianSuccessBox" src="//img.ibestfanli.com/sign_static_quick/closeIcon.png"/>
      <div class="tixianSuccessBox" v-if="tixianData.status">
        <div class="msgText">提现成功！</div>
        <div class="flex column-center tixianBody">
          <div></div>
          <div>
            <span class="price">{{tixianData.tixian_price}}</span>
            <span class="unit">元</span>
          </div>
        </div>

        <div class="FingerMain">
          <div class="FingerTip" v-if="tixianData.price==0||(tixianData.tixian_price>tixianData.price)">
<!--            余额不足-->
            <img src="//img.ibestfanli.com/sign_static_quick3/balance_tip.png" class="tipIcon">
          </div>
          <div class="FingerButton" @click="continueTixian">
            <div class="button3">继续提现</div>
            <div class="circle" style="bottom: -0.2rem; right: -0.12rem;">
              <i class="circle1"></i>
              <i class="circle2"></i>
              <i class="circle3"></i>
            </div>
            <img class="finger" src="//img.ibestfanli.com/sign_static_quick/withdrawType_fingerIcon.png" alt="手指" style="bottom:0px; right: -10px;">
          </div>
        </div>
      </div>

      <div class="tixianErrorBox" v-else >
        <div class="msgText">提现失败！</div>
        <div class="msgDesc">
          非常抱歉，本次提现失败了<br/>
          建议您重新尝试
        </div>
        <div class="FingerMain">
          <div class="button3" @click="tixianSuccessLayer=false;tixianData.status=true">我知道了</div>
        </div>
      </div>
    </layer>

    <!--明日再来-->
    <layer v-model="againLayer" styles="background-color:transparent;width:100%;
    max-width:100%;"
           className="modal withdrawRuleBacground "
    >
      <div class="modal-content ">
        <div class="withdrawRuleMain tomorrow-box">
          <div class="title">明日提现5元</div>
          <div class="tip">
            <p>明日5元生效到账，记得来领取哦！</p>
          </div>
          <div class="button" @click="closeAgainLayer">我知道了</div>
        </div>
      </div>
    </layer>
<!--提现档框-->
    <pay-type-layer ref="payTypeModal"></pay-type-layer>
<!--    签到-->
    <qian-dao-layer ref="qianDaoModal" @viewVideoAndQiandao="viewVideoAndQiandao" @closeQiandaoLayer="closeQiandaoLayer"></qian-dao-layer>
<!--    观看视频进度-->
    <video-step-layer ref="videoStepLayer" @viewTixian="viewTixian"></video-step-layer>
<!--    漂浮金币-->
    <piao-fu-jin-bi-layer ref="piaoFuJinBiLayer" @continueJindouLayer="continueJindouLayer"
                          @continueStepLayer="continueStepLayer"
    @closeJindouLayer="closeJindouLayer" :rewrad_type="rewrad_type"></piao-fu-jin-bi-layer>
    <!-- 看视频加载loading -->
    <loading-video-layer ref="loadingVideoLayer" @playVideoFn="playVideoOrInsertAdFn"></loading-video-layer>
    <!-- 第二天签到提示 连续签到7天得50元-->
    <tip-qian-dao-layer ref="tipQianDaoLayer"></tip-qian-dao-layer>
<!--    支付宝获取现金提示框-->
    <aliy-layer ref="aliyLayer" @zfbTixian="zfbTixian"></aliy-layer>
<!--    获取红包现金-->
    <money-layer ref="moneyLayer" @closeMoneyPackageLayer="closeMoneyPackageLayer"
    @openDoublePackageLayer="openDoublePackageLayer"/>
<!--    获取红包现金翻倍-->
    <money-double-layer ref="moneyDoubleLayer" @closeDoublePackageLayer="closeDoublePackageLayer" />
<!--    马上答题-->
    <question-layer ref="questionLayer" @openQuestionContent="openQuestionContent"
                    @closeQuestionLayer="closeQuestionLayer"/>
<!--    答题-->
    <question-content-layer ref="questionContentLayer" @openMoneyPackage="openMoneyPackage"/>
<!--提现抽奖-->
    <raffle-layer ref="raffleLayer" @openRaffleMoneyLayer="openRaffleMoneyLayer" />
<!--    抽奖结果-->
    <raffle-money-layer ref="raffleMoneyLayer" @closeRaffleMoneyLayer="closeRaffleMoneyLayer"
    @fromRaffleMoneyToTixian="fromRaffleMoneyToTixian"/>
<!--    红包金额展示-->
    <raffle-res-layer  ref="raffleResLayer" @showRaffleResVideo="showRaffleResVideo" @hideRaffleResVideo="hideRaffleResVideo"/>
<!--    单有 金额提示-->
    <money-tip ref="moneyTip" @onlyShowCallback="onlyShowCallback"/>
    <!--    兑换超限-->
    <layer v-model="showExchangeLayer" styles="background-color:transparent;width:100%;
    max-width:100%;"
           className="tixianSuccessModal exchangeModal"
    >
      <div class="tixianErrorBox">
        <div class="msgText">兑换的步数奖励已超本日额度</div>
        <div class="FingerMain">
          <div class="button3" @click="continueExchangeLayer">看视频完成兑换</div>
          <div class="" @click="giveupExchange">放弃兑换</div>
        </div>
      </div>
    </layer>

<!--幸运红包-->
<LuckLayer ref="LuckLayer" @continueLuckLayer="continueLuckLayer" @closeLuckLayer="closeLuckLayer"/>
<!--幸运金币-->
<LuckResLayer ref="LuckResLayer"  @closeLayer="closeLuckResLayer" />

  </div>
</template>

<script>
import homeApi from '@/api/home.js'
import commonApi from '@/api/common.js'
import TextScroll from "@/components/text-scroll.vue"
import PayLayer from '@/components/payLayer.vue'
import payTypeLayer from '@/components/modalLayer/payTypeLayer.vue'
import qianDaoLayer from '@/components/modalLayer/qiandaoLayer.vue'
import videoStepLayer from '@/components/modalLayer/videoStepLayer.vue'
import piaoFuJinBiLayer from '@/components/modalLayer/piaofujinbiLayer.vue'
import loadingVideoLayer from '@/components/modalLayer/loadingVideoLayer.vue'
import tipQianDaoLayer from '@/components/modalLayer/tipqiandaoLayer.vue'
import aliyLayer from '@/components/modalLayer/aliyLayer.vue'
import moneyLayer from "@/components/modalLayer/moneyLayer";
import moneyDoubleLayer from "@/components/modalLayer/moneyDoubleLayer";
import questionLayer from "@/components/modalLayer/questionLayer";
import questionContentLayer from "@/components/modalLayer/questionContentLayer";
import raffleLayer from "@/components/modalLayer/raffleLayer";
import raffleMoneyLayer from "@/components/modalLayer/raffleMoneyLayer";
import raffleResLayer from "@/components/modalLayer/raffleResLayer";
import MoneyTip from "@/components/modalLayer/moneyTip";
import LuckLayer from "@/components/modalLayer/LuckLayer";
import LuckResLayer from "@/components/modalLayer/LuckResLayer";

export default {
  name: "home",
  data() {
    return {
      // app需要的参数
      appParms: {
        mPlacementId:'', // 广告id
        adType:0, // 类型
        returnScale:0, // 占比 10为最高
      },
      ecpm:0,
      showHongbaoLayer: false, // 红包弹框控制器
      showWchatLayer:false,  // 微信提现弹框控制器
      showLoadingLayer:false, // loading 加载标识
      addedBonusModalLayer:false, // 百分百可提现弹框
      showXinrenHongbaoLayer:false, // 新人红包弹框控制器
      tixianSuccessLayer:false,
      xinrenConfig: {
        clickNum:1, // 点击关闭的次数（第一次点关闭显示提现框，第二次点击真关闭）
        timeNum:3, // 新人红包领取倒计时
        xinrenPrice:0, // 新人红包
        isNewFlag:false, // 是否完成新人0.3元提现标识
        newUserInfoData:null, // 新用户信息
        isViewVideo:false, // 是否看视频翻倍红包标识
      },
      // 全屏广告参数
      ggRoll: {
        roll: null,
        speed: 30,
        statusX: 1,
        statusY: 1,
        x: 100,
        y: 300,
        winW: 0,
        winH: 0,
        interval:0
      },
      // personImg:require('../assets/images/renwuzoudong/renwu_walk00.png'),
      // 提现弹框数据
      tixianData: {
        checkIndex:0, // 当前价格选中的索引
        price:0, // 当前余额
        priceList: [],
        tixian_price:150, //要提现金额
        status:true,//提现状态 成功 失败
      },
      againLayer:false, //明日再来提示 弹窗
      qiandao:{
        day:1,
        reward:0
      },
      new_flag:false, //控制新人红包出来一次即可
      stepInterval:null,
      steps:0,
      rewrad_type:'',//xianshi 限时奖励  step 步数转换 pck 漂浮红包 medal 勋章
      showExchangeLayer:false,
    }
  },
  components: {
    MoneyTip,
    PayLayer,
    TextScroll,
    payTypeLayer,
    qianDaoLayer,
    videoStepLayer,
    piaoFuJinBiLayer,
    loadingVideoLayer,
    tipQianDaoLayer,
    aliyLayer,
    moneyLayer,
    moneyDoubleLayer,
    questionLayer,
    questionContentLayer,
    raffleLayer,
    raffleMoneyLayer,
    raffleResLayer,
    LuckLayer,
    LuckResLayer,

  },
  computed:{
    video_nums(){
      return this.$store.state.video_progress.video_nums
    }
  },
  watch:{
    //提现抽奖
    video_nums:{
      deep:true,
      handler(val, oldVal){
        if(this.$store.state.video_progress.video_nums&&(this.$store.state.video_progress.video_nums==this.$store.state.video_progress.video_task)){
          this.$router.replace('/?type=isRaffle')
          this.$refs['raffleLayer'].showModalFn()
        }
      }
    }
  },
  created() {
    //App调用此页面的方法
    // 关闭广告
    window.onAdDismiss = this.onAdDismiss
    window.onRewardVerify = this.onRewardVerify
    window.onAdClicked = this.onAdClicked
    window.onAdLoadFail = this.onAdLoadFail
    window.onAdLoadSuccess = this.onAdLoadSuccess
    window.onAdLoadTimeout = this.onAdLoadTimeout
    window.onAdShow = this.onAdShow
    window.OnVxChatWithdrawalSuccess = this.OnVxChatWithdrawalSuccess
    window.OnVxChatWithdrawalFail = this.OnVxChatWithdrawalFail
    window.OnAlipayWithdrawalSuccess = this.OnAlipayWithdrawalSuccess
    window.OnAlipayWithdrawalFail = this.OnAlipayWithdrawalFail
    window.setStep = this.setStep
    // 获取当前登录的用户信息
    this.getLoginUserInfo()
    //获取当日步数
    this.stepInterval = setInterval(()=>{
      this.utils.webDataToApp('getStep',{})
    },5000)

    this.$store.dispatch('jinbiRewardGet')
    this.$store.dispatch('floatPackageRewardGet')
    this.$store.dispatch('stepReward')
    this.$store.dispatch('medalReward')
  },
  mounted() {
    this.quanPingGGInit()
    // this.personRun()
    // 获取新人红包信息
    this.getNewUserInfo()
    //获取视频解锁进度及状态
    this.$store.dispatch('getVideoProgress')

    this.floatwindow()

    //todo mock
    // this.$refs['tipQianDaoLayer'].showModal()
  },
  destroyed () {
    clearInterval(this.ggRoll.interval)
    clearInterval(this.persionTimer)
    clearInterval(this.stepInterval)
  },
  methods: {
    async floatwindow(){
      let res = await homeApi.floatwindow()
      if(res.data.show_floatwindow==1){
        this.showHongbaoLayer = true
      }
    },
    openZhongjiangLayerFn(){
      // this.appParms={
      //   mPlacementId:'p638ee4cd28b88',
      //   adType: 1
      // }
      // this.playVideoOrInsertAdFn()

    },
    closeLuckResLayer(){
      this.utils.webDataToApp('setAtNativeAdViewGONE',{})
      this.appParms={
        mPlacementId: 'p638ef6c7ea748',
        adType: 3
      }
      this.playVideoOrInsertAdFn()

    },closeLuckLayer(){
      this.utils.webDataToApp('setAtNativeAdViewGONE',{})
      this.appParms={
        mPlacementId: 'p638ef6bbef00e',
        adType: 3
      }
      this.playVideoOrInsertAdFn()

    },
    continueLuckLayer(){
      this.utils.webDataToApp('setAtNativeAdViewGONE',{})
      this.appParms={
        mPlacementId: 'p638ee4b9d3440',
        adType:1
      }
      // 加载播放视频loading
      this.$refs['loadingVideoLayer'].showModalFn()
    },
    openFloatLayer(){
      this.$refs['LuckLayer'].showModalFn()
      this.appParms={
        mPlacementId: 'p638ee30052ceb',
        adType: 2,
        returnScale: 1
      }
      this.playVideoOrInsertAdFn()
    },
    closeJindouLayer(){
      this.utils.webDataToApp('setAtNativeAdViewGONE',{})
      this.appParms={
        mPlacementId: 'p638ef67593efb',
        adType: 3
      }
      this.playVideoOrInsertAdFn()

    },
    continueStepLayer(){
      this.utils.webDataToApp('setAtNativeAdViewGONE',{})
      this.appParms={
        mPlacementId: 'p638ee48037f81',
        adType:1
      }
      // 加载播放视频loading
      this.$refs['loadingVideoLayer'].showModalFn()
    },
    continueJindouLayer(){
      this.utils.webDataToApp('setAtNativeAdViewGONE',{})
      this.appParms={
        mPlacementId: 'p638ee4a513c3f',
        adType:1
      }
      // 加载播放视频loading
      this.$refs['loadingVideoLayer'].showModalFn()
    },
    openJindouLayer(){
      this.rewrad_type = 'xianshi'
      this.$refs['piaoFuJinBiLayer'].showModalFn()
      this.appParms={
        mPlacementId: 'p638ee2cf214b7',
        adType:2,
        returnScale:1
      }
      this.playVideoOrInsertAdFn()
    },
    openStepChangeLayer(){
      this.rewrad_type = 'step'
      if(this.$store.state.shake_mobile==1){
        //已超过兑换次数
        this.showExchangeLayer = true
        return;
      }
      this.$store.dispatch('stepRewardSet')
      this.$refs['piaoFuJinBiLayer'].showModalFn()
    },
    continueExchangeLayer(){
      this.showExchangeLayer = false
      this.appParms={
        mPlacementId: 'p638ee48f19aa9',
        adType: 1
      }
      this.$refs['loadingVideoLayer'].showModalFn()
    },
    giveupExchange(){
      this.appParms={
        mPlacementId: 'p638ef655491e2',
        adType: 3
      }
      this.playVideoOrInsertAdFn()
      this.showExchangeLayer = false
    },
    setStep(steps){
      this.steps = JSON.parse(steps).step
    },
    // 获取当前登录的用户信息
    async getLoginUserInfo() {
      try{
        const useObj =localStorage.getItem('base_data')? JSON.parse(localStorage.getItem('base_data')):{"userId":"4055162","productId":"10012","channel":"other","versions":"1.0.0"}
        let resData = await commonApi.getLoginUserInfo({uid:useObj.userId,product_id:useObj.productId})
        this.tixianData.price = resData.data.reward
      }catch (e) {

      }
    },
    //获取提现档
    async getWithdrawList() {
      try{
        let resData = await homeApi.getWithdrawOptions()
        this.tixianData.priceList = resData.data.list
        resData.data.list.forEach((item,index) => {
          if(item.checked) {
            this.tixianData.checkIndex = index
            if(item.user_reward=='随机金额'){
              this.tixianData.tixian_price = Math.round(Math.random()*5*100)/100
            }else{
              this.tixianData.tixian_price = item.user_reward
            }
          }
        })
      }catch (e) {

      }
    },
    // 获取新人基本数据
    async getNewUserInfo() {
      try{
      let resData = await homeApi.getNewUserInfo()
      this.xinrenConfig.newUserInfoData = resData.data
      this.xinrenConfig.xinrenPrice = resData.data.reward
      this.getWithdrawList()

      this.ecpm = resData.data.state
      if(resData.data.new_user_state&&!this.new_flag) {
        this.new_flag = true
        // 说明是个新用户,弹出新人红包
        this.showNewUserLayer()
      }

      }catch (e) {

      }
    },
    //跳转
    jumpPage(type){
      this.utils.webDataToApp('setJumpAreaType',type,()=>{
        this.onRewardVerify()
      })
    },
    //去回答问题
    openQuestionContent(){
      this.$refs['questionContentLayer'].showModalFn()
    },
    //关闭答题
    closeQuestionLayer(){
      //插屏广告
      this.appParms ={
        mPlacementId: 'p638ef5c161df6',
        adType: 3
      }
      this.playVideoOrInsertAdFn()
    },
    //查看红包
    openMoneyPackage(){
      this.appParms={
        mPlacementId: 'p638ee426abcca',
        adType:1
      }
      this.$refs['loadingVideoLayer'].showModalFn('getMoney')

    },
    //打开红包现金翻倍
    openDoublePackageLayer(){
      this.utils.webDataToApp('setAtNativeAdViewGONE',{})
      this.appParms={
        mPlacementId:'p638ee41b803cb',
        adType:1
      }
      // 加载播放视频loading
      this.$refs['loadingVideoLayer'].showModalFn()
    },
    closeMoneyPackageLayer(){
      this.utils.webDataToApp('setAtNativeAdViewGONE',{},()=>{
        this.onRewardVerify()
      })
      this.appParms={
        mPlacementId:'p638ef5cd435bf',
        adType:3
      }
      this.playVideoOrInsertAdFn()
    },
    //关闭红包现金红包翻倍
    closeDoublePackageLayer(){
      this.utils.webDataToApp('setAtNativeAdViewGONE',{},()=>{
        this.onRewardVerify()
      })
      this.$store.state.reward_money = this.$store.state.video_lock.reward
      this.$refs['moneyTip'].showModal('onlyShow')
    },
    //继续提现 多乐计步-提现后继续提现激励视频
    continueTixian(){
      this.tixianSuccessLayer = false
      this.appParms={
        mPlacementId:'p638ee3ca69bc2',
        adType:1
      }
      // 加载播放视频loading
      this.$refs['loadingVideoLayer'].showModalFn('getMoney')
    },
    //关闭提现成功弹窗 - 多乐计步-关闭提现成功弹窗插屏
    closeTiXianSuccessBox(){
      this.utils.webDataToApp('setAtNativeAdViewGONE',{},()=>{
        this.onRewardVerify()
      })
      this.appParms={
        mPlacementId:'p638ef5a6f0a1b',
        adType:3
      }
      this.tixianSuccessLayer = false
      this.playVideoOrInsertAdFn()
    },
    // 点击微信提现按钮
    vxTixianFn() {
      this.appParms={
        mPlacementId:'p638ee3ba07f0c',//新人提现激励视频
        adType:1
      }
      // 加载播放视频loading
      this.$refs['loadingVideoLayer'].showModalFn('isNew')
    },
    indexVideoBtnFn(){
      this.appParms={
        mPlacementId:'p638ee3eb90b46',//首页视频任务活动栏激励视频
        adType:1
      }
      // 加载播放视频loading
      this.$refs['loadingVideoLayer'].showModalFn()
    },

    //立即赚钱
    receiveMoney(){
      this.appParms={
        mPlacementId: 'p6399488176bea',
        adType:1
      }
      // 加载播放视频loading
      this.$refs['loadingVideoLayer'].showModalFn()
    },
    // 点击签到奖励
    viewVideoAndQiandao(next_info) {
      this.qiandao.day = next_info.next_day
      this.qiandao.reward = next_info.next_reward
      this.utils.webDataToApp('setAtNativeAdViewGONE',{})
      this.appParms ={
        mPlacementId: 'p638ee4c644efd',
        adType:1
      }
      // 加载播放视频loading
      this.$refs['loadingVideoLayer'].showModalFn()
    },

    // 播放视频或显示信息流方法
    playVideoOrInsertAdFn() {
      this.utils.webDataToApp('loadAd',this.appParms,()=>{
        this.onRewardVerify()
      })
    },

    // 新人看视频翻倍红包
    async newUserDoubleHongbao() {
      let resData = await homeApi.setNewUserHongBao({
        state:this.xinrenConfig.isViewVideo?1:0
      })
      if(resData.status === 200) {
        this.xinrenConfig.xinrenPrice = resData.data.reward
        if(!this.xinrenConfig.isViewVideo) {
          this.showWchatLayer = false
          this.tixianData.price = this.xinrenConfig.xinrenPrice
          this.showTixianPayler()
        }
      }
    },

    // 点击翻倍红包按钮
    fanbeiHongBaoFn() {
      this.utils.webDataToApp('setAtNativeAdViewGONE',{},()=>{
        this.onRewardVerify()
      })
      // 跳转到看视频,看完视频后金额翻倍
      // 加载播放视频loading
      this.appParms = {
        mPlacementId:'p638ee3b03599f',
        adType:1
      }
      // 加载播放视频loading
      this.$refs['loadingVideoLayer'].showModalFn()
    },

    // 点击微信提现显示提现方法
    showTixianTypeModal() {
      this.$refs['payTypeModal'].showModalFn()
    },

    // 显示新人红包弹框
    showNewUserLayer() {
      // 显示新人红包
      this.showXinrenHongbaoLayer = true
      // this.utils.onPag('./pag/xinrenhongbao.pag','xinrenhongbao')
      // 显示信息流 多乐计步-新人红包信息流
      this.appParms = {
        mPlacementId:'p638ee19b87519',
        adType:2,
        returnScale:1
      }
      this.playVideoOrInsertAdFn()

      this.timerNum = setInterval(()=>{
        this.xinrenConfig.timeNum --
        if(this.xinrenConfig.timeNum<=0) {
          this.xinrenConfig.timeNum = 0
          this.showXinrenHongbaoLayer = false
          // this.utils.hidePag('xinrenhongbao')
          this.showWchatLayer = true
          this.utils.webDataToApp('setAtNativeAdViewGONE',{},()=>{
            this.onRewardVerify()
          })
          clearInterval(this.timerNum)
          // clearTimeout(this.xinrenTimer)

          // 显示信息流
          this.appParms = {
            mPlacementId:'p638ee1a5b89e8',
            adType:2,
            returnScale:1
          }
          this.playVideoOrInsertAdFn()

        }
      },1000)
    },
    // 全屏广告初始
    quanPingGGInit(){
      this.ggRoll.roll = document.getElementById('roll')
      this.ggRoll.winW = document.documentElement.clientWidth - document.getElementById('roll').offsetWidth
      this.ggRoll.winH = document.documentElement.clientHeight - document.getElementById('roll').offsetHeight
      this.ggRoll.interval = setInterval(this.ggGo, this.ggRoll.speed)
    },
    // 全屏漂浮广告
    ggGo() {
      this.ggRoll.roll.style.left = this.ggRoll.x + 'px'
      this.ggRoll.roll.style.top = this.ggRoll.y + 'px'
      this.ggRoll.x = this.ggRoll.x + (this.ggRoll.statusX ? -1 : 1)
      if (this.ggRoll.x < 0) { this.ggRoll.statusX = 0 }
      if (this.ggRoll.x > this.ggRoll.winW) { this.ggRoll.statusX = 1 }

      this.ggRoll.y = this.ggRoll.y + (this.ggRoll.statusY ? -1 : 1)
      if (this.ggRoll.y < 0) { this.ggRoll.statusY = 0 }
      if (this.ggRoll.y > this.ggRoll.winH) { this.ggRoll.statusY = 1 }
    },
    // 人物行走动画
    // personRun() {
    //   this.persionImgArr = []
    //   for(let i=0;i<30;i++) {
    //     let imgNum = i<10?'0'+i:i
    //     this.persionImgArr.push(require('../assets/images/renwuzoudong/renwu_walk'+imgNum +'.png'))
    //   }
    //   let num = 0
    //   this.persionTimer = setInterval(()=>{
    //     num = num+1
    //     if(num>=30) {
    //       num = 0
    //     }
    //     this.personImg = this.persionImgArr[num]
    //   }, 35)
    // },
    // 显示提现弹框
    showTixianPayler() {
      this.showWchatLayer = false
      this.xinrenConfig.isViewVideo = false
      this.utils.webDataToApp('setAtNativeAdViewGONE',{})
      this.getLoginUserInfo()

      this.$refs['payLayer'].isShowPayLayer=true
    },
    // 选择价格
    selectPriceFn(index) {
      this.tixianData.checkIndex = index
      this.tixianData.priceList.forEach((item,num)=> {
        item.checked = false
        if(num === index) {
          item.checked = true
          if(item.user_reward=='随机金额'){
            this.tixianData.tixian_price = Math.round(Math.random()*5*100)/100
          }else{
            this.tixianData.tixian_price = item.user_reward
          }
        }
      })

    },
    //关闭百分百提现弹窗
    closeBonus(){
      this.addedBonusModalLayer=false

      this.appParms = {
        mPlacementId: 'p638ef0b19d95f',
        adType:1
      }
      // 加载播放视频loading
      this.$refs['loadingVideoLayer'].showModalFn()
    },
    // 显示百分百可提现弹框
    showAddedBonuseModal(type) {
      if(!this.xinrenConfig.isNewFlag) {
        this.addedBonusModalLayer = true
      }

      //视频解锁
      if(type=='isVideoUnlock'){
        //明日再来
        if(this.$store.state.video_progress.lock_status==2){
           this.openAgainLayer()
        }
        //立即提现
        else if(this.$store.state.video_progress.lock_status==3){
             this.$refs['videoStepLayer'].showModalFn()
        }
        else {
          this.addedBonusModalLayer = true

        }
      }

    },
    // 提现方法
    tixianFn(flag) {
      if(flag === 'close') {
        this.utils.webDataToApp('setAtNativeAdViewGONE',{},()=>{
          this.onRewardVerify()
        })

        // 说明点击了直接关闭微信弹框
        if(this.xinrenConfig.clickNum === 1) {
          // 显示提现弹窗
          this.xinrenConfig.clickNum +=1
          this.showTixianPayler()
        } else {
          // 关闭弹框
          if(this.xinrenConfig.isViewVideo){
            //翻倍
            this.appParms={
              mPlacementId: 'p638ef3868dfbe',
              adType: 3
            }
          }else{
            //不翻倍
            this.appParms={
              mPlacementId: 'p638ef37c27027',
              adType: 3
            }
          }
          this.playVideoOrInsertAdFn()
          this.showWchatLayer = false
        }
      }
    },
    //打开明日提现弹窗
    openAgainLayer(){
      this.againLayer = true
    },
    //关闭明日提现5元弹窗
    closeAgainLayer(){
      this.appParms={
        mPlacementId: 'p638ef6ffbb627',
        adType: 3,
      }
      this.playVideoOrInsertAdFn()
      this.againLayer = false
    },
    //支付宝提现
    zfbTixianFn(){
       this.$refs['aliyLayer'].showModalFn()
    },
    zfbTixian(){
      this.utils.webDataToApp('setAlipayWithdrawal',{
        uid:this.$store.state.base_data.userId,
        product_id:this.$store.state.base_data.productId,
        withdraw_id:this.tixianData.priceList[this.tixianData.checkIndex].id,
        desc:''
      },()=>{
        this.onRewardVerify()
      })

    },
    //观看提现 看完要更新提现档
    viewTixian(){
      if(this.$store.state.video_lock.complete_num==this.$store.state.video_lock.total){
        //支付宝提现
        return this.zfbTixianFn()
      }
      this.appParms={
        mPlacementId: 'p638ef0c28007c',//次日提现视频任务激励视频
        adType:1
      }
      // 加载播放视频loading
      this.$refs['loadingVideoLayer'].showModalFn()
    },
    //视频进度去完成
    viewProgressToFinish(){
      this.appParms={
        mPlacementId: 'p638ee3dc917ab',//提现页完成视频任务激励视频
        adType:1
      }
      // 加载播放视频loading
      this.$refs['loadingVideoLayer'].showModalFn()
    },
    //领现金
    openPersonReceiveMoney(){
      //todo:看完视频任务 看满后，如果没有抽奖，点击按钮打开抽奖弹窗  ，如果抽奖了，进入下一个任务的循环
      // if(this.$store.state.video_progress.video_nums==this.$store.state.video_progress.video_task){
      //   this.$layer.msg('视频任务已完成～')
      //   return;
      // }
      this.showHongbaoLayer=true;
    },
    //关闭无门槛弹窗
    closeHongbao(){
      this.appParms={
        mPlacementId: 'p638ef5b19b098',//关闭视频任务弹窗插屏
        adType: 3
      }
      this.playVideoOrInsertAdFn()
      this.showHongbaoLayer = false
    },
    //打开无门槛弹窗
    openHongbao(){
      this.appParms={
        mPlacementId: 'p638ee3d3a3b75', //视频任务-弹窗开红包激励视频
        adType:1
      }
      // 加载播放视频loading
      this.$refs['loadingVideoLayer'].showModalFn('getMoney')
    },
    // 格式化金额
    priceFormatter: function (num) {
      return num.toFixed(2)
    },

    // 显示签到框
    showQiandaoHander() {
      this.appParms={
        mPlacementId: 'p638ee31d979f2',
        adType: 2,
        returnScale:1
      }
      this.playVideoOrInsertAdFn()
      this.$refs['qianDaoModal'].showModalFn()
    },
    //显示红包金额
    openRaffleMoneyLayer(){
      if(this.$store.state.reward_money==0){
        //遗憾未中奖
        this.$refs['raffleResLayer'].showModalFn()
      }else{
        this.$refs['raffleMoneyLayer'].showModalFn()
      }
    },
    //关闭红包金额
    closeRaffleMoneyLayer(){
      this.appParms={
        mPlacementId: 'p638ef5efc55df',
        adType: 3
      }
      this.playVideoOrInsertAdFn()
    },
    //红包金额-立即提现
    fromRaffleMoneyToTixian(){

        this.appParms={
          mPlacementId: 'p638ee431c8037',
          adType:1
        }
        // 加载播放视频loading
        this.$refs['loadingVideoLayer'].showModalFn()

    },
    //红包金额-提现提示-激励视频
    showRaffleResVideo(){
      if(this.$store.state.reward_money==0){
        this.appParms={
          mPlacementId: 'p638ee474e3500',
          adType:1
        }
      }else{
        //不足0.3
        this.appParms={
          mPlacementId: 'p638ee464b8c7c',
          adType:1
        }
      }
      // 加载播放视频loading
      this.$refs['loadingVideoLayer'].showModalFn()
    },
    //关闭
    hideRaffleResVideo(){
      this.appParms={
        mPlacementId: 'p638ef63d5aa3b',
        adType: 3
      }
      this.playVideoOrInsertAdFn()
    },
    //签到完 提示后续可领多少
    onlyShowCallback(){
      this.appParms={
        mPlacementId: 'p638ee328a46c4',
        adType: 2,
        returnScale:1
      }
      this.playVideoOrInsertAdFn()
      this.$refs['tipQianDaoLayer'].showModal(this.qiandao)
    },
    //关闭签到
    closeQiandaoLayer(){
      this.utils.webDataToApp('setAtNativeAdViewGONE',{},()=>{
        this.onRewardVerify()
      })
      this.appParms={
        mPlacementId: 'p638ef716b548f',
        adType: 3
      }
      this.playVideoOrInsertAdFn()
    },
    //签到的提示
    closeTipQiandaoLayer(){
      this.utils.webDataToApp('setAtNativeAdViewGONE',{},()=>{
        this.onRewardVerify()
      })
      this.appParms={
        mPlacementId: 'p638ef71dc03b6',
        adType: 3
      }
      this.playVideoOrInsertAdFn()
    },
    // #Region 以下是app的回调相关方法
    //微信提现成功返回
    OnVxChatWithdrawalSuccess(){
      //提现成功 信息流
      this.appParms={
        mPlacementId:'p638ee1ece33ff',
        adType:2,
        returnScale:1
      }
      this.playVideoOrInsertAdFn()
      this.tixianSuccessLayer = true
      this.tixianData.status = true
    },
    //微信提现失败返回
    OnVxChatWithdrawalFail(){
      this.tixianSuccessLayer = true
      this.tixianData.status = false
    },
    //支付宝提现成功返回
    OnAlipayWithdrawalSuccess(){
      //提现成功 信息流
      this.appParms={
        mPlacementId:'p638ee1ece33ff',
        adType:2,
        returnScale:1
      }
      this.playVideoOrInsertAdFn()
      this.tixianData.status = true
    },
    //支付宝提现失败返回
    OnAlipayWithdrawalFail(){
      this.tixianData.status = false
    },

    // 关闭广告
    onAdDismiss(params) {
      console.log('调用了关闭广告：'+params)

      //签到完领奖励  看完视频后，重新查看奖励
      if(this.appParms.mPlacementId=='p638ee4c644efd'){
        homeApi.qiandao().then((resData)=>{
          this.$store.state.reward_money = resData.data.reward
          this.$refs['moneyTip'].showModal('onlyShow-Qiandao')
          this.getNewUserInfo()
        }).catch(err=>{
          this.$layer.msg(err.message)
        })
      }

    },
    // 点击广告
    onAdClicked(params) {
      console.log('调用了点击广告：'+params)
    },
    // 加载广告失败
    onAdLoadFail(params) {
      console.log('加载广告失败：'+params)
      this.onAdDismiss(params)
    },
    // 加载广告成功
    onAdLoadSuccess(params) {
      console.log('加载广告成功：'+params)
    },
    // 加载广告超时
    onAdLoadTimeout(params) {
      console.log('加载广告超时：'+params)
      this.onAdDismiss(params)
    },
    // 查看广告
    onAdShow(params) {
      console.log('查看广告：'+params)
    },
    // 奖励激励
    onRewardVerify(params) {
      console.log('调用了奖励激励：'+params)

      //微信提现 激励视频
      if(this.appParms.mPlacementId=='p638ee3ba07f0c'){
         //微信去提现
       return  this.utils.webDataToApp('setVxChatWithdrawal',{
           uid:this.$store.state.base_data.userId,
           product_id:this.$store.state.base_data.productId,
           withdraw_id:this.tixianData.priceList[this.tixianData.checkIndex].id,
           desc:''
         })
      }

      if(this.appParms.mPlacementId=='p638ee3b03599f'){
      // 看过翻倍红包的激励视频,则翻倍红包
        this.utils.webDataToApp('setAtNativeAdViewGONE',{})
        this.appParms ={
          mPlacementId: 'p638ee1ae400e5',
          adType: 2,
          returnScale:1
        }
      this.playVideoOrInsertAdFn()
      this.xinrenConfig.isViewVideo = true
      this.newUserDoubleHongbao()
      }
      //立即赚钱
      if(this.appParms.mPlacementId=='p6399488176bea'){
          this.getNewUserInfo()
      }

      // 观看提现-激励视频 更新提现档 以及  视频解锁状态
      if(this.appParms.mPlacementId=='p638ef0c28007c'){
        //获取视频解锁进度及状态
        this.$store.dispatch('getWithdraw')
        this.$store.dispatch('getVideoLockInfo',{state:1})
        this.getWithdrawList()
      }
      //更新数据 1 领无门槛红包  2 视频任务进度 3 首页观看视频按钮及视频进度去提现 4 继续提现
      if(this.appParms.mPlacementId=='p638ee3d3a3b75'||
          this.appParms.mPlacementId=='p638ee3dc917ab'||
          this.appParms.mPlacementId=='p638ee3eb90b46'||
          this.appParms.mPlacementId=='p638ee3ca69bc2'
      ){
          this.showHongbaoLayer=false;
          this.getWithdrawList()
          this.$store.dispatch('addVideoProgress',{
            callback:()=>{
              console.log( 'ssxxxx')
              this.getNewUserInfo()

              //判断奇偶
              if(this.$store.state.video_progress.video_nums%2==0){
                //去答题
                this.$refs['questionLayer'].showModalFn()
              }else{
                //获得金额
                this.appParms = {
                  mPlacementId: 'p638ee22d967ba',
                  adType: 2,
                  returnScale:1
                }
                this.playVideoOrInsertAdFn()
                this.$refs['moneyLayer'].showModalFn()
              }
            }
          })
      }
      //视频任务红包翻倍
      if(this.appParms.mPlacementId=='p638ee426abcca'||
         this.appParms.mPlacementId=='p638ee41b803cb'){
          this.$store.dispatch('getVideoProgressDouble',{
            state:1,
            callback:()=>{
              this.getNewUserInfo()
              this.appParms = {
                mPlacementId: 'p638ee239d518c',
                adType: 2,
                returnScale:1
              }
              this.playVideoOrInsertAdFn()
              this.$refs['moneyDoubleLayer'].showModalFn()
            }
          })
      }
      //红包金额去提现
      if(this.appParms.mPlacementId=='p638ee431c8037'){
        if(this.$store.state.reward_money<0.3){
          //微信不能提现
          this.$refs['raffleResLayer'].showModalFn()
        }else {
          this.showTixianPayler()
        }
      }




      //视频解锁 激励视频关闭
      if(this.appParms.mPlacementId=='p638ef0b19d95f'){
        //获取视频解锁进度及状态
        this.$store.dispatch('getVideoProgress',{lock_status:2})

        this.openAgainLayer()
      }
      //步数转化
      if(this.appParms.mPlacementId=='p638ee48037f81'){
            if(this.rewrad_type=='step'){
              this.$store.dispatch('stepReward')
              this.$store.dispatch('stepRewardSetContinue')
              return;
            }
            homeApi.jindouRewardSet()
                .then(res=>{
                  if(res.status==200){
                    this.$store.dispatch('jinbiRewardGet')
                  }else{
                    this.$layer.msg(res.message)
                  }
                }).catch(e=>{

            })
      }

      //幸运红包
      if(this.appParms.mPlacementId=='p638ee4b9d3440'){

        this.$store.dispatch('floatPackageRewardSet')
        this.$refs['LuckResLayer'].showModalFn()
        this.appParms={
          mPlacementId: 'p638ee30ea3c4d',
          adType: 2,
          returnScale: 1
        }
        this.playVideoOrInsertAdFn()
      }

      //看视频兑换
      if(this.appParms.mPlacementId=='p638ee48f19aa9'){

        this.$store.dispatch('stepRewardSet')
        this.$refs['piaoFuJinBiLayer'].showModalFn()

      }
      //限时翻倍
      if(this.appParms.mPlacementId=='p638ee4a513c3f'){
        //todo：翻倍接口
        this.rewrad_type = 'xianshi_double'
        this.$refs['piaoFuJinBiLayer'].showModalFn()

        this.appParms={
          mPlacementId: 'p638ee2cf214b7',
          adType:2,
          returnScale:1
        }
        this.playVideoOrInsertAdFn()
      }

    }

    // #End Region


  }
}
</script>
<style lang="scss" scoped>
.indexbox {
  width: 100%;
  min-height: 100vh;
  background:#F8F8F8;
  .wrapper {
    position: relative;
    overflow-x: hidden;
    .bannerBox {
      position: relative;
      width: 100%;
      height: 820px;
      padding: 80px 0 0 0;
      background: url('../assets/images/beijing-1.png') no-repeat;
      background-size: 100% 100%;
      box-sizing: border-box;
      .imgFooter {
        position: absolute;
        left:0;
        right:0;
        bottom:0;
        width:100%;
        height:120px;
      }
      .headerbox {
        /* 左侧 */
        .leftbox {
          background: #fff;
          border:2px solid #FF8A2B;
          border-radius: 40px;
          padding: 10px 15px;
          .redIcon {
            width: 45px;
            height: 45px;
          }
          .money {
            margin-left: 5px;
            font-size: 35px;
            font-weight: 500;
            font-family: Bebas;
            color: #9c4024;
            line-height: 0.54rem;
            display: flex;
          }
          .unit {
            font-size: 20px;
            font-weight: 500;
            color: #9c4024;
            padding-top: 5px;
            margin-left: 3px;
          }

          .greenButton {
            width: 100px;
            height: 50px;
            background: -webkit-linear-gradient(top, #0ed463, #06bd35);
            background: linear-gradient(180deg, #0ed463, #06bd35);
            border-radius: 30px;
            display: -webkit-box;
            display: -webkit-flex;
            display: flex;
            -webkit-box-align: center;
            -webkit-align-items: center;
            align-items: center;
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            margin-left: 10px;
            .wechatIcon {
              width: 30px;
              height: 30px;
            }
            .buttonText {
              font-size: 20px;
              font-weight: 500;
              color: #fff;
              margin-left: 5px;
            }
          }
        }
        /**右侧 */
        .rightbox {
          align-content: center;
          .qiandao {
            background: #fff;
            border:2px solid #FF8A2B;
            border-radius: 40px;
            padding: 0 15px;
            margin-right: 20px;
          }
          .coinIcon {
            width: 45px;
            height: 45px;
          }
          .signTitle {
            font-size: 30px;
            font-weight: 500;
            color: #9c4024;
            margin-left: 10px;
            padding-top: 5px;
          }
          .play {
            border:2px solid #FF8A2B;
            background: #fff;
            border-radius: 40px;
            width: 70px;
            height: 70px;
            .playIcon {
              width: 45px;
              height: 45px;
            }
          }
        }
      }
      .titleBox {
        margin-top: 20px;
        position: relative;
        .deviceId {
          position: absolute;
          top: 0;
          left: 30px;
          color: #fff;
          opacity: 0.3;
        }
        .headerTitle {
          color: #fff;
          font-size: 24px;
        }
      }
      /**步数 */
      .step {
        margin-top: 10px;
        .stepValue {
          font-size: 70px;
          color: #fff;
        }
        .stepUnit {
          font-size: 24px;
          color: #fff;
          font-weight: 500;
        }
      }
      /**人行走 */
      .person {
        width: 250px;
        height: 300px;
        position: relative;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        .personImg {
          width:185px;
        }
      }
      /**领红包 */
      .linhongbao {
        .dynamicPaper {
          position: absolute;
          width: 100px;
          height: 120px;
          right: 90px;
          top: 410px;
          -webkit-animation: moveUp 3s infinite;
          animation: moveUp 3s infinite;
          /* z-index: 2; */
        }
        .fixedTitle {
          right: 105px;
          top: 550px;
          color: #ff490a;
          font-size:26px;
          position: absolute;
          text-align: center;
        }
        .redFingerIcon {
          position: absolute;
          width: 100px;
          height:110px;
          right:30px;
          top: 480px;
          -webkit-animation: redFinger 1s infinite;
          animation: redFinger 1s infinite;
          /* z-index: 2; */
        }
      }

      .fixedRed>.fixedIcon {
        background:url(//img.ibestfanli.com/sign_static_quick/header_redIcon.png) no-repeat;
        background-size:100% 100%;
        width: 100px;
        height: 120px;
        position:absolute;
        text-align:center;
        right: 90px;
        top: 410px;
      }
      .fixedRed>.fixedIcon>.redIcon {
        width:40px;
        height:40px;
        z-index:100;
        position:absolute;
        right:-10px;
        top:-10px;
      }
      .fixedRed>.countdown {
        background:url(//img.ibestfanli.com/sign_static_quick/header_redBg.png) no-repeat;
        background-size:100% 100%;
        width: 120px;
        height: 35px;
        right: 80px;
        top: 500px;
        z-index:2;
        color:#fff;
        line-height:35px;
      }
      .fixedRed>.countdown, .fixedTitle {
        position:absolute;
        text-align:center;
        font-size:26px;
        font-weight:500;
      }


      /* 漂浮金币 */
      .task-list-icon {
        .task-item {
          position:absolute;
          display:inline-block;
          -webkit-animation:moveUp 3s infinite;
          animation:moveUp 3s infinite;
          &.task-item0 {
            top:230px;
            right:65px;
            -webkit-animation-delay:.5s;
            animation-delay:.5s;
            .coin{
              background: url("../assets/images/dtxxtc_icon_hongbao.png") no-repeat;
              background-size:cover;
            }
          }
          &.task-item1 {
            top:200px;
            left:140px;
            -webkit-animation-delay:1s;
            animation-delay:1s;
          }
          &.task-item2 {
            top:400px;
            left:50px;
            -webkit-animation-delay:1.5s;
            animation-delay:1.5s;
          }
          &.task-item3 {
            top:150px;
            right:200px;
            -webkit-animation-delay:1.5s;
            animation-delay:1.5s;
            .coin{
              background: url("../assets/images/xunzhang-icon.png") no-repeat;
              background-size:cover;
            }
          }


          .coin {
            width:95px;
            height:95px;
            margin:0 auto auto;
            font-size:30px;
            font-weight:800;
            text-align:center;
            color:#fff7dd;
            background-image:url(//img.ibestfanli.com/sign_static_quick4/Index_icon2.png);
            background-size:cover;
            line-height:95px;
            font-family:DINAlternate-Bold, DINAlternate;
          }

          &.task-item0-animation {
            -webkit-animation:taskOneMove 1.5s ease forwards;
            animation:taskOneMove 1.5s ease forwards;
          }
          &.task-item1-animation {
            -webkit-animation:taskTwoMove 1.5s ease forwards;
            animation:taskTwoMove 1.5s ease forwards;
          }
          &.task-item2-animation {
            -webkit-animation:taskThreeMove 1.5s ease forwards;
            animation:taskThreeMove 1.5s ease forwards;
          }

          .reward-name {
            background:#fff;
            border-radius:20px;
            text-align:center;
            font-size:24px;
            font-weight:500;
            color:#FF8A2B;
            line-height:30px;
            padding:5px 10px;
            margin:-10px 0 0
          }

        }

      }
      .bigButton {
        background: url(//img.ibestfanli.com/sign_static_quick4/index_bigIndex.png) no-repeat;
        background-size: 100% 100%;
        width: 460px;
        height: 140px;
        position: relative;
        top: 50px;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        font-size: 40px;
        font-weight: 600;
        color: #fff;
        line-height: 120px;
        text-align: center;
        -webkit-animation: bigButtonAnimation 0.72s infinite;
        animation: bigButtonAnimation 0.72s infinite;
      }

      /* 留言 */

      .feedback {
        width: 90px;
        height: 90px;
        background: #fff;
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
        border: 2px solid #fff;
        border-radius: 100%;
        position: absolute;
        right: 20px;
        bottom: 60px;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        box-sizing: border-box;
        .feedbackIcon {
          width: 35px;
          height: 35px;
        }
        .feedbackText {
          font-size: 26px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #9c4024;
        }
      }
    }
  }

  .VideoBannerMain {
    /* position: relative;
    z-index: 6; */
    .card {
      height: 150px;
      display: flex;
      align-items: center;
      background: #fff;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.05);
      border-radius: 10px;
      border: 1px solid #ebebeb;
      margin-bottom: 30px;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      justify-content: space-between;
      .left {
        display: flex;
        align-items: center;
        .imgIcon {
          width: 110px;
          height: 110px;
          img {
            width:100px;
          }
          .img2 {
            width:110px;
            margin-left:-10px;
          }
        }
        .conterText {
          margin-left:10px;
          .headerTitle {
            font-weight: 600;
            color: #333;
            font-size: 36px;
            margin-bottom:10px;
          }
          .total {
            color:#B61916;
            /* font-size: 40px; */
          }
          .unit {
            color:#B61916;
            /* font-size: 40px; */
          }
        }

        .footerTip {
          .tip {
            font-size: 30px;
            color:#999;
          }
          .money {
            font-weight: 600;
            color: #b61916;
            font-size: 50px;
          }
          .unit {
            font-size: 32px;
            font-weight: 600;
            color: #b61916;
          }
        }
      }
      .button {
        background: url(//fasthuyitool.jidiandian.cn/web_static_assets/sign_static_quick4/fiveMoney/five_Button0.png) no-repeat;
        // background: url('../assets/images/btn_renwu.png') no-repeat;
        background-size: 100% 100%;
        height: 80px;
        line-height: 75px;
        text-align: center;
        font-size: 32px;
        font-weight: 600;
        color: #fff;
        margin-right: 10px;
        &.btn1{
          width: 200px;
        }
        &.btn2 {
          background-size: 100% 100%;
          width: 200px;
        }
      }
    }
    .commonCard {
      .left {
        .imgIcon {
          width: 120px;
          height: 120px;
        }
        .conterText {
          .headerTitle {
            font-weight: 600;
            color: #333;
            font-size: 36px;
            margin-bottom:10px;
          }
          .total {
            color: #b61916;
            /* font-size: 45px; */
          }
          .unit {
            color: #b61916;
          }
          .footerTip {
            display:flex;
            align-items: center;
            .bar {
              width:240px;
              height: 30px;
              background:#FCF0B3;
              border-radius: 15px;
              border: 1px solid #fdc790;
              .length {
                height:30px;
                background: #FF8A2B;
                border-radius: 15px;
                max-width: 100%;
              }
            }
            .numLength {
              margin: 0 0 0 0.12rem;
              font-size: 30px;
              font-weight: 500;
              color: #999;
            }
          }
        }

      }
    }
  }

  /* 热门活动 */
  .CardBannerMain {
    margin-top:30px;
    padding:0 20px 30px;
    .title {
      font-size: 32px;
      font-weight: 600;
      color: #333;
      text-align:left;
    }
    .list {
      display:flex;
      flex-wrap: wrap;
      margin-top:20px;
      .card {
        width:calc(100% / 2 - 10px);
        padding: 15px;
        box-sizing: border-box;
        border-radius:20px;
        height:170px;

        &:nth-of-type(1) {
          background:url('../assets/images/hongbaoyaoyiyao.png') #FFF0D7 no-repeat;
          background-size:contain;
          background-position:bottom right;
        }

        &:nth-of-type(2) {
          background:url('../assets/images/xunzhangqiang.png') #DAFFDD no-repeat;
          background-size:contain;
          background-position:bottom right;
        }

        &:nth-of-type(3) {
          background:url('../assets/images/hongbaoyu.png') #FFE9EF no-repeat;
          background-size:contain;
          background-position:bottom right;
        }


        &:nth-of-type(4) {
          background:url('../assets/images/dazhuanpan.png') #FEE0DF no-repeat;
          background-size:contain;
          background-position:bottom right;
        }

        &:nth-of-type(odd) {
          margin:10px 10px 0 0;
        }
        &:nth-of-type(even) {
          margin:10px 0 10px 10px;
        }
        .cardTitle {
          font-size:32px;
          font-weight:600;
          color:#333;
          text-align:left;
        }
        .subCardTitle {
          font-weight: 600;
          font-size:26px;
          margin-top:25px;
          color:#333;
          text-align:left;
        }

        .cardTip {
          display:-webkit-box;
          display:-webkit-flex;
          display:flex;
          -webkit-box-align:center;
          -webkit-align-items:center;
          align-items:center;
          margin:20px 0 0;

          .imgIcon {
            width:35px;
            height:25pxm;
            margin:0 10px 0 0;
          }

          .tip {
            font-size:30px;
            font-weight:400;
            color:#ea4733;
            line-height:25px;
          }
        }
      }
    }
  }

  /* 全屏漂浮广告 */
  .MovingEcpmRedpack {
    position:fixed;
    left:0;
    bottom:0;
    height:220px;
    width:220px;
    background:none;
    z-index:1;
    /* z-index:500; */
    text-align:center;
  }

  /* 新人红包弹框 */
  .xinrenhongbao {
    &.modal-content {
      -webkit-animation: modal-scale-in .3s cubic-bezier(.5,0,.2,1.5) 1;
      animation: modal-scale-in .3s cubic-bezier(.5,0,.2,1.5) 1;
    }

    &.modal-content-hide {
      -webkit-animation:modal-scale-out .3s 1 forwards;
      animation:modal-scale-out .3s 1 forwards
    }


    .openRedPacketMain {
      width: 100%;
      height: 950px;
      background: url('../assets/images/xinrenhongbao.gif') no-repeat;
      background-size: 100% 100%;
      border-radius: 0.38rem;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      position: relative;
      box-sizing: border-box;
      /* top: -8vh; */
      &.openRedPacketMain-bg{
        background: url(//fasthuyitool.jidiandian.cn/web_static_assets/sign_static_quick4/fiveMoney/balanceEnvelopeBg.png) no-repeat;
        background-size: 100% 100%;
        border-radius: 0.38rem;
        position: relative;
        .btn{
          background: url('../assets/images/red_pak_open_btn.png') no-repeat;
          background-size: 100% 100%;
          position: relative;
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
            top:24.6vw;
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
      .tips {
        color:#f6f6f6;
      }
      .closeIcon {
        position: absolute;
        height: 70px;
        width: 70px;
        top: 30px;
        right: 40px;
      }
      .btn {
        height: 300px;
        width: 300px;
        margin-top: 520px;
      }

      .bar {
        width:400px;
        height:25px;
        background:#b8001e;
        border-radius:10px;
        position:relative;
        text-align:center;
        .length {
          width:300px;
          max-width:100%;
          height:25px;
          background:-webkit-linear-gradient(left, #ffe37b, #ffc459);
          background:linear-gradient(90deg, #ffe37b, #ffc459);
          border-radius:10px;
        }

        .num {
          font-size:30px;
          line-height:25px;
          left:50%;
          -webkit-transform:translateX(-50%);
          transform:translateX(-50%);
          top:0
        }
        .cashWechatIcon,.num {
          font-weight:500;
          color:#fff;
          position:absolute
        }
        .cashWechatIcon {
          background:url(//fasthuyitool.jidiandian.cn/web_static_assets/sign_static_quick4/fiveMoney/cash_wechatIcon.png) no-repeat;
          background-size:100% 100%;
          width:70px;
          height:70px;
          right:0;
          top:-22px;
          font-size:20px;
          line-height:.54rem;
          box-sizing:border-box;
          padding:45px 0 0;
        }

      }



    }
    /* 微信通知弹框 */
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
            background:#09BF5F;
            font-size:30px;
            color:#fff;
          }
        }
      }
    }
  }

  /* 百分百可提现弹框 */
  .addedBonusModal .btn {
    position:absolute;
    left:50%;
    transform:translate(-50%);
    height:220px;
    width:220px;
    top:680px;
    //border:1px solid #fff;
  }
  .addedBonusModal .content {
    width:100%;
    height:80vh;
    margin:0 auto;
    position:relative;
    background:url(//img.ibestfanli.com/sign_static_quick3/addedBonusModalBg.png?v=1)  no-repeat;
    background-size:contain;
    background-position: center;
  }
  .addedBonusModal .content>.close {
    z-index:10;
    position:absolute;
    //top:280px;
    right:100px;
    width:70px;
    height:70px;
  }

  /* 提现成功弹框 */
  .tixianSuccessModal {
    .closeIcon {
      position: absolute;
      height: 70px;
      width: 70px;
      top: -10vw;
      right: 40px;
    }
    .tixianSuccessBox,.tixianErrorBox {
      background:#fff;
      padding:30px;
      border-radius: 15px;
      .msgText {
        margin-top:30px;
        font-size:38px;
        font-weight:600;
      }
      .tixianBody {
        margin-top:50px;
        margin-bottom:80px;
        background:#FEF1E8;
        border-radius: 15px;
        padding:50px;
        .price {
          font-size:60px;
          margin-right:5px;
          color:#F0381B;
          font-weight:600;
        }
        .unit {
          font-size:35px;
          color:#F0381B;
          font-weight:600;
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
    }

    .tixianErrorBox {
      .msgDesc {
        margin-top:40px;
        margin-bottom:30px;
        font-size:32px;
        line-height:45px;
      }
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

  @-webkit-keyframes bigButtonAnimation {
    0% {
      -webkit-transform: translateZ(0) translateX(-50%) scale(1);
      transform: translateZ(0) translateX(-50%) scale(1);
      z-index: 1;
    }
    50% {
      -webkit-transform: translateZ(0) translateX(-50%) scale(1.1);
      transform: translateZ(0) translateX(-50%) scale(1.1);
      z-index: 1;
    }
    to {
      -webkit-transform: translateZ(0) translateX(-50%) scale(1);
      transform: translateZ(0) translateX(-50%) scale(1);
      z-index: 1;
    }
  }
  @keyframes bigButtonAnimation {
    0% {
      -webkit-transform: translateZ(0) translateX(-50%) scale(1);
      transform: translateZ(0) translateX(-50%) scale(1);
      z-index: 1;
    }
    50% {
      -webkit-transform: translateZ(0) translateX(-50%) scale(1.1);
      transform: translateZ(0) translateX(-50%) scale(1.1);
      z-index: 1;
    }
    to {
      -webkit-transform: translateZ(0) translateX(-50%) scale(1);
      transform: translateZ(0) translateX(-50%) scale(1);
      z-index: 1;
    }
  }

  @-webkit-keyframes moveUp {
    0% {
      -webkit-transform:translateY(0);
      transform:translateY(0)
    }
    50% {
      -webkit-transform:translateY(10px);
      transform:translateY(10px)
    }
    to {
      -webkit-transform:translateY(0);
      transform:translateY(0)
    }
  }
  @keyframes moveUp {
    0% {
      -webkit-transform:translateY(0);
      transform:translateY(0)
    }
    50% {
      -webkit-transform:translateY(10px);
      transform:translateY(10px)
    }
    to {
      -webkit-transform:translateY(0);
      transform:translateY(0)
    }
  }


  @-webkit-keyframes redFinger {
    0% {
      -webkit-transform:translate(0);
      transform:translate(0)
    }
    50% {
      -webkit-transform:translate(10px, 10px);
      transform:translate(10px, 10px)
    }
    to {
      -webkit-transform:translate(0);
      transform:translate(0)
    }
  }
  @keyframes redFinger {
    0% {
      -webkit-transform:translate(0);
      transform:translate(0)
    }
    50% {
      -webkit-transform:translate(10px, 10px);
      transform:translate(10px, 10px)
    }
    to {
      -webkit-transform:translate(0);
      transform:translate(0)
    }
  }


  @-webkit-keyframes modal-scale-in {
    0% {
      -webkit-transform:scale(0);
      transform:scale(0)
    }
    to {
      -webkit-transform:scale(1);
      transform:scale(1)
    }
  }
  @keyframes modal-scale-in {
    0% {
      -webkit-transform:scale(0);
      transform:scale(0)
    }
    to {
      -webkit-transform:scale(1);
      transform:scale(1)
    }
  }
  @-webkit-keyframes modal-scale-out {
    0% {
      -webkit-transform:scale(1);
      transform:scale(1)
    }
    to {
      -webkit-transform:scale(0);
      transform:scale(0)
    }
  }
  @keyframes modal-scale-out {
    0% {
      -webkit-transform:scale(1);
      transform:scale(1)
    }
    to {
      -webkit-transform:scale(0);
      transform:scale(0)
    }
  }


  @-webkit-keyframes moveUp {
    0% {
      -webkit-transform:translateY(0);
      transform:translateY(0)
    }
    50% {
      -webkit-transform:translateY(10px);
      transform:translateY(10px)
    }
    to {
      -webkit-transform:translateY(0);
      transform:translateY(0)
    }
  }
  @keyframes moveUp {
    0% {
      -webkit-transform:translateY(0);
      transform:translateY(0)
    }
    50% {
      -webkit-transform:translateY(10px);
      transform:translateY(10px)
    }
    to {
      -webkit-transform:translateY(0);
      transform:translateY(0)
    }
  }
  @-webkit-keyframes taskOneMove {
    0% {
      opacity:1;
      -webkit-transform:translate(0) scale(1);
      transform:translate(0) scale(1)
    }
    to {
      opacity:0;
      -webkit-transform:translate(-120px, 50px) scale(.7);
      transform:translate(-120px, 50px) scale(.7)
    }
  }
  @keyframes taskOneMove {
    0% {
      opacity:1;
      -webkit-transform:translate(0) scale(1);
      transform:translate(0) scale(1)
    }
    to {
      opacity:0;
      -webkit-transform:translate(-120px, 50px) scale(.7);
      transform:translate(-120px, 50px) scale(.7)
    }
  }
  @-webkit-keyframes taskTwoMove {
    0% {
      opacity:1;
      -webkit-transform:translate(0) scale(1);
      transform:translate(0) scale(1)
    }
    to {
      opacity:0;
      -webkit-transform:translate(120px, 30px) scale(.7);
      transform:translate(120px, 30px) scale(.7)
    }
  }
  @keyframes taskTwoMove {
    0% {
      opacity:1;
      -webkit-transform:translate(0) scale(1);
      transform:translate(0) scale(1)
    }
    to {
      opacity:0;
      -webkit-transform:translate(120px, 30px) scale(.7);
      transform:translate(120px, 30px) scale(.7)
    }
  }
  @-webkit-keyframes taskThreeMove {
    0% {
      opacity:1;
      -webkit-transform:translate(0) scale(1);
      transform:translate(0) scale(1)
    }
    to {
      opacity:0;
      -webkit-transform:translate(150px, -70px) scale(.7);
      transform:translate(150px, -70px) scale(.7)
    }
  }
  @keyframes taskThreeMove {
    0% {
      opacity:1;
      -webkit-transform:translate(0) scale(1);
      transform:translate(0) scale(1)
    }
    to {
      opacity:0;
      -webkit-transform:translate(150px, -70px) scale(.7);
      transform:translate(150px, -70px) scale(.7)
    }
  }


}
</style>

<style lang="scss">
.xinrenModal,.qiandaoModal,.zaichiqiandaoModal {
  .layui-m-layercont {
    padding:0;
  }
}
.payModal ,.addedBonusModal {
  bottom:0 !important;
  .layui-m-layercont {
    background-color:transparent !important;
    padding:0 !important;
  }
}
.withdrawRuleMain{
&.tomorrow-box{
  height: auto;
  .tip{
    height: auto;
    p{
      font-size: 40px !important;
      line-height: 40px !important;
    }
  }
}
}

.exchangeModal{
  .msgText{
    padding: 40px 0;
  }
}
</style>

