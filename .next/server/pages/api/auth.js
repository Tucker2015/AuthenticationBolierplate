module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/api-helpers.js":
/*!****************************!*\
  !*** ./lib/api-helpers.js ***!
  \****************************/
/*! exports provided: extractUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"extractUser\", function() { return extractUser; });\nfunction extractUser(req) {\n  if (!req.user) return null; // take only needed user fields to avoid sensitive ones (such as password)\n\n  const {\n    _id,\n    name,\n    email,\n    bio,\n    profilePicture,\n    passKey\n  } = req.user;\n  return {\n    _id,\n    name,\n    email,\n    bio,\n    profilePicture,\n    passKey\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvYXBpLWhlbHBlcnMuanM/YTY3NiJdLCJuYW1lcyI6WyJleHRyYWN0VXNlciIsInJlcSIsInVzZXIiLCJfaWQiLCJuYW1lIiwiZW1haWwiLCJiaW8iLCJwcm9maWxlUGljdHVyZSIsInBhc3NLZXkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBTyxTQUFTQSxXQUFULENBQXFCQyxHQUFyQixFQUEwQjtBQUMvQixNQUFJLENBQUNBLEdBQUcsQ0FBQ0MsSUFBVCxFQUFlLE9BQU8sSUFBUCxDQURnQixDQUUvQjs7QUFDQSxRQUFNO0FBQ0pDLE9BREk7QUFDQ0MsUUFERDtBQUNPQyxTQURQO0FBQ2NDLE9BRGQ7QUFDbUJDLGtCQURuQjtBQUNtQ0M7QUFEbkMsTUFFRlAsR0FBRyxDQUFDQyxJQUZSO0FBR0EsU0FBTztBQUNMQyxPQURLO0FBQ0FDLFFBREE7QUFDTUMsU0FETjtBQUNhQyxPQURiO0FBQ2tCQyxrQkFEbEI7QUFDa0NDO0FBRGxDLEdBQVA7QUFHRCIsImZpbGUiOiIuL2xpYi9hcGktaGVscGVycy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBleHRyYWN0VXNlcihyZXEpIHtcbiAgaWYgKCFyZXEudXNlcikgcmV0dXJuIG51bGw7XG4gIC8vIHRha2Ugb25seSBuZWVkZWQgdXNlciBmaWVsZHMgdG8gYXZvaWQgc2Vuc2l0aXZlIG9uZXMgKHN1Y2ggYXMgcGFzc3dvcmQpXG4gIGNvbnN0IHtcbiAgICBfaWQsIG5hbWUsIGVtYWlsLCBiaW8sIHByb2ZpbGVQaWN0dXJlLCBwYXNzS2V5LFxuICB9ID0gcmVxLnVzZXI7XG4gIHJldHVybiB7XG4gICAgX2lkLCBuYW1lLCBlbWFpbCwgYmlvLCBwcm9maWxlUGljdHVyZSwgcGFzc0tleSxcbiAgfTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/api-helpers.js\n");

/***/ }),

/***/ "./lib/passport.js":
/*!*************************!*\
  !*** ./lib/passport.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! passport-local */ \"passport-local\");\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(passport_local__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\npassport__WEBPACK_IMPORTED_MODULE_0___default.a.serializeUser((user, done) => {\n  done(null, user._id.toString());\n}); // passport#160\n\npassport__WEBPACK_IMPORTED_MODULE_0___default.a.deserializeUser((req, id, done) => {\n  req.db.collection('users').findOne(Object(mongodb__WEBPACK_IMPORTED_MODULE_3__[\"ObjectId\"])(id)).then(user => done(null, user));\n});\npassport__WEBPACK_IMPORTED_MODULE_0___default.a.use(new passport_local__WEBPACK_IMPORTED_MODULE_2__[\"Strategy\"]({\n  usernameField: 'email',\n  passReqToCallback: true\n}, async (req, email, password, done) => {\n  const user = await req.db.collection('users').findOne({\n    email\n  });\n  if (user && (await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.compare(password, user.password))) done(null, user);else done(null, false);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (passport__WEBPACK_IMPORTED_MODULE_0___default.a);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvcGFzc3BvcnQuanM/MTBiMiJdLCJuYW1lcyI6WyJwYXNzcG9ydCIsInNlcmlhbGl6ZVVzZXIiLCJ1c2VyIiwiZG9uZSIsIl9pZCIsInRvU3RyaW5nIiwiZGVzZXJpYWxpemVVc2VyIiwicmVxIiwiaWQiLCJkYiIsImNvbGxlY3Rpb24iLCJmaW5kT25lIiwiT2JqZWN0SWQiLCJ0aGVuIiwidXNlIiwiTG9jYWxTdHJhdGVneSIsInVzZXJuYW1lRmllbGQiLCJwYXNzUmVxVG9DYWxsYmFjayIsImVtYWlsIiwicGFzc3dvcmQiLCJiY3J5cHQiLCJjb21wYXJlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSwrQ0FBUSxDQUFDQyxhQUFULENBQXVCLENBQUNDLElBQUQsRUFBT0MsSUFBUCxLQUFnQjtBQUNyQ0EsTUFBSSxDQUFDLElBQUQsRUFBT0QsSUFBSSxDQUFDRSxHQUFMLENBQVNDLFFBQVQsRUFBUCxDQUFKO0FBQ0QsQ0FGRCxFLENBSUE7O0FBQ0FMLCtDQUFRLENBQUNNLGVBQVQsQ0FBeUIsQ0FBQ0MsR0FBRCxFQUFNQyxFQUFOLEVBQVVMLElBQVYsS0FBbUI7QUFDMUNJLEtBQUcsQ0FBQ0UsRUFBSixDQUNHQyxVQURILENBQ2MsT0FEZCxFQUVHQyxPQUZILENBRVdDLHdEQUFRLENBQUNKLEVBQUQsQ0FGbkIsRUFHR0ssSUFISCxDQUdTWCxJQUFELElBQVVDLElBQUksQ0FBQyxJQUFELEVBQU9ELElBQVAsQ0FIdEI7QUFJRCxDQUxEO0FBT0FGLCtDQUFRLENBQUNjLEdBQVQsQ0FDRSxJQUFJQyx1REFBSixDQUNFO0FBQUVDLGVBQWEsRUFBRSxPQUFqQjtBQUEwQkMsbUJBQWlCLEVBQUU7QUFBN0MsQ0FERixFQUVFLE9BQU9WLEdBQVAsRUFBWVcsS0FBWixFQUFtQkMsUUFBbkIsRUFBNkJoQixJQUE3QixLQUFzQztBQUNwQyxRQUFNRCxJQUFJLEdBQUcsTUFBTUssR0FBRyxDQUFDRSxFQUFKLENBQU9DLFVBQVAsQ0FBa0IsT0FBbEIsRUFBMkJDLE9BQTNCLENBQW1DO0FBQUVPO0FBQUYsR0FBbkMsQ0FBbkI7QUFDQSxNQUFJaEIsSUFBSSxLQUFLLE1BQU1rQiwrQ0FBTSxDQUFDQyxPQUFQLENBQWVGLFFBQWYsRUFBeUJqQixJQUFJLENBQUNpQixRQUE5QixDQUFYLENBQVIsRUFBNkRoQixJQUFJLENBQUMsSUFBRCxFQUFPRCxJQUFQLENBQUosQ0FBN0QsS0FDS0MsSUFBSSxDQUFDLElBQUQsRUFBTyxLQUFQLENBQUo7QUFDTixDQU5ILENBREY7QUFXZUgsOEdBQWYiLCJmaWxlIjoiLi9saWIvcGFzc3BvcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGFzc3BvcnQgZnJvbSAncGFzc3BvcnQnO1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcyc7XG5pbXBvcnQgeyBTdHJhdGVneSBhcyBMb2NhbFN0cmF0ZWd5IH0gZnJvbSAncGFzc3BvcnQtbG9jYWwnO1xuaW1wb3J0IHsgT2JqZWN0SWQgfSBmcm9tICdtb25nb2RiJztcblxucGFzc3BvcnQuc2VyaWFsaXplVXNlcigodXNlciwgZG9uZSkgPT4ge1xuICBkb25lKG51bGwsIHVzZXIuX2lkLnRvU3RyaW5nKCkpO1xufSk7XG5cbi8vIHBhc3Nwb3J0IzE2MFxucGFzc3BvcnQuZGVzZXJpYWxpemVVc2VyKChyZXEsIGlkLCBkb25lKSA9PiB7XG4gIHJlcS5kYlxuICAgIC5jb2xsZWN0aW9uKCd1c2VycycpXG4gICAgLmZpbmRPbmUoT2JqZWN0SWQoaWQpKVxuICAgIC50aGVuKCh1c2VyKSA9PiBkb25lKG51bGwsIHVzZXIpKTtcbn0pO1xuXG5wYXNzcG9ydC51c2UoXG4gIG5ldyBMb2NhbFN0cmF0ZWd5KFxuICAgIHsgdXNlcm5hbWVGaWVsZDogJ2VtYWlsJywgcGFzc1JlcVRvQ2FsbGJhY2s6IHRydWUgfSxcbiAgICBhc3luYyAocmVxLCBlbWFpbCwgcGFzc3dvcmQsIGRvbmUpID0+IHtcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCByZXEuZGIuY29sbGVjdGlvbigndXNlcnMnKS5maW5kT25lKHsgZW1haWwgfSk7XG4gICAgICBpZiAodXNlciAmJiAoYXdhaXQgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpKSkgZG9uZShudWxsLCB1c2VyKTtcbiAgICAgIGVsc2UgZG9uZShudWxsLCBmYWxzZSlcbiAgICB9LFxuICApLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgcGFzc3BvcnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/passport.js\n");

/***/ }),

/***/ "./middlewares/database.js":
/*!*********************************!*\
  !*** ./middlewares/database.js ***!
  \*********************************/
/*! exports provided: setUpDb, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUpDb\", function() { return setUpDb; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return database; });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"](\"mongodb+srv://kevtucker:Baggersb20@mernauth.6wgpp.mongodb.net/BoilerPlate?retryWrites=true&w=majority\", {\n  useNewUrlParser: true,\n  useUnifiedTopology: true\n});\nasync function setUpDb(db) {\n  db.collection('users').createIndex({\n    email: 1\n  }, {\n    unique: true\n  });\n}\nasync function database(req, res, next) {\n  if (!client.isConnected()) await client.connect();\n  req.dbClient = client;\n  req.db = client.db(\"BoilerPlate\");\n  await setUpDb(req.db);\n  return next();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9taWRkbGV3YXJlcy9kYXRhYmFzZS5qcz9lYWI5Il0sIm5hbWVzIjpbImNsaWVudCIsIk1vbmdvQ2xpZW50IiwicHJvY2VzcyIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsInNldFVwRGIiLCJkYiIsImNvbGxlY3Rpb24iLCJjcmVhdGVJbmRleCIsImVtYWlsIiwidW5pcXVlIiwiZGF0YWJhc2UiLCJyZXEiLCJyZXMiLCJuZXh0IiwiaXNDb25uZWN0ZWQiLCJjb25uZWN0IiwiZGJDbGllbnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLE1BQU0sR0FBRyxJQUFJQyxtREFBSixDQUFnQkMsdUdBQWhCLEVBQXlDO0FBQ3REQyxpQkFBZSxFQUFFLElBRHFDO0FBRXREQyxvQkFBa0IsRUFBRTtBQUZrQyxDQUF6QyxDQUFmO0FBSU8sZUFBZUMsT0FBZixDQUF1QkMsRUFBdkIsRUFBMkI7QUFDaENBLElBQUUsQ0FBQ0MsVUFBSCxDQUFjLE9BQWQsRUFBdUJDLFdBQXZCLENBQW1DO0FBQUVDLFNBQUssRUFBRTtBQUFULEdBQW5DLEVBQWlEO0FBQUVDLFVBQU0sRUFBRTtBQUFWLEdBQWpEO0FBQ0Q7QUFFYyxlQUFlQyxRQUFmLENBQXdCQyxHQUF4QixFQUE2QkMsR0FBN0IsRUFBa0NDLElBQWxDLEVBQXdDO0FBQ3JELE1BQUksQ0FBQ2QsTUFBTSxDQUFDZSxXQUFQLEVBQUwsRUFBMkIsTUFBTWYsTUFBTSxDQUFDZ0IsT0FBUCxFQUFOO0FBQzNCSixLQUFHLENBQUNLLFFBQUosR0FBZWpCLE1BQWY7QUFDQVksS0FBRyxDQUFDTixFQUFKLEdBQVNOLE1BQU0sQ0FBQ00sRUFBUCxDQUFVSixhQUFWLENBQVQ7QUFDQSxRQUFNRyxPQUFPLENBQUNPLEdBQUcsQ0FBQ04sRUFBTCxDQUFiO0FBQ0EsU0FBT1EsSUFBSSxFQUFYO0FBQ0QiLCJmaWxlIjoiLi9taWRkbGV3YXJlcy9kYXRhYmFzZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSwge1xuICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbn0pO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldFVwRGIoZGIpIHtcbiAgZGIuY29sbGVjdGlvbigndXNlcnMnKS5jcmVhdGVJbmRleCh7IGVtYWlsOiAxIH0sIHsgdW5pcXVlOiB0cnVlIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBkYXRhYmFzZShyZXEsIHJlcywgbmV4dCkge1xuICBpZiAoIWNsaWVudC5pc0Nvbm5lY3RlZCgpKSBhd2FpdCBjbGllbnQuY29ubmVjdCgpO1xuICByZXEuZGJDbGllbnQgPSBjbGllbnQ7XG4gIHJlcS5kYiA9IGNsaWVudC5kYihwcm9jZXNzLmVudi5NT05HT0RCX0RCKTtcbiAgYXdhaXQgc2V0VXBEYihyZXEuZGIpO1xuICByZXR1cm4gbmV4dCgpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./middlewares/database.js\n");

/***/ }),

/***/ "./middlewares/middleware.js":
/*!***********************************!*\
  !*** ./middlewares/middleware.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./database */ \"./middlewares/database.js\");\n/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session */ \"./middlewares/session.js\");\n/* harmony import */ var _lib_passport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/passport */ \"./lib/passport.js\");\n\n\n\n\nconst middleware = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();\nmiddleware.use(_database__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).use(_session__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).use(_lib_passport__WEBPACK_IMPORTED_MODULE_3__[\"default\"].initialize()) // passport middleware handles authenthentication, which populates req.user\n.use(_lib_passport__WEBPACK_IMPORTED_MODULE_3__[\"default\"].session());\n/* harmony default export */ __webpack_exports__[\"default\"] = (middleware);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9taWRkbGV3YXJlcy9taWRkbGV3YXJlLmpzPzJmNmEiXSwibmFtZXMiOlsibWlkZGxld2FyZSIsIm5leHRDb25uZWN0IiwidXNlIiwiZGF0YWJhc2UiLCJzZXNzaW9uIiwicGFzc3BvcnQiLCJpbml0aWFsaXplIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFVBQVUsR0FBR0MsbURBQVcsRUFBOUI7QUFFQUQsVUFBVSxDQUNQRSxHQURILENBQ09DLGlEQURQLEVBRUdELEdBRkgsQ0FFT0UsZ0RBRlAsRUFHR0YsR0FISCxDQUdPRyxxREFBUSxDQUFDQyxVQUFULEVBSFAsRUFHOEI7QUFIOUIsQ0FJR0osR0FKSCxDQUlPRyxxREFBUSxDQUFDRCxPQUFULEVBSlA7QUFNZUoseUVBQWYiLCJmaWxlIjoiLi9taWRkbGV3YXJlcy9taWRkbGV3YXJlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5leHRDb25uZWN0IGZyb20gJ25leHQtY29ubmVjdCc7XG5pbXBvcnQgZGF0YWJhc2UgZnJvbSAnLi9kYXRhYmFzZSc7XG5pbXBvcnQgc2Vzc2lvbiBmcm9tICcuL3Nlc3Npb24nO1xuaW1wb3J0IHBhc3Nwb3J0IGZyb20gJy4uL2xpYi9wYXNzcG9ydCc7XG5cbmNvbnN0IG1pZGRsZXdhcmUgPSBuZXh0Q29ubmVjdCgpO1xuXG5taWRkbGV3YXJlXG4gIC51c2UoZGF0YWJhc2UpXG4gIC51c2Uoc2Vzc2lvbilcbiAgLnVzZShwYXNzcG9ydC5pbml0aWFsaXplKCkpIC8vIHBhc3Nwb3J0IG1pZGRsZXdhcmUgaGFuZGxlcyBhdXRoZW50aGVudGljYXRpb24sIHdoaWNoIHBvcHVsYXRlcyByZXEudXNlclxuICAudXNlKHBhc3Nwb3J0LnNlc3Npb24oKSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1pZGRsZXdhcmU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./middlewares/middleware.js\n");

/***/ }),

/***/ "./middlewares/session.js":
/*!********************************!*\
  !*** ./middlewares/session.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-session */ \"next-session\");\n/* harmony import */ var next_session__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_session__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var connect_mongo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! connect-mongo */ \"connect-mongo\");\n/* harmony import */ var connect_mongo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(connect_mongo__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst MongoStore = connect_mongo__WEBPACK_IMPORTED_MODULE_1___default()({\n  Store: next_session__WEBPACK_IMPORTED_MODULE_0__[\"Store\"],\n  MemoryStore: next_session__WEBPACK_IMPORTED_MODULE_0__[\"MemoryStore\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (req, res, next) {\n  const mongoStore = new MongoStore({\n    client: req.dbClient,\n    stringify: false\n  });\n  return Object(next_session__WEBPACK_IMPORTED_MODULE_0__[\"session\"])({\n    store: mongoStore\n  })(req, res, next);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9taWRkbGV3YXJlcy9zZXNzaW9uLmpzP2ZkZWUiXSwibmFtZXMiOlsiTW9uZ29TdG9yZSIsImNvbm5lY3RNb25nbyIsIlN0b3JlIiwiTWVtb3J5U3RvcmUiLCJyZXEiLCJyZXMiLCJuZXh0IiwibW9uZ29TdG9yZSIsImNsaWVudCIsImRiQ2xpZW50Iiwic3RyaW5naWZ5Iiwic2Vzc2lvbiIsInN0b3JlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUVBLE1BQU1BLFVBQVUsR0FBR0Msb0RBQVksQ0FBQztBQUFFQywyREFBRjtBQUFTQyx1RUFBV0E7QUFBcEIsQ0FBRCxDQUEvQjtBQUVlLHlFQUFVQyxHQUFWLEVBQWVDLEdBQWYsRUFBb0JDLElBQXBCLEVBQTBCO0FBQ3ZDLFFBQU1DLFVBQVUsR0FBRyxJQUFJUCxVQUFKLENBQWU7QUFDaENRLFVBQU0sRUFBRUosR0FBRyxDQUFDSyxRQURvQjtBQUVoQ0MsYUFBUyxFQUFFO0FBRnFCLEdBQWYsQ0FBbkI7QUFJQSxTQUFPQyw0REFBTyxDQUFDO0FBQ2JDLFNBQUssRUFBR0w7QUFESyxHQUFELENBQVAsQ0FFSkgsR0FGSSxFQUVDQyxHQUZELEVBRU1DLElBRk4sQ0FBUDtBQUdELEMiLCJmaWxlIjoiLi9taWRkbGV3YXJlcy9zZXNzaW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgc2Vzc2lvbiwgU3RvcmUsIE1lbW9yeVN0b3JlLFxufSBmcm9tICduZXh0LXNlc3Npb24nO1xuaW1wb3J0IGNvbm5lY3RNb25nbyBmcm9tICdjb25uZWN0LW1vbmdvJztcblxuY29uc3QgTW9uZ29TdG9yZSA9IGNvbm5lY3RNb25nbyh7IFN0b3JlLCBNZW1vcnlTdG9yZSB9KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJlcSwgcmVzLCBuZXh0KSB7XG4gIGNvbnN0IG1vbmdvU3RvcmUgPSBuZXcgTW9uZ29TdG9yZSh7XG4gICAgY2xpZW50OiByZXEuZGJDbGllbnQsXG4gICAgc3RyaW5naWZ5OiBmYWxzZSxcbiAgfSk7XG4gIHJldHVybiBzZXNzaW9uKHtcbiAgICBzdG9yZTogKG1vbmdvU3RvcmUpLFxuICB9KShyZXEsIHJlcywgbmV4dCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./middlewares/session.js\n");

/***/ }),

/***/ "./pages/api/auth.js":
/*!***************************!*\
  !*** ./pages/api/auth.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middlewares_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../middlewares/middleware */ \"./middlewares/middleware.js\");\n/* harmony import */ var _lib_passport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/passport */ \"./lib/passport.js\");\n/* harmony import */ var _lib_api_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/api-helpers */ \"./lib/api-helpers.js\");\n\n\n\n\nconst handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();\nhandler.use(_middlewares_middleware__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nhandler.post(_lib_passport__WEBPACK_IMPORTED_MODULE_2__[\"default\"].authenticate('local'), (req, res) => {\n  // return our user object\n  res.json({\n    user: Object(_lib_api_helpers__WEBPACK_IMPORTED_MODULE_3__[\"extractUser\"])(req.user)\n  });\n});\nhandler.delete((req, res) => {\n  req.logOut();\n  res.status(204).end();\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC5qcz83ZmFlIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJuZXh0Q29ubmVjdCIsInVzZSIsIm1pZGRsZXdhcmUiLCJwb3N0IiwicGFzc3BvcnQiLCJhdXRoZW50aWNhdGUiLCJyZXEiLCJyZXMiLCJqc29uIiwidXNlciIsImV4dHJhY3RVc2VyIiwiZGVsZXRlIiwibG9nT3V0Iiwic3RhdHVzIiwiZW5kIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLE9BQU8sR0FBR0MsbURBQVcsRUFBM0I7QUFFQUQsT0FBTyxDQUFDRSxHQUFSLENBQVlDLCtEQUFaO0FBRUFILE9BQU8sQ0FBQ0ksSUFBUixDQUFhQyxxREFBUSxDQUFDQyxZQUFULENBQXNCLE9BQXRCLENBQWIsRUFBNkMsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDekQ7QUFDQUEsS0FBRyxDQUFDQyxJQUFKLENBQVM7QUFBRUMsUUFBSSxFQUFFQyxvRUFBVyxDQUFDSixHQUFHLENBQUNHLElBQUw7QUFBbkIsR0FBVDtBQUNELENBSEQ7QUFLQVYsT0FBTyxDQUFDWSxNQUFSLENBQWUsQ0FBQ0wsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDM0JELEtBQUcsQ0FBQ00sTUFBSjtBQUNBTCxLQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxHQUFoQjtBQUNELENBSEQ7QUFLZWYsc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuZXh0Q29ubmVjdCBmcm9tICduZXh0LWNvbm5lY3QnO1xuaW1wb3J0IG1pZGRsZXdhcmUgZnJvbSAnLi4vLi4vbWlkZGxld2FyZXMvbWlkZGxld2FyZSc7XG5pbXBvcnQgcGFzc3BvcnQgZnJvbSAnLi4vLi4vbGliL3Bhc3Nwb3J0JztcbmltcG9ydCB7IGV4dHJhY3RVc2VyIH0gZnJvbSAnLi4vLi4vbGliL2FwaS1oZWxwZXJzJztcblxuY29uc3QgaGFuZGxlciA9IG5leHRDb25uZWN0KCk7XG5cbmhhbmRsZXIudXNlKG1pZGRsZXdhcmUpO1xuXG5oYW5kbGVyLnBvc3QocGFzc3BvcnQuYXV0aGVudGljYXRlKCdsb2NhbCcpLCAocmVxLCByZXMpID0+IHtcbiAgLy8gcmV0dXJuIG91ciB1c2VyIG9iamVjdFxuICByZXMuanNvbih7IHVzZXI6IGV4dHJhY3RVc2VyKHJlcS51c2VyKSB9KTtcbn0pO1xuXG5oYW5kbGVyLmRlbGV0ZSgocmVxLCByZXMpID0+IHtcbiAgcmVxLmxvZ091dCgpO1xuICByZXMuc3RhdHVzKDIwNCkuZW5kKCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/auth.js\n");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcryptjs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRqc1wiP2NlNTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYmNyeXB0anMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRqc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///bcryptjs\n");

/***/ }),

/***/ "connect-mongo":
/*!********************************!*\
  !*** external "connect-mongo" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"connect-mongo\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb25uZWN0LW1vbmdvXCI/YmRkNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJjb25uZWN0LW1vbmdvLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29ubmVjdC1tb25nb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///connect-mongo\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-connect\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWNvbm5lY3RcIj9lYTQ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtY29ubmVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtY29ubmVjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-connect\n");

/***/ }),

/***/ "next-session":
/*!*******************************!*\
  !*** external "next-session" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-session\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXNlc3Npb25cIj9mNDQ4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtc2Vzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtc2Vzc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-session\n");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXNzcG9ydFwiPzFlN2IiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicGFzc3BvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXNzcG9ydFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///passport\n");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-local\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXNzcG9ydC1sb2NhbFwiPzVjY2YiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicGFzc3BvcnQtbG9jYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXNzcG9ydC1sb2NhbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///passport-local\n");

/***/ })

/******/ });