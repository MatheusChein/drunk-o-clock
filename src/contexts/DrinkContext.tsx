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
  getRandomDrink: () => Promise<any>
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

  function saveDrinkResponseToDrinkState(drink: any) {
    let ingredientsWithMeasures = []

    for (let i = 1; i <= 15; i++) {
      if (drink[`strIngredient${i}`] === null || drink[`strIngredient${i}`] === '') {
        break
      }
      ingredientsWithMeasures.push({
        ingredient: drink[`strIngredient${i}`],
        measure: drink[`strMeasure${i}`]
      })
    }

    const currentDrink = {
      ...drink,
      ingredientsWithMeasures
    }

    localStorage.setItem('@Drunk-o-clock: drink', JSON.stringify(currentDrink))

    setDrink(currentDrink)

    return currentDrink
  }

  async function selectDrink(drinkName: string) {
    const formattedDrinkName = drinkName.replaceAll('/', '%2F')

    const response = await api.get(`/search.php?s=${formattedDrinkName}`)

    const drinkData = response.data.drinks[0]

    saveDrinkResponseToDrinkState(drinkData)
  }

  async function getRandomDrink() {
    const response = await api.get(`/random.php`)

    const drinkData = response.data.drinks[0]

    const randomDrink = saveDrinkResponseToDrinkState(drinkData)

    return randomDrink
  }

  return (
    <DrinkContext.Provider value={{ drink, selectDrink, getRandomDrink }}>
      {children}
    </DrinkContext.Provider>
  )
}