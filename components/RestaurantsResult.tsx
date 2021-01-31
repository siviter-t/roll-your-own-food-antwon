import { FC } from "react";
import { useRestaurantsLoader } from "atoms/RestaurantsByPostCodeQuery";
import { Button } from "components/form/Button";
import { ThirdLevelHeading } from "components/part/text/ThirdLevelHeading";

export const RestaurantsResult: FC = () => {
    const { isLoading, restaurants, error } = useRestaurantsLoader();

    if (isLoading) return <div>Loading...</div>;
    if (!restaurants || error) return <div>An error has occured</div>;
    if (restaurants.length === 0) return <div>No restaurants found.</div>;

    return (
        <div>
            <ThirdLevelHeading>Found {restaurants.length} restaurants to roll for!</ThirdLevelHeading>
            <Button>Roll</Button>
        </div>
    );
};
