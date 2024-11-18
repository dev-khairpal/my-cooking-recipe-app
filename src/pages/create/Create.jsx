import { useState } from "react"

export default function Create() {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('');
  return (
    <div>
      <h2>Add a new Recipe</h2>
      <form>
        <label className="flex gap-4">
          <span>Recipe Title :</span>
          <input
          className="border rounded-md "
           type="text"
          onChange={(e)=> setTitle(e.target.value)}
          value={title}
          required
           />
        </label>
        <label className="flex gap-4">
          <span>Recipe Method :</span>
          <textarea
          onChange={(e)=>setMethod(e.target.value)}
          required
           />
        </label>
        <label className="flex gap-4">
          <span>Cooking Time (Minutes) :</span>
          <input
          className="border rounded-md "
           type="number"
          onChange={(e)=> setCookingTime(e.target.value)}
          value={cookingTime}
          required
           />
        </label>
      </form>
    </div>
  )
}
