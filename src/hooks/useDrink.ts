import { useContext } from 'react';
import { DrinkContext } from '../contexts/DrinkContext';

export function useDrink() {
  const context = useContext(DrinkContext);

  return context;
}
