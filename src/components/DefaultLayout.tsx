import { Fragment, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <Header />
      <div>{children}</div>
      <Footer />
    </Fragment>
  );
};

export default DefaultLayout;
