var entries = "牙叔教程|简单易学";



悬浮窗 = floaty.window(
  <vertical>
    <vertical gravity="center" bg="#7f8c8d" padding="6">
      <horizontal w="*">
        <button id="btn" w="0" layout_weight="1">
          按钮
        </button>
        <spinner id="spinner" entries="{{entries}}" />
      </horizontal>
      <text id="text" textSize="23sp" textColor="#ffffff" w="*" gravity="center">
        牙叔教程 简单易学
      </text>
    </vertical>
  </vertical>
);

var myAdapterListener = new android.widget.AdapterView.OnItemSelectedListener({
  onItemSelected: function (parent, view, position, id) {
    ui.run(function () {
      let r = parent.getSelectedItem();
      toastLog(r);
    });
  },
});
悬浮窗.spinner.setOnItemSelectedListener(myAdapterListener);

悬浮窗.btn.click(function () {
  悬浮窗.close();
});
events.on("exit", function () {
  悬浮窗.close();
});

setInterval(function () {}, 1000);
