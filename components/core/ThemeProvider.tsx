import { FC } from "react";
import { ThemeProvider as ThemeProviderInternal } from "styled-components";
import { EasyStandard } from "styles/themes/EasyStandard";

export const ThemeProvider: FC = props => {
    return (
        <ThemeProviderInternal theme={EasyStandard} >
            {props.children}
        </ThemeProviderInternal>
    );
};
