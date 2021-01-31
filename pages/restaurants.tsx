import { FC } from "react";
import { PostCodeSearch } from "components/PostCodeSearch";
import { RestaurantsBackground } from "components/RestaurantsBackground";
import { RestaurantsResult } from "components/RestaurantsResult";
import { FlexCentre } from "components/part/FlexCentre";

export const RestaurantsPage: FC = () => {
    return (
        <>
            <div style={{ position: "absolute", height: "100%", width: "100%" }}>
                <RestaurantsBackground />
                <div style={{ position: "relative", height: "100%" }}>
                    <FlexCentre height={"100%"}>
                        <div>
                            <PostCodeSearch />
                            <RestaurantsResult />
                        </div>
                    </FlexCentre>
                </div>
            </div>
        </>
    );
};

export default RestaurantsPage;
