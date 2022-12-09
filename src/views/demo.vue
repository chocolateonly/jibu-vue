<template>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <h2>Essential Links</h2>
      <span @click="toastDemo"> 123</span>
      <h4>手机摇一摇的功能</h4>
      <div>
        <audio src="//img.ibestfanli.com/ecpm_battery/envelopeComing2.mp3"  ref="shakeAudio">
          您的浏览器不支持 audio 标签。
        </audio>
      </div>
    </div>
  </template>
  
  <script>
  // var Shake = require('shake.js'); // commonjs 的方式引入
  import Shake from 'shake.js'; // es6的方式导入
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created () {
    },
    mounted () {
      let myShakeEvent = new Shake({
          threshold: 12, // optional shake strength threshold
          timeout: 500 // optional, determines the frequency of event generation
      });
      myShakeEvent.start();
      window.addEventListener('shake', this.shakeEventDidOccur, false);
    },
    methods: {
      toastDemo () {
        // toastPlugin('你好，npm package')
      },
      shakeEventDidOccur () {
        alert("it's shake!")
        // myShakeEvent.stop();
        let audio = this.$refs.shakeAudio;
        if (window.navigator.vibrate) {
          navigator.vibrate(500);
        }
        audio.play()
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>