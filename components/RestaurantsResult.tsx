import { FC } from "react";
import { useRestaurantsLoader } from "atoms/RestaurantsByPostCodeQuery";
import { ThirdLevelHeading } from "components/part/text/ThirdLevelHeading";
import { RollButton } from "components/RollButton";

export const RestaurantsResult: FC = () => {
    const { isLoading, restaurants, error } = useRestaurantsLoader();

    if (isLoading || !restaurants) return null;
    if (error) return <div>An error has occured</div>;
    if (restaurants.length === 0) return <div>No restaurants found.</div>;

    return (
        <div>
            <ThirdLevelHeading>Found {restaurants.length} restaurants open for delivery to roll for!</ThirdLevelHeading>
            <RollButton />
        </div>
    );
};
