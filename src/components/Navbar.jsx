import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const { mode } = useTheme();


  return (
    <div>
      <nav   
        className={`flex justify-between px-16 py-4 ${mode==="dark" ? "text-white" : "text-black"}`}
      >
        <Link to="/">
          <h1 className="text-2xl font-semibold">My Recipes</h1>
        </Link>
        <div className="flex gap-4 ">
          <Link
            to="/create"
            className="border border-white px-2 rounded-md hover:bg-slate-800 transition-all"
          >
            Create Recipe
          </Link>
        </div>
      </nav>
    </div>
  );
}
