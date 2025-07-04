const YELP_API_KEY = process.env.YELP_API_KEY;

interface YelpBusiness {
  name: string;
}

interface YelpResponse {
  businesses?: YelpBusiness[];
}

export async function findRestaurant(city: string, dish: string): Promise<string> {
  try {
    if (!YELP_API_KEY) {
      console.warn('YELP_API_KEY environment variable is not set');
      return `Local ${dish} Restaurant in ${city}`;
    }

    const url = `https://api.yelp.com/v3/businesses/search?location=${city}&term=${dish}&sort_by=rating&limit=1`;

    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${YELP_API_KEY}` }
    });

    if (!res.ok) {
      throw new Error(`Yelp API error: ${res.status} ${res.statusText}`);
    }

    const data: YelpResponse = await res.json();
    return data.businesses?.[0]?.name || `Local ${dish} Restaurant`;
  } catch (error) {
    console.error('Error fetching restaurant:', error instanceof Error ? error.message : 'Unknown error');
    return `Local ${dish} Restaurant in ${city}`;
  }
}
