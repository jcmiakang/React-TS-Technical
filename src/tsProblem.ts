// Requirements: we need to write a fucntion that transforms each item in the homepageItems array because...
// we need to render all these homePageItems on to identical card components
// for favoritng functionality and ease of use we need the result to be an object that builds off of the FavoritableItem type
// result object needs to include all original info and have no nesting


interface FavoritableItem {
  id: number;
  documentName: string;
  imageId: string;
  authors?: Array<string>
}

interface BaseDocument {
  id: number,
  documentName: string;
  slug: string;
}

interface RecipeDocument extends BaseDocument {
  servings: number;
  cookTime: string;
  author: string
  imageUrlId: string;
}

interface ArticleDocument extends BaseDocument {
  subHeadline: string;
  author: Array<{
    author: string;
    active: boolean;
    imageUrl: string;
  }>
  publicImageId: string
}

interface EpisodeDocument extends BaseDocument {
  meta: {
    showName: string;
    description: string;
  }
  season: number;
  episode: number;
  thumbnail: {
    altText: string;
    url: string
  }
}


const homePageItems = [
  {
    id: 1,
    documentName: 'Holiday Favorites',
    slug: '1-holiday-favorites',
    meta: {
      showName: 'Holiday Favorites - ATK',
      description: 'Learn how to cook holiday favorites'
    },
    season: 1,
    episode: 5,
    thumbnail: {
      altText: 'apple pie',
      url: 'ApplePie_holiday_assets_2023'
    }
  },
  {
    id: 2,
    documentName: 'Apple Pie',
    slug: '2-apple-pie',
    servings: 4,
    cookTime: '1:30:00',
    author: 'Steve Dunn',
    imageUrlId: '2023_recipe_assets_apple_pie'
  },
  {
    id: 3,
    documentName: 'How To Not Ruin A Pie Crust',
    subHeadline: 'Try not to ruin the holiday by folling this informative guide',
    slug: 'article-3',
    siteKey: 'ATK',
    publicImageId: '2023_article_2023',
    author: [
      {active: true, author: 'Caren White', imageUrl: 'headshot_caren_white'}
    ]
  }
]
