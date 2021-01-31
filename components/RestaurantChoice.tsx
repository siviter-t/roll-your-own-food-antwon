import { FC } from "react";
import { useRandomRestaurantLoader } from "atoms/RandomRestaurantQuery";
import { ImageTile } from "components/part/ImageTile";
import { FirstLevelHeading } from "components/part/text/FirstLevelHeading";
import { SecondLevelHeading } from "components/part/text/SecondLevelHeading";
import { ThirdLevelHeading } from "components/part/text/ThirdLevelHeading";
import { Separator } from "components/part/text/Separator";

export const RestaurantChoice: FC = () => {
    const { isLoading, restaurant, error } = useRandomRestaurantLoader();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error has occured</div>;
    if (!restaurant) return <div>No restaurant found, did you search by postcode?</div>;

    return (
        <div>
            <FirstLevelHeading>You&apos;re getting...</FirstLevelHeading>
            <div style={{ display: "flex", alignItems: "center" }}>
                <ImageTile title={restaurant.Name} src={restaurant.LogoUrl} />
                <div style={{ marginLeft: "1em" }}>
                    <SecondLevelHeading>{restaurant.Name}</SecondLevelHeading>
                    <ThirdLevelHeading>{restaurant.Description}</ThirdLevelHeading>
                    <span>
                        <span>Rating {restaurant.RatingStars} / 6</span>
                        <Separator />
                        <span>Number of ratings: {restaurant.NumberOfRatings}</span>
                        <Separator />
                        <a href={restaurant.Url} target={"_blank"} rel={"noreferrer"}>URL</a>
                    </span>
                </div>
            </div>

        </div>
    );
};
