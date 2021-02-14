import { filter, sampleSize } from "lodash";
import { selector, useRecoilValueLoadable } from "recoil";
import { restaurantPostCodeQueryState } from "atoms/RestaurantPostCodeQueryState";
import { fetchRestaurants, JustEatRestaurantDto } from "services/JustEatApiIntegration";
import { isValidishUkPostcode } from "utils/IsValidishUkPostcode";

export const restaurantsByPostCodeQuery = selector({
    key: "Restaurants",
    get: async ({ get }) => {
        const postCode = get(restaurantPostCodeQueryState);
        if (!postCode || !isValidishUkPostcode(postCode)) return null;
        const result = await fetchRestaurants(postCode);
        return baseRestaurantFilter(result?.Restaurants ?? null);
    }
});

interface RestaurantsLoader {
    isLoading: boolean;
    restaurants: JustEatRestaurantDto[] | null;
    error: Error | null;
}

function baseRestaurantFilter(restaurants: JustEatRestaurantDto[] | null): JustEatRestaurantDto[] | null {
    if (!restaurants) return null;
    return filter(restaurants, r => r.IsOpenNow && r.IsOpenNowForDelivery);
}

export function useRestaurantsLoader(): RestaurantsLoader {
    const restaurantsLoadable = useRecoilValueLoadable(restaurantsByPostCodeQuery);

    if (restaurantsLoadable.state === "hasValue") {
        return {
            isLoading: false,
            restaurants: restaurantsLoadable.contents,
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

export function useRestaurantsSampleLoader(size: number): RestaurantsLoader {
    const { isLoading, restaurants, error } = useRestaurantsLoader();

    if (restaurants && restaurants.length > 0) {
        return {
            isLoading,
            restaurants: sampleSize(restaurants, size),
            error
        };
    }

    return { isLoading, restaurants, error };
}

export function useAreRestaurantsLoading(): { isLoading: boolean } {
    const { isLoading } = useRestaurantsLoader();
    return { isLoading };
}
