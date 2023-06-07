import {Dayjs} from "dayjs";

export type UserType = {
  user_id: string;
  email: string;
  age: number;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
  },
  phone_numbers: string[];
}

export type StepStateType = {
  step: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  date?: Dayjs | null | undefined;
}
