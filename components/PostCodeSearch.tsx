import { NextRouter, useRouter } from "next/router";
import _ from "lodash";
import { ChangeEvent, FC, useCallback } from "react";
import { useRecoilState } from "recoil";
import { restaurantPostCodeQueryState } from "atoms/RestaurantPostCodeQueryState";
import { TextInput } from "components/form/TextInput";

const redirectToRestaurants = (router: NextRouter) => router.push("/restaurants");
const debouncedRedirectToRestaurants = _.debounce(redirectToRestaurants, 300);

export const PostCodeSearch: FC = () => {
    const [postCode, setPostCode] = useRecoilState(restaurantPostCodeQueryState);
    const router = useRouter();
    const searchCallback = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setPostCode(value);
        debouncedRedirectToRestaurants(router);
    }, [router, setPostCode]);

    return (
        <TextInput
            value={postCode || ""}
            onChange={searchCallback}
            placeholder={"enter a postcode"}
        />
    );
};
