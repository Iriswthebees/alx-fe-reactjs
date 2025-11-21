// src/components/RecipeDetails.jsx
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'
import DeleteRecipeButton from './DeleteRecipeButton'

export default function RecipeDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const recipe = useRecipeStore((s) => s.recipes.find((r) => String(r.id) === String(id)))

  if (!recipe) {
    return (
      <div>
        <h2>Recipe not found</h2>
        <p>The recipe you are looking for does not exist.</p>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    )
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>

      {/* Links / Actions */}
      <div style={{ marginTop: '12px', display: 'flex', gap: '8px' }}>
        <Link to={`/recipes/${recipe.id}/edit`}>Edit</Link>
        <DeleteRecipeButton id={recipe.id} onDeleted={() => navigate('/')} />
      </div>
    </div>
  )
}
