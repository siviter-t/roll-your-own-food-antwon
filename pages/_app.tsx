import { AppProps } from "next/app";
import { ReactNode } from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "components/core/ThemeProvider";

export default function MyApp({ Component, pageProps }: AppProps): ReactNode {
    return (
        <RecoilRoot>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </RecoilRoot>
    );
}
