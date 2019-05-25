var commonService = require('../../lib/commonService');
var service = require('./service');


//GEN_dependences

var vm = avalon.define({
    $id: "vm",

    //region 组件数据
    title_1:require('../bank/img/20160602-12.png'),
    title_right:require('../bank/img/陆路交通公共交通意外险20160602-19.png'),
    title_right1:require('../bank/img/陆路交通公共交通意外险20160602-13.png'),
    footer17:require('../bank/img/陆路交通公共交通意外险20160602-17.png'),
    footer18:require('../bank/img/陆路交通公共交通意外险20160602-18.png'),

    //GEN_properties
    //endregion

    //region 主要数据
    isTick:false,
    titleTick:false,
    titleTick1:false,
    titleTick2:false,
    titleTick3:false,
    //endregion 主要数据
    name:'',
    ID:'',
    phone:'',
    email:'',
    Bname:'',
    Brelationship:'',
    BID:'',
    //region 主逻辑
    anyFuncti: function () {
        if (this.isTick == false){
            alert("请阅读并同意！");
        }
        else {
            window.location.href = 'akg-success.html';
        }

    },

    anyFuncti1: function () {
        window.location.href = 'akg-notes.html';
    },
    //endregion 主逻辑

    tick: function () {
        var that = this;
        that.isTick = !that.isTick;
    },
    t_Tick: function () {
        var that = this;
        that.titleTick = !that.titleTick;
    },
    t_Tick1: function () {
        var that = this;
        that.titleTick1 = !that.titleTick1;
    },
    t_Tick2: function () {
        var that = this;
        that.titleTick2 = !that.titleTick2;
    },
    t_Tick3: function () {
        var that = this;
        that.titleTick3 = !that.titleTick3;
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

vm.name = localStorage.getItem('name');
vm.ID = localStorage.getItem('ID');
vm.BID = localStorage.getItem('BID');
vm.phone = localStorage.getItem('phone');
vm.email = localStorage.getItem('email');
vm.Bname = localStorage.getItem('Bname');
vm.Brelationship = localStorage.getItem('relationship');
//GEN_run
