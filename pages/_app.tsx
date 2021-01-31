import { AppProps } from "next/app";
import { ReactNode } from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "components/core/ThemeProvider";
import { ResetGlobalStyle } from "styles/ResetGlobalStyle";

export default function MyApp({ Component, pageProps }: AppProps): ReactNode {
    return (
        <>
            <ResetGlobalStyle />
            <RecoilRoot>
                <ThemeProvider>
                    <Component {...pageProps} />
                </ThemeProvider>
            </RecoilRoot>
        </>
    );
}
