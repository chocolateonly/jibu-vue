export default {
    phonePlatform () {
        let u = navigator.userAgent
        let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // android终端
        let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
        if (isAndroid) {
          return 'Android'
        }
        if (isiOS) {
          return 'iOS'
        }
        return ''
    },
    // 将web数据出给app
    webDataToApp (func, params = {}) {
        console.log('调用Android方法：',func,window)
        if (this.phonePlatform() == ''){
            return;
        }
        try {
            if (this.phonePlatform() === 'iOS') {
                params.functionName = func
                window.webkit.messageHandlers.appObserver.postMessage(params)
            } else {
                if(Object.keys(params).length==0){
                    window.Android[func]()
                }else{
                    window.Android[func](JSON.stringify(params))
                }
            }
        }catch (e){
            console.log('报错-调用Android方法：',JSON.stringify(e))
        }
    },
    async onPag(url) {
        try {
            // 实例化 PAG
        const PAG = await window.libpag.PAGInit();
        // 获取 PAG 素材数据
        const buffer = await fetch(url).then((response) => response.arrayBuffer());
        // 加载 PAG 素材为 PAGFile 对象
        const pagFile = await PAG.PAGFile.load(buffer);
        // 将画布尺寸设置为 PAGFile的尺寸
        const canvas = document.getElementById('pag');
        canvas.width = pagFile.width();
        canvas.height = pagFile.height();
        // 实例化 PAGView 对象
        const pagView = await PAG.PAGView.init(pagFile, canvas);

        // 播放 PAGView
        document.getElementById('pag').style['display'] = 'block'
        //持续播放循环
        pagView.setRepeatCount(0)
        await pagView.play();
        }catch (e) {
        }
    },
    hidePag(){
        document.getElementById('pag').style['display'] = 'none'
    }
}