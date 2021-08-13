var sign = function storeSign() {
    toast("打开欢太商城");
    auto.waitFor();
    if (app.launchPackage("com.oppo.store")) {
        sleep(4000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        // var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOnce();//finonce
        sleep(1000);
        while(!click("我的"));
        sleep(1000);
        if (text("签到").exists()) {
            click("签到");
            sleep(2000);
            click("立即签到");
            log("欢太商城已完成");
        }
        else{
            log("欢太商城已经签过到啦");
        }
    } 
    else {
        toast("软件不存在，进行下一个");
    }
    toast("开始智能家居，等待3秒钟");
    sleep(3000);
}
module.exports = sign;