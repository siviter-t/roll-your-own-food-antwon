import { FC } from "react";
import { AbsoluteRoot } from "components/part/position/AbsoluteRoot";
import { FlexCentre } from "components/part/position/FlexCentre";
import { RestaurantChoice } from "components/RestaurantChoice";
import { RelativeRoot } from "components/part/position/RelativeRoot";

export const RestaurantPage: FC = () => {
    return (
        <AbsoluteRoot>
            <RelativeRoot>
                <FlexCentre flexDirection="column">
                    <RestaurantChoice />
                </FlexCentre>
            </RelativeRoot>
        </AbsoluteRoot>
    );
};

export default RestaurantPage;
