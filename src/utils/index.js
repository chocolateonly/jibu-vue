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
    webDataToApp (func, params,callback ) {
        console.log('调用Android方法：',func,this.phonePlatform())
        if (this.phonePlatform() == ''){
           // if(callback) callback()
            return;
        }
        try {
            if (this.phonePlatform() === 'iOS') {
                params.functionName = func
                window.webkit.messageHandlers.appObserver.postMessage(params)
            } else {
                if(typeof params=='number'){
                    window.Android[func](params)
                }else if(Object.keys(params).length==0){
                    window.Android[func]()
                }else{
                    window.Android[func](JSON.stringify(params))
                }
            }
        }catch (e){
            console.log('报错-调用Android方法：',JSON.stringify(e))
        }
    },
    async onPag(url,id) {
        try {
            // 实例化 PAG
        const PAG = await window.libpag.PAGInit();
        // 获取 PAG 素材数据
        const buffer = await fetch(url).then((response) => response.arrayBuffer());
        // 加载 PAG 素材为 PAGFile 对象
        const pagFile = await PAG.PAGFile.load(buffer);
        // 将画布尺寸设置为 PAGFile的尺寸
        const canvas = document.getElementById(id?id:'pag');
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
    hidePag(id){
       if(document.getElementById(id?id:'pag')) document.getElementById(id?id:'pag').style['display'] = 'none'
    },
    /**
     * 时间戳转日期格式
     * @param {Object} timeStamp
     */
    timeStampTurnTime(timeStamp) {
        if (timeStamp != undefined && timeStamp != "" && timeStamp > 0) {
            let date = new Date();
            date.setTime(timeStamp * 1000);
            let y = date.getFullYear();
            let m = date.getMonth() + 1;
            m = m < 10 ? ('0' + m) : m;
            let d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            let h = date.getHours();
            h = h < 10 ? ('0' + h) : h;
            let minute = date.getMinutes();
            let second = date.getSeconds();
            minute = minute < 10 ? ('0' + minute) : minute;
            second = second < 10 ? ('0' + second) : second;
            return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
        } else {
            return "";
        }
    },
}