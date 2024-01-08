import { useEffect, useState } from 'react';
import ContentContainer from './Containers/ContentContainer';
import TrendingContainer from './Containers/TrendingContainer';
import { getTrending, Trending } from './api';

// The below 'TrendingContainer' renders the checkbox and list of recipes.
// The length of the list is dependent on if the checkbox is checked.
// 'TrendingContainer' is conditionally rendered based on when the API result is added to state.
// A loading message will show prior to state being updated.
// In the real world, this would be where I'd implement separate component for a loading state, such as loading spinner.

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
