// src/components/RecipeList.jsx
import { useState } from "react";
import { useRecipeStore } from "./recipeStore";
import DeleteRecipeButton from "./deleteRecipe";
import EditRecipeForm from "./updateRecipe";

export default function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);
  const [editingId, setEditingId] = useState(null); // track which recipe is being edited

  if (!recipes.length) return <p>No recipes added yet.</p>;

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.map((recipe) => (
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
              <div style={{ display: "flex", gap: "8px" }}>
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
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
