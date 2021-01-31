import { FC } from "react";
import styled from "styled-components";
import { useRestaurantsLoader } from "atoms/RestaurantsByPostCodeQuery";
import { RestaurantTile } from "components/RestaurantTile";
import { Tiles } from "components/part/Tiles";

const BackgroundContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    opacity: 0.2;
`;

export const RestaurantsBackground: FC = () => {
    const { isLoading, restaurants, error } = useRestaurantsLoader();

    if (isLoading || error) return null;
    if (!restaurants || restaurants.length === 0) return null;

    return (
        <BackgroundContainer>
            <Tiles height="100%" mainAxisContentAlignment={"space-around"} crossAxisContentAlignment={"space-between"}>
                {restaurants.map(restaurant =>
                    <RestaurantTile
                        key={restaurant.Id}
                        name={restaurant.Name}
                        logoUrl={restaurant.LogoUrl}
                    />
                )}
            </Tiles>
        </BackgroundContainer>
    );
};
