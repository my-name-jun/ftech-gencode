var commonService = require('../../lib/commonService');
var service = require('./service');
var age = require('../../lib/dic/age');
var amount = require('../../lib/dic/amount');


//GEN_dependences

var vm = avalon.define({
    $id: "vm",

    //region 组件数据
    bank_header:require('../bank/img/11.png'),
    down:require('../bank/img/陆路交通公共交通意外险20160602-13.png'),
    age: age,
    age_item: '',
    amount: amount,
    amount_item: '',
    age_select:'10周岁以下子女',
    amount_select:'10万',

    //GEN_properties

    //endregion

    //region 主要数据

    //endregion 主要数据

    //region 主逻辑

    //endregion 主逻辑
    anyFuncti: function () {
        window.location.href = 'akg-information.html';
    },
    anyFuncti1: function () {
        window.location.href = 'akg-notes.html';
    },
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
$(document).ready(function () {
   $("#clause").click(function () {
       $('#clause_modal').modal("show");
   });
    $("#age").click(function () {
        $('#select0').modal("show");
        $(".age li:last").css("border-bottom","0");
        $(".age li:first").css({"background-color":"#5AB64B","color":"white"});

        //for循环用了没效果-未解决

        $(".age li:first").mouseover(function () {
            $(".age li:first").css({"background-color":"#5AB64B","color":"white"});
        });
        $(".age li:first").mouseout(function () {
            $(".age li:first").css({"background-color":"#ffffff","color":"#575761"});
        });
        $(".age li:eq(1)").mouseover(function () {
            $(".age li:eq(1)").css({"background-color":"#5AB64B","color":"white"});
        });
        $(".age li:eq(1)").mouseout(function () {
            $(".age li:eq(1)").css({"background-color":"#ffffff","color":"#575761"});
        });
        $(".age li:eq(1)").click(function () {
            this.age_select = "10周岁以下子女";
            x = document.getElementById("Sage");
            x.innerHTML = "10周岁以下子女";
        });
        $(".age li:eq(2)").click(function () {
            this.age_select = "10-18周岁子女";
            x = document.getElementById("Sage");
            x.innerHTML = "10-18周岁子女";
        });
        $(".age li:eq(3)").click(function () {
            this.age_select = "本人";
            x = document.getElementById("Sage");
            x.innerHTML = "本人";
        });
        $(".age li:eq(2)").mouseover(function () {
            $(".age li:eq(2)").css({"background-color":"#5AB64B","color":"white"});
        });
        $(".age li:eq(2)").mouseout(function () {
            $(".age li:eq(2)").css({"background-color":"#ffffff","color":"#575761"});
        });
        $(".age li:eq(3)").mouseover(function () {
            $(".age li:eq(3)").css({"background-color":"#5AB64B","color":"white"});
        });
        $(".age li:eq(3)").mouseout(function () {
            $(".age li:eq(3)").css({"background-color":"#ffffff","color":"#575761"});
        });
    });

    $("#amount").click(function () {
        $('#select1').modal("show");
        $(".amount li:last").css("border-bottom", "0");
        $(".amount li:first").css({"background-color":"#5AB64B","color":"white"});

        $(".amount li:first").mouseover(function () {
            $(".amount li:first").css({"background-color": "#5AB64B", "color": "white"});
        });
        $(".amount li:first").mouseout(function () {
            $(".amount li:first").css({"background-color": "#ffffff", "color": "#575761"});
        });
        $(".amount li:eq(2)").click(function () {
            this.age_select = "20万";
            x = document.getElementById("Samount");
            x.innerHTML = "20万";
        });
        $(".amount li:eq(3)").click(function () {
            this.age_select = "30万";
            x = document.getElementById("Samount");
            x.innerHTML = "30万";
        });
        $(".amount li:eq(4)").click(function () {
            this.age_select = "40万";
            x = document.getElementById("Samount");
            x.innerHTML = "40万";
        });
        $(".amount li:eq(5)").click(function () {
            this.age_select = "50万";
            x = document.getElementById("Samount");
            x.innerHTML = "50万";
        });
        $(".amount li:eq(1)").click(function () {
            this.age_select = "10万";
            x = document.getElementById("Samount");
            x.innerHTML = "10万";
        });
        $(".amount li:eq(6)").click(function () {
            this.age_select = "60万";
            x = document.getElementById("Samount");
            x.innerHTML = "60万";
        });
        $(".amount li:eq(7)").click(function () {
            this.age_select = "70万";
            x = document.getElementById("Samount");
            x.innerHTML = "70万";
        });
        $(".amount li:eq(8)").click(function () {
            this.age_select = "80万";
            x = document.getElementById("Samount");
            x.innerHTML = "80万";
        });
        $(".amount li:eq(9)").click(function () {
            this.age_select = "90万";
            x = document.getElementById("Samount");
            x.innerHTML = "90万";
        });
        $(".amount li:eq(10)").click(function () {
            this.age_select = "100万";
            x = document.getElementById("Samount");
            x.innerHTML = "100万";
        });
        $(".amount li:eq(1)").mouseover(function () {
            $(".amount li:eq(1)").css({"background-color": "#5AB64B", "color": "white"});
        });
        $(".amount li:eq(1)").mouseout(function () {
            $(".amount li:eq(1)").css({"background-color": "#ffffff", "color": "#575761"});
        });
        $(".amount li:eq(2)").mouseover(function () {
            $(".amount li:eq(2)").css({"background-color": "#5AB64B", "color": "white"});
        });
        $(".amount li:eq(2)").mouseout(function () {
            $(".amount li:eq(2)").css({"background-color": "#ffffff", "color": "#575761"});
        });
        $(".amount li:eq(3)").mouseover(function () {
            $(".amount li:eq(3)").css({"background-color": "#5AB64B", "color": "white"});
        });
        $(".amount li:eq(3)").mouseout(function () {
            $(".amount li:eq(3)").css({"background-color": "#ffffff", "color": "#575761"});
        });
        $(".amount li:eq(4)").mouseover(function () {
            $(".amount li:eq(4)").css({"background-color": "#5AB64B", "color": "white"});
        });
        $(".amount li:eq(4)").mouseout(function () {
            $(".amount li:eq(4)").css({"background-color": "#ffffff", "color": "#575761"});
        });
        $(".amount li:eq(5)").mouseover(function () {
            $(".amount li:eq(5)").css({"background-color": "#5AB64B", "color": "white"});
        });
        $(".amount li:eq(5)").mouseout(function () {
            $(".amount li:eq(5)").css({"background-color": "#ffffff", "color": "#575761"});
        });
        $(".amount li:eq(6)").mouseover(function () {
            $(".amount li:eq(6)").css({"background-color": "#5AB64B", "color": "white"});
        });
        $(".amount li:eq(6)").mouseout(function () {
            $(".amount li:eq(6)").css({"background-color": "#ffffff", "color": "#575761"});
        });
        $(".amount li:eq(7)").mouseover(function () {
            $(".amount li:eq(7)").css({"background-color": "#5AB64B", "color": "white"});
        });
        $(".amount li:eq(7)").mouseout(function () {
            $(".amount li:eq(7)").css({"background-color": "#ffffff", "color": "#575761"});
        });
        $(".amount li:eq(8)").mouseover(function () {
            $(".amount li:eq(8)").css({"background-color": "#5AB64B", "color": "white"});
        });
        $(".amount li:eq(8)").mouseout(function () {
            $(".amount li:eq(8)").css({"background-color": "#ffffff", "color": "#575761"});
        });
        $(".amount li:eq(9)").mouseover(function () {
            $(".amount li:eq(9)").css({"background-color": "#5AB64B", "color": "white"});
        });
        $(".amount li:eq(9)").mouseout(function () {
            $(".amount li:eq(9)").css({"background-color": "#ffffff", "color": "#575761"});
        });
    });
});

//GEN_run
