import { ChangeEvent, useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { SearchDrinkByFilterProps } from './types.d';

import { useCategory } from '../../hooks/useCategory';
import { CategoryDrinkType } from '../Category/types.d';

import {
  SearchDrinkByFilterContainer,
  SearchDrinkByFilterForm,
} from './styles';
import { useDrink } from '../../hooks/useDrink';
import { Button } from '../Button';
import { useIngredient } from '../../hooks/useIngredient';
import { DrinkInput } from '../DrinkInput';

export function SearchDrinkByFilter({
  categories = [],
  ingredients = [],
  filterTitle,
}: SearchDrinkByFilterProps) {
  const history = useHistory();

  const { getDrinksByCategory } = useCategory();
  const { getDrinksByIngredient } = useIngredient();

  const { selectDrink } = useDrink();

  const [chosenFilter, setChosenFilter] = useState('');
  const [drinks, setDrinks] = useState<CategoryDrinkType[]>([]);
  const [currentDrink, setCurrentDrink] = useState('');
  const [isDrinkSelectorVisible, setIsDrinkSelectorVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  function handleCategoryChange(event: ChangeEvent<HTMLSelectElement>) {
    setChosenFilter(event.target.value);
    setCurrentDrink('');
    setIsButtonVisible(false);
    setIsDrinkSelectorVisible(false);

    if (filterTitle === 'category') {
      getDrinksByCategory(event.target.value).then(response => {
        setDrinks(response);
      });
    } else {
      getDrinksByIngredient(event.target.value).then(response => {
        setDrinks(response);
      });
    }
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const validDrink = drinks.find(drink => drink.strDrink === currentDrink);

    if (validDrink) {
      await selectDrink(validDrink.idDrink);
      history.push(`/drinks/${validDrink.idDrink}`);
    }
  }

  return (
    <SearchDrinkByFilterContainer>
      <h2>Search Drink By {filterTitle}</h2>
      <SearchDrinkByFilterForm onSubmit={handleSubmit}>
        <label>
          Choose a drink {filterTitle}:
          <select
            value={chosenFilter}
            onChange={event => handleCategoryChange(event)}
          >
            <option value="">Select an option</option>
            {filterTitle === 'category'
              ? categories.map(category => (
                  <option
                    key={category.strCategory}
                    value={category.strCategory}
                  >
                    {category.strCategory}
                  </option>
                ))
              : ingredients.map(ingredient => (
                  <option
                    key={ingredient.strIngredient1}
                    value={ingredient.strIngredient1}
                  >
                    {ingredient.strIngredient1}
                  </option>
                ))}
          </select>
        </label>
        {chosenFilter && (
          <DrinkInput
            drinks={drinks}
            setIsButtonVisible={setIsButtonVisible}
            currentDrink={currentDrink}
            setCurrentDrink={setCurrentDrink}
          />
        )}
        {isButtonVisible && (
          <Button type="submit">See drink instructions!</Button>
        )}
      </SearchDrinkByFilterForm>
    </SearchDrinkByFilterContainer>
  );
}
