var sign = {};

//游戏中心
sign.gamecenter = function gamecenterSign() {
    toast("打开游戏中心");
    if (app.launchPackage("com.nearme.gamecenter")) {
        sleep(4000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOne();
        sleep(1000);
        log(me.visibleToUser())
        if (me.visibleToUser()) {
            sleep(1000);
            log(click(me.bounds().centerX(), me.bounds().centerY()));
            sleep(1000);
            var qd = text("签到");
            if (qd.exists()) {
                log("签到");
                click(qd.findOne().bounds().centerX(), qd.findOne().bounds().centerY());
            }
            else{
                toast("已经签过到啦")
            }
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}

//软件商店
sign.market = function marketSign() {
    toast("打开软件商店");
    if (app.launchPackage("com.heytap.market")) {
        sleep(6000);
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
            var qd = text("签到");
            if (qd.exists()) {
                log("签到");
                click(qd.findOne().bounds().centerX(), qd.findOne().bounds().centerY());
            }
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}

//主题商店
sign.themestore = function themestoreSign() {
    toast("打开主题商店");
    if (app.launchPackage("com.heytap.themestore")) {
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
            var qd = text("签到");
            if (qd.exists()) {
                log("签到");
                click(qd.findOne().bounds().centerX(), qd.findOne().bounds().centerY());
            }
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}

//oppo社区
sign.community = function communitySign() {
    toast("打开OPPO 社区");
    if (app.launchPackage("com.oppo.community")) {
        sleep(4000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOne().bounds();
        sleep(1000);
        log(click(me.centerX(), me.centerY()));
        sleep(1000);
        if (text("签到").exists()) {
            click("签到");
            sleep(1000);
            if (text("签到").exists()) {
                click("签到");
            }
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}

//欢太商城
sign.store = function storeSign() {
    toast("打开欢太商城");
    if (app.launchPackage("com.oppo.store")) {
        sleep(4000);
        closeupdate();
        text("我的").waitFor();
        log(click("我的"));
        sleep(1000);
        if (text("签到").exists()) {
            click("签到");
            sleep(2000);
            click("立即签到");
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}

//智能家居
sign.smarthome = function smarthomeSign() {
    toast("打开智能家居");
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
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
    }
}

//音乐
sign.music = function musicSign() {
    toast("打开音乐");
    if (app.launchPackage("com.heytap.music")) {
        sleep(4000);
        closeupdate();
        text("我的").waitFor();
        log(click("我的"));
        sleep(1000);
        if (text("签到").exists()) {
            click("签到");
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}

//视频·
sign.yoli = function yoliSign() {
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
            var qd = text("签到");
            sleep(3000);
            if (qd.exists()) {
                log("签到");
                click(qd.findOne().bounds().centerX(), qd.findOne().bounds().centerY());
                // sleep(1000);
                // text("去签到").findOne().click();
            }
        }
    } else {
        toast("软件不存在，进行下一个");;
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}

//soloop即录
sign.soloop = function soloopSign() {
    toast("打开Soloop 即录");
    if (app.launchPackage("com.coloros.videoeditor")) {
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
            var qd = text("签到");
            if (qd.exists()) {
                log("签到");
                click(qd.findOne().bounds().centerX(), qd.findOne().bounds().centerY());
            }
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}

//钱包
sign.wallet = function walletSign() {
    toast("打开钱包");
    if (app.launchPackage("com.finshell.wallet")) {
        sleep(4000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOne().bounds();
        sleep(1000);
        log(click(me.centerX(), me.centerY()));
        sleep(1000);
        if (text("签到").exists()) {
            click("签到");
            sleep(2000);
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}

//我的oppo
sign.usercenter = function usercenterSign() {
    toast("打开我的 OPPO");
    if (app.launchPackage("com.oppo.usercenter")) {
        sleep(4000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        if (text("签到").exists()) {
            click("签到");
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}

//极速视频
sign.speedvideo = function speedvideo() {
    toast("打开极速视频");
    if (app.launchPackage("com.heytap.ugcvideo.praise")) {
        sleep(3000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOne().bounds();
        sleep(1000);
        log(click(me.centerX(), me.centerY()));
        sleep(1000);
        var qd = id("tv_credit_sign");
        if (qd.exists()) {
            log("点击签到");
            click(qd.findOne().bounds().centerX(), qd.findOne().bounds().centerY());
            sleep(2000);
            if(text("去签到").exists){
                log("点击去签到");
                click("去签到");
            }
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}

//小游戏
sign.nearmePlay = function nearmePlaySign() {
    toast("打开小游戏");
    if (app.launchPackage("com.nearme.play")) {
        sleep(4000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        var me = text("福利").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOne();
        sleep(1000);
        log(me.visibleToUser())
        if (me.visibleToUser()) {
            sleep(1000);
            log(click(me.bounds().centerX(), me.bounds().centerY()));
            sleep(1000);
            var qd = text("签到");
            if (qd.exists()) {
                log("签到");
                click(qd.findOne().bounds().centerX(), qd.findOne().bounds().centerY());
            }
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}

//浏览器
sign.browser = function browserSign() {
    toast("打开浏览器");
    if (app.launchPackage("com.heytap.browser")) {
        sleep(6000);
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
            var qd = text("签到");
            if (qd.exists()) {
                log("签到");
                click(qd.findOne().bounds().centerX(), qd.findOne().bounds().centerY());
            }
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}

//小布助手
sign.speechassist = function speechassistSign() {
    toast("打开小布助手");
    if (app.launchPackage("com.heytap.speechassist")) {
        sleep(4000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOne();
        sleep(1000);
        log(click(me.bounds().centerX(), me.bounds().centerY()));
        sleep(1000);
            var qd = text("签到");
            if (qd.exists()) {
                log("签到");
                click(qd.findOne().bounds().centerX(), qd.findOne().bounds().centerY());
            }
        }
    else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}

//模块接口
module.exports = sign;