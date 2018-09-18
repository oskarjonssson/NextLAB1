webpackHotUpdate(4,{

/***/ "./components/AddProduct.js":
false,

/***/ "./components/EditProductButton.js":
false,

/***/ "./components/FetchData.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: C:\\Users\\oskar\\Documents\\SKOLA - BACKEND\\LAB1\\components\\FetchData.js: Unexpected token, expected \",\" (42:50)\n\n  40 |   /*** DELETE REQUEST FETCH ***/\n  41 |   deleteData = () => {\n> 42 |     fetch(\"http://localhost:3001/api/getproducts\" { method: \"DELETE\" })\n     |                                                   ^\n  43 |     .then( data => data.json())\n  44 |     .then( res => {\n  45 |         console.log(res)\n    at _class.raise (C:\\Users\\oskar\\Documents\\SKOLA - BACKEND\\LAB1\\node_modules\\babylon\\lib\\index.js:778:15)\n    at _class.unexpected (C:\\Users\\oskar\\Documents\\SKOLA - BACKEND\\LAB1\\node_modules\\babylon\\lib\\index.js:2063:16)\n    at _class.expect (C:\\Users\\oskar\\Documents\\SKOLA - BACKEND\\LAB1\\node_modules\\babylon\\lib\\index.js:2051:28)\n    at _class.parseCallExpressionArguments (C:\\Users\\oskar\\Documents\\SKOLA - BACKEND\\LAB1\\node_modules\\babylon\\lib\\index.js:2913:14)\n    at _class.parseSubscript (C:\\Users\\oskar\\Documents\\SKOLA - BACKEND\\LAB1\\node_modules\\babylon\\lib\\index.js:2830:32)\n    at _class.parseSubscripts (C:\\Users\\oskar\\Documents\\SKOLA - BACKEND\\LAB1\\node_modules\\babylon\\lib\\index.js:2745:19)\n    at _class.parseExprSubscripts (C:\\Users\\oskar\\Documents\\SKOLA - BACKEND\\LAB1\\node_modules\\babylon\\lib\\index.js:2735:17)\n    at _class.parseMaybeUnary (C:\\Users\\oskar\\Documents\\SKOLA - BACKEND\\LAB1\\node_modules\\babylon\\lib\\index.js:2704:21)\n    at _class.parseExprOps (C:\\Users\\oskar\\Documents\\SKOLA - BACKEND\\LAB1\\node_modules\\babylon\\lib\\index.js:2616:21)\n    at _class.parseMaybeConditional (C:\\Users\\oskar\\Documents\\SKOLA - BACKEND\\LAB1\\node_modules\\babylon\\lib\\index.js:2588:21)\n    at _class.parseMaybeAssign (C:\\Users\\oskar\\Documents\\SKOLA - BACKEND\\LAB1\\node_modules\\babylon\\lib\\index.js:2546:21)\n    at _class.parseExpression (C:\\Users\\oskar\\Documents\\SKOLA - BACKEND\\LAB1\\node_modules\\babylon\\lib\\index.js:2499:21)\n    at _class.parseStatementContent (C:\\Users\\oskar\\Documents\\SKOLA - BACKEND\\LAB1\\node_modules\\babylon\\lib\\index.js:4040:21)\n    at _class.parseStatement (C:\\Users\\oskar\\Documents\\SKOLA - BACKEND\\LAB1\\node_modules\\babylon\\lib\\index.js:3926:17)\n    at _class.parseBlockOrModuleBlockBody (C:\\Users\\oskar\\Documents\\SKOLA - BACKEND\\LAB1\\node_modules\\babylon\\lib\\index.js:4470:23)\n    at _class.parseBlockBody (C:\\Users\\oskar\\Documents\\SKOLA - BACKEND\\LAB1\\node_modules\\babylon\\lib\\index.js:4457:10)");

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_FetchData_js__ = __webpack_require__("./components/FetchData.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_FetchData_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_FetchData_js__);
var _jsxFileName = "C:\\Users\\oskar\\Documents\\SKOLA - BACKEND\\LAB1\\pages\\index.js";

 //CSS Start.

var headerWrapper = {
  fontFamily: 'Arial',
  fontSize: '36px',
  textAlign: 'center' //CSS End.

};

var Index = function Index(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: headerWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Welcome to an awesome API")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_FetchData_js__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.96e77af4ad5e38011f87.hot-update.js.map