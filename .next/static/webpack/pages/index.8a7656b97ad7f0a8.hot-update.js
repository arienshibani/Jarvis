"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/AppBar */ \"./pages/components/AppBar.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components_Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Accordion */ \"./pages/components/Accordion.js\");\n/* harmony import */ var _components_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Select */ \"./pages/components/Select.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"loading\");\n    const handleLoading = ()=>{\n        setState(\"loading\");\n        setTimeout(()=>{\n            setState(\"results\");\n            console.log(\"Value changed to\", state);\n        }, 5000);\n        console.log(\"det funke\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        console.log(\"Value changed to\", state);\n    }, [\n        state\n    ]);\n    if (state === \"init\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: \"appbar\"\n                }, void 0, false, {\n                    fileName: \"/Users/ari/repos/Jarvis/pages/index.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    style: {\n                        display: \"flex\",\n                        alignItems: \"center\",\n                        flexDirection: \"column\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                paddingTop: \"5rem\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                    variant: \"h3\",\n                                    component: \"h3\",\n                                    children: \"Loan Process\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ari/repos/Jarvis/pages/index.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 9\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    style: {\n                                        maxWidth: \"100%\"\n                                    },\n                                    src: \"https://i.imgur.com/fG8C1V6.png\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ari/repos/Jarvis/pages/index.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 9\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ari/repos/Jarvis/pages/index.js\",\n                            lineNumber: 41,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            onClick: ()=>handleLoading(),\n                            style: {\n                                margin: \"5rem\"\n                            },\n                            variant: \"contained\",\n                            children: \"Analyze Process\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ari/repos/Jarvis/pages/index.js\",\n                            lineNumber: 50,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/ari/repos/Jarvis/pages/index.js\",\n                            lineNumber: 51,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ari/repos/Jarvis/pages/index.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true);\n    } else if (state === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            style: {\n                display: \"flex\",\n                alignItems: \"center\",\n                flexDirection: \"column\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                    variant: \"h3\",\n                    component: \"h3\",\n                    children: \"Doing super advanced AI analysis\"\n                }, void 0, false, {\n                    fileName: \"/Users/ari/repos/Jarvis/pages/index.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.CircularProgress, {}, void 0, false, {\n                    fileName: \"/Users/ari/repos/Jarvis/pages/index.js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                    fileName: \"/Users/ari/repos/Jarvis/pages/index.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ari/repos/Jarvis/pages/index.js\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, this);\n    } else if (state === \"results\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"RESULTS!!!! EVERYTHING LOOKS GOOD NICE STUFFF \"\n            }, void 0, false, {\n                fileName: \"/Users/ari/repos/Jarvis/pages/index.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this)\n        }, void 0, false);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \" jaja\"\n        }, void 0, false, {\n            fileName: \"/Users/ari/repos/Jarvis/pages/index.js\",\n            lineNumber: 83,\n            columnNumber: 7\n        }, this);\n    }\n}\n_s(Home, \"wM9t3JDpDZMRIYCr4B3khtHRzgk=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErQztBQUNzQjtBQUMvQjtBQUNlO0FBQ2Y7QUFDUTtBQUNLO0FBS3BDLFNBQVNXOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQUM7SUFFbkMsTUFBTUssZ0JBQWdCO1FBQ3BCRCxTQUFTO1FBRVRFLFdBQVc7WUFDVEYsU0FBUztZQUVURyxRQUFRQyxJQUFJLG9CQUFvQkw7UUFDbEMsR0FBRztRQUdISSxRQUFRQyxJQUFJO0lBQ2Q7SUFHQVAsZ0RBQVNBLENBQUM7UUFDUk0sUUFBUUMsSUFBSSxvQkFBb0JMO0lBQ2xDLEdBQUc7UUFBQ0E7S0FBTTtJQUdWLElBQUdBLFVBQVUsUUFBTztRQUNsQixxQkFDRTs7OEJBRUUsOERBQUNaLDBEQUFZQTtvQkFBQ2tCLFdBQVU7Ozs7Ozs4QkFFeEIsOERBQUNDO29CQUFLQyxPQUFPO3dCQUFDZCxTQUFTO3dCQUFRZSxZQUFZO3dCQUFVQyxlQUFlO29CQUFTOztzQ0FDN0UsOERBQUNDOzRCQUFJSCxPQUFPO2dDQUFDSSxZQUFZOzRCQUFNOzs4Q0FFL0IsOERBQUN2QixxREFBVUE7b0NBQUN3QixTQUFRO29DQUFLQyxXQUFVOzhDQUFLOzs7Ozs7OENBS3hDLDhEQUFDQztvQ0FBSVAsT0FBTzt3Q0FBQ1EsVUFBVTtvQ0FBTTtvQ0FBR0MsS0FBSTs7Ozs7Ozs7Ozs7O3NDQUVwQyw4REFBQzNCLGlEQUFNQTs0QkFBQzRCLFNBQVMsSUFBTWhCOzRCQUFpQk0sT0FBTztnQ0FBQ1csUUFBUTs0QkFBTTs0QkFBR04sU0FBUTtzQ0FBWTs7Ozs7O3NDQUNyRiw4REFBQ0Y7Ozs7Ozs7Ozs7Ozs7SUFPUCxPQUFPLElBQUlYLFVBQVUsV0FBVztRQUM5QixxQkFFRSw4REFBQ087WUFBS0MsT0FBTztnQkFBQ2QsU0FBUztnQkFBUWUsWUFBWTtnQkFBVUMsZUFBZTtZQUFTOzs4QkFFM0UsOERBQUNyQixxREFBVUE7b0JBQUN3QixTQUFRO29CQUFLQyxXQUFVOzhCQUFLOzs7Ozs7OEJBSXhDLDhEQUFDdkIsMkRBQWdCQTs7Ozs7OEJBRWpCLDhEQUFDNkI7Ozs7Ozs7Ozs7O0lBR1AsT0FDSyxJQUFJcEIsVUFBVSxXQUFXO1FBQzVCLHFCQUNFO3NCQUNBLDRFQUFDb0I7MEJBQUU7Ozs7Ozs7SUFJUCxPQUNLO1FBQ0gscUJBQ0UsOERBQUNBO3NCQUFFOzs7Ozs7SUFFUDtBQUNGO0dBMUV3QnJCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbkFwcEJhciBmcm9tICcuL2NvbXBvbmVudHMvQXBwQmFyJztcbmltcG9ydCB7IFR5cG9ncmFwaHksIEJ1dHRvbiwgQ2lyY3VsYXJQcm9ncmVzcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IENhcmQgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkJztcbmltcG9ydCBTaW1wbGVBY2NvcmRpb24gZnJvbSAnLi9jb21wb25lbnRzL0FjY29yZGlvbic7XG5pbXBvcnQgeyBkaXNwbGF5IH0gZnJvbSAnQG11aS9zeXN0ZW0nO1xuaW1wb3J0IEJhc2ljU2VsZWN0IGZyb20gJy4vY29tcG9uZW50cy9TZWxlY3QnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoXCJsb2FkaW5nXCIpO1xuXG4gIGNvbnN0IGhhbmRsZUxvYWRpbmcgPSAoKSA9PiB7XG4gICAgc2V0U3RhdGUoXCJsb2FkaW5nXCIpXG4gICAgICBcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFN0YXRlKFwicmVzdWx0c1wiKTtcblxuICAgICAgY29uc29sZS5sb2coXCJWYWx1ZSBjaGFuZ2VkIHRvXCIsIHN0YXRlKTtcbiAgICB9LCA1MDAwKTtcbiAgXG5cbiAgICBjb25zb2xlLmxvZyhcImRldCBmdW5rZVwiKVxuICB9O1xuICBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiVmFsdWUgY2hhbmdlZCB0b1wiLCBzdGF0ZSk7XG4gIH0sIFtzdGF0ZV0pO1xuXG5cbiAgaWYoc3RhdGUgPT09IFwiaW5pdFwiKXtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgIFxuICAgICAgICA8QnV0dG9uQXBwQmFyIGNsYXNzTmFtZT0nYXBwYmFyJy8+XG4gIFxuICAgICAgICA8bWFpbiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH19PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDogXCI1cmVtXCJ9fT5cbiAgXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGNvbXBvbmVudD1cImgzXCI+XG4gICAgICAgICAgTG9hbiBQcm9jZXNzXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgXG4gIFxuICAgICAgICA8aW1nIHN0eWxlPXt7bWF4V2lkdGg6IFwiMTAwJVwifX0gc3JjPVwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9mRzhDMVY2LnBuZ1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUxvYWRpbmcoKX0gc3R5bGU9e3ttYXJnaW46IFwiNXJlbVwifX0gdmFyaWFudD1cImNvbnRhaW5lZFwiPkFuYWx5emUgUHJvY2VzczwvQnV0dG9uPlxuICAgICAgICA8ZGl2PlxuICAgICAgXG4gIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgICA8L21haW4+XG4gICAgICA8Lz4pXG4gIH0gZWxzZSBpZiAoc3RhdGUgPT09IFwibG9hZGluZ1wiKSB7XG4gICAgcmV0dXJuKFxuICBcbiAgICAgIDxtYWluIHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfX0+XG4gICAgICBcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgY29tcG9uZW50PVwiaDNcIj5cbiAgICAgICAgRG9pbmcgc3VwZXIgYWR2YW5jZWQgQUkgYW5hbHlzaXNcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgIDxDaXJjdWxhclByb2dyZXNzIC8+XG4gIFxuICAgICAgICA8cD48L3A+XG4gICAgICA8L21haW4+XG4gICAgKVxuICB9XG4gIGVsc2UgaWYgKHN0YXRlID09PSBcInJlc3VsdHNcIikge1xuICAgIHJldHVybihcbiAgICAgIDw+XG4gICAgICA8cD5SRVNVTFRTISEhISBFVkVSWVRISU5HIExPT0tTIEdPT0QgTklDRSBTVFVGRkYgPC9wPlxuICAgICAgPC8+XG4gICAgICBcbiAgICApXG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuKFxuICAgICAgPHA+IGphamE8L3A+XG4gICAgKVxuICB9XG59XG4iXSwibmFtZXMiOlsiQnV0dG9uQXBwQmFyIiwiVHlwb2dyYXBoeSIsIkJ1dHRvbiIsIkNpcmN1bGFyUHJvZ3Jlc3MiLCJDYXJkIiwiU2ltcGxlQWNjb3JkaW9uIiwiZGlzcGxheSIsIkJhc2ljU2VsZWN0IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhvbWUiLCJzdGF0ZSIsInNldFN0YXRlIiwiaGFuZGxlTG9hZGluZyIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NOYW1lIiwibWFpbiIsInN0eWxlIiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJkaXYiLCJwYWRkaW5nVG9wIiwidmFyaWFudCIsImNvbXBvbmVudCIsImltZyIsIm1heFdpZHRoIiwic3JjIiwib25DbGljayIsIm1hcmdpbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});