import { FC } from "react";

interface Props {
    isLoading: boolean;
    renderLoaded: () => JSX.Element;
    renderLoading: () => JSX.Element;
}

export const Loader: FC<Props> = props => {
    if (props.isLoading) return props.renderLoading();
    return props.renderLoaded();
};
