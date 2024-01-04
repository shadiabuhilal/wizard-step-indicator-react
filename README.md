# wizard-step-indicator-react
![Build Status](https://github.com/shadiabuhilal/wizard-step-indicator-react/actions/workflows/push-workflows.yml/badge.svg)

Wizard Step Indicator for React

https://shadiabuhilal.github.io/wizard-step-indicator-react/

-----------

## Usage

### import wizard-step-indicator-react
```js
import WizardStepIndicator from 'wizard-step-indicator-react';
```

### Using WizardStepIndicator
WizardStepIndicator comoponent

Example:

```js
const [currentStepIndexState, setCurrentStepIndex] = useState(0);

...

<WizardStepIndicator
    stepsCount={5}
    currentStepIndex={currentStepIndexState}
    onClick={(index)=> { 
        setCurrentStepIndex(index);
    }}
/>
```

For more info, please check [storybook](https://shadiabuhilal.github.io/wizard-step-indicator-react/)
