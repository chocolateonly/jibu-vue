<template>
    <div :style="'z-index:'+uuid" :id="'layui-m-layer' + uuid" class="layui-m-layer" :class="'layui-m-layer'+ type" :index="uuid" v-show="visible">
        <div @click="shadeCloseFn" v-show="shade" class="layui-m-layershade"></div>
        <div class="layui-m-layermain" :style="!fixed ? 'position:static;' : ''">
            <div class="layui-m-layersection">
                <div class="layui-m-layerchild" :class="layerClass" :style="styles">
                    <h3 v-if="aTitle" :style="aTitle[1]">{{ aTitle[0] }}</h3>
                    <template v-if="!!content">
                        <div v-if="type != 2" class="layui-m-layercont" v-html="content"></div>
                        <div v-else class="layui-m-layercont">
                            <i></i><i class="layui-m-layerload"></i><i></i>
                            <div v-html="content"></div>
                        </div>
                    </template>
                    <template v-else>
                        <div v-if="type != 2" class="layui-m-layercont"><slot></slot></div>
                        <div v-else class="layui-m-layercont">
                            <i></i><i class="layui-m-layerload"></i><i></i>
                            <div><slot></slot></div>
                        </div>
                    </template>
                    <div v-if="btns" class="layui-m-layerbtn">
                        <span @click.stop="handleClick($event)" v-if="btns[1]" no data-type="0">{{ btns[1] }}</span>
                        <span @click.stop="handleClick($event)" yes data-type="1">{{ btns[0] }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Layer',
        props: {
            uuid: {
                type: Number,
                default: +((Math.random().toString()).substr(-6))
            },
            value: {
                type: Boolean,
                default: false
//                default: true
            },
            title: {
                type: null,
                default: false
            },
            btn: {
                type: null,
                default: false
            },
            top: {
                type: Number,
                default: 100
            },
            time: Number,
            skin: String,
            className: String,
            styles: String,
            content: String,
            // 设置弹层的类型（0表示信息框，1表示页面层，2表示加载层）
            type: {
                type: Number,
                default: 0
            },
            // 控制遮罩展现
            shade: {
                type: Boolean,
                default: true
            },
            shadeClose: {
                type: Boolean,
                default: true
            },
            fixed: {
                type: Boolean,
                default: true
            },
            anim: {
                type: [String, Boolean],
                default: 'scale', //默认动画类型
                validator(val) {
                    return [
                        false,
                        'scale',
                        'up',
                    ].indexOf(val) !== -1
                }
            },
            // 层成功弹出层的回调
            success: Function,
            // 点确定按钮触发的回调函数
            yes: Function,
            // 点取消按钮触发的回调函数
            no: Function,
            // 层彻底销毁后的回调函数
            end: Function,

        },
        data() {
            return {
                visible: false
            }
        },
        created() {
            this.timeId = null

            if (this.value) {
                this.visible = true
            }
        },
        destroyed() {
            if (this.timeId) {
                clearTimeout(this.timeId)
            }
        },
        computed: {
//            visible() {
//                return this.value
//            },
            layerClass() {
                const that = this;
                const classList = [];

                // 设定弹层显示风格css类
                if (that.skin) {
                    classList.push('layui-m-layer-' + that.skin);
                }
                // 自定义一个css类
                if (that.className) {
                    classList.push(that.className)
                }
                // 动画css类
                if (that.anim) {
                    classList.push('layui-m-anim-' + that.anim)
                }

                return classList.join(' ')
            },
            aTitle() {
                const that = this
                let aTitle = that.title

                typeof aTitle === 'string' && (aTitle = [aTitle]);

                let len = (aTitle || []).length;

                if (len === 0 || !that.btn) {
                    return '';
                }

                return aTitle
            },
            btns() {
                let that = this;
                let btn = that.btn;

                typeof btn === 'string' && (btn = [btn]);
                let btns = (btn || []).length;

                if (btns === 0 || !that.btn) {
                    return '';
                }

                return (btn = btn.slice(0,2))
            }
        },
        methods: {
            // 点击遮罩层事件处理
            shadeCloseFn() {
                const that = this

                if (that.shade && that.shadeClose) {
                    this.$emit('close')
                }
            },
            // 按钮事件处理
            handleClick(ev) {
                const btnTyps = +ev.target.dataset['type']
                let eventName

                if (btnTyps === 1) {
                    eventName = 'sure'
                } else {
                    eventName = 'cancel'
                }

                this.$emit(eventName)
            }
        },
        watch: {
            visible(val) {
                const that = this

                if (val && that.time >= 0) {
                    clearTimeout(that.timeId)

                    that.$emit('input', true)
                    that.$emit('show')

                    that.timeId = setTimeout(() => {

                        that.$emit('input', false)
                        that.$emit('close')

                    }, that.time * 1000)
                }

            },
            value(val) {
                this.visible = val
            }

        }
    }
</script>

<style scoped>
    @import "layer.css";
    .layui-m-layer {
        z-index:888
    }
</style>
