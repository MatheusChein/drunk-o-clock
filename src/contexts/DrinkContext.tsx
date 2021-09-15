import { createContext, ReactNode, useState } from "react";
import { api } from "../services/axios";

interface Drink {
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
  ingredientsWithMeasures: {
    ingredient: string;
    measure: string
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
    const formattedDrinkName = drinkName.replaceAll('/', '%2F')

    const response = await api.get(`/search.php?s=${formattedDrinkName}`)

    const drinkData = response.data.drinks[0]

    let ingredientsWithMeasures = []

    for (let i = 1; i <= 15; i++) {
      if (drinkData[`strIngredient${i}`] === null || drinkData[`strIngredient${i}`] === '') {
        break
      }
      ingredientsWithMeasures.push({
        ingredient: drinkData[`strIngredient${i}`],
        measure: drinkData[`strMeasure${i}`]
      })
    }

    const currentDrink = {
      ...drinkData,
      ingredientsWithMeasures
    }

    localStorage.setItem('@Drunk-o-clock: drink', JSON.stringify(currentDrink))

    setDrink(currentDrink)
  }

  return (
    <DrinkContext.Provider value={{ drink, selectDrink }}>
      {children}
    </DrinkContext.Provider>
  )
}