<template>
  <div class="indexbox">
    <section class="wrapper">
      <div class="bannerBox">
        <img src="../assets/images/bnhg15.png" class="imgFooter"/>
        <div class="flex-sb padding-lr-sm headerbox">
          <div class="leftbox flex-center">
            <img src="//img.ibestfanli.com/sign_static_quick4/index_redIcon.png" class="redIcon" />
            <div class="money">
              <span>1000.00</span>
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
            <div class="play flex-center">
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
          <span class="stepValue">30000</span>
          <span class="stepUnit">步</span>
        </div>

        <!--人行走-->
        <div class="person">
          <img :src="personImg" class="personImg"/>
        </div>

        <!-- 领红包 -->
        <div class="linhongbao" @click="showHongbaoLayer=true;">
          <div id="dynamicPaper" class="dynamicPaper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 140" width="120" height="140" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"><defs><clipPath id="__lottie_element_6"><rect width="120" height="140" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_6)"><g class="png" transform="matrix(0.9960553646087646,-0.08873366564512253,0.08873366564512253,0.9960553646087646,5.470680236816406,32.113346099853516)" opacity="1" style="display: block;"><image width="88px" height="106px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g><g class="png" transform="matrix(1,0,0,1,72,6)" opacity="1" style="display: block;"><image width="44px" height="44px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g></g></svg>
          </div>
          <div class="fixedTitle">领现金</div>
          <img src="//img.ibestfanli.com/sign_static_quick/withdrawType_fingerIcon.png" class="redFingerIcon"/>
          <!-- <img src="../assets/images/icon_shouzhi.png" class="redFingerIcon"/> -->
        </div>
        <div class="fixedRed" v-if="false">
          <div class="fixedIcon">
            <img src="//img.ibestfanli.com/sign_static_quick/header_redIcon2.png" class="redIcon">
          </div>
          <div class="countdown">00:24</div>
          <div class="fixedTitle">领现金</div>
        </div>

        <!-- 漂浮金币 -->
        <div class="task-list-icon">
          <div class="task-item task-item0 task-item-style1">
            <div class="coin">?</div>
            <div class="reward-name">支付红包</div>
          </div>
          <div class="task-item task-item1 task-item-style1">
            <div class="coin">41</div>
            <div class="reward-name">领金豆</div>
          </div>
          <div class="task-item task-item2 task-item-style1 task-item1-animation">
            <div class="coin">20</div>
            <div class="reward-name">限时奖励</div>
          </div>
        </div>


        <div class="bigButton" @click="vxTixianFn">观看视频领150元</div>

        <div class="feedback">
          <img class="feedbackIcon" src="//fasthuyitool.jidiandian.cn/web_static_assets/sign_static_quick4/index/index_feelback.png" alt />
          <div class="feedbackText">留言</div>
        </div>
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
              <span class="total">5</span>
              <span class="unit">次</span>
              <span>视频可提现</span>
            </div>
            <div class="footerTip">
              <div class="bar">
                <div class="length" style="width:90%;"></div>
              </div>
              <div class="numLength">
                <span style="color: rgb(234, 71, 51);">1</span>
                <span>/</span>
                <span>5</span>
              </div>
            </div>
          </div>
        </div>
        <div class="button btn2" @click="showTixianPayler">去提现</div>
      </div>
    </section>
    <section class="CardBannerMain">
      <div class="title">
        热门活动
      </div>
      <div class="list">
        <div class="card">
          <div class="cardTitle">红包摇一摇</div>
          <div class="cardTip">
            <img src="//img.ibestfanli.com/sign_static_quick4/cardBanner_redIcon.png" class="imgIcon">
            <span class="tip">+100元</span>
          </div>
        </div>

        <div class="card">
          <div class="cardTitle">成就勋章墙</div>
          <div class="subCardTitle">大量金币和红包</div>
        </div>

        <div class="card">
          <div class="cardTitle">限时红包雨</div>
          <div class="cardTip">
            <img src="//img.ibestfanli.com/sign_static_quick4/cardBanner_redIcon.png" class="imgIcon">
            <span class="tip">+600元</span>
          </div>
        </div>

        <div class="card">
          <div class="cardTitle">幸运大转盘</div>
          <div class="cardTip">
            <img src="//img.ibestfanli.com/sign_static_quick4/cardBanner_redIcon.png" class="imgIcon">
            <span class="tip">+58元</span>
          </div>
        </div>

      </div>
    </section>
    <!-- 全屏广告 -->
    <div class="MovingEcpmRedpack" id="roll">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 190" width="190" height="190" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"><defs><clipPath id="__lottie_element_122"><rect width="190" height="190" x="0" y="0"></rect></clipPath><clipPath id="__lottie_element_127"><path fill="#ffffff" clip-rule="nonzero" d=" M56.145999908447266,-1.5 C25.298999786376953,-1.5 0.2919999957084656,23.506999969482422 0.2919999957084656,54.354000091552734 C0.2919999957084656,85.20099639892578 25.298999786376953,110.20800018310547 56.145999908447266,110.20800018310547 C86.99299621582031,110.20800018310547 112,85.20099639892578 112,54.354000091552734 C112,23.506999969482422 86.99299621582031,-1.5 56.145999908447266,-1.5" fill-opacity="1"></path></clipPath><clipPath id="__lottie_element_184"><path d="M0,0 L272,0 L272,206 L0,206z"></path></clipPath><clipPath id="__lottie_element_185"><path fill="#ffffff" clip-rule="nonzero" d=" M-0.18199999630451202,-2.75 C-0.18199999630451202,-2.75 19.75,140.63099670410156 19.75,140.63099670410156 C19.75,140.63099670410156 63.792999267578125,145.44900512695312 94.06800079345703,145.44900512695312 C124.34300231933594,145.44900512695312 148.88699340820312,120.90599822998047 148.88699340820312,90.63099670410156 C148.88699340820312,70.26000213623047 152.2530059814453,-2.003999948501587 152.2530059814453,-2.003999948501587 C152.2530059814453,-2.003999948501587 -0.18199999630451202,-2.75 -0.18199999630451202,-2.75" fill-opacity="1"></path></clipPath></defs><g clip-path="url(#__lottie_element_122)"><g class="png" transform="matrix(1,0,0,1,20.5,24)" opacity="1" style="display: block;"><image width="150px" height="150px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g><g clip-path="url(#__lottie_element_184)" transform="matrix(1,0,0,1,0.5,4)" opacity="1" style="display: block;"><g clip-path="url(#__lottie_element_185)"><g class="png" transform="matrix(0.9999936819076538,-0.0035505930427461863,0.0035505930427461863,0.9999936819076538,0.6351470947265625,0.47998046875)" opacity="1" style="display: block;"><image width="270px" height="206px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAADOCAYAAADPLuylAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAgAElEQVR4nO29e5Rc9X3g+fn97qOqq7pbaklIICEhQOZpAhiMPSYGZxmws5OxnRO8xA987DmTZHZir31iNsnu2rNzJk4mzrA5ScjMZkjOZDKMh2Sc+BDvziQYMjae2BvANhiDDQiEQEgGoX7X4z5/v/3jPupW1a3qbqlb3dX9+5xzT1fde+vWrZbq09/v9/cCg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBsMWQKz3DawHzd+5970inPoYmvdn++IoeMly3O9FYfRXVm3xdayTJ2r7L36dv/jOjLjv7uZ63q/BsNHYUuLQD9y/v/ED9XXLdi/M9wX+0N+BcCsaOmKJw+AZWWs+bsRi2MpsGXE07/n89aJ96WPQkYX2Q0QQDH2ddt2u56LidD83YjFsQbaEOPSdd9XbV71tsU8YLT857nl9rxHVav+FapX+axfE0isV6IglecIDcRg8o5GvWBMvPmHEYhhVtoQ4Wv/qS1/Wvv/TRWHksvA7EYcOQ4TT/+Wn4vbvY3XkUiYWWWs+Xjs48YR4/wePDftcBsN6senFoe+8q9669JpGnzT8AB2GAIgo7n+dbfXtK5UKlIqlVCqwpFi69o+5R8avkO8yAjFsNDa9OJr3fP56fXLf4wBxawFrwc+lIaIY4qj8hZadHLPsgdcukwuUCGYlYkmJ3E4gYu8fe1/90z//laEvMBjOIpteHAu/cf/PybZ3bx5tzC8sLY3lcJpiWUkq5FtBbo/qldxQ/+Rnv30ad2owrDqD/9dvEgTqAEAUeVie3y0NHYOwOj9XQiadIRGL8P1+sRTSolwsacrUi1sQe/Dd5teB8ZXdpMGwNsj1voG1xnLcK/uaXDNpQPfP3q14fKUUxTJgE1GM8P3kZ3HzfdoLza4tPEm9+ZFPvPf0bsZgWF02fcQRh8HVuR394X02+liOPLJIZS2ilh4iKf4X4Cv65Asf8489/3HCaD+Ofayy/7IH+daj95kiquFsselrHI3P/bHuqm9Ei4i2Sg6ezpd9OfSmPyt5n1RSrU55g9Br5Y93/tZPfUOfev0mYg+rPokc346Y2guA3LXnJjG597+vzocwGAazKSMO/cD9+1vHXtwDoE926hsAInQAf2WpSPFLvxwJlF277H0ywfQ8HiQNANmYvSlst1BhC6wqMq16yFodInWPfuD+f2giD8Nas2nEoR+4f7+qz38hdic+GKKwRJ32q68cddjXOScMwQkR4QrrFr1f+mESWEkE0yuW9PU1RxGGISH9fT78kyfQXgtRrWFVXYTlIG0JQoJWV3PTO38DuHP5N2EwrJxNURxt/s697w13ui+ryfM+aO08F3v3+djnX0L13P195wovyc4Eqm8r7l8xw4qsy41uUvmEaSuLg58fCoMGakeIWpgFQDo1RHUcObGt83oVg1Yf0XfeVV/5BzAYls/Ii0M/cP9+57qdD1gTE0JM7oHaDsTELsTUXuzzLz7Y1aIiPNBxIgadbgWE7hQpB0mleGxlNzpALMXjA8QSBo3kwa7uAFHY6XNpd3+Wf/1Lb1nZzRkMK2PkUxVVn/+CrO0XujKJtW0bOFWQFlI20ZN7YGIRZj18K9AuiOQLWviS6QEC6JUKCoTsyEXIofLQy3XyCpp7q7s6qYscqyEsByXc0be/YeQYeXEEqvJBBxCVClTqkI37UDGi0hn1WmkhdNkFeusSg0SSHUtqCf3n9+wXJe1VmkQ2xZ+9hIXOYCryKfsnEtUaVm1Si0pFCHkaaZXBcIaMtDia93z+euJEDlIHSY6fIa2kaNhDHiWUtXgUC5zFfUUyOfQKplcqvccL0Uomlb6IpURaeZoCiJ3Jcce1Ea4tRNYrVZqYw3B2GWlxAKhAoVqepqaF1V7okkfcbKP9MBnYlqHV4PRgqWbUpfpnrCRaKTk3iDoxURJtgOOOd8kDINYutm0n3dll+k8ojDwMZ4+RFkdt/8WvLy4+DyBc1yZmDzTbSdoCCH8hGRFL2hRLE3T65Tydzl8Fsai6gKoLYYwIory1JnnjnsglF81gaQC4liKIuwVQlIbl2gi3ghyrdU6QNsg16MRmMAxhpMUh3v/BYwv/5lN/raq190RzM1hBpK2JCUFsoX0P/6kjhZM9yP6gL7crec+XP3hni+q7rqay20bUMgkkzaNqOkTN+UR/1kBlbzvofcrEUjgniza8qPyfx6q6yNp4GnGkojHyMJxFRlocAFZ8zudir/WeiFOodkvErQWs2qSOWwtCz8wDE3mLiogV2lGI5QxZKXzpg5t8tv1P11Eb357sUzPpsUQa+MeR4yDtaezP7EQ1dhL8y8Oo2anyqKZkgF0QS1xr6UKnUyn8kxXTFBWDXT4832BYbUY+Ma5/8rPftuast9qtxefixVNEC6cIp18TNGaPipPn9J2/LGlk6Ajrn1TY/rFrOxEGoF59iuCph4meeCTZfvAC6ujR5KA3jeSbVH99G+Lvi6H9M4q4VlJ7yaINgKqdFFP9YBHr3CT9ikQiB9E7XL8YcXiti1fwKQ2GFTPyEQck8tB33nVdfLP9OUvF7/eaP7oUrXEvuwieLjTFxgptxYiopGFW2KC7R6m6/8cU9sXjeWQRPPkwMmpgnf9m3Ave1HWuPnUc9ewRlDuOfQBoHGbsNmhzGfphPVgePWlKkcVWYRLltPOX49rISqEruklRDOvAphAHgLjv7ib38avArzbv+fz11ct2/ZJ8+/sPqrc+Q+OPn0a+fnL4BYrS0Arrn05gn6NgYQG1OI86eQT34msHv/+ufYhd+2BxnsZ3XmT8OiCaZuy2Z5mZ3k31iakB7zs8GvGDxf6XiAFzn6rYiMRwVhj5VKWMbIo93fo7xIE9TP7zO6j83NvAkkm0sUSzqXddk8qlNlQW0aeOE82cxE6lof0QtTiP9rtn7dJ+mO+rXXkxje8A9k6IptlxZwS6XwDdF4j6Ip4i1V0VZKVKGAyZuyOXhtw7/M0MhjNjU4oDoHn4h1Oc+m8w+3V08Bz2tVdT+6N/Cj9zdXJCcaxK9lgrgjhm6o49oI+CN03YbOVpifZDGL8Esfen0EErl4VanE+ey0kAhN+gfmhPIg8A7zB8KFxSDrowrWAULfQdF24F6dT69ufkfVj07uX8jgyG02XTisN77oJK6693E594GX3yIUT4JITT1G7/ALX/+1Nwe5p29EQf1d0ewj0OQHRktquWISoOeuZJhN2A6rmJLIIW0cxJ5IF3IXZcn1wynEGHM1TPEai5cwGoXfsGQRSmgor6N0Ckc5BK4dOL2KnQgY90ZTK4rdj5qxe7svP0f3MGw9JsmhoHpEshjDVuH7vg4IHW4xMXxCdOsfAn6LHLjwvnhu9h7Z1DV2dh+yFqt38Afuqn8L77deJ7H0V4AQgfcce5ED0FgLVtT9f1tR8i/AaoGeROh+D7Sd3E3vtjyfGZb6NOHkHWbFQrkUHr5ZDx7UA0jbphN3ynZMR7Ki8da6ToSYHiVv/5ZXTXN65a3osMhtNjU4hDP3D/fm/+hw9xzs5L7cq5xPYYot1pd40fnUR9cxF54zNUbnsNUXsVXT0fxg5RfcdPwjt+kvDJb+qFP3hYTO1NVmNUpxzkeckkQFntQgctBKBPvoDYfSi/vty1O+nb8cJXwR1HtSJk2uNz3J0Bez9E07iXnCR47ACuRV8XcR33t/QoMQeAsJL0RLhJa4qOIuJAYzkRkBZKM2moGIivPu1fpsGwDEZeHPqB+/fPHX/sG/buvQdtq4qoT4BwcG+LdPj/BiJiEWQbghD91RjvoZcIbj7O+I+/jLW3IxDnsreI7Z/dh7T/FUQQBVUcP0QHnb/4wm8QNlvI+aexdx/COfcgYjJpMo2++wAScmEAyHbSUUydcpDboXqOoBl5YNXLB7QVBr1Z506x6z2X0951UbLjucc792HbWG7axV3FScKZvVRaIC30wol3mvlHDWvFyItj8cTf3WtN7jjouDaapKlS1seRU1VhfXCC6D5PMP9acnJaO3AfCQgeOYE81MC+oyCQ+Qi2zUA0DUwkEYbfEYEOZ3AOZSsUKMQ5SSlBvfoUMmjkouglCqpkfTqjUOFUfdD90wJWL6vBT95A9fK3wNQe4leP0j56mHF/gfZKfzFJJzAjDsOaMNLi0HfeVZ8Ogve4gHaqyRycto10q8SxhZg8h/o/nmT+dxd1pf1y3wwZ6oUFgl9fQB5qwI+9gtjjYxVm4sukocM0cmhF8OyXUfZ4Em2cszPtbj4L11yDevLJjjyas50L7SRpmgVs2QZc5JsqqKuvoHL5eVjnXgg7C3Oj6lMQPEfYeILKG0cIXl8EZ6L/FzCoOApgV28B/v0yfo0Gw4oZaXG0rrvkFst9Nn8uKxWE5aDjCEhyfqs+xvZf/gei9Wv/AfFGCxHFaNvKf0IiEPHsLL7fwPkXSVoBHWEAnbrFoduw5l/I90c/eAH7xPeS9y+7yeYcTr0GJP046r/5c9iHru1MOEQqCn0KwmmIZsF7Fd16DXX4eRqPTsPMFNW3lYhDRSDT62TD9jtFUlMgNawZIy2OyP7m/uTP+RCkjaw5jP3yHXif/feIaC5fnb5rlXqdFECztMJ2vbxlRAaNXApCLaC3HULuTIqS9hWH4IpD4E3D3369c73mXP5Q7AwhgmB6F5VdNtpZgGA6/RCzCLuBbswRn3iZeCag+ehrhI9bNOabtD3F9redg+Xa6MAHq4qwBvQczTAFUsMaM9LiyHAqdjKhj+9jpYvAW1ac1AtVBEpi7diF++lbdfTrXypfhEo4EC/QfCLAfTfI7a/BXGdF+TwFeea/Ipqz8M6PweQk/H//LUlL6lNdsshobL8pX/A1mDsfqQ5TmX0J/2SEOPkS6oUA8VIS9YReIqpICwjSiXykm8816lYtbDuG3sWssygjizogKZA+cP9+s8aKYS0YaXHY0Y3HAvdZQj/CyiL2OIQ47UhVc5P5KpQCqXDedJUIbv0h8qGn+y+mQ7AqNP7DDFPvTnZFtXNxp3/QfV5Wu5ic7DxvzvVJQ88nP+s/cRVwnOgVQXTfd/G/fBxtizxNElGMBsLCwDsriin2LxU7FbJSA6dKFFm40aABcz3J0jveauochjVhpHuO1r7z/N+g9VEd+FjZePmwDVGMopJEG5DII0pSkbFbbsjTkjKEO0Hje0n64+4+ihrbkRxoznYXPP/L78HX7+sShp7vbADh2/9B3lz7oz8ojHSlJ00qEIVJu6qKOv1QLDfxeyRcrGrPnBtq2IztZsyKYW0YaXGI++5uOpXKnynfI1hYIG4uoHwf5beR+BB6KM/rfLmiEDmxjXjHeYk8ihtQcSyqDpz8jbm8q7g81NPTM4sumnNw8iWgWxYZ7Qt/Bveq6wBoPDoDL/o41XFcq7B2S4k8bEcSpfcbBRHCqiErVdyqlQ+pF5Weptys81cWcag4m9jn8hX9Qg2GZTLS4gCoPxL9WhZ1RM0GcXMBoUNUq4FqNxD+AkTpX/vIgzjC3lP+114LG6c6Tq1icfy30/4b0TRctZ+G82NDo4siwTWfoPb3r0zOO77Ayd+YY6xe0ipSQhZxAFSlxdieGsKtECob7VQ7Q+qLM5xng9v6F5kyLSuGNWHkxSHuu7u5fd8NNymvfVQtzBI1G4Qzb6Aac8Szc1q1GsnjxUXidogKvKHXqzgWdnUcXvQ59s/G8/3j14G68eM0tt9UKgtIogw+8rtUbkgm4NJHfshL/+g5ahULx3Fw3UpShF0mnooR+5JailOxkxYV2x48+5eQ3XWOODQtK4Y1YaSLo5B0Alv48rf+ePH8l4KJfW86ChwMvRYi9NBOVaAmkWEFLRoI20aH7aTfxpBrOtVEGAvPzXPsww77fr2JPFRHjs8y/rYd8PZPo8Ix1FzS8mHtvQAxvp18wLuaofXwM7z2+cM4tmRsYgqsNL3I6ivC6am1dP9TBHESRWQtKqJSQ6aLTC8b07JiWCNGXhzH9j/7XTnfvkTOg7JPwJ69RyUcDBYWENWIqNnAro9j1SfRQPDtl7B61inppeJYEDtMbttGu7nI0V8JqfyEZM97Z7EvmoLKIrKyiHQmktYVofIJjP3HXuTkHz1O+Fw7kUZ9AqxKEm0UKSnQFtOUjLHtu7An62inmkwZWGyKLfYcLVtXRcXwP9x8EDDiMKwqIy2O5kc+8V7PfuMSdtaRE+nf+9bcwTCMgQbOhI9wK0RA1GwgXvGRX31iWdeuVNMven0Cmov4X5vhla8BzFL5iTm2/T2FlMlkyMHxOovfeo7wuc6IklolSXmc6ni/NHoI4uSfwXYkUai6WlQgWYDJrTjJOBzL7tQ3MsSAJRKkBZ73TsyYFcMqM9Li0O8af4duSJyJcYRbQVRrSKeGCluohVmCoy3GFwtNqD84sYKrW1SqNbBiHMehvThLGGvCSOF/bYaTXwPo7/CVRRmO46TysUBHaDH4V+1aEUHa4Yuwu7lV7NiGdCXaHkPaJddIR8PmjzPpSMu0rBjWjJEWhwraV7s7d+LsPoBVm9SyVhWiUoUoJl5c1GOXQDj9mpBffzqVRrE1xSo8HzTBb0zFAZwKMMUYyaLQkZekOmE6h4ZjiaSgCjiOA1YleV3huiKVhyhIpLhvIFMyKYpWxxGValIYHbb0Y/9kxaZlxbDqjLQ4Yi0vs6s1rKqLNbVdaKsOlUqy2PTkOQLA2ncR+tLr8P/uceT9DxZfPeBxL4lg8tTFqiRyAMa6TqtQtRVaSAaJKF90uiAKoSP8cPD7y7FaPuo3eZ+sGTZdxa0YcWQUZwMzLSuGNWCkxZERewHS97C2jyfjU2wXOZaOM4lDqFap3fgWmjPzWA/+3Uqv3vWsE4H0oxksjUH4YYzrVjqpSoHa9rRbu6xqQAxdhGnIPjOpj2G1Gfl+HNprQeyhowjVbiCjVjo2Jf1LXJ8Epwq17Yy9++/BuXWEVktup0/csxX391NxrC5pBIXWFvGmXek6sVUha+Od/hvFNCUThVuy/GPWMcys7GZYZUZaHE6l8mdZj9FobgbVbKACDxUEEHpJoTAIUolItFWHHTuWde3Vk0pRIL1S6ZVL4VVRSHVXJa9tAP2tKcuRhoqzSX0MhlVjpMUh2uN/Hi42UAuzRAuncnkIf4F4dgbVXEwEEno9g8HiwVt2fNj7rmLE4peMt4vSiZbHtu/q1DZ6sUs6ghUFUryHoPWRZd+QwbAMRloc9U9+9tuuK/5a+V6XPKKTr6IXXoeFN4hnZ5JtcRERN2GmfF7QnKI8emWySnIpUil+/+MkZbHH0oWldyTzGAqr0M3cGtCaUvpZOmNX9MKJdy79AoNheYx0cfT4Te/bP/fqixdNTJ2DYgoWZgm9FlHanyNpkXgjOVlWdTj9mrBO9Pe9WJJeSQySR3EBaTG4SFqUhxd1C8BhkQU/sYncO97pYt6bpmgFWEunKZB2BGv/DKYjmGGVGGlxbPvo5b8Yzr5+SexMQBARBw0s14PFeayJbcSLEFXzESTC/n++3b0EY9YpS0flj1dKUSSDpNKzOn3VivGC7ijElSGBcrBqkxrbKmlNscsjjqC7x2lnOoEAFalP6Qfu/7/MuBXDajCy4tB33lWf8/075I7zsCensOvjqEARL54iXpzHfz7rMTrL+KIPPziGiHsWGehaob7k8WrIJL9mf5TiBYqq2y2AkAmyiY2Fa3ePxSsOpdcqmag4CPqjDq2SiYtU5zNJW8I7bvgM8Okz+yAGwwiLo3XD9sutyfigqNaonHtR0mvUctDxQVRjjnDvHPLrTyOeeRlUfx+JZTFILMIeHKUsVzI6oup2nxeGIXGYVEutsuLnclA9kY6KII6yx5/SJ194ks/8wZfEfXc3T+8NDIYRLo5G4vDbgHz1dlGpIie2Iab2IndfzNilb8b92E+jr7yg63VDu3cvl+waxdXnBz1e4jq9aUo1W9Hx3KkBc2+UFEeDoJOmxGE6A1iUbIFHHGh04KHbDfQbv/fHzc/8aWP+Wwd168G9X9QP3L9/BZ/cYABGOOIA0IGPClugPEE6DZ+0JdR2QBSiKwGVX/hZ/H/5b5Cvvpa/riiPsnEjwwakrewGh8vDCyVVR+GFsrAvvcd9k+io5PXFofTFruXFgqhSeaSh4wjhN1FxCGEbr/plZEUjKyFMiQ81/f/1Q60H9/6n6E9++imACWvs9000YliKkY04bP2mR5Xvob0W4ewcym+jAy/5YlkOjE0gq1WEWyW+evA4L6GjvjEk2b7e56tNrzSKTB3aV96HQ0Wdomc2t2i2pf1VVBAk0gg8tO+jvQVUYw6tH0VWNMLuzqbiUH4oEOo3A6F+c87m9fmPfvLh6Vs+fMWqf2DDpmFkxVH/5Ge/nc01qsJW0n/j1CmtggD8VtJrNG3KFBdPdV64QgH0DkhbK6mEYXdPsKwPx0DiMCmCZqmJVnmkIXWQS0P5bZTvEzcXsMcfLC2/hM92eqTHQbMextEt+tzJZ+Y/+smHmx/5xHv7X2HY6ox0quKqnR9oL5583IFsHRIh3ngF6uNJugKIwEO/ONtftCwraK6w9aRXKmX0pkJFgsAHMdb3mkA5MCXLpwnMW0rsdEyOBJVKJ/JQSiLTFEX5bbSXTeD8LG17unTKRPVEeXARxtEtUji3ND/26RfjIPxDk8YYMkY24oAk6hizdr81n6h44RTR9Ani6dfQsydg4Q1Uq4H1ve8nLygWL7OfxceZPIrHes9ZIWXRiVDJhMkVx0LqNlL3r0Uvx2rdO+JC6wh0ip9RkP5MZnAX/gIq8NC+h/YahLNzRM0GzuQP+5yofEHw8MW0gwjaYf8G+DpERepiIa3fnLN5vfHRT/07k8YYhs3ZOzLoO++qN2+2PxcGwa/IShU5OZX0HHUl+vBTWA88dfoXL0YiSzW7riBi6Z2Dw4+S13lhEnHs/91/kk9MJN3OUpT0dj2HLqlk0iBsE84vEi2cIm4fw33rX/QFXMoXzH3h7VT97QPvsypsdNZsbElw0oW64+hvbKV/r/4ff/8ry/rAhk3FSKcqGeK+u5vN6+79ljzWJqi9BLSSTl8zM1jHXkWnna6EsLoeL4uyKKX32LDXlaVAOqLi2EMn8BGuLbJURadSEJbdiTrSnzqOEJaNTtMT7XvJchBegPDm0F6L+p6niUr+pfWrUPW3E7VbAFR0d2oU1xw8HYEfUbVdNECswJJIx75FWZg0Zosy0qlKkbg1sSdqLurqq4Kx7zeTnqLHT3Wdowu9NrWOh26nTW8fjgF9O8qkkTXF6p5lHnVBEmWbylpPfC9vwo0WTuGfegOlpwkPPNd3i8oXzP/Vpbk0yrBaIVYrZCwAghARRIhYJfLwQghjlBAXi4pr0pgtxqYRh0AdyB9HyZdB6AitY1S8chEsJZXTlksqj4rdWWQ6S1Oyzl+VfXvRQaR1nBU943Jp+H5yzPeSxbbDTjFUey2U71Hf83Rp9hS3bOwje/LnIlAEoY+I+hesCqIQvAjieKBA7DCoa0t+3D2w27TGbAE2RaoC0H799RstwA88xgChQvwwxk4nysnkIa1OiqLiuOv5chkmjywdWioV8qNOealiR/iRnUcc1cuS9WqT6MFLWlcK68zqOCTpXh/m5wkd5s2uUbOBDnziIMLf83zpZIbxtzo9akXae9WKYiLA8T10Ojuio1y0JQEFXoSwLTQxxDHCssCS6J5rmzRm87NpIg7Lb72r+Dzryh3Hmjju/NdWcZxvvc+LkUnx+EooSmXYZtMZPxOH6TwccTJ7+tj2XUhH52bRcdi1ZfsI2xC2O9LwAqJmMrGR8j0qu76PrHR/rbM0pfWdZE2YojSKCD/ZojBIoguAWKGjGBHGiEj3RSAiiJIoJIxNGrPJ2TTiAJD+XIt2SOj1Fy0zgWQS6f2Z0SuV4r5euZwJEcmf9EwaGb6nETu2oXwfodP0I4qS6CMVRb4ByveTc6M2xB62DlC+B81ZxJsPl6YpwcMXY8916ii90ui71zDoSk90rDsCCeNcIKTyyAVi0phNy6ZJVSDp9diK2kzGTcIwxNY+xRZnW5ZLo1ceRSyrv8V6KXlk6U9ZKpS9VsQR2kqaWaNYEUUNImscQp2spUIiBVmpJALpvQe/IxwRtYkbi0RBhPYj4iCict7RodGGTRJt5NIoFmut/r8nkYqwsZPfZqzQlkxmCLAkgjgZdBdFaFuYNGYLsCnEkczNMddqBFEdoOUJHJIvZDfDA6xMLEWGSQWWFkuZZHJh9UQbOlgExpGFOTqKgsgQURvsseQnEPkhAlALs4SLDaxwEXXRS5QNdVl81sKec/MUBeiShhMCYYgUyeeSlg0y/YySvDk2S1806RQjVvKZhBYgZF8dJJNN/rkcK0lj4HONj37qP/vHT92982+++IP+OzZsRDZFBzCA2Y/f1Wg05ut6dg676RGHi3nNAMC2hwugiF3yFzc/ViKXMixLDJVOpJJffRJtJI/DWBOocfb91s+CVcW2l06LIj9EhB7BwgLx4jw0Z7HPO4p13fPlHb7+8FLsI3tKow2nENhIIRJpJE+637S48HX6u8qlkP4UqVB12mGMLPKyZN+5plPZ6LEpIg4AJw7/M/BxgCCOseheojGKyh1ZJpT+SKXI0mUhW+qB0siE0fs+Ye/5sdc1k3mUToduV5z8sQg9BKD9Vt6KYkFftJFJo/261dUEm77xwM+h0v4jkh6BZMKxrSQCgSQCKUQWJo3Z3Gya4qh//NTd2ePIFvhe579lGOu+LdsfRWLJrUgUq4FbflyJgVvXNXquH6hxZGFUbNxYTGoXaVQhQo+4sZg/DoMI7bcIFpt5iqLFEZypkjUXAP8rh4Ce2sYSyGLXdtXzVY/irmbiokTyQmoQo6PYtMZsMjZNqrF08fAAABD/SURBVALw8rs//IhuWTdF8TTCC9BBgFALXec49vJd6ZTUL3pZSQqUUZRFLrFIEWub2jUXsOtnbyx9nfbTjm2VWv6Y0APfx5t+A7XYwn7Po7jndMSRRRtxy6b9a+9IXp+Jo7e2kZLVN6BHHJ0Tyj+Y3dNjxKQxm5ZNk6oAHNh93v/40tHDh+PYPU/LCBuIdfIRLZGE3WE0fLGkolj60ofec4ekQEvRe+3sPiuHzgcSSUTCxdZB32u130qEAYk00uZnMflaV7SR9XCPW3be4UsEwz9/kVJpQBJ5lMmjGH2cThpTONekMRubTRVxQNLC8srJH/1Xb651k45b2J6HioeMxxBRn1yGsdKIJYx1/rOMTGSxtomFy97P3Iw7Ue85qb8bONCRRnN2yWhj8Z7r89aUpYqi+WPLRsXRYIF0XjT4WEkhFQZEIULmAiFrjcnO7YlAIqymE4emNWad2HTiyHjhmltvVKH/OTU29m7danQds0r+ig9jOUIpspRcilFPJi0AadXY989uS0/qkUVZs6wfoAIfP/D6WlKK0lh4SinnL39cdvUSXSJNWVIWZSxXIHD6aUyxxcukMevGphVHEX3nXfUTLx/e0V5oHZBCnKci/3Kl9I1RHF8iJBf2nm/pgFi4yxZMJpZY28uSTFEWRaZuv5Hxq87plkaJMCCRBkC7MZ9HG8U0JZMGsOxoA7rFsaxoo4xhAoFlSSSLQIAkCllGHURqbdKYs8SWEMdSZGKpOuMT8zNvXKEi/3LhVK4IPe8STfyWQa9baeQyjNo1F7Dzp69NnhTqF9CRRBEVJMd6o41ipAHQekUj/iQptp5xUfR0WI00Jj3PpDEbByOOZaDvvKsOMHPiRxfMTp+cCr3gSrfq/lgc+of8wH+77dh9MwsvFbWEHjhViIXLxNXnsetnb+wrekK5NIA8RQGQN36tNNoIFjX+Vw7lHb5gDdOUpTBpzKbCiGOVKEuHhFO5wm8131aWDgHUDx1k+wcuwZ2c7G5eBfD9odKA7mgDEmEAuTSiWdY32ijjNNKYYld1k8ZsDIw4zhKZWAC2f+Cte/RY43ZravcdwhYHgb5+GTA8RYFEHM6tD+WD2YqRBtAXbeggxC607pxxa8qZYtKYkcWIY51p3vP566uX7fqlYHb6gytJUwDinc9iXfd8aaQRzWklHrlBOieTL78O0i7ryxTHWcWkMSOHEccGQd95V33hbW98zJ244JPE3qXZ/mFRR/jWv8KZCruKoZk4pr/tqF3P3CBFoEqlYfsKITtfpnUVR+cmhh83acyGwYhjA9K85/PX67HG7bGQv+Kmzbu9Agknvod482GgO9KAJNrQD54vKwsHcmlARxyiHWJJa+OJo4hJYzY0RhwbnObv3Pve2H3mf3aqlfdARyD+1Q9g1aKumkaWosy/4DL55LWyoq0+cYh0oSUpBCL9y5wJZMPJA0was0Ex4hgR9AP372+e+t4vWo77fuU8e2l08DGAvkgjmImE8/hBweI+XD8piqookU2lpzOqJTtfPCHlxhRHhkljNhRGHCNI68G9X4xD+SGARiMNs+e0AsiiDQDXV7k0MoryyEQhhCyNOmADCgRMGrMBMOIYQVoP7v3i/KzzIegII5hJhul6j+32JhpvGuuTRitJURydCkJKEGLJlAXOYvPsSjFpzLphxDGCNO/5/PUzzr2PZs8zabRnarr22BUSoBpqgnS+0yxlyRgmDxgsENigEjFpzFnHiGNEyZpvTy08dE+2z3tstzc2c2AMQHoRMuj0ErXTZVpkpBJhkKQoRXlk+4CBLS75vo0oEFjXNGb+6NH/c983/vLYKnyKDY8Rx4hz/Kb37Z/b8fJz+lCjUnvsCqmiGDtKWlm6xOGn84cWCqJSyqHygC0gEDBpzGlgxDHi/HXloi9YUvzy7gt26/qOHQJAeJ3ahg4CqmHhy5+lIalAuqKP9IuxZQQCJo05TYw4Rhh95131r37pL56WQh688NrLAIiCCEcpdNCRR8UHpRRWOvV5mTyKkhgmEBjBGkiGSWNWDSOOEeaHl93886++/Oq/3X3Bbl0ZnxQAttfdWUM2ktYUy+pJUaRcU4Ekr9+gEjFpzBljxDHCPFi98CUp5MH9VybLHoQqwC6kKZVWOmpWxbkcMoEMkkd+TPSkN4UaCJg0Jnu+VdMYI44R5YVrbr3xpeeO/O25lx/AkW6XNFS7Iw837PliS6tLHsBQgUBHEplAYJPVQcCkMSvEiGNEyYqi+688NFAalt9pVcm6lyeS6I8+Ose6JVM8Dt1NuLCFBQJbOo0x4hhRHqxe+NLeKw4ezJ6rVrJ0ne13FnoRqUSKUcRqCgTOvA6SXGPEBAJbPo0x4hhBXrjm1hsXfnTib519u4GONFQYouJYiCDps+EWFouS6Rchl0VhWP1KBZKdsyUKqWDSmBKMOEaQH152889HNflvs+dl4rDD7gWgpJB98oDhAkn2FQbAraCQmrynSWM26/KXRhwjyJFrb7s9sMSXQpXWNVqeVmHS7FqMOGSokAgUGkn2ZR4sEChPYZJzTSE1Z43TGOgXDo61odIYI44R5cVrbv39lox+EQaLg1ghe5aKXQuBFK+xpQqpsHZpTOF4UTq+jLHc+rqnMUYcI8z0LR++4o0fHbvPV+G10ElViFWyeDPkCz9nAilGIDKPDoq1kE4NBLoFAisvpJo6CGeWxsRxLhLt2vgy7rqUY9nrksYYcWwCXrjm1hujwP89X4XXDpMHlAsEuiMQOD2BFJ+vpJAK5VHIphMILCuNgY5Eigtxe7Jk4fIxB4AojE7WbPe3z1YaY8SxiZi+5cNXTL927LfbcXhb5HnJv+0AgUAikdMRSNd+U0gdzCqkMSE9uSYQ15y+fe1UNI7g5Hi19l/WeqYyI45NiL7zrvqR73/vC63mwkeCMEiWpywKJH2eMUgg0N+MC6tXB9kShVRYWRqT0ROJhCWn+aIzEXXgCESl1nVcLbS+Eb5+8n8/9ORD31zR/S4DI45NzgtX3fy5tud9ZimBDCuiwvIFAmvXIzW7VvF41z2PskCgVCKRitCV/lP9dGIm7Sa/j8AppH0FgTS+//wvXP7sI/eext0OxYhji3Dk2ttu99rN32p7rQuBXBhL1UHyfaaQurosIZGorJ4BhAXDxwXRDBLI/i/94Zp8x404thhZIbXtt67NiqjA0ChkI9RBNmUhNUMKULpbJkoTFW45jMOul0RW59yg0i1Vai4A2ucbFzz4xZtX/X4x4tiyHL/pffu9Rvu3Gq3FOyLPKxcIdElkuXWQ1RIIbKE6SA8qTvriKN2JPMKemmigQ6SdSKJLHqk4omNvfOCiJ77652txf0YcW5xRKaTCFulQRkca0BGHVgqtVf7cr/a/LqoXdtZcDnzli2v2/TbiMOT88LKbf14T/WqxDrJRC6lw5nWQ5BobRyCZ0HqjDa2SX3isOp2/fBVC2iwbxDGuZeE5AttNKqnactcsTQEjDkMJR6697fbA9/63ldZBMtaykJqds1kLqb3RRm+koeKYUHT+HSKhUW46GK6a3L/tVoim59csTQEjDsMQsg5lTa91W6lAVqlHatf+LdqhbFi0kYtDa5RSS4oDLX500X//y71reb/rr1jDhiXtefgefedd9SPPPPVHrcX5nwzCYFtWrit+9VTaw1Ghc4koNGiFijtRCHSPtUDFWNIiVqrri21ZFkopUMkCUr3HpUyP01lgSmXykjLvb5k9EkLmIb+QMv9iFgXS9df+LAuk7L2y+02e6PTzLo1VGz+8Wvc1CBNxGFZEWYcy6I5CijUQU0hdPsPSFJUu59kbbQD9Eceit6ZpChhxGE6TskIqmA5lZ0IxTcmijRWL4yykKWDEYThDTrdDWZGtPjK3rL7RJQ6VbForovRWB0UbuuH96cXf/eoHV+3mBmDEYVgVjt/0vv3N6dk/XE4hFQb3B9mqhdTVSlP2HDjwvrMxN4cRh2FVGZUOZRulR+qS0cYGTFPAiMOwhixnZG5vZzJYnw5l6z0yd5TSFDDiMJwFtuLI3JWwWmmKWmj/+FrMvVGGEYfhrDFyI3PPQiG1TBqwsdMUMB3ADGeR9K/hdVkhNZviMO9QFqtkyrxYodLv57AOZVIKlOruUJZpoDcD6u1Q1nu8t0OZEDL/0lJMY0o6lKkBdZCiFMoYdLzYUzR7nv2J75VGZAskoJvtR4a+2SpjIg7DujEqhVRYnQ5lwzijaIOzm6aAEYdhgzBKI3PPtJDay7BxKbDx0hQw4jBsMDbryNziORnFSXpOJ9qIbIG0rbPampJhxGHYkGzmkblFigPZeqONYhMsbJw0BYw4DBucbIrDbGTusAgEzk4d5EymOBzESqUB65emgBGHYYR48Zpbf3+pQupGHpmbHcvQunOzxYl6smNKKZQtc2nk57rWuqYpYMRhGEGWOzJ3PQupZXWQ/HkqkmKNo1gMzYRSJo7e+sZ6pClgxGEYYc50ZO7ZLqQWX4cQfZPzFIWR/Eyij6jS6W5VjDbWK00B0wHMMMJkHcp6C6nDOpSh0pm/EEQ6TtKZJTqU9c4+1oVS6EIhNaNshjIhJHEc9aUrQsg8Nelctl8aoVRYdMR0tjt9FTERh2HT0DvF4UYopPZeQ5YIqEwYxf1qzM1XcLNsJ484tjkTV67lwtLDMOIwbEpWOsVhxlrWQXqvU6Q30umSSUEcupostiQte93SFDDiMGxyNsrI3OLzQZRNRuw56f266bKOqThEK/jXFz/50CeGXnANMeIwbAnO1sjcMoEk5w7vDKZLpOEXVqkvimO90xQw4jBsMXpH5p7tKQ47r+nIY9CyB+FYQTauSygltmuve5oCplXFsMXY942/PEa2VkxhZK5OW1+6/pKmrTGrtVZMRj7Ev/hWcYxlWcRx8VoDuqkvtr68ks+8FpiIw7DleeGqmz8XhNHH13JkLvRHIkuhxjvL00fVZEFp27WZGtu+rmkKGHEYDDlZIdUP/YMrGViX7xtSSIVuifRSFpmE4zaOTJKCTBzuWHXd0xQYFAsZDFuQi5746p9f8ew3Lzpw8NI312sT35Wuo7EkOt0obEqSpzGKpFNZpGOUVkRxjEo7mikV502tsYoHblopoijEt1S+AYSqe5awjZCmgIk4DIaBZCNzG63FO0oLqbDsDmXQHYl09vVHIXElbc4dS1pSoqqLI11s12bMtg+kdZp1xYjDYFgGyxmZC4ObcjNkyRD73tRmkDg2SpoCJlUxGJbFxU8+9ImrDj+6vVad/IWxau0lLIl27b40ppjCQCeVyTet+rYstUm2TqtKkOU7KRslTQETcRgMp8XpdChbColAComoJz2/ooqtXSlFFnFM1KobIk0BIw6D4YxYyRSHsLRElJNEMtKytHQcZK0qAOr1yQ2TpoBJVQyGM2Ln33zxB5c88433XPOOd01s33HOn7rV6nxpS0xKnsoUtuL+XlTL07Cx0hQwEYfBsOp0jcxdIgLpIhVMWcSxY3xyw6QpYMRhMKwZXVMcFgUySB6FKKUojo2WpoBJVQyGNePyZx+594pnv3nRtu27frw+se27eQrj2mjX7kphyqSRsdHSFDARh8Fw1shG5vYWUnNSkWz0NAWMOAyGs07pmrkkwgDIoo2NmqaAEYfBsK5khdRIxZPF9CSLNmrKXteZvgZhxGEwbACykblxzb2wuP/NV143Lu67u7le9zUIIw6DYQOR9UilNvaWjTQ2xWAwjADHb3rf/heuufXG9b4Pg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYtiD/P6Lwizx/WJBrAAAAAElFTkSuQmCC"></image></g></g></g><g class="png" style="display: none;" transform="matrix(0.020246855914592743,0,0,0.020246855914592743,150.63082885742188,88.66532135009766)" opacity="1"><image width="50px" height="46px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g><g class="png" style="display: none;" transform="matrix(0.020719999447464943,0,0,0.020719999447464943,32.731998443603516,81.72772216796875)" opacity="1"><image width="50px" height="48px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g><g class="png" style="display: none;" transform="matrix(0.02048914134502411,0,0,0.02048914134502411,35.63221740722656,110.94266510009766)" opacity="1"><image width="40px" height="30px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAFHElEQVRYhe3WT2xcVxXA4d+5972Z8XgcO2ncuvbQ1AmooNIuqqqNgEULEbBBEUFCKiskhOgORSoLEAtWSLAoQqq6KAsESEilRAjUHRUVElVdkio1TVRCURM7ieu/4/GMPZN5795zWDwbUnfshCRILHyk0cyb9+593zv3njMDe7EXe7FryK0Mss6pOln2aZL76gAMfmoBGACGAA80gUWgASwBV0Wk/T8FWudUnfW1Z4hLxy1fuL/4MgfrgYUo1Qdb1I7NU314OyQCa8BZ4A1gGpgREbtjQGv89mnymR8S2vsNB9ohthewfAN8SlIegrSL5U2k+vCyjJ2cxe0P1wFbFFltbb4WgCngryLSuy2gLf3sx4T2d7CM2F0gnz+Nduc3T0bII4SIDIxQuvswUnUg0nX3Pfd30omc/2Swte19jWILnOXNF/4hj34r/6+BNvuDZygf/BFx3eWNtwlLZ5BygqsM42p1dGkayTM0z4m5Yl3FjdxLaeIeEL3mj7x0Dr8v3wW49XkZuAAsbV96tyPu9OQDW7jQniUsncFXU5wXfPUIycST+JFxLC3h0hSfOlw5EFcvkV2+jMVWRa9879Du6wOAAinwEWDczD6QtL5AMxOqj/0ezRxANv9akbmyw631kHN/w2KG2/8Q6eQXcMN1XGI4LzinxOVZYlPR1iujdN+u9LvFDoYB4MD1yP4Z/OPIZ7XyiQdM24TmBUSv4XwxRkZKWPsqNGegPAq+CmHjQ1Nkly9iMoAuPjfWB7Xb1vJAaesg6XeFXtOvS2kIWEc3FvAe/HAdVzuE5SswNohtrOGqNeL8eWJ3g3TyGLr6HsycxUlG3s2xTkDd1Ii7MWrH6AuMPTuaJoLFgGYtNIs4OYzsfwhCF44+gsRrm8tch/JI8WCNWVAFwFlAmx1cqV3B1h1SuxXfh5fYzITMDluwohEDfqWHvPob9A8/gXdeK3Cri9BtgFNcxaGr76HtFSwqpgE10Bgw80Jop9tvs4tp9yIREbMsiGVt0A1caR/xQIJ+bBBN1ovZO+vo6y9jF9+FmCOaI7UDuJFRiIpttmjnEyCCKwdufg/euM1o5he1OQcSSGr3Qh5RjeiAoG/9mfDuKTg4jByehJU59NI/sdhD8xzTgFkxraulSDLcwx/QHTBtih7YADaAsB3fv0h6NpWff+W4f/KryEADKd9F7C3gy4740RRd7+A75QI3fQZdbGJ3e9NyLhbY7GwDuCGQwceam1mRTcBbwBRvvjDT79djex/sC7TMfqdzV4/HxQYMNSlNfJLuhWUIik8D5o3YmkMvXYFhsAGHaYGz6FCD8qFxLDTwo99c2pz2DeAXIrKyQzaBYotdf9x3iQef+OmvyZjv/ullxE8gvkXlyCNYHsk3Apbl5KO+KIgsFEWRu3/j/Ng4bl8P7ME1GXpiGviuiDx7I1xf8E4n2t8vnYjRTiX1SSqfexziFcz20bv0DtZ+H9HNSgg5GrceN8HX65QOBmKzYeWjrz/Nub/8fKc/ArcFBFj9dvIsTk768VEqn/8Mks4Wg3op2XKD2GkhIUdSjwzVSO8CC2vo/Lpq98TXql/55Yu3Crsp4BZSMzkJUDn2OMmk4tzcB64xy8EytNWz7HzNeuf12Ojz86/eLu6mgAAr30i+GIM+jzEJkHy8TjI2iBsoVk4bHc3fDy7OybS2F7489hIX7wTupoFQlP/yU8mXTO2ERn2UyD0Aplx0jtNWTn819mI+dadge7EX/y/xL2XUmprKjx/oAAAAAElFTkSuQmCC"></image></g><g class="png" style="display: none;" transform="matrix(0.047949716448783875,0,0,0.047949716448783875,149.93824768066406,88.02815246582031)" opacity="1"><image width="50px" height="46px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAuCAYAAABqK0pRAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAIhklEQVRoge2Za4hdVxWAv7X3edx53Hm/kkyaNGaStEqrpWpDFVqt1oIPWh/QP4UWX7Qg1R8KYgVBBREUpOAPrfmnPwQjLfWP9K3Y2CYt1k7STEwmSRNn8phk7syde+85Z+/lj3PuPJLJe9JWyILLeZ+1vr3WXmvte+CaXJNrck3+n0TeCSV6+Hv3eD91hyHegthVANhOhymPYbv2EMV/kK4HDlyJjqsGotvWl7hj66M+m30IKY2IiVBikBAxcaE9yje2DcJVzxH2/Ei6v/LC5ei7KiC6587bPdkTmPJmTBuYMmLb8fXqguKgA1PqBhxolj9nWr2UNvyW7lu/JTLSuBSdKw6io1sfcZjHsS2YcJB0eg6pHHBJ9ZQFkNAuKA8iTMd6ov4PIEEPaGF7uPFl+m+741JgVhTEHfzaz7Sy47tEA2hWJj2yG63NILFg4hAAU4qXPOMzwWeK7bqBaOg28E2Yod0y8PUbL1b3ioFk/7n/Qa3u+p0EfWS1Mun4LmzoISph4hATeAhaMIFCx1rM0N3o5HO4mcM50FyGlAaJhu/JYSQA756U4ce+cDH6zUpA6JHvrNXq6G+MbcVVQ9J9r2JDj8QBQQgm8IgJcwjA9myFoAOp5wnMRIJpDdD6JI2jz4GJ8zALez6no1sfecdAfOPEU/jTVrMyyf5/Y4Js/pqIw+CR9tWY3g9CWx+U+hHfwB15CzuZIMYioXGmNcDPHsDPTQAWsmPiw4/9SneUe686iCZHH/WVF24W20nj8JH5GLfGEYifv8/2bELKmzADn0J9AyonMW/vRfsLQ6yxEhoXRiHZxCuFVzKkfY3xs/bnVxVEVT+qp7Z/Hz+jZC34UxPFS11+Q2ChpRd1Ge7EG2iRZsVn+EOvQxzAoskvolYjwSUn8Ell/rwL1j9wIa9cNoiqDgG/9DMvxUgsyfFpxDcI7ULGlN4RguHbsF03o9OH4Ohrucd8CrXTsLoXogGkZROmcysSDxdWKVqfKKAr2Gid9cfk/vPZE1wmRAj8FCjp7M42JMLNTCGAeocJEsR7dG4KujKkdxhfnSXoHgJ14FPMzZ8EE6ImQEyMmhgpXw8nnwDAzU1h24ZAG2jrAGT+48DjKwoCPAhsAOr4k0ZtNyS1HNKDZgpkcPwASdBHNLCe6LoteUvi0qVvMgFUTqL1Cn7vK9jjFbJ15eJduXc1qaGpvv98Bl0yiKp+CLi3OEzQxlm1SL1Dileb7ATq1uQFywAe/J5dmC23QNiOnziIvPgUxAESG9K1MZoUsJrM92OasnrFQFS1E3gYWDQRYgUEEwM1cAqmYGvrxvZtBDLU5dVXZ2fR0dfwfgq56bPYntW4jgg2tOEzgUwga2BbexCbAWU4MY6mJCsGAnwVKBUgCpQkum6adLLLlGJcFYwB8R6fZASlEqoJ4oDqNNrRi3S0ox++Ha2+Dm9ux0yBVBJ8Usq9lrl8XFq68ckUUmr16cRuI6mfPZ9hF521VPUuYCOQAknxq0tpZBptqO3pAMB7g8fkMJOH8Uf2o//ag3vmeXTPq+AzgtVrkOMWZBpfnkK3xKhPcYnDN1JM2zrUzSA00OpppDaDn/FvXDGIqg4Dny4gGothpPf+g2hDbKdHwqImuLwV0XpCNjlGMrkf7VJc9jZ+bCd+bAyOVyBxEFl8olBAeG8JezcgehqVdpLRnSbNYpXQ/O2KQFTHYuBLgCsAmjB1IJGueydUOqu4CuH66/Cu8IrL54l4j/SBdheMc/txR3eSrsphSRwuy8hS0IYSDN6ACWfBNSDr8Nno35FqIsbp9isCgY13Aq0sCqcCJmvChMM//KdmU5iOBNs7uATGY1Dv8EmGrxfZqEMxcYBPUtK6RxsZrpoQ9F1P2FlGsxk0GKT+0l8MgIn4c+nb9f2XDaKqq4At5B5oALVlYfq/MU6y4bhkE0TXty+FSQVNNa8v3uHrKS41+EZG1lA0zXA1iIY2EQ70oelJANJ9E2Tje9XXvDb2uV9caLjPuR5RVQt8Hhgiz24REC/ajwALhECIO1ZOntnwZdNHpMEQvhKRjh9C04VMbSwY43G0QJCPoSkPEK0bQYIkb91tC9mhNmrP/DW/HmQ/6fxx8oMrAbkRuKUwOCggzoSxxTYEQnfwhQG36+77ZC2IbVOCfnHTBjdVwdcbeZ9lYkwpRlrKRIMDEDpE51DvIOgj3Qu1Z/P/H8TI8103Dd8jD47XLwRilzupqi3ArSyEnpDXjSa4X3RufkBM1/p6NrN5ovHy0yNBf1XEzGGiutouK7a/TNDfRtjfju2OsO2AngRXQVGorWPu6T3UdryJiS4NYt6AZUBuBN5HPvIhC6HU9IzlbE/Ne6bx8p/WzP7+4buikblSdENdTNfSqSimqMN2teO/g7a6+wjp6OGF64nf1nvndQ9fLMSyIHm63fgRFkIoBFoWGd8EaQKcCVcCQn/qaDr12CdG3JG3PmP7AuxwD7Y7rzPqAnylSjZ2YoluEzJqWsw3e36dvXSxAOcB0WFgDUvnw7lgzpUE/gH7/iIy0jh1H+vqjocEvoiyGbOoLbKCGA7aFnnWtJltlwOwLEiRqTazNFyaIx5ydqgtBoiBGWC7iLy9nDLdtr507Mnxzc3j1oCj5T9y/HKNPx9IJzDI0thvhtG5YJr3TgJPiUhtJQy7VDmz+41Y3KLnsjizZeQhdqaMAS+KiFtB2y5J5kGKsALO6vvjReeKRceSARgTkR1XzcKLlMUGGfLWIyKvD67Yh6Veae7XgHERee1qG3kxMg8iIqnqmMmXHOe+jwWQSRE57xrhnZRz1ZHmRDacXS8C8rky+m7OiTPlXJU9JC9shoXU2oQBOCAi6XLPvluybBtfGFlnYQ3SbOEbsO/gew0CLvBZofBMs+AFwNy7VScuJBf8PlKk5QjgvQpxTd6L8j8lQcdZeJud5QAAAABJRU5ErkJggg=="></image></g><g class="png" style="display: none;" transform="matrix(0.048313140869140625,0,0,0.048313140869140625,32.042171478271484,81.06548309326172)" opacity="1"><image width="50px" height="48px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g><g class="png" style="display: none;" transform="matrix(0.04815428704023361,0,0,0.04815428704023361,35.078914642333984,110.5276870727539)" opacity="1"><image width="40px" height="30px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAFHElEQVRYhe3WT2xcVxXA4d+5972Z8XgcO2ncuvbQ1AmooNIuqqqNgEULEbBBEUFCKiskhOgORSoLEAtWSLAoQqq6KAsESEilRAjUHRUVElVdkio1TVRCURM7ieu/4/GMPZN5795zWDwbUnfshCRILHyk0cyb9+593zv3njMDe7EXe7FryK0Mss6pOln2aZL76gAMfmoBGACGAA80gUWgASwBV0Wk/T8FWudUnfW1Z4hLxy1fuL/4MgfrgYUo1Qdb1I7NU314OyQCa8BZ4A1gGpgREbtjQGv89mnymR8S2vsNB9ohthewfAN8SlIegrSL5U2k+vCyjJ2cxe0P1wFbFFltbb4WgCngryLSuy2gLf3sx4T2d7CM2F0gnz+Nduc3T0bII4SIDIxQuvswUnUg0nX3Pfd30omc/2Swte19jWILnOXNF/4hj34r/6+BNvuDZygf/BFx3eWNtwlLZ5BygqsM42p1dGkayTM0z4m5Yl3FjdxLaeIeEL3mj7x0Dr8v3wW49XkZuAAsbV96tyPu9OQDW7jQniUsncFXU5wXfPUIycST+JFxLC3h0hSfOlw5EFcvkV2+jMVWRa9879Du6wOAAinwEWDczD6QtL5AMxOqj/0ezRxANv9akbmyw631kHN/w2KG2/8Q6eQXcMN1XGI4LzinxOVZYlPR1iujdN+u9LvFDoYB4MD1yP4Z/OPIZ7XyiQdM24TmBUSv4XwxRkZKWPsqNGegPAq+CmHjQ1Nkly9iMoAuPjfWB7Xb1vJAaesg6XeFXtOvS2kIWEc3FvAe/HAdVzuE5SswNohtrOGqNeL8eWJ3g3TyGLr6HsycxUlG3s2xTkDd1Ii7MWrH6AuMPTuaJoLFgGYtNIs4OYzsfwhCF44+gsRrm8tch/JI8WCNWVAFwFlAmx1cqV3B1h1SuxXfh5fYzITMDluwohEDfqWHvPob9A8/gXdeK3Cri9BtgFNcxaGr76HtFSwqpgE10Bgw80Jop9tvs4tp9yIREbMsiGVt0A1caR/xQIJ+bBBN1ovZO+vo6y9jF9+FmCOaI7UDuJFRiIpttmjnEyCCKwdufg/euM1o5he1OQcSSGr3Qh5RjeiAoG/9mfDuKTg4jByehJU59NI/sdhD8xzTgFkxraulSDLcwx/QHTBtih7YADaAsB3fv0h6NpWff+W4f/KryEADKd9F7C3gy4740RRd7+A75QI3fQZdbGJ3e9NyLhbY7GwDuCGQwceam1mRTcBbwBRvvjDT79djex/sC7TMfqdzV4/HxQYMNSlNfJLuhWUIik8D5o3YmkMvXYFhsAGHaYGz6FCD8qFxLDTwo99c2pz2DeAXIrKyQzaBYotdf9x3iQef+OmvyZjv/ullxE8gvkXlyCNYHsk3Apbl5KO+KIgsFEWRu3/j/Ng4bl8P7ME1GXpiGviuiDx7I1xf8E4n2t8vnYjRTiX1SSqfexziFcz20bv0DtZ+H9HNSgg5GrceN8HX65QOBmKzYeWjrz/Nub/8fKc/ArcFBFj9dvIsTk768VEqn/8Mks4Wg3op2XKD2GkhIUdSjwzVSO8CC2vo/Lpq98TXql/55Yu3Crsp4BZSMzkJUDn2OMmk4tzcB64xy8EytNWz7HzNeuf12Ojz86/eLu6mgAAr30i+GIM+jzEJkHy8TjI2iBsoVk4bHc3fDy7OybS2F7489hIX7wTupoFQlP/yU8mXTO2ERn2UyD0Aplx0jtNWTn819mI+dadge7EX/y/xL2XUmprKjx/oAAAAAElFTkSuQmCC"></image></g><g class="png" style="display: none;" transform="matrix(0.045626286417245865,0,0,0.045626286417245865,149.996337890625,88.08158874511719)" opacity="1"><image width="50px" height="46px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g><g class="png" style="display: none;" transform="matrix(0.04589371383190155,0,0,0.04589371383190155,32.102657318115234,81.12355041503906)" opacity="1"><image width="50px" height="48px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g><g class="png" style="display: none;" transform="matrix(0.04573486000299454,0,0,0.04573486000299454,35.12730407714844,110.56398010253906)" opacity="1"><image width="40px" height="30px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAFHElEQVRYhe3WT2xcVxXA4d+5972Z8XgcO2ncuvbQ1AmooNIuqqqNgEULEbBBEUFCKiskhOgORSoLEAtWSLAoQqq6KAsESEilRAjUHRUVElVdkio1TVRCURM7ieu/4/GMPZN5795zWDwbUnfshCRILHyk0cyb9+593zv3njMDe7EXe7FryK0Mss6pOln2aZL76gAMfmoBGACGAA80gUWgASwBV0Wk/T8FWudUnfW1Z4hLxy1fuL/4MgfrgYUo1Qdb1I7NU314OyQCa8BZ4A1gGpgREbtjQGv89mnymR8S2vsNB9ohthewfAN8SlIegrSL5U2k+vCyjJ2cxe0P1wFbFFltbb4WgCngryLSuy2gLf3sx4T2d7CM2F0gnz+Nduc3T0bII4SIDIxQuvswUnUg0nX3Pfd30omc/2Swte19jWILnOXNF/4hj34r/6+BNvuDZygf/BFx3eWNtwlLZ5BygqsM42p1dGkayTM0z4m5Yl3FjdxLaeIeEL3mj7x0Dr8v3wW49XkZuAAsbV96tyPu9OQDW7jQniUsncFXU5wXfPUIycST+JFxLC3h0hSfOlw5EFcvkV2+jMVWRa9879Du6wOAAinwEWDczD6QtL5AMxOqj/0ezRxANv9akbmyw631kHN/w2KG2/8Q6eQXcMN1XGI4LzinxOVZYlPR1iujdN+u9LvFDoYB4MD1yP4Z/OPIZ7XyiQdM24TmBUSv4XwxRkZKWPsqNGegPAq+CmHjQ1Nkly9iMoAuPjfWB7Xb1vJAaesg6XeFXtOvS2kIWEc3FvAe/HAdVzuE5SswNohtrOGqNeL8eWJ3g3TyGLr6HsycxUlG3s2xTkDd1Ii7MWrH6AuMPTuaJoLFgGYtNIs4OYzsfwhCF44+gsRrm8tch/JI8WCNWVAFwFlAmx1cqV3B1h1SuxXfh5fYzITMDluwohEDfqWHvPob9A8/gXdeK3Cri9BtgFNcxaGr76HtFSwqpgE10Bgw80Jop9tvs4tp9yIREbMsiGVt0A1caR/xQIJ+bBBN1ovZO+vo6y9jF9+FmCOaI7UDuJFRiIpttmjnEyCCKwdufg/euM1o5he1OQcSSGr3Qh5RjeiAoG/9mfDuKTg4jByehJU59NI/sdhD8xzTgFkxraulSDLcwx/QHTBtih7YADaAsB3fv0h6NpWff+W4f/KryEADKd9F7C3gy4740RRd7+A75QI3fQZdbGJ3e9NyLhbY7GwDuCGQwceam1mRTcBbwBRvvjDT79djex/sC7TMfqdzV4/HxQYMNSlNfJLuhWUIik8D5o3YmkMvXYFhsAGHaYGz6FCD8qFxLDTwo99c2pz2DeAXIrKyQzaBYotdf9x3iQef+OmvyZjv/ullxE8gvkXlyCNYHsk3Apbl5KO+KIgsFEWRu3/j/Ng4bl8P7ME1GXpiGviuiDx7I1xf8E4n2t8vnYjRTiX1SSqfexziFcz20bv0DtZ+H9HNSgg5GrceN8HX65QOBmKzYeWjrz/Nub/8fKc/ArcFBFj9dvIsTk768VEqn/8Mks4Wg3op2XKD2GkhIUdSjwzVSO8CC2vo/Lpq98TXql/55Yu3Crsp4BZSMzkJUDn2OMmk4tzcB64xy8EytNWz7HzNeuf12Ojz86/eLu6mgAAr30i+GIM+jzEJkHy8TjI2iBsoVk4bHc3fDy7OybS2F7489hIX7wTupoFQlP/yU8mXTO2ERn2UyD0Aplx0jtNWTn819mI+dadge7EX/y/xL2XUmprKjx/oAAAAAElFTkSuQmCC"></image></g><g class="png" style="display: block;" transform="matrix(1,0,0,1,124.36720275878906,67.89641571044922)" opacity="1"><image width="50px" height="46px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAuCAYAAABqK0pRAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAIhklEQVRoge2Za4hdVxWAv7X3edx53Hm/kkyaNGaStEqrpWpDFVqt1oIPWh/QP4UWX7Qg1R8KYgVBBREUpOAPrfmnPwQjLfWP9K3Y2CYt1k7STEwmSRNn8phk7syde+85Z+/lj3PuPJLJe9JWyILLeZ+1vr3WXmvte+CaXJNrck3+n0TeCSV6+Hv3eD91hyHegthVANhOhymPYbv2EMV/kK4HDlyJjqsGotvWl7hj66M+m30IKY2IiVBikBAxcaE9yje2DcJVzxH2/Ei6v/LC5ei7KiC6587bPdkTmPJmTBuYMmLb8fXqguKgA1PqBhxolj9nWr2UNvyW7lu/JTLSuBSdKw6io1sfcZjHsS2YcJB0eg6pHHBJ9ZQFkNAuKA8iTMd6ov4PIEEPaGF7uPFl+m+741JgVhTEHfzaz7Sy47tEA2hWJj2yG63NILFg4hAAU4qXPOMzwWeK7bqBaOg28E2Yod0y8PUbL1b3ioFk/7n/Qa3u+p0EfWS1Mun4LmzoISph4hATeAhaMIFCx1rM0N3o5HO4mcM50FyGlAaJhu/JYSQA756U4ce+cDH6zUpA6JHvrNXq6G+MbcVVQ9J9r2JDj8QBQQgm8IgJcwjA9myFoAOp5wnMRIJpDdD6JI2jz4GJ8zALez6no1sfecdAfOPEU/jTVrMyyf5/Y4Js/pqIw+CR9tWY3g9CWx+U+hHfwB15CzuZIMYioXGmNcDPHsDPTQAWsmPiw4/9SneUe686iCZHH/WVF24W20nj8JH5GLfGEYifv8/2bELKmzADn0J9AyonMW/vRfsLQ6yxEhoXRiHZxCuFVzKkfY3xs/bnVxVEVT+qp7Z/Hz+jZC34UxPFS11+Q2ChpRd1Ge7EG2iRZsVn+EOvQxzAoskvolYjwSUn8Ell/rwL1j9wIa9cNoiqDgG/9DMvxUgsyfFpxDcI7ULGlN4RguHbsF03o9OH4Ohrucd8CrXTsLoXogGkZROmcysSDxdWKVqfKKAr2Gid9cfk/vPZE1wmRAj8FCjp7M42JMLNTCGAeocJEsR7dG4KujKkdxhfnSXoHgJ14FPMzZ8EE6ImQEyMmhgpXw8nnwDAzU1h24ZAG2jrAGT+48DjKwoCPAhsAOr4k0ZtNyS1HNKDZgpkcPwASdBHNLCe6LoteUvi0qVvMgFUTqL1Cn7vK9jjFbJ15eJduXc1qaGpvv98Bl0yiKp+CLi3OEzQxlm1SL1Dileb7ATq1uQFywAe/J5dmC23QNiOnziIvPgUxAESG9K1MZoUsJrM92OasnrFQFS1E3gYWDQRYgUEEwM1cAqmYGvrxvZtBDLU5dVXZ2fR0dfwfgq56bPYntW4jgg2tOEzgUwga2BbexCbAWU4MY6mJCsGAnwVKBUgCpQkum6adLLLlGJcFYwB8R6fZASlEqoJ4oDqNNrRi3S0ox++Ha2+Dm9ux0yBVBJ8Usq9lrl8XFq68ckUUmr16cRuI6mfPZ9hF521VPUuYCOQAknxq0tpZBptqO3pAMB7g8fkMJOH8Uf2o//ag3vmeXTPq+AzgtVrkOMWZBpfnkK3xKhPcYnDN1JM2zrUzSA00OpppDaDn/FvXDGIqg4Dny4gGothpPf+g2hDbKdHwqImuLwV0XpCNjlGMrkf7VJc9jZ+bCd+bAyOVyBxEFl8olBAeG8JezcgehqVdpLRnSbNYpXQ/O2KQFTHYuBLgCsAmjB1IJGueydUOqu4CuH66/Cu8IrL54l4j/SBdheMc/txR3eSrsphSRwuy8hS0IYSDN6ACWfBNSDr8Nno35FqIsbp9isCgY13Aq0sCqcCJmvChMM//KdmU5iOBNs7uATGY1Dv8EmGrxfZqEMxcYBPUtK6RxsZrpoQ9F1P2FlGsxk0GKT+0l8MgIn4c+nb9f2XDaKqq4At5B5oALVlYfq/MU6y4bhkE0TXty+FSQVNNa8v3uHrKS41+EZG1lA0zXA1iIY2EQ70oelJANJ9E2Tje9XXvDb2uV9caLjPuR5RVQt8Hhgiz24REC/ajwALhECIO1ZOntnwZdNHpMEQvhKRjh9C04VMbSwY43G0QJCPoSkPEK0bQYIkb91tC9mhNmrP/DW/HmQ/6fxx8oMrAbkRuKUwOCggzoSxxTYEQnfwhQG36+77ZC2IbVOCfnHTBjdVwdcbeZ9lYkwpRlrKRIMDEDpE51DvIOgj3Qu1Z/P/H8TI8103Dd8jD47XLwRilzupqi3ArSyEnpDXjSa4X3RufkBM1/p6NrN5ovHy0yNBf1XEzGGiutouK7a/TNDfRtjfju2OsO2AngRXQVGorWPu6T3UdryJiS4NYt6AZUBuBN5HPvIhC6HU9IzlbE/Ne6bx8p/WzP7+4buikblSdENdTNfSqSimqMN2teO/g7a6+wjp6OGF64nf1nvndQ9fLMSyIHm63fgRFkIoBFoWGd8EaQKcCVcCQn/qaDr12CdG3JG3PmP7AuxwD7Y7rzPqAnylSjZ2YoluEzJqWsw3e36dvXSxAOcB0WFgDUvnw7lgzpUE/gH7/iIy0jh1H+vqjocEvoiyGbOoLbKCGA7aFnnWtJltlwOwLEiRqTazNFyaIx5ydqgtBoiBGWC7iLy9nDLdtr507Mnxzc3j1oCj5T9y/HKNPx9IJzDI0thvhtG5YJr3TgJPiUhtJQy7VDmz+41Y3KLnsjizZeQhdqaMAS+KiFtB2y5J5kGKsALO6vvjReeKRceSARgTkR1XzcKLlMUGGfLWIyKvD67Yh6Veae7XgHERee1qG3kxMg8iIqnqmMmXHOe+jwWQSRE57xrhnZRz1ZHmRDacXS8C8rky+m7OiTPlXJU9JC9shoXU2oQBOCAi6XLPvluybBtfGFlnYQ3SbOEbsO/gew0CLvBZofBMs+AFwNy7VScuJBf8PlKk5QjgvQpxTd6L8j8lQcdZeJud5QAAAABJRU5ErkJggg=="></image></g><g class="png" style="display: block;" transform="matrix(0.7593931555747986,0,0,0.7593931555747986,14.26517105102539,63.99956512451172)" opacity="1"><image width="50px" height="48px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAwCAYAAABT9ym6AAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAIDElEQVRoge2Za2wc1RXHf2fuzO56197YJCYOJKkJzgOXFBpCU4U+VIlKRYWWUvhQVaKBSqUPVW3TCvEJqUKionxov7SqqraiH6AgPoCKqvJIH9BAEM+GxA1JbJoAediO4/i13pm5955+mF17Y2xIgxOC5L802p2de8+9P51zzz13Fha0oAUt6MMk+X8aq+4scbzn0/j+5ajPI0FMGr/OsmteFbls4kxN8lR0SiB6/NH1uMG7qB66FmKjmtQeZJ8SxKizL6mYvwXBkkdYfveLIuLP2Kxn0XuC6NADX8AO/Rk7EOEtBCFgAPDJOOJTJFdENUHtBCIV8NXtErb8lpW/u/9sAb0riB65qZ3gM4ewA1HWukA6egA7sBNNRhBSvNYMSUTQdD5BqZ2wfD74E6BjuwKNt8qabds+UBB/cOuLmPaNIhWQAsnAy9hjPZiCIMYgJuvuE4u6FE0VUpcZLq8kt/RC8GOoG3/EtJ5/myx7ePBMgQRzPdDnWj8rQT6DwIAbxx7rISyFmFKEac4hkRCu+ya5ri9hmpoIC2AKIKFDh/cTv/5PksFRgrDtK374yE7dd/XVZx2E1N8LeVe/TYb2IhGIESQMEaMEfSPwxvNIuYtwxechV0QiQxAaTD4z7Y7uobr3NbxvWWbtyFNuzxU/UdW5x51PEH229XJ1XOknRgzeZg19TGAEgtxUO9vWjL7yDHqkB0orCds3EK38HEF7NxIJJh8Q5EN8PEq890WoFPAa3Ot6v/bQfMPMbizWT2ji8ZV9YJrBx5BrwztFTJrBBosIl+WgHKHPPoqMDCCta6G4ArNk/ZQpE3pM6AmoMtm7Gzds0Op/bnRv3PDgfMLMasinvgzA0R1gyqlqQlDqQFPwVU/QvB6z8uvI8m8gm7+Mdl6CHukDl6I+QcffBMi80nYhQT5EwhxBkJIe2IUbLaITPTf5N79193zBhLP9qBXfrwiQ4Pp7oqC1RBBGmKY23NAA4c7HYUMVWdWNNq/CrO/IOrrMW2JyELYQLtuARE2oaYbDr6BGcCmkB3YRrF2LH3789iD6+S7g/vcLMmv61cfKq631+7yziCwi3PRDcIdRlzLZ9yRR1WGOTSIxUGxCrroeWdSG+gTcJGi2rsRWUJfiB3bh+vfhUoE0xsceny/T1N2OmJZh0/3SJhHZ/35AZnWrXDe6X1N9hVjQ6ij+jaeRoBkxEeGi1aQFQ7qqBXdpM8okjB3NIA73oX99EAYGEBdnxrzFVY4DYGqAmACpjOGGQOO32rT/nvtUdem8gwAEEb+EbJ2nvU/jhodRl5JbuoYgvwStWDR1+JKgz/8Dv+MR0sF/4XUCwgDUZZukeqLlH4f2ztqAjgCHGCXpH4SwFTfwx27gDlVtmXcQs2Ldg5rKbgBJFbvjPkiawI+QX74BjQq4iRhXjrAXh2jLMIHxSFBAFrWgLsUdPghv/xeAcHEnQbF40hg6MQ4ujyYHW3X0ybXAD1R11nV72iCy8eXUeHObpIpLBZcK1W2/wY8VER2l6eJNmKbz0NjiYo9PskuPj+Jf2oEe3Auvv4p/eSd++3Okh/bjK5V3jOMmUpAcnHiiHbgAuOV0Mtm7dohuHXtOLXcCaFXRqlJ98j78RBl1CVHn5Ujbanxspy7bVcSOHsAP9+DbHb5DsMko9PeiNqnvr++QJvsKta/dwBfnFQSg6XvVu6jqw9lgHk08lUf/QNI7iqon114mf9EmHGWcDVCb4JqV1JNlqbziF2WVTh3CO0GdQGAwpSg710g+BmIgATap6qXzCgJQ3N1xs8DDarPMqomSbH+KyhMv4JM2pDhO0yUfJezowlPAVXXqSqsOrMPbDKAO4VWIOpaC9oMmSGHt8RpEWruuUdXFpwpyykddVQ3Gfpr/vVrdAuDTQOvP8ldtlmhVAYJjSFDEDsX44QHcSD8+cQQ6HU9eM09EKy4gWpKq2iEhqRBdOfgLwiWVGkQCWKAfeEBE5gjI0wCpw4xsjX6sOXOPpllfTWpFZSnU/FWbJewE4RBIAUwerTj82DjeWQITIoWIoJSCPYH6cUgqVPd8srfl1h0PNUDUPeOAPSLy93kFqevE7dFGTfmTT31XBiPgaidaE5C/8lLCiwqEiydA+1FNEMlx0llfE/RInvEXitXyt5/5VXjhuhO1iTdC1D2z/b12/tMCAdAtnYWRtre/byt6J1abNc0izTvAC1gPYUDYtQxzXoRZUgDNajE35PBvHSHpi2m++WcPlW64Y/cMCNvwWU8Cj4lIMu8gdY1/t9QxORnfjnW3eCut2MwzOueQ0ype852/tNz26+drE/VMh1Zau4/JYBzQJyL/nsvW+wapS7d0Fo5V37rZW/dVdXwGT2GutsHi5Uebr9+6rem6H+2dA6LuDVv7zdXa7RCRsTMK0ijd0lkYqBz9VNC8+DLErKNYbgHIdV1h85tvHMtvvPYo0/Ef1ybq5oBIGu6PA6/N9orpjIC8m1Q1B3wEWAGsIdvL6pN3nAzXCFEPs14RGZpp96yDNKoGtYasLAmZhqmH00wIC1SAvTO98oGC1FWreFeTASVkE4eTs1jjwn975lo5J0DqqpUkl9VuZyaAOkQMTIhIf2PfcwoEpsKtGyjxTo/UE0ICDDfuK+ccCEyF2kVkMLNBWCBpDK95f+M3H6oViX3AINMQ9RK/lpZf840HsHPSI3XVJlpm2jNTEPCxuLEqPqdB6qqtmyLTnvEzS/sPBQhMeScE7Nn+N2zedSbe4i9oQQv6kOl/YSw8s+A3z2gAAAAASUVORK5CYII="></image></g><g class="png" style="display: block;" transform="matrix(1,0,0,1,18.103076934814453,96.33732604980469)" opacity="1"><image width="40px" height="30px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAFHElEQVRYhe3WT2xcVxXA4d+5972Z8XgcO2ncuvbQ1AmooNIuqqqNgEULEbBBEUFCKiskhOgORSoLEAtWSLAoQqq6KAsESEilRAjUHRUVElVdkio1TVRCURM7ieu/4/GMPZN5795zWDwbUnfshCRILHyk0cyb9+593zv3njMDe7EXe7FryK0Mss6pOln2aZL76gAMfmoBGACGAA80gUWgASwBV0Wk/T8FWudUnfW1Z4hLxy1fuL/4MgfrgYUo1Qdb1I7NU314OyQCa8BZ4A1gGpgREbtjQGv89mnymR8S2vsNB9ohthewfAN8SlIegrSL5U2k+vCyjJ2cxe0P1wFbFFltbb4WgCngryLSuy2gLf3sx4T2d7CM2F0gnz+Nduc3T0bII4SIDIxQuvswUnUg0nX3Pfd30omc/2Swte19jWILnOXNF/4hj34r/6+BNvuDZygf/BFx3eWNtwlLZ5BygqsM42p1dGkayTM0z4m5Yl3FjdxLaeIeEL3mj7x0Dr8v3wW49XkZuAAsbV96tyPu9OQDW7jQniUsncFXU5wXfPUIycST+JFxLC3h0hSfOlw5EFcvkV2+jMVWRa9879Du6wOAAinwEWDczD6QtL5AMxOqj/0ezRxANv9akbmyw631kHN/w2KG2/8Q6eQXcMN1XGI4LzinxOVZYlPR1iujdN+u9LvFDoYB4MD1yP4Z/OPIZ7XyiQdM24TmBUSv4XwxRkZKWPsqNGegPAq+CmHjQ1Nkly9iMoAuPjfWB7Xb1vJAaesg6XeFXtOvS2kIWEc3FvAe/HAdVzuE5SswNohtrOGqNeL8eWJ3g3TyGLr6HsycxUlG3s2xTkDd1Ii7MWrH6AuMPTuaJoLFgGYtNIs4OYzsfwhCF44+gsRrm8tch/JI8WCNWVAFwFlAmx1cqV3B1h1SuxXfh5fYzITMDluwohEDfqWHvPob9A8/gXdeK3Cri9BtgFNcxaGr76HtFSwqpgE10Bgw80Jop9tvs4tp9yIREbMsiGVt0A1caR/xQIJ+bBBN1ovZO+vo6y9jF9+FmCOaI7UDuJFRiIpttmjnEyCCKwdufg/euM1o5he1OQcSSGr3Qh5RjeiAoG/9mfDuKTg4jByehJU59NI/sdhD8xzTgFkxraulSDLcwx/QHTBtih7YADaAsB3fv0h6NpWff+W4f/KryEADKd9F7C3gy4740RRd7+A75QI3fQZdbGJ3e9NyLhbY7GwDuCGQwceam1mRTcBbwBRvvjDT79djex/sC7TMfqdzV4/HxQYMNSlNfJLuhWUIik8D5o3YmkMvXYFhsAGHaYGz6FCD8qFxLDTwo99c2pz2DeAXIrKyQzaBYotdf9x3iQef+OmvyZjv/ullxE8gvkXlyCNYHsk3Apbl5KO+KIgsFEWRu3/j/Ng4bl8P7ME1GXpiGviuiDx7I1xf8E4n2t8vnYjRTiX1SSqfexziFcz20bv0DtZ+H9HNSgg5GrceN8HX65QOBmKzYeWjrz/Nub/8fKc/ArcFBFj9dvIsTk768VEqn/8Mks4Wg3op2XKD2GkhIUdSjwzVSO8CC2vo/Lpq98TXql/55Yu3Crsp4BZSMzkJUDn2OMmk4tzcB64xy8EytNWz7HzNeuf12Ojz86/eLu6mgAAr30i+GIM+jzEJkHy8TjI2iBsoVk4bHc3fDy7OybS2F7489hIX7wTupoFQlP/yU8mXTO2ERn2UyD0Aplx0jtNWTn819mI+dadge7EX/y/xL2XUmprKjx/oAAAAAElFTkSuQmCC"></image></g><g class="png" style="display: none;"><image width="50px" height="46px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g><g class="png" style="display: none;"><image width="50px" height="48px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g><g class="png" style="display: none;"><image width="40px" height="30px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAFHElEQVRYhe3WT2xcVxXA4d+5972Z8XgcO2ncuvbQ1AmooNIuqqqNgEULEbBBEUFCKiskhOgORSoLEAtWSLAoQqq6KAsESEilRAjUHRUVElVdkio1TVRCURM7ieu/4/GMPZN5795zWDwbUnfshCRILHyk0cyb9+593zv3njMDe7EXe7FryK0Mss6pOln2aZL76gAMfmoBGACGAA80gUWgASwBV0Wk/T8FWudUnfW1Z4hLxy1fuL/4MgfrgYUo1Qdb1I7NU314OyQCa8BZ4A1gGpgREbtjQGv89mnymR8S2vsNB9ohthewfAN8SlIegrSL5U2k+vCyjJ2cxe0P1wFbFFltbb4WgCngryLSuy2gLf3sx4T2d7CM2F0gnz+Nduc3T0bII4SIDIxQuvswUnUg0nX3Pfd30omc/2Swte19jWILnOXNF/4hj34r/6+BNvuDZygf/BFx3eWNtwlLZ5BygqsM42p1dGkayTM0z4m5Yl3FjdxLaeIeEL3mj7x0Dr8v3wW49XkZuAAsbV96tyPu9OQDW7jQniUsncFXU5wXfPUIycST+JFxLC3h0hSfOlw5EFcvkV2+jMVWRa9879Du6wOAAinwEWDczD6QtL5AMxOqj/0ezRxANv9akbmyw631kHN/w2KG2/8Q6eQXcMN1XGI4LzinxOVZYlPR1iujdN+u9LvFDoYB4MD1yP4Z/OPIZ7XyiQdM24TmBUSv4XwxRkZKWPsqNGegPAq+CmHjQ1Nkly9iMoAuPjfWB7Xb1vJAaesg6XeFXtOvS2kIWEc3FvAe/HAdVzuE5SswNohtrOGqNeL8eWJ3g3TyGLr6HsycxUlG3s2xTkDd1Ii7MWrH6AuMPTuaJoLFgGYtNIs4OYzsfwhCF44+gsRrm8tch/JI8WCNWVAFwFlAmx1cqV3B1h1SuxXfh5fYzITMDluwohEDfqWHvPob9A8/gXdeK3Cri9BtgFNcxaGr76HtFSwqpgE10Bgw80Jop9tvs4tp9yIREbMsiGVt0A1caR/xQIJ+bBBN1ovZO+vo6y9jF9+FmCOaI7UDuJFRiIpttmjnEyCCKwdufg/euM1o5he1OQcSSGr3Qh5RjeiAoG/9mfDuKTg4jByehJU59NI/sdhD8xzTgFkxraulSDLcwx/QHTBtih7YADaAsB3fv0h6NpWff+W4f/KryEADKd9F7C3gy4740RRd7+A75QI3fQZdbGJ3e9NyLhbY7GwDuCGQwceam1mRTcBbwBRvvjDT79djex/sC7TMfqdzV4/HxQYMNSlNfJLuhWUIik8D5o3YmkMvXYFhsAGHaYGz6FCD8qFxLDTwo99c2pz2DeAXIrKyQzaBYotdf9x3iQef+OmvyZjv/ullxE8gvkXlyCNYHsk3Apbl5KO+KIgsFEWRu3/j/Ng4bl8P7ME1GXpiGviuiDx7I1xf8E4n2t8vnYjRTiX1SSqfexziFcz20bv0DtZ+H9HNSgg5GrceN8HX65QOBmKzYeWjrz/Nub/8fKc/ArcFBFj9dvIsTk768VEqn/8Mks4Wg3op2XKD2GkhIUdSjwzVSO8CC2vo/Lpq98TXql/55Yu3Crsp4BZSMzkJUDn2OMmk4tzcB64xy8EytNWz7HzNeuf12Ojz86/eLu6mgAAr30i+GIM+jzEJkHy8TjI2iBsoVk4bHc3fDy7OybS2F7489hIX7wTupoFQlP/yU8mXTO2ERn2UyD0Aplx0jtNWTn819mI+dadge7EX/y/xL2XUmprKjx/oAAAAAElFTkSuQmCC"></image></g><g class="png" style="display: none;"><image width="50px" height="46px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g><g class="png" style="display: none;"><image width="50px" height="48px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g><g class="png" style="display: none;"><image width="40px" height="30px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAFHElEQVRYhe3WT2xcVxXA4d+5972Z8XgcO2ncuvbQ1AmooNIuqqqNgEULEbBBEUFCKiskhOgORSoLEAtWSLAoQqq6KAsESEilRAjUHRUVElVdkio1TVRCURM7ieu/4/GMPZN5795zWDwbUnfshCRILHyk0cyb9+593zv3njMDe7EXe7FryK0Mss6pOln2aZL76gAMfmoBGACGAA80gUWgASwBV0Wk/T8FWudUnfW1Z4hLxy1fuL/4MgfrgYUo1Qdb1I7NU314OyQCa8BZ4A1gGpgREbtjQGv89mnymR8S2vsNB9ohthewfAN8SlIegrSL5U2k+vCyjJ2cxe0P1wFbFFltbb4WgCngryLSuy2gLf3sx4T2d7CM2F0gnz+Nduc3T0bII4SIDIxQuvswUnUg0nX3Pfd30omc/2Swte19jWILnOXNF/4hj34r/6+BNvuDZygf/BFx3eWNtwlLZ5BygqsM42p1dGkayTM0z4m5Yl3FjdxLaeIeEL3mj7x0Dr8v3wW49XkZuAAsbV96tyPu9OQDW7jQniUsncFXU5wXfPUIycST+JFxLC3h0hSfOlw5EFcvkV2+jMVWRa9879Du6wOAAinwEWDczD6QtL5AMxOqj/0ezRxANv9akbmyw631kHN/w2KG2/8Q6eQXcMN1XGI4LzinxOVZYlPR1iujdN+u9LvFDoYB4MD1yP4Z/OPIZ7XyiQdM24TmBUSv4XwxRkZKWPsqNGegPAq+CmHjQ1Nkly9iMoAuPjfWB7Xb1vJAaesg6XeFXtOvS2kIWEc3FvAe/HAdVzuE5SswNohtrOGqNeL8eWJ3g3TyGLr6HsycxUlG3s2xTkDd1Ii7MWrH6AuMPTuaJoLFgGYtNIs4OYzsfwhCF44+gsRrm8tch/JI8WCNWVAFwFlAmx1cqV3B1h1SuxXfh5fYzITMDluwohEDfqWHvPob9A8/gXdeK3Cri9BtgFNcxaGr76HtFSwqpgE10Bgw80Jop9tvs4tp9yIREbMsiGVt0A1caR/xQIJ+bBBN1ovZO+vo6y9jF9+FmCOaI7UDuJFRiIpttmjnEyCCKwdufg/euM1o5he1OQcSSGr3Qh5RjeiAoG/9mfDuKTg4jByehJU59NI/sdhD8xzTgFkxraulSDLcwx/QHTBtih7YADaAsB3fv0h6NpWff+W4f/KryEADKd9F7C3gy4740RRd7+A75QI3fQZdbGJ3e9NyLhbY7GwDuCGQwceam1mRTcBbwBRvvjDT79djex/sC7TMfqdzV4/HxQYMNSlNfJLuhWUIik8D5o3YmkMvXYFhsAGHaYGz6FCD8qFxLDTwo99c2pz2DeAXIrKyQzaBYotdf9x3iQef+OmvyZjv/ullxE8gvkXlyCNYHsk3Apbl5KO+KIgsFEWRu3/j/Ng4bl8P7ME1GXpiGviuiDx7I1xf8E4n2t8vnYjRTiX1SSqfexziFcz20bv0DtZ+H9HNSgg5GrceN8HX65QOBmKzYeWjrz/Nub/8fKc/ArcFBFj9dvIsTk768VEqn/8Mks4Wg3op2XKD2GkhIUdSjwzVSO8CC2vo/Lpq98TXql/55Yu3Crsp4BZSMzkJUDn2OMmk4tzcB64xy8EytNWz7HzNeuf12Ojz86/eLu6mgAAr30i+GIM+jzEJkHy8TjI2iBsoVk4bHc3fDy7OybS2F7489hIX7wTupoFQlP/yU8mXTO2ERn2UyD0Aplx0jtNWTn819mI+dadge7EX/y/xL2XUmprKjx/oAAAAAElFTkSuQmCC"></image></g><g class="png" clip-path="url(#__lottie_element_127)" transform="matrix(1,0,0,1,38,40.25)" opacity="1" style="display: block;"><image width="112px" height="112px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g><g class="png" transform="matrix(1,0,0,1,33.54199981689453,130.01499938964844)" opacity="1" style="display: block;"><image width="118px" height="36px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g></g></svg>
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
        </div>
      </div>
    </layer>

    <!--红包弹框-->
    <layer v-model="showHongbaoLayer" styles="background-color:transparent;width:100%;
    max-width:100%;"
           className="xinrenModal"
    >
      <div class="xinrenhongbao modal-content ">
        <!-- 新人红包弹框 -->
        <div class="openRedPacketMain openRedPacketMain-bg" >
          <img class="closeIcon" @click="showHongbaoLayer = false" src="//img.ibestfanli.com/sign_static_quick/closeIcon.png"/>
          <div class="btn" id="btn" @click="showHongbaoLayer=false;showWchatLayer=true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 356 356" width="356" height="356" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"><defs><clipPath id="__lottie_element_212"><rect width="356" height="356" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_212)"><g class="png" transform="matrix(1.0452462434768677,0,0,1.0452462434768677,-8.0538330078125,-7.0085906982421875)" opacity="1" style="display: block;"><image width="356px" height="354px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWQAAAFiCAYAAADBQqI9AAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAgAElEQVR4nOy9ebxlx1Ue+q3a55w739vd6m51S90aWoMtyZJH2RZgLBmDbWweHgAPPIYHNi/EDOHhJJBAiBwzhJ8JPMB5ITYJs23C4Of3HKYAhgCOMQ4YEGBNltQt9Xync8+5Z9q18seqVbX2PucOsiVruLV+v9vn9D57166qXfXVV99aVRvIli1btmzZsmXLli1btmzZsmXLli1btmzZsmXLli1btmzZsmXLli1btmzZsmXLli1btmzZsmXLli1btmzZsmXLli1btmzZsmXLli1btmzZsmXLli1btmzZsmXLli1btmzZsmXLli1btmzZsmXLli1btmzZsmXLli1btmzZsmXLli1btmzZsmXLli1btmzZsmXLli1btmzZsmXLli1btmzZsmXLli1btmzZsmXLli1btmzZsmXLli1btmzZsmXLli1btmzZsmXLli1btmzZsmXLli1btmzZsmXLli1btmzZsmXLli1btmzZsmXLli1btmzZsmXLli1btmzZsmXLli1btmzZsmXLli1btmzZsmXLli1btmzZsmXLli1btmzZsmXLli1btmzZsmXLli1btmzZsmXLli1btmzZsmXLli1btmzZsmXLli1btmzZsmXLli1btmzZsmXLli1btmyPpdETnYFs2QCAmQnAHDqP3AbguUDxTMAdhXP7AVoCuQW4YhZwUwAKEDkQEUAOqR0zwB7MDGYPoAR8H77sgn0b4DV4vwL400D5DwD+EnOXfQxAh4j4iSl5tmzJMiBne9wtgG2y3pkrMfCvhiu+AK55E1xxOYrmAlzRQv3cbW2rUx8NthKDywHKYRu+fBh+eBd8+WdouY9g+siDlTMzaGd7nC0DcrbHzMaAV2wOG6ffAqZXozn9bLjmEVAxtWXLK4eAHwF+CPgS4BJgL38+fAcDzNVPAAABRLVPB7hCPskBVMj/XRNwDaBoblEYAFz24YdnMOx9CsQfwfzRXwHQqZ+agTrbY2UZkLN9VrYF+AJnz85i3r8VaLweRetGNKYOAHDViz1QDoDRAPB9AeFyKOD7RBgVAsxFUxSRRgsoWkENqZjHqL+McvB3wOg3sOHeh0sv7U5MMoN0ts/CMiBn25VtCcB33kn49re+CE36FjRnbkdj+rggnLFRL/2VA2HATwVzDQHmxnT6qxiXGPVOYtj/KIblf8RPve/j+IEfmAjEGaCz7cYyIGfb0iaC8J13yrFvf+uL0CregebMHXBT+61bDaNNYNgFyr6AMBgAibxAT/Em15gGimmgOQM0ZiruRPj+Coabf4hB+W781Ps+DgCTADqDc7at7CneO7I91rY9CP8fz0Sj9QNozXwJGtMHgHCuHwHDDjDoGgBGAGBA/nkagXI0EmBuzsqfa+hxxqi3jMHm72PY+wH89M/fDSCDc7Yd7enSM7J9DrYtCN94I+GVX/jdaM68DY2ZE2A4EASEBxvgfhtUDqpMEahhLyVwZsjB8CMzp3MkMxHE5benUBMtWkBrXv4iOMNjtHk/hpvvxW//6Y/h7/5OaiiDc7YJ9hRq7dkeS9sWhAHgbW+6Dgv7fxyt2TvgGtMCwiV40AYNNkSOMOAb0TcQ4XQjc47+v8Kaw/eI3hMSUBAHnjoMuzEFNOeB1gLggnPQj3rod/8Q7ZXvwns/cE88N4NztmBPgZad7bG0MSC2IHzXXYT3/OjNmJ7595hZfCGYChCA4SbQWxVduB7jq2xX/oMEqJx+lxun4wrcmADitcurQIwqw7b3HwPs+kjwBFpzDphaFHkDAMAlNtt/jnL4j/Et3/U3uOmmVKk1cM7AvLfsSdBasz3eti0bvusu+XzPj9yG2YX/G6355wDkwCXQWwMGaxL/O9GqwMfgQH4tSOvPVGXRGAdRZgaBxnF9jF3DsGaugnRds94ygYk1tcPvn6O5AmgtAlNLypo9+ht/hW73O/H2d3wMACI4Z9a8Jy0D8tPYdmTDAPC+H3s5ipl/h9bcDSAi+BGwuQL016KGW9d5rba7nc47Ed4i8E46R8HY6ssK7hRPScchg8BEll3TrWP2rTZdk0PqOd9CRnlMtO2pRWB6v4A0mNHv/D3Kzf8Lb/3u/wYAmTXvTcuA/DS0XQHxe/7t6zG/+ENozl0DgFAOgZ4AcR3AKoBkpQI5MH7OZ2tEYUWeR1xt55phpV0hjjLXAApdeWdW4AHhOl3Rx7LQZDQEeCTfdeWf9wCxpFtzMsYyVbRuYxUW/hhYawGY2a9OQMZw8z5srP4LvP2f/waADMx7zDIgP41sRyA+f57wKz9zG5YO/Dxa81cxM1E5BG8ug4brAFNinDHRGuQakK4SSHus6pTTY1VmyWDv5f+uGUPHuGgJ6A27wKAjn34ADPshrrkvoKrA6ksAXpK0S6MZEvVQNCV2uDklq/Ca0xIF0ZwFiCRCZNgVnZyHYM+gQvcrEqC26khlkBoD80nlxzYOS1PJrQVhzEUTADEGnQewtvYNeMs3fQyHDnEG5r1hGZCfBrYlECsbPn+e8K53zeCmE+/H3NKrAHIoB0D3IjDaCIzYsMOt9FykU7aXaY0sQeaikgVwmnPA1ALYj4DNdaC/Gv7aQL8jC0us87DGXgkUZGjL1nncEbjt9SQLO6aCw21qHzC9BEwvgYpC8jLoyJ4azrDwsfJbTQQ1kK5UwC6MpW6mD8jybWaPzbXfwt/c92Z83/dt4tAhudEWOnMG5qe+ZUB+CtuugBgA/svP/RMs7PvX7Fpz5EfAxjnwaEMAF0BkvKjquUmflX6eCKIBbBMpweCUJnu5wBUJgEd9oHse2DgHdM7LYpJJTrdJERRbRVU8Htc3ZoH5w8DcIWDuMKgxBQzasvDFjwJAU7qurlPXAXtMy67la0zPZqAxB8wdFCmjHHTQXvvX+Oqv/wkAyMD89LUMyE9B25U0AQA/9+9vwcFD70dr7noAwOaysGKqguckJ9VWDrlK+Fo4FsGZS/mtOQduLQi77FwAuudBnQvgwXq6tg5gNn1CYLFJL4n/fyKun1oAzR0Gzx0EZg+BXEMY9KgrdUkuzSbSQ4oDVTpubmbkj7HFMXo9SPTl6X3yfdS5G6srb8Zb3vbXAJCljKefZUB+itm2rFiB+M1vbuGNX/5zmD3weoAKDLvgjbMgHlZXz2EyGE+8L+rqRGDV3oPYiyY7vQ+8uQqsnxIm3FuvslOMJRIItoBSnOJvFXP8ZLm+tQjMHwIWLgfN7JfwwFEXUb9Oo0CqvHAsDoSTWPVY/pSBN4QtN2cB9iV6K7+B93/kG/H+9w8AVIE5g/JT2jIgP0VsV/JEu034yAe/EfsueTfc1CL7Etg4Cxq1AaY4Ta8wMjN95wA8GhKWZvl19sygsgRcC5jZJ1LE+ilg9aTIEPVpO9L3MZJdYZXVc58S17fmgKXjwOIxkTY2V2Vm0GjGJCvSjlQ0YEE5AnftuP5M4bfmvAAzNQA/WMfq+Xfg1W/8OSwscJYxnh6WAfkpYBUw3gqIDx92+MB7fwMzB14FgNBbEZ22Jk9OkiyrrHkCbdND7MFMoKlFwDlw+zSwdkqkkHhijf3FpKoomIhnja4+la+fOQAsHQPmj8qsod+WnaBddTfSLSnxVqy5no/Zg7K4BMTYvPhbeNPbXo9z5/xOwJxB+clvGZCfxLYreaLdJnzwPzwDR676XbTmjmK0CW6fAfk+QG48WqLe+SM4p/PsNcwA+ZGEpk3tA3cvAGsPA50zAHwEjerM3oLWFiAX6eaE630JDDdBg03wsCuxxPq2kHJk4olLoCwBHknyFGKUQ9wyFQVYY5iLQsLgmjNAa0Y+i+LxyT85YP4IaPFy8NxBUH9NnIH27SQ1KWTCsABMBOtwjWuJ47GYBoad0zj9mS/DG//Rp7GwICdkGeMpaRmQn4S2a3mi1yP88Ye/FXOHfhSu0cLmRXDnHMgVJuwsOd1s1EQiYrXYY7tKzo8A1xIH3cZZYPk+YLCBneb2FSDbau4PCLj228CgJxEMA4kHpmF/jBzusua2uBdN/C+KKWAqbJ/ZCkA9tQBqNHeX/92UvzUHHLgWNH9ENmbiIVC0dtDuJ9+j/vyIPTBzUJg5jwbYuPDP8MWv+X8wPc1ZxnhqWgbkJ5ntyIoViA8dcvjQL/8mZve/AlwS2o+ABxsgEy9bl0gnHhsLayN5nZJrChC3HwFW7geGXaRIBWz53SSMOliR9+DuCrC5Cuqugfv119OF850TrXT+UvD8IWBmH9CYAhdhYUcjvGapEb4X03KbUQ8Y9kFlDzwKi0lGPVDZB4Y9YHMNtBHC7roXtt6jY2oOmN0HzC6FVXRu2zLvqvyNWdCBE+CFy0CDNsAjKcOYiP1ZdMnGDDB/BHAFo7P6O3jtm1+H8+d9BZgzKD8lLAPyk8h2pRX3eoTf+E834PITv43W3BEedoH1UyDIcmONFiBUV8apJDHG+yxTKwdgNyUdvP0IsPIZUDkwEQjYHjPqv3EJ2myDOyvA5prE8npzjmsBB46D5w4D84fB84eBhcPA7CUqak+4Qfr4nIxZQgDb5yJI08Y5cUyWg3gaEcBTCwLOs/uA6cUJmrDJXi3bBKrWXzEN7L9KIjTKTXA5BDVaqK70S1m0KxsngXdy0BbAwlFwYxo07J7Bqfteidd/09/vhi1nUH7yWAbkJ4HtmhX3+4Q//ci3YenoD8E1WuhcADbPBa0YaRGHaBWaeqVjT5wqlyMwCGjNg9ZOgtdOgspx2WCir6t+DjO4swxaPwvuXKzpng3gwJXgg9cDB68DH7iyBm4BdHhnfNhNXsbSjd/HWW283pfAykOg8/eALtwLrD4gOrVeSw6Y2w8sHgHNHQDX6nKSiDExj40p0OJx8NIx0KAj6TYaJqvbPT/7uykjMzBzifzxaID1c9+L217xHkxNcWbLTw3LgPwE265Zcb9P+B+//7NYPPQW+BFx+2Fg0AE5V8HgSQvTLJOq/M4MKofgqSVg8wJw4W55EzTMSUQJSMZWl5ljvXVg/RywcR4YhZeYOgKWrgAfug588FrgkqvFsVaJ88V2SGprCnVQ3V0Fm/LWyWbl/pPdaigHoOUHgQt3B4A+me5fNCQeefGwMGeYtHZbf64JHHoGaPag7LDXmAE5EnxFen5aZ+NRMtVBmL0HtWaThLGx8iu49aXfPAbKQGbLT0LLgPwE2pZgbCMo1tYcRscIf/VL/x/P7n85DbvA+sNgHolezIjOHnUk2X1sKoTZ4AwP+6BiBgwPunAPePOi/GAY3xiQoIafwz6wfhbUPgse9NKP+y4HH3sB+Njzgan5nWoBk5Fyt5U46fJJ3FRPsKV4lPcCgH4H9PAnQSc/KdEmaq1pYOFSYPFS2cgIu6i/8BsRgaf2A4euA6EAfN9sZr9Nlivlru8f4oCFoyI/ba78Nzz7a78CjVOMpSW/UyRGBuUnzjIgPwH2qCSK535ZE+/9l3/Cs/ueTZsrQPsM2AXnGyY76Sr7GNecT/BDcMmyv8TaQ0D7ZNiOkhI41ACtspKNAeq3wcsngY3lxD6nF8HHnw8+9gJg8ajBjUl9exsgDAWiUJYaesUy7iRrTL5D0l23zNekpdP1BHXQWj8NOvVJ0Kn/KTME1enn9gMHrgCmF8LptfqzdRyBlgAQaN8V4IXjoGEX3ChARQtx4/9QMWkfkeQbiGnFYjK4ZNDCpeCpJVB39VN427u+CH/5u8MsYTx5LQPy59kmgvEkiaJzyOF73zyPN3/lJzC9cBW654HOhahZTpx9j0VMoDpF7nfBrXkBj5V7QaN+PHdsubCCi51mb64Cy6eA7qrcvNECH70FfPwFwKHrHkUlSObI5i3koXK/iahqD3wWDNfeX9OoEWi7B8bk5MNMRH8mAOfvBp38JOjM3wbZB6DZfeADx4DZ/dWpigH9eFtb3uYMsP8EaHofMNyQWYYNd7P5tuF5lQHMHJ85ILryoP0AfvlDt+KH37+BuVoUBiASRgblJ9QyIH8ebVd6cZAo+u97x2VTt73oY9ycPYz100B/BSJHkE1P2JaJoFCWG88BZFGCZ4AKYPl+oHdxItBYx1HFOsug5ZPgXlv+35wGX/0S8DVfLHG2NvqhJo2AGeRcYrQKLGMMdxIVnWyVM+oMur6hz4RpPk0q46T71JeMs840JuUwnDvogu7/Y9ADfxL2bmZgZhF04Arw7P5tizhW/zOXAAdOAH4EarTARaMyyFarW75VhgpT1zS1BJ6/FDTsnut/7H/cNvXWdz9SkTCyrvyksAzInyfbVi+2EsXoGA0//CM3Na+5/g+40Vqk9VMSLhamtDBe9zRdTQgUwVkdSsMeQFPg4QZo+R4Js6LqdHxMAdD+vHEBWDkF7m3I8ak58InbwVd/ocQDV1isfd0TxeNbA++4VeRfM72v4tfWwL0VlNvj1fxUBZ/x65PUE2WfyoA46byQ1rAHPPhnoPv+OLwcFqCpefCBY6D5Q7urf4LEgx+4DtScBzAEWrMTSjhe4iRzmMy25kVXLgfrwwfuf1nzVd99FxqneDcSRgblz49lQP482K7BuHfIlb/zntuLE1f/OlxjhtceEi2x9pjq0RJWk0wEkcD9LqgxA14/JXHFdQAyQFABhX4HOH8v0GsHhrcEvuYO8JW3SZQEqhpsnbWHb9tUiC1LbUBhv11NYhw2jbxhT9nqstrlE1nwo7jeEU0G+xjbPQQ9+DHQfX8kqxKZJab54DWg6bnJ9T/p5guXyQZG5abo9XEmZOtufHZUyTZ7UGMGWDwGsN8s77v3DcUr3v5RTJ/3GZSfHJYB+XG2XYFx55DDqE/l77zn9uLaaz8ERotXPwMaDcBUjZrQz21fNOpH4NFQJIqL9wKDjQmy7Pi8nnwJXn4IWH1ETp5eBF//ZeArbg3vfDNvlY7l2xpALePV8C0C4FlXh0zq36mgk1bAjV1lCbP9P7ZwUBoWW7tgzCaB7eRVeSkDFXyPJJgAPwSd/AvQPb+ftiXdd5k4/5zDmOhQA2gigJvzoEuuBXwJbk6DGk0Ak/dT3nJpNnugmAIvHgMRDcp773lt8Yq3fxSNKR7TlTMof94tA/LjaLsF49ODtjv4oR+7qXnzs/8IwAyvPgAqh3HJ7iTtUsAGSMATjg82wVSABh3w6v0CshMcYQmYwvf2eeDiZySUzTnwVV8EfsYrUwiXWTE2DnKqWhgwJTfx3K3UV9afJjHRKs1L120RSrazPryF+sqoatCaKTMi2vDrydcDstVpVcuNWRr1QHf/LuiBP5NEGi3QJVeDFw5W0op7jNQHANcE9l8dJAwPnppL2avXFVJmGWkmRfCSzuIVAPHm8O/veumFV3/HXUdbCz6D8hNrGZAfJ9sRjIPz7vSg7Q785PdePvXK2z/JrljAyn0g9pUVYJMdN4ANcQNDnG7FtMgTnTOwULVVB6dhD3z+XqC7JmfvvxL+ljcAi5eZKTHAfsJUXgoq6VC1848B7yQpofYboQquu3G8oQKEk/XYiOPh/mMyhZZt0vW1PFUOalqcAHmr65MPIJy7fhrub38TWH4QIJKIjEMnQvzx+Kg09vzmjoAWLpMXwM4uhfrSPKVqif83mY6gTA1g6QqAfbv/X//g+cvf8cMPH20t+DFnXwblz5tlQH4cbAyMt4ikOD1ou8V/9nULc299y1+jMXUYy/eB/ShJEdiGKNaPbbbBrgGsfkbYsQVdC8IG/Hj5JLD8kBxvzYFv+HLw8ReFlWJbsFuDOJWogJ1W3wVUnKw3AzVRfEtU3EUIcsrrBNtKKLGmUgXXkX0LGSXNCnRQqgyblTwRnCWuoFOfAP39b8kLVZ0D9h8HHThem9NMen4Ebs0B+0IUxtz+GjtG5VlE8m8IP7MHFU3w0pWgcnCu895fumX9R3+xPRGUgbGwuAzKj71lQH6M7dGA8fSNJ5r7f/0nP8XT81di+T6g7Cf5QTud1YrDv5VFId6D+20QFcDK/eBRrwq69nvIFo2G4LOflg1/wOKse+aXCygzQ3YACuea+1a1Ta4yz0rXTMNFWAUctOZqc5PruXK9dVTpyrPK4DJpJeH4U4BFPQ6fdYZMkDUxdSmkkkdKGzKBLEhTrfyWgpv7xPvXi0+JOQ83gX/4LdBDfy4/zewDLr0+bAOK8eenxSGAi2kJjYMHTS8BrhifQdUTqFQey3agS1eCehsPrrzh25/d+7v7hxmUnxjLgPwY2rZgfP6800iK035AzcFGcfCe3/8TzO67hVc+AxoKQ7JRE+qoqay8syFr7EH9Dem0y/eL48iwL8tKI4j21sFn7pZd3Kbmwc/7WuDgdVtIDWa6zDyBnVoWnliY5NnXTxmL6gh1BmCbaAUz97YRJHWbBM5ccx5WHXpJ5063sY7SejkDAEemruf59NtYrtLt42uxYp1QOoFC+S/eC/rLDwD9DYlmOXI9ML042V8QB1wBVOw7AXIEnlkCFY04mFlQ3nI/bF+C9FVU3dW/vnDty75o2Jovj7oWxwiMQ4d8BuXH3zIgP0a2WzA+O+y4ouy7g//wO/8vLx66g1YfBPfWZZMg1Kf08jke5gbZoa0nr6WntQfAHHYkq7FjBTEwg1ZOSRQFABy8Fvy8/12mvRWdwSzTxQRwnGBkmeMEWcGCbyUyBClvAOKmOgDXrh+Hu8r19fzEm1Y4JWJASPjJuSBNKE2m8eslz278+pRMyqM6zyLwj+eOgpac8m8YP0EiYv7yA8CF+wByoP3HwJccB5iqzzJGkITjVABLV4GKpizZbjS3EE3qRD08LO/BU/OgxePA+vk/vPDML/vKspjylzbnfAblz59lQH4M7NGC8YFP/f/vo4OXfQ2tPwzuLQsWhC006yCSZILUlcgPwb1N8divPyRaIFWZtBoRyWbtZ++Wpc9w4OtfDr7+5ZIeAyDLQhO73TrEy9xnEpOMGqaOHkg6M1ABZfk/Kv+PeZ9QG6bSJ+SrerFVIraL800RIXpuTe5AAG8eH1QqPShMEZQLy8zC5KWeRaLgUByHTbr3D0H3/IFcNbMkbNnpK6Ai7Y4sWZkzLV0pIXHT8+CiNdEfMelT9BuWfS8WjsBffORXl29+zVszKH9+LQPy52iPGow/8avf5i6/9gexcZa4czZ0KjLMysT6cpzkRh2Qhz2g3wcGbVDnTJAvagBsQaO7Bpz9tLwFZGoR/rlvAg5ea8BKpAjpj6Y/KVDH7xZAFMPT+Y4I3t7XGx3aDBI6uEyUNCeEtKF2XNPYUhJNF6X/m/wnJDIsfDvADIMOOTMAEeBIZjSVKBeM26RYaAukeg4RJT1bM738Gbi/+iDQ3xDme/QZ4KnFyjO2MwxJy4Hnj4Jai8D0LNCcijKY1uWk+GQpVmhLM5cAc4fZn77vXy4//6t+OoPy588yIH8OtqvQNgPGS7/wQzc1X/byP0JvtcXth2Ua6tzWLBBp+szMoFEf3O8B/TVQ91wN5CZ0/s5F4Ow9AHvg0LXwz30LqDmPtPiAExCP6SN6f2G83vuYHyGChnISBKhRS8Iw5UoZLRAhDQQVacPUhWVyW24sP6He0nG2WTUyg6TnTX4q909ENNav5ldmND6cZ5iq2bcj5T/JIWmQTcJQyk+KO4/yxKAD96lfBS7cC1ABXHodMHfJhEGu9vznLgWmlkAz80BzpuIDqF5bG8C9l/PmDoOmlgbD//7Rl669+Z/eVQHlHBL3uFkG5M/SHi0YN2cPNZb+9r/8A8gd5tV7AbjUAeP01kxDUeus5RDcbYNGXfDG6TFgqQMOrZ8Bzn8GDC+LPJ71FQFhFHhYpIk6edP8TGJ2Ck6a38CoLJApUw4HYuaqDC3WoblvyLkF721Y8mQY3gagI8IFQIxSAqVjSANgymtVXrF3iTJBDchBNfkoAna42tGWcd1yvVkQFNJ2f/cR4MGPSb0fOgFavHT75w8Ac0dl4cjMPqDZMj/A5JsrIE0xox5YvApgf27tpjc8c9g9P8qg/Pib2/mUbNvados+/ICKsu8ao5li6RM//2vcnD2MtQcBT9JpkWJ9GZymzsrQtIP7kUgPo14NjMO/tm8TgJWHwOfvAxODn/lK8LP+N6hTSDpvKZJCdY4vf4bV6h+F/xOx0YKtO4qDRMHCpJnhoCAYGBf7oE2zvOYpnEfQMsvvHCQURyFde134c0jX1f+0Clw8FkDep3QkbwiyhZc8ItU9ew9ic533qQ5A0mlYnx3LDES/x/M4aPswkoLcH17LE85lxOu5UjcUVCOGv/HV4Ou/RLSi8/eCVx7a+vnr0+ycBoZdcHcFXI7S0zLAa7/HgRIEMMkeKM2Zw0v/8xd/rTGaKYqy7077AWF0TNp4uy1tXmU67QvZPmvLgPxZWGTHO6zAaw42iqIcusWP/8dvxf5L76C1B8F+BDgaAxDBQgO12suYgc6KvHhz45HIYOW6lA4HQOXz9wPLJwXwb34D+No7BKBIwaaMAKHcUDVZABEMqpvXKMAkEJG/cK5XsEzpeS4jAAropGu9AqMBXQXQBJ7VayjkidnDK0griNe+6zlyLOVfipPOSXlGLIuWwStIhzzGuAnv4bkU+cIMnLEuQtmYGQ4EO5honaeIlPDM4OEMg9c60bwSyyDA19wOf9NXCoNePgW68JlYhhi0yLV21T4NGvVB7fOmPuwJ8Y6Vw0wE4hJYPwUsHr5j8RP/+VuLcuiag43i9KDtdgJlru/7nW1XlgH5UdpYQ6vvTRHAuDHsuaIcuvn//KPPpOPX3cntM8SDNkS7TR57UGIsbBmLsuX1c0A5Am2cgXQbXRjCqROGKTidvRtYOwO4Jvzzvh58/FYQy/RYmGvSgcFe2JYBQGWzCqqszI8TGEfdNHRuBTBJUgHYJ7KtIKWjTmCo4MSmFaQTeKXf2ZcJ6GFYozJUkz/U/2CZswxGmmcdYJQ564IYNsBsv2v9ESmj9YlN6zOM6YbZAntTBxzrwoWBITQoIKYfBik7awKDuYRXln7sBeDnvFkWgKydAc7eDRsLXRmcw3PmjUeAcgheOxaVQmoAACAASURBVBMGGao90ySvaJsU3ZvAww64c47o2Ik753/p3z2zKIeuMey5CMq9Ho2B8lZ9JduOlivsUdjEiIoJGwU1hj3XGG0WjdmDjYV/+PDfMnCEVu4FUKiMGzXYtOGL2exHtceNiyA/Am+clnhjvUYhxoAOn75LdhErpuFv/Qa4S06ETo4IGMq40+ISw4qMJ05YGZIWCsOgVG+EYYdQCQBpgEl1VonAiNN8rYPa9VonMW11pNVeM2UmE3qnah3COOviDZDuTQTv0/fxhRShOBobHctVX7k3+XpHTlg6USWr21+vDksKdeYBcrWihpcUrDwI+uQvyurO6SXw0RtU4DfPJw5FgGuA5o5KfPLikVS+Wups6gOASDfwwNJVAHCm/YzXPGvUvTAaNWbKUXPab7khUdaTPyvLDHmXNtGJB2ArMC7KmWL+L37pg2hMH8HKA2AmA8Z2imk7ojnWuQgqR+D2GZAvzbmBSUOBiYFzdwOb68DUAvxt/wg4cDV8qdKEMiGOrCwyXyBMla1+WRoACtNvJJ1TNWjYqbidqnsf86jmgyQhbNfIHkG2ULaq7Ji9j1EdllWS3j/ounFaH5iv96V89x4+3iukyz7mOf5ODEdSZsEMjueAgmaurF/ZvDmHvZYryRSW8ausIfJLKktk55zqD6j+eZ3N6EwkXB8ll31XwL/wrbLcfXMNdO4eKSchzpjSsyfxQ2ycAUYj0PrZsYFWOXVkzPrwiKTtrp0EN6aPzH/y/R8sypmiMdosIlPuHHKRKU/oI5kp794yID9aq+vG8U0ffXLlkIqy75yfc7Mfe9830oHLXsarD4gW59KCX0sX4tQYxjnVa4PLEtw9B/ghlPFVxEGVPC48AO5clF3CXvjN8tZjE6Im5uN/KHRWnRpbPZMU5BVYjYYbEMFcTybWOOQvAraADgIogkUnjcTWC8BaR5sOGKyyABjgMoB/zYFWGQhs/m3tVoGOVUoIEoMCqffJ8WZ1cim/lV20LoyDL7BYvd5p2YMkQeY6lXrSPewMg8290j0TX5b6i89UgXzhMPjWb5RXanUugs4/ECc9MUa58nyGQPesxKRvrpn2p3ILjR0DZJZA7EFrJ0EHjrxs/s/+0zc4P+eKsu9cOSSM+uEFC73s5PscLQPyLmxbJ55Z+NEcdouinCmGt1w33bjq2juxcYZosKFkxcgE1Sl9DLMCwOUI3OuAesuyEo+UdCnrkROJAFo9CaydBqiB8vlfBz9/2IBQYDykrNsjJZCcXXVw46iVUpUlB+YrzNVHTVPZK/uych6MRKJ/7DkCk1yfGGMCPU6AAyRGqOchRTAIOHsQkgNMWaQ6DKE6sUZOROA3TshwXsyTLyO4ypL0qmMu1UkYcEzdKIMnIDj/0uwhafimrk150jOql1/yF9YTxgEOzOC5w/DPfQtAhcymVk9GdpwGSNN+yj54c1n2NBn1kWKe0+BmQxNjuwSAYQe8cY7ciWvfObzluuminCmaw25xdthx6B2SRVDZyfc5WQbkHWxbJ16IqNBYY+fnXdf3i4Mf/OH3svfz3D4t+CjzcpDqf5ymh0p8I4itnwMNN8H9jUpsKNWb8/pZYOUU4Bz8894MOnAVhGkF7Y8AQEO2Qme0YO254hyrRiOQAbfghNPBJHRsZbQCRGVk1pUpvFfA1OvstD+xRK/ARGnA4niOhpn5IEmkAc3ZSUOoI0eI4XkS3leCkMBc86/5sWBIQT4BUn0gygXGiRfKqM5JkAlxi04+H+9TicZQhqz3CgNBaG2BVXswqvUEMHyYLch9TH3tuwL+OV8jFbByCtQ+K9naqv0MNoDhJmjtTDxkCYIF8cieXeDQnXNg7+cP/uqPvLfr+4Xz864o++7ssLN15MVWfSnbmGVA3sZ2dOKFiAqNNe6UvWL/L9z5bBw4+kpae1B6QUGRYkQWYiUHhIYPBrXPAb4EBiuQjlvJS+rUnYvA+fvlupteCxy+Qe7h5XeVAyJTgnG6aYwrAQzDykz6MQZXowV8GZ0/Nq4XUGCiGE4nIVwcBwJhxZaJ+/hXYX4+ad7wif1GGQNSbc6Ae4whrqSpMcQ2bC3UQ2TjynxDWt4eN9/NLAAB4GPZzOwBIewvSjiGqYvmwJVz44whSgVIgI8UhVJZfh7KoPeJy9i1Xg9eD77hK6ROz98PdC5u3X7AQH9FBqu1RyJ7tqCt8lICZwAOEg63/jCw/8gr9//CDz67U/aKGKO8VeRF1pN3bRmQd2N1LazmxCvKoXN+6Bo8LKZuf8n7uHO+4FEver0BA4hApfHHhDfXwMMh0FsOrM6+LihFRlCvDTp/L5gAfsYr4I+9IPQWH89XWSExyAQiKlRqJEU8pFNlQnKIKbsjgo1f1vM0TI6RWGMVgCHslCy4GDYZQFcBF2YgSBq2/r804XlpAFFgi8d0IFFgVgegDiCGqSeHWrp3iie2Dsdq+Jp1xKVQP2WsaSCU66VO0vVhwDKySmLn4rjUGYMjROkEOstBcmxK/Sa3nL/sueDrXg4mBp2/B9RfH28/YZbGvgRtXgQGfWBzNZIFBW1mVCJm5HmF1uL7wOZyMXXHF7yvwcPC+aGrhMOpk2+7PpRtomVA3sK2lSpqTryinCm6vl8c+vNf/jZMzV5FndMRcePiCtOZYKbEzADKAai7DgzXQX44FpYWmU05AM5+WsDpihfDX/3FEdDtIgTLwCJYIYFNBLM4tbasOrF27ZAShQBo1IJlgwqUFCh6ZHBQIEG8XhlqBF9Nx8oZhg0zG40ZHLTi0oCmLY9h9UEq8L5M4AyJtCCjB9sojVgmfU7h96R1l7J4Jea7NHWq6Wi0hTf553g9IYQAmsU3CVhDfam8wAzvq7Ha0RFo7qN1r+Dsr/xC8PEXyTlnPy1tS59natvyxQ/Ag3UJr9TzwKbNJiCH/qZblnbOAlNzVx36i/d/W9f3i6IUllxx8mXp4lFbBuSdrC5VGN1YnXgdHrqZV90+76685h1YPxU6SeCdnBqz/b8aEYD1s+CyDxp2qkwFNlKCQefuBfuRbBR0w6vhiCLQeU6MsuJ8Mgyw2il1ai/f7YKPqizhY0SFAmRidD7ez4eoBAV31a/BsmItOueUrYb7SwNU+UFALum9VSZrV+IBWl7LshVsrYNvktMysek4MATmqulG2STWKyJA64BmGTyQ0hPJIQ0cMHXrdaZhBgrE+quyfytTaB69YeROhaTwbKJ+fv0rgIPXgEdD0Ln7Qksy5AApHhqjjrxQd+Xh1N5M+7OsOX2GxTnrj8Bdcc07Zl51+3yHh67i5JukJ2eWvKNlQJ5gY1EVACbpxs7Puw0/dIUfFos/+Y6f5XI4g80VSSPG91pQxdj/ee0MMBqCBusVALawzcyglYfBvTVgah7+lq+JaM1eN6a3PCY4vfT/GvkQWaF0aK86LVIERAJudVqJBCJT57J6vYIDUAENy7rVGRdD6AzQWg27qtVWwUp06gRSVgeO0RZGU9bBRQFKQTruJWE0bGGuiP+3wJ8AN1wDK0skcIzOvZBXRjUtAKId6wwpDgI8lv/KoGOfh7alKEOl+1SiREK4m3/W64CpRfDmKnjlVGLsWtemPnmwBoyGQNCTWZ9qfGb1BhwWt/TXwOVwZvEn//nPFn5YbPihUyffmJ6slqMutrUMyDXbUqow8cZ13XjfB979BbT/6Etp7SGo8CeSQGj6FphDgycAGPaAwSYw3EgdFyYeGYFZ99rA6ikADv7ZbwQ3ZiuOuygDWLDjMuznYH9LWifZ/yMBamTYrEt/EwOWeyGCEsVbVkPSlAHacK+KdhuYqAKTsNUwddf8BykEZnpPNo1Ql4ntAhXWG2OYx519GuucyqDs3oeFGN4AMY9dXwVmVABbn4utcxk00+IYPQ8q6cRZBWL+o8zAKQRNN2WysxltX3ETVx80+2IG/ubXShtcfQTYXA95mjDkswcP26DehoRaavsLckVloYi2X0dg50DrD4P2X/rSfR949xfU9eQt45O36mvZMiBvaXWporbRvPNzruv7ReFbRfMLb/0p3jjruOxDHR9VVkOhIWsnCJ19/Sww6oP8oALAkaUwg8oR6PzdYDD8tXfAHThhVgHrvghWa5X0JT3VAlNkRYrzRQTmaicP03dUp8wUQEhBIaWTQsdgANhGE0gejRxhwTWAboWdK0BWQF4YYT1SoxI1YZilLryLYK0x0AbE69fHTY2iTBCkESRnISnAxsGqWm67KEYHH7sIR+o1SSfVfT18aC86IAdpSAcoBXLzDF36LwJ8hjonuP1Xw594qZTj/N3gUdKTdXVodNr5ATDqC3hH9m6cgJwA3JB8wA/BnfOu+UUv+qnCtwoJhZtLoXCT4pOzdLGlZUA2tqNUEbbT1HjjgqeKpd/+sdfS9Nxl1D4NDSqOF0ffCMfv8cfuGqgsgWFH743kBU8hRzh/j2ydeMm1wDW3SyxqZG8iJ9iYWf1T2SGeq7+He3lWB1aK+NDY2sjMzdRcQcSHKb4umvBl0nMr21ZCAdMswmCPGB5n5QkDgKTMmRJg1heP2DLZxRUW8Dk4AKNDjdL1FhDtNqAxZtpbYOcKo7YDh8wcwkAT09L8BwZrno8u8Q61DUeImrLIK6jUszQhH2cqdVlFB6kYHhjrH2BdvHPiJcCBq8HlUN7Tp9Mc6IAd2z541AGNhkBnObaL2C7D97g0GxqbDGDjHGh67rKl3/uJ1xY8Vdj45LhdZ5YudmUZkIPtJFXYELdO2SsKPywGU/1G8+ZbvodXH6TIfpVNKI0wjAYI/y1LYOOCdAAKgGVC5DiAOK8+DN4MuvHNX60EKi6USEzYSgQhG9IrI8uNDjVOemyMDFC2pyDCXGGtutCCKvdLUkgKNVOA9VG/9mVd3+UEuoZlVjXXEFuMxEat1krshYF6ZdMc5Y1YHgu4FQafVvbZPOiuctZBl3R1GzoXWKqG9ynAx/TCwMLWOcnxWTGXkT0nrVt3tksM27HkxZd2IEFMB0gDksorKf+m/r2Hv+n1wNS8hLetPgzd1CktAtH254FRF7x+Lu2hEdl9pbOk+GSQxCevnqTmjc/6nsFUv1H4YdEpe0UlFC5LF7uyDMh120KqsCFuBY+cm2kVh3/5x74EzdZxbK4CRGFnMIOqsGw5dCNmYP0MiEcyTQRV2YdKC6NN0OopAIC/+atAU3OAxvuGzhiddqq/JlEX1XjbsIlQAIekLSenldVXFZTs9NiC9ySnl0oayl6Zy7RTmIKTBS/LZr1d3MFjbNteb7XptGS6HJMYkrNL5BOJqbZOS3t9VQpRHdmRvX914JPy2TC/VP4kjyiQl7Gu4gBpwv045E2fHyHo94z4zGNMdBwojZ8hylUpn6JLh7y3ZuFveq20tdVT4EHXrN6rtb+yLy/RXT4Zu4SdtVWki5ABIgL6baDVOn74/T/xJW6mVRQ8cpVQuCxd7MoyIGObEXqCVNHhoSt4qhj4UdG89Tnfz+sPE5zqxkiAnNLWLwAYGPRAg01w2UtT2TSLTMzjwgNy2bFbwQeuTqAbptQIU0m7+U5cTGE0y+i1D44mh8Swo9wRp/hJ46ywam8BHBXwtrJGZK+GLSuoVJg4i8bKns25ATxUD66xWhsqRxbIKM0CNG/KElPYn7LPAHx2BhClkKpEAdZ6LsP1pbl/LfqhInGonp0GEl1sY3egiwMAOLJR9mWUOKJmD6k/7z2858r1MU7bPOckJyXQZnjw0pXgy54rbe3iA4nMj7U/Bpc9YLAh7TS2s+QDsXsn65u1qXDg9mlq3nrL9w/8qCh4quiwibqw0sWj6YN7zDIgW5vEjk1UhZUqDv7MO1+MmdmrqbdiY5GME5sn32PtEdnDlkdQNqlqhUoV1L0I9NbAzVn4614evPMCkt50WOmAKRZZZtIBWDVLXO288iaPBBQuRlxIGuoU0um/TqkROqMuttD4YTstT1tNWsDxZlMfTsAIADDMlqt6s10OnaIrquxc2K+u4ivHgDE6EpWpI7Fbpxq1SYc4DXBWhoj5RwI+B473YSgLR8o/UlhgjCCBArOpN++jRhs7Yxi40sKWJIWoWWaerg+zHx/ur8vDwypNf+IOoDUD7q1JG9uq/fEINBqAVx6qNOvEyDkejwcBoL8OTM9dffBnfvDFk6SLiQtGMkuu2J4H5J0ceTaqQqUK55tF8yUvfievP+Kir7vCjjlRXehxBjoroHIgDISFaci2iMaz7j14+UEABL7+S+HCG4MdVfVbYTXGQQVhRjpdtsunEa83wKvgGAEtpFGmVy/J/TxkIyJ1ksFMmxN4xzCximZr5YfEdu22mgqGSRKpLpHW/EfJorKzW3JoqXRhgTsybp9W2Wk+4go4Xf1n8oxwDUz96nWVfT6sdAKTJ+a433Laz1h+0xmI1xWOhPgM9A0p8VkyYhSGDrAqg+jz1XbHCuxx4BD2qlEYBAa1psHXvEza5PIDYaCotT/Vl30PNBoAnQuSXviXUZUuUsRGaJ3tM6750he90/lmodJFJeoiO/i2tT0PyBWzjrywV0U9qmLgR8WBH//OW2hh8Xr0lsPGwj4yhdii4jwwzQdp4wJQDiOriY3afl89KSun9h0HLnteSMoAvdlQJrJFqsci62di1CI/cHSWKQuDZDsCNlEKxYogC+ns9nr7ElA516yUU8apIGcXgERpwgJb2jdC0xLw9+n+yrajI8+CuGrE1bSr8kXYRtNII3q9DnRk66VyvZEnFJgVonxdo05Ow7gvBdtImCQNpZhl/X94hhoyBx+jOBTArf4ujFzrzwx+4DTIRckkxEYffTawdAwYjcDBR1Fvi3HWVQ7A7XNI+yQHP4SxCM4EkHOg3ipobvH6Az/+nbeodFGJurB7XUxw8O1129OVMcaOP/pRF5dHh5jj1mCjUZQzxabvNRpTRXM0otbhT3/4Q8DgFnQvSEJFUW+nAJD2FmIAm6vA6mmQ78VGLz9x1ORosAmc+Vtp4Lf9Y/D8YbAPiw2gzI1N+gqo6gVP3naVLyJIBx5TYTahf0kUBSCAJQej81CBiIBydSUMCECaDaTwKDsj0LKrbJKYlZ08+HA9xTxpGnp/jYP1gc3ZuiuWFgBXpPsDAYjkHp518BIPltTJ+INyjsKe/iGXhPQKpjCTYSC+igoxh4hOrXSY4q/sHJgB5xw8y2udUk2Yc/V6Uw+OXHgUofzQV2FpfYU24+wrnihE+YT7h/Occ5XfsXEe9In3yTlHbwZNzRoZItUxg0FuBnzgGDB7CeKNKLYmUz86CDAwsx/wrb8+94xXv7bR4MGoXw5n3PSoLDbLQWt+dGlzzmP6vMfSksfCAuP226UhhNc+7eVXPjWe6Aw8aUxH6ujIa1MzLgDZLBq+VQx8vzjw/f/ntbRwyU185lOAc7GjK78AEBGn0knXzwEsr2JPUGx1XgJf/Iw06itvA89fGhmwdLLABMP3NIWvBfiH3hgJekgfYPNeO90yUzVjgiy6IMj0XdPUY1KQ0z/4LpTLFyZWX9p7d/IYz5wGnsfCiAjH3/Vv4A7sF+ZOhLXf/T0s/+aHdpW/nfNj0EeuMMd2Th8ALvnmt2LuBS8IrBiQpc4AuZCSoCu85zAoqJMyPG8FXXJxUHNIg1qcBTEH0NUZFFVAU9Jy8Cjh4ID5w8CxW8En/xy0/ABw5IYEsGamJQPoCLR2Gjx7iRwPzYGJK7URBwBm0OYycOiGm+b/xddfu/4jP/vppp/yXfR5hua4KPvudNHko6NjhN55wsIC4667CDfdtGdB2NqelSwq7HgbR96GHzrHpetPD4vCNxqtN77mTt44XcTWCe3UsZfYHiPWXZVdt3go8gHkWmWMDADdi6DBBjC1AFx7R3w/nJ1uSh9MHn6VIuL01DiYki5cnS5XVtZF5a+6LLiyMY7d/wFedG/D7Ex9xs9JfxawJl1vj036m3Q/jT2OK9m2Sb9u9fuNn29kIijQbp3+pPJrfepeHFHO8EmKAKftOG1ooIKtRohQ5blrhEwK+YuShgn7S7vsqcwj+fNlCT7xEqA1D+6tg7vL4X7V4Ue+DGWfi+5KyFKaWalUoW1a3jITRpvOuWL2La+7s/CNRn96WDguZd+XXTj49rKWvGcBeaLt4MgbNl0DSweeh42ziFTBTus5eMHt9B2Qt4D4wI6p6hSJARqrYaPwa26Hdy2IzkgmjC0tTFCtNm5krqwmXIOw5FZeDCred3UgxV3FkDp+0kdNREHQOYkRwQBQeErT+C0BTb+TTqM5flrwUqvCX+rk2wG6Rk5Exx4MGJp7Trr/ox0w6vnbTfk1xM9GbOjzi7MZHezMM7HOxbQISMubQhP1BbX67ON+GUaXR1jwEgdWyADMrglc/RL5/9ojlUdWiaJgBngIWn8ESiUS36DKeem5krzncd8lzxs2XWNHB1+2aHsSkHdix86XFHdyC468goeNS//rT78dmytT8Omty+ntFnVQDp2q3waGPcQdwGBYRviOzVVg2AVmFuGPPEc6GQWftqHRGnEASIdMm/8gfjInJ54PTMzKGQ6IjiZvNu+xsceRmYVoCK6Ui1Pn2w7QdPpuBycDwGMMdYfz7SEBBIr1bUPNYvrmk2rHtmgT8XPSgFHPwG7KL6fYPZk1TlnznRx+OkPRnfHsbwKkPq5MlGdaRlYti1ikfLIzX3LkSbOUZycDbHqO/sjNwPQCuN8Bd1cMSahLOQz0u0CvrfO6lC8dSChEDJE+Gw/01qYu/e3/8PaChw118OmOcM6Xk/dN3uMseU8C8kQbY8eyk5ubHgo79r5oXH3NV2HjtJxvpqTxu1l9FT9XzkSZoD6FjkxEtz284jbRpcP0sj6FTdtdyp/dqIbNfdVrr5sHpYiMMH0O+mNkXwGcyVw/tkoODLjGrqfsOzHOnWxcUkiyQQIEZxaZeKA591mnv5NEspPEMan8aExJ/UXwNvtNINWzbBykkSkA4OEse66E6GkoICrPSGObVVrW2GcO0SqVUECEiBlH4OMvlDKtn06DHNKAlzarL0HLJ1F5+7UxmdEkXZnIAd0LKK66+quG3hfONws3PSzSjnCZJU+yPQfIY5EVhh3bMLcOD53jaTfwo8LxqFj8V990Axp0BKNepXNEtqzHfIqFRW8DGHalEQd2mzS48Nlvg/ttoDUHvuz5AFLH1qko694IhBjmpSBcWWRgtEfdsF4dd6phcoWZpTC1FM+c0iZzTXyVE7TDbT9l3wmg7bHd/G7TjPdi3fDdg3kE+w66XbSDSv52kjBsmXdb/qj5x02LjCRhdH8HpJlKiKRRgEaYLdnl5PGZG2AHe/hSWLhXgFenrL5CKs6iJE0wg48+B9ycAffast92rc5jXRGDB53AkmHkC52xhXPDrI4JsgCqWRxZ/FffcoPjUSF9adpVVvDpPhfKkoE9HZe85wC5YrXIClcOg1whjjxlxyNfNOZf/6rv5PXTUl8alcOGsdqXdOrxjXPmHFQcfbEZrz4sDfzKFwGuGTswtOMGWUTDirRD2xhUIHXYCKB6HiEs9jBs2TjCYqwqNB1l9zolRlwBZ7Xm+pQdqALmo7WdJIM6Q1WQULbp0om70qwfLeO1Zd5t+XU5ugxw6QWpMM+nAthmcUl6V58c82Fxi3X+eU6O2/R+vpCvEK+uA7LKImnzpjDjogb42K0iNazJ7I+0LsiUiYLcsXYmtBel6cknYuYTUq+uAe6cd/Ovf+V3jnzRUJbsuHTOD53zJckrnwxL3uNxyXsKkMdG3G3YceFbhbJjx6U487rngcB00it+AhhH50w4Vo6AfkfYDVEgrspQAjb32uLlbkyBL78VGsUANntK6NSzsveCj3KEdsS08iyAq05/WVfrmT0SbBrMCQAMGOvKNvYlnKzdjuPK7irbfDLgPcdPH2KZvd86QcWBiIGe06eJhVZwigDmOcVKb5d++M2mZ2O86/mvHNuNcXCImv2U4+o9pPYT96EwQC3OvFQ26xjUtpA29Jf6TO/Ws5JTGNzN4pSoqbM4BQkefPQ5QDEF7q0JUw6/Mxtw5sB+N1fNgGQc1BR+l4sRfpYXrR645HmOy4ay5MK3ih1ZcmwHe4sl7804ZHXmAYYdL1fYMc3AuVGzGDKKA//27c+nsrPIHDq78zIni44loNJbiYDuKsiXQGF0ufBP3Bpi7REQEfyxF4EarQAwgZXpTl1I76tjSGd0jiIT8iwg7tQJaEBFtnpEihnlELNKiOBsp5zKOgXgw1QZAlRkOiHCudvF8c698ItAc3MS74xq/RBk7Z8TOACA+L37px+Vt28zI0WyINV1YLFsHFzpZ1ueIDnoZL2W3+kbb8H09TdCu7tqny586q309k5m/uh+/L9jdOaRHcsf9Vgv8cSkz0zcqsIxWWN/UwhkengIz0rm/0QUXrklxxiQtMlF0BTGSyHCQ/KrbQ4s54qm7KT+GWAiaXuXPx/00MeA9UeAQ9fHOo2VAYAcgLIEt88DC4cRcNq0H/Ndiiltx/cW9737Hc9f/qc//vHCo6CZsnT9yJJ9YskmLvnOO+NCkb1kexOQ1Qw7boTIig53XTMsAmkwFczUaH7pbW/j9hlpfrrFprZ4IPVmnbQxA50VMElAvl1hFh0+wz54cxVoNIHjL4wMOi7lDeCimwUJ5pfJg68hcJTOZSgrFoeexi+z9kydVuq0VjIb5Q9yhPhaKOKgtgQnTpwSp+rbTqHY/7XfhOZlx1Pd0E4XyUkP/sXHwYNBONUOLjzhmIku8QivMSJzHk1MAwBmnv087Hvdm0L+KNSlCZWbnD0MTz2A4elHdix/0qNlwPSy3iYNEhRaBIkTV5J3kW0CLg4yAAU8peCM02HDLPIBhZV8QhbiCr44CARG62SRSQJ4gqMC/vjz4E5+ArS5Ch71QY2p6uCm7Zc80D4LLBw29Um1cVP9DQQ4B+5cpOaX3vY2x+/+pGMuB56Lpp/yHRr6GT/vnB/6SsTFoUN7DojV9oxkwZNC3Yx2rJEVwo5L0/q+MQAAIABJREFU53yzGHKjGHFZuP37b0FfpmooR4jSRG2j8/h/PwIGXRDpe4GTKSijc1Ea76EbgNZM1HYBw1xjuqLtatypLiqovL4pslkTCgUBWhdAO+qUZj8MmcqGN2uEmFV9a3PctyJOsSU93fhGP3UwiYOKTmcj+9SyVHUAMt/jccbEv4npx/x7yEb/FgirfzYNnWrr4KVx2xFgQl4rkSZGK91t+RHLrbKFHFMnqcSHj8wzk/02dAvPGPXCYW9m78NAmaQNbStxp71Q3/HFskH7jbKHVx+D+hHkOlfMgA9dJzDfuRDb6lj7JQdsbgB+VIua4cqMQgcSAoBRF27/vltGXBZDbhTONwuaKZ1qyWMRF3s4BG7PAPKYTYg7nqQdH3jXt74Aw43FJEuEP43hjWDFUauTV+B44xRJTpDoEOlckJQuvTnJEhFgEsjaKaPds1evge1oPr0dWvNr9Wdm2ZyHKDmO7CvuRXdWMAbizmqV3d2wJQBZwEMcVFSUSHUXyTJM+cJnwkA2n+PpS3WnF6H60svScCSgJXNbNp/VdJMso3WpJ7PJswXi3ZVf6z9ETYSYborPqOrQixqwpmfAPN47/G5Bmc0ziyssY571HprPMkTbGPZu29zhm+TSzsVY9rH2S2Eg1IVMsZypratFSYMc4PuLB374O16wlZY8Fpe8R21vSRYT2PFp36apsu+cx5h27HlQzLz8RW/CxmnpHBYglR1ESmDa0OZamFaGtzEoywyTP/Q3wKMeMDUPuuTKtG9umD4ru41baAr8RkBQZ52Cj3YE+yZj4hBbrMzOdERAZQpOkkJgU1yWoRA+lk83N6ropYx0Lcz3UA0Pf8+3y3R1iwtUM1aNmRHU1XbbnGk89xOkD3VqKjOUOpP0iRD3hkCoI8uCV3/t/Vj58K9HzdjeAvHeZPIgv/peb1fl97WXvHLIMwjwfgQCwbO2D3XmIiaY5AsSAA7nyjN1UV5xZOWCkEfPYUMjlSQAlS3E5+AkFM65WDcAgw4cDwtF2qC+LOOf2H4dgPY54MDx1HxSy6geIydEpXsRU1962xtH3/uTf+G5VdS15LCJvY97XAhLxl7TkvcEII9NeXQEDntWEHtqc0ktnnYDv6nacUFcNGj/wWfx8t8AVASwI+3tRms0PXM4AIZ9oGhAGAbGQAGdCyAA/vDNAuSBfXo2++WGYy7ohMp8HMIubhX08PFeyqwYOs1OU9nkpVf2B8R3w0X5QwYejiAdHHwhab1MtdA0zUfls+x0qgNX/ZlgvCPrUGCxLf4eNuJJuj3BSkYKHBGdoPNnO3CmOXXZ7wO9HvwW+Yt5ZwV4o//vovzaRgjyXjwKO7+RUExEZx6JLgynzs/we1i4kfRjF2ZATmY7aS4g5XcEbeZETsLknIC6bD4UNjYCg1GCqAjP20cnIDMBh54JOvkJoHMRmJqf3H6JZGXpoAtuzgS9OJAVdTiGyiAA7OT84sCVNxdcNIjLkWMuBp6LBs+UbS5plj01hj0H15LLa1oyMxPtgV3g9p5koWE1/T6d9gMiHlHcs2J6WBC3XNCOG41nXTmHYnhQp46RHVvdmBmVqeLmijTaQjtHujUF0EN3WRrt0VvSVBTpxZSark5tNQbYgqrsMWGnskmrHY8pthuuA4ihWBrz7NMexmFTdQp5CiIe0ib4k+Nuk3aIijwQUTeEvWlYmkasaHrep08fztHPSWFsrG/oiHIRBwkp/a6fE8PabJp6TvicdL4t827Ln+qNwWVYMYcU0uYovAQWcm9dOUke8ZnGwVbLxknaiFKFfe6MtEovLhry4WWzqIQ6kra32F4YfPhGwfnuchzo1OJ3Xae9+rCR5WTQiqeHAZB17kMENPhg41lXzo24bAy5URC3nJsexj0uiEd02g9EtgBQD4HbC7Z3AHliqNuQdEe3gqeKPpcuaMeF46JY/Dff8ibeuNBMTEyddqkTVMDZlyJHGEYhX5D0xc1VsB8B80eAuYMAkhMvLY2W9u7D2ztIO1Kkp2bFnXYks4m7Oo1UN4xLdZlluswB6MOKPHX+sZYhDjLi6HPKtg3AcgDYzxbAKoySq7pvnSGz1iGqB2SQCVqqbqJvSHLldjWAZv1eu9dWGnT9b3fll3ZRrT9dXSi7rsXBkDx8GZyrQeuNbxWJG96n555eOJBilK2erIOyPN/kmI3vUQQgvoYyXc8MN3cQmDsszsbN1fH2G8pG5MRXYiqPw8xMpRkh00kU4s3V5uKPfNebHBehj42KPpdO97goyqGbuFBkD73m6WkPyBPliuDMK8q+I16kgkeOZkaOfMsNvS+IfUFNX7Suufql6J6rIYGCsPnT474EhgOQKwIb0TCqpO+he1HycfTmwEIpbvLjHCor7nR5sDjh1AkTNGJwcPolAFaHX8yjbkgT/m+9+cR6v7ShTVxkwR76Kqj4mqdyJCR3K4Adq3jzaTr0VlEQj/ZPYnPVCaYRCYAiMpvPyQNCldLWz9/x/rspPydnK/sRvDcROoGhugCGKNPgCiRwRWDPmpadBZF9rjoSxT8f01LKHpdpM8dVn44oLj+PoY1HbpQBpHNxvP0ixE44Bww3AT+UgUtHr3B+etYeegL119G65qqXUlP62ND7gnzL0czIFTySvlj23VbOvb0QbfG0B+SKGWfe2WHH2YUgfV+6IjDjEYrCs2ug2TyK0uxVoQxSAc9GV3gP9NvB6aFxn8YppR1tc1V0tsM3gU3H4ZBm2psCsdNWNqQPLCuu7oredn37dGJS9v128ZXyChTK0CLD0mW4XAH1GEKnPidbHNj+z+kzgrkyr0lhYulzEqO16rwqPWTuB2bwSMEIMUpiq/zV0995wID5HL9+V+VnGPmIK2Cqy9Z9ZLVpX2P7stU04OoAK9EUHGQoNgwZhh2neud4TDC1DE5CkTGiX0EHJO9BB58JBgH9VRCXqaBxIYy0cWIGNi7GuothcGylOgKsbt5qHPXsGiMUheOiKLgs+j6FwDlf0lgI3B6yvQHIVq4AUA91czztHHs34FHh4AvHvmjecMUicWcpgTEnAObEOipMud8V54z2VnVwhMaMXlsa8cJRcYZoR+KwIgscNyu3gKh6oO1w2rEBJAnFxJYmFuUTi4R4+OMbl428EWMdlNFxYs0prGprgBpHQOtU0zqhxDDNp6Zr05+0VLouCYiPx4SP6SAw6fy6ZGHvwSF+IHzqW1Li21Im5G9X5QcLALIBSrNkOjJlDmCpYGxCIMXJW5WhiAHy6tj11XQMYyYzECjj9vF5K1vGGGv2jWlg/lKpn/5Gar9KMNTZ6Zw4/6Tgqd3XvgNB4gBANFhqPuvqRce+cPDFgEeFY+/spkMxBE5tD8kWT2tA3kquUGcecUl2IYjjphtxUZQN11j6nq97DXcvFhF0zSbokSnXZYvBJkCFYQpVSsV9Ceni/Vca5qK/h0gLb16vpExWWXlcwqzgKB2ekdhXlDWCJqjSA4Kk4oiEGUcdvAysDGmjHkFuIDA5Bc4YoVFzhG3ldIM93xwTq3FgC+KBcaVP1I4puMtAFTVZ+7h3oMh1jVsXSOwW0HdVfq0zfV7ebDAUnalhduT1bd8WuEP92/Nh/AeVzaSA5PxVlp8kJwQZipjjEmyN3vFc3ZyIwOAlCWlDv53arz6uSDgc0F0LD2j8ySJIcsnxR8Bgo1j6vre+pmy4xoiLwnHT2YUixCVVnHt7TLbYE2FvAFBdmbccnHnkmuypz3ANkHOMghkFMxeNa068GN37wtyLUpibDXeLzAGygm80AKZnKx3fth7qrUvjXLoSqu0RAB+mhSlql+EoTfkdafwpKh1Oo4AkDArRuQeG6ZSqNdsOiwACaWeFyFrDu/Wkfwa2FQoR31wMZah2abJlxMDsjTcBUzMxDtoHFsgxNlhyQcrNwyxh41N/BZSjGA6WwsyqWKCzB6dlYU6zAyCxuLFnJb/PPutmzDzjhjCVTs8ploahK6rlvuH7xp/9KYYT97Koll8HL1+WYe8R/ZlTzLGe7+Ua2S+DI0tnLgEied9e7XpmAsiH/TAAXVbPZu8L9hDQZAbCS1sJYd8TFkcxKAxCFGKX4UEogKXjwMOfkDa7lKoUtrhFAep1waOB7P0carIycdDaJQc4ISWNEyde7Nh/gJgKYhQEuD6za7CnDT90s+XQleXQw8Yk11H/aWpPf0BWuaK2Mo94kRy65HjakYcb+n7RYBRooABz4eamjqFXhobkKp0t9AD5v7R6oN+RXhxeNmmXnDIY5D0w6oKdg1+4vLLaTpfU6htAOACki9t8phA4q/cJg9WVWxzui8iIFXjjXhUh27otZFw8EQEesuEMygiQQnACO0UVgLhSJ4bhAjj89n+CqWPHA1iOR04kME6fAHD/170Ro/X1uOpO3/JMEI6YapXSjICMFJIqvfpZ+z77nOfhkq9+Y1V2gMHxdIuE4wQMTj6IwemHdyw/A+HNHVJ+B8hGPvrMdXFHqB8OjF/fUK1v2wYE2B3JhkARgMGAd6b+zEAAaYoSm+wrkQ4y+fExrlmeewEfZmKuKIRBzx8BkwONumA/ArlGyKdKOZCFJQSgfR60/1joFpweEsOIyRzr383NHCP4ghpUUIli6FE4mnKO4RxC3/TD6sq9PbLh0NMWkLea2pz2A2ryiIgdpZV55ICGG4ELgAswN4hGS9K3fFqUoKzGNjJAGuCwK40WqICxAiP6bcHupctBRSNMPRPLlTUPPoBQ0PJKZcUGYAPLdaTTaJkyK5ArUKukkVZ3IQFYyJcu+Ij6sWHR4PBuCGVTgDBmTuXa9lOllVAjyp3G2RPDgnNFYZj0AM211RjccDRepPCd8mAhPQ5ssPiRBhwBFzLn6QCg+duh/CDoNpkKtkSaA5mXSLMSsHRUSE2E3eGgq/PCE/JcJrBmCr6KEMHA1Y2IRHUGyOuKPg/dcEhW8RVyHypCTmXBCcW4RgCuAcwfBdoPy6q9mX2VuorDqyskrn7f5dXpYChDAmJdlUigwi95dg1ZnUKFAznH3tEMO9evyhZHJz37p/Eikae1hhxtbCMhfZv0tNPYY2Jx5hFzMfe6lxzj3sos4MPclaNeN/YHFj150JPGqdP/+Bkkj/46AID3X4mo8XoBe6+aIACNrCBOmwfpvVSLJJOfpCmWFaejTOetblmmKb5P6ShjY5+iSQjyWnrdlCjFKQMwfbaKrpQ+dfe0CH6hPmAWrRggFZDjSnpjGm/tT6wWUYCYWBo8bZ7NX4wMsPdHGqx0oLIDmDyXXZZfGb5Gwuj+1SbfKUKGU+gZGBoDrm950frSmHCrH6vDNkVlcOXaFHUh7aO6yb1eL/n0UW8OzuWlY1KmXrvanmO7ZjA5oLtuK8I8B/kadyiU/4BH3dm5r/rSY8Qc+pyPMcmOp93EmOQ9Em3xtGXIAKrRFRPkCpphR6OWG3DfNZgdGnDwRTH3utu/GJsr0qhKyDzeTEfjp85lSw+UA6A1FQ8rI4itst8WhrR0RXCeIe4RoQufhLUggmdypiWQt//XzgyEcQNVUPc+7J2sG9qYXeLi1pwI2rUyceagK0o5Zdqsb6tIZVfWXJnym+8Pv/P7gUYzhsslWUL36g0xsKzgJ+yxXG8n55hN3GoegEg1AWgoHRx7NFvtZXHxwx/C+h/8XkxSV2WnfSfSvbRsDGB0UdrFTuUnAkrdMEhnJ1oIBti5BLJBnGWmkB5FGYrkwUG5vOdS5AtGLA8F3ZjJA+yMAB7O8T5uzSllVaas6QEFubhvNiBORV48DuDjgUxQnM3BtGsqCvBmG/BDYdV1Y2njcABKkgwNOph5wx0v2fy133+QGqWjkt2A4ZyfcjQzcq7P47IFgL0gWzy9AVkteGrrckXfk2syFxW5Ar6gyw7dgOFDEArlAkBQEha1t2pvLHvykyvScd2ICAD8CDzYBIomsHA0ardxdVWYeib2ggjGAFckB8tAojPLMDmVQeIUuSyjM01RJC43lo0xIKv8UHEKagdmVqbLieUE265X9B8+bcRXjCNk3SpirZzP5vz6WAgOunkZBhDDeGNy9fPNMytX11CurFrErt6/bhPyv135OS6FDs8JQnbJhc3my1HQcSVNhujHbMpGlH5XzVr2pwi6cMyrA6OsDHq6cb1e7xkgFCDyko+wD7N+lixaMrsSgINzDWD+MJgK0HATXA5BRaNSTwwBZALA3RVg/hBS+68yaTlZ+8sAxbGjN/4v9t4s1rLsPA/7/rXPuffW1NXVXdUDuzmIpJpDN01TNBENVGTSlgNJUQDZViwoDhwnzoBIsA05yUviSASUwImBBIiRvOQlQBwYlhwEkeHIciiSUkhKdERxaIpkN6uH6uqahzvfe849Z68/D/+49jn3VlHKg3Xau1G99z17r73X+K1v/dOqqJ0MGhFbiE1y7UfMi2KLt0ic5JUUWTTy4xPEFQQm4r5kcQVxHXVn1p8SZw8kG19bDobBPmxJOZvI0s0QwL5u1G9+IGPq3FNgKHNVO9BQ3Jnrb7i92rLe4xnrd4VBh3eWW04oGNt28bYEjtgUakallhtU2RU7oh5SLTygzA36rh5hD62snOHnfP3wdsDpnMQTkSCdj3m/uZQDSCxz8O7jzO4ywi+g/ZI+NTR7e4jyWz/xuMa2saiuWKSdw/zNnEJMPzAMt1oom0D2LnZoJmOYtYmJ1djFTsa6pW+F6z2n+wU6T/e9WGyce0rwfXbgfdpk1xHbogAHm23D+cSqP5u1Esu5O3f6KRlvIbYg7guB6WHEFqtq/vbWYMgAFsQVTER1UVwBoMMI5xuWy0DY/FAAr/0+n4E6ndvsMX2WwaCjifx06jHZx8yXvCF6sMFrLDnshKszLBNFADH4HLgBnSzk2zbIjEWzijcMmI05AyYjNhlp+l6SfYqMMapzGYh+N1YOVrU+H+Wqk48jBBlSsWwWLbDxHkAXDifLv7eIue0Xs8XH8vy0eP3Q5UdVQxwBIplAyFcexLnLWDuRiprInNz0PrkICkQqgqIAaiKoM7aLMYSpllhNUSd5YhJGrCy5cgUqgTrJg4nTcOoCePsaaD71vhWhQrWSShErI5Pj232b0IeVQgSM6TyBRuDSLYgtuFJBbcUWb5FjJRkygAVzt6XOIFxLwajM0XU9SldRu8rcoR6cgYFkUKBgU+4+rf96lZ8ZKJhog1ShoSINPn0BzBVVlXpVDfUNQN25w2NOJMac4lAwpx2IjeUYo7X0bCKRXu/Hs3kbeZ8AOLlcMzfXzKEA9AnKwM/qoPlNzdX0XPUddn6Yf5K99D2kMxD58naSCc6+l/OQ3xXvJz/n64fOz0OUP4L+IywunDW3mxJA4143m86qhQ9zBdX0uyt5jU3rxKkruHASsrrJq6lwEnHvP4ubrdfmDMTM4HU1Qp5NWpm6yZGZpe+bRx+z569dXda2HXl2pjJ3FbXrUbo5uq5gpNYWJziJrLjX3luDIadNTIkrUXIGIUYpjMLMHZi77nufPkuz/Q32gZJmeztMAwTIvf4IWNuQW1m2bN4Es4n001OPOdDKs3lZqoyEq8p+a6PsE6wNoPaYyHpflpnm0aUZU8C1KGKKFIBNGnbWwS5ETp4xm1l5jbyT2QqsSS1uMuL3jJqtxPnkwxYgx4p0BxQ35MMGzORSJHlAwbGh4Oz3Xa57HKUe/jV438OU33ZjidjEIhKKxZUwVwFWUapBRUZm3lZK0c1Li5UaSMHrXcZcZe1DGhBe2k9lz7BrMW2r5nCjq0BmgKq0fwHJ5gGaV2ycV7HboVZ4kg37OzpgtgewbRyIVoZs48cAmyqIJxuj9z97tn/pzSkYHTEKMRdKTiLEVUIcmNgCu0v7ziodq8uQgZAf60FcyWJXiLiiFgIXjGsh1EIo3Zmf/uSf4Omu7koJhKyY42wsxZirLxfTIje7Nc2n0n83LjhIkr7bjexznFpuxRjBbCQPft/M1WrskwbOMkRhzpZXkxnmPfYsbgWgcsXeFIjhGu5mdYw/vEx2cJ/TeanMl+O87H3VWHyOL5IY/INk2g/Kz5ARf7fv0z9gLvcSalPbD6bw62MFwym+hZnFwfQFQGvaZjqEiJUNb88U/MryUNvVhG2C4DE2FCw7ZduSR0lLpy/I9Xyq/RrxXitnIdB8BsxnXsYmCNfCahPgowmd+Zkf/xOE0hGqjkGWMVnXPLYFcQ0q9BYwf1s5hrxU2J/kx8R7hNNENCeS2BXcGTsGc1l77p3vwZHYXfoyNLMsO9zkbQbTasMoXgMiEAZdCnjtnBJSG3xoWG8WRYAZLveLdXIAUBpc7MtWAVoYuGugIlN4WZ5CFitLV3c+YXXfrX1sbcRmD90uEswF2hVsFL89zP3FI8nopaQIqwFdTuvZ6tVEKfAqt3ryXB6bX18Z0LKvx2/HHQ9T/soM7sX00IGoRn7JWazk20wB3a6F1GSxCxk3rB70b92YSXOrLteoILW8EDdq5V3ax5iKdFcIm6Yi36wVKGUkfUEL0ndn0RGpDLkZAFG/RRxMMN0FyqMLt/2CARdl8Bxr73/Xe3rmz4O7DkxdZeoKUyEw4TQTTU6WI6+ig8jKAbIfA/mxmbsRmKa1L2MuhZkLmIv0ay4Ad3ThzDPgHcjoyZsKIa2n7X8kYGvLN2DQaSFLPQDYeNQWm8FW0j93iFUm6hp0FUE0cj6Ews7ECbaZpgCqul0npmYMrZB5zUWcCts6SuYfdeUmW6WLlxezBKHJsSLCJKsliADwxM/8JYwefTRWrzW/cwDu9ozNZ4DnwaUralsbgM4YnVkH0Pszj3z0Q1j/nhf0/fZ/s/61/y/CrOVneG7vydXdX/1VHF6+/MDyw98htsEBo/ByiFWMKdwo6kAndnOTNiUeoDGgtZ/Idk5SQrFNlvdJW/bi0UcarcSbjcLaAxVUOsmHbyEVEyFBRSUbj4IPN0HzCTA+lWomH6rY23gkkRKriDzrRUXRY488Q+AOMixEZMFUClOZ1lpGYgUV5m9ZjryYgZU4VhOQB0L/0s+o1J726qyMuRKhiLmbRF4pBGXJXdfRRncW4PB6azpR6li2Iqy9xj9OQ9nTEDCfSs859VjDbBkm71URA0JRaPJiez47gVi0sOrPcUAMsy7lTVsf8uh4Rt5ru5OwsTI2BSLpRBAoWnnug98ZLOvAHU5AejzyyT+D9bc/638bqC1L4+DkQBDMuE0/IF6vfg48n/v4X3/yItZeeK5l1oN0y0Zy3sx0+Mzwt+3PfgaHl195YPllPg1xg1g8MGB74qlNssuXIWaWrFYRNiO584xaTBiws7YBSMG49sqExYIiZMhmUSHMGVQU4BkgBWOyfmCiE7VoKapH2HgUdLgpYgsDZLe0SCz5aN/7TFsXiSFXhlvHrI/OUlc61L4DlUKyQCvEtRBApMGGTpkcOR+f+hStooPIagIy0NgfA/dhpjQWTGiKKY3V3I1rJ7JkcAHVDbi8DxHHIgNz7nCyzkOibkH5QMBMLCzqqQvJay2kIKFpVz6nrLRh0GqKRglwDbyz7NRYcWUNpwkOV18KoLbYF15GlTlLACNhnMVFASZG6eE7VSMDbCpyvBFmXudV4oBb0zLdluFRccP3xh1LP2TXjCjK8vTHsV9PnwoQkxwtFWdUjknwpPJbOrFwoADckvLm5m2igwgXY2G3tsmpKNk0wJAq5Ah2H4mNilpO+gpZRCPErtWkIgqVIqscPupCGLTIlbvI56nz4E0G9ZN2lZj7fCkS7VD7lyTOJIWCkNi/whsy7roCJjd/mwLU1RxsSOXIb4Hob6sLyHacJD8GFzYgVseQ0mEDPcQd2kdbHrRpOUYAeA6UMRpORYi/eSZX47MwcJWhbI4bgO/yoR01POZ02egfT2ZyannhtszOii0ynKbhAFMQUjzcAEZ3Y64WBhTtu1wrH4CcSujlZq8U6FLaRCzy684XvoDN//s3JZ0SRl902DW3DHk5iGr6/btJZAPw2mlgfFauNeFQBJLxfxkTtuuNd78bT/zbPxvf976Q9qQ7qfzaLuYJSUQu5uDUr6p7zekExcrYLf8QERRpo9pqRhYwvTJuFUWgyGSMAhQgrDoU+H2SlX4oXVk+ZIGFfMVFYcnDozMooNCXWMWmsqMUoJ8iwtTmZ7RenEhI3y4dNirXjpk6mSW6QhCRxcPKkVftWG1AVh94SvJjYqbCvER+DOkQpa7LetJG7gCM8+zPLMDdKRvOhw0yA91u7AMhy5EtME5ovRMoczznJnImS5aR6s9Ct2fKQYq41hYiXMlkxUhgbk4nOmhdolhtUPeaJgC3jQfcnmn7TeD2bkh9AExf/hq2v/g7cl+r7zgztwfdf+AxRPIBhV14f3sbdes28Mn3LzLfvndRxYnlN7Zr7Z/vmbeHT3JVxBZJKVigey2SxkOuLLEqFHgtJrK7QncFHtWtYzWyEPPFMJ2TimnZP7sIBaboIzP3lCmmjMaLK8Rs1mYdsp9DCxSNZs9bR7AIhWDQiNYFhKuSolaOTAwdsyJHBuBjelWPlQJkt7AwhR4kfsX6ov2xCSFIOgIXdKWg1g51vi4iC8AFxVleZvTMNNG5U2bUyAAOAN3IzYuymMI6sC29M0gK52J/BmyafclXgYgnbEkLsIM9NKCMiCiqpyslBRYy8Aci8Iz+Tgh2G1HQBgw5o+MQMfdugta2G6aLg/vxuI35cMRrxI8e4+EYJeJi41vmB78Nr9P8mtkymFV+q7/Mp6Dd654hm9TA82DIJ5Tf8MeELJTQ34GT7F6aSCtJIPdaUTR6IPxdkl686oorS63NBNg7kScraEtdKkOHTgBqleHbVlGHXgNRuZ18FdZMhcHq9EQ1jYd8ZggBmR+JTmUo1qCmopMtfL9OXDsdewUEjfQh3jpDe+QmroUq9lbN0mL17JCzQk/jVxBX2uWeCKeJmGmJ/XEhcEdAAc/Wpd+rZ5GCmyki3AvJll6oYfZjnZ5KXPNcQKlbA0GM8k0FWLkXVgSEDWrywgoyFaIfAAAgAElEQVSmXGFbw5sXn4Bxa5ts9shsZ64webg7l9Tq28KHl5vmKcmmfXeRga3r8d51SOcAiGD6AzthvWb7j9NZJwI/I5J6+gW74Djna4+dgXRO3478NNlzr8Kww67xvYcpPxi911nvk6RF8ou6Dy87Avu15F1swc022No1xzQRG/Kq8UoE2IsCfNR/9e+DIq5J9GHRE2TvPUA8SYUij70ve7+WDq/9HQB1re1xFk8040feDQDgfp0ksnOn64DWHpmZCKdl7HJNDiJLxvqKHCvFkJtjMiHgnP8pvvFE4HUintKMaxkxCrgrc7VBJlCH+UTqxDqPNbmxM0cF+72GlcWQoQESBIYIXMZJcaaDzwDJO6qNZmWkSSRhbMxCZwKAbRNfLb5xHmhAyKXT+2O5HfJCebUFGSL9PsHMpYT49QtFXzjSPWOHzdJ+fNbZPVR5dDzjHTBOzWi7bR43j+fz8HqRIXNzHl7T+LTXjVmBQMnesXUw+F7RthH5rch7DTTJrVZsOjTWrJxabYdZlXAWLlMIpnr2Abr/IqOqOKOgoEIsLlrRitobK0MmdHKmDrZC41rRleLxM4rKkUunOpK8hPGxAPmtlABfkafBV45AO36cfByNKkphrgWMbsRdAfdlJmILHauijG/qOTl7rdqxmoBs3jzHKPQIYwKYepNdiQl+AaigHulIGIzwoaEs9NrPcrkIMMIyqBsLL+CIHyH2psGWwrGhFSNARRgVBtYGuALOttVSNUWkMSgEKAqYRXrBFz1b7F1nTcJiJL29z95jpVpunhbFbuXSBIC7cVq2tzLYpcF94nNLPKFP/v7i+x6kLGx/YRr5hAW2ao0g/Q/1/WqbBFhZe7gM18JlVgDUNwAt36wKjEVZNYG5NPeB2EmEoPN3x75JbiVWhaGIJaqSB98OjDp5d+nE5E37M+m72fomjeSrdTCB5hkLSEzYBVzagBTPgoIg1COx/QcXBqg3PY6E4KITFXsrammxmoCcjpMUejreSJZNRWTJVMsCnQKW0y0H0MQEhjS5isiCy9hZrLsh21K+mtVDWhrDgsqb27J8y2TE2blElHcmkjCNuQFudTAVdif2pe4iDfaYwpbeykTNtwargyFiLhwB/F4rbKIEqMw4ViCNBYDX8uL1sYw2zZf2PjrpfdpM2eIhLRcUhG2SDFj36eIB5RfAjpWNM+xUdhfFMjzwPFcB4uLMVT5hGwyQMmM2cYECP0NBv+pUQUV1CxLfmNCLKRszGD0YnQCvAnbV/lP7AupkQvZJooyVNGRHKasDK4Sx/DQmjKzYRG6Fr70WWpR4YmHB7tFNXE9W7K3wsbqAbB56AEyhN2Ei5Wgm4M0KvUJgCfMQvAwLI26Z4buL4qk9K20hIrDuo6eSAHcBFrysYV4GY7esMuEMAsJyLboXAGUtunRF1a17stxWezmgIgJGnef0cMbtrshAADxLFDJT7FV3FaYIUmNpE+MNNs1NrXACvHz25XWuu0RhFxg1xXI8N4sbmSjaBiNuGfOyObeZfyGgNGzVytXLfVL5ySfoZKtsBLEOAsxr+4WoCCkgkQC1TQrm9k4GbhDTSCILXtRJD+be9Wlu81errAe5gIoyWRYrIXM8sZ3PJYUyWVOD13nbMNbtjQVnt/6m5qzgdi3vpQIicGFGoWMUexMGjXX8AqKkf3qFLS1WD5CThQUAlNrTLhOt4TQRJup5SgQRU5AKvwqAUk0Y3ITDSLN7ZgR2D8IuG2VHI8icy4mEIWt8L41nYQodSizYQNgYpjJcs3SoLJYSfTBkY1gBeGGh4TEXDJxZSRGz4o0BaHWxXyNj1u3mmRHhLP07CWAHjJds8Dnzbdnqg0QKC+GQ0ab36j/u79xmgIpr9Lzk/hDgvR0V0PzTjicnl9/BR+XkzKmUKr5w87M8cRCJnrgkwFa3eNb7vtMIWFY7ZpkBklWWpuckzxUcLxqXRL33zDU6LS0YAPc9qCPtdwwqI++TksmS6kazKBHuWysLJSRasFTnzqJJDf50DJYiZiYyRkWpB1fsnap9NM6KulCvHiDboSE3c7QoYqYpQGOAMOLCtSsAU88qRy4oHuUNcDAJipTbP4HvEIyXKKrMqarvKzrYSi7YLMChC1EgqywKQZPBulNJ38qBZRRlhsZtx3ecCLmujBWdgnRwkS/Ba5ijqbWJTQbHHguMM5br0Hw+8sJ7QT/3Hw55EwBg5/e/ip0vfqllwHUAkHo8+/P/AYzXx7sM3Bmbn/9d7H/167r1lTHoWNLb+2ltHc/8+38l5ty0El8/vwbmSco//JsPU/4QzygbtBYwEZAp2szu12JZVPgyP4IGlfbLbJNXBbEo58DFuLXk0ycCArGE3SSyjQnsfWLWBpP3kzJn6kBg9NyjM9M7aFayyVszFKzzegW0BKapH/a+jALqmQmM0oEI3BUa9YUqaAqmLhYYaC0tVjMU52oB8jFmMEstLKS70py5yAqwFIAJdSaJBAHl2taarjlGC9a+M4PSz9xTywjcz4B6hIoROlAT7c2YrNuiJhZdiMB9H+yETdkXnlXwJTR8CyAksBZTO7U/1pgWTMGcXb5sxcwgnne3IAE9r5Ihox0eHPBlALTxPc/g1L/yweGUJtAwm2PnC19KwGVijPRCBdyLP/WTAEWYoFZ2DBzdvoP9r3w9kuVXpOuyvoZLP/WTA2DX6/07wJUvNO8PJeWDy2+Tg61afJ9DiLKsVt12ii2uhVWE5SC6slhoyG+SpAeDNL5Ir6xbARimtJNvEalymDRuRtdJjmWGhfhjVNlDD9ovOslzV8zZxDZi7bwNXGTR5FctLeIDqYGaJpTnxCSzEEphJUYjUVbQAy0t7JAxvzIsebUA2Q41eTvJwmIe+7W7hQWBC/rqm38G8NpyK7ECWf86o2zuG2NmBqgDMEN/NAHWTgMkBvbGUKrGVhYzOBUzJO89GItGu4V77AiiTMfyhMx4ZMCTLqdLoEko9PT9Ps/Y5ODgK1SZGU0sC019bBM0dscI0AeaoRrv8JVCvrfw1sX0niZBasrncUpAK99xJQgLi5is7O9l715In/ZKbNIDIeGC1ZP1FQVdq6+0OtCpEahqaaGAKsnCncCsJkwdSLDNTuEWF9FfxcoCGvENlYFOJnn5nv7eH8nLi+0bmVivm7IZEEebO/iC0rmqVKIC/QxiYSFjjwGSUFEjtbI4xtICWFnTt5VxDHEvvWTylu8Ts8qkHITJlHhAp7+DmiACWQxh4GhnF18UIENNA9qALMQIhWfoSFxYjQhZrGIZMAq6ynxtix9W6wu1xXOgsyVxcbM5cyoJgGau6pUXziysopBw/Ajg8aD2yckgbKadGgfg6Tlf230A4cgg9S/fH/zXcMFUb/65QbXHdwLkM1BSStu+j/1s+azcfj/Sm8VJ66ATE9iDy+8OKY17e0y2qLqpKZLZo7ZVbC4QTjmkeTEnIesfZppgNsCmdyhSwFT/UtCqm9ySdsJYCIpy2KK2EuCWONQfSdm6UdSWSnf9miE0P20x5Y2Xf7Nob/CTjr1O38ilGaM6bpGP1vQtxv4KHKvJkPXIJm+Aoq02sOAME3VcIDIsqhIGa3HWX9bcNupt2ZZFFbmj6it5PnO25GyW4L794vABF1uAjTHL+9niFwMgCsWfo3tmtEkcYQjFlSVMAXhQnAxk7LJuZ4a6ErCQn8cy5Lwk1buRXsFq7w6ovrikKhk83QlAG1QxomblEzdfdEZvz0V5CXS0H+Z1iUAPzewIAG58rZ1fSSeP+SQEEpzzcgxDXih/sqiuTTb8YXMSAlgtIijKpezTGLS1mqAWxQrI2bSFhKLkrGRdwJTDgMisxQpDXlh8tWSyExc1WVHqTD/cRd9uCq7nApgSM/olEknJ/VTuV5RSmImICR0XWQCKQs+qRd7+1jB9W01ATiZvdky40liUI4qJdu4I5kotIN2+yzRtvjzj6JTMEAVxzQnSUg1AGcsw6af+hFuX2rcqo6LX3YMDHMHCmLMYwdm0grsHl3dWm5lcBlqzFAhzOPu+yJktspsVM0y+msBDiKRWHQACOLj63x5tTCPL8eEmMNlKoG7fJ/DR/olNms3K+N6rcA8Rz2NSas6nC/nL81MuA9+7vJC+dVhp0z9s+e03Y8byLKl0QuXPPmFSvK9n96gDTOnH/k2fWLzlRCzhcuYGyIt8X10tbAKxVQ+bm3btUamIfNknYulvBQyez6QeSheZ8D7umYJbX+SJyu4NWQ2zyJBl1VqYUUAdEaqy40D+CVfKQLXKpm+rCch65E1NSThobkQHZQJI1BZMmPfAuEsjTW2HGwuLeEODYtZLDbwBiMaaUOsMpmDrbF2ooMsKoMFUUzxkNsDs3RQNbMtcjVtsS14fDMme2M3mALeYyOjiAGLfsu9HVTlgpWRDgDNymKGCAPQHE/QHU5hicOHQBPMdZbV5smsQlfz+0d3teJcT4bBkmO0daNHifYvBigDM5pjd2VGQzGXhpvwAY/z4Oc9OWngcW377hL+hcuzypSkIpI5twebjvSxArZNZtfqrGjTIJg0GUHTyYDd2hCn02CcJBvFI3kfZ468HqxMK2CYO1lWY1lc90t9G0c8zMQEB3AM0QsiSATcbyY2VAX02g429TmpBxyQ5K4aLLiLIEFb4WGlAHh4iiyJvZImbGaAMgDCbAhun5S+b2BkI3120VKl0YWspX7GAwn6fwSBlGR6r2JaSNoBcDqmsyuxmTeYHOEhX25SUlfWaSzQBte81doLZHdsADVaaQZ3ZmBD5Pbe+GDBzyU/YlXIzKOEMDIA6bTFu/PpXcOM3vrawuDj2GNLQ4TUzXvzb//ABL3nw+7gy5nv7+Nrf/hUtzhI75HT8qf/x35GLnt2+96TySxVz1KM8gDgZS7Z5x9iztbP+X23GxT3exBAVvsADKzmVDivvK/Bg+BSycoln0ak0oYIqRSQ33ffP9uMDy+eoANzPpV46s7JAC8aAjIGuQ1pixT2/NjbNIqo7mtqbdAzamGxtkU9q3lU7VguQB04hALDLvTiF8CHp4ph4zITqDU09mMh2l5wBQZ4ZCcf0PFyyEQCTxxmFsvssSj0QuM4THihAUvRroQTm/CFpbddlY1RV7Y/FHE6tJ1RmbAw52y3XKgGBCqnpky4xG3kpweXYXlC7tHjKCj41AdZwad8MOH+Pa22WiAJsuW2la83IHug48oDjod7PiQmz/DZk3JzqxXBwmWhjWH5pm2TtAg4baN86Rt+R3aibd1Vx+tBffQOBTq0lzD+DK6gWdbm2upa+UdnEFaTmcoqAVALE0UV/tNLG/AdS5yaXIS9ZvQhDtnCh+vtw5xAjD/bTUS9XaovcxfKIMAZRr6lT1Dfb0Q/ASjqHrBYg27HEKQQApmAagyCisxFBbB+JfFZmwqxnEMcuQ0sXowhgFrSzERhn6HW3JpezfY3SZe7HLHHAOd7OVZxGqoVTpMxks0NH7L/n/yDMzeIdiw8qwbTdxcsCBQbZWsiCE2XlkgzCpBjkoDHHxaJo1vH6tzNtTbNMIXiiWdoJ95fhf26mxVgV8dtx728OBbYsd3BzQ9s5+oTy25+U/qBc/xRxkM3tOTzsRLzhE4SCWCHPmPQlLpKmI98pxEUUhUDotIxVJ4G0+zQBhIpaSQAekH6ssZgtfa1VlKRgULcWfRzpzFbutFpsCEuatBzMAcym1ipE6KjnKqDMIyIW0cRUBCrRBivuHLKagDw4GmBulkDNckjkzLNZOwolTcz0Jk7IiFATQ9bH/BiflkE/2YTZlxZdqjInG2SqSiLUegIANFZu7YUFF9WOF8uKR3erAKmFBFs0uR4iioCbRxnIRPZDFt2ALzRviPgJBsaOqcPzAPFMJs6Ul+VpDD+QYQ/acJh+iedd9uyzoOwuYoFOTpnBNvlpSZ9PuANZu8VWf1D5I23oBmCsPE0SBthE0QbepHIzRFzUiRK3iFOIb0JQzftO6iW8rgXsKzNQyetbJB+cnIOiDGz9W79NBGC6I3+OT7WM10kIJM7F2jgy3tSjpvGd0HWqOpozaZy5aGlbXqIZq0NytarHWwKQAcC89PQPolClUAJmwuFhBdA17DgbZyIPVIasGzXoSjOi9RidkoEw3VZxAoFJ5b1I4mYDkypywEIM7hHKHDLTJZFJDpmoyyzNo48gHrmwfdhEZOEyZUaE7kRNwIY0UPVZA05z67ZqawC0PZPaR/OpxwBd7jsmWq1nhrnQXi1CWnNE7RqYKwDrdcPCh22RX/+gHUmGjJvNZpkHN5eXPyamGkBoYhAOk8YQZwCBjpTAOGIkg8NUzi1jOot7XBWsO42dPILZLZdR0X0UrQQie2Ewiuo42DfrtVKQ/p+A6Y7kanQ6ytcER1JSQl0z6Xl9pMk+7lXgYC897EJxmDIPupoFr78lwBh4CwCyuFzGomcGdhOaniH2j/AtncD37vegt4fFXNCTllLldfzUAgNRuq/H2hnpiNMd1F52gDCj/I40WBubksgcBYyNKrNVSw/bwUElggDMhC0AOhzEAphh5mdmi6oKQ4+La0wYHNHfOFissbYsanY55XGgxwrsS9lkIlKuI2StXgMywJSOQIxpr/2F77fnhWhwg+ebicfbOc7ZNju+r6DCDy6/iFVNmRfvMuPa6FJqEWGzlYexNNWepvf+objFFvhe2p5K0XeY+aK6VBcCavEdzx0YSZR3tYo4I6QQ2ruYo2/MdiUfa2fa/m1MmFn202sCIqVJyy+N3Mi44bv3VIhszotMPRON9BMzMX/zzx3rPr1Cx8p46p14nG4bco4RzVtmDJ+hb92cDdmR3ObFa2bYrh5uHjekfKUAo3Wg9qDZnuxbRhLPIjtauPdY7R0oZBBVjbLGsc0P1OVaATmsJsSLy/bMIwgLNptmeHhP23nagDxctf19NjGYZ5nbLlu9cJyXIS4MUJf/8zJ7lcZvD3d/YOanDWbgJuBtoiHo8ym/uQw6edjZZd45mJLVlxfz5PK7re/Ag9LS2SpHpwuYo4ZtwQXA3eMN9HI41WriLrOuSdt2Wf8hR31bAannHat1jZWJJD+Mij55VxYQMNuXPj7acGeTpo8TRFwB6H0WtswMcI/w0EtnC9N587puY92OwzlAc4zagXR69cEYWHGGTPwIAWKTSmAijIlxtPCY/kMFU33t9f0Clr2fzEat0QZxm5IBpg5U50CnxDrL1hjA+DRoPgVPt4G1MypGMM8qA5EIAlNUbkwqJhCZsAGP2CQXZbyxjIYPcPKYyRHfFjBmrEvlzGSMeSqQA3AGO1h86maqeg2O5w3AbaleI78NSfK3DRhtesey+6zltF9jcR/fb8/tW4bvX6o0bCbdwRkGhGFGdlL543tRcmO7ng8CLDZyw6QBZ8MmugA0GFHtwSRbNVmexbXeVgIQuXHtRRzBFeJzoZOZ5roUM+bhiJzJthuZ5poATLald45VXGFLFaTOUc2WGXC36GZpYw1lHUGD4r/y6n5FZ5E4fBzmgzAmQpYlP0L+jRU8Vo8ha9CR4wzIJbjQ0kMw6fDoEJMp0sgIdjRcntrfXQfMzb2U0iDWT41PS/rJdiyFoXK7zEqJQMTo+16BFWCVCYsnlvxdPBi55U/u2/t8V+ka7Nk32kSwsly2YMbB7pyVafq0h6gzemes6TcBeEtvdZXOHOPTRqGJI4zRsrM4TmXgeCDX/7IjP+P54uPzjxaQF5L7SuThyh/vEWboKw0EWHt+vP57ryBqyqzxkNki/6mlTWLfIWIwUVeIM+K+1TejryGqAovVRq4i6z842pO8rp1J4FriGgTMjoDRmjDjQb6EDffBjK0THB6iHk4P24HSHseNVR/bKxhgaHUYcrPb9MlulaE0WOwIPKdDHB4Aa4/Yw/De16ik87Ktky3QobddzqYsQmVvNNmWTl91iU3CZsxbz5Q+wozUukJHR2HRpgPKqsBup2wiB9tLzQEX1S0qyHZhlhe4qNKZ2YLWzYCZIHaCaAFwSHmHlFXTX/jo+zF+6h0nPj7f28eb/8uvOIGK+4kxqyz78T/zcZz9wHOR2sA0vfP+F/9f7H31Gx6WFAjlqDN8ItD6Gt7x1/4t+OTkbbF4EM8SO3xw+c0ixdrC4lSEbbbkXVhAyLrBoaSV7wIoDGJTuEleSyFn16E4VNtr3VDAFG9ksl2q4CpsuejkL5O8rayiQMwspm9TNS0bn0KwYooyA0A/08BDqW6GncHrSFXZ+3vgGR0CC4+ksXnCMM5jfIVCcK4OIB9ziLlMd8IT5j8vj4PpALuHwKPnER3M2lpBa0jpCqRTNn0o9Y+1M9LBp9u+1AXU/A1mUyrv6jUCGFcbJPCoYPJaAeWqO1iD4lljuyaOsKzkOBekA9BD7CKZZXFthpGBicekSKA8VHr5IHQmLEqjcx96D85+8v1RZRls9EN3/9lvDb65eG1y0af+4k/i7EdeaMs3uJ5t7mDvK99YHKL5b2aUjXU8/Zf//EL6IQwwAHz1H7gYxhjnSeU3WS1MRARWMVBYXERWGBYakxW8Q1QhQGs7gZDuu+d2yp4eMAsOmVtUbFVGKmLRCUfjpQC99EAPP6GTcum8EggAjqTPYnwmtUp6gCGrQ/NYzYCN3OCU2DUDewcA6ACegknV3DjueCuYvq2eyOKPePTzboKtXUUL60TGCBqI0N8gHW52lJ5DLOtAwPo5uTy4C7N4AAtbC7M2+wShFNI4ySJvNOYLHbgE2xI+lHsZfAH29MaSG1AGqzw5FHhD2UIs3y29KalsiZ/NzvKgY8+3HY3VoKUg+yzj/m99URklu1LNrwcihdPf+y6k6tLvRN5JVwYGnq6kY/i5ETkM2j/qMf3m9Rdg/MDyO0s08UPEJ4k5O8pmHwzrmVBaGrCLAUr1Z02MkfdRNCuOmHxV8QcOBTRYdqomSIAhB3NJ563HDBzel8baOA8XyQ1NA+dHiiTa0EORxaCNAAD3t2Ss/cujOVYLkC0W8h/qED+ofop93L4dP2VKl8ErjH8BVAmv3c/QoKuBebcmoFznqPt3GmQSj7oSr2Wgr2LSZGAvSkBly7qDCNfqdsSy7K2q7AvwhD4Hzso6BauaBrCDSAvecI1/KOcc0B5klWDpDVQy0FjewMC8x/YXvxz1ZUlTlRuDW3vyEsrZMw7CvtTWxIMh374v5dHybpH1SD+UZdWuAPX8D7rAA8q/aAmieUxWK2GbzGp/rs5BDv7JQqYB6hq/ufVLtLcEooK2XaxuyI3IhCWLPbRICKzbkrZUIYAP7oK4F5FbSbGQgQDmfi5932JuN1Yl8v2QHyewvnVbxhqA2ODsD3H8kcb8v3jHyoss7HjYICX9pNvCq5cB/LD8UBeGuf6Z/2agjIHZRC0tlP7lGMmnHgNPd0H7N1HOXIT7wZGKH4qqWCqhK6T9WwY9EemmpiqmUGYiPh3VQ3Bat5blaaZ/Ab7mzefPsQG4sbNgaS2QtGy1ZYjLDk2/fU3DYWbwtDcA9/6fr2O2uxd11nBf+03+f/6jHwZtvQEc3Pf08S2DEgJND1LeludXGDsD176ymL5BcijxTds3LTDkY4ofH0LYG2vOOSaCXB9+Noartsm5/mwjVFllEMzeg9SaN3aK6QSnrT9AIriVjoJsEAC3AYek12/w/m354sZj0Zddaa11O5tK328mHlv+2J/pbxOJXH5JxtpDHG+lAENvGUB+2GO2iy3sbAHTCTAeqbH7fDDAqL1mlrXG0QQ4pcpAV+Lo+dQF0PYVYO8m6qUXtH8a+9LwirrDhOwGEcHiuUpw0CqeLMKEyRhedUcAF0mQsbWwqGjumfhBi2SiCI9dTAY27CBECIVYlB0OKNWfsTzrO/dvA/u3/dH4vjzzxt//J4HDJ+EbA4/+0MeAW38APtjUx3UCcbmsNtP8sGkaeaZtOq/9W3/Q5knfJwy+BUn+LsoPWPuw11/jtUfxCqRrUcrZ980KInv7meLOlHm2Y42kqcwonXoddgSwbFzKKGrWRuh7c8PXlYBXvREJrY+Du3I+83iqRM2wZXx2CItCFy8akBf3gFSGPJ0CO5uY7Z57KEB+Kx2rJbL4/+E42h5tEhHj3iYGUk8kWhM/Q/9mCEO221l0AQJOaac+vAvUucQj0P8kDYOKyI8dn2oMmMq9ArSx5Bp2wiYPVVCpfdoayJe6uozkFqRNtCFFMqCUrYQyAw1xRoDccJHgZ44ai/QhRrHfr//Tb+Lg+k7ILv08kCNXBo06XPjYC8DBppfLv8FRTlk0KMiksKhDkQVXNI4yVgDydIv1Z4D5MOW3d7Xl13Y2kA7K3eTfHUNgk0CqP59cY5stazvAJuPq4gmbM5gtsFV1bCydsWl5kIqRZlEc4vCeePptPBYzWZYhOyBHPGUvz9JK0m/d3wQR8dH2aBP/8miOtwwgMw2n7WOe67mvtTvA3c3ofDbrN4MuQAwMoM5k8MznyaMJ0Xm7EbB+Huh78P5tVehVt7igEhpy2ydN2LDcL86EZFDVtH+aDQRyjzvEoDDPLcs4mxzT7pmyMO5F+izrlPQBaO0/IEAPS9OnymPG7mt38Mb/+ZX2+SbfqY4ZuPinfxAdDgC3y84TTeQ5ixairVI7OcBqnrX+jIku1l87ieEhyx8WGfb+AF37TsiI8/f71Fbmki9tm+svu8yz7Tae5MkB1ALMthuN6xwUHCsnbsxAX/UbB3flm2uPqEmbpvFZhoD5TD85R3PYM7YkkSAq8t5CwO17qLU74N72kTr5eNixuwrHagHypUt/hIaL0cRz2sG1a2kZnZZqvgZeSC8OIsaSXUtCcX36cbGiOLitOK1uvsYcAPhSWYE8TEMFwC2iWWlsRg2UyV1p5ffMTMM5wZkxQlzhA58ZZnrUpmdfVrv4ARmzWoZroJeZoU0E07t7+Pb/8Fn0R8Hazab6OIB7+mf+DfDeLX93ZtumJASQNmNVJuvvh5+5GhPGMemtXpNSTvNf5/OHKr+tcNr0BmH8KBkAACAASURBVKSA7YcYopdsLdPWn5chKUmLltHFDGay2LS/KPig4g6Lixx78SkUe/i/JIc+vOt9tunLSNezw9b+2M4xkjTvhDD7J+DamzLG/Bhqg7+L44805v/FO1YLkJccTOW7aTAGKs+no018+5tqdpwX3wMG6OfUEefTeMzkbNbfT0vkM+zdUrGaxLSQgaLPkNsjyICjkPYWN1FqQc/tiauoCgWg+1YkgcSO3GtP2Wtix1KkYI05fQagXAUL9ZFYX6SX66N7e/jG3/00pluH+riVpTUjy7+d/eD34tyHPwDav5UmByt/sghpvA7hoMw6odk5X7cTjjHMYN3D8s+39x+q/I0FRZpEGvbd5L8FX+iqpqSVmVjEZCsGaSuXOaffzcHIYmK7XsxB3atanibVY0AUiFD5MU4/Hv3Xqs+u59NWfuz1YJNQewsiTwK+9QeYT0ebbbiqBx/f5Vj+Y3msplJvtM6YPvgxmbt7ZvGD899nh+Xu2uk5sLWpDiKA02WhIfG33WMGuBeGbMJdv609+PRj8uzknsS2KCOUUlBtixwdT8WHLukuIQTz7jPTNiuAWV3EKlG3kmdlYQY+rhhKO187GEUJ3e44yZC9tA6EJ9RoyocFRLd3HVzdxDf++8/haOsQizVoSjRO35Tf3vk3/j0ZyHv3nH1aZDMHOE9Lntdgn4v5C6XasPwB2G1egHrUY+/16yfUQXo/AOpEttrimavqHPTlY611R4iJiugPSqxr3ES+BhiDigewN8sMsMVDVr8NpfWFCCjFY3IApMpAjXzSz4DplsiPT12I/jtcFc6mFgHLKjMdxrxThRMB9zaB2Qyzw427bc0RAz2rId6Dj9H6SoLz6jDkX/zFpoFq6Y5tMFmYHy+Xmu92d1AKcOt2dKSFQZioog2kXjaDxPyoBWNXgnTAmSeFGOxc0aWkvZ59OSnEXECdKaLDAXmJy34Gs27XVAcAEC7Z2WrCmaQpvXw5rexuoNAzgLPPDVeoy44AN3nX7S++iq/+8m9gurmPbG/bkKn0CSvHpR/9YTz60Q+B770C8CzygmDEDTtk1uh4LVkb5peruUgvps8y81z+q//XN1EPjx6q/MxAd2rc1t/gOu/+bbL8VmYPr7+F9FZ/AGzfxWDdpPsytvkRSUMEJXItnj+jFh47V4WJn35S7I8bRxC97lVnUueDsWGNOGTImu72LaAUGWPH1d0DxufC2B6M/T/Ox+ox5I0Nxgk7yjNmvKTYDICLBiac3KPb599bgCtvAu97H4RWFIn5GlQ0dVRD1V46+WwKjNfbL9iz598mS+/tK+AL7xXxmrnE6i4fApbSxwoBdV7R6calYXsKHcjs7DeCzwv3Z18iK9tsHCEiAFFYawAet0IB321aYQoghTG1gzVMWaxolblO53j1H/w+bv72K1YRepuTeV3IY3P1js+fxbt/4a8B3INuvZjEAFYmIEJNxgviHeyy+IUdRgBX0C2k1zNXkXfvvnYft3/3Cu59/WY0+QPKT0SgtRGAI28fpLJG/sMiAsbw/eXWr6BbMKn1usWoABIbjpcWxTJiAor2If1bJvRwg/cIbzDZMqHsXZNcnn9bLlB7fTRR2m377SGA2a+1DEWBnwl4/SpQCib36DbAXGIbkQVQZcyYsLa8ggEZ6yt2rB4gp4NpR8D3oDCvgRlHgwb0ztAc/SEmqN0+vvHiGfzZTySGrItsQ45hBySSLdmPDoDTj+TvwAYbzjwpipDD+8BkR7ygUACqKF1BnevAIAvJCZf1sW73x6YAYsACu/tnKvtS0eMnJCYd9qDsg1qWudwAhOfaghVZEQZk6PjKB/ZeuYdv/k+fx/TeflMF/kiqeh7ENiIC3vepv4Xxk48Ddy8D092E2ANw03d5EH7/O32DZYpBriudqPavbOLe129itn2IyfYE8+1DTLcmONo8aHfnGpb3JIZcGWvnNsB1omm5mcNbMQm8PC7SMDxTvQBqEldoOQxAQ0zRxUSnz9ZaUUa6t15arEnSItY7VKJpj3aBwy1QN5a+mivLK42kj+d+n4dRHit5zHAPvPg1AGv7/SEmCyIQeTm3P8yYsc44IEbX65g+e3zF/zE/VhqQjztGmDPQcTLWsY5gMiyeTUf3xqPJGdy5DTzxBDwoSg5+smyQHh2CxwTq5xKS0MFbaRgV4NwzwNYVEVtcel5M3jTyogfx0Q+I7LA4UFoA8pKfI2XFtdWwC/OKZb2xwFAEGnAZCFQf8Daw3Spai2E2vq4EMgY6YLwMxvrFUwGYQ4aaCGBuBTue+St/EY/9yMcEoW98DUDKPxYnErvn4KeeGj5n6rdzfu08P5jh9f/jG1iYMdJRazZDfHD5u/U1nHryEWB709vePSPTV2wisc4UAG09IPAtsDi3n+4i4jOGTUDWhrJpaumEperiKcpg9dYVgDpg90151SNvU6+6Qf8FiblbfwSgb5c0C41p+dLzzZtAXzGbj+4hjTUbe5ZyBDAw54Ex3VviWB0Z8jFHRWhmmcDjNAN3BJdVJe7EAPF8r9xCKcCVq2g9kSixxej8fq4z6diTLDdJHZMBnH9G2Nr2FREMqPyYCbIVD5Fvz+O2ChyDXawyajBhIyAmTuAag99KBwMhdR5IMkeTR5plR2uqppMQ18ZTLwNavo4SM9Ye2cALf+tHMD6z7jUbL0hnTllh4OKf+2G8+2/+Vbl99zJwtBexHmAgxUqng+27DN3dBfP3UhtxMokD4/xzj2N8dj0WzmzvP758Dyr/me95J8Bzr3PUMFmjlA/veW6THO0EFfsQ5fRBHaR8BuQqE7etn2yiSGBtXy9FmHHLsIGKCuxekwI88myqvEH/nR6IbLmfR53aDDtccFoeqQCvvyHy471yK4Mw+5m4S5rNsThN+995LK/qsfKA7AdNU2M2SgNGcy3H9H65gVKAb7+spgwUm0AuSjnao85lSWcdMb4rHffUY6C1M6D5IcrhHUDtigklsa6icuUAUd/5j1JUBBcvhE2qy4ANmGHWzgFekqrG2X8zW+ScXqsmAdYD/2n6089exPN/92+grI1hdrStzS6a6ws/+H34wH/9nwmbmx2Crn/Vm0WALAdLSg4XKf92MuXeUoDVayN9j3/4qeb+8F9+x8P8O/+xF8D9NPLX1H9Nv2GQ/zqofytTuFGbzbK0Pztzlf5hZTKbYziYMkNXXADI+pqQAIBQDjdB/VTEaKcuHN9/jw6inv2wfNifer9En8VLLwGlyNhqEgItQLsnid6aDj+2ssdqiixGb3LtzrPZLTb2i7bDJ80Z3LEwh1710pVLJa5UeXKru0Hv73q+caPD5ibwyCO6G4J2ShXt+ZLOAIsAzPbA3aOg+VT201PFjHxXrx95Fnz3JdD2G6gbF+GxbAGEyRJ0mak7DxOBmMQMKg0Is6QAoDEtKA1wuOLORBXBgAHQkBHH6rdNn0Up9q5g7YsHg848AbznEzg3OoUP/rdr+Mbf/OXYNcJWGYYPIDz28Y/ig//dfw4aFaD2oMufAWb7iYDFN32iIDPlIwfN8aNncfp7nnXmJsVkrb+wQhmdOyu1d+oxXPzRH8aN335toQzRb9r8nlR+AvC2f/PHQFtfkB9q1Xxa/Sfs8vYguHMHcv2zx4JgZlCJQEPQfcsl7nHXdEGuFaXrQoygegmRF4e3nvcSItDeNcncI8/CZSSMtv/Oj0SuPT+0imjvG4v2XVUBoACbm8D166CNU/3kVnfDxhqTKD0YvZaYGDRnBX+2l8gY7sFUuHZjxuhNBswkdXWO1QTkdJyjjs0keV33xeDwteCOiMHgGjM0A+Dacz8/Gt3vSrmEV14FPvoRgIsyNGAxWD0hIZiA6vRArS2oHYHEwCNvB919CbzzJnDxBdmXT9XhZh/aBI4h5bkM2cKpJuWVW24GSw4Li7A1jjO8qGxrhcS0kYoU6Uzpx14Mk9P662wAQ5WRR7sCrAAe/8T347n/4ufw0qf+nuc7n5/8iU/g/f/VL4BUAYXXPw/s346Jxee9bBIWliOhyATe/tP/Kt7+8/9xk5+lx3wC/sr/BipjXPjxn0D3d/53zPf2vJ2yAeGCWOKE8j/xr38CG888AdzaDqboNseDaHJp9xgpBrfgzwCgE3Sxidb6BAM1doyWn1QtWGzNRGlSl/7ksmMq2qcIwAy8d0Pedf4dg1k59d/pvppl1PioT0ppPGSnqkLAdy6LuOJodL/2bDsuKBMm7gCGjkWtJibImJ1rfZ2jjudDN+0VO1ZLZPH884xz5xaGIOOAzR+eQYxZsySSswaVsOUSAzzfK7dRCvDVP4ADo48c3WphmfyMWdxKj4Y71KSRs3YaOPckqPYom6/4oDEGIx2dfHCFUjBmE3+jK5YQTEp/YES8BHvI98nL9sYW18JBjjVm8nK7roX4wuk3yRcD0wPwy78BzMWd/Omf/jG86z/62YV3veOv/gV84L/5T4GR2she/xpw7xWEV1n6N4gDQQYaVi4k5xXnV4O826RjK4u9myCa4fFPfAxNGzdr8Icr/7n3vxvP/Zc/BxxuJrl3XlrkfQ4D3PPfIQNvPQoXf4PimdU4K1NmAVsnqdqHtJ9UdWN2+XIpoO0roNqLZcX4VCr/oA6OpkBNGwU3K4TUz0AQ6yElFV990eTHt5UWGBVgE39HRckYdeEbETMOFpvy3DnG88+fNOX+sTtWC5AHx9CAXEHZOwOrZxDgKhKG8mCA+OBedw1dB9y+AWxtSecyebJTyMFhv0/3pXcdHQLW8fMZBDz+nBChrVdAZm5GYQ/qy0wUVJgTiTAdsgBGRh+hKzyY7TDiPicnEktiYOwyzWDHQ3ffBsQzcBwrrrBPMWiyDXzn0+A6B8B418//ZTz1Uz8KZkZZG+MDf+c/wbt/4d+FTpXA5uuga7/nE1zjKs05/4npW3Q2+2bKRnjbBahbOn+u9sDmFVz6sx9PMuP0zcFvx5X/yR//0/jw//zL6DbWJQ40D+uvjSLnJNFCpdbUDhyxLmzyVATWdg49grFp0sUbldTH7EsU/YlUdOH9rc5B6qiEi88N+iri+miiffqYjT6YkTaIVnQhYPM+cOs60HU4uNddA0jHmJGgIEMxJnVcDgILneTwtQrHyoosni5rfBcAU2Gmoo1cOJmt5UavHVfuVULLoApUPrzRXb/w3m6OUkb4zmXgT30UZjOsa1Z906CPMEtn5ApMD4H1s3DBoQMliXLvzCXw/h3w1qugC+8OECYTPeoylWRgiW2pgk8p4L5Xk65UIhc7cLv6ZbPVNT5lIEYqJ+aIXcvZMYRVbH6CmdsQpDjJo/dugV79HPg9nwQR8L5f/OugUvC2v/QTOPeB93iV0dYbwKuf1fQqT7WVc54D7VsIcHa5LAOYHQCHmyek1zT9FLa5K99/FY/90CfRndpAfzgZUraQXQ/KX8YjXPzk9+Opv/Cv4bHv/5PRB259EznOhOfbMjI4shzZgdTSATC9gLvta4HbdgjHjyCbAq6mg+AEtD7x71wVi4nTF4FTj1lvsZJHnqcH8v0SbdBUbAZwmxSIgJcvq5ijmx/e6K4jjTEGcYfKTCX34FRBhVnuu07o6bK2sqC8moC8vs4YTOIbVNTUlzgkp8yEnqXRSREJFURcwFx77mcHo9vjte5t+PJXBJCt4znKaed1RLABR8B0F9yNQP1MdxLBYAVIwMX3gfbvAJuXQRe+B6Ci7tKdblRZwKaI0a2iSVmOOH3knRzY54mkrgEA5D3hGobJiDHgY72NdwEgZLXGUh1olgO0M1ADv/uvg0ZfBN75Q6Cu4H2/9Neb9qGb3wCu/nNkJaM7SIDdMy4PVc8P2USk+b/xNdCNr3tzSLED3Jr0tirYvgbqgIs/8jHc/o3PL5aHGWU8xqmnL+H0u57BuQ89h3MvPIfzH/kAujOnm4zx3e+AdEPbdnLMgMvpjIhSl0ROblVjPZYsslrar1HTkLrkubjLrHTUPbqyiC2odGot1ClLZvDO6/KeS++PPPlMoPmqc/D8SCwsmokl6ifSwvMAZuDLvweUDrOD0W3uuS/kzLeCiNk8nQbs2D6+QYXnGETqXF/NWBarCch6MI2YqQtZlNgEiW0jMYNIvJULMRFzkSjDrFBTQcRHW92N8dPd27C5CVy7ATzzJFALgF4VF7ZOdK4WnbWfyACc7AFnLsjtzJCInJXQ5D6w8zrq2XciDP3hS0wZXBqngApkZ4+CynOJAqdpzBU48IGDoQEyTmoo/cxCQW7XReBLY+zdP/+z6Kd9xu5gqcaqSd619ugWwIftGL3zbWB8Gnjbn2xZ+5XfAe58S3LrzhtpkrP0uUhQtp9YfgPcLnahNAnZewfpLTebV/D0n/9zKBsbWL90AWsXL2DticexfukCNp5+AmtPPO4ZaOE08en9e6DXfsu/410CCHBza4qsNtQHbVVk6R2abNYhaSfuhD9QiK7ceoIMnK3/tOAMxD3sXQP1R8KMT1/0+40smAg43JU/TX7sq8PBEsT7rk4a128A9zeB9Q1MtrobGYAZ4CLeTDJGe2LtzMxETPa7tjJTx0yjlQRiO1YGkImI+Zd+iXDpEuPOnYWIb0zEohxo5FYV4JoivnEBVRZhAVOt9eBmd/XMs6OPggrwla8Cz/yYdHj33EujzkeXAQkDk21wGYH6HhgNAn0bkFx8H/jq74DuvQI6+w6Ygo+VBRdbcrIwYkbvbLl0HbifK+hKnDhDX5eb+lwRXnoidWG17AiLEQcnmLo7kj/5Yx8Hr51twXHh0PQv/iPw5KAF0wrwm78HWjsNuvgc0M9Al38T2H6zqZYGNBPYSghhAWx7Llg7p/RI6RN0JjHK0vSbr+HCD/woLvzAR7z8bVmH6fMqgoB73wFe/4IH3PHFhye39IP9++yZUhIQFq+H6C/sKyXBTWHGbP5uXZF0ZlXRFbAq1pRl+PdtjzzauiLvvvg+NCu/vJzo5+D5FJjtxySZpiNvdmYVTSgoEwFf/rJ8qxthcrO7StVlY7WgVPhqtVcxBsnYMz0Ptc4hACLSm8ZCphUKYL9aSj2L+qRBR2rpmGlHZE8HRZUGM2bMeIQ5j5R7SEdA1bMtmypAPNvBXj8db6HrgBe/DkymESzFzdJyx0zMBizWFsxiLqQ/ZfYLIuDcU6CNR4H+UFxXIfajRWMNUJFBVUp4V0n/TyyoUKwaNQCGDHxT4ugnLY9NDGRlXWYj7FsYwZ0UrIwOmPqPF67tfl2SXgHwtd8Gbn8L+OavgbevRnoLj5u+L4Wq/l7/zZWMcS/S8yC9MdNQstm/Jv3mG030Mptbc9sO06P2YhHyrV8Df+fTYlHS7NSdym9Y5pHlapO/HH0v8owgnSjNhOWTqFpQ+CRufUyZsfSPDlQ6lGJ/F2DvhuR3/Txw7um2b/pB6nVKsuJLddGcgbTLrrHqKfD1rwFdh3463prtYA86tkKZnsce8QjgEeY+ThkkY5cKM+2wK/UssNAKRXoDVoghn3S4yyVN2dynWYG3I9Q+IRSj1lKpVqqVRB5Rp5vl2ulL3aOYF+Cll4EPfwgig7OBofbJC9YNCtbTLYDGwOmq6fReXuZdfB/4zS+BNl8GnXubQpDIk1lDBlCR4EOlFAdSgjD1MPkyNh2yYt+bj5CW9AAQwwLG2hQMhAhxSm+seWjFsPxaeI+Fh4xvuiz19c8jy7P9+54+xWOugG/GySn/BpD68cw2I0YE3DEGCOcM/2yisVRnwOYV4LF3BxG0b2pGeLoLmmwBe3fETnrnpi/j82TVpB/E0KAoQAJBEzvpz+bsUijSkwlaSBS69jkDWDJriggYZPGQScEaLGmJK7D9mrLj93sbtPoRAH0v0QtneynPaYWXigIg7WbdAS9/Q9lxh+nt8qa2ZLUxxlTV/1/GXkcC1ATiMcAzAouX3vpbwm0aWGVAXuKtx0S8DnBPVJkqg/oKLtwRVXCttVIFZaaMSqC6d5WunHlq9DyXAnzhi8CHnkfI7hTlgMQWAhgAAo72waceB032gdPnA1WyLPn8s6DNy8DBPfC9l1AufhDMM1medh36uQSmp1JQe2HOkl1hzKbEQVmUA1MxBaBmWyLKBDgxwvaYMmgoqyMFiKu/J1HAdCTm5xwALf0sPLnyBCGP18X0NU0gGbTs2lhrKpfBk8u+tbotz4psKX37Lv8Ow/OH298C+iPQ7EAUWEcHoNm+ROabHer3tfwY5hkw2cCw/tr815S+wEUZHTnzJuq8jwjLlcJRifeiqKK3FEmvKylyYO6EE5TO70EVe7x5WXb8OPU4cD7FrXDma2RiH0wMHKXYLKk82uBQqh7nvgK//XkB/26EvTfpDQFjCcJizBiVahGbTw3e3VfR8ZS6DuYZgd8qXnrAKgLy888z7txhbG/7T+eo4wkOmNHZKp8xK5U71vVxqQBXU+qJfIuq7mBX57u0O5+OtrquexRb28DlV4Dn3gtwp2ZiFSmw8SBDOngOt4Q1bDzSLu3kQp576iPAq78pzOX828FlAxYnuZROuAVXYci9sCKuwkTNC4vz3mWJs8qOJDXoXh0ARcpxMOUoAgHA3Zdhy+RjgZKccMYP7qUWP8EBrLbpLS+cHs7L48TeMrhloGwnRAzS88npt68CW29g6eHf1zLlPHv5Nd+D+vOzT8baZvZ99cKLWUXzRp1m1nYnN3ZM0RYIsZaw5AKiThyrS6dsWe+hyASze1W++baPRJ15QfSokB1wJntojkwkrM4bcUUBvvOy2O6vr2E+HW3Nd2mXVWeT9TRFjDhVdqy6mxlVEY3bSvaAz9Hp1ktvBZ1CgFWTIedjfZ2fLmsscmSRQW1QYTVxMx5SZYj1DFkuVSaqIDmTXYPq5G65jm4EdAX49Gd08CXX5qBlLQDYebolXX66r89lMNbzxnng8ffK226/CKJOh4nGq1V5cs1sBKR/t/lhV+yR40PysEaIW+wHXWrXmgBk4BzhslA710hbc/p4rtmJI4UC9f2q7GOePr8fcIcKi0bXfJ/T9+sJ3x+mR0qPlB4p/XHlxzHfH5Z/WfrBSsqNx6ktv7eJnI2H29TJLjsOXUZ1piEmbRViOml9J4C6gO+9JC+78F5g49G2H2aSMN2Tbx3tpPygKZ//buOhKEn59KdlrHQjTO6W62q1VInaMWa/i1IvxiSr38CG+RFQ4Vo6frqs8aqavAGrDMh6ZNM3NjMaIjFEJwgQ9zJjM1EtqL3M5LUHUKnWCqDuvTG6QqNxRelk5n/tNel8ZnGRgRloGZKxnsmmMI6+DwA1uR0g50vPA6NToMkmsHtNlpdUxH4UZvJG7RI05YFMgaPvNW283TORguUriChHVj3/JteVf8Zcszu1A44qCR06Gu+/9O4mvQFWDdY8AN0sV470aQJpWO+y9INmQMjb/bpJb1lrveriXXkiOq78WFJ+HtSt1YCtrFixmfz5tn/kjQvUnpgIrKIN6jqYeZt4cRbtO9T2of1boKNt0PgU8OQLi/3PgJWryo53Bqx9iIWa3p8pwGuvSjCh0oFG47r3xugK0liCjrGC2gso18q9ArOIKNwUjv28+iZvwKoCsm0NnjZCdEsLIq6YV8aMO/RVBAFkcuPKIF1SuQlOJXDtD3A43RndQacg/Juf087bRadmxOAGfJD77wf3wdyH1jofxpq7MfDUh+W3zW+j9jMfYEyyXO26UYAyhEVXlsgUnBkOBZvSSlCQtsGVvq8GSC5bYAMsK8MA5BLzNYYYcXyNZWeGWJemd4eIFC+4eW+T3kAu8uRWHClecJu+tunZxAvBwyy9A20TK3qYh/yNmr7PD5E+9w+dpDy999SmrVIHiX/FxFNy9kWFgjGDJNKbm6ApM65zYPtV+cJTH5aYxsP+Z9882JP6PNyOfFveXT5ueYWSAzXb+/Rn4Mq8ndGd/gCHqsVQpV4eY/Dx14Fqh74yZjJGKSwsPJ8Dk7dVO1YTkIEF07cKW/ocVSbwmIopF7gjqh25XKsyuC8VlWUfj2r/9q93VzFSscWdO8DVq3INWRo2TKJZEutBAHauy24Ls9ngRjrOvwM48ySoP0LZ/I68u6hckJGYURfeV9SJvNAZi9inOnu2gWTKGm16SoM+K79A6k4tow3O2jgPxBrgBk7XUv5Ij2PSGzOtg/Ts6Zu0DnZJ9LHw/cR+F5b/ej+bl+VdvJrvI8zoEstfzH8C/4X0waQ9HzzIS7Zq8BgUyoyZY/Xl1hN2Ls6MYey3G0EUebJyqoxmFUfbr4PqEejsk9LHouXRHLMZuJ8B+7faR7wbcPyYGDxKAd64Cty+LeNiNML+9e4q0hhqx5aMuRh/YnExplKZoGO16NhdYvK2gsfqAXK2Sxy9ybUbM1Phc9SxRX1bN6PzOVVQXxm9z9BcU8fRM4N6EPeH17ub3I8n0vEJ+MznhCGXktgIFoE4g9HsQAIOTfd1rA7kvwaQT3+fXO9eBU3vCQ4UAkonckIApqQBFWFEIPXGMvFF8sxKNsvsI8sW4eSDLYKwWxwGOLNkY5NoQXFhVwxjn178Gu8eiBQenJ4H6bEkvQLsQvoE4mhFJW3+9dqi21n5B3kNUUcufypXjo7nZnuU0qcJKIt9AI0fzN4lJGmYr5lLvfczE1lBrHCodCJg8fbvtG/K73S0A+xfl/7w1PcN+ly6Zpa+OZ96lL52Is0Tjx4pL/jMb8o3uhG4H08Or3c3QTKG8pgCULkirVB7GYtzAeZ1F1ccyNhtLCz0WDEbZGDFALnx2ElhOG1mtSBDTJ0vk0Jc0Vcm6gu4J6JelQ59Vuxx3/cHd0fXMRoJ87h+Hbh2LTqkihYgH9Ov5z6jv+1cBddeomYZ6EkBFCdJrDEuPS99//aLKDxHoc6DjlMZwYONFxt8RVhyI9s2U6iCEFlYPuV7YS2gJlaeb07MKIkXGtIb20VJCQ10swJPADDSJ6A7Nn0GQ6T0g3sGvPpcy8gR6WsG+JbtuggEPPh+ymtOb0dTfkuf0jRltbnWGxsWwtXNNWTcoQAAIABJREFU5ZAiuJnFBAO2o4evdsy8rVhfkPY3MZbJjEs3AlFBoQq+9y1586XnpW8N+5xdH01kUtmzTT2W9F/Of+qqrBTg2ps6HjpgNMLB3dF17vt+oNDr9bov4J6Jeighav7JGHVxRRPlLY3tVfLSA1YMkP0wcxi1tBDFnoDxhkV+U8Wea3yTYg+olUC9rm17qtyT7OhYd1/BFZRxj5GKKT73WyKLyy6jQT7lYCyAEA5uC1OuVdPq4dcEPPFB4OyTQD8B33nRZYWVSBwGjEEp62WfFIRJoyir0oFq11VfH2yMgsg5GFGwRy9PYrQMZOXekDVLuVN6B6gcDzin50H69MxgmW+WGJyBz9OjOUfYzqh7VyT+YdObvDkp94b5hirrwhPS0iNEKR7gXpx7rNldXwDSCHu284cx5i5NtrJiyg4hkl6Ydc8Mvv8SiI+As09In/J+Rm2fq1VIwsFdJKG2t2XTtlmZZ4Tks5+VPI06oIz73VdwBaBKOoYgAWB8bA0VekxUs0JvwwlUYaZRa2GxgiZvwKoCcj5UCcC67OHDrlYqdajYK0QimgDp8qr2VGWZBaAHuBLQ10k5PLwzuoluDHQd8PoV4MZNBUBlC53ajhoQZ3A22eD+XTD34VJtcji2a0gnf/YHQKNToMl9lJ3XQWWktqUqN7aJwS0ximveYay4FHBJbrQmU3SZpQAIGTgnkUjszxeA4YIOK0sGXT8rYxxORImFhnItK8GG6e3vrNSz9MGSW8BI38p/D1n0wvcxOHPL6j09jklv+bd2j5gbBsaCYypKso0HwFHnJj9WwCsUqx02BV1Ru+LO+oEAc+lGAtZd50y527suFjvdBvDsD4ZoIvdHO0/2ZQKZbA3qNSXRGBghN9Y83LgBvPa65Kkb4/DO6GadlEPSsQOgZ7COqdqMtULUDxV6lUrlw64KGCs7Hq2uuZsdqwvIly7xcYo90JTXiOpYGTJT7QFRLBTUnmvqLHKuUDkygLp7ubxOo3EV4C3AP/4nQE2d0zXkSwa5DlQwA/dfBc97YJ52YEiMFQAw3gDe/oMACLz1KjDdhITmlAHKrHLCUsAcS1qG2id3YS4XDEqzU23g2w59FHkwBqx5bYDFgMhtbimY7IJsFsE48yTFjDAPwCB9eqZhZYPfks1ylv0enz4DZ035z8C+zFIiFIXyWx2kj9vButu6yPXqNuA22bjXp4Gu/TPxBAE0ArrMhtXhw2x/9drM3IgKcLQL3n1DPvzsD8hOIDzoY1Y1syNw34tjzJBE2GRiZXJQ1/5UGfi1fyx/d2Lqtnu5vA6gypiRMaRjSf6u1BfUviO1vCAxgRtTqWtEVcIcHKPQW1ELC2CVAdmOJYq9KkDMDKqYlcqgWlFl5iaqIUcWGRfpmUGVmfv5AR0c3h/fxmgs2uTbtyXwUOmUtRDAxnQGDAMIUJ5PgNk2MJmgYR2WwP4++yTw5AsgMPjON1D7IwHfUjR2gLlN6wBFAZWRyhbl9+qyZlECeXqzbbVrQNiwy5oBUQRiADgI7ywHbHnIrBOyzJUz0BmzTV5tTRyLmgCwATe0gJvEKM23llo3pHT2aEqfEDJZdwzarBHHpKaKypFFThax5Hb0SjKxUhIzJBAOO3NV1lGnz5pFxUjaMOstLMZx6cBMqLUHb74k9frkC8C5pzQ7S/oYMzCdAPNdoJ/CJ85UpwHeuoorytBLAb7+deCWWVaMcXh/fHt+QAfM3KuzlY8hkIwtlR9XRu1l7MVYZCIZoycp9Fb0WE1ANu2rCv+XeewxuspUas2eQyJH7kWOzD3BRBY0Nzmy/bbzMl2hbszoVH78T/8ZcDBRUB4pWKXloQ9aPQwg7r0m9qEHB/J3NtR3xkrAE88DZ54A9VPQvT/Qla3JCovGK0jLW7Ig98LibZnsy95OfrNQ9JwGaWyuGszUw3o2lhc52hucSZFfB+s07MPgXiMjVrHEYvr0fgDT+4e4+cXruPbZN3Bw+2DAcpMpntse5/T592Uy4qSYW2D9aJ6TS5tk0uSUwcveRQzononetuZdxwyQACkVNWVr5MLk7UvdSFgyyAEbBtppYqatlyXO8ZknBJDtGNipAwAmh+A6A7beRMw0HM9B8259ICux9w+BX/91BegRqBvzzst0hXX8kMuPaW6/IYFxlh9XlSEzurrUQw8Ihd4KWlgAKwjIrnVNij0A7rFXqatZjjxC33cSrqdfJkcuVWRfDMwBzEHSqeZ7dDDZ6u5hrIA878UgPsl3NUd61o7ubCx1+nsvCTDNsuiCBucCvOOHgfGGyAQ3XwFDbJNtAFeox1Y3kiWuyhbNS4tJRBumDAIVlKJOJsnrK4A3yTU1v8H+KMDXWVQeyAjgBhIAZmXaEsuHBYBvwfb279/Clz71JXzr738bL//Kd/DPP/W7uPyrL6NO+zbd0vRDRSIG3x+y8gGz5tosEACVo1MqJ4CIhmasObNSbUuCTNql07jFJO3mTDcUeFQEhB0Eu5Gy5BEq5FkqowDmnSugo21gtA688+Nw8E0rHp9YZ0di8bP12qANUv79t5LEHdrHP/1p6fulAOMRJlvdvfkeHVCI+OYMzNX+eKn8uKD0HWo/Qt9n+XGlrjYeegOF3qpZWAArCMjNYXLk0TofJ0dmKjXskWtfqPSEOi+19iyz+pyAvhD3LJYWPVgUfTuXu6ui3NOB9OKLwJvXQsHnYgBawpBTp58dAttvgGdTcasGJA3yQCaRJ7/j4yJO2H0DtHvVLS2oiFKnssqWIQDL6jzgz1Hct/yZDattHc9mspfEGFaOHFs5QIeCdULL6SIJKzsh/j9kvwn8nH3XBZHC0fYRXvpfv43+KLbzYQb+P/beLdiS67zv+31rdffe55y5YYDBDEAQAEGQFE1JJCWLkhXJpuWLLKsUJQ9JSokTx3HFb6nKY95cfknymKpUXlK2IkuR5VvFulAXy6JNS1Z4E0kQJEBBGAJDYnCZOXM7cy5792WtLw/fWt1r73PmAogqKZizqvbZ+/S+dffu/vd//b//932vfeZ1vvA/f5Gdl2+uMtsjJImj2S+r6zNq/fn95fqvIPIqEK/IJEySRP4di9lP3s+SvOQyXgizn7gajyNN4Gu/Z0V21ESStc3XZA1Z9t+E/dft+576i1CVHaRZfRwD2ndw+3XzHY8ziyO2J3MIycFEB69dhq8+P14k8DW3L/rXgHSOSNB07ogF9QZFBhejnWPighLD6D++m35czfTdrh/Dux2Q80g6cvB1PCleoyztKlz4kSMuqLigIdq9iIGw6V6DIkHUQDmb3Lsddrud+iZ1ncAL+NVft4PXe7PDZdaYmUU+wTOZzOfJ7hUr8dgtGTXm8RwqTuat83aiiUN2voksrtjJ6HLmnk+sK0faa2NRmUnn+xypLwA931sBo/y9frqWjNNymaxS6/KKvaB4DxySDcrA4Apg5jelZVkLTu+59Uc3Gdq13mppLLYXfOV/+yoX/8XLxK4IupXgP8oV698fV787Lxv9gfkCUbLcvB3l9ktxDTVJYvzcNFvJljTx1fRbuSpd1KsExFn/z7Mdh0qFVLVdeKtmZMkjK3YVsryO7H4LwdkxcuLRw8fPqBtH0427PVhcL9hx8VOO8lQ+HvPsytmyX/21xPQd1DXdTn2z22E3J1MppHMmnUPFOVWeaxEXSv9xFBejLONJ8Rp8HR8U/RgeBEA+eVKP8iPPnE+g7GKUEHLlqSxVKG7ILotkfxtABkmM2fQxCbcvustS1VAZS+HGDfjyV0ZJgMx08kmQRwlC+WS49hI69HaiwASChT6JCJx6LzzxCYO9G38Ii+vk6LymoM+YQpsTBFKGn/iamArPjEHAwuOaHRpuvJhI4YNNr0srp4fqLUBmxCtM+EgpI292yY4zaz1iJoHS3ip6ch0xFHjt37/BF/6XL7HzzZ1D71/Vqg/LESM7HC8+heRQyhK6hg1abF+ZcZkZchFcJTkgsu5P+q1GaSkBbXQeqZq0rJ604iRfiKsTEKfPbm/CzkU7Jp74ATj93jsfPwp0ncUurl9cvViO+6O4cLrUVCGvs1TwpS/D9ev23VWNVDW3L7rL+bywc8TOGUUHiaNjKZ1bMT3O+nEIdi66OHNTUsiK/7hICHm3jncvIP/9v79aLzXJFtHtx6nQUBej9LEWF72EYDcJXsySo9EOJpMtZJDElBEGVAcgdDfkdrtT71An6UIEfufTsL9vhYLyCUM5fc0nr0wnQT7hr75gUf6+L16fXlBG689+ELnwMVMFbn4D6XZHhqspCKRl0M9nLVJwfgIBi+ZX03pmlj0mm+Sbm9ZzBGpW161kVisYrNP2jZpqzrArPmN80zpzLV0X9x7Glp/n4r+8aGyZdabM4fsVjbdY75X79Ng5yBZDGLVgY8AFCFP+Dha0UySx21x7IkkAvkog68BVOF8b8FaNMWeXLW/2Wi3YM/0B7LwMqsiFj8HDH5zW46jjZ+isD+O1l9b26/r+LfdJLhFQwf4u/Jt/Y5/nK6hr2p16p7shtzG5YkCwWaXYuZPPI40yJLtbutl5V4uLUfqo0sVcUCi6/TjKFXl85CP6bg3owbsUkFfE/tKPnOxvW1LHKMuoItpIstr0LiguFPa34EQNhEWGnI8vBsRDli1UNNx6wV3C15EqSRchwm/+9nRiZj05g+l61J9iWX8Aty6ZtpftV0e5LgDOfy888kFrx3Pj6+iwGIuTZ2acTyRl8qxmgDDWVSfQFpQM5pNrw3ry2Wfm162wQAogVsfoulh3i6wQ34J9FZtlQTddxYU4AamuM9O7DGPLb/KF//XL7F3em9hv+YK830dZKUtKxQVzHHmbc+CzmMaLs88bbWx2r2PJ1CpJQSY7IH5M6tB8IwXrUuA1A2/OxLNs0AqX3i+pfooOLdz6hjUpeORDcOF7ix3K2nYIhID2Pdy+DMNidQYx7ptyWXZ55HVw8Bu/Zce4M3aMr+OtF9wlFQ1j7RcYRDOB0aBihMYl6WKyu7lg557EJtlRoyzjltRxtLvBIf/xuzGgB+9SQD5yVJdXCtZH8XEmPio+RvF5umSaVnBDtABEUGRIssWQZQvQ8covyDDs6cH+5erqyJKdWO+957+aWHJyPYzpqqPQWIzi+Lr9hmVLtUlPLoE4Tznz4yd+EE4/hcQBtp9HwoIoVutimtJOASID6yrJFUUlMF+bFS4B9uhtXUnBzow62+f8tC3imGozeyOlY0DQHucGrVMgUArWqgnj8zYWUkH6EDm0z+49FttLnvvfX6C90TJVU4Op91uxPxWmQlEwaabJB1z+fq4a9x0JTPOUfgTipAmPv4P3QLapVUnrT0E5X4NU6PjYI7621yV9mcyanSeKh9jCzRfttz/9lB0LpV5c6sZg+7TvoNuBvbeOOPyKC9O4//Nvm9bhua/AH75k+yOx4/3L1dVhTw/y+SCiA4xWt0GinUMWJJcQ0SEGN6i4kM45Owexc9LcFYXd7QHRj+HdDsilH7mwv2XZYrS/SR+rUbIoZQsdNOnHa7KF3ZJsARJ2XnKvh6HpaJpJM/6134Rr19LBXBT88Y4pa4wCdAt2duXraL8HXZtOjuKnWmFuAk/9KJx43JptXnse6famriIpEWTSiKspkJTANkfpJxkjgUYGI6bC5+aBzS2DTHgYgWrlpC7WbyW4xbQtUpz0+XngkPNh3EfvbPQHA6//h7cmVr4OOBmoxwuGXXzGC8IIajLa0Wz9CysaU4NRKVivuBxMTRZE52DUhKsjfo8c7KsnRrqS5OOJrkKGfbj+gnmNTzxux0Dpez80BLoW7fZhO3UMKfdtnrnli+PYEspNF59r2xa0TpIYTUMYmm7nJfc6xoqD6nR+HCFXBIcO63JFJSFE6VfSpe0cLexu73L/cR7vbkCGyY+8Yn8rZAvXxaNkixh0iOKGNdnCDjQlBfdsaqaigaDD7T+Sy4wBvnRi/NN/Cf3AaI/L01tZP3nWA0UKl7+EDgvoOqYof8l80nAenvkryJmnjS3d+DrS3hpPYBVnU2VXTeUZMxOWeno8XjgyMFSjHp2zwLILw0qAWoLJGNwrbX6jniqHl0HBnksgz4dj/pwCQFfY8tsfyxvdKvN1OcU9Xawo1n8FpHMMYFUXJiXcjDOIFDDNFzIpXBBkaSjZ14wtGyPG2/KRAWcw9tNvssKUxZvH+OY37Lc+8zS8/68w9t4bpZdyBhANjIclvPXVVals7VrIKEkxbatUdgz/k38+/WbpOL/9R3KZoHYOwGABPR1EGZR0zhRyRRQ3xKDDkXKF6+KKXFHa3eBdW1CoHO9aQD6kI8Nof1uXLaJUoZQtvLjBiQyT28L1Aj3R7hXpSQcbyiDIABIWb7pb3c36NnUzBfh2bsGv/+bENLIdDiZWkrDnEGMBeO0LlkXVD0w2sryRBQA6D+/7S/DId5mmfPNFdLENYjUuJraW7FVkJmyFh3DVyH5HzbvIDBvBaCUYmFhf1pZzI82c+DBapTIor59Pef0pWChrYJiB8493qG5e2CwAOO+/4sI2lk6VCWwL9ptrguT9oCNYWbDOJIs0m6gy2E4uCk3dl7McYctyht2kF0tyUuDqJCPVpu/nwlHL6wbGGuCR77Lf/FBCz7iB9rgP1hTh9S9P235o5jHJRvb+tO7ZY/+p34Cdm0yBvIb2Zn178aa7hTkrBhQ7J4whr50zrs/uCicyeHFDKVdEqcK6XLFid3sA9GN4FwPyobFmfytli+y2qCQEP8RBxQJ7TtwgxEFinBhyuton6aJXy0IaVHRQJdx8UV7HV3H0JgO8+A14/mur01AKgBsZS8EC84kSI7z2WbMoDRmU10+6/I8zHfH8xxBV3M7LsP/GON3NrgsKYI44REomV4CEK8Aia6MrU20DMZen5W4CflUZi91MoOxXvsfcChRT42KavKKDFoztHYzZmRmP/8jj0+ceCrSW3+lWXzf6h3OiTQqI+touZNmq5jMAl7dqYrx5n5WsOLtwEgBH50HqFX+x6c9J4ji4grv9TdPSL3wcnvgh+83XnSKlDt/3duy88WXu6FJZCWLK9Fv4tO1ffR5eeCEdYo4UK4m3XpTXVQkqSZKwYHcv67NKkUFiHFIyiBEdicEPcchyhUp3SK54kOxuebz7Abm0v91BtojiYiNViFiQISWJDBqiAa24wZlE0Sc9rNcovaBDGdwTdAgHLHe/VV2jbhhdFwC/9hvJt5mnpxkQMu1N1OSo6WTfwWufs2pcQ2qFXkoW65ryYx+DJ38YcMjut2Dv0gTEY8EaO9nEG2iMU+kVMMj6YQEyhSNjYoEpWJXAidExULgzXE7bzgCbmWc1BcSgYOJlAM1N4Pg2x8n3nuTj/+PHac5ssKp1FzJFvvCUdjVfkZlwdj1I2iZbjxQgzQG3XKPYN+ZWGT8zv8aCdVPtkbxfzcObU6TN0lZ4j8VZp5jdbyF7l2zd3/sX4MLH7vz75zEMqEZjxkM3HV+ls2SMTyQXyqhVp4vH9eupkhuMroq6Ye9b1XY4YCkUx7/oIKYV94r2Ke7SO+wcUtF0TrmhPNcaqUJOBrmrXPEu148Bqnu/5F0yzp1TdneF6rKer8/Fa6F1o2zhfByixChdqJSgwqDqA6JJltAhxHTlj9qTWHIU16P2PMKA2LTt9svu6uZjzRnfhAaNMPRm3/qlfwF/7++mE7SYKuYGmWtEZ7RqCdAdwOU/QN/7CWQIVgT8buPhD4Gfwbd/D9l/A4YDOP2sMbOo06VYxTypIrZMA6IOqwHjrPm2iAXN8wlLrhuRApMxGJvStAyH1SqOqQh73j4FJ1YNztmGSd5OJ/Z9snYxilMJ0LcznBee/slnePKvP2nsPb/f+2mf5i9SHdm6xR/tQiBu9Tm70AiSpZbMqMf94qbtyN5kJQG2MGZJJl94dqooHvV5pjLJQDgPcUBuXbSYgKvgyb8IZ5669w4Ygu3nN75iVspic0d5TIoF6xdJ56Eb4Bf/WdqhAlVlgby+6XZe9tvjcY8muUIGRHpHNDdS1F6FQaP0XnRAnL0GCSJhEAiDEESaOHMSB2EE4/P1VjS54vS7tqHpUeNdDcgiojoWZsBki+VSGWYa/Cz6sBdDbKJf+Bhny9BEiUEk6EBQHwdVu+KTGDKiPbg+ivao6yXmZdIDNWB2H9Xh1gu8+cj31U9qjGJ1c4Ppyb/5W/DTP8VqCcreDvgxka84/sqgy/ImvP5l9D3fb0zNscaO1saZp62WwaV/h7Q76LXn4cwHodqyj/YCMSAiNq2VCqLVNha158zuFguNVREklahMJ7NPwO3U6kJ7nYDUGc+kSPSwYnq2jbnPnGAXCY3R9OnstMia7722tRgnnzzJh//2R9h6/AQTy2aVDSIoqTiQ8+ki4Wx357Ki5M7eAj4x61FmyfLGpCvbvb1marfkRynG6oX4CXCzHOI8riyfmfXrfg92LiKhhWoOT/+YlWK921BN5ZqjBfCWt5ncKxmN0/aVsleZOZgL3//mpybd2HmoG6Sq9dbzvCkas8MoWUHpQXsig4rrVbR3uB6JvYDJF8TkvpCBwQUcoRGNveuDLuYxOInR7cfgT0Sq2ZFyxbtZP4YHQbKAw7IFU5LICWeyRQ7u5cBeDu5JdH1E+4imoIQOYnJFmpaJsYSUMAIyqMqwvOZ2dy9VN6lnUDeTdPH1F+DzXwDfTM4LV03WsLHAzlrQJWPE/lX4dtKUY/H8ncaJ8/Ch/xhOXEBiBzdehMUbhSyRfbKWKZb1TnXZE1shVe5EMT0nVW3bMOrJSSdNQSvNASyfA1bFNDh7bXNVukJCIWUTkn3U3o9ssjk9v+umOi+876c/wPf9Tz/E5hOnkxziR60XX2F1oLO2a98/FXmfgmvjOmb/8PhcVWzbtL9Gh4pvzJ3iqpQ0kfZXdlFIPQbtcuBu/C3yNovYb3TjGwbGJx6DD/30/YOxBnj9D+CgrFFRBlXL6HBi+lm6ycfj5z8PX/t62rHOjuF6xu6l6ubymttVHYF4nCGmYly9oL3ELO+5IZ8/El2fg3lTQC8H85bxhDsiGQQeGLkC3uUM+dAoZIvHhnO67WfRRe/GkpyzNgQl1CIhDgzqNagyOHE2LYva46SPaI9oL0iP0q+wZDHLDzDcftlfmZ2VjfpE2Bi7S8RoZTpPbMJHvtsYckxF25M8jBSgXHpm8/3yFrz6u+jTP4pQjzPNO456E579cXjrOeStr8LuZbTbhdPPToxPEzMmVSFTtZmoOIgDeIdg/eREnJVslKKN08h6BwPAMU06vdbVE1PO2wuIL0BCU1umMVAZk8QRwVc8/L0X8LMXCUcUGDr55Gk+/Hc+ytZ7ToCYLKKqieFqqg89BU0FIXd6liRFjAzSO8YSmuJsVcakF5NmRi/2ihtj6hBtaepYpT2VEdTze6aSqAJkFu1tJnX7ItKmWhwXPpb04nvMDrKCFAZ47XPQ7jFaBZViRlZc+KUA4zEBxRsQ//bv2Ouybtw09Lv14vbL7ooQUylaEihLD9qLSo9Ir6K9Qu9EeqL24kyqUI0DosEPMjhH6EUDjqCLWYyeqOI1+FmckkEeLLkCHgBAvptsEXuv0e3FrTiLSzmIUXxsxIWAhiikClUMhDjg6EVcD3Gy84j20YC4F6FHtTchkEqVAbS68Zy88eiPNE9LE/2KnvzLn4KNLXjmfVApDGJT/jGmVxZF5zBj7vbh4r9D3/9JpJ7ba+96zqbI/IkLcOl3k4TxNQPl5oTpnhqMnWZwVgw8K2cptxrMg6zRAlpEA9tRZlCI9jki3iSPqEjl0WDboxoN3BXGjS2tV1nqALPvQdKAoTrp+N7/4RN87f/4A4ZFD4BvPE/9zQ/w5N/8QKH5SlImEuiPMkP6aJn+N1BmmsGkx3n1pMhANDxL5UyzNpycCblIk2SPN+k9pasjBStzhuTI3LNc0N2GnYuW4FNtwNN/ydjxvUa+oA4tfOv3IXTTBRwYXTnlRX3FYZJlihpeeRX+1a/Y+wrdWGnCjefkDVUNqAxi9CEf89kK2ju013RuKNojrldiT9AB5waxWEsAQiMSeokpmLcZB7cXo9vUB1WugHtedt8dYwTkf/APhBdeEF55xbGz4948OO3rbs9Xw4ZfDnt1Nfd1P7g6hnZWqTTR65zIXKNu4PwmMW6iuolzm1F1S0S3UNlE2UJ0E5VNhE3QDZQ5whyYzR/l9NmP94/TtpYOHcIUVPk7/y1cOA+xtxNp6I2RroHToWlmiTDP/hjSnAR3ROuho8awgG/9Lrr7hn3S5nk48eT0uUnzFhQNARFFY0DWOi4Latpxet0IsDEyNSBNQJxmCJanEKYDL9c9juOVaGJvUHRm1nGT46LnxotX0QgPffgRqq1mDXx0Yn+jZJqBtwQqV9zn/WnLVCYQRgotOT+fU8vTsqlxqZ88yuRu35MVcGTMK7Y7hd1vIwdXbT1OPr5Wy/geIzrL6nzl9ybtvRzrQdEcbMw+6eQA4a234B/97ATe3sNsDrMZN75Sv7G8yg7QoiwRliALlANED1A5QNhH9EBV9p3IPjEeIHKAcwfEcCBOFjiWLshyEO2cn7V1FfthGfp5daIfqkXomxPhsc2dwOnTkWeeiaVc8SAA8rueIR85Ekt+bNnoFT+LPtx2QZroFm3QmfO1uhCCBO01qE9MOcRenAX1KHQyhLuzZMEvr7K3/6361tZ7OWNglwrRK/AL/zf8938XzpxO7C4BUAgpEBWn6TNM08/RJge8/Gn0mb+IbD6CxVnucdxWG/D+v45ceR6ufBU5uALLG+iJp2DjkfR1YlqklxEg1brtkAFWY5ym/ZWfwJeIEoFgQaxo95pcGVL5AqBdkgY0bY5CzNKFor6YbXtAFbfpeeTPP0lBY4t9w+ry5OoQcahLBepdAlpSxboRvCWpFslhkWQNKby5ud3SBMKAZMfEJF2MNT9GD7bVOMnV3iy50cNiG9l7zS7IkmYx548oEHTUSCneurzjGNheAAAgAElEQVQBl/7D6ntWJON8sVEsckpixNmCWcHNm/CPf356T6Eb73+rvrW8KnsKKRHqzuyYKD1JskAsqGfnjpWzlZ4QnYTaaRhcF+MihuBmUeW2Bn8iPoje43I8EAwZ1ljyZz7j2N2VkiXXfVMtwqKq5r4eBmlC6JoqMlPPXFXnRL+hjo3MkqNzW6hu3oElbwAbqG4gzBSZITJ79IfiE/VWO2O5MG9xrua2sQl/77+DrU3zi4bEkuMwaakqI2itnGwlaX7qh+Dke81ZxH2y5XYHLn8Odt+wD2lOoCffh1YbpiMnBpzvpWzFVBaAj0M6mHRcnl8zsmLBdN2irdNU3W0qHD/JyJq8ECCa7iVpypJ07jFJZmLIU5NWGV0bWU+e3F4mvayksAt2ARllCwPjrD8rbvzcyf2R5YvsmrDPE5+TSaZlk48bJLbIzqvQ37bnTj5uST2z0/f3u+FQrWDvdfj2F4tZQL5AlQeIkO2IU4uoBMS+hr19+D//4dTXMYPxfIN+f9Ze/Zy7jGoraIvSIrIAFiiLo9gxIgcuxv3MjiWywIWFiCwlsBwcrfdNV1XaDcvQb/iNoa+7YYUdnzypfPKT8UFix/CgMuQc3MMaoG6nzL3SAlerC1FJwT0GRHsNWmWWLGgHWhNdJ6J1RDuQWoReVSuECpEKxYvg0eivf5mrj/5o/R43i0ZTut5Y5eIAfuEXTb6YpToYOW4VB0Z/bgblPNYvp5c+Bw9vo49/PGm8Sfq425idhvf/uPVUe+OL0O3Cja8hW4+hm+8xF4AGAxVN3mSsx4pKUVTeuVEnNukkAa/DNGfnV0AZVcSpgaptaKoQx9g1elX6tNfqyMYTm84eZphUB/uT9OuqAHLF2lTZzrNty+/PTBZybQ7rM5ikCzJTLllvkjyq5C2WQr44KgsQhxKRg9dh/0377mYLHv8BOPO++zx4BahsHa98FW68Oj1VptyvDGUqllQ4KXwNbQ8//wtFk11nmXizGZE6Xv8yV83iZu4hJNnblF5GdqydQ3qNrhOJPdDpCjuWHvwgA4NzhNoRhjWrm8rG1MgUHrhgXh4PJiDDSnBviPMoOsiJWMelHsTGVWGIEoJ0QyV4FUuPRvygQo/G3hwXrotojWgnSI3SIVoJJlnYTSsQr4gPS9pbX/PXzn68fnTMmOoHA7UbN+GXfgn+6/8qWcfSegoTU85TT83IVbCgzJJvfBP2rqDP/hhSbYB23BdbPvM+OPkEXHkO2X4B3XsDWVxDN59ANs6NDEyzm8LZFF9y6q5GcElLTqCdOzKbFptAO+nMksBDQ0gs31k2uZrnOQfoxsDeRGJtaHZ4FIkjZUq5yCQRp7/iNQFmcmHkgN74QgPhzIo1scvcwduoWgZXmfzGBfiqMgXrEgiPYLy4ihxctgptItZJ/PzH7fe+r+FAGisS9OrvQXv78O+f9s3KzCmv76gZJzAeAvziL9qxl7etrqCZQV1z6yv+WljSIiZTpA4g2VHUg3ai0iVnRafQO3EdMfYIPeJ7JwxIGERkEGEYhAFpQuM0BFnGE24z9l7jUM/v6D1+kMYDI1nAmmxRBPdYnnPb7W1fDQt/MDRVE33dz5Z1FaSJgVlM0gWqc426IU43UbdpEgWbqGyJ6CboZkS2gE2UDUSTdCFzEZ0BM1WaU89y9uSzwxm6Fto2SRTpGHz8AvzMzxhTDoV8EYYJ+Irp+WFrHIxn4vt+FE4/Ya487e9/Ry1uwOXPwsE2qKJ+hpx4HJ2dw5hkCkomKSNLFTngJ0kDVzSpLJlJY8+nC8TYgVqxwOGa20JG/XeagmvWl7M0Meqj02ZnK97EaoEkfpg2rhOIkthzntoLBrIw1YUWRuabnRZkp4VMLa5WSpFmNqoRabftAhdTV/GtR60Oxfzs/f8m0ljFt93X4dJn0zKm7Wf9908vyBeHlTokjVUQ/MV/Am+8aS91YiA9m0EzY/didev2RW6I0AGtqrSILoEFKguEBXDg0H2QA1U5QHQfIUkY8UCjWCAvSRXO0TpPO3jt6nbedy70m1U3DNVGODc7FZhvxwc1mJfHg8uQ4RBL9qF1J9zdWbKmKz9oR6TCaRWhVqESdbWodkiSLCam7FHxKiZf7F7UHamr6sTTnACgVdAEuG+8BT/7f8Hf/luwtWXn2pDAIvaWCZdZ8roVbiVJROHS78HD70ef+AGLM8Yl95QwADbOwgd+Em5dgqvPIwfXYedVxF1GNx+3Rqsl0I0MWSZ27B0y6skuAaxJD5o16QxYielKAbpj7SWJk2yuebmsBBSnCxIjUI/+YxLgZkad2bCSAncY2GYpW7KX2E+yBcXrfJIvxtTpsr2Vm3zdAPtvIgdvQOztEzbOwvmPWgblfQ8BP7N1eO1LcPOVlZ945UH5+68w+Vx3JIHx/r4F8EZmLPbcbAazGXuXqr3di+yISFBI5WaZmLFoD3SodCkrrwPtnGhHlA5Hh/heJKRCQ3dmx0EGPWbH03igGDL8MVlyxYyoG2aDY0NGlpxuYuxYRDejBfo2Ed0QmFPY4FSlEWge+jiPbJzvNswO104sGGBz00D57BljyWFIbDlMtri7ZukVc9j5KfjAXzMJIy4N/N/OuP0avPU8LBJjdpVpzPPzxrjGoB8Fi4cpkQTTl4VJqsiJMmSmHYsp91Sgvpx5G8O1/zKbXncFamKIIlk2wYJ50QA4B/woGDFpbUcQU0bvc6Jok47spuDexIRler8OyMEVdP8Nmwmo2gXs/PdYc9q3M6QCP0f7BVz8t9YhutzYo9+UnnJT9t1YWa6CG7fg5/5xoRmvgvHiSrO4+RWuKXQi2lHY3BSWiR0fOAvgHQAHqFoAT+QAlQOVeEBkYTY3WchAe8yO72882AwZDiWK5HTqhS5C4ypXsuQoeIReRVO9Re1QrRCtwFVRtEa10iiVCLZcrSyYCj4F+JyIOlXczefcdf+J+lxzRmeoQqeTR/ngAP7hz8J/87fMp5xPQMVUgzhgWX6aWF9cO08LKFvuwNf+H/R9PwxnnjHr2rDgvp0Yp95rt723TGPefRN2X4P915H5I+j8EWhOjZJEiuSh6sAnKcJn7RkD2pSIMcoWlRbJIiRGm/6PcZyJa56mj5p2+n/Ug7OcUewyBaosT7iJLecgneZ9WDBfpAgWCupd+v4MxjC5KhT6XWRxHW23xwsJWxcsy+7Ehfvbz+MQqDZQKgu2XvrcuF/SRqzpxIVUkVtTjdXncvp38hn/3M9b3CJ/jvfQNNA0dDfr9uZzcl2JlsCB9Kr0CL1An2Z/HUgXo9hjkc7hOiR2FkOhE3E9EswGKjq4NXY8SBtOuI0YZJiquh2zY+BBB+SPfET5zGeE+VxprQrcdgwiui/rjougMsQBjzfZwkf1QbTy0IXoKkQriVrjnAXylCxbeMzNm2pU4hXxIjg0uu0vcuPRv9A8Um9RG3J0Eyj3A/zsz8F/+V/AU08zsrqQ9GAN5mjIyRMJpEb2nAHNIoPw6u/D5tfR9/1lZH4GwtJu9ztPOnEBTvwN2N+Gq19Fbl+Gg6vIYtvKTs4fgfk58DlzME+lY5IyEgCn9RLUKsuN4JJ06CwJJ+AcPcmjOjGdt7L2QOMkYUjKuJMRuSyouOK0SKx3Ys1Ydl0GuiLgx+g7zr/D0nzE7TXT+/MnnHoCHv0obJ27zx2bhmL7zm+gy1vwrd+Fg52Va+uqRsy430bNerz3lmUnKfHj1UumGY/ycgLjuoFmRr/X9Ntf5IZoDCIyKDmQRwrg0YF0RkLoROiwAF4XhY7oOi/aBbT3kS6I70UYGKzWi/mO14sIbcSxqtv8tK3ZA9AV5G7jgZMs4AjZYntb2N527J9zb3a7bt2X3A+uDrFt6ihjgE+jzlE2cG7T/MZZunCbIroVTcLYBDaSdDEHNsSkixTgk0agdrU25/4jecQ3bcVymbzIOXCWxn/yU/Dd323PxRToG4YkP6Qpf2aIRUzHNrj4P5/Yj34YnvgB8932+7ytoF8e3a5pmjcuQnt7Iuj1Fmw8is4eZuyOki8S5Y0JiG0ds9SR1N9cWwMddeCRfSIJ3IuZQwps2XWpkDXcxIptWXJaKKw0Ps0SRBn0Kxlz0vGlu27yTbc3vX52Ch56P5x9PzQn3/6+lBrqLUtFf/1L1vfuqCDdGLksFo+2vSRTZFtbliq+9nX45V8pviuBcdXAfE7oZsP27+u12Eun0BdSRatCDuQtEQ7ssR44keQ5jqNUgcjCsvNYiJsCeb3T1rtZl7PyVnzHzcnI1nbk3LnIuXP6IMsV8KAzZLAr8gsvwO6u0qaiQ4Uv2S3aEGfeNVqFIAxR8F76Xs0MWyHaqaonaoVzVUQrFQvkieIRvEkXYo/Bq+JK6SL2Mlz7PDcf+eHmYT/H0cIKUwb45V8zA/8PfqKYKgsEMaZs1oZiChtX2dD6OX31G7D9Mvr+T8JD77OqYmF/0m/vZzQnLUh1/qOwv43cvAi3XjGA718FuQT1CZidgfqk3crebyUwO0DtOR0vLDqu9sisE6E2DE3JGVEneUHK59PXSMF8R6kjv16YriSlHpxBOEK/a52au90pkQMM0B56Bs48+/bZcB7ioNpC/QxuXDI7W9b484VqhTblGVCx/mNnbDfJEy41rv3s5+B3Pl28vWDGszkhNPHa57kZexkUDaVUIdALdFgBLWPIBtJtFFrQLtncklRBZ9l50osMfZB6QBgaIfSuD3ERQnCzVd9xZscZjB/w8UAyZHibLDnWVd/QVLGrQ5SZRmbqda5qTNlscH5jJcBnzDkF+9goMvgswAczFWYCM1RrRer6pM7P/QUeEjpH15o1qQz0AXzPd8NP/LglI4TBCtGElNUXLV15tNCtznOnx5nV5WUnzlk9jNlpK2QfFm8PmFd2bLQg4M2LcPvyyucozgoZ1aeR+UNjXWYdtee8zqxucyFprK772rIVkF2bJkjxOI/y9cgYCKTfQ9tbBr7t7SJwqAZ4J98DZ581Xf0ddDGx73SWwl5toQur3sf+9r3ft37xEGEqHVqUQO0Hq739/NdWt9dXSTOeoTRx+7Pc7HdlKeQ0aFpRWqDF2PGSMSOPxRi8y3UqRnYcFsnmthRhKUGW4mi903ZwTV93dIPrh2N2fPdxzJDhSJZ8JRWw39SNsNQD1/h6GLRyURiidL4S6RW1YJ34DtRbgA8zfEb1CD5adMXYseIRdQhe1HpKaArtC7h+l3b7s9x6+BP1GT/DIQIdCXDT8fm1r8Nrl+Fn/jM4e9ZscOKMKZN67o1pfsUoQWod2PauwnP/FL3wEXjP9yPzcwbMw4Gx77czxMHpp+wWB9i/YsHA3TeRg2vGMtvbsPdaKu14AupNxM+h2kT9HPHz5Kgo9OIxIMgdaMQaLR7ZcPl0TvqwPa7DEglLGBZoWFigs9+dZJEc7Ns4a1XXTj5mjgn3xzhtxEO1CfUm2u7Dt/9feOvF4nnWZjbFhQZhrEchTGnQua50liqu34Bf+mdw69b0uS6D8cy6fgx1vP4FbvW7tAJBU5F5Me2qV2G0tiG0ST9uHbREbRHXItqi2iF0iO+Sza0XkX6QODhpBhFC48MQpI+bbjOEVID+mB0fPR5Yhgz3x5KrYcMvwkFVxboamkXjo6tDkCYqM7zONTL3qnMcG0TdQHUzJHYsopuqbMhqFbgNRDbUmPJsShiRWqBR0crPmD3yQ5yu5r2n68wSNwyHWetP/yR89/ekxJGsK/cGorkGRbahrZ/cd5oKAzz6IXjiE8jsVAFSbxOYjxqxh703E0C/YXWdj0RYQas5Um2g1Sa4GhkbfjrGfna5l5+r7CNCSFq4Vaczb3dENJjkETtkWKDDATIsGXO1R1ae/p09ZLUlTl4wIHb3m0l3lyHeJJtqA21vWwH57ZfLTT4MxOXjLK1kn3NO9MhgXKVu1l9/3kq7rny3swDfzMB4WNbh2ufYCS2tqAxqFreeMQGEVmCJakoAsapuKnogwsKSQOTAj9XcZEFkEUSW4lgSZOmE1nvtgot91W0kdrw5jBXdjtnxkeOYIedRsmS242PDKbniZ9HFPdmKs7iQZax9PQwqLkoXKmSIA716XFT1BDxOPXgvJoZ6Il6c88aek55sIqqTFIVRFYfpyaKKExUJrXbbv8+tRz7RnK5Pif1GwpRmncev/Dp881X4iZ+AegYhacuhtxM3pNe7VIlN3ATOhy7FxTlw9SW4+hJ69hl4+odh8wISFsZs366HuRyuhlNP2g1gWFpWYLtjt2W67/aR3hi66PVV1WFllFHKw8+Uko0ceg7Tt+enrJ7H7IwF5jbOWruk79SQCmYnUb9hF6BXfhduXkpPFuuuxf8rkkyxxmXLqLKziavsgv3rn7KONCvfX6RDz2b0t+vh2hd0Jw70ohIUHcS6fVh9itFRMbLiDsVA2vTiVsQkjSi+RUJHoEPondDJQO+cDoNoEGlC7XUIsoxbMo+D24vBbxo73tqOzOfH7HhtPNAMGe7AkotKcFW/dDlZpI5t1c98XQfXhEgTYt9UXmaqxpRxfgPVDVU2JFd+yxoyuhnFHBmibBR6sjFk05MbVBu1IkWVOK3Ofj+nZmeHmr6DroW+n6rE5XH6NPzMfw4PP5yYcpFuHVNgMAaQXMBHVlkzFMxZJ40yM7MzT8LTPwJbj1jwr99PPuY/ofNIg/WC627Z/bBIGnlXJMj0xbLkEPG1ZaKVNX5zdpqrDWjnp6A5Y/e5Ytt3fEjShzfRam7a8Lc+CzuvFdvI2vUkB+vK/5mCdrDKip1P21jBtWvwT/659Wwsh0uFghprI9beqPobX+K2RhlUGZJu3Cl0hW7cknRjFRaILJzGA5BCQ7akEEnPE8NCHEsRWQ5BW+/qzju63seubkPfu9mQk0CGeh5XKrods+OVcQzIZTeRMntvuRT2z7krixveh9atBPhmbV0FaUKUJmfwrUsXqrqRCtmnoN56aU42EJ3LlMU3UyyDL4FyJUKNiH/oo3py48LQ0Gf5IoHyeqbeT/0kfPR7IMRU8D7Z4kIG8WjPZY/wITfVumYJE0gInHoMnvwEnHqvSQbhwKxfof0T/IX+fzT8zIKW1RaqA+xchte+CLffXLvgHXHaHSL6GYQTIGf3BG4qm+kcPP88/Mq6RCGMrZdmBsaLt6ru5ldlF9VgDgodRjCeWHDOxluaVFGU2BQDZJcCeiKWhVdKFTkjzzvtLCNv1peBvOBn8fzG2TCy47WsPFv1BxuQH3jJ4lCLJ2DMGCqSRaLbj5u6ERYspXGV69UNQTtXOXFxwKnHRXAE9epwgvdETaU3cdnylh47RB2KU7H/rT2diqbQuZj9SwS48ZzunflwtbX1tMwQB51L9ZRLRwXwa78OL78Mf+PHrQ6Gc9ZSyTmb0sbBUlQyOI8+4PwBRzgchAmob78BX/tlEI8+9hG48L1w8gISonVI7vfsQvAgDVeb9FGfsCpv+9tWn/jNrwNZHsozkeIwO0ojhqQPi9naysJAviqawlZwsA+/8Vvwhy+trU+SNFLCB3XN/iXf3vqG7gsE66SeJIocxFM6tSJCnVjFwhakzVIFYp5koNVIi/guSmwlaIeTzokmqYJ+EB1wzdC4GAbXhU03DyHZ3FaSQI7IynvQwRiOGTJwB5Z8jwCf1bnw9dHSBXNVnwrUqyWGqGziMlNerQSHsKEwK4J8TU4aUdFakEpRf/IZNk9/l861H6AvbHHrEoZ38Nf/Gnz8Y4CuBv1yLYycshwVAw4m0FgB6TTK6XUZfKpm8MQn4NHvgvlpkzS6JGnEdylzdjOTJJrkH2534OofweUvwPA2tnlFMnITGOcqc7nb9ViLIlVc+spX4F//dprtlOvlJltbPUPqip0/lOXuKxwISS9W6XVK/uiKIF6b2PBqRTeRA2JmyRzYclmIhAWR5VFSxeBDX7fz/u0E8mx3HAPyA8+Q4QiWvB7g4xxXQi8u7smmboSFLqRZNtLPWqlUnIh3IYhTj6tEnUacOPVquboOUSssEHVix5ICeim4l2BQVMWyhUXFuj8LKlY2cvcVPeh3JZz9WL0pcxGcM1BelzBChN/81/C5L8J/+lPw+GN2Mo9ODJecGKkexgjGaWiJvIW2WdrKssbcL8xD++rvwtYj6JM/CGeegs2HkRhNzuj3oT/gHWUD/lkYrjEArjfNJSGYVHP9myZJHFxLLzxi/8hRgccyeJd/+cSkx1KZVUr0qCfN+I034F/9Kty4sbp+pUSR6lJoqPT6FzlYbtMeAcY9lvzRiQXwUhCPDqQV0Ra0BVmaxU2WZnFL4C3aEX0nQjeIdBLoK9HBSxgGp0OznA2Da8Om2wghB/IyGN8hkHcMxjaOGXIx7hbgK6vB+bDhF3FZVTNf98HVQ+xqS6uWJnpmjExZN7xaKyd1bgNlI0piyKobKbV6noJ8c1KQT2GGMBO0UaUWpNZU+F5RX82keuj72WpOD56+N1A+SsLI46PfA3/1x2BjnqSLompcDNP7cvH5sQobHHYylMthBbTLjMB6Do/+OXj4GbOQNVsI0dhzf5AYdPcd/gW/Q6ME4GbLElq6fbPsXXsFtl+cmPDKtesIC90d919ZFyO7J6oEyNVUTN5XsFjC7/wOPFckeYzrWkoUDdQ13U4Vbn6J/aHVoQDjQdFehF5Txp2sBvGWarrxElVLgxYWztozLSTGBSKLICyIshDHEpGlC7TOadc7bSvX9LWP/dCGfsPNh+AX4VA1t+NA3l3HMUO+08gsGVjvLCJay6AhyLKVMPNSay1BcF56weE0irHgiItOrW1pRLJujJVbGB+r4Eh1dLBaOlZ3JxXWsfZFE1MeWmX7s27vzIfqjRPPuGb05/ZdAty1qexXvwZffxF+8sfNt+x8AmNrQGo2ueTEoOgenYFZmYKARzoCCsaXgalfwutftroMAPVJ9LE/Bw8/CyfPQ/04EoOBcr80Jh1bK9KTPdR/oiMBmWtMdvHpVs3NJNfvw+5VY8BXXixKX5aSzhoTHutzFLbClcBrfq4sWOQLVpxvWZ7Agnaf+tcmTa0Pl/zF9SRR7L3iu1svsUBjuBMYiyZWPBafH4E5l9q0LD1lGdGWKEuEpYi2EqVFtBORTlzsXaQPUve1MAxuGNwyDIObhejqGPxwuBPIsc3truOYIa+Nu7Lk4Qm5srjh6/7A+7DhD2Lr6+DrftbWU8KINN73M1VzXpiezBx1G8ltYTqyYwN1uRHqBrChyrxwXsxAGrPDaX0UUwbx83PanP0Yc/GD0HVHSxjlOP+ouTEuXEiWuCElVISp3rLqatuoFUlDVwnfoR1IEagqn1hjiLOT8NBTcPoJ66CxeRaaTUQqA//Yp2SYks1HLBuxZPLFdpZscwS+PPVP036pDcRcDSrmhugO4OCmBeRuXzafcLvH4bEioDPNCtYYcLlsTOiQgkU70/mzY2JMfU6JLr6Ct960IO1bV45YjaMlihvPsVxuSwd6JzDuzd6mHUKbHRUyFhBKNjaJC9ONU8EgZYHEhQjLSTemDaFunWiXE0Dqdtb3PvSbbhaCX4S+3gznN84Gqst6zI7vbxwD8tq4Y4BvTbrwoXXVMKsWcVn5eVX1g6tTrYsmqDTqmVUx1btwqf1TDuZlycIlQB59yZpAmbmkIB8iM4XmbqDsZ1o9/H3M6zPRJIy+M79yKEB1fbzvafixT8KFxxgz++Ia+MWANR9NroyRFVJM1UsAYtXSdYQUfUjpsDdNnzvbtOy4E+dh66zVWa43TALxjbHY7D4Yp/2JTWoqrpRbRsWQ2mC1FgTtl1Yk6OAm7F6xRqPLg7usv67+f8exHgUt3iOOKd05MWK3zorrCZTffAP+3WfglVeP+JoE8L4yf3FtEkV/y4XrX2YZWhnuCsbQodomMG5REhhn0M2+4rjIkgUqi+Q3Xkq01w9Wya31op132g2u6esq9mE5DBtuPgxVOwQ/i/eSKmyTjgG5HMeSxdq4Y4APVqQLANFFGLQRWbTSzGvpqWWgkyo60QEXPE5BfEzmNtWxffEoYzgxj1NanrEhNT6GXDaSo+ULRQmtsP05OTj1AZmfeNbV+MS8+oItr8sYr16Cf/Rz8MR74K98Et773knCiLlYUWLOEiZg1wR2o4RxDzArgXcF24onyjKa7QLab8K1bx4B2PeB7utywr3ePl5U1lbwjgG59efX1n+UNAqWnhmtS92pM1sfg3di9Uk+/W/htdcPfxek9ydWXDeWfedr9i5Kf/tlWapV+n8HYGzSBGKaMJEkT6TlaCsiLVHbINKK0PlBe3H0g4s9rhkaH4aw6MOQmHHwG/clVRyD8eFxzJDvMO4oXaSEkaOscN2srbIVzse+iYkpW1U4Zt4zn5JGTMbQFQucJYukx3O1uslzUZq7MGUP6hW8IL55ONZnvltm1VYU+lTborTHHcWWwaSMv/qX4en3AWoyRkyJJZkxZ9Y5tlgq2jCNOnPBFstkiPVxqF5DXs7RGHgIh9dZ6fjBq99fsvryA44C7qPWsVz/FcWieC6z4OwdVqbCPyMrzkG7HKxLFrZXL8GnPw1vXb3zOpR2tqqGumLYd3rr69p2112vaBAIGBiHO4Fx8hovRcdKbovVJJDMhqNZ2lLyRwgsxdFaFTdaJ9qFwuLWtLPhjha3+VyPpYr7H8eAfIdxP9LFlX7fZT05Z/F1864q/cm+kkajzFJB+7k65l6Zm/MiactJR9YExAmg5xmUR/nCNOWmcF9UilYiUmVQxvpf+JPPanPiA1KLDiZf9L2Bc65vcafT4aGz8OM/Bs+8346OkAJ9WWfOunPMjDnJBGM3bF377FzAZ7pbAbUVpqmryylet/rjHC0llLhbLlth2usLCyZ/pw9YYfpyGJTHXnySDIwJiLMM4XzhKfa27175Jvz2pw9b2MpVlQTEVZ0kihqVir2Xtd+9KJ1aAew4grHqIMiQ6lMUAbxRM24LMM798Zayph9LZJkcFUvJjNnJUpy2YdCu9Bs3y2bI2RRwHEoAACAASURBVHijblxvxWOp4p2NY8niDuOe0gXb8Tzn2I5BYMGmzuSAlmbZ0M9a8ThBK4mDiPeDqEM0mvMrOhWTMkBdivyoSj6nk3xhRG5dvlArrm6rhwrYvYg9Rr0i7L4s7cHrOpz5iG9mjzpP5aH3EzAfJWMA3LwB//RfWn2MT/4IfPBDlvElSU8OARhSenYA3JRcojo1Kx2tc6lmZj79ytOwLK0JEwNd16WPrHx2xLKj6MW6TDICa/F4pXbyOk4UAMwaAANTZ5EkKYxpzlaVbtKLK6tF8tKL8Jnfg52dI1aW6TNHeSLdfEV7VcKtF7QLBxLUOqgGsR8mWG0KrPXSFMC7CxgnoDUwNrkiAXCYHBVLEVpjx9qFoeq9aO9d7IOLyW/cD5tuFga/CMHP4gjGx1LFOxrHDPkeY0W6ANZrXbzZ7bpcgCj7k48K8nk/NNl5oSoznM5Rv6Gp/oVLrDkx5fx4DsxVmU2BPmkUGhEa0NrKdmqtSIWoL4J9VlFO1c3OS33mI9R+HoRQMOaQgPVexeg//lH4898Hj57HgCxO+nKMhQMiP5eDgFowZym+JwHfisxRMOmjZISjWPM6OK+Po2pz3Emh0HT1G0F3jQlLsTy3SpLyliWJ9L/PbBi4egW+9GX48nN328vpfa4I2hkQh6XXWy/Qt1e0RyRqilpmvRiVIOigyOGkD9Gu0IxHzzEiCxmLz8simoNiISJLJCyIYqA8Oiqq7k5BvOw3Hur5agJIrlUBHEsV9zeOAfke467SxRF68n5Y+jq2lZ/XVU4aqaKrs/PCR2aqw2yyw/n5nUHZbHCQXivMBJmhNAozEes0IlCjWoNUWVc2UMYJ4lF1ONypD0h94v1amcUt6cv9MAEzd5EyAM6chh/+QXj2WTh1mjHAtwLOxbIM0Nmelpux5mXrjBjSOpRab5ZBcnX68Zdh5fBd13dXUpJ1YsVjDygmWWDl+wt92eVuIAmAR0nCsQLKo60u68YObt+Cly/CZz8PN9eqsJVD0uePQJwkilRec++bMtx+WXsi0cBYA5DBOIiKCf2SsvDQXlV6saSPTtEWNf2XqXDQ8i5gvBztbVK1wdFmR8XgYp+TP8KyH3o3G7b8PNyvbmw/zTEg320cA/J9jPvVk80KN4FyP/O1j1UVQtd4dXWMNFplUGamLswyKGdNuQDleaEpJ1CWmaQGqUeBsmqqe7EW7ANxojhQ50+IP/MRqefnotOQtOFRX07/3wuYAR49B5/4fnj/s3DyZJIrCpuchgKwC6YcU6H7MiCYvywDdh5RR8Wj0BfWVuQowfgoLTg/laWNkvEWLyibm8IEuJpAc3RO+IkNu6QZ375t2vDn/wCu3qMd0wjESV/O8oT3iPcst1289YL2YU8DSEwSxaQXT8G7Qe4AxqSkD0uFXgHjLFMs4qgTyyKDsUTfimBgbBXcuiCx977pghuGXFIzg/GKVHGsG/+xxrGGfB/jrnoyRNjmPOe4Ari4Jyd0Qw6IoWlr6WYtldYyxJ7KicRBJFTgI2Yzc4gSACcSU3E2jOGNhjjzuKlI1ouxXD5QlCiSzHCCqqparXviiq4sooJo2FO99nmN9UPiTz/rq/l577TyEOoJmIccvNM7ywFXt+FTv2WPHz1n6dlPPwXnHoVaJj1Z8+ckoPZrwFx2y5bEpMcdX9RsLhk1hcSxYllL8ocrGHUJuGP/u3VQdqsAXNrVsiYMEwPOoK0KV6/CpUuWDXkvELaDiTHgV60BsfMsrxB3LsrQ34xByKx4kigY9eKxuPwIxuiYfVeAMVaTYtKMl4fBmMSMfSuREYzdQOec9oNoX7m6H9wwJEdFOOHqmOtU3BGMVzb7GIzvZxwz5Psch1gysFIVrm3lKOeF15nvZ8vah6oKkcbrUMcoTaxoJqac5Qtma/LFXKcaF/PEmudimrIVtkebZItrFExPVqkErVhly26dLSu4+pRzpz6g1fwCDh0MjIdhcmRkjflOwLw+vIePfBg+9EHLBjx1KoFqLG46gXT2NMfElGOcXg/T8qzv5kBk9ggfSYplWj7qyA5KVizCyITHgKCbXrcerMvSxs5teOsteOkleOEbaUZxHyODfJYmqpQxWHmQiuVbxNsvy9DfjlGs/N46K46lRKHIIJJ0Y+hR7VToBLFCQak7tJQ+Y7O8LRFZrsoUydIWk148gXEXpOq9owt+GOp23gdpw5GOitlMV6q4Acfs+O2PY0B+G+NI6QI4KsjnQ+uOssMNUeoRlD0zrzQTKIdZ1pSdS7Y3tfRrVLMNbg7MZCxqr6mofQ72rUgYY0afiHjArwf8kigg1QnnTj5LtfkedWgwYA4pfTkkxpyL298vOIOBzoc+AM88DY89Dg+dsXZT4+cUwb+sJ5cWOvJdkSm4wprX0HhcVjLjDL7pNZRgnLP93PS6rB13LdzasSprr7wKL71s++N+R/48n50X3vaHrxMQew5el7h7kWHYs6jonVlxkfQhMqxJFDl4Z4BsYLzEnBUrSR8i9n80n3HJjA2MhS4XDApS9ZXT/ih7W/CzeGQQDziWKt75OAbktznuN8hXOi8OYuvvD5QnTdlpmCWfcgHKpACgzER1DjpDmZk3eQz21RMoT2y5cGHciS0LIH5D/Kn34zefxCFh0pWHHPwLU+BO9d5a81HjxEl45kkrC/roo3DmDGxsJKCGFfBdt75pYssqk768kim4Fuxb0YpTUC4vz8u6FhYLuHUTtrfh9TfhlW/B3u7b37bMyjOz9qk2RVVNerF6Dr5NvP1NQlhowLZG78SKCxdFwYpHMO5z8M6Ky9OCtCpWOjMx4AKM41Iiy9QPb1UzvgcY5xoVRzoqjnXj78g4BuR3ML7joLwiXwS7V0sgUUcC6bJQETPnkh3OOlbnYJ+xZNUakQaoILkvjmbLDsQbW0YmYBbnG+TEM1Qb78X5mSZgTha3zJpDEbgrgfGdjqqCC+dNk374rHU92diwsqGzGczmpreKS24HKepasBpAzBp230O7tNZXiyUsl7C3B9dvmOb71pW3x3qPGlnyKC1vmQ27KskUntAKi9eIe68whM4sKBmIEVtjzFscOYIVgw5Yp4/BJIrEjqErgnetCG00bbjNjglSOrRE2pAfC20ZwCtlimMw/tMZx0G9dzDuEeQjF7V/c/x/wSYbLFhKs2zo5h0VniFWeDfAIORAn0YL4olLka6oKk6Mi0ZVnJg/zcJ7lmoiRJSIEASiClGUaGyZaAE+oipRoEKJKhoTW1YFh4gTREXVgWrocDt/KP3OSyIb59VvPVm52TkEKqgSSw6hYM3Z9pakhncCzsMAl1+325/1UTJuV0gSPtcyTsCMo91G97+tcXFFgu1uNWkCdFWeIBYOiiAQ1BI9LOEDek2doVXIYNxSMGOsmlvLyIztsaw8ziU1tRWhuxsYh9yG6X7AeGX3HIPxOxnHDPkdjrsG+Ypyndmj7EPv7ocpuyiN6jBTlSalWc/UulLn4vVzhLnLj02ymGG68gw0pVdLg1ryCCI1h9myWeJWZQxX6suYODCKq9UM2XxS3cZjztWnVTSDcq4Ml1lz6UcenRrvUN74szCy9jwGALP3uGDDbgJhcY5+R3TxZowH35Y4tGNO+d2AuJAnMFA+zIp7kCxRpLRo6TTVMk6ZeK3AMkpKBiExZXvcBiHpxdqJVG102t0PMw6+jqPX+KhymnAcxPsOjGNA/mOM7xQo93GoKpUmRKljJY3XodEos6g03lsdDEVmiLkwHGJdSZzMJmeGzERj7sc3s0w+anNhSF1oy6YpT04MX8gYLieUJGCWApilsCpItSmy+R51G48j1SlkBOF8W2HNawA9gvOfQZAewTffrwFwyYbd6vLhNrp4Az14XeJwUJqsszQxAnGOXOagXczyBGgotOJB0CFrxSraJxeFZeKZRNGpuLbQi1tJTDiSlimtoK04WYagrRM6cdoGqTo3aOfN2tbVrhqOwfhPdxwD8h9zfCdA2YeqGmJf5+QRV4VaVZoYmalK4z1ZV55p0o9JOjMu2rKkJZvzgsbYMo2KNkICZMvmqxGtkhOjUsVLqqt8B2CWNcZcWBQyOOM2LiCzR5HZWRFcTgiJk4yRWfQIzrrKoGMO1q3s3D+ZH23FmwxTBl7pvJBVAHaukCeSVhwd7Q3V9iq6eAsdDnIr71Gz0TUgHtMW7wDEQSTJFGiPWdz6pBX3ivaiYpqxMWFrxSTaxqQdE12bnBRtTM6JfAvBalK4VJsiDr7PSR+Vq/vgh+EYjP90xzEgfwfGdwqUe+2rnGbtfaijSqPKzCmNOpmphkaV2RTsEwvqCTOXe/ElCUNI8oVKI0INSb4Y2TKVmm/ZWLJqJea88Iq6DMyHpYwy+LcKzADOIbNHkNmj6mZnHdUpZNXaphNIa1z1OceSQRcs2nbyYVYtxfPjkLXnc8CtdFcwrfYYGExA7HP23drylCQy3EbbG5H2qsT2Ghrj+G1HAPFKsG6UJpiAOBoQk+UJY8fGgAdzUCSZwgJ3qVu0dLoqUbRR0v8YQBfBu1bEdxK1jUInkspnBt/ndOha6uEYjP9sjGNA/g6NtwPK6+4LrzPfzdrKx6qaal+42lVDrTG1hTIHRgJoabKurEoDSVN2MlONDZoAWZI32bTkrC3XitaimHxhbHlKJFH19wJmQJJdTrgDayYvcNCcxc0ehuasSHVSxc0pyncWGnPO2ltnz+MtPSessecVBE4PEzBLAcArNzc9V6ZLj5l0QlzCsCva3VBtr0N3g5gMJXcBYctiMfvaKFfcDYgDrMgTdi/0giRWPGrFVjBIU8EgoRVxGWxbYClCl/XiKNolJ0UXEhCL0y4OVe8l9rk2RUgZeP9fe+e2JMeNJFH3QGY1NdTM/MD+/6/t88yKErsyEb4PAWQis6q6mxSvUhwzTl1a5LBbZUdujgBQ+VzvTlOkjL8ZKeQvyOdI2fy99R19XcrFl2l1m6vWqDEKL0W4uOqlLfY9GSI9Q3iitWQsf5LxMqTlfiffBdEtX0iEkIca4yTmchJz1BeEsZ2qE+NyY50BviBnYFcfANEuwPxvcP4XePk3UX4lyy9AuaiF4EHS22vsr/t7L3E+o+ImJccvAqhXov4B1N+k63+E5b/Q8h8oLsXmmMsHEd9KeEjDvZYICcfsTKsp5CcR16OIh3oiTm1rqRjXdr7xM0LMkYpdV9LiJhDvksazQ9fYBq2rsVxjxlhxJgWnZTJfqs3rKONfyi+r2wdPGX8/UshfmE+Vct/R97s/l+JLKe/m6VrLVLRM1W02X2eXzXXiXLRe3HmReLEyCFn1AmN0zBgrjp6WeQHbjHLUGHNf9EOMwc1om0dOYi7HjhkGahPznppjwS8WAR/KGRgE3f5nkzQQoXV6T5b34vSesKfY1MYLaDNgl5ikZpxhd1hzA05rhk19Wgm/Cr4AukJ1AfwZWD8I9QO1fojLj9pf61yKnB4fSrhF+rbT7iBitoS8d8Tb80HEAFcQMU2xL9rFIfPRFV/VzjYeUvGVW3esZ7FcNyFXXaMv1rVyupZVi9EXtynOM+YcVy99XNZqc91rimEHXsr4m5NC/gq8KuUH26y7lO2XS1nq0ioMzqY69cU+l80SLiZeZHWrMzykuwv5mJYvEi5muki4CLxEZaGZMRI3t355Oom57B0zCqCuwkjJQ2oGxEHO5+QMHAQNnBI0cCPp7af5ls9o/2feIIejQO7It7+9vb8LuP3+YxLuEhaOabhLuQL0QcQroXoU8TbatkgtGRMLoSuJqzuvbHXFmIq7kCE8G7TXEl6ura64Gn3pi3fOsk6mpdq6zmVe/Y9rfSjjR3PGKeOvSgr5K/FWKWN9Zj+QyPxX+1A/lklLKX4pt4t90Su72zxWGC0tx3PVJ1mkZwGX1i1fJN9mk9s1UJE91WQ8ziofxdzTcU/N1uoMG1MzogAY5RyrYE28e3oGTgkaOEoax/dunv+pfy33n+sg5UMCjje2BnuvI7avh4QBHdMwvNUSHmkYsWjXtkGfRDzOGC+ArtuNH33mOFJxCBlo3bCuzvLMJt8tFfeKwnwZ++Jx8a7ata6c6/vyrrr95ttBQdOTUsbfjxTyV+RTpdzPUzZfrE9gPL9bytgrm+p0qDBkc6soLlK97At+vBC4SH5B3MX3FIt7m5znQczzrZgxCZioLma085VZhjrDgE3Orb4Qh+TcxKvt+ZiM70l6+9ndyHqEb/zc3i2aR+mO/3dn+bb393nilnrb0mIkYYAtIauNtbGSQ0XRru2WUFtHvIac26+jiLerl+KSUrsC7RS32IF3JS0OEZKu+8Jd6bK+Gn05VBQs69gXP32ca5+kcJv9cJ5xyvi7k0L+yrxJysPRnVFfxFjcBy02+TzZu6X0Xnn1MhWt8yqb2mjc7JGM53NapmoTNS7WRNxqjEvUGJoZsp7viDkuUO0XqUZqjrMiGWIGYHtq7pXGlop7rcFRzvFLY31x0zFvtYXGz+dNdfHaZ/ckjUEivBmgO3TE2GoKbq+xS7iL2RH7oH2oJFxtvpht1x0iDVdxuIAUXKGWjo8iXiINxxkVTlxbPXH1Vl/QdRXL9ZyKnWUx6mrUUmtZJvoaO+/q2vtibzJ+z9n7WNvNPXgp4+9KCvkb8ClS/l+/8lGvfPW1jBXGqjoV2ewTZ1Od3XkxcO5pOXboNSGbx4QGcKF4gfnMeD1LvBCaT2KeWsd8FnNPyj012x052y5n9GU3dkEj6o1ByHvXfOyZ71YZw/uv/+jP/yZO7/d+GHfkG881JuOoJgYJ+42EQe9puIm4jiJuN0MvINajiLmQujJ25F3htiheh3DdWo+sq6hlS8XQYtaEvGqp9GViWQ8VhU31YV9sF6WMfxxSyN+Ih1IG8NIExrlXPlQYKpOpTtU5twW/qadlF+dSYobZ5LOAy15jaG5inmG+ba0+ibnt5mvbrGNzScFWZ6gMci535NxH47qgOQi6JegmYu4SPokawOOUrAefX96I+CCSUcpdvPFakYrb798W7ZqA1QUMwNVS8knCdZBwu54bK+KWj2XYDr0IXO+IeIFbCBe4tquZej1xddoSmzoiCe+p2Fdfy1JMUVGwrmNFce6LX5ykAJAy/n6kkL8hBykDx0PuX+iVx519pmrl3TxdfS3Fp2nxdSqy6SYty2YTZ5fPMkRyFi9srwnOkl8Etg5a8y7mNqdsnCjv51/M0HZ8Z0/N26H3BzlvC31t0Q/gIGiGoEPGJ0mfJjLaz4v3+2Q+6JJ12x2rf6H/8cfJib0r1j4x0QXcFu44jLWpQrEV+o6E42CgPQ1X7GcYr6ItdK3REQ9nVDiXmJqI7ljQQsdVtIWMJEzH1WiLc+uHD6m40tfZppgttqnWj8vqLD7uvHuxLwZuDpcHUsbfkhTyd+BzKoy+ieQ3X2ycwjCfy5iWx26ZsslV515juDyeC03MUWk06c4tMTcxcyY8Dri3OOh+m7zYDycqrWsuJzkb2lkY6luuYxLDtE1igAzhbpMY0qG+GPvk16Yw7v6Yx5/48GSQ8CbewwSF9vrC2RLxIODWH7O2I0xHCVeobfYYDgdCPyzI2VKyxQHzkYjboUFaRItRN2/PiagkQuLteVlEX8eueEzFbksdpyh+tdkPmz2yovihSSF/J94s5TsVRp/CKHoq9m4pPS1ftZbiZYodfmXiFBMZrp6aOVuxWaq7dJuYx8RMcYrEvO3qmyTEYUTEdgMJgRJdc9s8wnZAUZNzrzD6rSQ4CBrENn3BYYZ5E/WQio+LftLbPrdNtMDtol3/Y8ZFvGFbCb3F7FHAcc50qyhwlHCbqEBFnF283/ChdpYxsbQeOWaMnUss9I2JeJPy0nrixasvQz2xGH3RWtbKuhZOS7W6XjjVnor941z7Fmi32e9WFCnjH5YU8nfkTb3ygwrD/L1tFcbQLZvWsnrrlmWTqU5RY/gUYuZc5dPLYu4S3t6b4j1s6RjQJEZK3uQMFehwalychxGpeDtzORL0dhaGaZ9V7qK+mcB4MAb36PN70xnzVsqRkNVrCojbJX9tvpiHcyiq4o67w20eYKssdglXakjFYBMyQ8iuhbSl3QKyvCTiQlujntDitNXW6IhLT8VWV28y7l1xryjcPvibKwogZfyDkEL+ztztlYFPTsuman2Hn/lcTGsZawyLtDy1fnnq/TKLTbuYbdrF7JPUBA1NFGaZptYjTxwOum9y3nf19cSs6JBbej6cg3Hafk3E/X7nqYuoMo4Jeft58cHnV7dCblI+ybgv7HE7BEgYtz0P51FA2wYPB4dE3HffSRUxTVHjEtI23katdPbDglp3rEWwdRexr13Eqr4OPfEaydhXX8s61hPOqbotte+420X8+akYSBl/b1LIPwCvShnAa2m5d8umd3Z9eo5uWbX0GmNLzJPHI7qg98Ts8snA4ZGTmWYH2wYRzOx381nMJntUFJGUxQlAkbFQ2hb50KWsLuU2hcG9T+6bR16YWQaO9QX4oLoQb/rjISXfmS3GYdNHl29Lx3DwZrStiqx0VQC9L66CVuszxx5SbhtBFpGrQas7F6PW1g3vj4dE7KujJeHVtkS81RMs1W2pl+en1fnRx674xVQMIGX8Y5NC/oF4c4VxSsvUynEzSfEQ8/O7pYSYl2lxL0U2UV7uiZm90ig2dSFTmkLGPkVq7ot5nByaqJBxS84tGSOkrL6jT0Vm1gTde+S2u691yOJ2SFFMY3AchWspWWNKHh8f/jjHR55EHBMX0mF6gm0LNMYJit4fs9K93XnHSqot5mGN7lh1kHC1PnvcF/ciDa/WJD2IeDW2r90RsWg1piesVsai3dPHuTo/erW5jps8xEkvpmIgK4ofnBTyD8bnpmXzykc1xtXX0muMx2L2EpMZHsm5+ESEnClOgk2ETx5TF1sibnIuLTkXNxQiErJHtWHYBR11ham42uLevrDXD72PU+P6BIaOdcVp9vjVDpmjhIGY5Wg9sbZJin3TR5exUS5vt3qAvgtYbuAqxmWk5rG4Fwm43xDdErNztZiqWFstsRptFXz1GgIOEWtxWH0k4l5P9A0e9+oJt6JMxT8/KeQflM9Jy1YXnmuMotWKngp/We0lMXP2EhWGT5SVKp+sC7mlZsKKySM1Q2WUs4dwJ8KKWn9MqMhUgEjIUW/YPnEh7TeR9EOJzCzuAm2LfA8mLvTKZ/fOIl7/bdsiHki11NvG3drNHuQ+WQF3axUF4E6PhIw2dyx4Fbha65V3CbMatHoIuBptbf3w6vC10FbRq7dkrCWE/EjE+mPyyudaOfm5nvAyK1PxX4MU8g/Mi2kZuBXzMLfca4xzv2zvlvKsaqOYTaUYvKwh5FKneKRscnjpqZlQscKpSsWiVy5dzpSKWxM1rLQ6Y7+fryVkt77F2oySOfo2a9vG4AiZC4ywrO3OD9zUFY+O5uQg4O2xJWIKcBmx1RVNvALoBrhIB9wFVvO2KWTf+OEtEVcLGVdztcQcEhZZHVoLWb02Ofc0DKuir06rZY3Hib46rDprHUX8xOLe6olzT7zVE4/mioG7IgZSxj8yKeSfgLtpGThOYgAYa4zxTAzK+ZqYr3IrXqYQcykmL5xarQEvQ2ouVSqt0ihVKntytgKoUF4cZjSVQdDtZDgz7+dcSAaYDaLmdp+SYhef7/UFADDEDTyWcacfNu9DQqas78Zj75TdBWoTL9z7haTWEnJbxPMuYDmrwV20CoSYexIujNTs1ULI8Lql4VZLaLUaIq7VYTUW68xfE7FoOpxBMdYTAG4mKIBMxT8ZKeSfhE9Oy+v/8Nwv3xNzrzLoF9umMjQVym2rMyDbUjO8VJVCebFNyCosVlwez5uAd0HLHCy0noYVwpa2qqKLGuhnJ6vdNLpvFHG7XdDjzfkWt+dWmPeEvEm43wItABrE2+aP6dYSMkCXwy1SsXcBi3T1hEyrqvG8S1i0WlirEPItq68CvdcSonnlWvvUhOzqvZp4JOJDT/wJ9QSQMv5ZSCH/ZHxpMRet1hf/nr0nZrdIzbK9zigh6TmEfJAzZJQXwopLhUW2p2cZW4dc23MARimSMcxgGiYsQEf0yMeqQkM6fnXS4lBZtDpiGHWL/tjg7fS2Vl34JuJWW8AF99KmLNS+1lOwKt36c1qNrw0SZq1aQr49DTtrvZCRhmnuttQnK94X68aOOEX89yOF/JPy1cSsd8Zfqu11httVazHNZqqFkPVKA7NbpGXZVmtAFv1xLN51QQPFCFlVyJqxMc6ilrBt1168H3KusJCyHTpjAo83hWw/n9NCHoCYMAZU4CFhbqnZo85wb3WGC1SrIFqVUb0LuC/2iawh66gjxBAyFvNeSQh0Z6nOxS+jhFlcfxR3fvQUcdJJIf/EPJQycH9MbhDzefGP+hfNF/ugZRDzas9ezeRmPhei2lVuZzlTboSMk5eK0tKvF6pYhQwtDROlCVk2SJpVY0IuHGS9CbhCJMrYJwOvJ2TEVEVVGRb6WkJuhwjVLSGX/T1XZU/DLtS2sMeWlqurCxjVtUY67kn4KGFzobjbUp3mT1a81xLO4u85u9vs4n91s1h3T8QAXuqJgZTxz0wK+S/AnxVzH5czrzT/1ajKR6mZfjGT2yjnLuRVtRCTmWSY3SjZLmgZ1AR8lDQBWdV+HCeLGHtMjgcNVR2veTr3x9vP49QjF44y7tVFlWofgaMK+7RFE3SXLyiwbjVGQY06YzF30oXVJ5ZNyAcJ01x29UdpWCxy+83dirbxtRTx35oU8l+IV8UMHKsMAOO4nNWFY50xpmbKeSNniVQTtKpdJTNMm6AXuREz9wQtA8QuaQAk3KCJhLj2lLz1xz0VAximLerNlun+fR+FVLhPV2Drk2ufRVYczUyfuqi5SrDolZt8AUorvQtXWDTTtteO1S+ki03AvLpInSUsmsY0PNYSm4j7+BqAh9UEkCL+C5NC/gvySWIG8Fpq7l0z5TzLGf9w9loDemJPz5TYBR2ClVFu0MoVOQAAA8hJREFUC0RiCpkDjCQdsl0xceiQh4Tcvh9NrT/ev7/19BmehrpiS8pcNzH3hBwCjscJa0iaEBZzhZAlrD6DUhMwSO0CpnoKBp/V6wj8bjpLWDT1bvjVNAwgRfz3JYX8F+ZGzMD9xT/gts4AMC4CUivHSuMsZ+IfpJz8pdpHOY+CFqlqzxApcJD0lohD1HOk4n3CAoCIOb6P/TCh12aQO20WuSflhdsCX5duSHrRHIfKSVtNEfIVoSdQYnEh/tPUBfyOJv0R4hV+11nCYyUhTjos0gF4WEsADxfrgBTxX5kU8t+AF8UMfFJqHuU81hr/p0pDk7OcZ0Gzi1aXlo5FwEmJXdTE3Bf0OKTg/fnwfSyvSHk+3DLdJTxWF5uAJSzaxUsBFu+T6hWEQJ0FLJqcxR2mf7JorCNGCX+JNBzfRor4r04K+W/GZ6VmAG+Vc0/PXdDcZOzsFQcljpKOv9jTLu1Ntr59/XkQ8KNjN2++1+EYzqctLYdwgZByly34vH19ky+pXkGEhBmybQLuKfjNEgaQaTh5iRTy35RPSs0A7iZnAG8RNAA8knRP0gDQZQ0AXdj9rzOK+5O+0UG02/fehLu9/3t/viffe/KNf+YNAgZwNwkDtxIGUsTJRgo5+fNyBtDTMwCcBQ0Ao6QBYEzSANBFDeyLdvvrfwxi9k/6zHaRAoDwu8b3tKXmEC8AjMk3vrbLN16fBAxgS8EAUsLJnyGFnBx4s5yB1wUNbAkaALqkAaAn6XjexDvIeny/S7tjeJuUu2Q7/9wku6fdePzv4f2efPtzL7MA4CYBAy8LGEgJJ59ECjl5yF05A58maAD3JA1EkgZC1ECkaCBk3f/I/l68/2npePs+hpTck268v0sXAA7iBXBXvgD+jICBlHDymBRy8mY+W9DAY0kDu6iBG1l3urQ/ly7bzo10gV28wGP5Aing5KuRQk4+mzcJGjhKGrgvamCXNXAUdmcU96cwirbzNIi4Sxd4LF7gKF8gBZx8cVLIyRfloaSB10UNHGXdGaX9Zxhl2zlLF3izeIGUb/JlSSEn34QXRQ3cyvrMPXl/CmfJnnlBukCKN/k2pJCTH4pXxf2FSdEmSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkX4f/B03HmjGaFGUhAAAAAElFTkSuQmCC"></image></g><g style="display: block;" transform="matrix(1,0,0,1,62.52400207519531,146.6070098876953)" opacity="0.29205815135224344"><g opacity="1" transform="matrix(1,0,0,1,160.57400512695312,48.57400131225586)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(254,255,236)" stroke-opacity="0.8" stroke-width="3" d=" M0,-15.574000358581543 C8.595291137695312,-15.574000358581543 15.574000358581543,-8.595291137695312 15.574000358581543,0 C15.574000358581543,8.595291137695312 8.595291137695312,15.574000358581543 0,15.574000358581543 C-8.595291137695312,15.574000358581543 -15.574000358581543,8.595291137695312 -15.574000358581543,0 C-15.574000358581543,-8.595291137695312 -8.595291137695312,-15.574000358581543 0,-15.574000358581543z"></path></g></g><g transform="matrix(1,0,0,1,62.10200500488281,147.1850128173828)" opacity="0.22715633994063375" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,160.99600219726562,47.99599838256836)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(254,255,236)" stroke-opacity="0.8" stroke-width="3" d=" M0,-33.49599838256836 C18.486440658569336,-33.49599838256836 33.49599838256836,-18.486440658569336 33.49599838256836,0 C33.49599838256836,18.486440658569336 18.486440658569336,33.49599838256836 0,33.49599838256836 C-18.486440658569336,33.49599838256836 -33.49599838256836,18.486440658569336 -33.49599838256836,0 C-33.49599838256836,-18.486440658569336 -18.486440658569336,-33.49599838256836 0,-33.49599838256836z"></path></g></g><g style="display: block;" transform="matrix(1,0,0,1,67.375,145.7080078125)" opacity="0.16225452852902414"><g opacity="1" transform="matrix(1,0,0,1,155.72300720214844,49.472999572753906)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(254,255,236)" stroke-opacity="0.8" stroke-width="3" d=" M0,-52.722999572753906 C29.097824096679688,-52.722999572753906 52.722999572753906,-29.097824096679688 52.722999572753906,0 C52.722999572753906,29.097824096679688 29.097824096679688,52.722999572753906 0,52.722999572753906 C-29.097824096679688,52.722999572753906 -52.722999572753906,29.097824096679688 -52.722999572753906,0 C-52.722999572753906,-29.097824096679688 -29.097824096679688,-52.722999572753906 0,-52.722999572753906z"></path></g></g><g class="png" transform="matrix(1,0,0,1,201.58200073242188,184.49822998046875)" opacity="1" style="display: block;"><image width="144px" height="158px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g></g></svg>
          </div>

          <div class="bar">
            <div class="length" style="width: 100%;"></div>
            <div class="num">1/5</div>
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
    ></pay-layer>

    <!-- 百分百可提现 -->
    <layer v-model="addedBonusModalLayer" styles="background-color:transparent;width:100%;
    max-width:100%;"
           className="addedBonusModal"
    >
      <div class="content">
        <img class="close" src="//img.ibestfanli.com/sign_static_quick3/addedBonusModalClose.png" @click="addedBonusModalLayer=false">
        <div id="btn" class="btn">
        </div>
      </div>
    </layer>

    <!-- 提现成功弹框 -->
    <layer v-model="tixianSuccessLayer" styles="background-color:transparent;width:100%;
    max-width:100%;"
           className="tixianSuccessModal"
    >
      <div class="tixianSuccessBox" v-if="true">
        <div class="msgText">提现成功！</div>
        <div class="flex column-center tixianBody">
          <div></div>
          <div>
            <span class="price">0.30</span>
            <span class="unit">元</span>
          </div>
        </div>

        <div class="FingerMain">
          <div class="FingerTip">
            <img src="//img.ibestfanli.com/sign_static_quick3/balance_tip.png" class="tipIcon">
          </div>
          <div class="FingerButton">
            <div class="button3">继续领取</div>
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
          <div class="button3">我知道了</div>
        </div>
      </div>
    </layer>

    <pay-type-layer ref="payTypeModal"></pay-type-layer>
    <qian-dao-layer ref="qianDaoModal" @viewVideoAndQiandao="viewVideoAndQiandao"></qian-dao-layer>
    <video-step-layer ref="videoStepLayer"></video-step-layer>
    <piao-fu-jin-bi-layer ref="piaoFuJinBiLayer"></piao-fu-jin-bi-layer>
    <!-- 看视频加载loading -->
    <loading-video-layer ref="loadingVideoLayer" @playVideoFn="playVideoOrInsertAdFn"></loading-video-layer>
    <!-- 第二天签到提示 -->
    <tip-qian-dao-layer ref="tipQianDaoLayer"></tip-qian-dao-layer>
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
      personImg:require('../assets/images/renwuzoudong/renwu_walk00.png'),
      // 提现弹框数据
      tixianData: {
        checkIndex:0, // 当前价格选中的索引
        price:0, // 当前余额
        priceList: []
      },
      test:{

      }
    }
  },
  components: {
    PayLayer,
    TextScroll,
    payTypeLayer,
    qianDaoLayer,
    videoStepLayer,
    piaoFuJinBiLayer,
    loadingVideoLayer,
    tipQianDaoLayer
  },
  created() {
    //App调用此页面的方法
    // 关闭广告
    window.onAdDismiss = this.onAdDismiss
    window.onRewardVerify = this.onRewardVerify

    // 获取当前登录的用户信息
    this.getLoginUserInfo()
  },
  mounted() {
    this.quanPingGGInit()
    this.personRun()
    // 获取新人红包信息
    this.getNewUserInfo()
  },
  destroyed () {
    clearInterval(this.ggRoll.interval)
    clearInterval(this.persionTimer)
  },
  methods: {
    // 获取当前登录的用户信息
    async getLoginUserInfo() {
      try{
      let resData = await commonApi.getLoginUserInfo()

      }catch (e) {

      }
    },
    // 获取新人基本数据
    async getNewUserInfo() {
      try{

      let resData = await homeApi.getNewUserInfo()
      this.xinrenConfig.newUserInfoData = resData.data
      this.xinrenConfig.xinrenPrice = resData.data.reward
      this.tixianData.priceList = resData.data.list
      resData.data.list.forEach((item,index) => {
        if(item.checked) {
          this.tixianData.checkIndex = index
        }
      })

      this.ecpm = resData.data.state
      if(resData.data.new_user_state) {
        // 说明是个新用户,弹出新人红包
        this.showNewUserLayer()
      }

      }catch (e) {

      }
    },

    // 点击微信提现按钮
    vxTixianFn() {
      // 加载播放视频loading
      this.$refs['loadingVideoLayer'].showModalFn()
    },

    // 点击签到奖励
    viewVideoAndQiandao() {
      // 加载播放视频loading
      this.$refs['loadingVideoLayer'].showModalFn()
      // 看完视频后，重新查看奖励
      this.$refs['qianDaoModal'].getNewQiaoDaoJianli()
    },

    // 播放视频或显示信息流方法
    playVideoOrInsertAdFn() {
      this.utils.webDataToApp('loadAd',this.appParms)
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
      this.utils.webDataToApp('setAtNativeAdViewGONE',{})
      // 跳转到看视频,看完视频后金额翻倍
      // 加载播放视频loading
      this.appParms = {
        mPlacementId:'p638ee3b03599f',
        adType:1
      }
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

      // 显示信息流
      this.appParms = {
        mPlacementId:'p638ee19b87519',
        adType:2,
        returnScale:3
      }
      this.playVideoOrInsertAdFn()

      this.timerNum = setInterval(()=>{
        this.xinrenConfig.timeNum --
        if(this.xinrenConfig.timeNum<=0) {
          this.xinrenConfig.timeNum = 0
          this.showXinrenHongbaoLayer = false
          this.showWchatLayer = true
          this.utils.webDataToApp('setAtNativeAdViewGONE',{})
          clearInterval(this.timerNum)
          clearTimeout(this.xinrenTimer)

          // 显示信息流
          this.appParms = {
            mPlacementId:'p638ee1a5b89e8',
            adType:2,
            returnScale:3
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
    personRun() {
      this.persionImgArr = []
      for(let i=0;i<30;i++) {
        let imgNum = i<10?'0'+i:i
        this.persionImgArr.push(require('../assets/images/renwuzoudong/renwu_walk'+imgNum +'.png'))
      }
      let num = 0
      this.persionTimer = setInterval(()=>{
        num = num+1
        if(num>=30) {
          num = 0
        }
        this.personImg = this.persionImgArr[num]
      }, 35)
    },
    // 显示提现弹框
    showTixianPayler() {
      this.$refs['payLayer'].isShowPayLayer=true
    },
    // 选择价格
    selectPriceFn(index) {
      this.tixianData.checkIndex = index
      this.tixianData.priceList.forEach((item,num)=> {
        item.checked = false
        if(num === index) {
          item.checked = true
        }
      })
    },
    // 显示百分百可提现弹框
    showAddedBonuseModal() {
      if(!this.xinrenConfig.isNewFlag) {
        this.addedBonusModalLayer = true
      }
    },
    // 提现方法
    tixianFn(flag) {
      if(flag === 'close') {
        this.utils.webDataToApp('setAtNativeAdViewGONE',{})

        // 说明点击了直接关闭微信弹框
        // this.newUserDoubleHongbao()
        if(this.xinrenConfig.clickNum === 1) {
          // 显示提现弹窗
          this.xinrenConfig.clickNum +=1
          this.showTixianPayler()
        } else {
          // 关闭弹框
          this.showWchatLayer = false
        }
      }
    },
    // 格式化金额
    priceFormatter: function (num) {
      return num.toFixed(2)
    },

    // 显示签到框
    showQiandaoHander() {
      this.$refs['qianDaoModal'].showModalFn()
    },

    // #Region 以下是app的回调相关方法
    // 关闭广告
    onAdDismiss(params) {
      console.log('调用了关闭广告：'+params)
    },
    // 奖励激励
    onRewardVerify(params) {
      console.log('调用了奖励激励：'+params)


      // 看过翻倍红包的激励视频,则翻倍红包
      this.xinrenConfig.isViewVideo = true
      this.newUserDoubleHongbao()
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
      height: 780px;
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
          .task-item3 {
            top:4.7rem;
            left:8.78rem;
            -webkit-animation-delay:1.5s;
            animation-delay:1.5s;
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
        height: 100px;
        line-height: 95px;
        text-align: center;
        font-size: 32px;
        font-weight: 600;
        color: #fff;
        margin-right: 10px;
        &.btn1{
          width: 220px;
        }
        &.btn2 {
          background-size: 100% 100%;
          width: 220px;
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
    border:1px solid #fff;
  }
  .addedBonusModal .content {
    width:100%;
    height:80vh;
    margin:0 auto;
    position:relative;
    background:url(//img.ibestfanli.com/sign_static_quick3/addedBonusModalBg.png?v=1)  no-repeat;
    background-size:contain;
  }
  .addedBonusModal .content>.close {
    z-index:10;
    position:absolute;
    top:280px;
    right:100px;
    width:70px;
    height:70px;
  }

  /* 提现成功弹框 */
  .tixianSuccessModal {
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
</style>

