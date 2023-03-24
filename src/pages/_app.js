import "@/styles/globals.scss";
import { Layout } from "@/components/common";

// Do some searching on what this does
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
