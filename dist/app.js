"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _enviroments = _interopRequireDefault(require("./config/enviroments"));
var _user = _interopRequireDefault(require("./routes/user.routes"));
var app = (0, _express["default"])();

//settings
app.set("PORT", process.env.PORT);

//middlewares
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _morgan["default"])('dev'));

//Routes
app.get('/', function (req, res) {
  res.send({
    message: 'Welcome to my application'
  });
});
app.use('/api', _user["default"]);
var _default = app;
exports["default"] = _default;