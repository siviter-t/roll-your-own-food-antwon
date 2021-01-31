import { selector, useRecoilValueLoadable } from "recoil";
import { restaurantPostCodeQueryState } from "atoms/RestaurantPostCodeQueryState";
import { fetchRestaurants, JustEatRestaurantDto } from "services/JustEatApiIntegration";

const restaurantsByPostCodeQuery = selector({
    key: "Restaurants",
    get: async ({ get }) => {
        const postCode = get(restaurantPostCodeQueryState);
        if (!postCode) return null;
        return await fetchRestaurants(postCode);
    }
});

interface RestaurantsLoader {
    isLoading: boolean;
    restaurants: JustEatRestaurantDto[] | null;
    error: Error | null;
}

export function useRestaurantsLoader(): RestaurantsLoader {
    const restaurantsLoadable = useRecoilValueLoadable(restaurantsByPostCodeQuery);

    if (restaurantsLoadable.state === "hasValue") {
        return {
            isLoading: false,
            restaurants: restaurantsLoadable.contents?.Restaurants || [],
            error: null,
        };
    }

    if (restaurantsLoadable.state === "loading") {
        return {
            isLoading: true,
            restaurants: null,
            error: null,
        };
    }

    return {
        isLoading: false,
        restaurants: null,
        error: restaurantsLoadable.contents
    };
}