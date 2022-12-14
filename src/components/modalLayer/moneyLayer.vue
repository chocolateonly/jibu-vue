<template>
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
</template>

<script>
export default {
  name: "moneyLayer",
  data(){
    return {
      addedBonusModalLayer:false
    }
  },
  methods:{
    showModalFn() {
      this.addedBonusModalLayer = true

    },
    hideModalFn() {
      this.addedBonusModalLayer = false
    },
  }
}
</script>

<style lang="scss" scoped>
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
  top:280px;
  right:100px;
  width:70px;
  height:70px;
}

</style>