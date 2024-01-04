import React, { useState } from 'react';
import WizardStepIndicator from '../src/index.tsx';


const meta = {
    component: WizardStepIndicator,
    decorators: [
        (Story) => (
            <Story />
        ),
    ],
};

export default meta;


const onClick = (index)=> { console.log(`Clicked on step index ${index}`);};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultProps = {
    args: {
        stepsCount: 5,
        currentStepIndex: 0,
        onClick
    },
};

export const AllProps = {
    args: {
        id: 'noop-id',
        style: {},
        className: '',
        canClickOnForwardSteps: false,
        stepsCount: 5,
        currentStepIndex: 3,
        useCheckPassedStep: true,
        disabled: false,
        btnStepClassName: 'wsi-btn-step',
        lineBetweenStepsClassName: 'wsi-line-between-steps',
        activeClassName: 'wsi-active-step',
        inactiveClassName: 'wsi-inactive-step',
        onClick
    },
};
  

export const InteractiveDemo = {
    render: (args)=> {
        const maxStepIndex = args.stepsCount - 1;
        const [currentIndex, setCurrentIndex]= useState(0);
        const componentProps = {
            ...args,
            currentStepIndex: currentIndex,
            onClick:(index)=> {
                setCurrentIndex(index);
            }
        };

        const tempArr = Array(args.stepsCount).fill('');

        return <div style={{padding: '8px', margin: '0 auto', width: '600px', border: '2px solid #ccc', borderRadius: '8px'}}>
            <WizardStepIndicator {...componentProps}/>
            <div style={{height: '200px'}}>
                {tempArr.map((_,index) => (index === currentIndex && <div key={`div-${index}`}>
                    <h1>Step Index {index}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <button onClick={()=> {
                    setCurrentIndex(currentIndex == 0 ? 0 : currentIndex - 1);
                }} disabled={currentIndex === 0} >Prev</button>
                <button onClick={()=> {
                    setCurrentIndex(currentIndex == maxStepIndex ? maxStepIndex : currentIndex + 1);
                }}>{currentIndex === maxStepIndex ? 'Done' : 'Next'}</button>
            </div>
        </div>;
    },
    args: {
        id: 'noop-id',
        style: {},
        className: '',
        canClickOnForwardSteps: false,
        stepsCount: 5,
        currentStepIndex: 0,
        useCheckPassedStep: true,
        disabled: false,
        btnStepClassName: '',
        lineBetweenStepsClassName: '',
        activeClassName: '',
        inactiveClassName: '',
    }
};
