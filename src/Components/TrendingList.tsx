import { Trending } from '../api';

interface TrendingListProps {
  trendingRecipes: Trending[];
  isList: boolean;
}

const TrendingList = ({ trendingRecipes, isList }: TrendingListProps) => {
  const recipesArray: Trending[] = isList
    ? trendingRecipes
    : [trendingRecipes[0]];

  const recipeList = recipesArray.map((recipe) => {
    const recipeKey = `trending-recipe-${recipe.document_id}`;
    const title: string = recipe.title;
    const userRatingsCount: number | undefined =
      recipe.rating.attributes.userRatingsCount;

    return (
      <li className='listItem' key={recipeKey}>
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

  return <>{recipeList}</>;
};

export default TrendingList;
