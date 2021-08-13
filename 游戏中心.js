var sign = function gamecenterSign() {
    log("打开游戏中心");
    auto.waitFor();
    if (app.launchPackage("com.nearme.gamecenter")) {
        sleep(4000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        closeupdate();
        sleep(1000);
        var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOnce();//findonce
        sleep(1000);
        log(click(me.bounds().centerX(), me.bounds().centerY()));
        sleep(1000);
        var qd = text("签到");
        if (qd.exists()) {
            log("签到");
            click(qd.findOnce().bounds().centerX(), qd.findOnce().bounds().centerY());//findonce
        }
        else{
            log("游戏中心已经签过到啦");
        }
    }
    else {
        toast("软件不存在，进行下一个");
    }
    log("开始软件商店，等待3秒钟");
    sleep(3000);
}
module.exports = sign;