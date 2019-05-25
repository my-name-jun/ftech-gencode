var commonService = require('../../lib/commonService');
var service = require('./service');

//GEN_dependences

var vm = avalon.define({
    $id: "vm",

    //region 组件数据
    bg:require('../taskTwo/img/bg.png'),
    tbfill_icon:require('../taskTwo/img/tbfill_icon.png'),
    tbfill_next_sel_btn:require('../taskTwo/img/tbfill_next_sel_btn.png'),
    tbmain_icon0:require('../taskTwo/img/tbmain_icon0.png'),
    tbconfirm_icon2:require('../taskTwo/img/tbconfirm_icon2.png'),
    tbmain_icon3:require('../taskTwo/img/tbmain_icon3.png'),
    tbmain_icon4:require('../taskTwo/img/tbmain_icon4.png'),
    tbconfirm_pay_btn:require('../taskTwo/img/tbconfirm_pay_btn.png'),
    bg_1:require('../taskTwo/img/bg_1.png'),
    tbsuccessful_pop:require('../taskTwo/img/tbsuccessful_pop.png'),
    tbfailure_pop:require('../taskTwo/img/tbfailure_pop.png'),
    tbpop_shut_btn:require('../taskTwo/img/tbpop_shut_btn.png'),
    tbpop_determine_btn:require('../taskTwo/img/tbpop_determine_btn.png'),
    tbpop_back_btn:require('../taskTwo/img/tbpop_back_btn.png'),

    name:'',
    mailbox:'',
    ID:'',
    iPhone:'',

    career_selected_item_1: '',
    career_selected_item_2: '',
    career_selected_item_3: '',
    accident_hurt_item: '',
    subsidy_item: '',

    //GEN_properties

    //endregion

    //region 主要数据

    //endregion 主要数据

    //region 主逻辑

    //endregion 主逻辑

    //region 组件逻辑

    //GEN_actions

    //endregion

    //region 校验逻辑

    //endregion

    //region 数据监听
    bindListeners: function () {

        //GEN_listeners
    }


    //endregion 数据监听

});

vm.bindListeners();
vm.name = localStorage.getItem('name');
vm.ID = localStorage.getItem('ID');
vm.mailbox = localStorage.getItem('mailbox');
vm.iPhone = localStorage.getItem('iPhone');
vm.career_selected_item_1 = localStorage.getItem('career_selected_item_1');
vm.career_selected_item_2 = localStorage.getItem('career_selected_item_2');
vm.career_selected_item_3 = localStorage.getItem('career_selected_item_3');
vm.accident_hurt_item = localStorage.getItem('accident_hurt_item');
vm.subsidy_item = localStorage.getItem('subsidy_item');
//GEN_run
$(document).ready(function(){
    $("#myModal-new").click(function(){
        var number = Math.random()*10;
        if(number>5){
            $("#myModal0").modal("show");
        }
        else
        {
            $("#myModal1").modal("show");
        }
    })
});