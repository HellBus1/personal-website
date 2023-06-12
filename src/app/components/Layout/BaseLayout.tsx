import { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";

interface BaseLayoutProps {
  children: ReactNode;
};

const BaseLayout = (props: BaseLayoutProps) => {
  return <>
    <Navbar/>
    <main>{props.children}</main>
  </>;
};

export default BaseLayout;