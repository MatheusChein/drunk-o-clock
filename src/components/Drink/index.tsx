import { useDrink } from "../../hooks/useDrink"

export function Drink() {
  const { drink } = useDrink()

  return (
    <h1>{drink.strDrink}</h1>
  )
}