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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var classnames_1 = require("classnames");
var react_2 = require("react");
var CheckIcon = function (_a) {
    var style = _a.style, className = _a.className;
    return (<svg xmlns="http://www.w3.org/2000/svg" style={style} className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
    </svg>);
};
var WizardStepIndicator = function (_a) {
    var id = _a.id, style = _a.style, className = _a.className, _b = _a.canClickOnForwardSteps, canClickOnForwardSteps = _b === void 0 ? false : _b, stepsCount = _a.stepsCount, currentStepIndex = _a.currentStepIndex, _c = _a.useCheckPassedStep, useCheckPassedStep = _c === void 0 ? true : _c, disabled = _a.disabled, btnStepClassName = _a.btnStepClassName, lineBetweenStepsClassName = _a.lineBetweenStepsClassName, activeClassName = _a.activeClassName, inactiveClassName = _a.inactiveClassName, checkIconClassName = _a.checkIconClassName, onClick = _a.onClick;
    var stepsArr = new Array(stepsCount).fill(null);
    var lastInedx = stepsCount - 1;
    var activeBgColor = '#4299e1';
    var activeColor = '#ffffff';
    var inactiveBgColor = '#edf2f7';
    var inactiveColor = '#000000';
    var commonStyleObj = {
        display: 'inline-block',
        width: '1.25rem',
        height: '1.25rem',
        fontSize: '0.75rem',
    };
    var btnStepStyleObj = __assign(__assign({}, commonStyleObj), { overflow: 'hidden', appearance: 'none', border: 'none', margin: '0', padding: '0', cursor: 'pointer', outline: 'none', transition: 'all 0.3s ease', borderRadius: '50%' });
    if (activeClassName) {
        btnStepStyleObj = {
            overflow: 'hidden',
            margin: '0',
            padding: '0',
            cursor: 'pointer',
        };
    }
    var lineBetweenStepsStyleObj = __assign(__assign({}, commonStyleObj), { height: '0.2rem' });
    if (lineBetweenStepsClassName) {
        lineBetweenStepsStyleObj = {
            display: 'inline-block',
        };
    }
    if (disabled) {
        btnStepStyleObj.opacity = lineBetweenStepsStyleObj.opacity = '0.5';
        btnStepStyleObj.cursor = lineBetweenStepsStyleObj.cursor = 'not-allowed';
    }
    var checkIconStyleObj = __assign(__assign({}, commonStyleObj), { borderRadius: '50%' });
    if (checkIconClassName) {
        checkIconStyleObj = {
            border: 'none'
        };
    }
    return <div id={id} style={__assign(__assign({}, style), { display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' })} className={className}>
        {stepsArr.map(function (_, index) {
            var _a, _b;
            var isNavBtnDisabled = canClickOnForwardSteps ? false : currentStepIndex < index;
            var isLastIndex = index === lastInedx;
            var isActive = index <= currentStepIndex;
            var isStepBarActive = index < currentStepIndex;
            var title = index + 1;
            var stepItem = useCheckPassedStep ? <CheckIcon style={checkIconStyleObj} className={(0, classnames_1.default)(checkIconClassName)}/> : title;
            var backgroundColor = isActive ?
                (activeClassName ? undefined : activeBgColor) :
                (inactiveClassName ? undefined : inactiveBgColor);
            var color = isActive ?
                (activeClassName ? undefined : activeColor) :
                (inactiveClassName ? undefined : inactiveColor);
            var barBackgroundColor = isStepBarActive ?
                (activeClassName ? undefined : activeBgColor) :
                (inactiveClassName ? undefined : inactiveBgColor);
            var barColor = isStepBarActive ?
                (activeClassName ? undefined : activeColor) :
                (inactiveClassName ? undefined : inactiveColor);
            return <react_2.Fragment key={"wsi-".concat(index)}><button data-testid={"wsi-".concat(index)} disabled={disabled || isNavBtnDisabled} className={(0, classnames_1.default)(btnStepClassName, (_a = {},
                    _a[activeClassName || ''] = isActive,
                    _a[inactiveClassName || ''] = !isActive,
                    _a))} style={__assign(__assign({}, btnStepStyleObj), { backgroundColor: backgroundColor, color: color, cursor: disabled || isNavBtnDisabled ? 'not-allowed' : 'pointer' })} onClick={function () { return onClick(index); }}>{isStepBarActive ? stepItem : title}</button>
            {!isLastIndex && <span className={(0, classnames_1.default)(lineBetweenStepsClassName, (_b = {},
                        _b[activeClassName || ''] = isStepBarActive,
                        _b[inactiveClassName || ''] = !isStepBarActive,
                        _b))} style={__assign(__assign({}, lineBetweenStepsStyleObj), { backgroundColor: barBackgroundColor, color: barColor })}/>}
            </react_2.Fragment>;
        })}
    </div>;
};
exports.default = WizardStepIndicator;
