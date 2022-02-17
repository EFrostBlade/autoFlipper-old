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
//console.show();
Floaty();
function Floaty() {
    window = floaty.rawWindow(
        <vertical gravity="center_vertical">
            <img id="icon" src="file://res/icon.png" w="60" h="60" alpha="0.8" circle="true" borderWidth="1dp" borderColor="black" />
            <vertical id="list">
                <button id="start" textColor="#FFFFFF" text="开始" bg="#4F4F4F" padding="0" h="40" w="60" />
                <text text="" h="1" />
                <button id="exit" textColor="#FFFFFF" text="退出" bg="#4F4F4F" padding="0" h="40" w="60" />
            </vertical>
        </vertical>
    );
    window.setPosition(0, device.height / 3);
    window.exitOnClose();
    setInterval(() => { }, 1000);
    window.list.visibility = 8;//visibility属性决定了悬浮窗是否显示，8为隐藏，0为显示
    state = false;//脚本运行状态
    var x = 0,
        y = 0;
    var windowX, windowY;
    var downTime;
    window.icon.setOnTouchListener(function (view, event) {
        switch (event.getAction()) {
            case event.ACTION_DOWN://监听到按下悬浮窗
                x = event.getRawX();
                y = event.getRawY();//获取点击坐标
                windowX = window.getX();
                windowY = window.getY();//获取悬浮窗坐标
                downTime = new Date().getTime();//获取按下时间
                return true;
            case event.ACTION_MOVE://监听移动悬浮窗                
                window.setPosition(windowX + (event.getRawX() - x),
                    windowY + (event.getRawY() - y));//随移动变化位置
                if (window.getX() < device.width / 2) {
                    window.setPosition(0, window.getY());
                } else {
                    window.setPosition(device.width - 60, window.getY())
                }//贴边停靠
                return true;
            case event.ACTION_UP://监听弹起手指
                if (Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5) {
                    liststate();//移动距离较小视为点击
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
        }//点击时切换显示、隐藏
    }
    window.exit.setOnTouchListener(function (view, event) {
        if (event.getAction() == event.ACTION_UP) {//点击退出按钮
            engines.stopAllAndToast();//停止所有正在运行的脚本并显示停止的脚本数量
        }
        return true;
    });
    window.start.setOnTouchListener(function (view, event) {
        if (event.getAction() == event.ACTION_UP) {//点击开始/停止按钮
            if (state == false) {//开始脚本
                window.start.text("停止");//切换显示文字
                toastLog("开始");
                var menu = engines.execScriptFile("./menu.js");//唤起菜单
                state = true;
                setTimeout(function () {
                    if (window.start.text() == "停止") {
                        liststate();
                    }
                }, 3000)//三秒不点击停止，则隐藏列表       
            } else {//停止脚本
                state = false;
                window.start.text("开始");
                toastLog("停止");
                var e = engines.all();
                for (let i = 0; i < e.length - 1; i++) {
                    e[i].forceStop();
                }
            }
        }
        return true;
    });
}
