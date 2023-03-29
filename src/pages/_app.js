import "@/styles/globals.scss";
import { Layout } from "@/components/common";
import { AppContextProvider } from "@/components/context/AppContext";

export default function App({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  );
}
