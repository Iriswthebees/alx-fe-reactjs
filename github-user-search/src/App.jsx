import "./App.css";
import Search from "./components/Search";

export default function App() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mt-10 mb-6">
        GitHub User Search
      </h1>

      <Search />
    </div>
  );
}
