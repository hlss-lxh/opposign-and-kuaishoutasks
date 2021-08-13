var sign = function yoliSign() {
    toast("打开视屏");
    auto.waitFor();
    if (app.launchPackage("com.heytap.yoli")) {
        sleep(4000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOnce();//findonce
        sleep(1000);
        if (me.visibleToUser()) {
            sleep(1000);
            log(click(me.bounds().centerX(), me.bounds().centerY()));
            var qd = text("签到");
            sleep(3000);
            if (qd.exists()) {
                log("签到");
                click(qd.findOnce().bounds().centerX(), qd.findOnce().bounds().centerY());//findonce
                log("视频签到成功");
                // sleep(1000);
                // text("去签到").findOne().click();
            }
            else{
                log("视频已经签过到啦");
            }
        }
    } 
    else {
        toast("软件不存在，进行下一个");;
    }
    toast("开始soloop即录，等待3秒钟");
    sleep(3000);
}
module.exports = sign;