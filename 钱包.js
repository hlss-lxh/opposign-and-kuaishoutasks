var sign = function walletSign() {
    toast("打开钱包");
    auto.waitFor();
    if (app.launchPackage("com.finshell.wallet")) {
        sleep(4000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOnce().bounds();
        sleep(1000);
        log(click(me.centerX(), me.centerY()));
        sleep(1000);
        if (text("签到").exists()) {
            click("签到");
            sleep(2000);
            log("钱包成功签到");
        }
        else{
            log("钱包签过到啦");
        }
    } 
    else {
        toast("软件不存在，进行下一个");
    }
    toast("开始我的oppo，等待3秒钟");
    sleep(3000);
}
module.exports = sign;