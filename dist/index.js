"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports["default"] = exports.logReducer = void 0;
var functionReducer = function (state, action) {
    var action_fn = action.action_fn, params = __rest(action, ["action_fn"]);
    if (typeof action_fn === "function") {
        return action_fn(__assign({ state: state }, params));
    }
    else {
        return state;
    }
};
exports["default"] = functionReducer;
// Optional function to help with debugging
exports.logReducer = function (functionReducer, state, action) {
    var action_fn = action.action_fn, params = __rest(action, ["action_fn"]);
    console.log(new Date().toISOString() + " | name: " + (action_fn === null || action_fn === void 0 ? void 0 : action_fn.name) + ", params: " + JSON.stringify(params));
    return functionReducer(state, action);
};
//# sourceMappingURL=index.js.map