import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { projectFirestore } from "../../firebase/config";

export default function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isPending, setPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setPending(true);

    projectFirestore
      .collection("recipes")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setPending(false);
          setRecipe(doc.data());
        } else {
          setPending(false);
          setError("Could not find recipe.");
        }
      });
  }, [id]);

  return (
    <div
      className={`min-h-[89vh] flex justify-center items-center ${
        recipe ? "bg-gray-50 dark:bg-neutral-900" : ""
      }`}
    >
      <div className="max-w-4xl w-full bg-white dark:bg-neutral-800 shadow-md rounded-lg p-6">
        {error && <p className="text-red-600 text-lg font-medium">{error}</p>}
        {isPending && <p className="text-center text-gray-600 dark:text-gray-300">Loading...</p>}
        {recipe && (
          <div>
            {/* Recipe Image */}
            {recipe.image && (
              <img
                className="w-full h-64 object-cover rounded-md mb-6"
                src={recipe.image}
                alt={recipe.title}
              />
            )}
            {/* Recipe Title */}
            <h2 className="text-3xl font-bold text-orange-600 mb-4">
              {recipe.title}
            </h2>
            {/* Cooking Time */}
            <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">
              Takes <span className="text-orange-500">{recipe.cookingTime}</span> to cook
            </p>
            {/* Ingredients */}
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              Ingredients:
            </h3>
            <ul className="flex flex-wrap gap-2 mb-6">
              {recipe.ingredients.map((ing) => (
                <li
                  key={ing}
                  className="bg-orange-200 dark:bg-neutral-700 text-orange-800 dark:text-orange-400 px-4 py-2 rounded-lg text-sm font-medium"
                >
                  {ing}
                </li>
              ))}
            </ul>
            {/* Recipe Method */}
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              Method:
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-7">
              {recipe.method}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
