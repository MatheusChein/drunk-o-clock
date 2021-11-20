import { Ingredient } from "../../pages/Home/types";
import { CategoryType } from "../Categories/types";

export interface SearchDrinkByFilterProps {
  categories?: CategoryType[];
  ingredients?: Ingredient[];
  filterTitle: 'category' | 'ingredient'
}