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
        console.log('~~~this.phonePlatform~~~',this.phonePlatform)
        if (this.phonePlatform() === 'iOS') {
            params.functionName = func
            window.webkit.messageHandlers.appObserver.postMessage(params)
        } else {
            window.Android[func](JSON.stringify(params))
        }
    },
}