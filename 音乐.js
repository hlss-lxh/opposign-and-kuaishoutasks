var sign = function musicSign() {
    toast("打开音乐");
    auto.waitFor();
    if (app.launchPackage("com.heytap.music")) {
        sleep(4000);
        closeupdate();
        text("我的").waitFor();
        log(click("我的"));
        sleep(1000);
        if (text("签到").exists()) {
            click("签到");
            log("音乐签到成功")
        }
        else{
            log("音乐已经签过到啦")
        }
    } 
    else {
        toast("软件不存在，进行下一个");
    }
    toast("开始视频，等待3秒钟");
    sleep(3000);
}
module.exports = sign;