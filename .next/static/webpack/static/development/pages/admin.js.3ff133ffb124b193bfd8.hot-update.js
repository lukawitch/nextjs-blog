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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      subtitle = _useState[0],
      setSubTitle = _useState[1];

  var adminInfo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_admin__WEBPACK_IMPORTED_MODULE_1__["adminContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    adminInfo.updateSubtitle[number.number - 1] = number.subtitle;
    adminInfo.updateContents[number.number - 1] = number.contents;
    console.log(adminInfo.updateSubtitle[number.number - 1]);
  }, []);
  console.log(number);

  var handleUpdateTitle = function handleUpdateTitle(e) {
    adminInfo.updateSubtitle[number.number - 1] = e.target.value;
  };

  var handleUpdateContents = function handleUpdateContents(e) {
    adminInfo.updateContents[number.number - 1] = e.target.value;
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, number.number, " ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 23
    }
  }), number.subtitle, " ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }), number.contents, adminInfo.updateSubtitle[number.number - 1] === "" ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("form", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }), "\uC81C\uBAA9", " ", __jsx("input", {
    type: "text",
    value: adminInfo.updateSubtitle[number.number - 1],
    onChange: handleUpdateTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }), "\uB0B4\uC6A9", __jsx("input", {
    type: "text",
    value: adminInfo.updateContents[number.number - 1],
    onChange: handleUpdateContents,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (showContents);

/***/ })

})
//# sourceMappingURL=admin.js.3ff133ffb124b193bfd8.hot-update.js.map