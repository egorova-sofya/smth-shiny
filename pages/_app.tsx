import MainLayout from "@/components/Layouts/MainLayout/MainLayout";
import "@/styles/globals.scss";
import { Open_Sans } from "@next/font/google";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

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
    <div className={openSans.className}>
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
}
