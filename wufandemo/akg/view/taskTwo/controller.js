var commonService = require('../../lib/commonService');
var service = require('./service');

var career_dic_array = require('../../lib/dic/price');
var accident_hurt = require('../../lib/dic/accident_hurt');
var subsidy = require('../../lib/dic/subsidy');
//GEN_dependences

var vm = avalon.define({
    $id: "vm",

    //region 组件数据
    headImg:require('./img/tbmain_bg.png'),
    tbmain_icon0:require('./img/tbmain_icon0.png'),
    tbmain_icon1:require('./img/tbmain_icon1.png'),
    tbmain_icon2:require('./img/tbmain_icon2.png'),
    career_candidate_select_array: career_dic_array,
    career_selected_item_1: '',
    career_selected_item_2: '',
    career_selected_item_3: '',
    accident_hurt: accident_hurt,
    accident_hurt_item: '',
    subsidy: subsidy,
    subsidy_item: '',
    tbmain_cbb_btn:require('./img/tbmain_cbb_btn.png'),
    tbmain_icon3:require('./img/tbmain_icon3.png'),
    tbfill_next_sel_btn:require('./img/tbfill_next_sel_btn.png'),
    //GEN_properties

    //endregion

    //region 主要数据

    //endregion 主要数据

    //region 主逻辑

    //endregion 主逻辑

    anyFuncti: function () {
        var that = this;
        var data = {
            career_selected_item_1: that.career_selected_item_1,
            career_selected_item_2: that.career_selected_item_2,
            career_selected_item_3: that.career_selected_item_3,
            accident_hurt_item: that.accident_hurt_item,
            subsidy_item: that.subsidy_item,
        };
        localStorage.setItem("career_selected_item_1",this.career_selected_item_1);
        localStorage.setItem("career_selected_item_2",this.career_selected_item_2);
        localStorage.setItem("career_selected_item_3",this.career_selected_item_3);
        localStorage.setItem("accident_hurt_item",this.accident_hurt_item);
        localStorage.setItem("subsidy_item",this.subsidy_item);
        service.postToServer(data);

        var age = $("#middle_input").val();
        var s1 = $("#s1").val();
        var s2 = $("#s2").val();
        var s3 = $("#s3").val();
        var s4 = $("#s4").val();
        var s5 = $("#s5").val();
        if (age =="" || s1=="" ||s2 =="" || s3=="" ||s4 =="" || s5==""){
            alert("请将信息补全！");
        }
        else
            window.location.href = 'akg-fill.html';
    },
    //region 组件逻辑



    //GEN_actions

    //endregion

    //region 校验逻辑

    //endregion

    //region 数据监听
    bindListeners: function () {

        $("#middle_input").change(function () {
            var str = $("#middle_input").val();
            var str_number = parseInt(str);
            if (str_number <18 || str_number>60)
                alert("输入年龄不符！");
        });

        //GEN_listeners
    }


    //endregion 数据监听

});

vm.bindListeners();

$(".form_datetime").datetimepicker({
    format: "yyyy-mm-dd hh:ii",
    autoclose: true,
    todayBtn: true,
    language:'zh-CN',
    pickerPosition:"bottom-left"
});


//GEN_run
