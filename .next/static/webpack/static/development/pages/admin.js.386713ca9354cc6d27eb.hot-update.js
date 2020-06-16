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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      array = _useState2[0],
      setArray = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    adminInfo.getTable();
    setArray(adminInfo.dbTable);
    console.log(array);
    console.log(adminInfo.dbTable);
  }, [adminInfo.dbTableData]);

  var handleChangeName = function handleChangeName(e) {
    //adminInfo.dbName = e.target.value;
    setdbName(e.target.value);
  };

  var getDBName = function getDBName(e) {
    setdbName(e);
    adminInfo.dbName = e;
    adminInfo.getTableData();
    setArray(adminInfo.dbTableData);
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
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx("form", {
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, "\uCEE8\uD150\uCE20\uC774\uB984( \uD55C\uAE00or\uC601\uC5B4\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694(ex)\uD638\uAD6C,\uC774\uC0C1\uD615)) ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 43
    }
  }), __jsx("input", {
    type: "text",
    value: dbName,
    onChange: handleChangeName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }), "\uC694\uC18C\uC81C\uBAA9", __jsx("input", {
    type: "text",
    value: adminInfo.subtitle,
    onChange: handleChangeSubtitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
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
      lineNumber: 52,
      columnNumber: 9
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }), __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
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
        lineNumber: 67,
        columnNumber: 15
      }
    }, " ", contents.num, " ", contents.name), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 15
      }
    }));
  })), adminInfo.dbTableData === {} ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, adminInfo.dbTableData.map(function (contents, num) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_showContents__WEBPACK_IMPORTED_MODULE_3__["default"], {
      number: contents.number,
      subtitle: contents.subtitle,
      contents: contents.contents,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 15
      }
    }), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 15
      }
    }));
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (createTable);

/***/ })

})
//# sourceMappingURL=admin.js.386713ca9354cc6d27eb.hot-update.js.map