import { FC } from "react";
import { useRecoilValueLoadable } from "recoil";
import styled from "styled-components";
import { restaurantsByPostCodeQuery } from "atoms/Restaurants";
import { RestaurantTile } from "components/RestaurantTile";
import { Tiles } from "components/part/Tiles";
import { JustEatRestaurantDto } from "services/JustEatApiIntegration";

const BackgroundContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    opacity: 0.2;
`;

export const RestaurantsBackground: FC = () => {
    const restaurantsLoadable = useRecoilValueLoadable(restaurantsByPostCodeQuery);

    if (restaurantsLoadable.state === "hasValue") return <div>
        <RestaurantBackgroundInternal restaurants={restaurantsLoadable.contents?.Restaurants || []} />
    </div>;

    return <RestaurantBackgroundInternal restaurants={[]} />;
};

const RestaurantBackgroundInternal: FC<{ restaurants: JustEatRestaurantDto[] }> = props => {
    if (props.restaurants.length === 0) return null;
    return (
        <BackgroundContainer>
            <Tiles>
                {props.restaurants.map(restaurant =>
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
