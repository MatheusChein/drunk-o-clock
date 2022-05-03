import { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { SearchDrinkContainer, SearchDrinkForm } from './styles';
import { useDrink } from '../../hooks/useDrink';
import { Button } from '../Button';
import { DrinkInput } from '../DrinkInput';

export function SearchDrink() {
  const history = useHistory();

  const { selectDrink } = useDrink();

  const [currentDrink, setCurrentDrink] = useState('');
  const [currentDrinkId, setCurrentDrinkId] = useState('');
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (currentDrinkId) {
      await selectDrink(currentDrinkId);
      history.push(`/drinks/${currentDrinkId}`);
    }
  }

  return (
    <SearchDrinkContainer>
      <h2>Search Any Drink</h2>
      <SearchDrinkForm onSubmit={handleSubmit}>
        <DrinkInput
          setIsButtonVisible={setIsButtonVisible}
          currentDrink={currentDrink}
          setCurrentDrink={setCurrentDrink}
          setCurrentDrinkId={setCurrentDrinkId}
        />
        {isButtonVisible && (
          <Button type="submit">See drink instructions!</Button>
        )}
      </SearchDrinkForm>
    </SearchDrinkContainer>
  );
}
