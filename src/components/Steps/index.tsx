import React, {useCallback, useContext, useMemo} from 'react';
import {StepStateType} from 'common/types';
import StepContext, {StepContextProvider} from './Context';
import Steps from './Steps';

const Container = () => {
  const { state: { step }, setStepData } = useContext(StepContext)
  const setStep = useCallback((step:StepStateType['step']) => setStepData({ step }), [setStepData]);
  return useMemo(() => <Steps step={step} setStep={setStep} />, [step, setStep]);
};

const Provider = () => <StepContextProvider>
  <Container />
</StepContextProvider>;

export default Provider;
