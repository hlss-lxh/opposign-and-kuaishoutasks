var sign = function communitySign() {
    log("打开OPPO 社区");
    auto.waitFor();
    if (app.launchPackage("com.oppo.community")) {
        sleep(4000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOnce().bounds();//findonce
        sleep(1000);
        while(!click(me.centerX(), me.centerY()));
        log("true");
        sleep(1000);
        var qd = text("签到");
        if (qd.exists()) {
            log("签到");
            click(qd.findOnce().bounds().centerX(), qd.findOnce().bounds().centerY());//findonce
            sleep(1000);
            click(qd.findOnce().bounds().centerX(), qd.findOnce().bounds().centerY());//findonce
            log("oppo社区已完成");
        }
        else{
            log("oppo社区已经签过到啦");
        }
        }
    else {
        toast("软件不存在，进行下一个");
    }
    toast("开始欢太商城，等待3秒钟");
    sleep(3000);
}
module.exports = sign;