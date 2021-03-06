webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./component/admin/createTable.js":
/*!****************************************!*\
  !*** ./component/admin/createTable.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/admin */ "./context/admin.js");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/dist/mobxreactlite.esm.js");
/* harmony import */ var _showContents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showContents */ "./component/admin/showContents.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\MSI\\Desktop\\sajubaju\\component\\admin\\createTable.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var createTable = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["observer"])(function () {
  var adminInfo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_admin__WEBPACK_IMPORTED_MODULE_1__["adminContext"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      dbName = _useState[0],
      setdbName = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    adminInfo.getTable();
    console.log(adminInfo.dbTable);
  }, []);

  var handleChangeName = function handleChangeName(e) {
    //adminInfo.dbName = e.target.value;
    setdbName(e.target.value);
  };

  var getDBName = function getDBName(e) {
    setdbName(e);
    adminInfo.dbName = e;
    adminInfo.getTableData();
  };

  var handleChangeSubtitle = function handleChangeSubtitle(e) {
    adminInfo.subtitle = e.target.value;
  };

  var handleChangeContents = function handleChangeContents(e) {
    adminInfo.contents = e.target.value;
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    adminInfo.dbName = dbName;
    adminInfo.num = adminInfo.dbTable.length + 1;
    adminInfo.searchTable(); //adminInfo.createTable();
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx("form", {
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, "\uCEE8\uD150\uCE20\uC774\uB984( \uD55C\uAE00or\uC601\uC5B4\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694(ex)\uD638\uAD6C,\uC774\uC0C1\uD615)) ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 43
    }
  }), __jsx("input", {
    type: "text",
    value: dbName,
    onChange: handleChangeName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }), "\uC694\uC18C\uC81C\uBAA9", __jsx("input", {
    type: "text",
    value: adminInfo.subtitle,
    onChange: handleChangeSubtitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }), "\uC694\uC18C\uB0B4\uC6A9", __jsx("textarea", {
    value: adminInfo.contents,
    onChange: handleChangeContents,
    rows: "4",
    cols: "50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }), __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, "\uB9CC\uB4E4\uAE30")), adminInfo.dbTable === "" ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, adminInfo.dbTable.map(function (contents, num) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      onClick: function onClick() {
        return getDBName(contents.name);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 15
      }
    }, " ", contents.num, " ", contents.name), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 15
      }
    }));
  })), adminInfo.dbTableData === "" ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, adminInfo.dbTableData.map(function (contents, num) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_showContents__WEBPACK_IMPORTED_MODULE_3__["default"], {
      number: contents.number,
      subtitle: contents.subtitle,
      contents: contents.contents,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 15
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 15
      }
    }, " ", contents.number, " ", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 35
      }
    }), contents.subtitle, " ", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 37
      }
    }), contents.contents), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 15
      }
    }));
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (createTable);

/***/ }),

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
var _this = undefined,
    _jsxFileName = "C:\\Users\\MSI\\Desktop\\sajubaju\\component\\admin\\showContents.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var showContents = function showContents(number, subtitle, contents) {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, number, " ", subtitle, " ", contents);
};

/* harmony default export */ __webpack_exports__["default"] = (showContents);

/***/ })

})
//# sourceMappingURL=admin.js.bb146ea629f2cbfd3c27.hot-update.js.map