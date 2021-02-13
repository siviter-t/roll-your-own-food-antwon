import { FC } from "react";
import { PostCodeSearch } from "components/PostCodeSearch";
import { AbsoluteRoot } from "components/part/position/AbsoluteRoot";
import { FlexCentre } from "components/part/position/FlexCentre";
import { RelativeRoot } from "components/part/position/RelativeRoot";

export const IndexPage: FC = () => {
    return (
        <AbsoluteRoot>
            <RelativeRoot>
                <FlexCentre flexDirection="column">
                    <PostCodeSearch />
                </FlexCentre>
            </RelativeRoot>
        </AbsoluteRoot>
    );
};

export default IndexPage;
