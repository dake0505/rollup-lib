import * as React from 'react';
import { useState } from 'react';
import { jsx, css } from '@emotion/react';
import { motion } from 'framer-motion';
import classNames from 'classnames';

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref = process.env.NODE_ENV === "production" ? {
  name: "x1oq08",
  styles: "width:100px;height:50px;background:whitesmoke;border-radius:50px;position:relative"
} : {
  name: "14dour1-Switch",
  styles: "width:100px;height:50px;background:whitesmoke;border-radius:50px;position:relative;label:Switch;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN3aXRjaC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWWMiLCJmaWxlIjoiU3dpdGNoLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5jb25zdCBTd2l0Y2ggPSAoKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoYW5kbGVPbnRhcCA9ICgpID0+IHtcbiAgICBzZXRTdGF0ZSghc3RhdGUpXG4gIH07XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiXG4gICAgICBjc3M9e2Nzc2BcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGB9XG4gICAgICBvblRhcD17aGFuZGxlT250YXB9XG4gICAgPlxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiYmFsbFwiXG4gICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByb3lhbGJsdWU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAke3N0YXRlID8gJ3Vuc2V0JyA6IDB9O1xuICAgICAgICAgIHJpZ2h0OiAke3N0YXRlID8gMCA6ICd1bnNldCd9O1xuICAgICAgICBgfVxuICAgICAgICB0cmFuc2l0aW9uPXt7ZHVyYXRpb246IDF9fVxuICAgICAgICBwb3NpdGlvbnRyYW5zaXRpb249XCJ0cnVlXCJcbiAgICAgID48L21vdGlvbi5kaXY+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3dpdGNoO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var Switch = function Switch() {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var handleOntap = function handleOntap() {
    setState(!state);
  };

  return jsx(motion.div, {
    className: "container",
    css: _ref,
    onTap: handleOntap
  }, jsx(motion.div, {
    className: "ball",
    css: /*#__PURE__*/css("width:50px;height:50px;background:royalblue;border-radius:50%;position:absolute;left:", state ? 'unset' : 0, ";right:", state ? 0 : 'unset', ";" + (process.env.NODE_ENV === "production" ? "" : ";label:Switch;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN3aXRjaC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJnQiIsImZpbGUiOiJTd2l0Y2guanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IFN3aXRjaCA9ICgpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGhhbmRsZU9udGFwID0gKCkgPT4ge1xuICAgIHNldFN0YXRlKCFzdGF0ZSlcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyXCJcbiAgICAgIGNzcz17Y3NzYFxuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYH1cbiAgICAgIG9uVGFwPXtoYW5kbGVPbnRhcH1cbiAgICA+XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBjbGFzc05hbWU9XCJiYWxsXCJcbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJveWFsYmx1ZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6ICR7c3RhdGUgPyAndW5zZXQnIDogMH07XG4gICAgICAgICAgcmlnaHQ6ICR7c3RhdGUgPyAwIDogJ3Vuc2V0J307XG4gICAgICAgIGB9XG4gICAgICAgIHRyYW5zaXRpb249e3tkdXJhdGlvbjogMX19XG4gICAgICAgIHBvc2l0aW9udHJhbnNpdGlvbj1cInRydWVcIlxuICAgICAgPjwvbW90aW9uLmRpdj5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2g7XG4iXX0= */"),
    transition: {
      duration: 1
    },
    positiontransition: "true"
  }));
};

const SizeContext = React.createContext(undefined);

function insertSpace(child, needInserted) {
    return child;
}
function spaceChildren(children, needInserted) {
    let isPrevChildPure = false;
    const childList = [];
    React.Children.forEach(children, child => {
        const type = typeof child;
        const isCurrentChildPure = type === 'string' || type === 'number';
        if (isPrevChildPure && isCurrentChildPure) {
            const lastIndex = childList.length - 1;
            const lastChild = childList[lastIndex];
            childList[lastIndex] = `${lastChild}${child}`;
        }
        else {
            childList.push(child);
        }
        isPrevChildPure = isCurrentChildPure;
    });
    return React.Children.map(childList, child => insertSpace(child));
}
const InternalButton = (props, ref) => {
    const { loading = false, type = 'default', danger, shape = 'default', children, htmlType = 'button', ...rest } = props;
    const size = React.useContext(SizeContext);
    const handleClick = (e) => {
        const { onClick } = props;
        onClick?.(e);
    };
    const sizeFullName = size;
    const sizeCls = sizeFullName;
    const classes = classNames({
        [`${shape}`]: shape !== 'default' && shape,
        [`${type}`]: type,
        [`${sizeCls}`]: sizeCls,
        ['dangerous']: !!danger
    });
    const kids = children || children === 0
        ? spaceChildren(children)
        : null;
    const buttonNode = (React.createElement("button", { ...rest, className: classes, type: htmlType, onClick: handleClick }, kids));
    return (React.createElement("div", null, buttonNode));
};

function commonjsRequire(path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var indexStyle = {exports: {}};

(function (module, exports) {
  function pascalCase(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).replace(/-(\w)/g, function (m, n) {
      return n.toUpperCase();
    });
  } // Just import style for https://github.com/ant-design/ant-design/issues/3745


  var req = commonjsRequire.context('./components', true, /^\.\/[^_][\w-]+\/style\/index\.tsx?$/);
  req.keys().forEach(function (mod) {
    var v = req(mod);

    if (v && v["default"]) {
      v = v["default"];
    }

    var match = mod.match(/^\.\/([^_][\w-]+)\/index\.tsx?$/);

    if (match && match[1]) {
      if (match[1] === 'message' || match[1] === 'notification') {
        // message & notification should not be capitalized
        exports[match[1]] = v;
      } else {
        exports[pascalCase(match[1])] = v;
      }
    }
  });
  module.exports = exports;
})(indexStyle, indexStyle.exports);

export { InternalButton, Switch };
