import React from 'react';
import WizardStepIndicator from '../src/index.tsx';
import {fireEvent, render, screen} from '@testing-library/react';

describe('WizardStepIndicator', () => {
    it('WizardStepIndicator with default props', () => {
        const mockedOnClick = jest.fn();

        const { asFragment } = render(<WizardStepIndicator currentStepIndex={0} stepsCount={5} onClick={mockedOnClick} />);

        // expect(asFragment()).toMatchSnapshot();

        expect(mockedOnClick).toHaveBeenCalledTimes(0);

        fireEvent.click(screen.getByTestId('wsi-1'));

        expect(mockedOnClick).toHaveBeenCalledTimes(1);
    });
});