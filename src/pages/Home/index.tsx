import { useEffect, useState } from 'react';

import { Categories } from '../../components/Categories';

import { CategoryType } from "../../components/Categories/types"
import { RandomDrink } from '../../components/RandomDrink';
import { SearchDrink } from '../../components/SearchDrink';
import { SearchDrinkByFilter } from '../../components/SearchDrinkByFilter';
import { api } from '../../services/axios';

import { HomePage, TopContainer } from './styles';
import { Ingredient } from './types';

export function Home() {
  const [categories, setCategories] = useState<CategoryType[]>([])
  const [ingredients, setIngredients] = useState<Ingredient[]>([])

  useEffect(() => {
    async function getData() {
      const categoriesResponse = await api.get('/list.php?c=list')
      const ingredientsResponse = await api.get('/list.php?i=list')

      const drinks: CategoryType[] = categoriesResponse.data.drinks
      const strIngredients: Ingredient[] = ingredientsResponse.data.drinks

      setCategories(drinks)
      setIngredients(strIngredients)
    }

    getData()

  }, [])
  return (
    <HomePage>
      <TopContainer>
        <div>
          <SearchDrink />
          <RandomDrink />
        </div>

        <div>
          <SearchDrinkByFilter filterTitle='category' categories={categories}/>
          <SearchDrinkByFilter filterTitle='ingredient' ingredients={ingredients}/>
        </div>
      </TopContainer>
      <Categories categories={categories}/>
    </HomePage>
  )
}