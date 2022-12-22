import { Divider } from "@mui/material";
import CustomAppBar from "components/AppBar/CustomAppBar";
import Footer from "components/Footer/Footer";
import Head from "next/head";
import { FC, ReactNode } from "react";

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
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@600&display=swap" rel="stylesheet" />
    </Head>
    {props.children}
    <Divider variant="middle" sx={{ mt: 4 }} />
    <Footer />
  </>;
};

export default Container;