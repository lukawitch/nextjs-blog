webpackHotUpdate("static\\development\\pages\\result.js",{

/***/ "./pages/result.js":
/*!*************************!*\
  !*** ./pages/result.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _context_birth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/birth */ "./context/birth.js");
/* harmony import */ var _component_result_result__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/result/result */ "./component/result/result.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _component_result_result_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/result/result.module.css */ "./component/result/result.module.css");
/* harmony import */ var _component_result_result_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_component_result_result_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _component_result_shareButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../component/result/shareButton */ "./component/result/shareButton.js");
/* harmony import */ var _component_result_loadingPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../component/result/loadingPage */ "./component/result/loadingPage.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\MSI\\Desktop\\sajubaju\\pages\\result.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










var resultContents = function resultContents(props) {
  var testValue = 0;
  var BirthInfo = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_birth__WEBPACK_IMPORTED_MODULE_4__["birthContext"]);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      loadingTime = _useState2[0],
      setLoadingTime = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      countNumber = _useState3[0],
      setCountNumber = _useState3[1]; //초기설정


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setCountNumber(props.data[0].goodButton);
    BirthInfo.postGoodOrNot = false;
    var interval = setInterval(function () {
      testValue++;
      setLoadingTime(testValue);
    }, 380);
    setTimeout(function () {
      setLoading(false);
      clearInterval(interval);
    }, 3800);
  }, []); //조아요 버튼 눌렀을때

  var handleChangeGoodOrNot = function handleChangeGoodOrNot(e) {
    BirthInfo.postGoodOrNot = !BirthInfo.postGoodOrNot;
    var value;

    if (BirthInfo.postGoodOrNot === true) {
      value = countNumber + 1;
    } else {
      value = countNumber - 1;
    }

    axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("https://hanstream.gabia.io/goodCount", {
      params: {
        count: value,
        dbName: router.query.dbname
      }
    }).then(function (response) {
      setCountNumber(value);
    }).catch(function (error) {
      console.log(error);
    });
  };

  if (loading) return __jsx(_component_result_loadingPage__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 23
    }
  }); //Layout

  return __jsx(_component_result_result__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _component_result_result_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx("div", {
    class: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/image/" + router.query.dbname + "/" + props.data[0].title + ".png",
    class: "card-img-top",
    alt: "...",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }))), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _component_result_result_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.MoreInfoText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, " \uBCF5\uCC44\uB294 \uD558\uD2B8\uC640 \uACF5\uC720\uB85C! "), __jsx(_component_result_shareButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    num: props.data[0].num,
    dbname: router.query.dbname,
    countNumber: countNumber,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _component_result_result_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CustomInput"], {
    type: "switch",
    id: "exampleCustomSwitch",
    name: "customSwitch",
    label: countNumber + "명이 이테스트를 좋아합니다",
    onChange: handleChangeGoodOrNot,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  })));
};

resultContents.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var query, res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref.query;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("https://hanstream.gabia.io/birth", {
              params: {
                month: query.month,
                day: query.day,
                dbName: query.dbname
              }
            });

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.data;

          case 6:
            data = _context.sent;
            console.log(data);
            console.log("Show data fetched. Count: ".concat(data.length));
            return _context.abrupt("return", {
              data: data
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (resultContents);

/***/ })

})
//# sourceMappingURL=result.js.d552aa1b830b7588cc5d.hot-update.js.map