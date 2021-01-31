import { FC } from "react";
import { PostCodeSearch } from "components/PostCodeSearch";
import { FlexCentre } from "components/part/FlexCentre";

export const IndexPage: FC = () => {
    return (
        <>
            <div style={{ position: "absolute", height: "100%", width: "100%" }}>
                <div style={{ position: "relative", height: "100%" }}>
                    <FlexCentre height={"100%"}>
                        <div>
                            <PostCodeSearch />
                        </div>
                    </FlexCentre>
                </div>
            </div>
        </>
    );
};

export default IndexPage;
