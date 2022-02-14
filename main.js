/*
auto.waitFor();
if(!requestScreenCapture()){
    toast("请求截图失败");
    exit();
};
if (!$floaty.checkPermission()) {
    // 没有悬浮窗权限，提示用户并跳转请求
    toast("本脚本需要悬浮窗权限来显示悬浮窗，请在随后的界面中允许并重新运行本脚本。");
    $floaty.requestPermission();
    exit();
} 
*/
Floaty();

function Floaty() {
    window = floaty.rawWindow(
        <horizontal gravity="center_vertical">
            <img id="icon" src="file://res/icon.png" w="60" h="60" alpha="0.8" circle="true" borderWidth="1dp" borderColor="black" />
            <horizontal id="list">
                <vertical>
                    <button id="ui_on" textColor="#FFFFFF" text="开始" bg="#4F4F4F" padding="0" h="40" w="60"/>
                    <text text="" h="1" />
                    <button id="ui_off" textColor="#FFFFFF" text="结束" bg="#4F4F4F" padding="0" h="40" w="60"/>
                </vertical>
            </horizontal>
        </horizontal>
    );
    window.setPosition(0, device.height / 3);
    window.exitOnClose();
    setInterval(() => {}, 1000);

    window.list.visibility = 8;

    state = false;
    var x = 0,
        y = 0;
    var windowX, windowY;
    var downTime;

    window.icon.setOnTouchListener(function(view, event) {
        switch (event.getAction()) {
            case event.ACTION_DOWN:
                x = event.getRawX();
                y = event.getRawY();
                windowX = window.getX();
                windowY = window.getY();
                downTime = new Date().getTime();
                return true;
            case event.ACTION_MOVE:
                //window.setPosition(50, device.height / 3);
                window.setPosition(windowX + (event.getRawX() - x),
                windowY + (event.getRawY() - y));
                if(window.getX()<device.width / 2){
                    window.setPosition(0,window.getY());
                }else{
                    window.setPosition(device.width-60,window.getY())
                }
                return true;
            case event.ACTION_UP:
                if (Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5) {
                    liststate();
                }
                return true;
        }
        return true;
    });

    function liststate() {
        if (window.list.visibility == 8) {
            window.list.visibility = 0;
        } else {
            window.list.visibility = 8;
        }
    }

    window.ui_off.setOnTouchListener(function(view, event) {
        if (event.getAction() == event.ACTION_UP) {
            toastLog("关闭脚本...");
            window.close();
            exit();
        }
        return true;
    });

    //on按钮事件
    window.ui_on.setOnTouchListener(function(view, event) {
        if (event.getAction() == event.ACTION_UP) {
            window.setPosition(50, device.height / 3);
            window.disableFocus();
            if (window.ui_on.text() == "开始") {
                window.ui_on.text("暂停");
                console.log("开始on悬浮窗");

                var main = threads.start(function() {
                    device.keepScreenOn()
                    //on脚本
                    douyinTask.runDouYinTask();
                })

                //两秒不点击暂停，则隐藏list
                setTimeout(function() {
                    if (window.ui_on.text() == "暂停") {
                        liststate()
                    }
                }, 3000)

                //监控on还是暂停
                var 监控state = setInterval(function() {
                    if (window.ui_on.text() == "开始") { //是on说明暂停了
                        main.interrupt()
                        toastLog("暂停了")
                        clearInterval(监控state)
                    }
                }, 100)

            } else {
                state = false;
                window.ui_on.text("开始");
                toastLog("开始暂停...");
            }
        }
        return true;
    });
}
