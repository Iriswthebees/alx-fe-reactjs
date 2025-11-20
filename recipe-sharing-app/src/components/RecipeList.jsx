// src/components/RecipeList.jsx
import { Link } from 'react-router-dom'
import useRecipeStore from './recipeStore'

export default function RecipeList() {
  const recipes = useRecipeStore((s) => s.recipes)

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length === 0 && <p>No recipes yet.</p>}

      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '12px', borderBottom: '1px solid #eee', paddingBottom: '8px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>

          <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
            <Link to={`/recipes/${recipe.id}`}>View</Link>
            <Link to={`/recipes/${recipe.id}/edit`}>Edit</Link>
          </div>
        </div>
      ))}
    </div>
  )
}
