var sign = function smarthomeSign() {
    toast("打开智能家居");
    auto.waitFor();
    if (app.launchPackage("com.heytap.smarthome")) {
        sleep(4000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOne().bounds();
        sleep(1000);
        log(click(me.centerX(), me.centerY()));
        text("赚积分").waitFor();
        if (text("赚积分").exists()) {
            click("赚积分");
            sleep(2000);
            log("智能家居已完成");
        }
        else{
            log("智能家居已经签过到啦");
        }
    } 
    else {
        toast("软件不存在，进行下一个");
    }
    toast("开始音乐，等待3秒钟");
    sleep(3000);
}
module.exports = sign;