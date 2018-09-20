webpackHotUpdate(4,{

/***/ "./components/FetchData.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EditProductButton_js__ = __webpack_require__("./components/EditProductButton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AddProduct_js__ = __webpack_require__("./components/AddProduct.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_head__);
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
  height: '300px',
  backgroundColor: 'white',
  border: 'none',
  borderRadius: '5px',
  color: 'lightgray',
  margin: '10px',
  padding: '20px',
  fontFamily: 'Muli',
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
  flexDirection: 'column',
  alignItems: 'center'
};
var containerButtons = {
  width: '100%'
};
var buttonsStyle = {
  fontFamily: 'Muli',
  width: '100%',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  outline: 'none',
  borderBottom: '0.5px solid lightgray',
  marginTop: '10px',
  ':hover': {
    borderBottom: '0.5px solid black'
  } //CSS Styles End.

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
        console.log(_this.state.apiData);

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
    Object.defineProperty(_assertThisInitialized(_this), "deleteData", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(name, product) {
        /*** DELETE REQUEST FETCH ***/
        fetch('http://localhost:3001/api/' + name, {
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

          console.log(newData);
          console.log(JSON.stringify(res) + ' removed successfuly');
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "addProduct", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(name, product, type) {
        var obj = {
          product: product,
          type: type,
          name: name
          /*
              fetch('http://localhost:3001/api/'+name, {
                method: 'POST',
                body: JSON.stringify(obj),
              })
              .then(res => res.json())
              .then(response => console.log('Success:', JSON.stringify(response)))
          
                  })*/

        };

        var newData = _toConsumableArray(_this.state.apiData);

        newData.push(obj);
        console.log(newData);

        _this.setState({
          apiData: newData
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
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          style: buttonStyle,
          key: data.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          style: containerInfo,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          }
        }, "Product: ", data.product), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          }
        }, "Name: ", data.name), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          }
        }, "Type: ", data.type)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          style: containerButtons,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          className: "jsx-1199372745"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__EditProductButton_js__["a" /* default */], {
          editProduct: _this3.editProduct,
          passProduct: data.product,
          passName: data.name,
          passType: data.type,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
          style: buttonsStyle,
          onClick: function onClick() {
            return _this3.deleteData(data.name);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          },
          className: "jsx-1199372745"
        }, "REMOVE"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: "1199372745",
          css: "button.jsx-1199372745:hover{color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEZldGNoRGF0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0SW9CLEFBSVksWUFBQyIsImZpbGUiOiJjb21wb25lbnRzXFxGZXRjaERhdGEuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxvc2thclxcRG9jdW1lbnRzXFxTS09MQSAtIEJBQ0tFTkRcXExBQjEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRWRpdFByb2R1Y3RCdXR0b24gZnJvbSAnLi9FZGl0UHJvZHVjdEJ1dHRvbi5qcydcclxuaW1wb3J0IEFkZFByb2R1Y3QgZnJvbSAnLi9BZGRQcm9kdWN0LmpzJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5jb25zdCBBUEkgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9nZXRwcm9kdWN0cyc7XHJcblxyXG4vL0NTUyBTdHlsZXMgU3RhcnQuXHJcbmNvbnN0IGJ1dHRvblN0eWxlID0ge1xyXG4gIGRpc3BsYXk6ICdmbGV4JyxcclxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gIHdpZHRoOiAnMjAwcHgnLFxyXG4gIGhlaWdodDogJzMwMHB4JyxcclxuICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgYm9yZGVyOiAnbm9uZScsXHJcbiAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICBjb2xvcjogJ2xpZ2h0Z3JheScsXHJcbiAgbWFyZ2luOiAnMTBweCcsXHJcbiAgcGFkZGluZzogJzIwcHgnLFxyXG4gIGZvbnRGYW1pbHk6ICdNdWxpJyxcclxuICBXZWJraXRCb3hTaGFkb3c6JzBweCAwcHggMTlweCAwcHggcmdiYSgwLDAsMCwwLjIpJyxcclxuICBNb3pCb3hTaGFkb3c6JyAwcHggMHB4IDE5cHggMHB4IHJnYmEoMCwwLDAsMC4yKScsXHJcbiAgQm94U2hhZG93OiAnMHB4IDBweCAxOXB4IDBweCByZ2JhKDAsMCwwLDAuMiknXHJcbn07XHJcblxyXG5jb25zdCBkaXZXcmFwcGVyID0ge1xyXG4gIGRpc3BsYXk6ICdmbGV4JyxcclxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbn1cclxuXHJcbmNvbnN0IGNvbnRhaW5lckluZm8gPSB7XHJcbiAgd2lkdGg6ICc5MCUnLFxyXG4gIGhlaWh0OiAnMTAwcHgnXHJcbn1cclxuXHJcbmNvbnN0IGNvbnRhaW5lckZldGNoID0ge1xyXG4gIGRpc3BsYXk6ICdmbGV4JyxcclxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xyXG59XHJcblxyXG5jb25zdCBjb250YWluZXJCdXR0b25zID0ge1xyXG4gIHdpZHRoOiAnMTAwJScsXHJcbn1cclxuXHJcbmNvbnN0IGJ1dHRvbnNTdHlsZSA9IHtcclxuICBmb250RmFtaWx5OiAnTXVsaScsXHJcbiAgd2lkdGg6ICcxMDAlJyxcclxuICBib3JkZXI6ICdub25lJyxcclxuICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgb3V0bGluZTogJ25vbmUnLFxyXG4gIGJvcmRlckJvdHRvbTogJzAuNXB4IHNvbGlkIGxpZ2h0Z3JheScsXHJcbiAgbWFyZ2luVG9wOiAnMTBweCcsXHJcbiAgJzpob3Zlcic6IHtcclxuICAgYm9yZGVyQm90dG9tOiAnMC41cHggc29saWQgYmxhY2snXHJcbiB9XHJcbn1cclxuLy9DU1MgU3R5bGVzIEVuZC5cclxuXHJcblxyXG5jbGFzcyBGZXRjaERhdGEgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBhcGlEYXRhOiBbXSxcclxuICAgIH1cclxuICAgIHRoaXMuZGVsZXRlRGF0YSA9IHRoaXMuZGVsZXRlRGF0YS5iaW5kKCk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuZmV0Y2hGdW5jdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgLy9Iw6RtdGFyIGhlbSB2w6VyYW4gZGF0YSBmcsOlbiBzZXJ2ZXJuIHZpIHNqw6RsdmEgaGFyIHN0YXJ0YXQgdXBwIG1lZCBodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2dldHByb2R1Y3RzXHJcbiAgZmV0Y2hGdW5jdGlvbigpe1xyXG4gICAgZmV0Y2goQVBJKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oZGF0YSA9PiB0aGlzLnNldFN0YXRlKHsgYXBpRGF0YTogZGF0YSB9KSlcclxuICB9XHJcblxyXG4gIGVkaXRQcm9kdWN0ID0gKG5hbWUsIHByb2R1Y3QsIHR5cGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuYXBpRGF0YSk7XHJcbiAgICBsZXQgbmV3RGF0YSA9IFsuLi50aGlzLnN0YXRlLmFwaURhdGFdO1xyXG4gICAgbGV0IGluZGV4ID0gbmV3RGF0YS5maW5kSW5kZXgocCA9PiBwLm5hbWUgPT09IG5hbWUpO1xyXG4gICAgbmV3RGF0YVtpbmRleF0ucHJvZHVjdCA9IHByb2R1Y3Q7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogbmV3RGF0YX0pXHJcbiAgfVxyXG5cclxuICBkZWxldGVEYXRhID0gKG5hbWUsIHByb2R1Y3QpID0+IHtcclxuICAgIC8qKiogREVMRVRFIFJFUVVFU1QgRkVUQ0ggKioqL1xyXG4gICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvJyArIG5hbWUsICB7IG1ldGhvZDogJ0RFTEVURScgfSlcclxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICBsZXQgbmV3RGF0YSA9IFsuLi50aGlzLnN0YXRlLmFwaURhdGFdO1xyXG4gICAgICBsZXQgaW5kZXggPSBuZXdEYXRhLmZpbmRJbmRleChwID0+IHAubmFtZSA9PT0gbmFtZSk7XHJcbiAgICAgIG5ld0RhdGFbaW5kZXhdLnByb2R1Y3QgPSBwcm9kdWN0O1xyXG4gICAgICBuZXdEYXRhLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhcGlEYXRhOiBuZXdEYXRhfSlcclxuICAgICAgY29uc29sZS5sb2cobmV3RGF0YSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlcykgKyAnIHJlbW92ZWQgc3VjY2Vzc2Z1bHknKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBhZGRQcm9kdWN0ID0gKG5hbWUsIHByb2R1Y3QgLCB0eXBlKSA9PiB7XHJcbiAgICBsZXQgb2JqID0ge3Byb2R1Y3QsIHR5cGUgLCBuYW1lfVxyXG4vKlxyXG4gICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvJytuYW1lLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvYmopLFxyXG4gICAgfSlcclxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gY29uc29sZS5sb2coJ1N1Y2Nlc3M6JywgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKSlcclxuXHJcbiAgICAgICAgfSkqL1xyXG4gICAgICAgIGxldCBuZXdEYXRhID0gWy4uLnRoaXMuc3RhdGUuYXBpRGF0YV07XHJcbiAgICAgICAgbmV3RGF0YS5wdXNoKG9iaik7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3RGF0YSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYXBpRGF0YTogbmV3RGF0YX0pXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gIHsvKlNrcml2ZXIgdXQgYWxsIGRhdGEgdmkgaGFyIGjDpG10YXQgaGVtIG9jaCBnw7ZyIG9tIGRlbiB0aWxsIEpTWC1lbGVtZW50Ki99XHJcbiAgY29uc3QgbGlzdCA9IHRoaXMuc3RhdGUuYXBpRGF0YS5tYXAoZGF0YSA9PlxyXG4gICAgPGRpdiBzdHlsZT17YnV0dG9uU3R5bGV9IGtleT17ZGF0YS5uYW1lfT5cclxuICAgICAgPGRpdiBzdHlsZT17Y29udGFpbmVySW5mb30+XHJcbiAgICAgICAgPHA+UHJvZHVjdDoge2RhdGEucHJvZHVjdH08L3A+XHJcbiAgICAgICAgPHA+TmFtZToge2RhdGEubmFtZX08L3A+XHJcbiAgICAgICAgPHA+VHlwZToge2RhdGEudHlwZX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJCdXR0b25zfT5cclxuICAgICAgICA8RWRpdFByb2R1Y3RCdXR0b25cclxuICAgICAgICAgIGVkaXRQcm9kdWN0PXt0aGlzLmVkaXRQcm9kdWN0fVxyXG4gICAgICAgICAgcGFzc1Byb2R1Y3Q9e2RhdGEucHJvZHVjdH1cclxuICAgICAgICAgIHBhc3NOYW1lPXtkYXRhLm5hbWV9XHJcbiAgICAgICAgICBwYXNzVHlwZT17ZGF0YS50eXBlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBzdHlsZT17YnV0dG9uc1N0eWxlfSBvbkNsaWNrPXsgKCkgPT4gdGhpcy5kZWxldGVEYXRhKGRhdGEubmFtZSl9PlJFTU9WRTwvYnV0dG9uPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgYnV0dG9uOmhvdmVye1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBibGFja1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgbm9SZXMgPSA8ZGl2PlwiRHUgaGFyIGludGUgc3RhcnRhdCBzZXJ2ZW4gdGlsbCBBUEknZXRcIjwvZGl2PlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17Y29udGFpbmVyRmV0Y2h9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU11bGlcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxBZGRQcm9kdWN0XHJcbiAgICAgICAgICBhZGRQcm9kdWN0PXt0aGlzLmFkZFByb2R1Y3R9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IHN0eWxlPXtkaXZXcmFwcGVyfT5cclxuICAgICAgICAgIHtsaXN0Lmxlbmd0aCA+IDAgPyBsaXN0IDogbm9SZXN9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZXRjaERhdGE7XHJcbiJdfQ== */\n/*@ sourceURL=components\\FetchData.js */"
        })));
      });
      var noRes = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, "\"Du har inte startat serven till API'et\"");
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: containerFetch,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Muli",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__AddProduct_js__["a" /* default */], {
        addProduct: this.addProduct,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: divWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, list.length > 0 ? list : noRes));
    }
  }]);

  return FetchData;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (FetchData);

/***/ })

})
//# sourceMappingURL=4.050fba43adfb3ee7eee1.hot-update.js.map