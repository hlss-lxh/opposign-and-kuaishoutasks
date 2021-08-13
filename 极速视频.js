var sign = function speedvideo() {
    toast("打开极速视频");
    auto.waitFor();
    if (app.launchPackage("com.heytap.ugcvideo.praise")) {
        sleep(3000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOnce().bounds();
        sleep(1000);
        log(click(me.centerX(), me.centerY()));
        sleep(1000);
        var qd = id("tv_credit_sign");
        if (qd.exists()) {
            log("点击签到");
            click(qd.findOnce().bounds().centerX(), qd.findOnce().bounds().centerY());
            sleep(2000);
            if(text("去签到").exists){
                log("点击去签到");
                click("去签到");
                log("极速视频签到成功");
            }
            else{
                log("极速视频签过到啦");
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