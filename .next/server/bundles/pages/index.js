module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AddProduct.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
var _jsxFileName = "C:\\Users\\Dennis\\Desktop\\FEU17\\Serverside Programering\\Labbar\\NextLAB1\\components\\AddProduct.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var containerForm = {
  marginTop: '50px',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  flexDirection: 'row',
  flexWrap: 'wrap'
};
var submitButton = {
  fontFamily: 'Montserrat',
  width: '404px',
  paddingTop: '5px',
  paddingBottom: '5px',
  marginTop: '5px',
  border: 'none',
  outline: 'none',
  borderRadius: '2px',
  cursor: 'pointer',
  backgroundColor: 'deepskyblue',
  color: 'white',
  WebkitBoxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
  MozBoxShadow: ' 0px 0px 10px 0px rgba(0,0,0,0.2)',
  BoxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)'
};
var formHolder = {
  width: '410px',
  height: '200px'
};
var inputs = {
  fontFamily: 'Montserrat',
  paddingLeft: '5px',
  borderRadius: '5px',
  outline: 'none',
  border: '0.5px solid lightgray',
  height: '25px',
  width: '400px',
  marginTop: '5px',
  WebkitBoxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
  MozBoxShadow: ' 0px 0px 10px 0px rgba(0,0,0,0.2)',
  BoxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)'
};
var formText = {
  fontFamily: 'Montserrat',
  margin: '0'
};

var AddProduct =
/*#__PURE__*/
function (_Component) {
  _inherits(AddProduct, _Component);

  function AddProduct(props) {
    var _this;

    _classCallCheck(this, AddProduct);

    _this = _possibleConstructorReturn(this, (AddProduct.__proto__ || Object.getPrototypeOf(AddProduct)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "addProduct", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(name, product, type) {
        var obj = {
          product: product,
          type: type,
          name: name,
          img: '//cdn.shopify.com/s/files/1/0362/2465/products/Audeze_Mobius_Copper_1024x1024_2000x.png'
        };
        fetch('http://localhost:3001/api/addproduct/' + name, {
          method: 'POST',
          body: JSON.stringify(obj)
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState(_defineProperty({}, e.target.name, e.target.value)); // Handler for all inputs

      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.addProduct(_this.state.nameAdd, _this.state.productAdd, _this.state.typeAdd);
      }
    });
    _this.state = {
      productAdd: '',
      nameAdd: '',
      typeAdd: ''
    };
    return _this;
  }

  _createClass(AddProduct, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: containerForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Montserrat",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: formHolder,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        style: formText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, "Add a product:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        style: inputs,
        placeholder: "Product",
        type: "text",
        name: "productAdd",
        value: this.state.productAdd,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        style: inputs,
        placeholder: "Name",
        type: "text",
        name: "nameAdd",
        value: this.state.nameAdd,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        style: inputs,
        placeholder: "Type",
        type: "text",
        name: "typeAdd",
        value: this.state.typeAdd,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        style: submitButton,
        onClick: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, "ADD PRODUCT")));
    }
  }]);

  return AddProduct;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* unused harmony default export */ var _unused_webpack_default_export = (AddProduct);

/***/ }),

/***/ "./components/EditProductButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
var _jsxFileName = "C:\\Users\\Dennis\\Desktop\\FEU17\\Serverside Programering\\Labbar\\NextLAB1\\components\\EditProductButton.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


 //CSS Start.

var toggleDiv = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Montserrat',
  width: '170px',
  height: '90px',
  margin: '0',
  marginTop: '-200px',
  border: 'none',
  backgroundColor: 'white',
  padding: '10px',
  borderRadius: '5px',
  WebkitBoxShadow: '0px 0px 19px 0px rgba(0,0,0,0.2)',
  MozBoxShadow: ' 0px 0px 19px 0px rgba(0,0,0,0.2)',
  BoxShadow: '0px 0px 19px 0px rgba(0,0,0,0.2)'
};
var buttonsStyle = {
  marginTop: '5px',
  fontFamily: 'Montserrat',
  width: '100%',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  outline: 'none',
  borderBottom: '0.5px solid lightgray'
};
var buttonSave = {
  marginTop: '5px',
  fontFamily: 'Montserrat',
  width: '100%',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  outline: 'none',
  borderBottom: '1px solid green'
};
var buttonClose = {
  marginTop: '5px',
  fontFamily: 'Montserrat',
  width: '100%',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  outline: 'none',
  borderBottom: '1px solid red'
};
var inputStyle = {
  fontFamily: 'Montserrat',
  textAlign: 'center',
  marginTop: '5px',
  padding: '0',
  width: '100%',
  height: '20px',
  border: '0.5px solid lightgray',
  borderRadius: '5px' //CSS End.

};

var EditProductButton =
/*#__PURE__*/
function (_Component) {
  _inherits(EditProductButton, _Component);

  function EditProductButton(props) {
    var _this;

    _classCallCheck(this, EditProductButton);

    _this = _possibleConstructorReturn(this, (EditProductButton.__proto__ || Object.getPrototypeOf(EditProductButton)).call(this, props));
    _this.state = {
      editData: _this.props.apiData,
      show: false
    };
    _this.handleToggleClick = _this.handleToggleClick.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(EditProductButton, [{
    key: "handleToggleClick",
    value: function handleToggleClick() {
      var show = this.state.show;
      this.setState({
        show: !show
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var newProduct = event.target.value;
      this.props.editProduct(this.props.passName, newProduct);
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      this.props.updateProduct(this.props.passName);
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Montserrat",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        style: buttonsStyle,
        onClick: this.handleToggleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, this.state.show ? 'CLOSE' : 'EDIT'), this.state.show && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        key: this.props.passName,
        style: toggleDiv,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        style: inputStyle,
        type: "text",
        value: this.props.passProduct,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        style: buttonSave,
        onClick: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, "save"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        style: buttonClose,
        onClick: this.handleToggleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, this.state.show ? 'X' : 'X'))));
    }
  }]);

  return EditProductButton;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (EditProductButton);

/***/ }),

/***/ "./components/FetchData.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EditProductButton_js__ = __webpack_require__("./components/EditProductButton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
var _jsxFileName = "C:\\Users\\Dennis\\Desktop\\FEU17\\Serverside Programering\\Labbar\\NextLAB1\\components\\FetchData.js";

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
  position: 'relavtive',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '200px',
  height: '350px',
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
var containerInfo = {
  width: '100%',
  heiht: '50px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '15px'
};
var containerInfoText = {
  margin: '2px',
  color: '#5e5e5e'
};
var containerFetch = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '70%',
  marginTop: '30px',
  flexWrap: 'wrap',
  position: 'relavtive'
};
var containerButtons = {
  width: '100%',
  position: 'relavtive'
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
            lineNumber: 131
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
          style: imgTag,
          src: data.img,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: containerInfo,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          style: containerInfoText,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          }
        }, data.product), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          style: containerInfoText,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          }
        }, data.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          style: containerInfoText,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          }
        }, data.type)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: containerButtons,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__EditProductButton_js__["a" /* default */], {
          updateProduct: _this3.updateApi,
          editProduct: _this3.editProduct,
          passProduct: data.product,
          passName: data.name,
          passType: data.type,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
          style: buttonsStyle,
          onClick: function onClick() {
            return _this3.deleteData(data.name);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          }
        }, "REMOVE")));
      });
      var noRes = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, "\"Du har inte startat serven till API'et\"");
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: containerFetch,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Montserrat",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      })), list.length > 0 ? list : noRes);
    }
  }]);

  return FetchData;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (FetchData);

/***/ }),

/***/ "./components/Nav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
var _jsxFileName = "C:\\Users\\Dennis\\Desktop\\FEU17\\Serverside Programering\\Labbar\\NextLAB1\\components\\Nav.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



 //CSS

var containerNav = {
  fontFamily: 'Montserrat',
  backgroundColor: '#fffff',
  margin: '0',
  padding: '0',
  width: '100%',
  height: '35px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  WebkitBoxShadow: '0px 2px 5px 0px rgba(0,0,0,0.2)',
  MozBoxShadow: '0px 2px 5px 0px rgba(0,0,0,0.2)',
  BoxShadow: '0px 2px 5px 0px rgba(0,0,0,0.2)'
};
var links = {
  color: 'black',
  textDecoration: 'none',
  marginRight: '10px',
  marginLeft: '10px',
  fontSize: '15px',
  letterSpacing: '0.5px'
};

var Nav =
/*#__PURE__*/
function (_Component) {
  _inherits(Nav, _Component);

  function Nav() {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
  }

  _createClass(Nav, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: containerNav,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        charSet: "utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Montserrat",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        style: links,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "HOME")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/create",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        style: links,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, "CREATE")));
    }
  }]);

  return Nav;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Nav);

/***/ }),

/***/ "./pages/GlobalStyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "C:\\Users\\Dennis\\Desktop\\FEU17\\Serverside Programering\\Labbar\\NextLAB1\\pages\\GlobalStyle.js";



var GlobalStyle = function GlobalStyle() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2193932969",
    css: "body{box-sizing:border-box;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxHbG9iYWxTdHlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHcUIsQUFHZ0Msc0JBQ2IsU0FDQyxVQUNiIiwiZmlsZSI6InBhZ2VzXFxHbG9iYWxTdHlsZS5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXERlbm5pc1xcRGVza3RvcFxcRkVVMTdcXFNlcnZlcnNpZGUgUHJvZ3JhbWVyaW5nXFxMYWJiYXJcXE5leHRMQUIxIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCBHbG9iYWxTdHlsZSA9ICgpPT4gKFxyXG4gIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuKVxyXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxTdHlsZTtcclxuIl19 */\n/*@ sourceURL=pages\\GlobalStyle.js */"
  });
};

/* harmony default export */ __webpack_exports__["a"] = (GlobalStyle);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_FetchData_js__ = __webpack_require__("./components/FetchData.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_AddProduct_js__ = __webpack_require__("./components/AddProduct.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Nav_js__ = __webpack_require__("./components/Nav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__GlobalStyle__ = __webpack_require__("./pages/GlobalStyle.js");
var _jsxFileName = "C:\\Users\\Dennis\\Desktop\\FEU17\\Serverside Programering\\Labbar\\NextLAB1\\pages\\index.js";





 //CSS Start.

var containerHead = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column' //CSS End.

};

var Index = function Index(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: containerHead,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__GlobalStyle__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Nav_js__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_FetchData_js__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map