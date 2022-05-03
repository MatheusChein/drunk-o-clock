import { api } from '../services/axios';

export function useCategory() {
  async function getDrinksByCategory(categoryName: string) {
    const response = await api.get(`/filter.php?c=${categoryName}`);

    const { data } = response;

    return data.drinks;
  }

  return {
    getDrinksByCategory,
  };
}
