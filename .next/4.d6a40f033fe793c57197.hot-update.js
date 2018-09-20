webpackHotUpdate(4,{

/***/ "./components/AddProduct.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\Users\\oskar\\Documents\\SKOLA - BACKEND\\LAB1\\components\\AddProduct.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


var containerForm = {
  display: 'flex',
  width: '310px',
  height: '50px',
  flexDirection: 'row',
  flexWrap: 'wrap'
};
var submitButton = {
  width: '300px',
  margin: '0',
  padding: '0'
};
var inputs = {
  height: '20px',
  width: '95px',
  margin: '0',
  padding: '0'
};

var AddProduct =
/*#__PURE__*/
function (_Component) {
  _inherits(AddProduct, _Component);

  function AddProduct(props) {
    var _this;

    _classCallCheck(this, AddProduct);

    _this = _possibleConstructorReturn(this, (AddProduct.__proto__ || Object.getPrototypeOf(AddProduct)).call(this, props));
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
        _this.props.addProduct(_this.state.nameAdd, _this.state.productAdd, _this.state.typeAdd);
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
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        style: inputs,
        placeholder: "Product",
        type: "text",
        name: "productAdd",
        value: this.state.productAdd,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
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
          lineNumber: 46
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
          lineNumber: 47
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        style: submitButton,
        onClick: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, "Add"));
    }
  }]);

  return AddProduct;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (AddProduct);

/***/ })

})
//# sourceMappingURL=4.d6a40f033fe793c57197.hot-update.js.map