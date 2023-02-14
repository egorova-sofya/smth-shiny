import MainLayout from "@/components/Layouts/MainLayout/MainLayout";
import "@/styles/globals.scss";
import { Open_Sans } from "@next/font/google";
import type { AppProps } from "next/app";

const openSans = Open_Sans({
  weight: ["400", "700"],
  subsets: ["cyrillic", "latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={openSans.className}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </div>
  );
}
