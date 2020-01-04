"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _actions = require("../redux/actions");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CharactersList =
/*#__PURE__*/
function (_Component) {
  _inherits(CharactersList, _Component);

  function CharactersList(props) {
    _classCallCheck(this, CharactersList);

    return _possibleConstructorReturn(this, _getPrototypeOf(CharactersList).call(this, props));
  }

  _createClass(CharactersList, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          isLoaded = _this$props.isLoaded,
          characters = _this$props.characters;

      if (!isLoaded) {
        return _react["default"].createElement("div", null, "loading...");
      } else {
        return _react["default"].createElement("div", {
          className: "characterList"
        }, _react["default"].createElement("ul", null, characters.map(function (character) {
          return _react["default"].createElement("li", {
            key: character.id
          }, _react["default"].createElement("img", {
            src: character.image,
            alt: ""
          }), _react["default"].createElement("p", null, character.name), _react["default"].createElement("p", null, "id: ", _react["default"].createElement("span", null, character.id)), _react["default"].createElement("p", null, "created: ", _react["default"].createElement("span", null, character.created)), _react["default"].createElement("p", null, "Status: ", _react["default"].createElement("span", null, character.status)), _react["default"].createElement("p", null, "Species: ", _react["default"].createElement("span", null, character.species)), _react["default"].createElement("p", null, "Gender: ", _react["default"].createElement("span", null, character.gender)), _react["default"].createElement("p", null, "Origin: ", _react["default"].createElement("span", null, character.origin.name)), _react["default"].createElement("p", null, "Last Location: ", _react["default"].createElement("span", null, character.location.name)));
        })), "//", _react["default"].createElement("button", {
          onClick: function onClick() {
            return _this._getData(_this.state.nextpage);
          }
        }, "Load More..."));
      }
    }
  }]);

  return CharactersList;
}(_react.Component);

var _default = CharactersList;
exports["default"] = _default;