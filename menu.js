"ui";
//console.show();
ui.layout(
    <vertical id="菜单" gravity="right" bg="#66ccff" alpha="1" minHeight="1000px" minWidth="500px">
        <checkbox id="铃铛" text="铃铛"></checkbox>//复选框
        <checkbox id="素材" text="素材"></checkbox>
        <vertical id="素材列表" marginLeft="50">
            <horizontal>
                <checkbox id="素材1" text="  "></checkbox>
                <spinner id="素材属性1" entries="火|水|雷|风|光|暗|mana"></spinner>//下拉菜单选择
                <spinner id="素材等级1" entries="Lv10|Lv20|Lv30|Lv40|Lv50"></spinner>
                <input inputType="number" id="素材次数1" text="5"></input>//输入次数
                <text text="次"></text>
            </horizontal>
            <horizontal>
                <checkbox id="素材2" text="  "></checkbox>
                <spinner id="素材属性2" entries="火|水|雷|风|光|暗|mana"></spinner>
                <spinner id="素材等级2" entries="Lv10|Lv20|Lv30|Lv40|Lv50"></spinner>
                <input inputType="number" id="素材次数2" text="5"></input>
                <text text="次"></text>
            </horizontal>
            <horizontal>
                <checkbox id="素材3" text="  "></checkbox>
                <spinner id="素材属性3" entries="火|水|雷|风|光|暗|mana"></spinner>
                <spinner id="素材等级3" entries="Lv10|Lv20|Lv30|Lv40|Lv50"></spinner>
                <input inputType="number" id="素材次数3" text="5"></input>
                <text text="次"></text>
            </horizontal>
            <horizontal>
                <checkbox id="素材4" text="  "></checkbox>
                <spinner id="素材属性4" entries="火|水|雷|风|光|暗|mana"></spinner>
                <spinner id="素材等级4" entries="Lv10|Lv20|Lv30|Lv40|Lv50"></spinner>
                <input inputType="number" id="素材次数4" text="5"></input>
                <text text="次"></text>
            </horizontal>
            <horizontal>
                <checkbox id="素材5" text="  "></checkbox>
                <spinner id="素材属性5" entries="火|水|雷|风|光|暗|mana"></spinner>
                <spinner id="素材等级5" entries="Lv10|Lv20|Lv30|Lv40|Lv50"></spinner>
                <input inputType="number" id="素材次数5" text="5"></input>
                <text text="次"></text>
            </horizontal>
        </vertical>
        <checkbox id="崩坏" text="崩坏"></checkbox>
        <vertical id="崩坏列表" marginLeft="50">
            <horizontal>
                <checkbox id="崩坏1" text="  "></checkbox>
                <spinner id="崩坏属性1" entries="暗|光|风|雷|水|火"></spinner>//下拉菜单选择
                <spinner id="崩坏等级1" entries="Lv50|Lv60|Lv70"></spinner>
                <input inputType="number" id="崩坏次数1" text="5"></input>//输入次数
                <text text="次"></text>
            </horizontal>
            <horizontal>
                <checkbox id="崩坏2" text="  "></checkbox>
                <spinner id="崩坏属性2" entries="暗|光|风|雷|水|火"></spinner>
                <spinner id="崩坏等级2" entries="Lv50|Lv60|Lv70"></spinner>
                <input inputType="number" id="崩坏次数2" text="5"></input>
                <text text="次"></text>
            </horizontal>
            <horizontal>
                <checkbox id="崩坏3" text="  "></checkbox>
                <spinner id="崩坏属性3" entries="暗|光|风|雷|水|火"></spinner>
                <spinner id="崩坏等级3" entries="Lv50|Lv60|Lv70"></spinner>
                <input inputType="number" id="崩坏次数3" text="5"></input>
                <text text="次"></text>
            </horizontal>
            <horizontal>
                <checkbox id="崩坏4" text="  "></checkbox>
                <spinner id="崩坏属性4" entries="暗|光|风|雷|水|火"></spinner>
                <spinner id="崩坏等级4" entries="Lv50|Lv60|Lv70"></spinner>
                <input inputType="number" id="崩坏次数4" text="5"></input>
                <text text="次"></text>
            </horizontal>
            <horizontal>
                <checkbox id="崩坏5" text="  "></checkbox>
                <spinner id="崩坏属性5" entries="暗|光|风|雷|水|火"></spinner>
                <spinner id="崩坏等级5" entries="Lv50|Lv60|Lv70"></spinner>
                <input inputType="number" id="崩坏次数5" text="5"></input>
                <text text="次"></text>
            </horizontal>
        </vertical>
        <button id="start" text="开始"></button>
        <button id="exit" text="退出"></button>
    </vertical>
);
ui.素材列表.visibility = 8;
ui.崩坏列表.visibility = 8;


var ld = false;
var sc1 = false, sc2 = false, sc3 = false, sc4 = false, sc5 = false;
var bh1 = false, bh2 = false, bh3 = false, bh4 = false, bh5 = false;


ui.exit.on("click", () => {
    toastLog("退出");
    exit();
    return true;
});
ui.铃铛.on("check", (checked) => {
    if (checked) {//勾选了铃铛
        ld = true;
    } else {
        ld = false;
    }
});
ui.素材.on("check", (checked) => {//勾选素材时显示素材列表
    if (checked) {
        ui.素材列表.visibility = 0;
    } else {
        ui.素材列表.visibility = 8;
    }
});
ui.素材1.on("check", (checked) => {//勾选时记录
    if (checked) {
        sc1 = true;
    } else {
        sc1 = false;
    }
});
ui.素材2.on("check", (checked) => {
    if (checked) {
        sc2 = true;
    } else {
        sc2 = false;
    }
});
ui.素材3.on("check", (checked) => {
    if (checked) {
        sc3 = true;
    } else {
        sc3 = false;
    }
});
ui.素材4.on("check", (checked) => {
    if (checked) {
        sc4 = true;
    } else {
        sc4 = false;
    }
});
ui.素材5.on("check", (checked) => {
    if (checked) {
        sc5 = true;
    } else {
        sc5 = false;
    }
});
ui.崩坏.on("check", (checked) => {//勾选崩坏时显示崩坏列表
    if (checked) {
        ui.崩坏列表.visibility = 0;
    } else {
        ui.崩坏列表.visibility = 8;
    }
});
ui.崩坏1.on("check", (checked) => {//勾选时记录
    if (checked) {
        bh1 = true;
    } else {
        bh1 = false;
    }
});
ui.崩坏2.on("check", (checked) => {
    if (checked) {
        bh2 = true;
    } else {
        bh2 = false;
    }
});
ui.崩坏3.on("check", (checked) => {
    if (checked) {
        bh3 = true;
    } else {
        bh3 = false;
    }
});
ui.崩坏4.on("check", (checked) => {
    if (checked) {
        bh4 = true;
    } else {
        bh4 = false;
    }
});
ui.崩坏5.on("check", (checked) => {
    if (checked) {
        bh5 = true;
    } else {
        bh5 = false;
    }
});

ui.start.on("click", () => {
    toastLog("点击开始");
    /*var state = new Array(sc1, sc2, sc3, sc4, sc5, bh1, bh2, bh3, bh4, bh5);
    state.forEach(function (element, index) {
        if (element == true) {
            switch (index) {
                case 0:
                    var sucai = engines.execScriptFile("./labyrinth.js");//运行刷素材脚本
                    setTimeout(function () {
                        if (!sccs1) {
                            var sccs1 = ui.素材次数1.getText();//记录要刷的次数
                        }
                        toastLog(sccs1);
                        events.broadcast.emit("sucai", ui.素材属性1.getSelectedItemPosition(), ui.素材等级1.getSelectedItemPosition(), sccs1);//发送素材属性、等级、次数信息
                        setInterval(() => { }, 1000);//等待刷素材执行完毕
                        events.broadcast.on("return", function (state, cs) {
                            if (state == true) {//成功执行
                                return true;//继续下一项
                            } else {//体力不足
                                sccs1 = sccs1 - cs;//计算剩余次数
                                toastLog("剩余" + sccs1);
                            };
                        });
                    }, 5000)//等待脚本启动
                    toastLog("0完毕");
                    break;
                    case 1:
                    var sucai = engines.execScriptFile("./labyrinth.js");//运行刷素材脚本
                    setTimeout(function () {
                        if (!sccs2) {
                            var sccs2 = ui.素材次数1.getText();//记录要刷的次数
                        }
                        toastLog(sccs2);
                        events.broadcast.emit("sucai", ui.素材属性1.getSelectedItemPosition(), ui.素材等级1.getSelectedItemPosition(), sccs2);//发送素材属性、等级、次数信息
                        setInterval(() => { }, 1000);//等待刷素材执行完毕
                        events.broadcast.on("return", function (state, cs) {
                            if (state == true) {//成功执行
                                return true;//继续下一项
                            } else {//体力不足
                                sccs2 = sccs2 - cs;//计算剩余次数
                                toastLog("剩余" + sccs2);
                            };
                        });
                    }, 5000)//等待脚本启动
                    toastLog("1完毕");
                    break;
            };
        };
    });*/
    engines.execScriptFile("./function.js");
    log(ld);
    if (ld == true) {
        setTimeout(function () {
            toastLog("发送铃铛");
            events.broadcast.emit("ring");
        }, 3000);
    }
    return true;
});
events.broadcast.on("begin", function () {
    log("后台");
    activity.moveTaskToBack(true);//脚本移至后台
});