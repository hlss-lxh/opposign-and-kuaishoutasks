//快手广告任务

// var ks = {};
var ks = {};

ks.ad = function watchksad(){
    toast("打开快手");
    if (app.launchPackage("com.kuaishou.nebula")) {
        sleep(4000);
        var cancel = text("我知道了");
        if (cancel.exists()) {
        toast("我知道了");
        click(cancel.findOne().bounds().centerX(), cancel.findOne().bounds().centerY());
        sleep(1000);
        }
        var menu = id("left_btn");
        if(menu.exists()){
            click(menu.findOne().bounds().centerX(), menu.findOne().bounds().centerY());
            sleep(1000);
            var makemoney  = text("去赚钱");
            if(makemoney.exists()){
                click(makemoney.findOne().bounds().centerX(), makemoney.findOne().bounds().centerY());
                sleep(3000);
                for(var i=0; i<10; i++){
                    while(!click("task_icon_list_advideo.1b6843f3"));
                    log("第"+i+Number(1)+"次");
                    sleep(60000);
                    id("video_close_icon").waitFor();
                    sleep(2000);
                    closead();
                    log("点击看广告"+ i+Number(1) +"次");
                    sleep(5000);
                }
            }
        }
    }
    alert("任务完成");
}

function closead(){
    var ad = id("video_close_icon");
    if(ad.exists()){
        click(ad.findOne().bounds().centerX(), ad.findOne().bounds().centerY());
        sleep(1000);
    }
}

module.exports = ks;