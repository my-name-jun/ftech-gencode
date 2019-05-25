webpackJsonp([13],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(107);
	__webpack_require__(116);
	__webpack_require__(30);



/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/**
	 * Created by gthowe on 17/3/20.
	 */
	/**
	 * 基于iphone375宽度的基准做制作，把body的font-size按比例设置成约等于10px
	 * 设置字体大小用单位em  1em=10px,1.4em=14px....以此类推
	 * @type {string}
	 */


	if (document.body.clientWidth < 750) {
	    document.getElementsByTagName("body")[0].style.fontSize = document.body.clientWidth / 40 + 'px';
	} else if (document.body.clientWidth > 750 && document.body.clientWidth < 970) {
	    document.getElementsByTagName("body")[0].style.fontSize = document.body.clientWidth / 70 + 'px';
	    // document.getElementsByTagName("body")[0].style.width = "750px";
	    document.getElementsByTagName("body")[0].style.margin = "0 auto";
	} else {
	    document.getElementsByTagName("body")[0].style.fontSize = document.body.clientWidth / 120 + 'px';
	    // document.getElementsByTagName("body")[0].style.width = "970px";
	    document.getElementsByTagName("body")[0].style.margin = "0 auto";
	}

	$(window).resize(function () {
	    if (document.body.clientWidth < 750) {
	        document.getElementsByTagName("body")[0].style.fontSize = document.body.clientWidth / 40 + 'px';
	    } else if (document.body.clientWidth > 750 && document.body.clientWidth < 970) {
	        document.getElementsByTagName("body")[0].style.fontSize = document.body.clientWidth / 70 + 'px';
	        // document.getElementsByTagName("body")[0].style.width = "750px";
	        document.getElementsByTagName("body")[0].style.margin = "0 auto";
	    } else {
	        document.getElementsByTagName("body")[0].style.fontSize = document.body.clientWidth / 120 + 'px';
	        // document.getElementsByTagName("body")[0].style.width = "970px";
	        document.getElementsByTagName("body")[0].style.margin = "0 auto";
	    }

	})



	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAg4AAABTCAYAAAD3NI85AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUY1QzZEQzE4MjUxMTFFOEFEQ0RFQUU0RDVBMjIwQjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUY1QzZEQzI4MjUxMTFFOEFEQ0RFQUU0RDVBMjIwQjMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFRjVDNkRCRjgyNTExMUU4QURDREVBRTRENUEyMjBCMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFRjVDNkRDMDgyNTExMUU4QURDREVBRTRENUEyMjBCMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhKMHxUAAAeLSURBVHja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"

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAkCAYAAADo6zjiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Mzg0QTAxMUY4MjUxMTFFOEFEQ0RFQUU0RDVBMjIwQjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Mzg0QTAxMjA4MjUxMTFFOEFEQ0RFQUU0RDVBMjIwQjMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyRkYwQUY0MDgyNTExMUU4QURDREVBRTRENUEyMjBCMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozODRBMDExRTgyNTExMUU4QURDREVBRTRENUEyMjBCMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PojAY5wAAAFKSURBVHjaYnTc1PKfgb7gDRCvBuJ6IH7NAhX8CsRn6GA5ExBrAXEmELsDsSXMAXeA2IFOIcABxNOBOAGIO5gY6A9+AHEWEH8G4uCBcAAIfAfie0DMN1AOQEkUuMBKIP5PJfwTiI2wWcKCxwGHgVicSh79AsQvSHXAFCgesCgY8DRAF4AvCrqAOIyK2c4PiG8PqRAog+LRRDiaC0ZzwWgiHHXAgCVCagAZIBZBE3sAxB9o7QBuIF4DxB5Y5K4BsTatHVAKtfwiEF9AkztEjygwgNIRQHxjIBPhj8GaC6KBWBeIfzMNkOWLgPgvEIcwDaTlQLyJCZonlYGYk4oW/UWjsVoOSwPrgJgHiKdBu87UALVAHAPEj/FZDsuGldCxAVB/3RdaUPyjkkNSgZgRiG2wWQ5zwCsgNgfiJiAOBWJbGsT9b2yWgwBAgAEAEkxV3+pzQK0AAAAASUVORK5CYII="

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjgwMjQ3ODc4MjUxMTFFOEFEQ0RFQUU0RDVBMjIwQjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjgwMjQ3ODg4MjUxMTFFOEFEQ0RFQUU0RDVBMjIwQjMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyODAyNDc4NTgyNTExMUU4QURDREVBRTRENUEyMjBCMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyODAyNDc4NjgyNTExMUU4QURDREVBRTRENUEyMjBCMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnPsu2QAAAO9SURBVHjaxJhbSBRRGMd33Qk2t9WCItYgKKikh8JCoiAwQ3qIrlJpZKJ0wSAIFvJBeomConwIo0jCKCNDkNSeIro8ZWgX80XLsBDSjKLa1l2zTft/8Z84ndydmVXzwA/XM+ec7z9zzneZca9rPuFKoi0Cy8BC4GPfIOgBHaDb7kL3N1X8/ms4MJ4JgiCf80bBdDCN13+AKHCDGGgAlaDLzuIpNsYEwD3QCkr5BEZAGvjIu+/m7zRe83FsK+cGxiukCrwGuTQwAM6DPN55BlhMMtiXxzEDnJPLNaqSEeIFd0Ax/+8De2lMtqctwZptHJPBOX3sL+aaXrtCZOBDkAN+gnowDzQncaibObeea+Vwba8dIU0giwevGtxwjb/Vcq0o126yEiL7uBpEwCUeOrmblniP1EZrogct4ZoR2qiKJyTAk+4BjaAcfOYBXAEeJCFGRKznGm+5ZiNtlKrepAq5DlLBF1DCvmO8i2gSYkwRMW7vEfaX0EYqbf4lRIJVNvgKyrQFy5MQo4s4pF0vo63s3NsnM1UhQZ6HSBzv0MXUJhBxzkKE6U0R2gyqQvI5sU6b4AezyCmKkTmflH6dIT4xEVGh9Pu1tetoU2y73Eh6ksCeMgrmKcHqAtjH/olocgOXlSckR+Eu+1cazKKSwNK1iOlnRrVqXs7/bmOsX4vAYjMkGgymcsmi/dqkIvq71cG8RXfcbjFuiPFIbWJztmgweGAklYfHmNxisXiW8lvixBuH2xVmLPGluKa2jagHaJBFzYwpEJJOz4kaLO+icYqX+dx/u21BgmuSfXu1vrngm2gwWGO6zUineI64WgE9IlFz8xF32Bh3kyHBdN8Qd+WFwTIvxkNbYFH0TGTbwXwTRgH9yiyeG5gNC82QS+XHLbZmJnOPh/HI5WBripRM/6eKl2p7FxVuVvJNrwP3dTlw342MXeK+Z9Rc06VEuov/YVuqaesZtqVTr0f2MCPK474yiSJqmATF1u6xCqN+DpK93ApOT4KINWAbbdSoaUWPrIcZ1uWsHJwEMY/5xB/RVsIqfgt4zsN0wGKbRm0KWMv65AMYVl5TEwoZUt4/xL12gnf0Jr218wWqJ47HyJxOemEhX0kjyou75ZueiNkArvJ/eWu7RqOVjIpmWwqW87eH12TMe87JZFR9Cc4ykK36J+za+CwRYLWdzTuJMTel87CFaUjudg7Dtk9JqE/AUf4d12eJfhbD+meJEIsaM1kOs8/D96FGBitb30qcfB+RoLefjPWhJsTiqJ1nxlH7JcAAj6j2KHVLuGUAAAAASUVORK5CYII="

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(avalon, $) {var commonService = __webpack_require__(24);
	var service = __webpack_require__(108);

	var career_dic_array = __webpack_require__(109);
	var accident_hurt = __webpack_require__(110);
	var subsidy = __webpack_require__(111);
	//GEN_dependences

	var vm = avalon.define({
	    $id: "vm",

	    //region 组件数据
	    headImg:__webpack_require__(112),
	    tbmain_icon0:__webpack_require__(36),
	    tbmain_icon1:__webpack_require__(113),
	    tbmain_icon2:__webpack_require__(114),
	    career_candidate_select_array: career_dic_array,
	    career_selected_item_1: '',
	    career_selected_item_2: '',
	    career_selected_item_3: '',
	    accident_hurt: accident_hurt,
	    accident_hurt_item: '',
	    subsidy: subsidy,
	    subsidy_item: '',
	    tbmain_cbb_btn:__webpack_require__(115),
	    tbmain_icon3:__webpack_require__(38),
	    tbfill_next_sel_btn:__webpack_require__(35),
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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23), __webpack_require__(2)))

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

	var service = {
	    interface: __webpack_require__(25),


	    postToServer: function (data) {
	        var that = this;
	        this.interface.post('tt', data);

	    },

	        //GEN_services
	};

	module.exports = service;

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

	//北京、上海、广东、江苏、浙江、天津、山东、四川、重庆、陕西、辽宁、湖南、湖北、河南、江西
	var provinces = [
	    {"id": "10万", "name": "10万"},
	    {"id": "20万", "name": "20万"},
	    {"id": "30万", "name": "30万"},
	    {"id": "40万", "name": "40万"},
	    {"id": "50万", "name": "50万"},
	    ];
	module.exports = provinces;
	// var provinces = [{"id": "11", "name": "北京市"}, {"id": "31", "name": "上海市"}, {"id": "44", "name": "广东省"}, {
	//     "id": "33",
	//     "name": "浙江省"
	// }, {"id": "32", "name": "江苏省"}, {"id": "51", "name": "四川省"}, {"id": "37", "name": "山东省"},
	//     {"id": "21", "name": "辽宁省"}, {"id": "42", "name": "湖北省"}, {"id": "50", "name": "重庆市"}, {"id": "12", "name": "天津市"},
	//     {"id": "61", "name": "陕西省"}, {"id": "34", "name": "安徽省"}, {"id": "43", "name": "湖南省"}, {"id": "41", "name": "河南省"}, {
	//     "id": "13",
	//     "name": "河北省"
	// }, {"id": "14", "name": "山西省"}, {"id": "22", "name": "吉林省"}, {"id": "23", "name": "黑龙江省"}, {
	//     "id": "35",
	//     "name": "福建省"
	// }, {"id": "36", "name": "江西省"}, {"id": "15", "name": "内蒙古自治区"}, {"id": "45", "name": "广西壮族自治区"}, {
	//     "id": "46",
	//     "name": "海南省"
	// }, {"id": "52", "name": "贵州省"}, {"id": "53", "name": "云南省"}, {"id": "54", "name": "西藏自治区"}, {
	//     "id": "62",
	//     "name": "甘肃省"
	// }, {"id": "63", "name": "青海省"}, {"id": "64", "name": "宁夏回族自治区"}, {"id": "65", "name": "新疆维吾尔自治区"}, {
	//     "id": "MAC",
	//     "name": "中国澳门"
	// }, {"id": "HKG", "name": "中国香港"}, {"id": "TWN", "name": "中国台湾"}];
	// module.exports = provinces;




/***/ }),

/***/ 110:
/***/ (function(module, exports) {

	//北京、上海、广东、江苏、浙江、天津、山东、四川、重庆、陕西、辽宁、湖南、湖北、河南、江西
	var provinces = [
	    {"id": "1000元", "name": "1000元"},
	    {"id": "2000元", "name": "2000元"},
	    {"id": "3000元", "name": "3000元"},
	    {"id": "4000元", "name": "4000元"},
	    {"id": "5000元", "name": "5000元"},
	    ];
	module.exports = provinces;
	// var provinces = [{"id": "11", "name": "北京市"}, {"id": "31", "name": "上海市"}, {"id": "44", "name": "广东省"}, {
	//     "id": "33",
	//     "name": "浙江省"
	// }, {"id": "32", "name": "江苏省"}, {"id": "51", "name": "四川省"}, {"id": "37", "name": "山东省"},
	//     {"id": "21", "name": "辽宁省"}, {"id": "42", "name": "湖北省"}, {"id": "50", "name": "重庆市"}, {"id": "12", "name": "天津市"},
	//     {"id": "61", "name": "陕西省"}, {"id": "34", "name": "安徽省"}, {"id": "43", "name": "湖南省"}, {"id": "41", "name": "河南省"}, {
	//     "id": "13",
	//     "name": "河北省"
	// }, {"id": "14", "name": "山西省"}, {"id": "22", "name": "吉林省"}, {"id": "23", "name": "黑龙江省"}, {
	//     "id": "35",
	//     "name": "福建省"
	// }, {"id": "36", "name": "江西省"}, {"id": "15", "name": "内蒙古自治区"}, {"id": "45", "name": "广西壮族自治区"}, {
	//     "id": "46",
	//     "name": "海南省"
	// }, {"id": "52", "name": "贵州省"}, {"id": "53", "name": "云南省"}, {"id": "54", "name": "西藏自治区"}, {
	//     "id": "62",
	//     "name": "甘肃省"
	// }, {"id": "63", "name": "青海省"}, {"id": "64", "name": "宁夏回族自治区"}, {"id": "65", "name": "新疆维吾尔自治区"}, {
	//     "id": "MAC",
	//     "name": "中国澳门"
	// }, {"id": "HKG", "name": "中国香港"}, {"id": "TWN", "name": "中国台湾"}];
	// module.exports = provinces;




/***/ }),

/***/ 111:
/***/ (function(module, exports) {

	//北京、上海、广东、江苏、浙江、天津、山东、四川、重庆、陕西、辽宁、湖南、湖北、河南、江西
	var provinces = [
	    {"id": "100元/天", "name": "100元/天"},
	    {"id": "200元/天", "name": "200元/天"},
	    {"id": "300元/天", "name": "300元/天"},
	    {"id": "400元/天", "name": "400元/天"},
	    {"id": "500元/天", "name": "500元/天"},
	    ];
	module.exports = provinces;
	// var provinces = [{"id": "11", "name": "北京市"}, {"id": "31", "name": "上海市"}, {"id": "44", "name": "广东省"}, {
	//     "id": "33",
	//     "name": "浙江省"
	// }, {"id": "32", "name": "江苏省"}, {"id": "51", "name": "四川省"}, {"id": "37", "name": "山东省"},
	//     {"id": "21", "name": "辽宁省"}, {"id": "42", "name": "湖北省"}, {"id": "50", "name": "重庆市"}, {"id": "12", "name": "天津市"},
	//     {"id": "61", "name": "陕西省"}, {"id": "34", "name": "安徽省"}, {"id": "43", "name": "湖南省"}, {"id": "41", "name": "河南省"}, {
	//     "id": "13",
	//     "name": "河北省"
	// }, {"id": "14", "name": "山西省"}, {"id": "22", "name": "吉林省"}, {"id": "23", "name": "黑龙江省"}, {
	//     "id": "35",
	//     "name": "福建省"
	// }, {"id": "36", "name": "江西省"}, {"id": "15", "name": "内蒙古自治区"}, {"id": "45", "name": "广西壮族自治区"}, {
	//     "id": "46",
	//     "name": "海南省"
	// }, {"id": "52", "name": "贵州省"}, {"id": "53", "name": "云南省"}, {"id": "54", "name": "西藏自治区"}, {
	//     "id": "62",
	//     "name": "甘肃省"
	// }, {"id": "63", "name": "青海省"}, {"id": "64", "name": "宁夏回族自治区"}, {"id": "65", "name": "新疆维吾尔自治区"}, {
	//     "id": "MAC",
	//     "name": "中国澳门"
	// }, {"id": "HKG", "name": "中国香港"}, {"id": "TWN", "name": "中国台湾"}];
	// module.exports = provinces;




/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/img/31dfa74f65273f4d8c4d24e64ced4102.png";

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAiCAYAAAA+stv/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkZGMEFGM0E4MjUxMTFFOEFEQ0RFQUU0RDVBMjIwQjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkZGMEFGM0I4MjUxMTFFOEFEQ0RFQUU0RDVBMjIwQjMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyRkYwQUYzODgyNTExMUU4QURDREVBRTRENUEyMjBCMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyRkYwQUYzOTgyNTExMUU4QURDREVBRTRENUEyMjBCMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PopSKPMAAAGdSURBVHjaYnTc1MIwAMAPiJcA8XGWAbA8FIiXAjErEFvCHCAAxBlAbADEHFSw5CAQ92MRjwbiRUDMBMS/gTgG5AB5ID4ExHJU9KU/1Jev8FgeAsSbQA6YiGT5YyB+RwUHnADi14QsB0mAHOAJVbQeiIOB+D+V4xzZ8u9Qy7fBJEEOYIOyL9HBch8g3oesgImGqZ2g5bR0QBIxltPKAZlAPBeH5SpQPhOtHACyfBqUjc3nR4B4MxAn08IBhCwHAXEoLY3PAUxQV37Ag0F5PBVJTySS5Z+A2AtXnKMDbHUBqFj2BmJGIkq72VC2B5LlbkB8kthgw+YAUEkYDsTWePSBSrM5SPwaIH4CxKuB+AIp8YarNlwNxcQCUBFeTU7CoWVBNOoAitIAqHFiQWF1PINcBwgD8XQKPRYPxGvR2gQkZUNQRWJPYZPsLbkh8B/qg9FcMOqAUQeMPAfw0NguIbT2BLwgugLEOtA23S+0/hw165wAJP5FZIk6IF4HxFxAXEmHUD+G3DVjgvYJg4D4Mo0t/gzEs6B90X8wQYAAAwBSiGBs5pdgvgAAAABJRU5ErkJggg=="

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAlCAYAAAAqXEs9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkZGMEFGM0U4MjUxMTFFOEFEQ0RFQUU0RDVBMjIwQjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkZGMEFGM0Y4MjUxMTFFOEFEQ0RFQUU0RDVBMjIwQjMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyRkYwQUYzQzgyNTExMUU4QURDREVBRTRENUEyMjBCMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyRkYwQUYzRDgyNTExMUU4QURDREVBRTRENUEyMjBCMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgRcxxIAAAIOSURBVHja3JhPKMNhGMeHmZBauVCOlMOiJC4OTKKYP7nMzf+i/MnFYXLQdpAWh12WJhxWDqIpB2U5cBCKJPInJKSIQtmY+b56VrO2tT/v70+e+vR7e/f8er+/53ne3/v8llDhMHoV4tg3OAIWMA1+13XqDH+clHR9B+cCC0oBGmAFpaAjmJNP0C4oFyFK+cAB2sEaWAh0SFSIayegmcZ9wRzEFsTsEJyCIrkIYnYPUuUkKKSFEmSmbcmT8UgEKUPM34EDzg9/G48gMyGblMmuhiSzUCnrAdUc1/HSGbYeq6AmUMX54Y/jEVQPsjhH6CaelH2Aq/9e1GowGmuEeJsKLAIteJKDICuJYTYJHqVMGetRW8EZ6AXJIFuqCLUAI6WpjvqgXDDkt/6XWBEqA7PADRpJDLNhsEHjCbFSxqKwTMXcBjb9fmMR0dPpP6hdMemFFpQJVuk6AuxBfB6ot/4ENojSCCVIRZHJA3PAFMZ3G/SDNLAEUWohinqGascJusP4TfmNnynF8xDVwFNQBu0q36eOO4zvQJA5HUsxT0GvoARcg5cI/C9AZ8Cch3fK9qLwfWPbP/DbXug39Q4dFXF3jLysmP7IiKr98FBByqbJZ61lAciRiyAbpc5Ob1fJvzosdBJXgkuwBVxSCmKHXS0YA12gRoDC3o92l7moLTBQ85TESQyLeDoojPSGHwEGAP7Me+GHcuhTAAAAAElFTkSuQmCC"

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAATCAYAAAAao7T0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkZGMEFGMzY4MjUxMTFFOEFEQ0RFQUU0RDVBMjIwQjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkZGMEFGMzc4MjUxMTFFOEFEQ0RFQUU0RDVBMjIwQjMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyODAyNDc4OTgyNTExMUU4QURDREVBRTRENUEyMjBCMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyODAyNDc4QTgyNTExMUU4QURDREVBRTRENUEyMjBCMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pu/PM3AAAACtSURBVHjaxNVRCoAgDAZg8yQdpW7iW6cKukl4E71JDiSsTKdTN5ji0/8xBadN77MQ4nQNO1cZ16t0y8EMET7/AIxybZkxkK+kH9HCCLI+38jgzjhANwQO8vWIRoIekDdmJOgDiWFGgKKQP0xP0C8khekBSkJymJagLASDaQFCQbAYCggNKcGEINMDUoq5f1dEQDGkBoMBVUFqMSlQNYSCiYFIEComBGkqBOoSYAAgB0csFmP2qQAAAABJRU5ErkJggg=="

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })

});