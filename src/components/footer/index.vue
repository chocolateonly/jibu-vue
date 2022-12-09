<template>
  <footer class="footerbox">
      <ul class="footerNav">
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/product">APP</router-link></li>
        <li><router-link to="/equip">智能产品</router-link></li>
        <li><router-link to="/run">活动赛事</router-link></li>
        <li><router-link to="/about">关于我们</router-link></li>
      </ul>
      <div class="codeimg">
        <div class="codediv">
          <img src="../../assets/images/pic_xiazaierweima@3x.png"/>
          <p class="codetit">扫码下载APP</p>
        </div>
        <div class="codediv">
          <img src="../../assets/images/pic_guanzhu_erweima.jpg"/>
          <p class="codetit">扫码关注公众号</p>
        </div>
      </div>
      <dl class="footertext">
        <dd>电话：<a href="tel:0755-86532478">0755-86532478</a>(咨询时间9:30 - 11:30,14:00 - 18:00)</dd>
        <dd>Email：brand@odun.com&nbsp;&nbsp;&nbsp;&nbsp;微博：@Runstep</dd>
        <dd>联系地址：深圳市宝安区华丰智谷&nbsp;A2座525</dd>
        <dd>Copyright (c) 2004-2019 Odun enterprise website GuangDong ICP No. 14001512-2 All Rights Reserved</dd>
      </dl>
    </footer>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.footerbox {
    box-sizing: border-box;
    padding: 70px 60px;
    .footerNav {
      display: flex;
      justify-content: space-between;
      a {
        text-decoration: none;
        color:#6E6E6E;
        font-size: 24px;
      }
    }
    .codeimg {
      display: flex;
      margin-top: 30px;
      justify-content: center;
      .codediv {
        .codetit {
          font-size: 22px;
        }
        &:nth-of-type(1)
        {
          margin-right: 60px;
          box-sizing: border-box;
          padding: 3px;
        }
        img {
          width:150px;
          height: 150px;
        }
      }
    }
    .footertext {
      margin-top: 50px;
      color:#6E6E6E;
      dd {
        margin-bottom: 20px;
        font-size: 22px;
        text-align: center;
        line-height: 45px;
        a {
          color:#6E6E6E;
          text-decoration: none;
        }
      }
    }
  }
</style>

