var sign = function nearmePlaySign() {
    toast("打开小游戏");
    if (app.launchPackage("com.nearme.play")) {
        sleep(4000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        var me = text("福利").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOnce();
        sleep(1000);
        log(me.visibleToUser())
        if (me.visibleToUser()) {
            sleep(1000);
            log(click(me.bounds().centerX(), me.bounds().centerY()));
            sleep(1000);
            var qd = text("签到");
            if (qd.exists()) {
                log("签到");
                click(qd.findOnce().bounds().centerX(), qd.findOnce().bounds().centerY());
                log("小游戏签到成功");
            }
            else{
                log("小游戏已经签过到啦");
            }
        }
    } 
    else {
        toast("软件不存在，进行下一个");
    }
    toast("开始小布助手，等待3秒钟");
    sleep(3000);
}
module.exports = sign;