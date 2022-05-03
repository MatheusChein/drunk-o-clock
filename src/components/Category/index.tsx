import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useDrink } from '../../hooks/useDrink';
import { useCategory } from '../../hooks/useCategory';

import { CategoryProps, CategoryDrinkType } from './types.d';

import { CategoryContainer, DrinksContainer, DrinkContainer } from './styles';
import { LoadingCircle } from '../LoadingCircle';

export function Category({ name }: CategoryProps) {
  const { selectDrink } = useDrink();
  const { getDrinksByCategory } = useCategory();
  const history = useHistory();

  const [drinks, setDrinks] = useState<CategoryDrinkType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getDrinksByCategory(name).then(response => {
      setDrinks(response);
      setIsLoading(false);
    });
  }, [name]);

  async function handleClick(drinkId: string) {
    await selectDrink(drinkId);

    history.push(`/drinks/${drinkId}`);
  }

  return (
    <CategoryContainer>
      <h3>{name}</h3>
      <DrinksContainer>
        {drinks.map(drink => (
          <DrinkContainer key={drink.idDrink}>
            <div onClick={() => handleClick(drink.idDrink)}>
              {isLoading ? (
                <LoadingCircle />
              ) : (
                <img src={drink.strDrinkThumb} alt="#" />
              )}
              <span>{drink.strDrink}</span>
            </div>
          </DrinkContainer>
        ))}
      </DrinksContainer>
    </CategoryContainer>
  );
}
