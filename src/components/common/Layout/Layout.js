import styles from "./Layout.module.scss";
import { Header, Footer } from "@components/common";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
			<main>{children}</main>
			<Footer />
    </div>
  );
};

export default Layout;
