import { ChainId, Web3sdkioProvider } from "@web3sdkio/react";
import Head from "next/head";
import Web3sdkioGuideFooter from "../components/guide/Web3sdkioGuideFooter";
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }) {
  return (
    <Web3sdkioProvider desiredChainId={activeChainId}>
      <Head>
        <title>web3sdkio Covalent Integration</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="web3sdkio Covalent integration to load a users NFTs and load the metadata about them using web3sdkio."
        />
        <meta
          name="keywords"
          content="web3sdkio covalent template, covalent example, covalent"
        />
      </Head>
      <Component {...pageProps} />
      <Web3sdkioGuideFooter />
    </Web3sdkioProvider>
  );
}

export default MyApp;
