import { Ingredient } from '../../pages/Home/types.d';
import { CategoryType } from '../Categories/types.d';

export interface SearchDrinkByFilterProps {
  categories?: CategoryType[];
  ingredients?: Ingredient[];
  filterTitle: 'category' | 'ingredient';
}
