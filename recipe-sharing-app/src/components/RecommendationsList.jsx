// src/components/RecommendationsList.jsx
import { useRecipeStore } from "./recipeStore";

export default function RecommendationsList() {
  const recommendations = useRecipeStore((s) => s.recommendations);
  const generateRecommendations = useRecipeStore(
    (s) => s.generateRecommendations
  );

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Recommended For You</h2>

      <button
        onClick={generateRecommendations}
        style={{
          backgroundColor: "purple",
          color: "white",
          border: "none",
          padding: "6px 12px",
          borderRadius: "4px",
          cursor: "pointer",
          marginBottom: "10px",
        }}
      >
        Refresh Recommendations
      </button>

      {!recommendations.length && <p>No recommendations yet.</p>}

      {recommendations.map((recipe) => (
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
