import { FC } from "react";
import { RelativeRoot } from "components/part/container/RelativeRoot";
import { AbsoluteRoot } from "components/part/container/AbsoluteRoot";
import { Flex } from "components/part/container/Flex";
import { FlexCentre } from "components/part/container/FlexCentre";

interface Props {
    isLoading: boolean;
    isValid: boolean;
    showValidation: boolean;
    renderInput: (showInvalidation: boolean) => JSX.Element;
    renderLoading: JSX.Element | null;
    renderValidation: JSX.Element | null;
}

export const Field: FC<Props> = props => {
    return (
        <Flex>
            <RelativeRoot>
                {props.renderInput(!props.isValid && props.showValidation)}
                <AbsoluteRoot width={"auto"} top={0} right={"0.2em"}>
                    <FlexCentre>
                        {props.isLoading && props.renderLoading}
                    </FlexCentre>
                    {props.isValid && props.renderValidation}
                </AbsoluteRoot>
            </RelativeRoot>
        </Flex>
    );
};
