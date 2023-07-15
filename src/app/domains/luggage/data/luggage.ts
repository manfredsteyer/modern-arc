export interface Luggage {
  id: number;
  weight: number;
  checkedIn: boolean;
  remarks: string;
}

export const initialLuggage: Luggage = {
  id: 0,
  weight: 0,
  checkedIn: false,
  remarks: '',
};
