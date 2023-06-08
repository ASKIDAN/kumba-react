import React from 'react';
import {Steps as StepsAntd} from 'antd';
import {StepStateType} from 'common/types';
import StepUser from './StepUser/StepUser';
import StepDate from './StepDate/StepDate';
import styles from './Steps.module.css'

interface StepsProps {
  step: StepStateType['step'];
  setStep: (step: number) => void;
}

const items = [
  {
    title: 'User Data',
    content: <StepUser />
  },
  {
    title: 'Date Picker',
    content: <StepDate />
  },
  {
    title: 'Success',
    content: 'Success',
    disabled: true
  }
]


const Steps:React.FC<StepsProps> = ({ step, setStep }) => {
  return <div className={styles.container}>
    <StepsAntd items={items} current={step} onChange={setStep}/>
    <div className={styles.step}>
      {items[step].content}
    </div>
  </div>
}

export default Steps;
