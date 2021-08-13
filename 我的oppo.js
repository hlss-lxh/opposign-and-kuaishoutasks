var sign = function usercenterSign() {
    toast("打开我的 OPPO");
    auto.waitFor();
    if (app.launchPackage("com.oppo.usercenter")) {
        sleep(4000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        if (text("签到").exists()) {
            click("签到");
            log("我的oppo签到成功");
        }
        else{
            log("我的oppo已经签过到啦")
        }
    } 
    else {
        toast("软件不存在，进行下一个");
    }
    toast("开始极速视频，等待3秒钟");
    sleep(3000);
}
module.exports = sign;