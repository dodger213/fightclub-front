'use client'
import { useState } from 'react'
import Image from 'next/image'

interface Step {
  title: string
  description: string
  icon: string;
}

const steps: Step[] = [
  {
    title: "Connect your wallet",
    description: "Press the connect button and choose one of the many supported wallets to connect to the website.",
    icon: "/assets/icons/wallet.svg",
  },
  {
    title: "Pay with the currency you like",
    description: "Use one of the supported currencies to buy your FICCO coins. We accept ETH, USDT, SOL and CARD.",
    icon: "/assets/icons/pay.svg",
  },
  {
    title: "Claim your FICCO coins",
    description: "Coins can be claimed after the second sale ended. Connect your wallet and press the claim button to receive them.",
    icon: "/assets/icons/claim.svg",
  },
]

export default function DesktopPurchaseGuide() {

  return (
    <div className="w-full flex items-center justify-center bg-gray-900 text-white p-8">
      <div className="max-w-6xl w-full space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-wider">HOW TO BUY FICCO</h2>
          <p className="mt-2 text-xl text-red-500 font-semibold">GET STARTED</p>
          <p className="mt-4 text-gray-400">
            Follow these easy steps to purchase FICCO tokens and embrace on our journey
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <Image src={step.icon} alt="icon" width={60} height={60} />
              <h3 className="text-lg font-medium">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}