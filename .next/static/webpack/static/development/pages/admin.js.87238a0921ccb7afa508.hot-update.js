webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./component/admin/showContents.js":
/*!*****************************************!*\
  !*** ./component/admin/showContents.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/admin */ "./context/admin.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\MSI\\Desktop\\sajubaju\\component\\admin\\showContents.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var showContents = function showContents(number) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(number.subtitle),
      subtitle = _useState[0],
      setSubTitle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(number.contents),
      contents = _useState2[0],
      setContents = _useState2[1];

  var adminInfo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_admin__WEBPACK_IMPORTED_MODULE_1__["adminContext"]);
  console.log(number);

  var handleUpdateTitle = function handleUpdateTitle(e) {
    setSubTitle(e.target.value); //adminInfo.updateSubtitle[number.number - 1] = e.target.value;

    console.log(subtitle);
  };

  var handleUpdateContents = function handleUpdateContents(e) {
    setContents(e.target.value); //adminInfo.updateContents[number.number - 1] = e.target.value;
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    adminInfo.updateSubtitle = subtitle;
    adminInfo.updateContents = contents;
    adminInfo.updateTable(number.number); //adminInfo.createTable();
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, number.number, " ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 23
    }
  }), adminInfo.updateSubtitle[number.number - 1] === "" ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("form", {
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }), "\uC81C\uBAA9", " ", __jsx("input", {
    type: "text",
    value: subtitle,
    onChange: handleUpdateTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }), "\uB0B4\uC6A9", __jsx("textarea", {
    value: contents,
    onChange: handleUpdateContents,
    rows: "4",
    cols: "50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }), __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, "\uC218\uC815\uD558\uAE30"))));
};

/* harmony default export */ __webpack_exports__["default"] = (showContents);

/***/ })

})
//# sourceMappingURL=admin.js.87238a0921ccb7afa508.hot-update.js.map