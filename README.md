# wizard-step-indicator-react
![Build Status](https://github.com/shadiabuhilal/wizard-step-indicator-react/actions/workflows/push-workflows.yml/badge.svg)

Wizard Step Indicator for React

https://shadiabuhilal.github.io/wizard-step-indicator-react/

-----------

<img src="https://github.com/shadiabuhilal/wizard-step-indicator-react/raw/main/docs/screenshots/screenshot-wizard-step-indicator-react.gif" width="400" />

Default Style:

<img src="https://github.com/shadiabuhilal/wizard-step-indicator-react/raw/main/docs/screenshots/screenshot-wizard-step-indicator-react-1.png" width="300" />

Custom Style:

<img src="https://github.com/shadiabuhilal/wizard-step-indicator-react/raw/main/docs/screenshots/screenshot-wizard-step-indicator-react-2.png" width="300" />

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
