import { api } from '../services/axios';

export function useIngredient() {
  async function getDrinksByIngredient(ingredientName: string) {
    const response = await api.get(`/filter.php?i=${ingredientName}`);

    const { data } = response;

    return data.drinks;
  }

  return {
    getDrinksByIngredient,
  };
}
