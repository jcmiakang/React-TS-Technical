import { Trending } from '../api';

const TrendingList = ({ trendingRecipes }: { trendingRecipes: Trending[] }) => {
  const recipeList = trendingRecipes.map((recipe) => {
    const title: string = recipe.title;
    const userRatingsCount: number | undefined =
      recipe.rating.attributes.userRatingsCount;
    const key = `trending-recipe-${recipe.document_id}`;

    return (
      <li className='listItem' key={key}>
        <h4>{title}</h4>
        <div className='value'>
          User Ratings:{' '}
          {userRatingsCount
            ? userRatingsCount
            : 'Be the first to rate this recipe!'}
        </div>
      </li>
    );
  });

  return (
    <section className='container'>
      <h4 className='trendingTitle'>See What's Trending</h4>
      {recipeList}
    </section>
  );
};

export default TrendingList;
