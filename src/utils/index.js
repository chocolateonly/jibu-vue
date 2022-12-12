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
    },
    // 将web数据出给app
    webDataToApp (func, params = {}) {
        console.log('调用android方法：',func,JSON.stringify(params),window)
        try {
            if (this.phonePlatform() === 'iOS') {
                params.functionName = func
                window.webkit.messageHandlers.appObserver.postMessage(params)
            } else {
                switch (func) {
                    //获取基础信息
                    case 'getBaseJson':window.Android.getBaseJson(params)
                        break;

                    default:window.Android[func](JSON.stringify(params))

                }
            }
        }catch (e){
            console.log('报错-调用android方法：',JSON.stringify(e))
        }


    },
}