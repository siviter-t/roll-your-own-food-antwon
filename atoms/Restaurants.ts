import { atom, selector } from "recoil";
import { fetchRestaurants } from "services/JustEatApiIntegration";

export const restaurantPostCodeQueryState = atom<string | null>({
    key: "restaurantPostCodeQueryState",
    default: null,
});

export const restaurantsByPostCodeQuery = selector({
    key: "Restaurants",
    get: async ({ get }) => {
        const postCode = get(restaurantPostCodeQueryState);
        if (!postCode) return null;
        return await fetchRestaurants(postCode);
    }
});
