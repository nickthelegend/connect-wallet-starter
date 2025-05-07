"use client"

import { ConnectWalletButton } from "./connect-wallet-button"

export default function Nav() {
  return (
    <nav className="flex justify-between items-center p-4 border-b">
      <h1 className="text-xl font-bold pl-20">Connect-Wallet-Starter</h1>
      <ConnectWalletButton />
    </nav>
  )
}
