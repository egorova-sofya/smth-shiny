import MainLayout from "@/components/Layouts/MainLayout/MainLayout";
import "@/styles/globals.scss";
import { Open_Sans } from "@next/font/google";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const openSans = Open_Sans({
  weight: ["400", "700"],
  subsets: ["cyrillic", "latin"],
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ||
    ((page: ReactNode) => <MainLayout>{page}</MainLayout>);

  return (
    <ParallaxProvider>
      <div className={openSans.className}>
        {getLayout(<Component {...pageProps} />)}
      </div>
    </ParallaxProvider>
  );
}
