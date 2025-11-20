// src/components/EditRecipeForm.jsx
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useRecipeStore from '../store/useRecipeStore'

export default function EditRecipeForm() {
  const { id } = useParams()
  const navigate = useNavigate()

  const recipe = useRecipeStore((s) => s.recipes.find((r) => String(r.id) === String(id)))
  const updateRecipe = useRecipeStore((s) => s.updateRecipe)

  // local form state
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title)
      setDescription(recipe.description)
    }
  }, [recipe])

  if (!recipe) {
    return (
      <div>
        <h2>Recipe not found</h2>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // simple validation
    if (!title.trim() || !description.trim()) return

    updateRecipe(recipe.id, { title: title.trim(), description: description.trim() })
    // after update, navigate to recipe details
    navigate(`/recipes/${recipe.id}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>

      <div style={{ marginBottom: '8px' }}>
        <label>
          Title
          <br />
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
      </div>

      <div style={{ marginBottom: '8px' }}>
        <label>
          Description
          <br />
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
      </div>

      <div style={{ display: 'flex', gap: '8px' }}>
        <button type="submit">Save</button>
        <button type="button" onClick={() => navigate(-1)}>Cancel</button>
      </div>
    </form>
  )
}
