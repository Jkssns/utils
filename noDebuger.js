(function noDebuger() {
    function testDebuger() {
        var d = new Date();
        debugger;
        if (new Date() - d > 10) {
            document.body.innerHTML = '<div style="width: 100%;height: 50px;font-size: 30px;text-align: center;font-weight: bold;">开发者人员工具已被禁用，<a href="/" target="_self" style="color:#4285f4;">点击返回</a>~</div>';
            return true;
        }
        return false;
    }
    function start() {
        while (testDebuger()) {
            testDebuger();
        }
    }
    if (!testDebuger()) {
        window.onblur = function () {
            setTimeout(function () {
                start();
            }, 500);
        };
    } else {
        start();
    }
})();

(function () {
    if (location.hostname != 'bing.ioliu.cn') location.href = 'https://bing.ioliu.cn' + location.pathname;
})();
