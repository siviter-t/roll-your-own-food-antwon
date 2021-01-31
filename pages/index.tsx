import { FC } from "react";
import { PostCodeSearch } from "components/PostCodeSearch";
import { FlexCentre } from "components/part/FlexCentre";

export const IndexPage: FC = () => {
    return (
        <>
            <FlexCentre>
                <PostCodeSearch />
            </FlexCentre>
        </>
    );
};


export default IndexPage;
