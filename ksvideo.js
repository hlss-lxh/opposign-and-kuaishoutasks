//快手短视频

var ks = {};

ks.video = function ksvideo(){
    toast("打开快手");
    if (app.launchPackage("com.kuaishou.nebula")) {
        sleep(4000);
        var cancel = text("我知道了");
        if (cancel.exists()) {
        toast("我知道了");
        click(cancel2.findOne().bounds().centerX(), cancel2.findOne().bounds().centerY());
        sleep(1000);
        }
        for(var i=0; ; i++){
            swipe(141,1611,141,747,100);
            var time = 8+random(5,12);
            sleep(time*1000);
            log("第"+i+1+"个视频");
        }
        
    }    
    alert("看视频任务已完成");
}

module.exports = ks;