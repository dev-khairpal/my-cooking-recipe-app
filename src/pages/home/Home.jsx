import { useEffect, useState } from "react";
import RecipeList from "../../components/RecipeList";
import { projectFirestore } from "../../firebase/config";

export default function Home() {
  const [data, setData] = useState(null);
  const [isPending, setPending] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setPending(true);
    const unsub =projectFirestore
      .collection("recipes")
      .onSnapshot((snapshot) => {
        if (snapshot.empty) {
          setError("No Recipes to load");
          setPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setData(results);
          setPending(false);
        }
      },(err)=>{
        setError(err.message);
        setPending(false)
      })

      return ()=> unsub()
  }, []);
  return (
    <div >
      {error && <div>{error}</div>}
      {isPending && <p>Loading....</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
