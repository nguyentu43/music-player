/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 8625:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(745);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js + 3 modules
var chakra_ui_react_esm = __webpack_require__(6165);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/toast/dist/chakra-ui-toast.esm.js + 2 modules
var chakra_ui_toast_esm = __webpack_require__(4304);
// EXTERNAL MODULE: ./node_modules/react-router-dom/index.js
var react_router_dom = __webpack_require__(9711);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js
var chakra_ui_layout_esm = __webpack_require__(8527);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/hooks/dist/chakra-ui-hooks.esm.js
var chakra_ui_hooks_esm = __webpack_require__(7375);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/tooltip/dist/chakra-ui-tooltip.esm.js
var chakra_ui_tooltip_esm = __webpack_require__(7398);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js
var chakra_ui_button_esm = __webpack_require__(5193);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/icon/dist/chakra-ui-icon.esm.js
var chakra_ui_icon_esm = __webpack_require__(894);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/slider/dist/chakra-ui-slider.esm.js
var chakra_ui_slider_esm = __webpack_require__(918);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/switch/dist/chakra-ui-switch.esm.js + 1 modules
var chakra_ui_switch_esm = __webpack_require__(8696);
// EXTERNAL MODULE: ./node_modules/react-icons/ri/index.esm.js + 4 modules
var index_esm = __webpack_require__(1279);
;// CONCATENATED MODULE: ./src/components/configs/icons.js

var icons = {
  "TAG": index_esm/* RiHashtag */.ji0,
  "INFOR": index_esm/* RiInformationLine */.tbY,
  "PLAYLIST": index_esm/* RiPlayList2Line */.p_x,
  "SONG": index_esm/* RiMusic2Line */.Suf,
  "SONG2": index_esm/* RiMusicLine */.Q91,
  "COMMENT": index_esm/* RiDiscussLine */.pbY
};
/* harmony default export */ const configs_icons = (icons);
;// CONCATENATED MODULE: ./src/helpers/time.js
function timeToString(value) {
  value = parseInt(value);
  var hours = parseInt(value / 3600).toString();
  var minutes = parseInt(value % 3600 / 60).toString().padStart(2, '0');
  var seconds = (value % 3600 % 60).toString().padStart(2, '0');

  if (value < 3600) {
    return "".concat(minutes, ":").concat(seconds);
  }

  return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
}
// EXTERNAL MODULE: ./node_modules/react-lrc/build/index.js
var build = __webpack_require__(6608);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/context/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var initState = {
  items: [],
  current: null
};

function appReducer(state, action) {
  switch (action.type) {
    case 'set_items':
      return _objectSpread(_objectSpread({}, state), {}, {
        items: action.payload
      });

    case 'set_current':
      return _objectSpread(_objectSpread({}, state), {}, {
        current: action.payload
      });

    default:
      throw new Error('action type not found');
  }
}

var AppContext = /*#__PURE__*/(0,react.createContext)();
function AppProvider(_ref) {
  var children = _ref.children;
  var reducer = (0,react.useReducer)(appReducer, initState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(AppContext.Provider, {
    value: reducer,
    children: children
  });
}
function useAppContext() {
  return (0,react.useContext)(AppContext);
}
var actions = {
  setCurrent: function setCurrent(v) {
    return {
      type: 'set_current',
      payload: v
    };
  },
  setItems: function setItems(v) {
    return {
      type: 'set_items',
      payload: v
    };
  }
};
;// CONCATENATED MODULE: ./src/components/controls/Playlist.js
function Playlist_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Playlist_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Playlist_ownKeys(Object(source), !0).forEach(function (key) { Playlist_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Playlist_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Playlist_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function Playing(props) {
  var _useAppContext = useAppContext(),
      _useAppContext2 = _slicedToArray(_useAppContext, 2),
      _useAppContext2$ = _useAppContext2[0],
      items = _useAppContext2$.items,
      current = _useAppContext2$.current,
      dispatch = _useAppContext2[1];

  function handleClick(v) {
    dispatch(actions.setCurrent(v));
  }

  function handleRemove(_, index) {
    var isEnd = false;
    if (current && items.length - 1 === index) isEnd = true;

    var _items$splice = items.splice(index, 1),
        _items$splice2 = _slicedToArray(_items$splice, 1),
        deleted = _items$splice2[0];

    dispatch(actions.setItems(items));

    if (items.length === 0) {
      dispatch(actions.setCurrent(null));
      return;
    }

    if (current && current.id === deleted.id) {
      if (isEnd) {
        dispatch(actions.setCurrent(items[items.length - 1]));
      } else {
        dispatch(actions.setCurrent(items[index]));
      }
    }
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_layout_esm/* Box */.xu, Playlist_objectSpread(Playlist_objectSpread({
    p: 3,
    bg: "teal.600",
    overflowY: "auto",
    borderRadius: "lg",
    h: "250px",
    flex: 2
  }, props), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_layout_esm/* HStack */.Ug, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_icon_esm/* Icon */.JO, {
        as: configs_icons.PLAYLIST,
        w: 8,
        h: 8
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_layout_esm/* Heading */.X6, {
        as: "h3",
        size: "md",
        children: "Playlist"
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_layout_esm/* Divider */.iz, {
      my: 3
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_layout_esm/* VStack */.gC, {
      align: "stretch",
      spacing: 1,
      children: [items.map(function (item, index) {
        var style = {};

        if (item.id === (current === null || current === void 0 ? void 0 : current.id)) {
          style = {
            bg: 'teal.100',
            borderRadius: 'lg',
            textColor: 'black'
          };
        }

        return /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_layout_esm/* HStack */.Ug, {
          p: 1,
          sx: style,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_icon_esm/* Icon */.JO, {
            as: item.id === (current === null || current === void 0 ? void 0 : current.id) ? index_esm/* RiMusic2Line */.Suf : index_esm/* RiFocusLine */.l8_,
            w: "6",
            h: "6"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_layout_esm/* Text */.xv, {
            fontSize: "sm",
            children: item.name
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_layout_esm/* Spacer */.LZ, {}), item.id !== (current === null || current === void 0 ? void 0 : current.id) && /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_button_esm/* IconButton */.hU, {
            size: "sm",
            onClick: function onClick() {
              return handleClick(item);
            },
            color: "black",
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_icon_esm/* Icon */.JO, {
              as: index_esm/* RiPlayLine */.hpr
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_button_esm/* IconButton */.hU, {
            size: "sm",
            onClick: function onClick() {
              return handleRemove(item, index);
            },
            color: "black",
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_icon_esm/* Icon */.JO, {
              as: index_esm/* RiCloseLine */.eSQ
            })
          })]
        }, item.id);
      }), items.length === 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_layout_esm/* Text */.xv, {
        children: "No data"
      })]
    })]
  }));
}
// EXTERNAL MODULE: ./node_modules/@chakra-ui/menu/dist/chakra-ui-menu.esm.js + 3 modules
var chakra_ui_menu_esm = __webpack_require__(4915);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/tag/dist/chakra-ui-tag.esm.js
var chakra_ui_tag_esm = __webpack_require__(6356);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/image/dist/chakra-ui-image.esm.js
var chakra_ui_image_esm = __webpack_require__(4651);
;// CONCATENATED MODULE: ./src/components/lists/Card.js
var _excluded = ["icon", "image", "text"];

function Card_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Card_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Card_ownKeys(Object(source), !0).forEach(function (key) { Card_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Card_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Card_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function Card(_ref) {
  var icon = _ref.icon,
      image = _ref.image,
      text = _ref.text,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_layout_esm/* Box */.xu, Card_objectSpread(Card_objectSpread({
    borderRadius: "lg",
    bgGradient: "linear(to-r, teal.300, teal.500)",
    transition: "all 0.2s",
    _hover: {
      transform: 'scale(1.05)'
    },
    p: 3
  }, props), {}, {
    children: [image ? /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_image_esm/* Image */.Ee, {
      borderRadius: "lg",
      h: "70px",
      src: image
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_icon_esm/* Icon */.JO, {
      as: icon,
      w: "20",
      h: "20"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_layout_esm/* Text */.xv, {
      my: 2,
      fontSize: "lg",
      noOfLines: 3,
      children: text
    }), props.children]
  }));
}
;// CONCATENATED MODULE: ./src/components/lists/SongDetails.js
var SongDetails_excluded = ["enablePlayButton", "song"];

function SongDetails_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function SongDetails_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? SongDetails_ownKeys(Object(source), !0).forEach(function (key) { SongDetails_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : SongDetails_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function SongDetails_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function SongDetails_slicedToArray(arr, i) { return SongDetails_arrayWithHoles(arr) || SongDetails_iterableToArrayLimit(arr, i) || SongDetails_unsupportedIterableToArray(arr, i) || SongDetails_nonIterableRest(); }

function SongDetails_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function SongDetails_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return SongDetails_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SongDetails_arrayLikeToArray(o, minLen); }

function SongDetails_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function SongDetails_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function SongDetails_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function SongDetails_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = SongDetails_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function SongDetails_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









function SongDetails(_ref) {
  var _ref$enablePlayButton = _ref.enablePlayButton,
      enablePlayButton = _ref$enablePlayButton === void 0 ? true : _ref$enablePlayButton,
      song = _ref.song,
      props = SongDetails_objectWithoutProperties(_ref, SongDetails_excluded);

  var _useAppContext = useAppContext(),
      _useAppContext2 = SongDetails_slicedToArray(_useAppContext, 2),
      items = _useAppContext2[0].items,
      dispatch = _useAppContext2[1];

  function handleOpen() {
    if (!items.find(function (i) {
      return i.id === song.id;
    })) {
      dispatch(actions.setItems(items.concat(song)));
    }

    dispatch(actions.setCurrent(song));
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Card, SongDetails_objectSpread(SongDetails_objectSpread({
    text: song.name,
    icon: configs_icons.SONG,
    image: song.cover
  }, props), {}, {
    children: [enablePlayButton && /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_button_esm/* IconButton */.hU, {
      mr: 1,
      onClick: handleOpen,
      icon: /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_icon_esm/* Icon */.JO, {
        as: index_esm/* RiPlayLine */.hpr,
        w: "5",
        h: "5"
      }),
      size: "sm",
      colorScheme: "teal"
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_menu_esm/* Menu */.v2, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_menu_esm/* MenuButton */.j2, {
        size: "sm",
        colorScheme: "teal",
        as: chakra_ui_button_esm/* Button */.zx,
        rightIcon: /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_icon_esm/* Icon */.JO, {
          as: index_esm/* RiDownloadLine */.gJg
        }),
        children: "Download"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_menu_esm/* MenuList */.qy, {
        minW: "170px",
        children: song.files.map(function (f) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_menu_esm/* MenuItem */.sN, {
            noOfLines: 1,
            textColor: "black",
            as: chakra_ui_layout_esm/* Link */.rU,
            target: "_blank",
            href: f.url,
            children: f.filename
          }, f.id);
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_layout_esm/* Flex */.kC, {
      mt: 3,
      flexWrap: "wrap",
      children: [song.tags.map(function (_ref2) {
        var tag = _ref2.tag;
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_tag_esm/* Tag */.Vp, {
          as: react_router_dom/* Link */.rU,
          to: "/main?keyword=tags::".concat(tag.name),
          mr: 1,
          mb: 1,
          colorScheme: "teal",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_tag_esm/* TagLabel */.Sn, {
            children: tag.name
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_tag_esm/* TagRightIcon */.bq, {
            as: configs_icons.TAG
          })]
        }, tag.id);
      }), song.attributeValues.map(function (_ref3) {
        var value = _ref3.value,
            id = _ref3.id;
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_tag_esm/* Tag */.Vp, {
          as: react_router_dom/* Link */.rU,
          to: "/main?keyword=attributes::".concat(value),
          mr: 1,
          mb: 1,
          colorScheme: "teal",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_tag_esm/* TagLabel */.Sn, {
            children: value
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_tag_esm/* TagRightIcon */.bq, {
            as: configs_icons.SONG2
          })]
        }, id);
      })]
    })]
  }));
}
// EXTERNAL MODULE: ./node_modules/react-indiana-drag-scroll/dist/index.es.js
var index_es = __webpack_require__(804);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(6486);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/system/dist/chakra-ui-system.esm.js + 3 modules
var chakra_ui_system_esm = __webpack_require__(105);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 163 modules
var motion = __webpack_require__(2766);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
var valid_prop = __webpack_require__(9630);
;// CONCATENATED MODULE: ./src/components/animations/BaseItems.js


var ChakraBox = (0,chakra_ui_system_esm/* chakra */.m$)(motion/* motion.div */.E.div, {
  shouldForwardProp: function shouldForwardProp(prop) {
    return (0,valid_prop/* isValidMotionProp */.Z)(prop) || prop === 'children';
  }
});
;// CONCATENATED MODULE: ./src/components/animations/Rotate.js
var Rotate_excluded = ["play"];

function Rotate_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Rotate_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Rotate_ownKeys(Object(source), !0).forEach(function (key) { Rotate_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Rotate_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Rotate_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Rotate_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Rotate_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Rotate_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function Rotate(_ref) {
  var _ref$play = _ref.play,
      play = _ref$play === void 0 ? true : _ref$play,
      props = Rotate_objectWithoutProperties(_ref, Rotate_excluded);

  var variants = {
    start: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: 'loop'
      }
    },
    stop: {
      rotate: 0
    }
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ChakraBox, Rotate_objectSpread(Rotate_objectSpread({
    variants: variants,
    animate: play ? 'start' : 'stop'
  }, props), {}, {
    children: props.children
  }));
}
;// CONCATENATED MODULE: ./src/components/controls/MusicPlayer.js
function MusicPlayer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function MusicPlayer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? MusicPlayer_ownKeys(Object(source), !0).forEach(function (key) { MusicPlayer_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : MusicPlayer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function MusicPlayer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function MusicPlayer_slicedToArray(arr, i) { return MusicPlayer_arrayWithHoles(arr) || MusicPlayer_iterableToArrayLimit(arr, i) || MusicPlayer_unsupportedIterableToArray(arr, i) || MusicPlayer_nonIterableRest(); }

function MusicPlayer_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function MusicPlayer_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return MusicPlayer_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return MusicPlayer_arrayLikeToArray(o, minLen); }

function MusicPlayer_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function MusicPlayer_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function MusicPlayer_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


















function MusicPlayer(_ref) {
  var props = _extends({}, _ref);

  var _useAppContext = useAppContext(),
      _useAppContext2 = MusicPlayer_slicedToArray(_useAppContext, 2),
      _useAppContext2$ = _useAppContext2[0],
      items = _useAppContext2$.items,
      current = _useAppContext2$.current,
      dispatch = _useAppContext2[1];

  var _useBoolean = (0,chakra_ui_hooks_esm/* useBoolean */.kt)(false),
      _useBoolean2 = MusicPlayer_slicedToArray(_useBoolean, 2),
      isPlay = _useBoolean2[0],
      setPlay = _useBoolean2[1];

  var _useState = (0,react.useState)(0),
      _useState2 = MusicPlayer_slicedToArray(_useState, 2),
      currentDuration = _useState2[0],
      setCurrentDuration = _useState2[1];

  var _useState3 = (0,react.useState)(0),
      _useState4 = MusicPlayer_slicedToArray(_useState3, 2),
      currentTime = _useState4[0],
      setCurrentTime = _useState4[1];

  var audioRef = (0,react.useRef)();
  var thumbRef = (0,react.useRef)();
  var fillRef = (0,react.useRef)();
  var fillBufferRef = (0,react.useRef)();
  var lrcRef = (0,react.useRef)();

  var _useState5 = (0,react.useState)(''),
      _useState6 = MusicPlayer_slicedToArray(_useState5, 2),
      lrcContent = _useState6[0],
      setLrcContent = _useState6[1];

  var initLrcLine = {
    content: '🎵🎵🎵'
  };

  var _useState7 = (0,react.useState)(initLrcLine),
      _useState8 = MusicPlayer_slicedToArray(_useState7, 2),
      currentLrcLine = _useState8[0],
      setLrcLine = _useState8[1];

  var initVolume = 25;

  var _useBoolean3 = (0,chakra_ui_hooks_esm/* useBoolean */.kt)(false),
      _useBoolean4 = MusicPlayer_slicedToArray(_useBoolean3, 2),
      openPlaylist = _useBoolean4[0],
      setOpenPlaylist = _useBoolean4[1];

  var _useBoolean5 = (0,chakra_ui_hooks_esm/* useBoolean */.kt)(false),
      _useBoolean6 = MusicPlayer_slicedToArray(_useBoolean5, 2),
      openSongDetails = _useBoolean6[0],
      setOpenSongDetails = _useBoolean6[1];

  var _useBoolean7 = (0,chakra_ui_hooks_esm/* useBoolean */.kt)(false),
      _useBoolean8 = MusicPlayer_slicedToArray(_useBoolean7, 2),
      isExpand = _useBoolean8[0],
      setExpaned = _useBoolean8[1];

  var _useBoolean9 = (0,chakra_ui_hooks_esm/* useBoolean */.kt)(false),
      _useBoolean10 = MusicPlayer_slicedToArray(_useBoolean9, 2),
      isLoop = _useBoolean10[0],
      setLoop = _useBoolean10[1];

  var _useBoolean11 = (0,chakra_ui_hooks_esm/* useBoolean */.kt)(false),
      _useBoolean12 = MusicPlayer_slicedToArray(_useBoolean11, 2),
      isShuffle = _useBoolean12[0],
      setShuffle = _useBoolean12[1];

  function handleNext() {
    if (current === null) {
      if (items.length > 0) {
        dispatch(actions.setCurrent(items[0]));
      }

      return;
    }

    var index = items.findIndex(function (v) {
      return current.id === v.id;
    });
    if (index === items.length - 1) return;
    dispatch(actions.setCurrent(items[index + 1]));
  }

  function handlePrev() {
    if (current === null) return;
    var index = items.findIndex(function (v) {
      return current.id === v.id;
    });
    if (index === 0) return;
    dispatch(actions.setCurrent(items[index - 1]));
  }

  function handleLoadMetaData() {
    setCurrentDuration(audioRef.current.duration);
    setPlay.on();
  }

  function handleTimeUpdate() {
    var currentTime = audioRef.current.currentTime;
    setCurrentTime(currentTime);
    thumbRef.current.style.left = "calc(".concat(currentTime * 100 / currentDuration, "% - 12px)");
    fillRef.current.style.width = "".concat(currentTime * 100 / currentDuration, "%");

    var _lrcRef$current$getCu = lrcRef.current.getCurrentLine(),
        line = _lrcRef$current$getCu.line;

    setLrcLine(line || initLrcLine);

    if (currentTime === currentDuration) {
      if (isLoop) {
        handleLoopPlaylist();
      } else {
        resetSlider();
      }
    }
  }

  function handleChangeEnd(v) {
    var currentTime = v;
    audioRef.current.currentTime = currentTime;
    setCurrentTime(currentTime);
  }

  function resetSlider() {
    setPlay.off();
    setCurrentTime(0);
    audioRef.current.currentTime = 0;
    thumbRef.current.style.left = 'calc(0% - 12px)';
    fillRef.current.style.width = '0%';
    fillBufferRef.current.style.width = '0%';
  }

  function handlePlay() {
    if (current === null) {
      if (items.length > 0) {
        dispatch(actions.setCurrent(items[0]));
        return;
      }
    }

    setPlay.toggle();
  }

  function handleBufferLoad(_) {
    if (audioRef.current.buffered.length <= 0) return;
    var bufferedAmount = audioRef.current.buffered.end(audioRef.current.buffered.length - 1);
    var percentage = bufferedAmount * 100 / currentDuration;
    fillBufferRef.current.style.width = "".concat(percentage, "%");
  }

  function handleLoopPlaylist() {
    if (items.length === 1) {
      audioRef.current.src = "";
      setPlay.off();
      audioRef.current.src = current.files[0].url;
      return;
    }

    var index = items.findIndex(function (v) {
      return current.id === v.id;
    });

    if (index === items.length - 1) {
      dispatch(actions.setCurrent(items[0]));
    } else {
      if (isShuffle) {
        var next;

        do {
          next = lodash_default().random(0, items.length - 1);
        } while (next === index);

        dispatch(actions.setCurrent(items[next]));
      } else {
        dispatch(actions.setCurrent(items[index + 1]));
      }
    }
  }

  (0,react.useEffect)(function () {
    audioRef.current.volume = initVolume / 100;
  }, []);
  (0,react.useEffect)(function () {
    resetSlider();

    if (!current || current.files.length === 0) {
      setCurrentDuration(0);
      return;
    }

    audioRef.current.src = current.files[0].url;
    if (current.lyric) axios_default().get(current.lyric, {
      baseURL: ''
    }).then(function (res) {
      return setLrcContent(res.data);
    });
  }, [current]);
  (0,react.useEffect)(function () {
    if (isPlay) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlay]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_layout_esm/* Box */.xu, MusicPlayer_objectSpread(MusicPlayer_objectSpread({}, props), {}, {
    as: index_es/* default */.Z,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("audio", {
      ref: audioRef,
      onProgress: handleBufferLoad,
      onTimeUpdate: handleTimeUpdate,
      onLoadedMetadata: handleLoadMetaData
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_layout_esm/* HStack */.Ug, {
      justify: "flex-end",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_tooltip_esm/* Tooltip */.u, {
        label: current ? current.name : '',
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_button_esm/* Button */.zx, {
          size: "md",
          hidden: isExpand,
          onClick: setExpaned.on,
          leftIcon: /*#__PURE__*/(0,jsx_runtime.jsx)(Rotate, {
            mt: 1,
            play: !!current && isPlay,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_icon_esm/* Icon */.JO, {
              as: configs_icons.SONG
            })
          }),
          bgGradient: "linear(to-r,orange.200, teal.600)",
          children: "Player"
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_layout_esm/* Box */.xu, {
      hidden: !isExpand,
      p: 2,
      borderRadius: "lg",
      bgGradient: "linear(to-r, orange.300, teal.600)",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(build.Lrc, {
        ref: lrcRef,
        hidden: true,
        currentMillisecond: currentTime * 1000,
        lrc: lrcContent,
        lineRenderer: function lineRenderer() {}
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_layout_esm/* Text */.xv, {
        fontSize: "lg",
        textAlign: "center",
        children: currentLrcLine.content || initLrcLine.content
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_layout_esm/* Box */.xu, {
        px: 2,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_slider_esm/* Slider */.iR, {
          onChangeEnd: handleChangeEnd,
          colorScheme: "white",
          max: currentDuration,
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_slider_esm/* SliderTrack */.Uj, {
            bg: "white",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_slider_esm/* SliderFilledTrack */.Ms, {
              ref: fillRef,
              bg: "teal.700"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_slider_esm/* SliderFilledTrack */.Ms, {
              ref: fillBufferRef,
              zIndex: -1,
              bg: "teal.100"
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_slider_esm/* SliderThumb */.gs, {
            ref: thumbRef,
            boxSize: 6,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_layout_esm/* Box */.xu, {
              color: "teal.700",
              as: index_esm/* RiMusic2Line */.Suf
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_layout_esm/* HStack */.Ug, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_layout_esm/* Text */.xv, {
            children: timeToString(currentTime)
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_layout_esm/* Spacer */.LZ, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_layout_esm/* Text */.xv, {
            children: timeToString(currentDuration)
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_layout_esm/* HStack */.Ug, {
        align: "center",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_button_esm/* IconButton */.hU, {
          onClick: handlePrev,
          _hover: {
            textColor: 'white'
          },
          variant: "ghost",
          colorScheme: "teal",
          icon: /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_icon_esm/* Icon */.JO, {
            as: index_esm/* RiSkipBackLine */.w95,
            w: "8",
            h: "8"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_button_esm/* IconButton */.hU, {
          onClick: function onClick() {
            return handlePlay();
          },
          _hover: {
            textColor: 'white'
          },
          variant: "ghost",
          colorScheme: "teal",
          icon: /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_icon_esm/* Icon */.JO, {
            as: !isPlay ? index_esm/* RiPlayLine */.hpr : index_esm/* RiPauseLine */.bKE,
            w: "8",
            h: "8"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_button_esm/* IconButton */.hU, {
          onClick: handleNext,
          _hover: {
            textColor: 'white'
          },
          variant: "ghost",
          colorScheme: "teal",
          icon: /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_icon_esm/* Icon */.JO, {
            as: index_esm/* RiSkipForwardLine */.WG_,
            w: "8",
            h: "8"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_slider_esm/* Slider */.iR, {
          w: "100px",
          defaultValue: initVolume,
          onChange: function onChange(v) {
            return audioRef.current.volume = v / 100;
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_slider_esm/* SliderTrack */.Uj, {
            bg: "white",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_slider_esm/* SliderFilledTrack */.Ms, {
              bg: "teal.700"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_slider_esm/* SliderThumb */.gs, {
            boxSize: 6,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_layout_esm/* Box */.xu, {
              color: "teal.700",
              as: index_esm/* RiVolumeDownFill */.KQ4
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_layout_esm/* Spacer */.LZ, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_button_esm/* IconButton */.hU, {
          onClick: setExpaned.off,
          icon: /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_icon_esm/* Icon */.JO, {
            as: index_esm/* RiFullscreenExitLine */.Cti,
            w: "8",
            h: "8"
          }),
          size: "sm",
          colorScheme: "white",
          variant: "ghost"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_layout_esm/* HStack */.Ug, {
        m: 2,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_layout_esm/* Text */.xv, {
          children: "Loop"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_switch_esm/* Switch */.r, {
          value: isLoop,
          onChange: setLoop.toggle,
          colorScheme: "teal"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_layout_esm/* Text */.xv, {
          children: "Shuffle"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_switch_esm/* Switch */.r, {
          value: isShuffle,
          onChange: setShuffle.toggle,
          colorScheme: "teal"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_layout_esm/* HStack */.Ug, {
        mx: 1,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_button_esm/* IconButton */.hU, {
          onClick: setOpenPlaylist.toggle,
          icon: /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_icon_esm/* Icon */.JO, {
            as: configs_icons.PLAYLIST,
            w: "5",
            h: "5"
          }),
          size: "sm",
          variant: "ghost"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_button_esm/* IconButton */.hU, {
          onClick: function onClick() {
            return current && setOpenSongDetails.toggle();
          },
          icon: /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_icon_esm/* Icon */.JO, {
            as: configs_icons.INFOR,
            w: "5",
            h: "5"
          }),
          size: "sm",
          variant: "ghost"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_layout_esm/* Text */.xv, {
          noOfLines: 1,
          fontSize: "md",
          pr: 2,
          children: current ? current.name : 'No song playing'
        })]
      })]
    }), openPlaylist && /*#__PURE__*/(0,jsx_runtime.jsx)(Playing, {
      mt: 2
    }), openSongDetails && /*#__PURE__*/(0,jsx_runtime.jsx)(SongDetails, {
      enablePlayButton: false,
      _hover: null,
      mt: 2,
      song: current
    })]
  }));
}
// EXTERNAL MODULE: ./node_modules/react-router/index.js
var react_router = __webpack_require__(6974);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/input/dist/chakra-ui-input.esm.js
var chakra_ui_input_esm = __webpack_require__(4612);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/progress/dist/chakra-ui-progress.esm.js
var chakra_ui_progress_esm = __webpack_require__(8152);
;// CONCATENATED MODULE: ./src/components/lists/Item.js
var Item_excluded = ["icon", "path", "text"];

function Item_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Item_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Item_ownKeys(Object(source), !0).forEach(function (key) { Item_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Item_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Item_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Item_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Item_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Item_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function Item(_ref) {
  var icon = _ref.icon,
      _ref$path = _ref.path,
      path = _ref$path === void 0 ? '' : _ref$path,
      text = _ref.text,
      props = Item_objectWithoutProperties(_ref, Item_excluded);

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_layout_esm/* Box */.xu, Item_objectSpread(Item_objectSpread({
    as: react_router_dom/* Link */.rU,
    to: path,
    m: 2,
    borderRadius: "lg",
    bgGradient: "linear(to-r, teal.200, teal.600)",
    transition: "all 0.2s",
    _hover: {
      transform: 'scale(1.05)'
    },
    minW: "200px",
    p: 3
  }, props), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_icon_esm/* Icon */.JO, {
      as: icon,
      w: 5,
      h: 5
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_layout_esm/* Text */.xv, {
      textAlign: "center",
      mt: -3,
      fontSize: "xl",
      noOfLines: 2,
      children: text
    })]
  }));
}
;// CONCATENATED MODULE: ./src/components/lists/HList.js
var HList_excluded = ["children"];

function HList_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function HList_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? HList_ownKeys(Object(source), !0).forEach(function (key) { HList_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : HList_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function HList_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function HList_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = HList_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function HList_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function HList(_ref) {
  var children = _ref.children,
      props = HList_objectWithoutProperties(_ref, HList_excluded);

  return /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_layout_esm/* Flex */.kC, HList_objectSpread(HList_objectSpread({
    as: index_es/* default */.Z,
    flexWrap: "nowrap"
  }, props), {}, {
    mx: -2,
    children: children
  }));
}
;// CONCATENATED MODULE: ./src/components/lists/Playlist.js
var Playlist_excluded = ["playlist"];

function lists_Playlist_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function lists_Playlist_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? lists_Playlist_ownKeys(Object(source), !0).forEach(function (key) { lists_Playlist_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : lists_Playlist_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function lists_Playlist_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Playlist_slicedToArray(arr, i) { return Playlist_arrayWithHoles(arr) || Playlist_iterableToArrayLimit(arr, i) || Playlist_unsupportedIterableToArray(arr, i) || Playlist_nonIterableRest(); }

function Playlist_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Playlist_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Playlist_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Playlist_arrayLikeToArray(o, minLen); }

function Playlist_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Playlist_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Playlist_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Playlist_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Playlist_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Playlist_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











function Playlist(_ref) {
  var playlist = _ref.playlist,
      props = Playlist_objectWithoutProperties(_ref, Playlist_excluded);

  var _useAppContext = useAppContext(),
      _useAppContext2 = Playlist_slicedToArray(_useAppContext, 2),
      items = _useAppContext2[0].items,
      dispatch = _useAppContext2[1];

  var songs = (0,react.useMemo)(function () {
    return playlist.songs.map(function (i) {
      return i.song;
    });
  }, []);

  function handleAppend() {
    var uniqItems = lodash_default().unionBy(items.concat(songs), 'id');
    dispatch(actions.setItems(uniqItems));
  }

  function handleOpen() {
    if (songs.length > 0) ;
    dispatch(actions.setItems(songs));
    dispatch(actions.setCurrent(songs[0]));
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Card, lists_Playlist_objectSpread(lists_Playlist_objectSpread({
    text: playlist.name,
    icon: configs_icons.PLAYLIST
  }, props), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_layout_esm/* HStack */.Ug, {
      mt: 2,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_button_esm/* IconButton */.hU, {
        onClick: handleOpen,
        icon: /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_icon_esm/* Icon */.JO, {
          as: index_esm/* RiPlayLine */.hpr,
          w: "5",
          h: "5"
        }),
        size: "sm",
        colorScheme: "teal"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_button_esm/* IconButton */.hU, {
        onClick: handleAppend,
        icon: /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_icon_esm/* Icon */.JO, {
          as: index_esm/* RiAddLine */.p22,
          w: "5",
          h: "5"
        }),
        size: "sm",
        colorScheme: "teal"
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_layout_esm/* Flex */.kC, {
      mt: 2,
      flexWrap: "wrap",
      children: playlist.tags.map(function (_ref2) {
        var tag = _ref2.tag;
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_tag_esm/* Tag */.Vp, {
          as: react_router_dom/* Link */.rU,
          to: "/main?keyword=tags::".concat(tag.name),
          mr: 1,
          mb: 1,
          colorScheme: "teal",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_tag_esm/* TagLabel */.Sn, {
            children: tag.name
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_tag_esm/* TagRightIcon */.bq, {
            as: configs_icons.TAG
          })]
        }, tag.id);
      })
    })]
  }));
}
;// CONCATENATED MODULE: ./src/components/lists/VList.js
function VList_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function VList_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? VList_ownKeys(Object(source), !0).forEach(function (key) { VList_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : VList_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function VList_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function VList(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_layout_esm/* SimpleGrid */.MI, VList_objectSpread(VList_objectSpread({}, props), {}, {
    columns: [1, 2, 3, 4],
    columnGap: 4,
    rowGap: 4,
    children: props.children
  }));
}
;// CONCATENATED MODULE: ./src/components/pages/Main.js
function Main_slicedToArray(arr, i) { return Main_arrayWithHoles(arr) || Main_iterableToArrayLimit(arr, i) || Main_unsupportedIterableToArray(arr, i) || Main_nonIterableRest(); }

function Main_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Main_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Main_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Main_arrayLikeToArray(o, minLen); }

function Main_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Main_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Main_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















function Main() {
  var _useState = (0,react.useState)([]),
      _useState2 = Main_slicedToArray(_useState, 2),
      tags = _useState2[0],
      setTags = _useState2[1];

  var _useState3 = (0,react.useState)([]),
      _useState4 = Main_slicedToArray(_useState3, 2),
      singers = _useState4[0],
      setSingers = _useState4[1];

  var _useState5 = (0,react.useState)([]),
      _useState6 = Main_slicedToArray(_useState5, 2),
      composers = _useState6[0],
      setComposers = _useState6[1];

  var _useState7 = (0,react.useState)([]),
      _useState8 = Main_slicedToArray(_useState7, 2),
      playlists = _useState8[0],
      setPlaylists = _useState8[1];

  var _useState9 = (0,react.useState)([]),
      _useState10 = Main_slicedToArray(_useState9, 2),
      songs = _useState10[0],
      setSongs = _useState10[1];

  var _useBoolean = (0,chakra_ui_hooks_esm/* useBoolean */.kt)(false),
      _useBoolean2 = Main_slicedToArray(_useBoolean, 2),
      isLoading = _useBoolean2[0],
      setLoading = _useBoolean2[1];

  var _useLocation = (0,react_router/* useLocation */.TH)(),
      search = _useLocation.search;

  var _useState11 = (0,react.useState)(''),
      _useState12 = Main_slicedToArray(_useState11, 2),
      keyword = _useState12[0],
      setKeyword = _useState12[1];

  var topRef = (0,react.useRef)();

  function initData() {
    setLoading.on();
    Promise.all([axios_default().get('/tags?size=10'), axios_default().get('/attributes?attribute.name=SINGER'), axios_default().get('/attributes?attribute.name=COMPOSER'), axios_default().get('/playlists?size=10'), axios_default().get('/songs?size=10')]).then(function (_ref) {
      var _ref2 = Main_slicedToArray(_ref, 5),
          tagRes = _ref2[0],
          singerRes = _ref2[1],
          composerRes = _ref2[2],
          playlistRes = _ref2[3],
          songRes = _ref2[4];

      setTags(tagRes.data.content);
      setSingers(singerRes.data['SINGER']);
      setComposers(composerRes.data['COMPOSER']);
      setPlaylists(playlistRes.data.content);
      setSongs(songRes.data.content);
      setLoading.off();
    });
  }

  function handleTextChange(e) {
    var v = e.target.value;
    setKeyword(v);

    if (v.trim() === '') {
      initData();
    }
  }

  function handleSearch(keyword) {
    var _topRef$current;

    (_topRef$current = topRef.current) === null || _topRef$current === void 0 ? void 0 : _topRef$current.scrollIntoView({
      behavior: 'smooth'
    });
    setLoading.on();
    setTags([]);
    setSingers([]);
    setComposers([]);
    var promises;

    if (keyword.startsWith("tags::")) {
      promises = [axios_default().get("/songs?tags=".concat(keyword.substring(6))), axios_default().get("/playlists?tags".concat(keyword.substring(6)))];
    } else if (keyword.startsWith("attributes::")) {
      promises = [axios_default().get("/songs?attributes=".concat(keyword.substring(12))), axios_default().get("/playlists?attributes=".concat(keyword.substring(12)))];
    } else {
      promises = [axios_default().get("/songs?name=".concat(keyword)), axios_default().get("/playlists?name=".concat(keyword))];
    }

    Promise.all(promises).then(function (_ref3) {
      var _ref4 = Main_slicedToArray(_ref3, 2),
          songRes = _ref4[0],
          playlistRes = _ref4[1];

      setSongs(songRes.data.content);
      setPlaylists(playlistRes.data.content);
      setLoading.off();
    });
  }

  var searchDebounce = (0,react.useCallback)(lodash_default().debounce(handleSearch, 200), []);
  (0,react.useEffect)(function () {
    initData();
  }, []);
  (0,react.useEffect)(function () {
    if (keyword.trim() === '') {
      return;
    }

    searchDebounce(keyword);
  }, [keyword]);
  (0,react.useEffect)(function () {
    var keyword = search.replace("?keyword=", "");
    setKeyword(decodeURI(keyword));
  }, [search]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_layout_esm/* Box */.xu, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      ref: topRef
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_input_esm/* InputGroup */.BZ, {
      mb: 2,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_input_esm/* InputLeftElement */.Z8, {
        pointerEvents: "none",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_icon_esm/* Icon */.JO, {
          as: index_esm/* RiSearchLine */.Qcu,
          color: "gray.300"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_input_esm/* Input */.II, {
        value: keyword,
        onChange: handleTextChange,
        type: "text",
        placeholder: "Search song, playlist"
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_progress_esm/* Progress */.Ex, {
      mb: 3,
      colorScheme: "teal",
      hidden: !isLoading,
      size: "xs",
      isIndeterminate: true
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_layout_esm/* Box */.xu, {
      children: [tags.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_layout_esm/* Heading */.X6, {
          as: "h3",
          size: "md",
          children: "Tags"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(HList, {
          children: tags.map(function (_ref5) {
            var id = _ref5.id,
                name = _ref5.name;
            return /*#__PURE__*/(0,jsx_runtime.jsx)(Item, {
              path: "/main?keyword=tags::".concat(name),
              text: name,
              icon: configs_icons.TAG
            }, id);
          })
        })]
      }), singers.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_layout_esm/* Heading */.X6, {
          as: "h3",
          size: "md",
          children: "Singers"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(HList, {
          children: singers.map(function (_ref6) {
            var id = _ref6.id,
                value = _ref6.value;
            return /*#__PURE__*/(0,jsx_runtime.jsx)(Item, {
              path: "/main?keyword=attributes::".concat(value),
              text: value,
              icon: configs_icons.SONG2
            }, id);
          })
        })]
      }), composers.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_layout_esm/* Heading */.X6, {
          as: "h3",
          size: "md",
          children: "Composers"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(HList, {
          children: composers.map(function (_ref7) {
            var id = _ref7.id,
                value = _ref7.value;
            return /*#__PURE__*/(0,jsx_runtime.jsx)(Item, {
              path: "/main?keyword=attributes::".concat(value),
              text: value,
              icon: configs_icons.SONG2
            }, id);
          })
        })]
      }), playlists.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_layout_esm/* Heading */.X6, {
          as: "h3",
          size: "md",
          children: "Playlists"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(VList, {
          my: 2,
          children: playlists.map(function (playlist) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(Playlist, {
              w: "auto",
              playlist: playlist
            }, playlist.id);
          })
        })]
      }), songs.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_layout_esm/* Heading */.X6, {
          as: "h3",
          size: "md",
          children: "Songs"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(VList, {
          my: 2,
          children: songs.map(function (song) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(SongDetails, {
              w: "auto",
              song: song
            }, song.id);
          })
        })]
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/pages/Playlist.js
function Playlist_Playlist() {
  return "My Playlist";
}
;// CONCATENATED MODULE: ./src/components/layouts/CustomRoutes.js




function CustomRoutes() {
  var routes = (0,react_router/* useRoutes */.V$)([{
    path: '/',
    element: /*#__PURE__*/(0,jsx_runtime.jsx)(Main, {})
  }, {
    path: 'main',
    element: /*#__PURE__*/(0,jsx_runtime.jsx)(Main, {})
  }, {
    path: 'playlist',
    element: /*#__PURE__*/(0,jsx_runtime.jsx)(Playlist_Playlist, {})
  }]);
  return routes;
}
;// CONCATENATED MODULE: ./src/helpers/url.js
function urlToSegments(pathname) {
  return pathname.split('/').filter(function (v) {
    return v !== '';
  });
}
;// CONCATENATED MODULE: ./src/components/menu/Menu.js
function Menu_slicedToArray(arr, i) { return Menu_arrayWithHoles(arr) || Menu_iterableToArrayLimit(arr, i) || Menu_unsupportedIterableToArray(arr, i) || Menu_nonIterableRest(); }

function Menu_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Menu_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Menu_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Menu_arrayLikeToArray(o, minLen); }

function Menu_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Menu_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Menu_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function Menu() {
  var items = [{
    name: 'Main',
    icon: index_esm/* RiHomeLine */.fXt
  }, {
    name: 'Playlist',
    icon: index_esm/* RiPlayList2Line */.p_x
  }];

  var _useState = (0,react.useState)(items[0].name.toLowerCase()),
      _useState2 = Menu_slicedToArray(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var after = {
    content: '""',
    backgroundColor: "#b2f5ea",
    overflow: 'hidden',
    position: 'absolute',
    height: '100vh',
    width: '20px',
    right: '-10px',
    top: '48px',
    borderRadius: '10px'
  };
  var before = {
    content: '""',
    backgroundColor: "#b2f5ea",
    overflow: 'hidden',
    position: 'absolute',
    height: '100vh',
    width: '20px',
    right: '-10px',
    bottom: '48px',
    borderRadius: '10px'
  };
  var location = (0,react_router/* useLocation */.TH)();
  (0,react.useEffect)(function () {
    var segments = urlToSegments(location.pathname);

    if (segments.length === 0) {
      setCurrent(items[0].name.toLowerCase());
      return;
    }

    setCurrent(segments[0]);
  }, [location]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_layout_esm/* VStack */.gC, {
    align: "stretch",
    paddingLeft: 3,
    paddingTop: 3,
    children: items.map(function (_ref) {
      var name = _ref.name,
          icon = _ref.icon;

      if (name.toLowerCase() === current) {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_layout_esm/* Flex */.kC, {
          bgColor: "teal.800",
          borderLeftRadius: "10px",
          pos: "relative",
          _after: after,
          _before: before,
          textColor: "white",
          align: "center",
          p: 3,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_icon_esm/* Icon */.JO, {
            mr: 1,
            as: icon,
            w: 6,
            h: 6
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_layout_esm/* Text */.xv, {
            display: ['none', 'block'],
            children: name
          })]
        }, name);
      }

      return /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_layout_esm/* Flex */.kC, {
        p: 3,
        as: react_router_dom/* Link */.rU,
        align: "center",
        to: name.toLowerCase(),
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_icon_esm/* Icon */.JO, {
          mr: 1,
          as: icon,
          w: 6,
          h: 6
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_layout_esm/* Text */.xv, {
          display: ['none', 'block'],
          children: name
        })]
      }, name);
    })
  });
}
;// CONCATENATED MODULE: ./src/components/menu/TopMenu.js


function TopMenu() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_layout_esm/* VStack */.gC, {
    mt: 3,
    display: ['none', 'flex'],
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(chakra_ui_image_esm/* Image */.Ee, {
      borderRadius: "full",
      boxSize: {
        sm: '80px',
        md: '120px',
        lg: '150'
      },
      src: "https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
      alt: "Dan Abramov"
    })
  });
}
;// CONCATENATED MODULE: ./src/App.js







function App() {
  var style = {
    pos: 'absolute',
    bottom: 2,
    right: 4,
    w: ['auto', '400px'],
    maxH: '80vh',
    overflow: 'scroll',
    zIndex: 99
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_layout_esm/* Flex */.kC, {
    h: "100vh",
    overflow: "hidden",
    pos: "relative",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_layout_esm/* Box */.xu, {
      bgColor: "teal.100",
      w: ['20%'],
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TopMenu, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(Menu, {})]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_layout_esm/* Box */.xu, {
      bgColor: "teal.800",
      w: ['80%'],
      p: 3,
      paddingLeft: 6,
      textColor: "white",
      overflowY: "auto",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(CustomRoutes, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(MusicPlayer, {
        sx: style
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./src/theme.js

var theme = (0,chakra_ui_react_esm/* extendTheme */.B1C)({
  fonts: {
    heading: "\"Exo\", sans-serif;",
    body: "\"Exo\", sans-serif;"
  },
  styles: {
    global: {
      "::-webkit-scrollbar": {
        width: '7px',
        height: '7px'
      },
      "::-webkit-scrollbar-track": {
        backgroundColor: "#f1f1f1",
        borderRadius: '10px'
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor: "#888",
        borderRadius: '10px'
      },
      "::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "#555"
      }
    }
  }
});
/* harmony default export */ const src_theme = (theme);
;// CONCATENATED MODULE: ./src/api/index.js

(axios_default()).defaults.baseURL = 'http://localhost:3333/api';
function initAxios(toast) {
  axios_default().interceptors.response.use(function (config) {
    return config;
  }, function (error) {
    toast({
      title: "System Error. Try again",
      status: 'error'
    });
    return Promise.reject(error);
  });
}
;// CONCATENATED MODULE: ./src/index.js












var _createStandaloneToas = (0,chakra_ui_toast_esm/* createStandaloneToast */.I2)(),
    ToastContainer = _createStandaloneToas.ToastContainer,
    toast = _createStandaloneToas.toast;

initAxios(toast);
var app = client.createRoot(document.getElementById("app"));
app.render( /*#__PURE__*/(0,jsx_runtime.jsx)(AppProvider, {
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* BrowserRouter */.VK, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_esm/* ChakraProvider */.xjn, {
      theme: src_theme,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(App, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(ToastContainer, {})]
    })
  })
}));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkclient"] = self["webpackChunkclient"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [41], () => (__webpack_require__(8625)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;