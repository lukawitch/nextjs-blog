module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/admin/admin.module.css":
/*!******************************************!*\
  !*** ./component/admin/admin.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"btn_group": "admin_btn_group__36fvy"
};


/***/ }),

/***/ "./component/admin/createTable.js":
/*!****************************************!*\
  !*** ./component/admin/createTable.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/admin */ "./context/admin.js");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _showContents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showContents */ "./component/admin/showContents.js");
var _jsxFileName = "C:\\Users\\MSI\\Desktop\\sajubaju\\component\\admin\\createTable.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const createTable = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["observer"])(() => {
  const adminInfo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_admin__WEBPACK_IMPORTED_MODULE_1__["adminContext"]);
  const {
    0: dbName,
    1: setdbName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: array,
    1: setArray
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    adminInfo.getTable();
    setArray(adminInfo.dbTableData);
    console.log(array);
    console.log(adminInfo.dbTable);
  }, []);

  const handleChangeName = e => {
    //adminInfo.dbName = e.target.value;
    setdbName(e.target.value);
  };

  const getDBName = e => {
    adminInfo.dbTableData = "";
    setdbName(e);
    adminInfo.dbName = e;
    adminInfo.getTableData();
    setArray(adminInfo.dbTableData);
  };

  const handleChangeSubtitle = e => {
    adminInfo.subtitle = e.target.value;
  };

  const handleChangeContents = e => {
    adminInfo.contents = e.target.value;
  };

  const handleSubmit = e => {
    e.preventDefault();
    adminInfo.dbName = dbName;
    adminInfo.num = adminInfo.dbTable.length + 1;
    adminInfo.searchTable(); //adminInfo.createTable();
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, console.log(array), __jsx("form", {
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, "\uCEE8\uD150\uCE20\uC774\uB984( \uD55C\uAE00or\uC601\uC5B4\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694(ex)\uD638\uAD6C,\uC774\uC0C1\uD615)) ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 43
    }
  }), __jsx("input", {
    type: "text",
    value: dbName,
    onChange: handleChangeName,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }), "\uC694\uC18C\uC81C\uBAA9", __jsx("input", {
    type: "text",
    value: adminInfo.subtitle,
    onChange: handleChangeSubtitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }), "\uC694\uC18C\uB0B4\uC6A9", __jsx("textarea", {
    value: adminInfo.contents,
    onChange: handleChangeContents,
    rows: "4",
    cols: "50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }), __jsx("button", {
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, "\uB9CC\uB4E4\uAE30")), adminInfo.dbTable === "" ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, adminInfo.dbTable.map((contents, num) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    onClick: () => getDBName(contents.name),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, " ", contents.num, " ", contents.name), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  })))), adminInfo.dbTableData === "" ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, adminInfo.dbTableData.map((contents, num) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_showContents__WEBPACK_IMPORTED_MODULE_3__["default"], {
    number: contents.number,
    subtitle: contents.subtitle,
    contents: contents.contents,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  })))));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/admin */ "./context/admin.js");
var _jsxFileName = "C:\\Users\\MSI\\Desktop\\sajubaju\\component\\admin\\showContents.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const showContents = number => {
  const {
    0: subtitle,
    1: setSubTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(number.subtitle);
  const {
    0: contents,
    1: setContents
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(number.contents);
  const adminInfo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_admin__WEBPACK_IMPORTED_MODULE_1__["adminContext"]);
  console.log(number);

  const handleUpdateTitle = e => {
    setSubTitle(e.target.value); //adminInfo.updateSubtitle[number.number - 1] = e.target.value;

    console.log(subtitle);
  };

  const handleUpdateContents = e => {
    setContents(e.target.value); //adminInfo.updateContents[number.number - 1] = e.target.value;
  };

  const handleSubmit = e => {
    e.preventDefault();
    adminInfo.updateSubtitle = subtitle;
    adminInfo.updateContents = contents;
    adminInfo.updateTable(number.number); //adminInfo.createTable();
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, console.log(subtitle), number.number, " ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 23
    }
  }), adminInfo.updateSubtitle[number.number - 1] === "" ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("form", {
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), "\uC81C\uBAA9", " ", __jsx("input", {
    type: "text",
    value: subtitle,
    onChange: handleUpdateTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }), "\uB0B4\uC6A9", __jsx("textarea", {
    value: contents,
    onChange: handleUpdateContents,
    rows: "4",
    cols: "50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }), __jsx("button", {
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "\uC218\uC815\uD558\uAE30")), __jsx("button", {
    onClick: adminInfo.deleteTableData(number.number),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "\uC0AD\uC81C")));
};

/* harmony default export */ __webpack_exports__["default"] = (showContents);

/***/ }),

/***/ "./component/admin/test.js":
/*!*********************************!*\
  !*** ./component/admin/test.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\MSI\\Desktop\\sajubaju\\component\\admin\\test.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const test = () => {
  const {
    0: file,
    1: setFile
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: previewURL,
    1: setpreviewURL
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();

  const handleFileOnChange = event => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      setFile(file);
      setpreviewURL(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("input", {
    type: "file",
    accept: "image/jpg,impge/png,image/jpeg,image/gif",
    name: "profile_img",
    onChange: handleFileOnChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (test);

/***/ }),

/***/ "./context/admin.js":
/*!**************************!*\
  !*** ./context/admin.js ***!
  \**************************/
/*! exports provided: adminContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminContext", function() { return adminContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _model_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/admin */ "./model/admin.js");


const adminContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(new _model_admin__WEBPACK_IMPORTED_MODULE_1__["admin"]());

/***/ }),

/***/ "./model/admin.js":
/*!************************!*\
  !*** ./model/admin.js ***!
  \************************/
/*! exports provided: admin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "admin", function() { return admin; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }



let admin = (_class = (_temp = class admin {
  constructor() {
    _initializerDefineProperty(this, "dbTable", _descriptor, this);

    _initializerDefineProperty(this, "dbTableData", _descriptor2, this);

    _initializerDefineProperty(this, "dbName", _descriptor3, this);

    _initializerDefineProperty(this, "subtitle", _descriptor4, this);

    _initializerDefineProperty(this, "updateSubtitle", _descriptor5, this);

    _initializerDefineProperty(this, "updateContents", _descriptor6, this);

    _initializerDefineProperty(this, "num", _descriptor7, this);

    _initializerDefineProperty(this, "tableLength", _descriptor8, this);
  }

  getTableDataInfo() {
    console.log();
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("https://hanstream.gabia.io/getTableData", {
      params: {
        dbName: "contents_" + this.dbName
      }
    }).then(response => {
      console.log(response.data);
      this.dbTableData = response.data;
    }).catch(error => {
      console.log(error);
    });
  }

  async getTableData() {
    await this.getTableDataInfo();
  }

  searchTableInfo() {
    console.log();
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("https://hanstream.gabia.io/searchTable", {
      params: {
        dbName: "contents_" + this.dbName
      }
    }).then(response => {
      console.log(response.data);

      if (response.data.length === 0) {
        alert("없는테이블입니다 새로 추가합니다.");
        this.createTable();
      } else {
        alert("있는테이블입니다 기존테이블에 데이터를 추가합니다.");
        this.getTableLength();
      }
    }).catch(error => {
      alert("error");
      console.log(error);
    });
  }

  async searchTable() {
    await this.searchTableInfo();
  }

  createTableInfo() {
    console.log();
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("https://hanstream.gabia.io/adminCreateFile", {
      params: {
        dbName: this.dbName
      }
    }).then(response => {
      alert("추가완료했습니다.");
      console.log(response.data);
      this.insertTable();
    }).catch(error => {
      alert("error");
      console.log(error);
    });
  }

  async createTable() {
    await this.createTableInfo();
  }

  deleteTableDataInfo(num) {
    console.log();
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("https://hanstream.gabia.io/DeleteTableData", {
      params: {
        dbName: this.dbName,
        num: num
      }
    }).then(response => {
      alert("추가완료했습니다.");
      console.log(response.data);
      this.insertTable();
    }).catch(error => {
      alert("error");
      console.log(error);
    });
  }

  async deleteTableData(num) {
    await this.deleteTableDataInfo(num);
  }

  updateTableInfo(num) {
    console.log();
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("https://hanstream.gabia.io/updateTableData", {
      params: {
        num: num,
        subtitle: this.updateSubtitle,
        contents: this.updateContents,
        dbName: this.dbName
      }
    }).then(response => {
      alert("수정완료했습니다.");
      console.log(response.data);
    }).catch(error => {
      alert("error");
      console.log(error);
    });
  }

  async updateTable(num) {
    await this.updateTableInfo(num);
  }

  insertTableInfo() {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("https://hanstream.gabia.io/insertDBValue", {
      params: {
        num: this.num,
        name: "contents_" + this.dbName
      }
    }).then(response => {
      console.log(response.data);
      this.getTableLength();
    }).catch(error => {
      console.log(error);
    });
  }

  async insertTable() {
    await this.insertTableInfo();
  }

  getTableLengthInfo() {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("https://hanstream.gabia.io/getTableLength", {
      params: {
        dbName: "contents_" + this.dbName
      }
    }).then(response => {
      console.log(response.data[0]);

      if (response.data === null) {
        this.tableLength = 0;
      } else {
        this.tableLength = response.data[0].number;
      }

      alert(this.tableLength);
      this.insertValue();
    }).catch(error => {
      console.log(error);
    });
  }

  async getTableLength() {
    await this.getTableLengthInfo();
  }

  insertValueInfo() {
    console.log(this.tableLength + 1);
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("https://hanstream.gabia.io/insertValue", {
      params: {
        num: this.tableLength + 1,
        dbName: "contents_" + this.dbName,
        subtitle: this.subtitle,
        contents: this.contents
      }
    }).then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    });
  }

  async insertValue() {
    await this.insertValueInfo();
  }

  getTableInfo() {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("https://hanstream.gabia.io/adminDBTable", {}).then(response => {
      console.log(response.data);
      this.dbTable = response.data;

      for (var i = 0; i < response.data.length; i++) {
        let a = response.data[i].name.split("contents_");
        this.dbTable[i].name = a[1];
      } // this.dbTable = response.data;

    }).catch(error => {
      console.log(error);
    });
  }

  async getTable() {
    await this.getTableInfo();
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "dbTable", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return "";
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "dbTableData", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return "";
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "dbName", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return "";
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "subtitle", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return "";
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "updateSubtitle", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return {};
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "updateContents", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return {};
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "num", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 0;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "tableLength", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 0;
  }
}), _applyDecoratedDescriptor(_class.prototype, "getTableDataInfo", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "getTableDataInfo"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getTableData", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "getTableData"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "searchTableInfo", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "searchTableInfo"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "searchTable", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "searchTable"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "createTableInfo", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "createTableInfo"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "createTable", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "createTable"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "deleteTableDataInfo", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "deleteTableDataInfo"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "deleteTableData", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "deleteTableData"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateTableInfo", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "updateTableInfo"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateTable", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "updateTable"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "insertTableInfo", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "insertTableInfo"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "insertTable", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "insertTable"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getTableLengthInfo", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "getTableLengthInfo"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getTableLength", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "getTableLength"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "insertValueInfo", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "insertValueInfo"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "insertValue", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "insertValue"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getTableInfo", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "getTableInfo"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getTable", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "getTable"), _class.prototype)), _class);

/***/ }),

/***/ "./pages/admin.js":
/*!************************!*\
  !*** ./pages/admin.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_admin_admin_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/admin/admin.module.css */ "./component/admin/admin.module.css");
/* harmony import */ var _component_admin_admin_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_component_admin_admin_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_admin_createTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/admin/createTable */ "./component/admin/createTable.js");
/* harmony import */ var _component_admin_test__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/admin/test */ "./component/admin/test.js");
var _jsxFileName = "C:\\Users\\MSI\\Desktop\\sajubaju\\pages\\admin.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const admin = () => {
  const {
    0: tabNumber,
    1: setTabNumber
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();

  const settingTabNumber = num => {
    setTabNumber(num);
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _component_admin_admin_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.btn_group,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("button", {
    onClick: () => {
      settingTabNumber(1);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "Apple"), __jsx("button", {
    onClick: () => {
      settingTabNumber(2);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "Samsung"), __jsx("button", {
    onClick: () => {
      settingTabNumber(3);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "Sony")), tabNumber === 1 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_component_admin_createTable__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, " ", tabNumber === 2 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_component_admin_test__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, " ", tabNumber === 3 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, tabNumber) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null))));
};

/* harmony default export */ __webpack_exports__["default"] = (admin);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/admin.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MSI\Desktop\sajubaju\pages\admin.js */"./pages/admin.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),

/***/ "mobx-react-lite":
/*!**********************************!*\
  !*** external "mobx-react-lite" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-react-lite");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map