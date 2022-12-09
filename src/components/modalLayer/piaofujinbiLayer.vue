<template>
    <layer  v-model="isShowModal" 
        styles="background-color:transparent;width:100%;max-width:100%;"
        className="piaofujinbiModal"
    >
        <div class="modal-content ">
            <div class="piaofujinbiBox">
                <img class="closeIcon"  @click="hideModalFn" src="//img.ibestfanli.com/sign_static_quick3/failToDrawModal_closeIcon.png"/>
                <div class="contentbox">
                    <div class="messText">
                        <span>恭喜获得</span>
                        <span class="dou">49现金豆</span>
                    </div>
                    <div class="messtip">我的现金豆：</div>

                    <div class="button">再领200</div>
                </div>
            </div>
        </div>
    </layer>
</template>
<script>
export default {
    data() {
        return {
            isShowModal:false
        }
    },
    methods: {
        showModalFn() {
            this.isShowModal = true
        },
        hideModalFn() {
            this.isShowModal = false
        }
    }
}
</script>
<style lang="scss" scoped>
.piaofujinbiModal {
    &.modal-content {
    -webkit-animation: modal-scale-in .3s cubic-bezier(.5,0,.2,1.5) 1;
    animation: modal-scale-in .3s cubic-bezier(.5,0,.2,1.5) 1;
  }

  .piaofujinbiBox {
        position: relative;
        padding:0 50px;
        .closeIcon {
            position: absolute;
            height: 70px;
            width: 70px;
            top: 10px;
            right: 50px;
        }

        .contentbox {
            background:#444444;
            padding:20px 30px;
            border-radius: 20px;
            .messText {
                color: #fff;
                font-size:32px;
                .dou {
                    color:yellow;
                    margin-left:10px;
                }
            }
            .messtip {
                margin-top:30px;
                color:rgba(255,255,255,.7);
                font-size:24px;
            }
            .button {
                background:url(//img.ibestfanli.com/sign_static_quick/withdrawType_button.png) no-repeat;
                background-size:100% 100%
            }

            .button {
                font-size:30px;
                font-weight:500;
                color:#fff;
                margin:20px auto 0;
                line-height:120px;
                width:400px;
                height:120px;
                text-align:center;
            }
        }
    }

}

</style>
<style lang="scss">
.piaofujinbiModal {
  .layui-m-layercont {
    padding:0;
  }
}
</style>