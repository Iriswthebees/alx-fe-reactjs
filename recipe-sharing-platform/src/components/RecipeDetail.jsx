import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(foundRecipe);
      });
  }, [id]);

  if (!recipe) return <p className="text-center mt-10">Loading recipe...</p>;

  return (
    <div className="px-4 py-8 max-w-3xl mx-auto">
      <Link
        to="/"
        className="text-blue-600 underline hover:text-blue-800 mb-4 inline-block"
      >
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold mb-6">{recipe.title}</h1>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
      />

      <section className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc ml-6 space-y-1">
          {recipe.ingredients?.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
        <ol className="list-decimal ml-6 space-y-2">
          {recipe.instructions?.map((step, index) => (
            <li key={index} className="text-gray-700 leading-relaxed">
              {step}
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
