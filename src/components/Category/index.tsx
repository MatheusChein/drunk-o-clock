import { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'

import { useDrink } from "../../hooks/useDrink"
import { useCategory } from "../../hooks/useCategory"

import { CategoryProps, CategoryDrinkType } from "./types"

import { CategoryContainer, DrinksContainer, DrinkContainer } from "./styles"

export function Category({ name }: CategoryProps) {
  const { selectDrink } = useDrink()
  const { getDrinksByCategory } = useCategory()
  const history = useHistory()

  const [drinks, setDrinks] = useState<CategoryDrinkType[]>([])

  useEffect(() => {
    getDrinksByCategory(name).then((response) => {
      setDrinks(response)
    })
  }, [name])

  async function handleClick(drinkId: string) {
    await selectDrink(drinkId)

    history.push(`/drinks/${drinkId}`)
  }

  return (
    <CategoryContainer>
      <h3>{name}</h3>
      <DrinksContainer>
        {drinks.map(drink => (
          <DrinkContainer key={drink.idDrink}>
            <div onClick={() => handleClick(drink.idDrink)}>
              <img src={drink.strDrinkThumb} alt="#" />
              <span>{drink.strDrink}</span>
            </div>
          </DrinkContainer>
        ))}
      </DrinksContainer>
    </CategoryContainer>
  )
}