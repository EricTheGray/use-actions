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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useState } from 'react';
function useActions(actions, initial) {
    var _a = useState(initial), state = _a[0], setState = _a[1];
    var wiredActions = Object.entries(actions).reduce(function (acc, _a) {
        var _b;
        var actionName = _a[0], action = _a[1];
        return __assign(__assign({}, acc), (_b = {}, _b[actionName] = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            setState(function (prev) { return action.apply(void 0, __spreadArray([prev], params, false)); });
        }, _b));
    }, {});
    return [state, wiredActions];
}
;
export default useActions;
