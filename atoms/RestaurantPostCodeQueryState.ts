import { atom, } from "recoil";

export const restaurantPostCodeQueryState = atom<string | null>({
    key: "restaurantPostCodeQueryState",
    default: null,
});
