webpackHotUpdate(4,{

/***/ "./components/EditProductButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
var _jsxFileName = "C:\\Users\\oskar\\Documents\\SKOLA - BACKEND\\LAB1\\components\\EditProductButton.js";

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
  borderBottom: '0.5px solid lightgreen'
};
var buttonClose = {
  marginTop: '5px',
  fontFamily: 'Montserrat',
  width: '100%',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  outline: 'none',
  borderBottom: '0.5px solid red'
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

/***/ })

})
//# sourceMappingURL=4.eb3e417d5d51fda8f72f.hot-update.js.map