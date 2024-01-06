import { Trending } from '../api';

const TrendingSingle = ({
  trendingRecipes,
}: {
  trendingRecipes: Trending[];
}) => {
  const title: string = trendingRecipes[0].title;
  const userRatingsCount: number | undefined =
    trendingRecipes[0].rating.attributes.userRatingsCount;

  return (
    <li className='listItem'>
      <section>
        <h4>{title}</h4>
        <div className='value'>
          User Ratings:{' '}
          {userRatingsCount
            ? userRatingsCount
            : 'Be the first to rate this recipe!'}
        </div>
      </section>
    </li>
  );
};

export default TrendingSingle;
