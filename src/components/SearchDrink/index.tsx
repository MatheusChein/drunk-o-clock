import { ChangeEvent, useState, FormEvent, FocusEvent } from "react";
import { useHistory } from "react-router";

import { SearchDrinkProps } from "./types";

import { useCategory } from "../../hooks/useCategory";
import { CategoryDrinkType } from "../Category/types";

import { SearchDrinkContainer, SearchDrinkForm, DrinkInputContainer, DrinksContainer } from "./styles";
import { useDrink } from "../../hooks/useDrink";
import { Button } from "../Button";

export function SearchDrink({ categories }: SearchDrinkProps) {
  const history = useHistory()

  const { getDrinksByCategory } = useCategory()
  const { selectDrink } = useDrink()

  const [category, setCategory] = useState('')
  const [drinks, setDrinks] = useState<CategoryDrinkType[]>([])
  const [filteredDrinks, setFilteredDrinks] = useState<CategoryDrinkType[]>([])
  const [currentDrink, setCurrentDrink] = useState('')
  const [isDrinkSelectorVisible, setIsDrinkSelectorVisible] = useState(false)
  const [isButtonVisible, setIsButtonVisible] = useState(false)

  function handleCategoryChange(event: ChangeEvent<HTMLSelectElement>) {
    setCategory(event.target.value)
    setCurrentDrink('')
    setIsButtonVisible(false)
    setIsDrinkSelectorVisible(false)

    getDrinksByCategory(event.target.value).then(response => {
      setDrinks(response)
    })
  }


  function handleDrinkChange(event: ChangeEvent<HTMLInputElement>) {
    setIsDrinkSelectorVisible(true)
    setIsButtonVisible(false)
    
    const typedDrink = event.target.value
    setCurrentDrink(typedDrink)

    if (typedDrink === '') {
      setFilteredDrinks(drinks)
      return
    }
    
    const filteredDrinksTyped = drinks

    const matchedDrinks = filteredDrinksTyped.filter(drink => {
      return drink.strDrink.toLowerCase().includes(typedDrink.toLowerCase())
    })

    setFilteredDrinks(matchedDrinks)

  }

  function handleDrinkClick(drinkName: string) {
    setIsDrinkSelectorVisible(false)
    setCurrentDrink(drinkName)
    
    const drinkClicked = drinks.find(drink => drink.strDrink === drinkName)
    
    if (drinkClicked) {
      setFilteredDrinks([drinkClicked])
      setIsButtonVisible(true)
    }

  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    
    const validDrink = drinks.find(drink => drink.strDrink === currentDrink)
    
    if (validDrink) {
      await selectDrink(currentDrink)
      history.push(`/drinks/${currentDrink}`)
    }
  }

  function handleBlur(event: FocusEvent) {

    if (event.relatedTarget === null) {
      setIsDrinkSelectorVisible(false)
    }
  }

  return (
    <SearchDrinkContainer>
      <h2>Search Drink</h2>
      <SearchDrinkForm onSubmit={handleSubmit}>
        <label>
          Choose a drink category: 
          <select value={category} onChange={(event) => handleCategoryChange(event)}>
            <option value=''>Select an option</option>
            {categories.map(category => (
              <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
            ))}
          </select>
        </label>
        {category && (
          <label>
            Choose your drink: 
            <DrinkInputContainer >
              <input
                placeholder='Type the drink name! Example: Caipirinha'
                value={currentDrink}
                onChange={(event) => handleDrinkChange(event)}
                onFocus={() => {if (currentDrink === '' || !currentDrink) { setFilteredDrinks(drinks); setIsDrinkSelectorVisible(true) }}}
                onBlur={handleBlur}
              />
              <DrinksContainer visible={isDrinkSelectorVisible}>
                {isDrinkSelectorVisible && filteredDrinks.map(drink => (
                  <div key={drink.idDrink} tabIndex={-1} onClick={() => handleDrinkClick(drink.strDrink)}>
                    <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                    <span>{drink.strDrink}</span>
                  </div>
                ))}
              </DrinksContainer>
            </DrinkInputContainer>
          </label>
        )}
        {isButtonVisible && (
          <Button type='submit'>
            See drink instructions!
          </Button>
        )}
      </SearchDrinkForm>
    </SearchDrinkContainer>
  )
}