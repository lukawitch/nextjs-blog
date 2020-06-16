webpackHotUpdate("static\\development\\pages\\result.js",{

/***/ "./model/signinup.js":
/*!***************************!*\
  !*** ./model/signinup.js ***!
  \***************************/
/*! exports provided: SigninUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninUp", function() { return SigninUp; });
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








var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _temp;



var SigninUp = (_class = (_temp = /*#__PURE__*/function () {
  function SigninUp() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, SigninUp);

    Object(_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "kakaoId", _descriptor, this);

    Object(_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "name", _descriptor2, this);

    Object(_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "JoinOrNot", _descriptor3, this);

    Object(_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "successOrNot", _descriptor4, this);

    Object(_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "emailNumber", _descriptor5, this);

    Object(_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "email", _descriptor6, this);

    Object(_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "password", _descriptor7, this);

    Object(_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "emailNumbercheck", _descriptor8, this);

    Object(_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "memberYear", _descriptor9, this);

    Object(_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "memberMon", _descriptor10, this);

    Object(_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "memberDay", _descriptor11, this);

    Object(_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "snsNumber", _descriptor12, this);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(SigninUp, [{
    key: "getKakaoLoginInfo",
    //카카오톡 로그인
    value: function getKakaoLoginInfo() {
      var _this = this;

      console.log(this.kakaoId);
      return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("https://hanstream.gabia.io/kakaoLogin", {
        //.get("http://localhost:8001/birth", {
        params: {
          id: this.kakaoId
        }
      }).then(function (response) {
        console.log(response.data);
        console.log(response.data.length);

        if (response.data.length === 0) {
          _this.JoinOrNot = true;
          console.log(_this.JoinOrNot);
        } else {
          _this.JoinOrNot = false;
          _this.name = response.data[0].name;
          _this.memberYear = response.data[0].year;
          _this.memberMon = response.data[0].mon;
          _this.memberDay = response.data[0].day;
          console.log(_this.name);
          console.log(_this.JoinOrNot);
        }
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "getKakaoLogin",
    value: function () {
      var _getKakaoLogin = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getKakaoLoginInfo();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getKakaoLogin() {
        return _getKakaoLogin.apply(this, arguments);
      }

      return getKakaoLogin;
    }() //카카오톡로그인한후 계정이 없는경우, 새로운 계정 만들기

  }, {
    key: "getKakaoJoinInfo",
    value: function getKakaoJoinInfo(gender, year, mon, day, time, name) {
      var _this2 = this;

      console.log(this.kakaoId);
      return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("https://hanstream.gabia.io/kakaoJoin", {
        params: {
          id: this.kakaoId,
          gender: gender,
          year: year,
          mon: mon,
          day: day,
          time: time,
          name: name
        }
      }).then(function (response) {
        console.log(response);
        _this2.successOrNot = true;
        console.log(_this2.successOrNot);
      }).catch(function (error) {
        console.log(error);
        _this2.successOrNot = false;
        console.log(_this2.successOrNot);
      });
    }
  }, {
    key: "getKakaoJoin",
    value: function () {
      var _getKakaoJoin = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(gender, year, mon, day, time, name) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(gender);
                console.log(year);
                console.log(mon);
                console.log(day);
                console.log(time);
                console.log(name);
                this.name = name;
                _context2.next = 9;
                return this.getKakaoJoinInfo(gender, year, mon, day, time, name);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getKakaoJoin(_x, _x2, _x3, _x4, _x5, _x6) {
        return _getKakaoJoin.apply(this, arguments);
      }

      return getKakaoJoin;
    }()
  }, {
    key: "getGoogleLoginInfo",
    value: function getGoogleLoginInfo() {
      var _this3 = this;

      console.log(this.kakaoId);
      return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("https://hanstream.gabia.io/googleLogin", {
        //.get("http://localhost:8001/birth", {
        params: {
          id: this.kakaoId
        }
      }).then(function (response) {
        console.log(response.data);
        console.log(response.data.length);

        if (response.data.length === 0) {
          _this3.JoinOrNot = true;
          console.log(_this3.JoinOrNot);
        } else {
          _this3.JoinOrNot = false;
          _this3.name = response.data[0].name;
          _this3.memberYear = response.data[0].year;
          _this3.memberMon = response.data[0].mon;
          _this3.memberDay = response.data[0].day;
          console.log(_this3.name);
          console.log(_this3.JoinOrNot);
        }
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "getGoogleLogin",
    value: function () {
      var _getGoogleLogin = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.getGoogleLoginInfo();

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getGoogleLogin() {
        return _getGoogleLogin.apply(this, arguments);
      }

      return getGoogleLogin;
    }()
  }, {
    key: "getGoogleJoinInfo",
    value: function getGoogleJoinInfo(gender, year, mon, day, time, name) {
      var _this4 = this;

      console.log(this.kakaoId);
      return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("https://hanstream.gabia.io/googleJoin", {
        params: {
          id: this.kakaoId,
          gender: gender,
          year: year,
          mon: mon,
          day: day,
          time: time,
          name: name
        }
      }).then(function (response) {
        console.log(response);
        _this4.successOrNot = true;
        console.log(_this4.successOrNot);
      }).catch(function (error) {
        console.log(error);
        _this4.successOrNot = false;
        console.log(_this4.successOrNot);
      });
    }
  }, {
    key: "getGoogleJoin",
    value: function () {
      var _getGoogleJoin = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(gender, year, mon, day, time, name) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log(gender);
                console.log(year);
                console.log(mon);
                console.log(day);
                console.log(time);
                console.log(name);
                this.name = name;
                _context4.next = 9;
                return this.getGoogleJoinInfo(gender, year, mon, day, time, name);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getGoogleJoin(_x7, _x8, _x9, _x10, _x11, _x12) {
        return _getGoogleJoin.apply(this, arguments);
      }

      return getGoogleJoin;
    }()
  }, {
    key: "getNaverLoginInfo",
    value: function getNaverLoginInfo() {
      return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("https://hanstream.gabia.io/naverLogin", {//.get("http://localhost:8001/birth", {
      }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "getNaverLogin",
    value: function () {
      var _getNaverLogin = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.getNaverLoginInfo();

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getNaverLogin() {
        return _getNaverLogin.apply(this, arguments);
      }

      return getNaverLogin;
    }()
  }, {
    key: "getEmailJoinInfo",
    value: function getEmailJoinInfo() {
      var _this5 = this;

      return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("https://hanstream.gabia.io/emailSend?email=" + this.email, {}).then(function (response) {
        console.log(response);
        _this5.emailNumber = response.data;
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "getEmailJoin",
    value: function () {
      var _getEmailJoin = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                console.log(this.email);
                _context6.next = 3;
                return this.getEmailJoinInfo();

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getEmailJoin() {
        return _getEmailJoin.apply(this, arguments);
      }

      return getEmailJoin;
    }()
  }, {
    key: "getJoinInfo",
    value: function getJoinInfo(gender, year, mon, day, time, name) {
      var _this6 = this;

      return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("https://hanstream.gabia.io/join", {
        params: {
          id: this.email // password: this.password,

        }
      }).then(function (response) {
        console.log(response); // this.successOrNot = true;
        //   console.log(this.successOrNot);

        console.log(typeof response.data.length);

        if (response.data.length === 0) {
          console.log("join");

          _this6.getJoinInput(gender, year, mon, day, time, name);
        } else {
          alert("이미 가입되어있는 아이디입니다.");
        }
      }).catch(function (error) {
        console.log(error);
        _this6.successOrNot = false;
        alert("이미 가입되어있는 아이디입니다.");
        console.log(_this6.successOrNot);
      });
    }
  }, {
    key: "getJoin",
    value: function () {
      var _getJoin = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(gender, year, mon, day, time, name) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                console.log(gender);
                console.log(year);
                console.log(mon);
                console.log(day);
                console.log(time);
                console.log(name);
                this.name = name;
                _context7.next = 9;
                return this.getJoinInfo(gender, year, mon, day, time, name);

              case 9:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getJoin(_x13, _x14, _x15, _x16, _x17, _x18) {
        return _getJoin.apply(this, arguments);
      }

      return getJoin;
    }()
  }, {
    key: "getJoinInputInfo",
    value: function getJoinInputInfo(gender, year, mon, day, time, name) {
      var _this7 = this;

      console.log(this.kakaoId);
      var d = new Date();
      console.log();
      console.log(this.email);
      console.log(this.password);
      console.log(gender);
      console.log(year);
      console.log(mon);
      console.log(day);
      console.log(time);
      console.log(name);
      return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("https://hanstream.gabia.io/joininput", {
        params: {
          id: this.email,
          password: this.password,
          gender: gender,
          year: year,
          mon: mon,
          day: day,
          time: time,
          name: name,
          subscriptionTime: d
        }
      }).then(function (response) {
        console.log(response);
        _this7.successOrNot = true;
        console.log(_this7.successOrNot);
      }).catch(function (error) {
        console.log(error);
        _this7.successOrNot = false;
        console.log(_this7.successOrNot);
      });
    }
  }, {
    key: "getJoinInput",
    value: function () {
      var _getJoinInput = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(gender, year, mon, day, time, name) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                console.log(gender);
                console.log(year);
                console.log(mon);
                console.log(day);
                console.log(time);
                console.log(name);
                this.name = name;
                _context8.next = 9;
                return this.getJoinInputInfo(gender, year, mon, day, time, name);

              case 9:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getJoinInput(_x19, _x20, _x21, _x22, _x23, _x24) {
        return _getJoinInput.apply(this, arguments);
      }

      return getJoinInput;
    }()
  }, {
    key: "getBirthInputPersonInfo",
    value: function getBirthInputPersonInfo(gender, year, mon, day, time) {
      var _this8 = this;

      var d = new Date();
      console.log();
      console.log(this.email);
      console.log(gender);
      console.log(year);
      console.log(mon);
      console.log(day);
      console.log(time);
      return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("https://hanstream.gabia.io/birthInputPerson", {
        params: {
          id: "",
          gender: gender,
          year: year,
          mon: mon,
          day: day,
          time: time,
          subscriptionTime: d
        }
      }).then(function (response) {
        console.log(response);
        _this8.successOrNot = true;
        console.log(_this8.successOrNot);
      }).catch(function (error) {
        console.log(error);
        _this8.successOrNot = false;
        console.log(_this8.successOrNot);
      });
    }
  }, {
    key: "getBirthInputPerson",
    value: function () {
      var _getBirthInputPerson = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(gender, year, mon, day, time) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                console.log(gender);
                console.log(year);
                console.log(mon);
                console.log(day);
                console.log(time);
                console.log(name);
                this.name = name;
                _context9.next = 9;
                return this.getBirthInputPersonInfo(gender, year, mon, day, time);

              case 9:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getBirthInputPerson(_x25, _x26, _x27, _x28, _x29) {
        return _getBirthInputPerson.apply(this, arguments);
      }

      return getBirthInputPerson;
    }()
  }, {
    key: "getGeneralLoginInfo",
    value: function getGeneralLoginInfo() {
      var _this9 = this;

      return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("https://hanstream.gabia.io/join", {
        params: {
          id: this.email,
          password: this.password
        }
      }).then(function (response) {
        console.log(response); // this.successOrNot = true;
        //   console.log(this.successOrNot);

        if (response.data.length === 0) {
          alert("아이디 혹은 비밀번호가 잘못되었습니다.");
        } else {
          _this9.JoinOrNot = false;
          _this9.kakaoId = _this9.email;
          _this9.name = response.data[0].name;
          _this9.memberYear = response.data[0].year;
          _this9.memberMon = response.data[0].mon;
          _this9.memberDay = response.data[0].day;
        }
      }).catch(function (error) {
        console.log(error);
        _this9.successOrNot = false;
        console.log(_this9.successOrNot);
      });
    }
  }, {
    key: "getGeneralLogin",
    value: function () {
      var _getGeneralLogin = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.getGeneralLoginInfo();

              case 2:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function getGeneralLogin() {
        return _getGeneralLogin.apply(this, arguments);
      }

      return getGeneralLogin;
    }()
  }]);

  return SigninUp;
}(), _temp), (_descriptor = Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "kakaoId", [mobx__WEBPACK_IMPORTED_MODULE_7__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "";
  }
}), _descriptor2 = Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "name", [mobx__WEBPACK_IMPORTED_MODULE_7__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "";
  }
}), _descriptor3 = Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "JoinOrNot", [mobx__WEBPACK_IMPORTED_MODULE_7__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "";
  }
}), _descriptor4 = Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "successOrNot", [mobx__WEBPACK_IMPORTED_MODULE_7__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "";
  }
}), _descriptor5 = Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "emailNumber", [mobx__WEBPACK_IMPORTED_MODULE_7__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "";
  }
}), _descriptor6 = Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "email", [mobx__WEBPACK_IMPORTED_MODULE_7__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "";
  }
}), _descriptor7 = Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "password", [mobx__WEBPACK_IMPORTED_MODULE_7__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "";
  }
}), _descriptor8 = Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "emailNumbercheck", [mobx__WEBPACK_IMPORTED_MODULE_7__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "";
  }
}), _descriptor9 = Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "memberYear", [mobx__WEBPACK_IMPORTED_MODULE_7__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "";
  }
}), _descriptor10 = Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "memberMon", [mobx__WEBPACK_IMPORTED_MODULE_7__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "";
  }
}), _descriptor11 = Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "memberDay", [mobx__WEBPACK_IMPORTED_MODULE_7__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "";
  }
}), _descriptor12 = Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "snsNumber", [mobx__WEBPACK_IMPORTED_MODULE_7__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
}), Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "getKakaoLogin", [mobx__WEBPACK_IMPORTED_MODULE_7__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "getKakaoLogin"), _class.prototype), Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "getKakaoJoin", [mobx__WEBPACK_IMPORTED_MODULE_7__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "getKakaoJoin"), _class.prototype), Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "getGoogleLogin", [mobx__WEBPACK_IMPORTED_MODULE_7__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "getGoogleLogin"), _class.prototype), Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "getGoogleJoin", [mobx__WEBPACK_IMPORTED_MODULE_7__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "getGoogleJoin"), _class.prototype), Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "getNaverLogin", [mobx__WEBPACK_IMPORTED_MODULE_7__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "getNaverLogin"), _class.prototype), Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "getEmailJoin", [mobx__WEBPACK_IMPORTED_MODULE_7__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "getEmailJoin"), _class.prototype), Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "getJoin", [mobx__WEBPACK_IMPORTED_MODULE_7__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "getJoin"), _class.prototype), Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "getJoinInput", [mobx__WEBPACK_IMPORTED_MODULE_7__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "getJoinInput"), _class.prototype), Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "getBirthInputPerson", [mobx__WEBPACK_IMPORTED_MODULE_7__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "getBirthInputPerson"), _class.prototype), Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "getGeneralLogin", [mobx__WEBPACK_IMPORTED_MODULE_7__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "getGeneralLogin"), _class.prototype)), _class);

/***/ })

})
//# sourceMappingURL=result.js.6b78cea0552e9c1b09a9.hot-update.js.map