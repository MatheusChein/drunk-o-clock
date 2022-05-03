import { Fragment } from 'react';
import { Category } from '../Category';
import { CategoriesContainer, CategoriesDrinks } from './styles';
import { CategoriesProps } from './types.d';

export function Categories({ categories }: CategoriesProps) {
  return (
    <CategoriesContainer>
      <h2>Browse Categories</h2>
      <CategoriesDrinks>
        {categories.map(category => (
          <Fragment key={category.strCategory}>
            <Category name={category.strCategory} />
          </Fragment>
        ))}
      </CategoriesDrinks>
    </CategoriesContainer>
  );
}
