import styles from "./Layout.module.scss";
import { Header, Footer, SideMenu } from "@components/common";

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Header />
    <SideMenu />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
