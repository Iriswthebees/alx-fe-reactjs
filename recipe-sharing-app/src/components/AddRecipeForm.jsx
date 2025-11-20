// src/components/AddRecipeForm.jsx
import { useState } from 'react'
import useRecipeStore from './recipeStore'

export default function AddRecipeForm() {
  const addRecipe = useRecipeStore((state) => state.addRecipe)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // Basic validation
    if (!title.trim() || !description.trim()) return

    addRecipe({
      id: Date.now(),
      title,
      description,
    })

    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h2>Add Recipe</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />

      <button type="submit">Add Recipe</button>
    </form>
  )
}
