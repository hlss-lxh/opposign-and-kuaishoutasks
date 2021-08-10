"ui";
ui.layout(
    <vertical >
        <text marginTop="200" layout_gravity="center">功能依赖于无障碍，使用前请先点击“打开无障碍”，打开无障碍后返回软件，点击开始执行，开始签到！软件是用autojs打包的，可能部分手机管家会报毒！</text>
        <button id="on" layout_gravity="center" text="打开无障碍" />
        <button id="start" layout_gravity="center" text="开始签到" />
        <button id="systemvideo" layout_gravity="center" text="刷系统视频" />
        <button id="videoad" layout_gravity="center" text="看视频广告"/>
        <button id="ksvideo" layout_gravity="center" text="看快手视频"/>
        <button id="ksad" layout_gravity="center" text="快手广告任务" />
        <button id="kszb" layout_gravity="center" text="快手直播任务"/>
    </vertical>

);

ui.systemvideo.click(function() {
    threads.start(function(){
        var video = require('video.js');
        video.yoli();
    });
});

ui.videoad.click(function(){
    threads.start(function(){
        var watchad = require('watchvideoad.js');
        watchad.video();
    });
});

ui.ksvideo.click(function(){
    threads.start(function(){
        var ksvideo = require("ksvideo.js");
        ksvideo.video();
    });
});

ui.ksad.click(function(){
    threads.start(function(){
        var ksad = require("ksad.js");
        ksad.ad();
    });
});

ui.kszb.click(function(){
    threads.start(function(){
        var kszb = require("kszb.js");
        kszb.zb();
    });
});

ui.start.click(function() {
    threads.start(function() {
        main();
    });
});

ui.on.click(function() {
    auto.waitFor();
});


function main() {
    alert("开始执行任务了，请不要随意切换应用");
    sleep(1000);

    var sign = require('sign.js');

    sign.gamecenter();//游戏中心
    log("游戏中心已完成");

    sign.market();//软件商店
    log("软件商店已完成");

    sign.themestore();//主题商店
    log("主题商店已完成");

    sign.community();//oppo社区
    log("oppo社区已完成");

    sign.store();//欢太商城
    log("欢太商城已完成");

    sign.smarthome();//智能家居
    log("智能家居已完成");

    sign.music();//音乐
    log("音乐已完成");

    sign.yoli();//视频
    log("视频已完成");

    sign.soloop();//soloop即录
    log("soloop即录已完成");

    sign.wallet();//钱包
    log("钱包已完成");

    sign.usercenter();//我的oppo
    log("我的oppo已完成");

    sign.speedvideo();//极速视频
    log("极速视频已完成");

    sign.browser();//浏览器
    log("浏览器已完成");

    sign.nearmePlay();//小游戏
    log("小游戏已完成");

    sign.speechassist();//小布助手
    log("小布助手已完成");

    alert("签到任务已执行完成！");
}


//关闭升级和广告之类的
function closeupdate() {
    log("进入关闭广告");
    var cancel = textContains("取消");
    if (cancel.exists()) {
        toast("取消升级");
        click(cancel.findOne().bounds().centerX(), cancel.findOne().bounds().centerY());
        sleep(1000);
    }
    var cancel2 = text("稍后");
    if (cancel2.exists()) {
        toast("取消升级");
        click(cancel2.findOne().bounds().centerX(), cancel2.findOne().bounds().centerY());
        sleep(1000);
    }
    cancel2 = text("暂不更新");
    if (cancel2.exists()) {
        toast("取消升级");
        click(cancel2.findOne().bounds().centerX(), cancel2.findOne().bounds().centerY());
        sleep(1000);
    }
    cancel2 = text("跳过");
    if (cancel2.exists()) {
        toast("跳过启动页面广告");
        click(cancel2.findOne().bounds().centerX(), cancel2.findOne().bounds().centerY());
        sleep(1000);
    }
    cancel2 = text("不感兴趣");
    if (cancel2.exists()) {
        toast("不感兴趣");
        click(cancel2.findOne().bounds().centerX(), cancel2.findOne().bounds().centerY());
        sleep(1000);
    }
    cancel2 = text("退出");
    if (cancel2.exists()) {
        toast("退出");
        click(cancel2.findOne().bounds().centerX(), cancel2.findOne().bounds().centerY());
        sleep(1000);
    }
    var ad = id("dialog_clos_image");
    if (ad.exists()) {
        toast("关闭广告");
        click(ad.findOne().bounds().centerX(), ad.findOne().bounds().centerY());
        sleep(1000);
    }
    ad = id("close");
    if (ad.exists()) {
        toast("关闭广告");
        click(ad.findOne().bounds().centerX(), ad.findOne().bounds().centerY());
        sleep(1000);
    }
    ad = id("ad_float_cancel");
    if(ad.exists()){
        toast("关闭广告");
        click(ad.findOne().bounds().centerX(), ad.findOne().bounds().centerY());
        sleep(1000);
    }
    ad = id("tt_video_ad_close");
    if(ad.exists()){
        toast("关闭广告");
        click(ad.findOne().bounds().centerX(), ad.findOne().bounds().centerY());
        sleep(1000);
    }
    log("结束");
}