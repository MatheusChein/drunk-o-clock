import { createContext, ReactNode, useState } from "react";
import { api } from "../services/axios";

interface Drink {
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
  strIngredients: {
    [key: string]: string
  }[];
  strMeasures: {
    [key: string]: string
  }[];
}

interface DrinkContextType {
  drink: Drink;
  selectDrink: (drinkName: string) => Promise<void>
}

export const DrinkContext = createContext({} as DrinkContextType)

interface DrinkContextProviderProps {
  children: ReactNode
}

export function DrinkContextProvider({ children }: DrinkContextProviderProps) {
  const [drink, setDrink] = useState<Drink>(() => {
    const storageDrink = localStorage.getItem('@Drunk-o-clock: drink');

    if (storageDrink) {
      return JSON.parse(storageDrink)
    }

    return {} as Drink
  })

  async function selectDrink(drinkName: string) {
    const response = await api.get(`/search.php?s=${drinkName}`)
    setDrink(response.data.drinks[0])
  }

  console.log(drink)

  return (
    <DrinkContext.Provider value={{ drink, selectDrink }}>
      {children}
    </DrinkContext.Provider>
  )
}