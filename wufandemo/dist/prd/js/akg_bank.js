webpackJsonp([0],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(22);
	__webpack_require__(28);
	__webpack_require__(30);



/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(avalon) {var commonService = __webpack_require__(24);
	var service = __webpack_require__(26);


	//GEN_dependences

	var vm = avalon.define({
	    $id: "vm",

	    //region 组件数据
	    bank_header:__webpack_require__(27),


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


	//GEN_run

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)))

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

	var service = {
	    interface: __webpack_require__(25),

	    
	        

	        //GEN_services
	};

	module.exports = service;

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/img/5ac8c97de737fb858dd2d3f2550bb6c1.png";

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

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

/***/ })

});