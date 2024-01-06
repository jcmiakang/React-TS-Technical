export interface Trending  {
  document_id: number;
  count: number;
  document_type: string;
  title: string;
  rating: Rating
}

type Rating = {
  attributes: {
    avgScore: number | undefined;
    rateableId: number | undefined;
    rateableType: string | undefined;
    userRatingsCount: number | undefined;
  }
}

export const getTrending = async (): Promise<Trending[]> => {
  try {
    const response = await fetch('https://speak-easy-staging.herokuapp.com/api/analytics/trending/atk')
    if (!response.ok) {
      throw new Error('invalid response')
    }

    const trending = await response.json()

    if (Array.isArray(trending)) {
      return trending as Trending[]
    }
    else {
      throw new Error('invalid data format')
    }
  }
  catch (err) {
    console.log(`An Error was thrown while fetching trending recipies - ${err}`)
    throw err
  }
}