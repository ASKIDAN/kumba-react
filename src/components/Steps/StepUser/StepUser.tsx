import React, {useCallback, useContext, useEffect, useMemo} from 'react';
import {Button, Input, message} from 'antd';
import {getUser} from 'common/api';
import {StepStateType} from 'common/types';
import StepContext from '../Context';
import styles from './StepUser.module.css';

type Keys = keyof Omit<StepStateType, 'step' | 'date'>;

interface StepUserProps extends Omit<StepStateType, 'step' | 'date'> {
  setUserData: (field: string, key: Keys) => void;
  goNext: () => void;
}

const keys: { [key in Keys ]: Keys } = {
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email'
}

const StepUser:React.FC<StepUserProps> = ({ goNext, setUserData, email, firstName, lastName}) => {

  const onChange = useCallback((e:React.ChangeEvent<HTMLInputElement>) => setUserData(e.target.value, e.target.name as Keys), [setUserData])

  return <div className={styles.container}>
    <Input name={keys.firstName} onChange={onChange} value={firstName} placeholder="First Name" />
    <Input name={keys.lastName} onChange={onChange} value={lastName} placeholder="Last Name" />
    <Input name={keys.email} onChange={onChange} value={email} type="email" placeholder="Email"/>
    <Button onClick={goNext}>Next</Button>
  </div>
};


const Container = () => {
  const { state: { email, lastName, firstName, step }, setStepData } = useContext(StepContext);
  useEffect(() => {
    getUser()
      .then(user => setStepData({
        email: user.email,
        firstName: user.user_id, // I used id & age because response object doesn't contain name & last name
        lastName: String(user.age),
      }))
      .catch(() => message.error('User doesn\'t authorized'));
  }, [setStepData]);
  const setUserData = useCallback((field: string, key: keyof StepStateType) => setStepData({ [key]: field}), [setStepData]);
  const goNext = useCallback(() => setStepData({ step: step + 1}), [step, setStepData]);
  return useMemo(() => <StepUser
    email={email}
    lastName={lastName}
    firstName={firstName}
    setUserData={setUserData}
    goNext={goNext}
  />, [email, lastName, firstName, setUserData, goNext]);
};

export default Container;
