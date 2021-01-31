import { FC } from "react";
import { ImageTile } from "components/part/ImageTile";

interface Props {
    name: string;
    logoUrl: string;
}

export const RestaurantTile: FC<Props> = props => {
    return <ImageTile
        title={props.name}
        src={props.logoUrl}
    />;
};
