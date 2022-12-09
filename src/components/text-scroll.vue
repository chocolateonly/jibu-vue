<template>
    <div class="notification-container">
        <transition name="slide" mode="out-in">
            <p class="notification-text" :key="text.id"><span>{{text.val}}</span></p>
        </transition>
    </div>
</template>
<script>

export default {
  name: 'TextScroll',
  props: {
    dataList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      count: 0, // 当前索引
      intervalId: null, // 定时器ID
      playTime: 2500, // 定时器执行间隔
    };
  },
  computed: {
    text() {
      return {
        id: this.count,
        val: this.dataList[this.count],
      };
    },
  },
  created() {
    this.intervalId = setInterval(() => { // 定义定时器
      this.getText();
    }, this.playTime);
  },
  methods: {
    getText() {
      const len = this.dataList.length; // 获取数组长度
      if (len === 0) {
        return; // 当数组为空时，直接返回
      }
      if (this.count === len - 1) { // 当前为最后一个时
        this.count = 0; // 从第一个开始
      } else {
        this.count++; // 自增
      }
    },
  },
  destroyed() {
    clearInterval(this.intervalId); // 清除定时器
  },
};
</script>

<style scoped>
.notification-container {
    position:static;
    margin-bottom:20px;
    padding:0;
    -webkit-transform:initial;
    transform:none;
    right:auto;
    overflow:hidden;
}
.notification-container .notification-text {
    background:transparent 0 no-repeat url(//img.ibestfanli.com/shakeEnvelopeActivity/broadcast.png?v=1629280360384);
    background-size:26px 30px;
    padding:0;
    font-size:29px;
    height:50px;
    max-width:600px;
    line-height:50px;
    background-position-x:12px;
    border-radius:11px;
    display:inline-block;
    margin:0 auto;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap
}
 .notification-container .notification-text span {
  margin-left:45px;
    color:#d4b693;
}

.slide-enter-active, .slide-leave-active {
    transition: all 1s;
}

.slide-enter{
    transform: translateY(50px);
}

.slide-leave-to {
    transform: translateY(-50px);
}
</style>