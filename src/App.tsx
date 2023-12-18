import { useEffect, useState } from "react";
import ContentContainer from "./ContentContainer";
import { getTrending } from "./api";

export type Name = {first: string, last: string}

function App() {
  const [name, setName] = useState({
    first: "",
    last: "",
  });
  const [trendingRecipes, setTrendingRecipes] = useState()

  const handleNameUpdate=(field: keyof typeof name, newName: string) => {
    setName((prevState) => {
      prevState[field] = newName
      return prevState
    })
  }

  useEffect(() => {
    const fetchTrending = async () => {
      const trending = await getTrending()
      setTrendingRecipes(trending)
    } 
    fetchTrending()
   }, [])

  return (
      <div className="container">
        <h5>App</h5>
        <ContentContainer handleNameUpdate={handleNameUpdate} name={name} />
        {/* Render a component here that displays the title and userRatingsCount (IF there is an associated rating object on the returned data) of the
        first item coming back from the fetchTrending function in the useEffect */}
      </div>
 
  );
}

export default App;
