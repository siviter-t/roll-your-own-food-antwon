import { FC } from "react";
import { FlexCentre } from "components/part/FlexCentre";
import { RestaurantChoice } from "components/RestaurantChoice";

export const RestaurantPage: FC = () => {
    return (
        <>
            <div style={{ position: "absolute", height: "100%", width: "100%" }}>
                <div style={{ position: "relative", height: "100%" }}>
                    <FlexCentre height={"100%"}>
                        <div>
                            <RestaurantChoice />
                        </div>
                    </FlexCentre>
                </div>
            </div>
        </>
    );
};

export default RestaurantPage;
