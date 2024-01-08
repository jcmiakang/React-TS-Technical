import { useState } from 'react';
import TrendingList from '../Components/TrendingList';
import { Trending } from '../api';

interface TrendingContainerProps {
  trendingRecipes: Trending[];
}

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
