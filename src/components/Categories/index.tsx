import { Fragment, useEffect, useState } from "react"
import { api } from "../../services/axios"
import { Category } from "../Category"
import { CategoriesContainer, CategoriesDrinks } from "./styles"
import { CategoriesType } from "./types"


export function Categories() {
  const [categories, setCategories] = useState<CategoriesType[]>([])

  useEffect(() => {
    async function getData() {
      const response = await api.get('/list.php?c=list')

      const drinks: CategoriesType[] = response.data.drinks

      setCategories(drinks)
    }

    getData()

  }, [])

  return (
    <CategoriesContainer>
      <h2>Categories</h2>
      <CategoriesDrinks>
        {categories.map(category => (
          <Fragment  key={category.strCategory}>
            <Category name={category.strCategory}/>
          </Fragment>
        ))}
      </CategoriesDrinks>
    </CategoriesContainer>
  )
}