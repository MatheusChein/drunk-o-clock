import { FormEvent } from "react";
import { useHistory } from "react-router";
import { useDrink } from "../../hooks/useDrink";
import { Button } from "../Button";
import { RandomDrinkContainer } from "./styles";

export function RandomDrink() {
  const { getRandomDrink } = useDrink()
  const history = useHistory()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    
    const randomDrink = await getRandomDrink()
    history.push(`/drinks/${randomDrink.idDrink}`)
  }

  return (
    <RandomDrinkContainer>
      <h2>Random Drink</h2>

      <form onSubmit={handleSubmit}>
        <Button >
          Click to learn a new drink!
        </Button>
      </form>
    </RandomDrinkContainer>
  )
}