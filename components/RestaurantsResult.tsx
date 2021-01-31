import { FC } from "react";
import { useRecoilValueLoadable } from "recoil";
import { restaurantsByPostCodeQuery } from "atoms/Restaurants";
import { JustEatRestaurantDto } from "services/JustEatApiIntegration";

export const RestaurantsResult: FC = () => {
    const restaurantsLoadable = useRecoilValueLoadable(restaurantsByPostCodeQuery);

    if (restaurantsLoadable.state === "loading") return <div>Loading...</div>;

    if (restaurantsLoadable.state === "hasValue") return <div>
        <RestaurantsResultInternal restaurants={restaurantsLoadable.contents?.Restaurants || []} />
    </div>;

    return <div>An error has occured</div>;
};

const RestaurantsResultInternal: FC<{ restaurants: JustEatRestaurantDto[] }> = props => {
    if (props.restaurants.length === 0) {
        return <>No restaurants found.</>;
    }

    return <>Found {props.restaurants.length} restaurants to roll for!</>;
};
