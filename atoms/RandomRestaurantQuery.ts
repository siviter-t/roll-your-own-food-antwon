import _ from "lodash";
import { selector, useRecoilValueLoadable } from "recoil";
import { restaurantsByPostCodeQuery } from "atoms/RestaurantsByPostCodeQuery";
import { JustEatRestaurantDto } from "services/JustEatApiIntegration";

const randomRestaurantQuery = selector({
    key: "randomRestaurantQuery",
    get: async ({ get }) => {
        const restaurants = get(restaurantsByPostCodeQuery)?.Restaurants;
        if (!restaurants || restaurants.length === 0) return null;
        return _.sample(restaurants) ?? null;
    }
});

interface RandomRestaurantLoader {
    isLoading: boolean;
    restaurant: JustEatRestaurantDto | null;
    error: Error | null;
}

export function useRandomRestaurantLoader(): RandomRestaurantLoader {
    const restaurantLoadable = useRecoilValueLoadable(randomRestaurantQuery);

    if (restaurantLoadable.state === "hasValue") {
        return {
            isLoading: false,
            restaurant: restaurantLoadable.contents,
            error: null,
        };
    }

    if (restaurantLoadable.state === "loading") {
        return {
            isLoading: true,
            restaurant: null,
            error: null,
        };
    }

    return {
        isLoading: false,
        restaurant: null,
        error: restaurantLoadable.contents
    };
}
