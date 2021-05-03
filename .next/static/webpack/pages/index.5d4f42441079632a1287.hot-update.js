webpackHotUpdate_N_E("pages/index",{

/***/ "./components/AfterLogin.jsx":
/*!***********************************!*\
  !*** ./components/AfterLogin.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return afterLogin; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/hooks */ \"./lib/hooks.jsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/kevin/Desktop/Next.js-Mongodb-Authentication-App/components/AfterLogin.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\nfunction afterLogin() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      errorMsg = _useState[0],\n      setErrorMsg = _useState[1];\n\n  var _useUser = Object(_lib_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useUser\"])(),\n      _useUser2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useUser, 1),\n      user = _useUser2[0];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      Loader = _useState2[0],\n      updateLoad = _useState2[1];\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var body, res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              updateLoad(true);\n              body = {\n                message: e.currentTarget.message.value,\n                name: user.name\n              };\n              _context.next = 5;\n              return fetch(\"/api/message\", {\n                method: \"POST\",\n                headers: {\n                  \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(body)\n              });\n\n            case 5:\n              res = _context.sent;\n\n              if (!(res.status === 201)) {\n                _context.next = 10;\n                break;\n              }\n\n              M.toast({\n                html: \"Message sent\",\n                classes: \"green\"\n              });\n              _context.next = 15;\n              break;\n\n            case 10:\n              _context.t0 = setErrorMsg;\n              _context.next = 13;\n              return res.text();\n\n            case 13:\n              _context.t1 = _context.sent;\n              (0, _context.t0)(_context.t1);\n\n            case 15:\n              updateLoad(false);\n\n            case 16:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(\"div\", {\n    className: \"row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"col s12 m12\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"card-panel horizontal blue \",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    className: \"white-text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }, \"Hey you made it here \", user ? user.name : \"Stranger\", \", we all were waiting for you.\", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }), \"I hope you like this Authentication module, Its simple yet important to know. I'll be updating it with many new stuff frequently.\", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }), \"Till then you can look around.\", __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  }, \" Don't forget to drop a message for me.\"))), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, \" \", user.passKey)), errorMsg ? __jsx(\"p\", {\n    style: {\n      color: \"teal\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 19\n    }\n  }, errorMsg) : null, __jsx(\"form\", {\n    className: \"col s12\",\n    onSubmit: handleSubmit,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"input-field col s12 m9\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, __jsx(\"i\", {\n    className: \"material-icons prefix\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 11\n    }\n  }, \"mode_edit\"), __jsx(\"textarea\", {\n    id: \"message\",\n    className: \"materialize-textarea\",\n    name: \"message\",\n    required: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"message\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 11\n    }\n  }, \"Message for developer\")), __jsx(\"button\", {\n    className: \"btn-small waves-effect waves-light blue\",\n    type: \"submit\",\n    style: {\n      marginTop: \"1.7rem\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }, \"Send\", !Loader ? __jsx(\"i\", {\n    className: \"material-icons right\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }, \"send\") : __jsx(\"div\", {\n    \"class\": \"preloader-wrapper small active\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    \"class\": \"spinner-layer spinner-green-only\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 15\n    }\n  }, __jsx(\"div\", {\n    \"class\": \"circle-clipper left\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    \"class\": \"circle\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 19\n    }\n  })), __jsx(\"div\", {\n    \"class\": \"gap-patch\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    \"class\": \"circle\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 19\n    }\n  })), __jsx(\"div\", {\n    \"class\": \"circle-clipper right\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    \"class\": \"circle\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 19\n    }\n  })))))));\n}\n\n_s(afterLogin, \"KpVNkSe3I05HHnavChUSW8QlnRQ=\", false, function () {\n  return [_lib_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useUser\"]];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZnRlckxvZ2luLmpzeD82ZWU2Il0sIm5hbWVzIjpbImFmdGVyTG9naW4iLCJ1c2VTdGF0ZSIsImVycm9yTXNnIiwic2V0RXJyb3JNc2ciLCJ1c2VVc2VyIiwidXNlciIsIkxvYWRlciIsInVwZGF0ZUxvYWQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJib2R5IiwibWVzc2FnZSIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsIm5hbWUiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwic3RhdHVzIiwiTSIsInRvYXN0IiwiaHRtbCIsImNsYXNzZXMiLCJ0ZXh0IiwicGFzc0tleSIsImNvbG9yIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULEdBQXNCO0FBQUE7O0FBQ25DLGtCQUFnQ0Msc0RBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUEsTUFBT0MsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxpQkFBZUMsMERBQU8sRUFBdEI7QUFBQTtBQUFBLE1BQU9DLElBQVA7O0FBQ0EsbUJBQTZCSixzREFBUSxDQUFDLEtBQUQsQ0FBckM7QUFBQSxNQUFPSyxNQUFQO0FBQUEsTUFBZUMsVUFBZjs7QUFDQSxNQUFNQyxZQUFZO0FBQUEsZ01BQUcsaUJBQU9DLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CQSxlQUFDLENBQUNDLGNBQUY7QUFDQUgsd0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDTUksa0JBSGEsR0FHTjtBQUNYQyx1QkFBTyxFQUFFSCxDQUFDLENBQUNJLGFBQUYsQ0FBZ0JELE9BQWhCLENBQXdCRSxLQUR0QjtBQUVYQyxvQkFBSSxFQUFFVixJQUFJLENBQUNVO0FBRkEsZUFITTtBQUFBO0FBQUEscUJBT0RDLEtBQUssQ0FBQyxjQUFELEVB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O0FBQUssYUFBTSxnQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFNLGtDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQU0scUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBTSxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBSyxhQUFNLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBTSxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUpGLEVBT0U7QUFBSyxhQUFNLHNCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQU0sUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FQRixDQURGLENBVEosQ0FYRixDQWxCRixDQURGO0FBeUREOztHQWhGdUJOLFU7VUFFUEksa0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL0FmdGVyTG9naW4uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSBcIi4uL2xpYi9ob29rc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZnRlckxvZ2luKCkge1xuICBjb25zdCBbZXJyb3JNc2csIHNldEVycm9yTXNnXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdXNlcl0gPSB1c2VVc2VyKCk7XG4gIGNvbnN0IFtMb2FkZXIsIHVwZGF0ZUxvYWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB1cGRhdGVMb2FkKHRydWUpO1xuICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgICBtZXNzYWdlOiBlLmN1cnJlbnRUYXJnZXQubWVzc2FnZS52YWx1ZSxcbiAgICAgIG5hbWU6IHVzZXIubmFtZSxcbiAgICB9O1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS9tZXNzYWdlXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICB9KTtcbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICBNLnRvYXN0KHsgaHRtbDogXCJNZXNzYWdlIHNlbnRcIiwgY2xhc3NlczogXCJncmVlblwiIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFcnJvck1zZyhhd2FpdCByZXMudGV4dCgpKTtcbiAgICB9XG4gICAgdXBkYXRlTG9hZChmYWxzZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtMTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXBhbmVsIGhvcml6b250YWwgYmx1ZSBcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3aGl0ZS10ZXh0XCI+XG4gICAgICAgICAgICBIZXkgeW91IG1hZGUgaXQgaGVyZSB7dXNlciA/IHVzZXIubmFtZSA6IFwiU3RyYW5nZXJcIn0sIHdlIGFsbCB3ZXJlXG4gICAgICAgICAgICB3YWl0aW5nIGZvciB5b3UuXG4gICAgICAgICAgICA8YnIgLz5JIGhvcGUgeW91IGxpa2UgdGhpcyBBdXRoZW50aWNhdGlvbiBtb2R1bGUsIEl0cyBzaW1wbGUgeWV0XG4gICAgICAgICAgICBpbXBvcnRhbnQgdG8ga25vdy4gSSdsbCBiZSB1cGRhdGluZyBpdCB3aXRoIG1hbnkgbmV3IHN0dWZmXG4gICAgICAgICAgICBmcmVxdWVudGx5LlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIFRpbGwgdGhlbiB5b3UgY2FuIGxvb2sgYXJvdW5kLlxuICAgICAgICAgICAgPHN0cm9uZz4gRG9uJ3QgZm9yZ2V0IHRvIGRyb3AgYSBtZXNzYWdlIGZvciBtZS48L3N0cm9uZz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PiB7dXNlci5wYXNzS2V5fTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7ZXJyb3JNc2cgPyA8cCBzdHlsZT17eyBjb2xvcjogXCJ0ZWFsXCIgfX0+e2Vycm9yTXNnfTwvcD4gOiBudWxsfVxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiY29sIHMxMlwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzMTIgbTlcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBwcmVmaXhcIj5tb2RlX2VkaXQ8L2k+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICBpZD1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF0ZXJpYWxpemUtdGV4dGFyZWFcIlxuICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIj5NZXNzYWdlIGZvciBkZXZlbG9wZXI8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1zbWFsbCB3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYmx1ZVwiXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEuN3JlbVwiIH19XG4gICAgICAgID5cbiAgICAgICAgICBTZW5kXG4gICAgICAgICAgeyFMb2FkZXIgPyAoXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyByaWdodFwiPnNlbmQ8L2k+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmVsb2FkZXItd3JhcHBlciBzbWFsbCBhY3RpdmVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgc3Bpbm5lci1ncmVlbi1vbmx5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FwLXBhdGNoXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AfterLogin.jsx\n");

/***/ })

})