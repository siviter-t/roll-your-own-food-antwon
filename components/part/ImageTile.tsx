import { FC } from "react";
import styled from "styled-components";

interface Props {
    title: string;
    src: string;
}

const TitleOverlay = styled.div`
    position: absolute;
    right: 0;
    text-align: right;
    color: #FFF;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 1em;
    padding: 0.2em 0.5em;
    font-style: italic;
    font-size: 0.75em;

    display: none;
`;

const ImageTileContainer = styled.div`
    display: flex;
    width: 100px;
    height: 100px;
    position: relative;

    &:hover ${TitleOverlay} {
        display: block;
    }
`;

export const ImageTile: FC<Props> = props => {
    return (
        <ImageTileContainer>
            <TitleOverlay>{props.title}</TitleOverlay>
            <img width={100} height={100} src={props.src} title={props.title} alt={`Logo for ${props.title}`} />
        </ImageTileContainer>
    );
};
