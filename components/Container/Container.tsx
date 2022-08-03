import Head from "next/head";
import React, { FC, ReactNode } from "react";
import Image from 'next/image';
import styles from '../../styles/Home.module.css';

interface Props {
  children: ReactNode;
}

const Container: FC<Props> = (props) => {
  return <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />

      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {props.children}

    <footer className={styles.footer}>

    </footer>
  </>;
};

export default Container;