import { useEffect, useState } from 'react';
import ContentContainer from './Containers/ContentContainer';
import TrendingContainer from './Containers/TrendingContainer';
import { getTrending, Trending } from './api';

export type Name = { first: string; last: string };

function App() {
  const [trendingRecipes, setTrendingRecipes] = useState<Trending[]>();

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
      <ContentContainer />
      {trendingRecipes ? (
        <TrendingContainer trendingRecipes={trendingRecipes} />
      ) : (
        <h4 className='title'>Loading...</h4>
      )}
    </div>
  );
}

export default App;
