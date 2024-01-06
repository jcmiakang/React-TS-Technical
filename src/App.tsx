import { useEffect, useState } from 'react';
import ContentContainer from './Containers/ContentContainer';
import TrendingSingle from './Components/TrendingSingle';
import TrendingList from './Components/TrendingList';
import { getTrending, Trending } from './api';

export type Name = { first: string; last: string };

function App() {
  const [name, setName] = useState<Name>({
    first: '',
    last: '',
  });

  const [trendingRecipes, setTrendingRecipes] = useState<Trending[]>();

  const handleNameUpdate = (field: string, newName: string) => {
    setName({
      ...name,
      [field]: newName,
    });
  };

  useEffect(() => {
    const fetchTrending = async () => {
      const trending = await getTrending();
      if (!!trending && trending.length) {
        setTrendingRecipes(trending);
      }
    };
    fetchTrending();
  }, []);

  return (
    <div className='container'>
      <h5>App</h5>
      <ContentContainer handleNameUpdate={handleNameUpdate} name={name} />
      {trendingRecipes ? (
        // Uncomment the component below to view a list of trening recipes
        // <TrendingSingle trendingRecipes={trendingRecipes} />
        <TrendingList trendingRecipes={trendingRecipes} />
      ) : (
        // Loading state component would go here (ie. loading spinner)
        <>Loading...</>
      )}
    </div>
  );
}

export default App;
