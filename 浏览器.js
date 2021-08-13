var sign = function browserSign() {
    toast("打开浏览器");
    auto.waitFor();
    if (app.launchPackage("com.heytap.browser")) {
        sleep(3000);
        // closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOnce();
        sleep(1000);
        if (me.visibleToUser()) {
            sleep(1000);
            log(click(me.bounds().centerX(), me.bounds().centerY()));
            sleep(1000);
            var qd = text("签到");
            if (qd.exists()) {
                log("签到");
                click(qd.findOnce().bounds().centerX(), qd.findOnce().bounds().centerY());
                log("浏览器签到成功");
            }
            else{
                log("浏览器签过到啦");
            }
        }
    } 
    else {
        toast("软件不存在，进行下一个");
    }
    toast("开始小游戏，等待3秒钟");
    sleep(3000);
}
module.exports = sign;