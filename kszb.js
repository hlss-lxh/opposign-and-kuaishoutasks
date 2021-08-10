//快手看直播任务
var ks = {};

ks.zb = function kszb(){
    toast("打开快手");
    if (app.launchPackage("com.kuaishou.nebula")) {
        sleep(4000);
        cancel();
        var menu = id("left_btn");
        if(menu.exists()){
            click(menu.findOne().bounds().centerX(), menu.findOne().bounds().centerY());
            sleep(1000);
            var makemoney  = text("去赚钱");
            if(makemoney.exists()){
                click(makemoney.findOne().bounds().centerX(), makemoney.findOne().bounds().centerY());
                sleep(3000);

                for(var i=0; i<10; i++){
                    log("第"+i+Number(1)+"次");
                    while(!click("live_activity_download"));
                    sleep(60000);
                    id("live_close_place_holder").waitFor();
                
                    sleep(2000);
                    closead();
                    log("点击看广告"+ i+Number(1) +"次");
                    sleep(2000);
                }
            }
        }
        }
    }
    alert("看直播任务已完成");


function cancel(){
    var cancel = text("我知道了");
    if (cancel.exists()) {
    toast("我知道了");
    click(cancel.findOne().bounds().centerX(), cancel.findOne().bounds().centerY());
    sleep(1000);
    }
}

function closead(){
    var ad = id("live_close_place_holder");
    if(ad.exists()){
        click(ad.findOne().bounds().centerX(), ad.findOne().bounds().centerY());
        sleep(1000);
        var exit = id("exit_btn");
        click(exit.findOne().bounds().centerX(), exit.findOne().bounds().centerY());
    }
}

module.exports = ks;
