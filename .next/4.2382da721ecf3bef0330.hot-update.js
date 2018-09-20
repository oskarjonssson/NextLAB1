webpackHotUpdate(4,{

/***/ "./components/FetchData.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EditProductButton_js__ = __webpack_require__("./components/EditProductButton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
var _jsxFileName = "C:\\Users\\oskar\\Documents\\SKOLA - BACKEND\\LAB1\\components\\FetchData.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var API = 'http://localhost:3001/api/getproducts'; //CSS Styles Start.

var buttonStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '200px',
  height: '400px',
  backgroundColor: 'white',
  border: 'none',
  borderRadius: '5px',
  color: 'lightgray',
  margin: '10px',
  padding: '20px',
  fontFamily: 'Montserrat',
  WebkitBoxShadow: '0px 0px 19px 0px rgba(0,0,0,0.2)',
  MozBoxShadow: ' 0px 0px 19px 0px rgba(0,0,0,0.2)',
  BoxShadow: '0px 0px 19px 0px rgba(0,0,0,0.2)'
};
var divWrapper = {
  display: 'flex',
  justifyContent: 'center'
};
var containerInfo = {
  width: '90%',
  heiht: '100px'
};
var containerFetch = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '70%',
  marginTop: '30px',
  flexWrap: 'wrap'
};
var containerButtons = {
  width: '100%'
};
var buttonsStyle = {
  fontFamily: 'Montserrat',
  width: '100%',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  outline: 'none',
  borderBottom: '0.5px solid lightgray',
  marginTop: '10px'
};
var imgTag = {
  heiht: '50px',
  width: '100%' //CSS Styles End.

};

var FetchData =
/*#__PURE__*/
function (_Component) {
  _inherits(FetchData, _Component);

  function FetchData(props) {
    var _this;

    _classCallCheck(this, FetchData);

    _this = _possibleConstructorReturn(this, (FetchData.__proto__ || Object.getPrototypeOf(FetchData)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "editProduct", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(name, product, type) {
        var newData = _toConsumableArray(_this.state.apiData);

        var index = newData.findIndex(function (p) {
          return p.name === name;
        });
        newData[index].product = product;

        _this.setState({
          data: newData
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "updateApi", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(name) {
        var result = _this.state.apiData.find(function (product) {
          return product.name === name;
        });

        console.log(result.product, result.name);
        fetch('http://localhost:3001/api/update/' + name, {
          method: 'POST',
          body: JSON.stringify(result)
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "deleteData", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(name, product) {
        fetch('http://localhost:3001/api/delete/' + name, {
          method: 'DELETE'
        }).then(function (res) {
          return res.json();
        }).then(function (res) {
          var newData = _toConsumableArray(_this.state.apiData);

          var index = newData.findIndex(function (p) {
            return p.name === name;
          });
          newData[index].product = product;
          newData.splice(index, 1);

          _this.setState({
            apiData: newData
          });

          console.log(JSON.stringify(res) + ' removed successfuly');
        });
      }
    });
    _this.state = {
      apiData: []
    };
    _this.deleteData = _this.deleteData.bind();
    return _this;
  }

  _createClass(FetchData, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchFunction();
    } //Hämtar hem våran data från servern vi själva har startat upp med http://localhost:3001/api/getproducts

  }, {
    key: "fetchFunction",
    value: function fetchFunction() {
      var _this2 = this;

      fetch(API).then(function (response) {
        return response.json();
      }).then(function (data) {
        return _this2.setState({
          apiData: data
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      {
        /*Skriver ut all data vi har hämtat hem och gör om den till JSX-element*/
      }
      var list = this.state.apiData.map(function (data) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: buttonStyle,
          key: data.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
          style: imgTag,
          src: data.img,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: containerInfo,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          }
        }, data.product), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          }
        }, data.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          }
        }, data.type)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: containerButtons,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__EditProductButton_js__["a" /* default */], {
          updateProduct: _this3.updateApi,
          editProduct: _this3.editProduct,
          passProduct: data.product,
          passName: data.name,
          passType: data.type,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
          style: buttonsStyle,
          onClick: function onClick() {
            return _this3.deleteData(data.name);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          }
        }, "REMOVE")));
      });
      var noRes = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, "\"Du har inte startat serven till API'et\"");
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: containerFetch,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Montserrat",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      })), list.length > 0 ? list : noRes);
    }
  }]);

  return FetchData;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (FetchData);

/***/ })

})
//# sourceMappingURL=4.2382da721ecf3bef0330.hot-update.js.map