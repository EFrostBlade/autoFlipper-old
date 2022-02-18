sum = 0;
aa();
//启动子线程计算1加到10000
function aa() {
    var thread = threads.start(function () {
        summm();
    })
    thread.join(300);
    bb();
}

function summm() {
    for (var i = 0; i < 100; i++) {
        sum += i;
        sleep(10);
        log(sum);
    }
}
function bb() {

    toast("sum = " + sum);
}
//等待该线程完成
