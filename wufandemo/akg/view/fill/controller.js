var commonService = require('../../lib/commonService');
var service = require('./service');


//GEN_dependences

var vm = avalon.define({
    $id: "vm",

    //region 组件数据
    tbfill_icon:require('../taskTwo/img/tbfill_icon.png'),
    tbfill_next_dis_btn:require('../taskTwo/img/tbfill_next_dis_btn.png'),
    tbfill_next_sel_btn:require('../taskTwo/img/tbfill_next_sel_btn.png'),
    tbfill_nochoose_btn:require('../taskTwo/img/tbfill_nochoose_btn.png'),
    tbfill_choose_btn:require('../taskTwo/img/tbfill_choose_btn.png'),
    tbfill_next_sel_btn:require('../taskTwo/img/tbfill_next_sel_btn.png'),

    name:'',
    iPhone:'',
    ID:'',
    mailbox:'',
    //GEN_properties

    //endregion

    //region 主要数据
    isTick:false,
    isTick_ID:false,
    isTick_confirm:false,
    isTick_id:false,
    isTick_flag:false,
    flag0: 1,
    flag1: 1,
    flag2: 1,
    flag3: 1,
    flag4: 1,
    flag5: 1,


    //endregion 主要数据

    anyFuncti: function () {
        var that = this;
        var data = {
            name: that.name,
            iPhone: that.iPhone,
            ID: that.ID,
            mailbox: that.mailbox,
        };
        localStorage.setItem("name",this.name);
        localStorage.setItem("iPhone",this.iPhone);
        localStorage.setItem("ID",this.ID);
        localStorage.setItem("mailbox",this.mailbox);
        service.postToServer(data);
        window.location.href = 'akg-confirm.html'
    },


    //region 主逻辑
    tick: function () {
        var that = this;
        that.isTick = !that.isTick;
    },
    tick_ID: function () {
        var that = this;
        that.isTick_ID = !that.isTick_ID;
    },
    tick_confirm: function () {
        var that = this;
        if(this.flag0 == 1 ||this.flag1 == 1 ||this.flag2 == 1 ||this.flag3 == 1 ||this.flag4 == 1 ||this.flag5 == 1 || that.isTick == false ||that.isTick_ID == false ||that.isTick_id == false)
        {
            alert("请将信息补充完全！");
        }
        else
        {
            that.isTick_confirm = !that.isTick_confirm;
            that.isTick_flag = !that.isTick_flag;
        }
    },
    tick_id: function () {
        var that = this;
        that.isTick_id = !that.isTick_id;
    },

    //endregion 主逻辑

    //region 组件逻辑



    //GEN_actions

    //endregion

    //region 校验逻辑

    //endregion

    //region 数据监听
    bindListeners: function () {
        var that = this;
        $("#iphone").change(function () {
            var Mlength = $("#iphone").val().length;
            if (Mlength != 11)
            {
                that.flag0 = 1;
                alert("手机号需要输入11位！");
            }
            else
                that.flag0 = 0;
        });
        $("#id").change(function () {
            var Nlength = $("#id").val().length;
            if (Nlength != 18)
            {
                that.flag1 = 1;
                alert("身份证件号需要18位！");
            }
            else
            {
                that.flag1 = 0;
            }

        });
        $("#email").change(function () {
            var str = $("#email").val();
            if (str.indexOf("@") == -1 || str.substring(str.length-4).indexOf(".") == -1)
            {
                that.flag2 = 1;
                alert("邮箱格式错误！");
            }
            else
                that.flag2 = 0;
        });
        $("#iphone_0").change(function () {
            var Mlength = $("#iphone_0").val().length;
            if (Mlength != 11)
            {
                that.flag3 = 1;
                alert("手机号需要输入11位！");
            }
            else
                that.flag3 = 0;
        });
        $("#id_0").change(function () {
            var Nlength = $("#id_0").val().length;
            if (Nlength != 18)
            {
                that.flag4 = 1;
                alert("身份证件号需要18位！");
            }
            else
                that.flag4 = 0;
        });
        $("#email_0").change(function () {
            var str = $("#email_0").val();
            if (str.indexOf("@") == -1 || str.substring(str.length-4).indexOf(".") == -1)
            {
                that.flag5 = 1;
                alert("邮箱格式错误！");
            }
            else
                that.flag5 = 0;
        });

        //GEN_listeners
    },
    //endregion 数据监听


});

vm.bindListeners();


//GEN_run
