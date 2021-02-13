import { FC } from "react";
import { PostCodeSearch } from "components/PostCodeSearch";
import { RestaurantsBackground } from "components/RestaurantsBackground";
import { RestaurantsResult } from "components/RestaurantsResult";
import { AbsoluteRoot } from "components/part/container/AbsoluteRoot";
import { FlexCentre } from "components/part/container/FlexCentre";
import { RelativeRoot } from "components/part/container/RelativeRoot";

export const RestaurantsPage: FC = () => {
    return (
        <AbsoluteRoot>
            <RestaurantsBackground />
            <RelativeRoot>
                <FlexCentre flexDirection="column">
                    <PostCodeSearch />
                    <RestaurantsResult />
                </FlexCentre>
            </RelativeRoot>
        </AbsoluteRoot>
    );
};

export default RestaurantsPage;
