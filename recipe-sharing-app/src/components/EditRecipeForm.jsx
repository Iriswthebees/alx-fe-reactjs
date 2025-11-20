// src/components/updateRecipe.jsx
import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

export default function EditRecipeForm({ recipe, onClose }) {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    updateRecipe(recipe.id, {
      title: title.trim(),
      description: description.trim(),
    });

    onClose(); // hide form after saving
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        border: "black 1px solid",
        padding: "10px",
        marginBottom: "12px",
        borderRadius: "6px",
      }}
    >
      <h3>Edit Recipe</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "100%", padding: "6px", marginBottom: "6px" }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ width: "100%", padding: "6px", marginBottom: "6px" }}
      />
      <button
        type="submit"
        style={{
          backgroundColor: "green",
          color: "white",
          border: "none",
          padding: "6px 12px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Save
      </button>
    </form>
  );
}
