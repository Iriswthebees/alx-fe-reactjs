// src/components/RecipeList.jsx
import { useState, useEffect } from "react";
import { useRecipeStore } from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";
import EditRecipeForm from "./EditRecipeForm";
import { Link } from "react-router-dom";

export default function RecipeList() {
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  // favorites access + actions
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  // Correct recipe selection (filtered or all)
  const recipes = useRecipeStore((state) =>
    state.searchTerm.trim()
      ? state.filteredRecipes
      : state.recipes
  );

  const [editingId, setEditingId] = useState(null);

  // Whenever searchTerm changes → run filtering
  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  if (!recipes.length) return <p>No recipes added yet.</p>;

  return (
    <div>
      <h2>Recipe List</h2>

      {recipes.map((recipe) => {
        const isFavorite = favorites.includes(recipe.id);

        return (
          <div
            key={recipe.id}
            style={{
              border: "black 1px solid",
              padding: "10px",
              marginBottom: "12px",
              borderRadius: "6px",
            }}
          >
            {editingId === recipe.id ? (
              <EditRecipeForm
                recipe={recipe}
                onClose={() => setEditingId(null)}
              />
            ) : (
              <div>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>

                <Link
                  to={`/recipe/${recipe.id}`}
                  style={{ color: "blue", textDecoration: "underline" }}
                >
                  View Details
                </Link>

                <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
                  <button
                    onClick={() => setEditingId(recipe.id)}
                    style={{
                      backgroundColor: "blue",
                      color: "white",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>

                  <DeleteRecipeButton recipeId={recipe.id} />

                  {/* ★ Favorite / Unfavorite Button */}
                  <button
                    onClick={() =>
                      isFavorite
                        ? removeFavorite(recipe.id)
                        : addFavorite(recipe.id)
                    }
                    style={{
                      backgroundColor: isFavorite ? "goldenrod" : "gray",
                      color: "white",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    {isFavorite ? "★ Unfavorite" : "☆ Favorite"}
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
