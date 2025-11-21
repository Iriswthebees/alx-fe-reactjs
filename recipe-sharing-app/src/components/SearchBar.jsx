import { useRecipeStore } from "./recipeStore";

export default function SearchBar() {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(event) => setSearchTerm(event.target.value)}
      style={{
        width: "100%",
        padding: "8px",
        margin: "12px 0",
        borderRadius: "6px",
        border: "1px solid gray",
      }}
    />
  );
}
