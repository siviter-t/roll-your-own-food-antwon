import { FC } from "react";
import { AbsoluteRoot } from "components/part/container/AbsoluteRoot";
import { FlexCentre } from "components/part/container/FlexCentre";
import { RestaurantChoice } from "components/RestaurantChoice";
import { RelativeRoot } from "components/part/container/RelativeRoot";

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
