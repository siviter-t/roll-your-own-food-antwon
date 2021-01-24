import { AppProps } from "next/app";
import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

export default function MyApp({ Component, pageProps }: AppProps): ReactNode {
    return (
        <RecoilRoot>
            <Component {...pageProps} />
        </RecoilRoot>
    );
}
