webpackJsonp([8],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(81);
	__webpack_require__(88);
	__webpack_require__(90)



/***/ }),

/***/ 53:
/***/ (function(module, exports) {

	//北京、上海、广东、江苏、浙江、天津、山东、四川、重庆、陕西、辽宁、湖南、湖北、河南、江西
	var provinces = [
	    {"id": "11", "name": "北京市"},
	    {"id": "31", "name": "上海市"},
	    {"id": "44", "name": "广东省"},
	    {"id": "32", "name": "江苏省"},
	    {"id": "33", "name": "浙江省"},
	    {"id": "12", "name": "天津市"},
	    {"id": "37", "name": "山东省"},
	    {"id": "51", "name": "四川省"},
	    {"id": "50", "name": "重庆市"},
	    {"id": "61", "name": "陕西省"},
	    {"id": "21", "name": "辽宁省"},
	    {"id": "43", "name": "湖南省"},
	    {"id": "42", "name": "湖北省"},
	    {"id": "41", "name": "河南省"},
	    {"id": "36", "name": "江西省"}];
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

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(avalon, $) {var commonService = __webpack_require__(24);
	var service = __webpack_require__(82);


	var career_dic_array = __webpack_require__(53);


	//GEN_dependences

	var vm = avalon.define({
	    $id: "vm",
	    img: __webpack_require__(83),
	    img_button: __webpack_require__(84),
	    check_0: __webpack_require__(85),
	    check_1: __webpack_require__(86),
	    cbb_btn: __webpack_require__(87),
	    name: '',
	    mobile: '',
	    number: '',


	    isTick: false,
	    Mlength: 0,
	    Nlength: 0,

	    //region 组件数据

	    career_candidate_select_array: career_dic_array,
	    career_selected_item: '',

	    anyFuncti: function () {
	        if (vm.isTick == false)
	            alert("请同意规则！");
	        else if (Mlength != 11)
	            alert("电话号码需要输入11位！");
	        else if (Nlength != 18)
	            alert("身份证需要输入18位！");
	        else {
	            var that = this;
	            var data = {
	                name: that.name,
	                mobile: that.mobile,
	                number: that.number,
	                career_dic_array: that.career_selected_item,
	            };
	            service.postToServer(data);
	        }

	    },
	    tick: function () {
	        var that = this;
	        that.isTick = !that.isTick;
	    },

	    //endregion 数据监听
	    bindListeners: function () {


	        $("#mobile_input").change(function () {
	            Mlength = $("#mobile_input").val().length;
	            if (Mlength != 11)
	                alert("输入错误！");
	        });
	        $("#number_input").change(function () {
	            Nlength = $("#number_input").val().length;
	            if (Nlength != 18)
	                alert("输入错误！");
	        });


	    }
	});

	vm.bindListeners();
	//GEN_run

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23), __webpack_require__(2)))

/***/ }),

/***/ 82:
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

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/img/3e3f782a3e74ba8334ba0ae44178b955.png";

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/img/4ce4811c47e0c1d6aef1eb86c48eab7a.png";

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Njk0MTU2MzZGRjNFMTFFN0E3M0Y5N0E2RkRBMjRCNTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Njk0MTU2MzdGRjNFMTFFN0E3M0Y5N0E2RkRBMjRCNTciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2OTQxNTYzNEZGM0UxMUU3QTczRjk3QTZGREEyNEI1NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2OTQxNTYzNUZGM0UxMUU3QTczRjk3QTZGREEyNEI1NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlQuHKAAAANYSURBVHjarJfZS1RxFMfvvV61UnOakMrAFKWNNrKCemingoI2SlqgINqeeuwv6bWHCg2CaM+isMixfVOympwSsyijzFHScWacvge+F35Nd5vlwAeZu33vOfds6l3af1YMTKBruVsKJMAoKAJrwQlQB1rNtIvHg2mgPA/icn8SDIJvIADmgZmgRo5Z4vJ3CljMCyqAobx9NlZAj0U4DGaBoxQWC5gUXg52MRxy8VcwpniQjSX57BqGew6o5rkIaJGT9WA7WAQegWegmzfnIv4HTAUHwCowQTl+DzSJ+FZQC26DU6A/E4XalP1Xieh6MZ9bx1yyrAe0gZfyXZcx1BczFfaw1eAYI2pFbwR8BF8kH8Tz6eAJeJcPRXgsQhvBcbCOpSs2BD7QQTlWaLL+kkqC5SIsz1sCDoP1ivAYPW6jnpRygZFjUqnCBkN8BKxREkyjcAvoZOjlBQwjj994AdjPBJ6kHI+Da+ACGKCwbjUXOytls1nKT9IK2l28lozex5INKqektT4GV8Eb1nmR1bicxKUxHAINfPMmcBp08LcqXEXhnaAq7Tm9oBG84u9/Iu0U9hn0uoye7AUnwYq0/JAmsg0cVNqmpmT3A9CMXvBLsjtdz3TpTj8ZNpPfcDOzdyK4DkrADvbraptnSLjPsFvaJrWTeJhJMhtU8lgJX8BgNKRc9oC5NvdLF7sinsNrx8HkJC4d6CZYScFC5XrpXPPZMoM29w6xW96FcMytPEyXJeATy6OSLdiyMmJn0kxe0+uwV2261bm89R02hwGftd7N7H4Or+O5iIv1cdqFfAgP8mUvQzjq501NH9eEWHoLOYSc7D64xEXEl/lprzF2uFssPzv7zOoIuWV3NuJWpzoP3tucG5ZQM7ujWgZm+JxoIvCQ5dejLJXD7GJnIdzlc5XWvAaL5lC/jex60scng6eMSHsG63RKHSyJDOa5zOVz4C0nn/zugNcjPpPbWlxkpU6ZTKJS7uo/fH7/Xq8F0sbKuT7HWBFxg+NOQriJQyPvhrE7jutVPZdV2RdHDQ56jXvXbo9azka4ggOogQkqefJdStJkFge4/mzgOtTv99+kiO6ZLmWc9VFWywsIJ6wkEKEb4DfYwiUimGElaC6Dpo+LY7P0AnVO/BVgAPfI6F+ROKiUAAAAAElFTkSuQmCC"

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/img/d1aea9ebcb076d3bf04055309f8cdc19.png";

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAA9CAYAAAAUPs+7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkUwMzE3MTdGRjNEMTFFN0E3M0Y5N0E2RkRBMjRCNTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkUwMzE3MThGRjNEMTFFN0E3M0Y5N0E2RkRBMjRCNTciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCRTAzMTcxNUZGM0QxMUU3QTczRjk3QTZGREEyNEI1NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCRTAzMTcxNkZGM0QxMUU3QTczRjk3QTZGREEyNEI1NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuD4em0AAAX0SURBVHja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"

/***/ }),

/***/ 88:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 90:
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

/***/ })

});