import { FC } from "react";

interface Props {
    name: string;
    description: string;
}

export const Restaurant: FC<Props> = props => {
    return (
        <div>
            <h3>{props.name}</h3>
            <h4>{props.description}</h4>
        </div>
    );
};
