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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN3aXRjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZYyIsImZpbGUiOiJTd2l0Y2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgU3dpdGNoID0gKCkgPT4ge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlT250YXAgPSAoKSA9PiB7XG4gICAgc2V0U3RhdGUoIXN0YXRlKVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2XG4gICAgICBjbGFzc05hbWU9XCJjb250YWluZXJcIlxuICAgICAgY3NzPXtjc3NgXG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBgfVxuICAgICAgb25UYXA9e2hhbmRsZU9udGFwfVxuICAgID5cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImJhbGxcIlxuICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogcm95YWxibHVlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogJHtzdGF0ZSA/ICd1bnNldCcgOiAwfTtcbiAgICAgICAgICByaWdodDogJHtzdGF0ZSA/IDAgOiAndW5zZXQnfTtcbiAgICAgICAgYH1cbiAgICAgICAgdHJhbnNpdGlvbj17e2R1cmF0aW9uOiAxfX1cbiAgICAgICAgcG9zaXRpb250cmFuc2l0aW9uPVwidHJ1ZVwiXG4gICAgICA+PC9tb3Rpb24uZGl2PlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN3aXRjaDtcbiJdfQ== */",
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
    css: /*#__PURE__*/css("width:50px;height:50px;background:royalblue;border-radius:50%;position:absolute;left:", state ? 'unset' : 0, ";right:", state ? 0 : 'unset', ";" + (process.env.NODE_ENV === "production" ? "" : ";label:Switch;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN3aXRjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QmdCIiwiZmlsZSI6IlN3aXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5jb25zdCBTd2l0Y2ggPSAoKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoYW5kbGVPbnRhcCA9ICgpID0+IHtcbiAgICBzZXRTdGF0ZSghc3RhdGUpXG4gIH07XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiXG4gICAgICBjc3M9e2Nzc2BcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGB9XG4gICAgICBvblRhcD17aGFuZGxlT250YXB9XG4gICAgPlxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiYmFsbFwiXG4gICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByb3lhbGJsdWU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAke3N0YXRlID8gJ3Vuc2V0JyA6IDB9O1xuICAgICAgICAgIHJpZ2h0OiAke3N0YXRlID8gMCA6ICd1bnNldCd9O1xuICAgICAgICBgfVxuICAgICAgICB0cmFuc2l0aW9uPXt7ZHVyYXRpb246IDF9fVxuICAgICAgICBwb3NpdGlvbnRyYW5zaXRpb249XCJ0cnVlXCJcbiAgICAgID48L21vdGlvbi5kaXY+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3dpdGNoO1xuIl19 */"),
    transition: {
      duration: 1
    },
    positiontransition: "true"
  }));
};

var tuple = function tuple() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }
    return args;
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
tuple('default', 'primary');
tuple('default', 'circle');
tuple('submit', 'button');
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

export { InternalButton, Switch };
