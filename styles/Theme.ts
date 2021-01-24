export interface Theme {
    one: string;
    two: string;
    three: string;
    four: string;
    five: string;
}

declare module "styled-components" {
    export interface DefaultTheme extends Theme { }
}
