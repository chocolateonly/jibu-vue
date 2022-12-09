<template>
  <header class="header">
      <section class="navtop">
        <div class="l-box">
          <div class="logo"><img src="../../assets/images/logo_icon1.b193632.png"/></div>
          |
          <div class="curNav">{{ navList[active].name }}</div>
          <a class="a-btn" v-if="jdshow" href="https://z.jd.com/project/details/117979.html">京东众筹</a>
        </div>
        <div class="r-box">
          <!-- <i class="fa fa-navicon fa-lg" @click="showNavFun"></i> -->
          <img src="../../assets/images/icon_gongneng.png" @click="showNavFun"/>
        </div>
      </section>
      <section class="navlist" :class="[{'on':navShow}]">
        <ul>
          <router-link :to="item.url" tag="li" v-for="(item,index) in navList" :key="index">{{ item.name }}</router-link>
        </ul>
      </section>

  </header>
</template>
<script>
export default {
  props: {
    active:{
      type:Number,
      default:0
    },
    jdshow: {
      type:Boolean,
      default: false
    }
  },
  data(){
    return {
      navShow:false,
      navList:[
        {
          url:'/',
          name:'首页'
        },
        {
          url:'/product',
          name:'APP'
        },
        {
          url:'/equip',
          name:'智能产品'
        },
        {
          url:'/run',
          name:'活动赛事'
        },
        {
          url:'/about',
          name:'关于我们'
        }
      ]
    }
  },
  beforeCreate(){
    if(!(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)))
    {
      window.location.href = 'http://www.runstep.com/'
    }
  },
  methods: {
    showNavFun(){
      this.navShow = !this.navShow;
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  position:absolute;
  width:100%;
  height: 88px;
  z-index: 10;
  .navtop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    box-sizing: border-box;
    padding: 0 40px;
    .l-box {
      display: flex;
      align-items: center;
      color: #fff;
      font-size: 26px;
      .logo {
        width: 117px;
        height: 30px;
        margin-right: 20px;
        img {
          max-width: 100%;
        }
      }
      .curNav {
        margin-left: 20px;
      }
    }
    .r-box {
      color: #fff;
      img {
        width:32px;
      }
    }

    .a-btn {
      margin-left: 20px;
      padding: 0 15px;
      height: 40px;
      background: #F6B124;
      text-align: center;
      border-radius: 20px;
      line-height: 43px;
      font-size: 24px;
      letter-spacing: 1px;
      display: block;
      text-decoration: none;
      color: #000;
    }
  }
  .navlist {
    background: #fff;
    transition: all .5s;
    opacity: 0;
    height: 0;
    ul {
      padding: 10px;
    }
    &.on {
      opacity: 1;
      min-height: 450px;
      overflow: hidden;
    }
    li {
      margin: 43px 0;
      a {
        color: #757576;
        text-decoration: none;
      }
    }
  }
  
}
</style>

