// src/components/FavoritesList.jsx
import { useRecipeStore } from "./recipeStore";

export default function FavoritesList() {
  // Read store slices separately (SAFE)
  const favoriteIds = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);

  // Derive data OUTSIDE the store (SAFE)
  const favorites = favoriteIds
    .map((id) => recipes.find((r) => r.id === id))
    .filter(Boolean);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>My Favorites</h2>

      {!favorites.length && <p>No favorites yet.</p>}

      {favorites.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: "black 1px solid",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "6px",
          }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
}
