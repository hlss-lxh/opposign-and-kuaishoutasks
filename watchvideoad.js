var watchad = {};

watchad.video = function watchvideoad(){
    toast("打开视屏");
    if (app.launchPackage("com.heytap.yoli")) {
        sleep(3000);
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
            var taskcenter = text("任务中心");
            if (taskcenter.exists()) {
                log("任务中心");
                click(taskcenter.findOne().bounds().centerX(), taskcenter.findOne().bounds().centerY());
                sleep(2000);
                closeupdate();
            }
        }
        sleep(2000);
            for(var i=0; i<3; i++){
                if(text("去完成").exists()){
                    log("点击看广告");
                    // click(858, 2103, 1026, 2175);
                    click("去完成",0);
                    id("tt_video_ad_close").waitFor();
                    closeupdate();
                    sleep(1000);
                    closeupdate();
                    toast("第"+i+"次");
                    sleep(2000);
                }
            }
        alert("已完成看广告任务");
    } else {
        alert("失败了，再来一次？");
    }
}

module.exports = watchad;