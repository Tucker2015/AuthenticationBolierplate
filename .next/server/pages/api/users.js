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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/users.js");
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

/***/ "./node_modules/nanoid/index.cjs":
/*!***************************************!*\
  !*** ./node_modules/nanoid/index.cjs ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let crypto = __webpack_require__(/*! crypto */ \"crypto\")\n\nlet { urlAlphabet } = __webpack_require__(/*! ./url-alphabet/index.cjs */ \"./node_modules/nanoid/url-alphabet/index.cjs\")\n\n// It is best to make fewer, larger requests to the crypto module to\n// avoid system call overhead. So, random numbers are generated in a\n// pool. The pool is a Buffer that is larger than the initial random\n// request size by this multiplier. The pool is enlarged if subsequent\n// requests exceed the maximum buffer size.\nconst POOL_SIZE_MULTIPLIER = 32\nlet pool, poolOffset\n\nlet random = bytes => {\n  if (!pool || pool.length < bytes) {\n    pool = Buffer.allocUnsafe(bytes * POOL_SIZE_MULTIPLIER)\n    crypto.randomFillSync(pool)\n    poolOffset = 0\n  } else if (poolOffset + bytes > pool.length) {\n    crypto.randomFillSync(pool)\n    poolOffset = 0\n  }\n\n  let res = pool.subarray(poolOffset, poolOffset + bytes)\n  poolOffset += bytes\n  return res\n}\n\nlet customRandom = (alphabet, size, getRandom) => {\n  // First, a bitmask is necessary to generate the ID. The bitmask makes bytes\n  // values closer to the alphabet size. The bitmask calculates the closest\n  // `2^31 - 1` number, which exceeds the alphabet size.\n  // For example, the bitmask for the alphabet size 30 is 31 (00011111).\n  let mask = (2 << (31 - Math.clz32((alphabet.length - 1) | 1))) - 1\n  // Though, the bitmask solution is not perfect since the bytes exceeding\n  // the alphabet size are refused. Therefore, to reliably generate the ID,\n  // the random bytes redundancy has to be satisfied.\n\n  // Note: every hardware random generator call is performance expensive,\n  // because the system call for entropy collection takes a lot of time.\n  // So, to avoid additional system calls, extra bytes are requested in advance.\n\n  // Next, a step determines how many random bytes to generate.\n  // The number of random bytes gets decided upon the ID size, mask,\n  // alphabet size, and magic number 1.6 (using 1.6 peaks at performance\n  // according to benchmarks).\n  let step = Math.ceil((1.6 * mask * size) / alphabet.length)\n\n  return () => {\n    let id = ''\n    while (true) {\n      let bytes = getRandom(step)\n      // A compact alternative for `for (let i = 0; i < step; i++)`.\n      let i = step\n      while (i--) {\n        // Adding `|| ''` refuses a random byte that exceeds the alphabet size.\n        id += alphabet[bytes[i] & mask] || ''\n        if (id.length === size) return id\n      }\n    }\n  }\n}\n\nlet customAlphabet = (alphabet, size) => customRandom(alphabet, size, random)\n\nlet nanoid = (size = 21) => {\n  let bytes = random(size)\n  let id = ''\n  // A compact alternative for `for (let i = 0; i < size; i++)`.\n  while (size--) {\n    // It is incorrect to use bytes exceeding the alphabet size.\n    // The following mask reduces the random byte in the 0-255 value\n    // range to the 0-63 value range. Therefore, adding hacks, such\n    // as empty string fallback or magic numbers, is unneccessary because\n    // the bitmask trims bytes down to the alphabet size.\n    id += urlAlphabet[bytes[size] & 63]\n  }\n  return id\n}\n\nmodule.exports = { nanoid, customAlphabet, customRandom, urlAlphabet, random }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmFub2lkL2luZGV4LmNqcz85Mzg4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQWEsbUJBQU8sQ0FBQyxzQkFBUTs7QUFFN0IsS0FBSyxjQUFjLEdBQUcsbUJBQU8sQ0FBQyw4RUFBMEI7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxVQUFVO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsVUFBVTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmFub2lkL2luZGV4LmNqcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKVxuXG5sZXQgeyB1cmxBbHBoYWJldCB9ID0gcmVxdWlyZSgnLi91cmwtYWxwaGFiZXQvaW5kZXguY2pzJylcblxuLy8gSXQgaXMgYmVzdCB0byBtYWtlIGZld2VyLCBsYXJnZXIgcmVxdWVzdHMgdG8gdGhlIGNyeXB0byBtb2R1bGUgdG9cbi8vIGF2b2lkIHN5c3RlbSBjYWxsIG92ZXJoZWFkLiBTbywgcmFuZG9tIG51bWJlcnMgYXJlIGdlbmVyYXRlZCBpbiBhXG4vLyBwb29sLiBUaGUgcG9vbCBpcyBhIEJ1ZmZlciB0aGF0IGlzIGxhcmdlciB0aGFuIHRoZSBpbml0aWFsIHJhbmRvbVxuLy8gcmVxdWVzdCBzaXplIGJ5IHRoaXMgbXVsdGlwbGllci4gVGhlIHBvb2wgaXMgZW5sYXJnZWQgaWYgc3Vic2VxdWVudFxuLy8gcmVxdWVzdHMgZXhjZWVkIHRoZSBtYXhpbXVtIGJ1ZmZlciBzaXplLlxuY29uc3QgUE9PTF9TSVpFX01VTFRJUExJRVIgPSAzMlxubGV0IHBvb2wsIHBvb2xPZmZzZXRcblxubGV0IHJhbmRvbSA9IGJ5dGVzID0+IHtcbiAgaWYgKCFwb29sIHx8IHBvb2wubGVuZ3RoIDwgYnl0ZXMpIHtcbiAgICBwb29sID0gQnVmZmVyLmFsbG9jVW5zYWZlKGJ5dGVzICogUE9PTF9TSVpFX01VTFRJUExJRVIpXG4gICAgY3J5cHRvLnJhbmRvbUZpbGxTeW5jKHBvb2wpXG4gICAgcG9vbE9mZnNldCA9IDBcbiAgfSBlbHNlIGlmIChwb29sT2Zmc2V0ICsgYnl0ZXMgPiBwb29sLmxlbmd0aCkge1xuICAgIGNyeXB0by5yYW5kb21GaWxsU3luYyhwb29sKVxuICAgIHBvb2xPZmZzZXQgPSAwXG4gIH1cblxuICBsZXQgcmVzID0gcG9vbC5zdWJhcnJheShwb29sT2Zmc2V0LCBwb29sT2Zmc2V0ICsgYnl0ZXMpXG4gIHBvb2xPZmZzZXQgKz0gYnl0ZXNcbiAgcmV0dXJuIHJlc1xufVxuXG5sZXQgY3VzdG9tUmFuZG9tID0gKGFscGhhYmV0LCBzaXplLCBnZXRSYW5kb20pID0+IHtcbiAgLy8gRmlyc3QsIGEgYml0bWFzayBpcyBuZWNlc3NhcnkgdG8gZ2VuZXJhdGUgdGhlIElELiBUaGUgYml0bWFzayBtYWtlcyBieXRlc1xuICAvLyB2YWx1ZXMgY2xvc2VyIHRvIHRoZSBhbHBoYWJldCBzaXplLiBUaGUgYml0bWFzayBjYWxjdWxhdGVzIHRoZSBjbG9zZXN0XG4gIC8vIGAyXjMxIC0gMWAgbnVtYmVyLCB3aGljaCBleGNlZWRzIHRoZSBhbHBoYWJldCBzaXplLlxuICAvLyBGb3IgZXhhbXBsZSwgdGhlIGJpdG1hc2sgZm9yIHRoZSBhbHBoYWJldCBzaXplIDMwIGlzIDMxICgwMDAxMTExMSkuXG4gIGxldCBtYXNrID0gKDIgPDwgKDMxIC0gTWF0aC5jbHozMigoYWxwaGFiZXQubGVuZ3RoIC0gMSkgfCAxKSkpIC0gMVxuICAvLyBUaG91Z2gsIHRoZSBiaXRtYXNrIHNvbHV0aW9uIGlzIG5vdCBwZXJmZWN0IHNpbmNlIHRoZSBieXRlcyBleGNlZWRpbmdcbiAgLy8gdGhlIGFscGhhYmV0IHNpemUgYXJlIHJlZnVzZWQuIFRoZXJlZm9yZSwgdG8gcmVsaWFibHkgZ2VuZXJhdGUgdGhlIElELFxuICAvLyB0aGUgcmFuZG9tIGJ5dGVzIHJlZHVuZGFuY3kgaGFzIHRvIGJlIHNhdGlzZmllZC5cblxuICAvLyBOb3RlOiBldmVyeSBoYXJkd2FyZSByYW5kb20gZ2VuZXJhdG9yIGNhbGwgaXMgcGVyZm9ybWFuY2UgZXhwZW5zaXZlLFxuICAvLyBiZWNhdXNlIHRoZSBzeXN0ZW0gY2FsbCBmb3IgZW50cm9weSBjb2xsZWN0aW9uIHRha2VzIGEgbG90IG9mIHRpbWUuXG4gIC8vIFNvLCB0byBhdm9pZCBhZGRpdGlvbmFsIHN5c3RlbSBjYWxscywgZXh0cmEgYnl0ZXMgYXJlIHJlcXVlc3RlZCBpbiBhZHZhbmNlLlxuXG4gIC8vIE5leHQsIGEgc3RlcCBkZXRlcm1pbmVzIGhvdyBtYW55IHJhbmRvbSBieXRlcyB0byBnZW5lcmF0ZS5cbiAgLy8gVGhlIG51bWJlciBvZiByYW5kb20gYnl0ZXMgZ2V0cyBkZWNpZGVkIHVwb24gdGhlIElEIHNpemUsIG1hc2ssXG4gIC8vIGFscGhhYmV0IHNpemUsIGFuZCBtYWdpYyBudW1iZXIgMS42ICh1c2luZyAxLjYgcGVha3MgYXQgcGVyZm9ybWFuY2VcbiAgLy8gYWNjb3JkaW5nIHRvIGJlbmNobWFya3MpLlxuICBsZXQgc3RlcCA9IE1hdGguY2VpbCgoMS42ICogbWFzayAqIHNpemUpIC8gYWxwaGFiZXQubGVuZ3RoKVxuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgbGV0IGlkID0gJydcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgbGV0IGJ5dGVzID0gZ2V0UmFuZG9tKHN0ZXApXG4gICAgICAvLyBBIGNvbXBhY3QgYWx0ZXJuYXRpdmUgZm9yIGBmb3IgKGxldCBpID0gMDsgaSA8IHN0ZXA7IGkrKylgLlxuICAgICAgbGV0IGkgPSBzdGVwXG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIC8vIEFkZGluZyBgfHwgJydgIHJlZnVzZXMgYSByYW5kb20gYnl0ZSB0aGF0IGV4Y2VlZHMgdGhlIGFscGhhYmV0IHNpemUuXG4gICAgICAgIGlkICs9IGFscGhhYmV0W2J5dGVzW2ldICYgbWFza10gfHwgJydcbiAgICAgICAgaWYgKGlkLmxlbmd0aCA9PT0gc2l6ZSkgcmV0dXJuIGlkXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmxldCBjdXN0b21BbHBoYWJldCA9IChhbHBoYWJldCwgc2l6ZSkgPT4gY3VzdG9tUmFuZG9tKGFscGhhYmV0LCBzaXplLCByYW5kb20pXG5cbmxldCBuYW5vaWQgPSAoc2l6ZSA9IDIxKSA9PiB7XG4gIGxldCBieXRlcyA9IHJhbmRvbShzaXplKVxuICBsZXQgaWQgPSAnJ1xuICAvLyBBIGNvbXBhY3QgYWx0ZXJuYXRpdmUgZm9yIGBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKylgLlxuICB3aGlsZSAoc2l6ZS0tKSB7XG4gICAgLy8gSXQgaXMgaW5jb3JyZWN0IHRvIHVzZSBieXRlcyBleGNlZWRpbmcgdGhlIGFscGhhYmV0IHNpemUuXG4gICAgLy8gVGhlIGZvbGxvd2luZyBtYXNrIHJlZHVjZXMgdGhlIHJhbmRvbSBieXRlIGluIHRoZSAwLTI1NSB2YWx1ZVxuICAgIC8vIHJhbmdlIHRvIHRoZSAwLTYzIHZhbHVlIHJhbmdlLiBUaGVyZWZvcmUsIGFkZGluZyBoYWNrcywgc3VjaFxuICAgIC8vIGFzIGVtcHR5IHN0cmluZyBmYWxsYmFjayBvciBtYWdpYyBudW1iZXJzLCBpcyB1bm5lY2Nlc3NhcnkgYmVjYXVzZVxuICAgIC8vIHRoZSBiaXRtYXNrIHRyaW1zIGJ5dGVzIGRvd24gdG8gdGhlIGFscGhhYmV0IHNpemUuXG4gICAgaWQgKz0gdXJsQWxwaGFiZXRbYnl0ZXNbc2l6ZV0gJiA2M11cbiAgfVxuICByZXR1cm4gaWRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IG5hbm9pZCwgY3VzdG9tQWxwaGFiZXQsIGN1c3RvbVJhbmRvbSwgdXJsQWxwaGFiZXQsIHJhbmRvbSB9XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/nanoid/index.cjs\n");

/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.cjs":
/*!****************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.cjs ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This alphabet uses `A-Za-z0-9_-` symbols. The genetic algorithm helped\n// optimize the gzip compression for this alphabet.\nlet urlAlphabet =\n  'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW'\n\nmodule.exports = { urlAlphabet }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmFub2lkL3VybC1hbHBoYWJldC9pbmRleC5janM/ZWZlYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmFub2lkL3VybC1hbHBoYWJldC9pbmRleC5janMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGFscGhhYmV0IHVzZXMgYEEtWmEtejAtOV8tYCBzeW1ib2xzLiBUaGUgZ2VuZXRpYyBhbGdvcml0aG0gaGVscGVkXG4vLyBvcHRpbWl6ZSB0aGUgZ3ppcCBjb21wcmVzc2lvbiBmb3IgdGhpcyBhbHBoYWJldC5cbmxldCB1cmxBbHBoYWJldCA9XG4gICdNb2R1bGVTeW1iaGFzT3duUHItMDEyMzQ1Njc4OUFCQ0RFRkdITlJWZmdjdGlVdnpfS3FZVEprTHhwWlhJalFXJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IHsgdXJsQWxwaGFiZXQgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/nanoid/url-alphabet/index.cjs\n");

/***/ }),

/***/ "./pages/api/users.js":
/*!****************************!*\
  !*** ./pages/api/users.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! validator/lib/isEmail */ \"validator/lib/isEmail\");\n/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var validator_lib_normalizeEmail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! validator/lib/normalizeEmail */ \"validator/lib/normalizeEmail\");\n/* harmony import */ var validator_lib_normalizeEmail__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(validator_lib_normalizeEmail__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _middlewares_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../middlewares/middleware */ \"./middlewares/middleware.js\");\n/* harmony import */ var _lib_api_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/api-helpers */ \"./lib/api-helpers.js\");\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nanoid */ \"./node_modules/nanoid/index.cjs\");\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nanoid__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();\nconst passKey = Object(nanoid__WEBPACK_IMPORTED_MODULE_6__[\"nanoid\"])(12);\nhandler.use(_middlewares_middleware__WEBPACK_IMPORTED_MODULE_4__[\"default\"]); // see how we're reusing our middleware\n// POST /api/users\n\nhandler.post(async (req, res) => {\n  const {\n    name,\n    password\n  } = req.body;\n  const email = validator_lib_normalizeEmail__WEBPACK_IMPORTED_MODULE_2___default()(req.body.email); // this is to handle things like jane.doe@gmail.com and janedoe@gmail.com being the same\n\n  if (!validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_1___default()(email)) {\n    res.status(400).send('The email you entered is invalid.');\n    return;\n  }\n\n  if (!password || !name) {\n    res.status(400).send('Missing field(s)');\n    return;\n  } // check if email existed\n\n\n  if ((await req.db.collection('users').countDocuments({\n    email\n  })) > 0) {\n    res.status(403).send('The email has already been used.');\n  }\n\n  const hashedPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_3___default.a.hash(password, 10);\n  const user = await req.db.collection('users').insertOne({\n    email,\n    password: hashedPassword,\n    name,\n    passKey\n  }).then(({\n    ops\n  }) => ops[0]);\n  req.logIn(user, err => {\n    if (err) throw err; // when we finally log in, return the (filtered) user object\n\n    res.status(201).json({\n      user: Object(_lib_api_helpers__WEBPACK_IMPORTED_MODULE_5__[\"extractUser\"])(req)\n    });\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlcnMuanM/NTc0ZCJdLCJuYW1lcyI6WyJoYW5kbGVyIiwibmV4dENvbm5lY3QiLCJwYXNzS2V5IiwibmFub2lkIiwidXNlIiwibWlkZGxld2FyZSIsInBvc3QiLCJyZXEiLCJyZXMiLCJuYW1lIiwicGFzc3dvcmQiLCJib2R5IiwiZW1haWwiLCJub3JtYWxpemVFbWFpbCIsImlzRW1haWwiLCJzdGF0dXMiLCJzZW5kIiwiZGIiLCJjb2xsZWN0aW9uIiwiY291bnREb2N1bWVudHMiLCJoYXNoZWRQYXNzd29yZCIsImJjcnlwdCIsImhhc2giLCJ1c2VyIiwiaW5zZXJ0T25lIiwidGhlbiIsIm9wcyIsImxvZ0luIiwiZXJyIiwianNvbiIsImV4dHJhY3RVc2VyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsT0FBTyxHQUFHQyxtREFBVyxFQUEzQjtBQUNBLE1BQU1DLE9BQU8sR0FBR0MscURBQU0sQ0FBQyxFQUFELENBQXRCO0FBRUFILE9BQU8sQ0FBQ0ksR0FBUixDQUFZQywrREFBWixFLENBQXlCO0FBRXpCOztBQUNBTCxPQUFPLENBQUNNLElBQVIsQ0FBYSxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDL0IsUUFBTTtBQUFFQyxRQUFGO0FBQVFDO0FBQVIsTUFBcUJILEdBQUcsQ0FBQ0ksSUFBL0I7QUFDQSxRQUFNQyxLQUFLLEdBQUdDLG1FQUFjLENBQUNOLEdBQUcsQ0FBQ0ksSUFBSixDQUFTQyxLQUFWLENBQTVCLENBRitCLENBRWU7O0FBQzlDLE1BQUksQ0FBQ0UsNERBQU8sQ0FBQ0YsS0FBRCxDQUFaLEVBQXFCO0FBQ25CSixPQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQixtQ0FBckI7QUFDQTtBQUNEOztBQUNELE1BQUksQ0FBQ04sUUFBRCxJQUFhLENBQUNELElBQWxCLEVBQXdCO0FBQ3RCRCxPQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQixrQkFBckI7QUFDQTtBQUNELEdBVjhCLENBVy9COzs7QUFDQSxNQUFJLENBQUMsTUFBTVQsR0FBRyxDQUFDVSxFQUFKLENBQU9DLFVBQVAsQ0FBa0IsT0FBbEIsRUFBMkJDLGNBQTNCLENBQTBDO0FBQUVQO0FBQUYsR0FBMUMsQ0FBUCxJQUErRCxDQUFuRSxFQUFzRTtBQUNwRUosT0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsa0NBQXJCO0FBQ0Q7O0FBQ0QsUUFBTUksY0FBYyxHQUFHLE1BQU1DLCtDQUFNLENBQUNDLElBQVAsQ0FBWVosUUFBWixFQUFzQixFQUF0QixDQUE3QjtBQUNBLFFBQU1hLElBQUksR0FBRyxNQUFNaEIsR0FBRyxDQUFDVSxFQUFKLENBQ2hCQyxVQURnQixDQUNMLE9BREssRUFFaEJNLFNBRmdCLENBRU47QUFBRVosU0FBRjtBQUFTRixZQUFRLEVBQUVVLGNBQW5CO0FBQW1DWCxRQUFuQztBQUF5Q1A7QUFBekMsR0FGTSxFQUdoQnVCLElBSGdCLENBR1gsQ0FBQztBQUFFQztBQUFGLEdBQUQsS0FBYUEsR0FBRyxDQUFDLENBQUQsQ0FITCxDQUFuQjtBQUlBbkIsS0FBRyxDQUFDb0IsS0FBSixDQUFVSixJQUFWLEVBQWlCSyxHQUFELElBQVM7QUFDdkIsUUFBSUEsR0FBSixFQUFTLE1BQU1BLEdBQU4sQ0FEYyxDQUV2Qjs7QUFDQXBCLE9BQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JjLElBQWhCLENBQXFCO0FBQ25CTixVQUFJLEVBQUVPLG9FQUFXLENBQUN2QixHQUFEO0FBREUsS0FBckI7QUFHRCxHQU5EO0FBT0QsQ0EzQkQ7QUE2QmVQLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3VzZXJzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5leHRDb25uZWN0IGZyb20gJ25leHQtY29ubmVjdCc7XG5pbXBvcnQgaXNFbWFpbCBmcm9tICd2YWxpZGF0b3IvbGliL2lzRW1haWwnO1xuaW1wb3J0IG5vcm1hbGl6ZUVtYWlsIGZyb20gJ3ZhbGlkYXRvci9saWIvbm9ybWFsaXplRW1haWwnO1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcyc7XG5pbXBvcnQgbWlkZGxld2FyZSBmcm9tICcuLi8uLi9taWRkbGV3YXJlcy9taWRkbGV3YXJlJztcbmltcG9ydCB7IGV4dHJhY3RVc2VyIH0gZnJvbSAnLi4vLi4vbGliL2FwaS1oZWxwZXJzJztcbmltcG9ydCB7IG5hbm9pZCB9IGZyb20gJ25hbm9pZCdcblxuY29uc3QgaGFuZGxlciA9IG5leHRDb25uZWN0KCk7XG5jb25zdCBwYXNzS2V5ID0gbmFub2lkKDEyKTtcblxuaGFuZGxlci51c2UobWlkZGxld2FyZSk7IC8vIHNlZSBob3cgd2UncmUgcmV1c2luZyBvdXIgbWlkZGxld2FyZVxuXG4vLyBQT1NUIC9hcGkvdXNlcnNcbmhhbmRsZXIucG9zdChhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyBuYW1lLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XG4gIGNvbnN0IGVtYWlsID0gbm9ybWFsaXplRW1haWwocmVxLmJvZHkuZW1haWwpOyAvLyB0aGlzIGlzIHRvIGhhbmRsZSB0aGluZ3MgbGlrZSBqYW5lLmRvZUBnbWFpbC5jb20gYW5kIGphbmVkb2VAZ21haWwuY29tIGJlaW5nIHRoZSBzYW1lXG4gIGlmICghaXNFbWFpbChlbWFpbCkpIHtcbiAgICByZXMuc3RhdHVzKDQwMCkuc2VuZCgnVGhlIGVtYWlsIHlvdSBlbnRlcmVkIGlzIGludmFsaWQuJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghcGFzc3dvcmQgfHwgIW5hbWUpIHtcbiAgICByZXMuc3RhdHVzKDQwMCkuc2VuZCgnTWlzc2luZyBmaWVsZChzKScpO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBjaGVjayBpZiBlbWFpbCBleGlzdGVkXG4gIGlmICgoYXdhaXQgcmVxLmRiLmNvbGxlY3Rpb24oJ3VzZXJzJykuY291bnREb2N1bWVudHMoeyBlbWFpbCB9KSkgPiAwKSB7XG4gICAgcmVzLnN0YXR1cyg0MDMpLnNlbmQoJ1RoZSBlbWFpbCBoYXMgYWxyZWFkeSBiZWVuIHVzZWQuJyk7XG4gIH1cbiAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xuICBjb25zdCB1c2VyID0gYXdhaXQgcmVxLmRiXG4gICAgLmNvbGxlY3Rpb24oJ3VzZXJzJylcbiAgICAuaW5zZXJ0T25lKHsgZW1haWwsIHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZCwgbmFtZSwgcGFzc0tleSB9KVxuICAgIC50aGVuKCh7IG9wcyB9KSA9PiBvcHNbMF0pO1xuICByZXEubG9nSW4odXNlciwgKGVycikgPT4ge1xuICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAgICAvLyB3aGVuIHdlIGZpbmFsbHkgbG9nIGluLCByZXR1cm4gdGhlIChmaWx0ZXJlZCkgdXNlciBvYmplY3RcbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7XG4gICAgICB1c2VyOiBleHRyYWN0VXNlcihyZXEpLFxuICAgIH0pO1xuICB9KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/users.js\n");

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

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjcnlwdG9cIj80Yzc2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImNyeXB0by5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyeXB0b1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///crypto\n");

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

/***/ }),

/***/ "validator/lib/isEmail":
/*!****************************************!*\
  !*** external "validator/lib/isEmail" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"validator/lib/isEmail\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2YWxpZGF0b3IvbGliL2lzRW1haWxcIj8wMGY0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InZhbGlkYXRvci9saWIvaXNFbWFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZhbGlkYXRvci9saWIvaXNFbWFpbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///validator/lib/isEmail\n");

/***/ }),

/***/ "validator/lib/normalizeEmail":
/*!***********************************************!*\
  !*** external "validator/lib/normalizeEmail" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"validator/lib/normalizeEmail\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2YWxpZGF0b3IvbGliL25vcm1hbGl6ZUVtYWlsXCI/NzgzYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ2YWxpZGF0b3IvbGliL25vcm1hbGl6ZUVtYWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidmFsaWRhdG9yL2xpYi9ub3JtYWxpemVFbWFpbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///validator/lib/normalizeEmail\n");

/***/ })

/******/ });