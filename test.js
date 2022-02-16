"ui";


ui.layout(
<vertical gravity="right" bg="#66ccff" alpha="0.8" minHeight="1000px" minWidth="500px">
        
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
    </vertical>
);
ui.素材列表.visibility = 8;
ui.素材.on("check", (checked) => {//勾选素材时显示素材列表
    if (checked) {
        ui.素材列表.visibility = 0;
    } else {
        ui.素材列表.visibility = 8;
    }
});
