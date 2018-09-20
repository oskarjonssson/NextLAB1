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
          className: "jsx-1281031939"
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
          className: "jsx-1281031939"
        }, "REMOVE"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: "1281031939",
          css: "button.jsx-1281031939:hover{border-bottom:0.5px solid black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEZldGNoRGF0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0SW9CLEFBSVksZ0NBQUMiLCJmaWxlIjoiY29tcG9uZW50c1xcRmV0Y2hEYXRhLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcb3NrYXJcXERvY3VtZW50c1xcU0tPTEEgLSBCQUNLRU5EXFxMQUIxIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEVkaXRQcm9kdWN0QnV0dG9uIGZyb20gJy4vRWRpdFByb2R1Y3RCdXR0b24uanMnXHJcbmltcG9ydCBBZGRQcm9kdWN0IGZyb20gJy4vQWRkUHJvZHVjdC5qcydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuY29uc3QgQVBJID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvZ2V0cHJvZHVjdHMnO1xyXG5cclxuLy9DU1MgU3R5bGVzIFN0YXJ0LlxyXG5jb25zdCBidXR0b25TdHlsZSA9IHtcclxuICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICB3aWR0aDogJzIwMHB4JyxcclxuICBoZWlnaHQ6ICczMDBweCcsXHJcbiAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gIGJvcmRlcjogJ25vbmUnLFxyXG4gIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgY29sb3I6ICdsaWdodGdyYXknLFxyXG4gIG1hcmdpbjogJzEwcHgnLFxyXG4gIHBhZGRpbmc6ICcyMHB4JyxcclxuICBmb250RmFtaWx5OiAnTXVsaScsXHJcbiAgV2Via2l0Qm94U2hhZG93OicwcHggMHB4IDE5cHggMHB4IHJnYmEoMCwwLDAsMC4yKScsXHJcbiAgTW96Qm94U2hhZG93OicgMHB4IDBweCAxOXB4IDBweCByZ2JhKDAsMCwwLDAuMiknLFxyXG4gIEJveFNoYWRvdzogJzBweCAwcHggMTlweCAwcHggcmdiYSgwLDAsMCwwLjIpJ1xyXG59O1xyXG5cclxuY29uc3QgZGl2V3JhcHBlciA9IHtcclxuICBkaXNwbGF5OiAnZmxleCcsXHJcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG59XHJcblxyXG5jb25zdCBjb250YWluZXJJbmZvID0ge1xyXG4gIHdpZHRoOiAnOTAlJyxcclxuICBoZWlodDogJzEwMHB4J1xyXG59XHJcblxyXG5jb25zdCBjb250YWluZXJGZXRjaCA9IHtcclxuICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgYWxpZ25JdGVtczogJ2NlbnRlcidcclxufVxyXG5cclxuY29uc3QgY29udGFpbmVyQnV0dG9ucyA9IHtcclxuICB3aWR0aDogJzEwMCUnLFxyXG59XHJcblxyXG5jb25zdCBidXR0b25zU3R5bGUgPSB7XHJcbiAgZm9udEZhbWlseTogJ011bGknLFxyXG4gIHdpZHRoOiAnMTAwJScsXHJcbiAgYm9yZGVyOiAnbm9uZScsXHJcbiAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gIG91dGxpbmU6ICdub25lJyxcclxuICBib3JkZXJCb3R0b206ICcwLjVweCBzb2xpZCBsaWdodGdyYXknLFxyXG4gIG1hcmdpblRvcDogJzEwcHgnLFxyXG4gICc6aG92ZXInOiB7XHJcbiAgIGJvcmRlckJvdHRvbTogJzAuNXB4IHNvbGlkIGJsYWNrJ1xyXG4gfVxyXG59XHJcbi8vQ1NTIFN0eWxlcyBFbmQuXHJcblxyXG5cclxuY2xhc3MgRmV0Y2hEYXRhIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgYXBpRGF0YTogW10sXHJcbiAgICB9XHJcbiAgICB0aGlzLmRlbGV0ZURhdGEgPSB0aGlzLmRlbGV0ZURhdGEuYmluZCgpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLmZldGNoRnVuY3Rpb24oKTtcclxuICB9XHJcblxyXG4gIC8vSMOkbXRhciBoZW0gdsOlcmFuIGRhdGEgZnLDpW4gc2VydmVybiB2aSBzasOkbHZhIGhhciBzdGFydGF0IHVwcCBtZWQgaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9nZXRwcm9kdWN0c1xyXG4gIGZldGNoRnVuY3Rpb24oKXtcclxuICAgIGZldGNoKEFQSSlcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKGRhdGEgPT4gdGhpcy5zZXRTdGF0ZSh7IGFwaURhdGE6IGRhdGEgfSkpXHJcbiAgfVxyXG5cclxuICBlZGl0UHJvZHVjdCA9IChuYW1lLCBwcm9kdWN0LCB0eXBlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmFwaURhdGEpO1xyXG4gICAgbGV0IG5ld0RhdGEgPSBbLi4udGhpcy5zdGF0ZS5hcGlEYXRhXTtcclxuICAgIGxldCBpbmRleCA9IG5ld0RhdGEuZmluZEluZGV4KHAgPT4gcC5uYW1lID09PSBuYW1lKTtcclxuICAgIG5ld0RhdGFbaW5kZXhdLnByb2R1Y3QgPSBwcm9kdWN0O1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IG5ld0RhdGF9KVxyXG4gIH1cclxuXHJcbiAgZGVsZXRlRGF0YSA9IChuYW1lLCBwcm9kdWN0KSA9PiB7XHJcbiAgICAvKioqIERFTEVURSBSRVFVRVNUIEZFVENIICoqKi9cclxuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpLycgKyBuYW1lLCAgeyBtZXRob2Q6ICdERUxFVEUnIH0pXHJcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgbGV0IG5ld0RhdGEgPSBbLi4udGhpcy5zdGF0ZS5hcGlEYXRhXTtcclxuICAgICAgbGV0IGluZGV4ID0gbmV3RGF0YS5maW5kSW5kZXgocCA9PiBwLm5hbWUgPT09IG5hbWUpO1xyXG4gICAgICBuZXdEYXRhW2luZGV4XS5wcm9kdWN0ID0gcHJvZHVjdDtcclxuICAgICAgbmV3RGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYXBpRGF0YTogbmV3RGF0YX0pXHJcbiAgICAgIGNvbnNvbGUubG9nKG5ld0RhdGEpO1xyXG4gICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXMpICsgJyByZW1vdmVkIHN1Y2Nlc3NmdWx5Jyk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgYWRkUHJvZHVjdCA9IChuYW1lLCBwcm9kdWN0ICwgdHlwZSkgPT4ge1xyXG4gICAgbGV0IG9iaiA9IHtwcm9kdWN0LCB0eXBlICwgbmFtZX1cclxuLypcclxuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpLycrbmFtZSwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqKSxcclxuICAgIH0pXHJcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKCdTdWNjZXNzOicsIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSkpXHJcblxyXG4gICAgICAgIH0pKi9cclxuICAgICAgICBsZXQgbmV3RGF0YSA9IFsuLi50aGlzLnN0YXRlLmFwaURhdGFdO1xyXG4gICAgICAgIG5ld0RhdGEucHVzaChvYmopO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld0RhdGEpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFwaURhdGE6IG5ld0RhdGF9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICB7LypTa3JpdmVyIHV0IGFsbCBkYXRhIHZpIGhhciBow6RtdGF0IGhlbSBvY2ggZ8O2ciBvbSBkZW4gdGlsbCBKU1gtZWxlbWVudCovfVxyXG4gIGNvbnN0IGxpc3QgPSB0aGlzLnN0YXRlLmFwaURhdGEubWFwKGRhdGEgPT5cclxuICAgIDxkaXYgc3R5bGU9e2J1dHRvblN0eWxlfSBrZXk9e2RhdGEubmFtZX0+XHJcbiAgICAgIDxkaXYgc3R5bGU9e2NvbnRhaW5lckluZm99PlxyXG4gICAgICAgIDxwPlByb2R1Y3Q6IHtkYXRhLnByb2R1Y3R9PC9wPlxyXG4gICAgICAgIDxwPk5hbWU6IHtkYXRhLm5hbWV9PC9wPlxyXG4gICAgICAgIDxwPlR5cGU6IHtkYXRhLnR5cGV9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzdHlsZT17Y29udGFpbmVyQnV0dG9uc30+XHJcbiAgICAgICAgPEVkaXRQcm9kdWN0QnV0dG9uXHJcbiAgICAgICAgICBlZGl0UHJvZHVjdD17dGhpcy5lZGl0UHJvZHVjdH1cclxuICAgICAgICAgIHBhc3NQcm9kdWN0PXtkYXRhLnByb2R1Y3R9XHJcbiAgICAgICAgICBwYXNzTmFtZT17ZGF0YS5uYW1lfVxyXG4gICAgICAgICAgcGFzc1R5cGU9e2RhdGEudHlwZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b24gc3R5bGU9e2J1dHRvbnNTdHlsZX0gb25DbGljaz17ICgpID0+IHRoaXMuZGVsZXRlRGF0YShkYXRhLm5hbWUpfT5SRU1PVkU8L2J1dHRvbj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIGJ1dHRvbjpob3ZlcntcclxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCBibGFja1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgbm9SZXMgPSA8ZGl2PlwiRHUgaGFyIGludGUgc3RhcnRhdCBzZXJ2ZW4gdGlsbCBBUEknZXRcIjwvZGl2PlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17Y29udGFpbmVyRmV0Y2h9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU11bGlcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxBZGRQcm9kdWN0XHJcbiAgICAgICAgICBhZGRQcm9kdWN0PXt0aGlzLmFkZFByb2R1Y3R9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IHN0eWxlPXtkaXZXcmFwcGVyfT5cclxuICAgICAgICAgIHtsaXN0Lmxlbmd0aCA+IDAgPyBsaXN0IDogbm9SZXN9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZXRjaERhdGE7XHJcbiJdfQ== */\n/*@ sourceURL=components\\FetchData.js */"
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
//# sourceMappingURL=4.937688d31f3b782001ae.hot-update.js.map