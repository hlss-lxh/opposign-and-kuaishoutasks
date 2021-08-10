//刷oppo系统视频
var video = {};

video.yoli = function video(){
    toast("打开视屏");
    if (app.launchPackage("com.heytap.yoli")) {
        sleep(4000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOne();
        sleep(1000);
        if (me.visibleToUser()) {
            sleep(1000);
            log(click(me.bounds().centerX(), me.bounds().centerY()));
            sleep(1000);
            var gkls = text("观看历史");
            if (gkls.exists()) {
                log("观看历史");
                click(gkls.findOne().bounds().centerX(), gkls.findOne().bounds().centerY());
            }
        }
        sleep(2000);
        click(510,532,1032,769);
        sleep(2350000);
        alert("已完成刷视频任务");
    } else {
        alert("失败了，再来一次？");
    }
}

module.exports = video;
