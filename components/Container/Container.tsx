import Head from "next/head";
import React, { FC, ReactNode } from "react";
import CustomAppBar from "components/AppBar/CustomAppBar";
import Footer from "components/Footer/Footer";
import { Divider } from "@mui/material";

interface Props {
  children: ReactNode;
}

const Container: FC<Props> = (props) => {
  return <>
    <CustomAppBar />
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />

      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {props.children}
    <Divider variant="middle" sx={{ mt: 4 }} />
    <Footer />
  </>;
};

export default Container;