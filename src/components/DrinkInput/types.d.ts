import { CategoryDrinkType } from '../Category/types.d';

export interface DrinkInputProps {
  drinks?: CategoryDrinkType[];
  setIsButtonVisible: (arg: boolean) => void;
  currentDrink: string;
  setCurrentDrink: (arg: string) => void;
  setCurrentDrinkId?: (arg: string) => void;
}
