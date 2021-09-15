import { useEffect, useState } from 'react';

import { Categories } from '../../components/Categories';

import { CategoryType } from "../../components/Categories/types"
import { SearchDrink } from '../../components/SearchDrink';
import { api } from '../../services/axios';

import { HomePage } from './styles';

export function Home() {
  const [categories, setCategories] = useState<CategoryType[]>([])

  useEffect(() => {
    async function getData() {
      const response = await api.get('/list.php?c=list')

      const drinks: CategoryType[] = response.data.drinks

      setCategories(drinks)
    }

    getData()

  }, [])
  return (
    <HomePage>
      <div>
      
      <SearchDrink categories={categories}/>
      </div>
      <Categories categories={categories}/>
    </HomePage>
  )
}