webpackHotUpdate(4,{

/***/ "./components/FetchData.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: C:\\Users\\Dennis\\Desktop\\FEU17\\Serverside Programering\\Labbar\\NextLAB1\\components\\FetchData.js: Unexpected token (46:15)\n\n  44 |   render() {\n  45 |   {/*Skriver ut all data vi har hämtat hem och gör om den till JSX-element*/}\n> 46 |   const list = if(this.state.apiData)\n     |                ^\n  47 |   {\n  48 |     this.state.apiData.map(data =>\n  49 |     <div style={buttonStyle} key={data.name}>\n    at _class.raise (C:\\Users\\Dennis\\Desktop\\FEU17\\Serverside Programering\\Labbar\\NextLAB1\\node_modules\\babylon\\lib\\index.js:778:15)\n    at _class.unexpected (C:\\Users\\Dennis\\Desktop\\FEU17\\Serverside Programering\\Labbar\\NextLAB1\\node_modules\\babylon\\lib\\index.js:2063:16)\n    at _class.parseExprAtom (C:\\Users\\Dennis\\Desktop\\FEU17\\Serverside Programering\\Labbar\\NextLAB1\\node_modules\\babylon\\lib\\index.js:3125:20)\n    at _class.parseExprAtom (C:\\Users\\Dennis\\Desktop\\FEU17\\Serverside Programering\\Labbar\\NextLAB1\\node_modules\\babylon\\lib\\index.js:8086:52)\n    at _class.parseExprAtom (C:\\Users\\Dennis\\Desktop\\FEU17\\Serverside Programering\\Labbar\\NextLAB1\\node_modules\\babylon\\lib\\index.js:8086:52)\n    at _class.parseExprAtom (C:\\Users\\Dennis\\Desktop\\FEU17\\Serverside Programering\\Labbar\\NextLAB1\\node_modules\\babylon\\lib\\index.js:8086:52)\n    at _class.parseExprSubscripts (C:\\Users\\Dennis\\Desktop\\FEU17\\Serverside Programering\\Labbar\\NextLAB1\\node_modules\\babylon\\lib\\index.js:2725:21)\n    at _class.parseMaybeUnary (C:\\Users\\Dennis\\Desktop\\FEU17\\Serverside Programering\\Labbar\\NextLAB1\\node_modules\\babylon\\lib\\index.js:2704:21)\n    at _class.parseExprOps (C:\\Users\\Dennis\\Desktop\\FEU17\\Serverside Programering\\Labbar\\NextLAB1\\node_modules\\babylon\\lib\\index.js:2616:21)\n    at _class.parseMaybeConditional (C:\\Users\\Dennis\\Desktop\\FEU17\\Serverside Programering\\Labbar\\NextLAB1\\node_modules\\babylon\\lib\\index.js:2588:21)\n    at _class.parseMaybeAssign (C:\\Users\\Dennis\\Desktop\\FEU17\\Serverside Programering\\Labbar\\NextLAB1\\node_modules\\babylon\\lib\\index.js:2546:21)\n    at _class.parseVar (C:\\Users\\Dennis\\Desktop\\FEU17\\Serverside Programering\\Labbar\\NextLAB1\\node_modules\\babylon\\lib\\index.js:4539:26)\n    at _class.parseVarStatement (C:\\Users\\Dennis\\Desktop\\FEU17\\Serverside Programering\\Labbar\\NextLAB1\\node_modules\\babylon\\lib\\index.js:4369:10)\n    at _class.parseStatementContent (C:\\Users\\Dennis\\Desktop\\FEU17\\Serverside Programering\\Labbar\\NextLAB1\\node_modules\\babylon\\lib\\index.js:3976:21)\n    at _class.parseStatement (C:\\Users\\Dennis\\Desktop\\FEU17\\Serverside Programering\\Labbar\\NextLAB1\\node_modules\\babylon\\lib\\index.js:3926:17)\n    at _class.parseBlockOrModuleBlockBody (C:\\Users\\Dennis\\Desktop\\FEU17\\Serverside Programering\\Labbar\\NextLAB1\\node_modules\\babylon\\lib\\index.js:4470:23)");

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_FetchData_js__ = __webpack_require__("./components/FetchData.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_FetchData_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_FetchData_js__);
var _jsxFileName = "C:\\Users\\Dennis\\Desktop\\FEU17\\Serverside Programering\\Labbar\\NextLAB1\\pages\\index.js";

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
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: headerWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "Welcome to an awesome API")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_FetchData_js__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
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
//# sourceMappingURL=4.2bacb046f15edd0c7d19.hot-update.js.map