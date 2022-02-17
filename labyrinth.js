toastLog("素材启动");
//监听sucai事件
events.broadcast.on("sucai", function (sx, dj, cs) {
    toastLog("属性" + sx + "等级" + dj + "次数" + cs);
    sleep(5000);
    if (cs > 3) {
        events.broadcast.emit("return", false, 3);//返回刷取3次
    } else {
        events.broadcast.emit("return", true, cs);
    }
    toastLog("返回退出");
    exit();
});
setInterval(() => { }, 1000);