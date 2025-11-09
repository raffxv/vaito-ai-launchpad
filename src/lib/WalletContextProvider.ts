import React, { ReactNode, FC } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";

import "@solana/wallet-adapter-react-ui/styles.css";

// Define props for the provider
interface WalletContextProviderProps {
  children: ReactNode;
}

const WalletContextProvider: FC<WalletContextProviderProps> = ({ children }) => {
  const endpoint =
    "https://cool-clean-friday.solana-mainnet.quiknode.pro/5d4f1cb01a8c07492695c52553b7b7d525926a7f/";

  // You can include more wallets here
  const wallets = [new PhantomWalletAdapter(), new SolflareWalletAdapter()];

  return (
    <ConnectionProvider endpoint={endpoint} autoConnect>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default WalletContextProvider;
