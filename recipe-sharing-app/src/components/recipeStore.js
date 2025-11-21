import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],

  // === Task 2 additions ===
  searchTerm: "",
  filteredRecipes: [],

  setSearchTerm: (term) =>
    set((state) => {
      const lower = term.toLowerCase();
      return {
        searchTerm: term,
        filteredRecipes: state.recipes.filter((r) =>
          r.title.toLowerCase().includes(lower)
        ),
      };
    }),

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // === existing actions ===

  addRecipe: (newRecipe) =>
    set((state) => {
      const updated = [...state.recipes, newRecipe];
      return {
        recipes: updated,
        filteredRecipes: updated.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  updateRecipe: (id, updatedData) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedData } : r
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),
  // === Task 3: Favorites & Recommendations ===

favorites: [],

addFavorite: (recipeId) =>
  set((state) => {
    if (state.favorites.includes(recipeId)) return state; // no duplicates
    return { favorites: [...state.favorites, recipeId] };
  }),

removeFavorite: (recipeId) =>
  set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId),
  })),

recommendations: [],

// simple mock recommendation generator
generateRecommendations: () =>
  set((state) => {
    const recommended = state.recipes.filter(
      (recipe) =>
        state.favorites.includes(recipe.id) && Math.random() > 0.3
    );
    return { recommendations: recommended };
  }),

}));

