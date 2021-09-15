import { useDrink } from "../../hooks/useDrink"

import { DrinkContainer, DrinkContent, DrinkIngredients, DrinkInstructions } from "./styles"


export function Drink() {
  const { drink } = useDrink()

  return (
    <DrinkContainer>
        <h2>{drink.strDrink}</h2>
        <DrinkContent>
          <img src={drink.strDrinkThumb} alt="drink" />
          <DrinkIngredients>
            <h3>Ingredients</h3>
            {drink.ingredientsWithMeasures.map(({ ingredient, measure }) => {
              return (
                <ul key={ingredient}>
                  <li>{measure && <span>{measure} </span>}<span>{ingredient}</span></li>
                </ul>
            )})}
          </DrinkIngredients>
          {drink.strInstructions && (
            <DrinkInstructions>
              <h3>Instructions</h3>
              <p>{drink.strInstructions}</p>
            </DrinkInstructions>
          )}
        </DrinkContent>
    </DrinkContainer>
  )
}