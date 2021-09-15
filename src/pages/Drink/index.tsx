import { useEffect } from "react"
import { Link, useParams, useHistory } from "react-router-dom"
import { Button } from "../../components/Button"
import { useDrink } from "../../hooks/useDrink"

import { DrinkContainer, DrinkContent, DrinkIngredients, DrinkInstructions } from "./styles"

interface Params {
  drinkName: string
}

export function Drink() {
  const { drink } = useDrink()
  const params: Params = useParams()
  const history = useHistory()

  useEffect(() => {

    if (params.drinkName !== drink.strDrink) {
      history.push('/404')
    }
  }, [params, drink])

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

        <Link to='/'>
          <Button>
            Go back
          </Button>
        </Link>
    </DrinkContainer>
  )
}