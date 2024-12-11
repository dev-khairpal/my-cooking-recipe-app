import { useRef, useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
  import {projectFirestore} from "../../firebase/config"
export default function Create() {

  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);


  const history = useHistory()
  const handleSubmit = async(e) => {
    e.preventDefault();
    const doc = ({
      title,
      method,
      ingredients,
      cookingTime: cookingTime + " minutes",
    });

    try{
      await projectFirestore.collection("recipes" ).add(doc);
      history.push('/')
    }catch(err){
      console.error(err);
      
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIng) => [...prevIng, ing]);
    }
    setNewIngredient("");
    ingredientInput.current.focus();
  };

  const { mode } = useTheme();

  // Dynamic class for input fields
  const inputClass =
    mode === "dark"
      ? "p-2 bg-neutral-600 text-white border rounded-md focus:outline-none focus:ring-orange-400 focus:ring-1"
      : "p-2 bg-white text-black border rounded-md focus:outline-none focus:ring-orange-400 focus:ring-1";

  return (
    <div
      className={`min-h-[89vh] flex justify-center ${
        mode === "dark" ? "text-white bg-neutral-900" : "text-black bg-white"
      }`}
    >
      <div
        className={`m-4 w-full ${
          mode === "light" ? "bg-slate-200" : "bg-neutral-900"
        } max-w-lg rounded-md p-8`}
      >
        <h2 className="text-2xl font-bold text-center mb-8">
          Add a new Recipe
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <label className="flex flex-col">
            <span className="font-semibold mb-2">Recipe Title :</span>
            <input
              className={inputClass}
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="Enter the Title of your Recipe..."
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="font-semibold mb-2">Recipe Method :</span>
            <textarea
              className={inputClass}
              onChange={(e) => setMethod(e.target.value)}
              placeholder="Give the method to prepare your Recipe..."
              required
            />
          </label>
          <label>
            <span>Ingredients</span>
            <div>
              <input
                type="text"
                onChange={(e) => setNewIngredient(e.target.value)}
                value={newIngredient}
                ref={ingredientInput}
                placeholder="Ingredients..."
                className={`w-[80%] ${inputClass}`}
              />
              <button
                onClick={handleAdd}
                className="p-2 bg-orange-500 rounded-md w-[20%]"
              >
                Add
              </button>
            </div>
          </label>
          <p>
            {ingredients.map((i) => (
              <em className="bg-orange-300 rounded-sm m-1" key={i}>
                {i},{" "}
              </em>
            ))}
          </p>
          <label className="flex flex-col">
            <span className="font-semibold mb-2">Cooking Time (Minutes) :</span>
            <input
              className={inputClass}
              type="number"
              onChange={(e) => setCookingTime(e.target.value)}
              value={cookingTime}
              placeholder="Time it takes..."
              required
            />
          </label>
          <button className="rounded-md p-2 font-semibold w-full bg-orange-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
