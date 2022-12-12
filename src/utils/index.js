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
}