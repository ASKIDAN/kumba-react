import React, {createContext, useCallback, useState} from 'react';
import {StepStateType} from 'types';

interface StepContextProps {
  state: StepStateType;
  setStepData: (data: Partial<StepStateType>) =>void;
}

const initialState:StepStateType = {
  email: undefined,
  firstName: undefined,
  lastName: undefined,
  date: undefined,
  step: 0
}
const initialContext:StepContextProps = {
  state: initialState,
  setStepData: () => {},
}

const StepContext = createContext<StepContextProps>(initialContext);

interface StepContextProviderProps {
  children: React.ReactNode;
}
export const StepContextProvider: React.FC<StepContextProviderProps> = ({ children }) => {
  const [state, setState] = useState<StepStateType>(initialState);
  const setStepData = useCallback((data:Partial<StepStateType>) => setState(prevState => ({ ...prevState, ...data})), [])
  return <StepContext.Provider value={{state, setStepData}}>{children}</StepContext.Provider>
}

export default StepContext;
