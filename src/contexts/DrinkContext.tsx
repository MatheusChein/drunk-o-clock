import { createContext, ReactNode, useMemo, useState } from 'react';
import { api } from '../services/axios';

interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
  ingredientsWithMeasures: {
    ingredient: string;
    measure: string;
  }[];
}

interface DrinkContextType {
  drink: Drink;
  selectDrink: (drinkId: string) => Promise<void>;
  getRandomDrink: () => Promise<any>;
}

export const DrinkContext = createContext({} as DrinkContextType);

interface DrinkContextProviderProps {
  children: ReactNode;
}

export function DrinkContextProvider({ children }: DrinkContextProviderProps) {
  const [drink, setDrink] = useState<Drink>(() => {
    const storageDrink = localStorage.getItem('@Drunk-o-clock: drink');

    if (storageDrink) {
      return JSON.parse(storageDrink);
    }

    return {} as Drink;
  });

  function saveDrinkResponseToDrinkState(drinkResponse: any) {
    const ingredientsWithMeasures = [];

    for (let i = 1; i <= 15; i++) {
      if (
        drinkResponse[`strIngredient${i}`] === null ||
        drinkResponse[`strIngredient${i}`] === ''
      ) {
        break;
      }
      ingredientsWithMeasures.push({
        ingredient: drinkResponse[`strIngredient${i}`],
        measure: drinkResponse[`strMeasure${i}`],
      });
    }

    const currentDrink = {
      ...drinkResponse,
      ingredientsWithMeasures,
    };

    localStorage.setItem('@Drunk-o-clock: drink', JSON.stringify(currentDrink));

    setDrink(currentDrink);

    return currentDrink;
  }

  async function selectDrink(drinkId: string) {
    const response = await api.get(`/lookup.php?i=${drinkId}`);

    const drinkData = response.data.drinks[0];

    saveDrinkResponseToDrinkState(drinkData);
  }

  async function getRandomDrink() {
    const response = await api.get(`/random.php`);

    const drinkData = response.data.drinks[0];

    const randomDrink = saveDrinkResponseToDrinkState(drinkData);

    return randomDrink;
  }

  const contextValue = useMemo(
    () => ({
      drink,
      selectDrink,
      getRandomDrink,
    }),
    [drink],
  );

  return (
    <DrinkContext.Provider value={contextValue}>
      {children}
    </DrinkContext.Provider>
  );
}
