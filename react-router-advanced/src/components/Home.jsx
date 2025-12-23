import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <nav>
        <ul>
          <li>
            <Link to="/profile">Go to Profile (Protected)</Link>
          </li>
          <li>
            <Link to="/blog/1">Blog Post 1</Link>
          </li>
          <li>
            <Link to="/blog/42">Blog Post 42</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
