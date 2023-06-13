import { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

interface BaseLayoutProps {
  children: ReactNode;
};

const BaseLayout = (props: BaseLayoutProps) => {
  return <>
    <Navbar/>
    <main>{props.children}</main>
    <Footer/>
  </>;
};

export default BaseLayout;