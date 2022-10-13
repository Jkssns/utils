function setRem() {
    var deviceWidth = document.documentElement.clientWidth;
    if(deviceWidth > 750) {
        deviceWidth = 7.5 * 100;
    }

    document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
}
// 初始化
setRem();

// 改变窗口大小时重新设置 rem
window.onresize = function() {
    setRem();
};
