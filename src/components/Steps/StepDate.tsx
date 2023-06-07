import React, {useCallback, useContext, useMemo} from "react";
import {Button, DatePicker, message} from 'antd'
import {postDate} from 'api';
import {StepStateType} from 'types';
import StepContext from './Context';
import styles from './StepDate.module.css'

interface StepDateProps {
  date: StepStateType['date'];
  setDate: (date: StepStateType['date']) => void;
  submit: () => void;
}
const StepDate: React.FC<StepDateProps> = ({ date, setDate, submit }) => {
  return <div className={styles.container}>
    <DatePicker showTime onChange={setDate} value={date}/>
    <Button onClick={submit} type="primary" disabled={!date}>Submit</Button>
  </div>
};

const Container = () => {
  const { state: { date, step }, setStepData } = useContext(StepContext);
  const setDate = useCallback((date: StepStateType['date']) => setStepData({ date }), [setStepData]);
  const submit = useCallback(() => postDate({ date })
      .then(() => setStepData({ step: step + 1}))
      .catch(() => message.error('Submit was failed') ), [date, step, setStepData]);
  return useMemo(() => <StepDate setDate={setDate} date={date} submit={submit}/>, [setDate, date, submit]);
};

export default Container;
