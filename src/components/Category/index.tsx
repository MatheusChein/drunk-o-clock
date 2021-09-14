import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

import { api } from "../../services/axios"

import { CategoryProps, DrinkType } from "./types"

import { CategoryContainer, DrinksContainer } from "./styles"

export function Category({ name }: CategoryProps) {
  const [drinks, setDrinks] = useState<DrinkType[]>([])

  useEffect(() => {
    async function getData() {
      const response = await api.get(`/filter.php?c=${name}`);

      const { data } = response

      setDrinks(data.drinks)
    }

    getData()
  }, [name])

  return (
    <CategoryContainer>
      <h3>{name}</h3>
      <DrinksContainer>
        {drinks.map(drink => (
          <div key={drink.idDrink}>
            <Link to="/">
              <img src={drink.strDrinkThumb} alt="#" />
              <span>{drink.strDrink}</span>
            </Link>
          </div>
        ))}
      </DrinksContainer>
    </CategoryContainer>
  )
}