import React from 'react';
import classNames from 'classnames';
import { Fragment } from 'react';
import type * as CSS from 'csstype';

type CheckIconProps = {
    style?: CSS.Properties, 
    className: string
}

const CheckIcon = ({style, className}: CheckIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        style={style}
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
        />
    </svg>
);

export interface WizardStepIndicatorProps {
    id?: string;
    style?: CSS.Properties;
    className?: string;
    canClickOnForwardSteps?: boolean;
    stepsCount: number;
    currentStepIndex: number;
    disabled?: boolean;
    useCheckPassedStep?: boolean;
    btnStepClassName?: string;
    lineBetweenStepsClassName?: string;
    activeClassName?: string;
    inactiveClassName?: string;
    checkIconClassName?: string;
    onClick: (index: number) => void;
}

const WizardStepIndicator: React.FC<WizardStepIndicatorProps> = ({ 
    id,
    style,
    className,
    canClickOnForwardSteps = false,
    stepsCount,
    currentStepIndex,
    useCheckPassedStep = true,
    disabled,
    btnStepClassName,
    lineBetweenStepsClassName,
    activeClassName,
    inactiveClassName,
    checkIconClassName,
    onClick
}) => {

    const stepsArr = new Array(stepsCount).fill(null);
    const lastInedx = stepsCount - 1;

    const activeBgColor =  '#4299e1';
    const activeColor =  '#ffffff';
    const inactiveBgColor =  '#edf2f7';
    const inactiveColor =  '#000000';


    const commonStyleObj: CSS.Properties = {
        display: 'inline-block',
        width: '1.25rem',
        height: '1.25rem',
        fontSize: '0.75rem',
    };

    let btnStepStyleObj: CSS.Properties = {
        ...commonStyleObj,
        overflow: 'hidden',
        appearance: 'none',
        border: 'none',
        margin: '0',
        padding: '0',
        cursor: 'pointer',
        outline: 'none',
        transition: 'all 0.3s ease',
        borderRadius: '50%'
    };

    if (activeClassName) {
        btnStepStyleObj = {
            overflow: 'hidden',
            margin: '0',
            padding: '0',
            cursor: 'pointer',
        };
    }

    let lineBetweenStepsStyleObj: CSS.Properties = {
        ...commonStyleObj,
        height: '0.2rem'
    };

    if (lineBetweenStepsClassName) {
        lineBetweenStepsStyleObj = {
            display: 'inline-block',
        };
    }

    if (disabled) {
        btnStepStyleObj.opacity = lineBetweenStepsStyleObj.opacity = '0.5';
        btnStepStyleObj.cursor = lineBetweenStepsStyleObj.cursor = 'not-allowed';
    }

    let checkIconStyleObj: CSS.Properties = {
        ...commonStyleObj,
        borderRadius: '50%'
    };

    if (checkIconClassName) {
        checkIconStyleObj = {
            border: 'none'
        };
    }

    return <div id={id} style={{...style, 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
    }} className={className}>
        {stepsArr.map((_, index) => {
            const isNavBtnDisabled = canClickOnForwardSteps ? false : currentStepIndex < index;
            const isLastIndex = index === lastInedx;
            const isActive = index <= currentStepIndex;
            const isStepBarActive = index < currentStepIndex;
            const title = index + 1;

            const stepItem = useCheckPassedStep ? <CheckIcon style={checkIconStyleObj} className={classNames(checkIconClassName)} />  : title;

            const backgroundColor = isActive ? 
                (activeClassName ? undefined : activeBgColor) : 
                (inactiveClassName ? undefined :inactiveBgColor);

            const color = isActive ? 
                (activeClassName ? undefined : activeColor) : 
                (inactiveClassName ? undefined : inactiveColor);

            const barBackgroundColor = isStepBarActive ? 
                (activeClassName ? undefined : activeBgColor) : 
                (inactiveClassName ? undefined :inactiveBgColor);

            const barColor = isStepBarActive ? 
                (activeClassName ? undefined : activeColor) : 
                (inactiveClassName ? undefined : inactiveColor);

            return <Fragment key={`wsi-${index}`} ><button
                data-testid={`wsi-${index}`}
                disabled={disabled || isNavBtnDisabled}
                className={classNames(btnStepClassName, {
                    [activeClassName || '']: isActive,
                    [inactiveClassName || '']: !isActive,
                })}
                style={{
                    ...btnStepStyleObj,
                    backgroundColor,
                    color,
                    cursor: disabled || isNavBtnDisabled ? 'not-allowed' : 'pointer',
                }}
                onClick={()=> onClick(index)}
            >{isStepBarActive ? stepItem : title}</button>
            {!isLastIndex && <span className={classNames(lineBetweenStepsClassName, {
                [activeClassName || '']: isStepBarActive,
                [inactiveClassName || '']: !isStepBarActive,
            })}
            style={{
                ...lineBetweenStepsStyleObj,
                backgroundColor: barBackgroundColor,
                color: barColor,
            }} />}
            </Fragment>;
        })}
    </div>;
};

export default WizardStepIndicator;

