export interface JustEatRestaurantDto {
    Id: number;

    Name: string;
    Description: string;

    Url: string;
    LogoUrl: string;

    City: string;
    Postcode: string;

    RatingStars: number;
    NumberOfRatings: number;
    RatingAverage: number;

    IsOpenNow: boolean;
    IsOpenNowForDelivery: boolean;
}

export interface JustEatRestaurantSearchResultDto {
    Area: string;
    Restaurants: JustEatRestaurantDto[];
}

export async function fetchRestaurants(postCode: string): Promise<JustEatRestaurantSearchResultDto | null> {
    const postCodeEncoded = encodeURIComponent(postCode);
    const uri = `/.netlify/functions/just-eat-fetch-restaurants?postcode=${postCodeEncoded}`;
    const response = await fetch(uri);
    if (!response.ok) throw new Error(response.statusText);
    return await response.json();
}
