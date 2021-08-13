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

function main() {
    alert("开始执行任务了，请不要随意切换应用");
    sleep(1000);

    var gamecenterSign = require("游戏中心.js");
    gamecenterSign();//游戏中心

    var marketSign = require("软件商店.js");
    marketSign();//软件商店

    var themestoreSign = require("主题商店");
    themestoreSign();//主题商店

    var communitySign = require("oppo社区.js");
    communitySign();//oppo社区

    var storeSign = require("欢太商城.js");
    storeSign();//欢太商城

    var smarthomeSign =require("智能家居.js");
    smarthomeSign();//智能家居

    var musicSign = require("音乐.js");
    musicSign();//音乐

    var yoliSign = require("视频.js");
    yoliSign();//视频

    var soloopSign = require("soloop即录.js");
    soloopSign();//soloop即录

    var walletSign = require("钱包.js");
    walletSign();//钱包

    var myoppoSign = require("我的oppo.js");
    myoppoSign();//我的oppo

    var speedvideoSign = require("极速视频.js")
    speedvideoSign();//极速视频

    var browserSign = require("浏览器.js");
    browserSign();//浏览器

    var nearmePlaySign = require("小游戏.js");
    nearmePlaySign();//小游戏

    var speechassistSign = require("小布助手.js");
    speechassistSign();//小布助手

    alert("签到任务已执行完成！");
}


//关闭升级和广告之类的
function closeupdate() {
    var cancel = textContains("取消");
    if (cancel.exists()) {
        log("取消")
        click(cancel.findOnce().bounds().centerX(), cancel.findOnce().bounds().centerY());
        sleep(1000);
    }
    var cancel2 = text("稍后");
    if (cancel2.exists()) {
        log("稍后");
        click(cancel2.findOnce().bounds().centerX(), cancel2.findOnce().bounds().centerY());
        sleep(1000);
    }
    var cancel3 = text("暂不更新");
    if (cancel3.exists()) {
        log("暂不更新");
        click(cancel3.findOne().bounds().centerX(), cancel3.findOne().bounds().centerY());
        sleep(1000);
    }
    var cancel4 = text("跳过");
    if (cancel4.exists()) {
        log("跳过启动页面广告");
        click(cancel4.findOne().bounds().centerX(), cancel4.findOne().bounds().centerY());
        sleep(1000);
    }
    var cancel5 = text("不感兴趣");
    if (cancel5.exists()) {
        log("不感兴趣");
        click(cancel5.findOne().bounds().centerX(), cancel5.findOne().bounds().centerY());
        sleep(1000);
    }
    var cancel6 = text("退出");
    if (cancel6.exists()) {
        log("退出");
        click(cancel6.findOne().bounds().centerX(), cancel6.findOne().bounds().centerY());
        sleep(1000);
    }
    var ad = id("dialog_clos_image");
    if (ad.exists()) {
        log("关闭广告");
        click(ad.findOne().bounds().centerX(), ad.findOne().bounds().centerY());
        sleep(1000);
    }
    ad = id("close");
    if (ad.exists()) {
        log("关闭广告");
        click(ad.findOne().bounds().centerX(), ad.findOne().bounds().centerY());
        sleep(1000);
    }
    ad = id("ad_float_cancel");
    if(ad.exists()){
        log("关闭广告");
        click(ad.findOne().bounds().centerX(), ad.findOne().bounds().centerY());
        sleep(1000);
    }
    ad = id("tt_video_ad_close");
    if(ad.exists()){
        log("关闭广告");
        click(ad.findOne().bounds().centerX(), ad.findOne().bounds().centerY());
        sleep(1000);
    }
}