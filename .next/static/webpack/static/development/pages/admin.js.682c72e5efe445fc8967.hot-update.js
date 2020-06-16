webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./model/admin.js":
/*!************************!*\
  !*** ./model/admin.js ***!
  \************************/
/*! exports provided: admin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "admin", function() { return admin; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/initializerDefineProperty */ "./node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/applyDecoratedDescriptor */ "./node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var _babel_runtime_helpers_esm_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/initializerWarningHelper */ "./node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);








var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp;



var admin = (_class = (_temp = /*#__PURE__*/function () {
  function admin() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, admin);

    Object(_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "dbTable", _descriptor, this);

    Object(_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "dbTableData", _descriptor2, this);

    Object(_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "dbName", _descriptor3, this);

    Object(_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "subtitle", _descriptor4, this);

    Object(_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "updateSubtitle", _descriptor5, this);

    Object(_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "updateContents", _descriptor6, this);

    Object(_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "num", _descriptor7, this);

    Object(_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "tableLength", _descriptor8, this);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(admin, [{
    key: "getTableDataInfo",
    value: function getTableDataInfo() {
      var _this = this;

      console.log();
      return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("https://hanstream.gabia.io/getTableData", {
        params: {
          dbName: "contents_" + this.dbName
        }
      }).then(function (response) {
        console.log(response.data);
        _this.dbTableData = response.data;
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "getTableData",
    value: function () {
      var _getTableData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getTableDataInfo();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getTableData() {
        return _getTableData.apply(this, arguments);
      }

      return getTableData;
    }()
  }, {
    key: "searchTableInfo",
    value: function searchTableInfo() {
      var _this2 = this;

      console.log();
      return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("https://hanstream.gabia.io/searchTable", {
        params: {
          dbName: "contents_" + this.dbName
        }
      }).then(function (response) {
        console.log(response.data);

        if (response.data.length === 0) {
          alert("없는테이블입니다 새로 추가합니다.");

          _this2.createTable();
        } else {
          alert("있는테이블입니다 기존테이블에 데이터를 추가합니다.");

          _this2.getTableLength();
        }
      }).catch(function (error) {
        alert("error");
        console.log(error);
      });
    }
  }, {
    key: "searchTable",
    value: function () {
      var _searchTable = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.searchTableInfo();

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function searchTable() {
        return _searchTable.apply(this, arguments);
      }

      return searchTable;
    }()
  }, {
    key: "createTableInfo",
    value: function createTableInfo() {
      var _this3 = this;

      console.log();
      return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("https://hanstream.gabia.io/adminCreateFile", {
        params: {
          dbName: this.dbName
        }
      }).then(function (response) {
        alert("추가완료했습니다.");
        console.log(response.data);

        _this3.insertTable();
      }).catch(function (error) {
        alert("error");
        console.log(error);
      });
    }
  }, {
    key: "createTable",
    value: function () {
      var _createTable = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.createTableInfo();

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function createTable() {
        return _createTable.apply(this, arguments);
      }

      return createTable;
    }()
  }, {
    key: "updateTableInfo",
    value: function updateTableInfo(num) {
      console.log();
      return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("https://hanstream.gabia.io/updateTableData", {
        params: {
          num: num,
          subtitle: this.updateSubtitle,
          contents: this.updateContents,
          dbName: this.dbName
        }
      }).then(function (response) {
        alert("수정완료했습니다.");
        console.log(response.data);
      }).catch(function (error) {
        alert("error");
        console.log(error);
      });
    }
  }, {
    key: "updateTable",
    value: function () {
      var _updateTable = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(num) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.updateTableInfo(num);

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function updateTable(_x) {
        return _updateTable.apply(this, arguments);
      }

      return updateTable;
    }()
  }, {
    key: "insertTableInfo",
    value: function insertTableInfo() {
      var _this4 = this;

      return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("https://hanstream.gabia.io/insertDBValue", {
        params: {
          num: this.num,
          name: "contents_" + this.dbName
        }
      }).then(function (response) {
        console.log(response.data);

        _this4.getTableLength();
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "insertTable",
    value: function () {
      var _insertTable = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.insertTableInfo();

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function insertTable() {
        return _insertTable.apply(this, arguments);
      }

      return insertTable;
    }()
  }, {
    key: "getTableLengthInfo",
    value: function getTableLengthInfo() {
      var _this5 = this;

      return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("https://hanstream.gabia.io/getTableLength", {
        params: {
          dbName: "contents_" + this.dbName
        }
      }).then(function (response) {
        console.log(response.data[0]);

        if (response.data === null) {
          _this5.tableLength = 0;
        } else {
          _this5.tableLength = response.data[0].number;
        }

        alert(_this5.tableLength);

        _this5.insertValue();
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "getTableLength",
    value: function () {
      var _getTableLength = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.getTableLengthInfo();

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getTableLength() {
        return _getTableLength.apply(this, arguments);
      }

      return getTableLength;
    }()
  }, {
    key: "insertValueInfo",
    value: function insertValueInfo() {
      console.log(this.tableLength + 1);
      return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("https://hanstream.gabia.io/insertValue", {
        params: {
          num: this.tableLength + 1,
          dbName: "contents_" + this.dbName,
          subtitle: this.subtitle,
          contents: this.contents
        }
      }).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "insertValue",
    value: function () {
      var _insertValue = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.insertValueInfo();

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function insertValue() {
        return _insertValue.apply(this, arguments);
      }

      return insertValue;
    }()
  }, {
    key: "getTableInfo",
    value: function getTableInfo() {
      var _this6 = this;

      return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("https://hanstream.gabia.io/adminDBTable", {}).then(function (response) {
        console.log(response.data);
        _this6.dbTable = response.data;

        for (var i = 0; i < response.data.length; i++) {
          var a = response.data[i].name.split("contents_");
          _this6.dbTable[i].name = a[1];
        } // this.dbTable = response.data;

      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "getTable",
    value: function () {
      var _getTable = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.getTableInfo();

              case 2:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getTable() {
        return _getTable.apply(this, arguments);
      }

      return getTable;
    }()
  }]);

  return admin;
}(), _temp), (_descriptor = Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "dbTable", [mobx__WEBPACK_IMPORTED_MODULE_7__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "";
  }
}), _descriptor2 = Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "dbTableData", [mobx__WEBPACK_IMPORTED_MODULE_7__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "";
  }
}), _descriptor3 = Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "dbName", [mobx__WEBPACK_IMPORTED_MODULE_7__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "";
  }
}), _descriptor4 = Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "subtitle", [mobx__WEBPACK_IMPORTED_MODULE_7__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "";
  }
}), _descriptor5 = Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "updateSubtitle", [mobx__WEBPACK_IMPORTED_MODULE_7__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor6 = Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "updateContents", [mobx__WEBPACK_IMPORTED_MODULE_7__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor7 = Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "num", [mobx__WEBPACK_IMPORTED_MODULE_7__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor8 = Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "tableLength", [mobx__WEBPACK_IMPORTED_MODULE_7__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
}), Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "getTableDataInfo", [mobx__WEBPACK_IMPORTED_MODULE_7__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "getTableDataInfo"), _class.prototype), Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "getTableData", [mobx__WEBPACK_IMPORTED_MODULE_7__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "getTableData"), _class.prototype), Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "searchTableInfo", [mobx__WEBPACK_IMPORTED_MODULE_7__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "searchTableInfo"), _class.prototype), Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "searchTable", [mobx__WEBPACK_IMPORTED_MODULE_7__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "searchTable"), _class.prototype), Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "createTableInfo", [mobx__WEBPACK_IMPORTED_MODULE_7__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "createTableInfo"), _class.prototype), Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "createTable", [mobx__WEBPACK_IMPORTED_MODULE_7__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "createTable"), _class.prototype), Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "updateTableInfo", [mobx__WEBPACK_IMPORTED_MODULE_7__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "updateTableInfo"), _class.prototype), Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "updateTable", [mobx__WEBPACK_IMPORTED_MODULE_7__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "updateTable"), _class.prototype), Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "insertTableInfo", [mobx__WEBPACK_IMPORTED_MODULE_7__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "insertTableInfo"), _class.prototype), Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "insertTable", [mobx__WEBPACK_IMPORTED_MODULE_7__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "insertTable"), _class.prototype), Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "getTableLengthInfo", [mobx__WEBPACK_IMPORTED_MODULE_7__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "getTableLengthInfo"), _class.prototype), Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "getTableLength", [mobx__WEBPACK_IMPORTED_MODULE_7__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "getTableLength"), _class.prototype), Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "insertValueInfo", [mobx__WEBPACK_IMPORTED_MODULE_7__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "insertValueInfo"), _class.prototype), Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "insertValue", [mobx__WEBPACK_IMPORTED_MODULE_7__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "insertValue"), _class.prototype), Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "getTableInfo", [mobx__WEBPACK_IMPORTED_MODULE_7__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "getTableInfo"), _class.prototype), Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "getTable", [mobx__WEBPACK_IMPORTED_MODULE_7__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "getTable"), _class.prototype)), _class);

/***/ })

})
//# sourceMappingURL=admin.js.682c72e5efe445fc8967.hot-update.js.map