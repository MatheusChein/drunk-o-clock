import { useEffect, useState, FocusEvent, ChangeEvent } from "react"
import { api } from "../../services/axios";
import { CategoryDrinkType } from "../Category/types";
import { DrinkInputContainer, DrinksContainer } from "./styles";
import { DrinkInputProps } from "./types";


export function DrinkInput({ drinks, setIsButtonVisible, currentDrink, setCurrentDrink, setCurrentDrinkId }: DrinkInputProps) {

  const [isDrinkSelectorVisible, setIsDrinkSelectorVisible] = useState(false)
  const [filteredDrinks, setFilteredDrinks] = useState<CategoryDrinkType[]>([])

  async function handleDrinkChange(event: ChangeEvent<HTMLInputElement>) {
    setIsDrinkSelectorVisible(true)
    setIsButtonVisible(false)
    
    const typedDrink = event.target.value
    setCurrentDrink(typedDrink)

    if (typedDrink === '' && drinks) {
      setFilteredDrinks(drinks)
      return
    } else {
      const { data } =  await api.get(`/search.php?s=${typedDrink}`)
      setFilteredDrinks(data.drinks)
    }
    
    const filteredDrinksTyped = drinks

    if (filteredDrinksTyped) {
      const matchedDrinks = filteredDrinksTyped.filter(drink => {
        return drink.strDrink.toLowerCase().includes(typedDrink.toLowerCase())
      })
      setFilteredDrinks(matchedDrinks)
    }

  }

  function handleDrinkClick(drinkClicked: CategoryDrinkType) {
    setIsDrinkSelectorVisible(false)
    setCurrentDrink(drinkClicked.strDrink)
    setCurrentDrinkId && setCurrentDrinkId(drinkClicked.idDrink)

    if (drinks) {
      const drinkClickedExists = drinks.find(drink => drink.strDrink === drinkClicked.strDrink)
    
      if (drinkClickedExists) {
        setFilteredDrinks([drinkClickedExists])
      }
    }
    
    setIsButtonVisible(true)
  }

  function handleBlur(event: FocusEvent) {

    if (event.relatedTarget === null) {
      setIsDrinkSelectorVisible(false)
    }
  }

  function handleFocus() {
    if (currentDrink === '' || !currentDrink) { 
      drinks && setFilteredDrinks(drinks)
      setIsDrinkSelectorVisible(true)
    }
  }

  function handleEsc(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      setIsDrinkSelectorVisible(false)
    } 
  }

  useEffect(() => {
    window.addEventListener('keydown', handleEsc)

    return () => {
      window.removeEventListener('keydown', handleEsc)
    }

  }, [])

  
  return (
    <label>
      Search your drink: 
      <DrinkInputContainer >
        <input
          placeholder='Type drink name! Example: Caipirinha'
          value={currentDrink}
          onChange={(event) => handleDrinkChange(event)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <DrinksContainer visible={isDrinkSelectorVisible}>
          {isDrinkSelectorVisible && filteredDrinks?.map(drink => (
            <div key={drink.idDrink} tabIndex={-1} onClick={() => handleDrinkClick(drink)}>
              <img src={drink.strDrinkThumb} alt={drink.strDrink} />
              <span>{drink.strDrink}</span>
            </div>
          ))}
        </DrinksContainer>
      </DrinkInputContainer>
    </label>
  )
}