import styles from "./Layout.module.scss";
import { Header } from "@components/common";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
