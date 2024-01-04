import React from 'react';
import WizardStepIndicator from '../src/index.tsx';
import {fireEvent, render, screen} from '@testing-library/react';

describe('WizardStepIndicator', () => {
    it('WizardStepIndicator with default props start with index 0, should NOT go to step index 1 after onClick', () => {
        expect.assertions(4);

        const mockedOnClick = jest.fn();

        const { asFragment } = render(<WizardStepIndicator 
            currentStepIndex={0} 
            stepsCount={5} 
            onClick={mockedOnClick} />);

        const testId = 'wsi-1';
        expect(asFragment()).toMatchSnapshot(`before click on ${testId}`);

        expect(mockedOnClick).toHaveBeenCalledTimes(0);

        fireEvent.click(screen.getByTestId(testId));

        expect(mockedOnClick).toHaveBeenCalledTimes(0);

        expect(asFragment()).toMatchSnapshot(`after click on ${testId}`);
    });

    it('WizardStepIndicator with default props start with index 1, should go to step index 0 after onClick', () => {
        expect.assertions(5);

        const mockedOnClick = jest.fn();

        const { asFragment } = render(<WizardStepIndicator currentStepIndex={1} stepsCount={5} onClick={mockedOnClick} />);

        const testId = 'wsi-0';
        expect(asFragment()).toMatchSnapshot(`before click on ${testId}`);

        expect(mockedOnClick).toHaveBeenCalledTimes(0);

        fireEvent.click(screen.getByTestId('wsi-0'));

        expect(mockedOnClick).toHaveBeenCalledTimes(1);
        expect(mockedOnClick).toHaveBeenNthCalledWith(1, 0);

        expect(asFragment()).toMatchSnapshot(`after click on ${testId}`);
    });

    it('WizardStepIndicator start with index 0, should go to step index 3 after onClick with canClickOnForwardSteps=true', () => {
        expect.assertions(5);

        const mockedOnClick = jest.fn();

        const { asFragment } = render(<WizardStepIndicator 
            currentStepIndex={0} 
            stepsCount={5} 
            canClickOnForwardSteps
            onClick={mockedOnClick} />);

        const testId = 'wsi-0';
        expect(asFragment()).toMatchSnapshot(`before click on ${testId}`);
            
        expect(mockedOnClick).toHaveBeenCalledTimes(0);

        fireEvent.click(screen.getByTestId('wsi-3'));

        expect(mockedOnClick).toHaveBeenCalledTimes(1);
        expect(mockedOnClick).toHaveBeenNthCalledWith(1, 3);

        expect(asFragment()).toMatchSnapshot(`after click on ${testId}`);
    });

    it('WizardStepIndicator when useCheckPassedStep=false, should render numbers without icons', () => {
        expect.assertions(4);

        const mockedOnClick = jest.fn();

        const { asFragment } = render(<WizardStepIndicator 
            currentStepIndex={0} 
            stepsCount={5} 
            useCheckPassedStep={false}
            onClick={mockedOnClick} />);

        const testId = 'wsi-0';
        expect(asFragment()).toMatchSnapshot(`before click on ${testId}`);
            
        expect(mockedOnClick).toHaveBeenCalledTimes(0);

        fireEvent.click(screen.getByTestId('wsi-3'));

        expect(mockedOnClick).toHaveBeenCalledTimes(0);

        expect(asFragment()).toMatchSnapshot(`after click on ${testId}`);
    });

    it('WizardStepIndicator disabled', () => {
        expect.assertions(4);

        const mockedOnClick = jest.fn();

        const { asFragment } = render(<WizardStepIndicator 
            currentStepIndex={0} 
            stepsCount={5} 
            canClickOnForwardSteps
            onClick={mockedOnClick}
            disabled />);

        const testId = 'wsi-0';
        expect(asFragment()).toMatchSnapshot(`before click on ${testId}`);
            
        expect(mockedOnClick).toHaveBeenCalledTimes(0);

        fireEvent.click(screen.getByTestId('wsi-3'));

        expect(mockedOnClick).toHaveBeenCalledTimes(0);

        expect(asFragment()).toMatchSnapshot(`after click on ${testId}`);
    });

    it('WizardStepIndicator all props', () => {
        expect.assertions(5);

        const mockedOnClick = jest.fn();

        const { asFragment } = render(<WizardStepIndicator 
            id="foo-id"
            style={{margin: '10px'}}
            className="foo-classname"
            canClickOnForwardSteps
            stepsCount={4}
            currentStepIndex={1}
            disabled={false}
            useCheckPassedStep
            btnStepClassName="foo-btn-step"
            lineBetweenStepsClassName="foo-line-between-steps"
            activeClassName="foo-active"
            inactiveClassName="foo-inactive"
            checkIconClassName="foo-check-icone"
            onClick={mockedOnClick}
        />);

        const testId = 'wsi-0';
        expect(asFragment()).toMatchSnapshot(`before click on ${testId}`);
            
        expect(mockedOnClick).toHaveBeenCalledTimes(0);

        fireEvent.click(screen.getByTestId('wsi-2'));

        expect(mockedOnClick).toHaveBeenCalledTimes(1);
        expect(mockedOnClick).toHaveBeenNthCalledWith(1, 2);

        expect(asFragment()).toMatchSnapshot(`after click on ${testId}`);
    });
});
