auto.waitFor();//申请无障碍权限
$images.requestScreenCapture();//申请截图权限
//console.show();
events.broadcast.emit("begin");
toastLog("运行功能");
/*events.broadcast.on("ring", function () {
    toastLog("开始铃铛");
    findRing();
});*/
var ldcs = 0;//统计打了多少次铃铛
findRing();
function findRing() {
    var ring = images.read("./res/1920/铃铛.jpg");//读取图片
    while (1) {
        log("查找铃铛");
        sleep(1000);
        var img = captureScreen();//截图
        var p = findImage(img, ring, {
            region: [0, 0, 150, 300],
        });//找图
        if (p) {
            sleep(500);
            click(p.x + random(0, 50), p.y + random(0, 50));//点击找到的坐标
            ring.recycle();//回收图片占用的内存资源
            findJoin();
        } else {
            continue;
        }
    }
}
function findJoin() {
    var join = images.read("./res/1920/参加.jpg");
    while (1) {
        sleep(1000);
        log("查找参加");
        var img = captureScreen();
        var p = findImage(img, join, {
            region: [600, 1600, 300, 400],
        });
        if (p) {
            sleep(500);
            click(p.x + random(-100, 200), p.y + random(0, 50));
            join.recycle();
            //thread1 = threads.start(findOk());//在子线程中执行查找人满、解散等操作
            findReady();
        } else {
            continue;
        }
    }
}
function findOk() {
    var ok = images.read("./res/1920/ok.jpg");
    while (1) {
        sleep(1000);
        log("查找ok");
        var img = captureScreen();
        var p = findImage(img, ok, {
            region: [400, 1250, 300, 400],
        });
        if (p) {
            sleep(500);
            click(p.x + random(-100, 200), p.y + random(0, 50));
            ok.recycle();
            findRing();
        } else {
            continue;
        }
    }
}
function findReady() {
    var ready = images.read("./res/1920/准备.jpg");
    while (1) {
        sleep(1000);
        var img = captureScreen();
        var p = findImage(img, ready, {
            region: [300, 1500, 150, 300],
        });
        if (p) {
            sleep(500);
            click(p.x + random(0, 200), p.y + random(0, 100));
            ready.recycle();
            findBeing();
        } else {
            continue;
        }
    }
}
function findCont(i) {
    var cont = images.read("./res/1920/继续.jpg");
    var k = 0;
    while (k < 1) {
        sleep(1000);
        var img = captureScreen();
        var p = findImage(img, cont, {
            region: [400, 1600, 250, 400],
        });
        if (p) {
            sleep(500);
            click(p.x + random(0, 200), p.y + random(0, 100));
            k++;
        } else {
            continue;
        }
    }
    cont.recycle();
    findLeave();
}
function findBeing() {
    var being = images.read("./res/1920/being.jpg");
    while (1) {
        sleep(1000);
        var img = captureScreen();
        var p = findImage(img, being, {
            region: [0, 0, 150, 400],
        });
        if (p) {
            being.recycle();
            //if (thread1)
            //    thread1.interrupt();
            findCont(3);
        } else {
            continue;
        }
    }
}
function findLeave() {
    var leave = images.read("./res/1920/离开.jpg");
    while (1) {
        sleep(1000);
        var img = captureScreen();
        var p = findImage(img, leave, {
            region: [200, 1600, 250, 400],
        });
        if (p) {
            sleep(500);
            click(p.x + random(-100, 200), p.y + random(0, 50));
            leave.recycle();
            ldcs++;
            toastLog(ldcs);
            findRing();
        } else {
            continue;
        }
    }
}
setInterval(() => { }, 1000);