import { useState } from 'react';
import TrendingList from '../Components/TrendingList';
import { Trending } from '../api';

interface TrendingContainerProps {
  trendingRecipes: Trending[];
}

// Depending if the checkbox is checked, this component will render either 1 recipe or all recipes returned from the API.
// Pagination would be helpful if we were getting more data back then just a few objects.

const TrendingContainer = ({ trendingRecipes }: TrendingContainerProps) => {
  const [isList, setIsList] = useState<boolean>(true);

  const handleCheckChange = () => {
    setIsList((isList) => !isList);
  };

  return (
    <section className='container'>
      <h4 className='title'>See What's Trending</h4>
      <label className='checkLabel'>
        <input
          type='checkbox'
          defaultChecked={true}
          onChange={handleCheckChange}
        />
        View full list of trending recipes
      </label>
      <TrendingList trendingRecipes={trendingRecipes} isList={isList} />
    </section>
  );
};

export default TrendingContainer;
