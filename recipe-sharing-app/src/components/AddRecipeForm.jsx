import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

export default function AddRecipeForm() {
  const addRecipe = useRecipeStore((s) => s.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    addRecipe({ id: Date.now(), title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <br></br>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
        <br></br>
      <button type="submit">Add Recipe</button>
    </form>
  );
}
