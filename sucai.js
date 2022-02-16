toastLog("素材启动");
//监听sucai事件
events.broadcast.on("sucai", function(sx,dj,cs){
    toastLog("属性"+sx+"等级"+dj+"次数"+cs);
    sleep(2000);
    events.broadcast.emit("return", false,3);//返回刷取3次
});
setInterval(()=>{}, 1000);