var commonService = require('../../lib/commonService');
var service = require('./service');
var relation = require('../../lib/dic/relation');

//GEN_dependences

var vm = avalon.define({
    $id: "vm",

    //region 组件数据
    title_1:require('../bank/img/20160602-12.png'),
    judge1:require('../bank/img/陆路交通公共交通意外险20160602-14.png'),
    judge2:require('../bank/img/陆路交通公共交通意外险20160602-15.png'),
    down:require('../bank/img/陆路交通公共交通意外险20160602-13.png'),
    isTick:false,
    flag0: 1,
    flag1: 1,
    flag2: 1,
    flag3: 1,
    flag4: 1,
    flag5: 1,

    //GEN_properties
    relation: relation,
    relation_item: '',
    //endregion

    //region 主要数据
    name:'',
    ID:'',
    phone:'',
    email:'',
    relationship:'本人',
    Bname:'',
    BID:'',
    text:'',
    //endregion 主要数据

    //region 主逻辑

    //endregion 主逻辑
    tick: function () {
        var that = this;
        that.isTick = !that.isTick;
    },
    //region 组件逻辑



    //GEN_actions

    //endregion
    anyFuncti: function () {
        var that = this;
        var data = {
            name: that.name,
            phone: that.phone,
            ID: that.ID,
            email: that.email,
            Bname:that.Bname,
            BID:that.BID,
            relationship:that.relationship,
        };
        localStorage.setItem("name",this.name);
        localStorage.setItem("phone",this.phone);
        localStorage.setItem("ID",this.ID);
        localStorage.setItem("email",this.email);
        localStorage.setItem("Bname",this.Bname);
        localStorage.setItem("BID",this.BID);
        localStorage.setItem("relationship",this.relationship);
        service.postToServer(data);
        if(this.flag0 == 1 ||this.flag1 == 1 ||this.flag2 == 1 ||this.flag3 == 1 ||this.flag4 == 1 ||this.flag5 == 1)
        {
            alert("请将信息补充完全！");
        }
        else if (this.isTick == true){
            alert("请同意告知！");
        }
        else {
            window.location.href = 'akg-verify.html';
        }

    },
    //region 校验逻辑

    //endregion

    //region 数据监听
    bindListeners: function () {
        var that = this;
        $("#phone").change(function () {
            var Mlength = $("#phone").val().length;
            if (Mlength != 11)
            {
                that.flag0 = 1;
                alert("手机号需要输入11位！");
                $("#phone_div").css("border","1px solid red");
            }
            else
            {
                that.flag0 = 0;
                $("#phone_div").css("border","0");
            }

        });
        $("#ID").change(function () {
            var Nlength = $("#ID").val().length;
            if (Nlength != 18)
            {
                that.flag1 = 1;
                alert("身份证件号需要18位！");
                $("#ID_div").css("border","1px solid red");
            }
            else
            {
                that.flag1 = 0;
                $("#ID_div").css("border","0");
            }
        });
        $("#email").change(function () {
            var str = $("#email").val();
            if (str.indexOf("@") == -1 || str.substring(str.length-4).indexOf(".") == -1)
            {
                that.flag2 = 1;
                alert("邮箱格式错误！");
                $("#email_div").css("border","1px solid red");
            }
            else
            {
                that.flag2 = 0;
                $("#email_div").css("border","0");
            }

        });
        $("#name").change(function () {
            var Nlength = $("#name").val().length;
            if (Nlength < 1)
            {
                that.flag3 = 1;
                alert("请输入姓名！");
                $("#name_div").css("border","1px solid red");
            }
            else
            {
                that.flag3 = 0;
                $("#name_div").css("border","0");
            }

        });
        $("#BID").change(function () {
            var Nlength = $("#BID").val().length;
            if (Nlength != 18)
            {
                that.flag4 = 1;
                alert("身份证件号需要18位！");
                $("#BID_div").css("border","1px solid red");
            }
            else
            {
                that.flag4 = 0;
                $("#BID_div").css("border","0");
            }

        });
        $("#Bname").change(function () {
            var Nlength = $("#Bname").val().length;
            if (Nlength < 1)
            {
                that.flag5 = 1;
                alert("请输入姓名！");
                $("#Bname_div").css("border","1px solid red");
            }
            else
            {
                that.flag5 = 0;
                $("#Bname_div").css("border","0");
            }

        });
        //GEN_listeners
    }


    //endregion 数据监听

});

vm.bindListeners();
$(document).ready(function () {
    $("#age").click(function () {
        $('#select0').modal("show");
        $(".age li:last").css("border-bottom","0");
        $(".age li:first").css({"background-color":"#5AB64B","color":"white"});
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
            vm.relationship = "本人";
            x = document.getElementById("ff");
            x.innerHTML = "本人";
        });
        $(".age li:eq(2)").click(function () {
            vm.relationship = "父子";
            x = document.getElementById("ff");
            x.innerHTML = "父子";
            // var that = this;
            // var data = {
            //     relationship:that.relationship,
            // }
            // localStorage.setItem("relationship",this.relationship);
            // service.postToServer(data);
        });
        $(".age li:eq(3)").click(function () {
            vm.relationship = "父女";
            x = document.getElementById("ff");
            x.innerHTML = "父女";
            // var that = this;
            // var data = {
            //     relationship:that.relationship,
            // }
            // localStorage.setItem("relationship",this.relationship);
            // service.postToServer(data);
        });
        $(".age li:eq(4)").click(function () {
            vm.relationship = "母子";
            x = document.getElementById("ff");
            x.innerHTML = "母子";
        });
        $(".age li:eq(5)").click(function () {
            vm.relationship = "母女";
            x = document.getElementById("ff");
            x.innerHTML = "母女";
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
        $(".age li:eq(4)").mouseover(function () {
            $(".age li:eq(4)").css({"background-color":"#5AB64B","color":"white"});
        });
        $(".age li:eq(4)").mouseout(function () {
            $(".age li:eq(4)").css({"background-color":"#ffffff","color":"#575761"});
        });
    });
});
// vm.relationship = localStorage.getItem('relationship');

//GEN_run
