// src/components/DeleteRecipeButton.jsx
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';


export default function DeleteRecipeButton({ recipeId }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe)
  const navigate = useNavigate();
  navigate;
  
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
    deleteRecipe(recipeId)
    }
  };

  return (
    <button 
      onClick={handleDelete} style={{ backgroundColor: "red",
        color: "white",
        border: "none",
        padding: "6px 12px",
        borderRadius: "4px",
        cursor: "pointer", }} >
      Delete
    </button>
  )
}
