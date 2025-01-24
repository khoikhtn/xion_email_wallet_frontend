import React from "react";
import Link from "next/link";

export default function MiddleContent() {
  return (
    <div className="w-full max-w-2xl rounded-lg p-6 mb-6 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-10">
        Send Assets via Email
      </h2>
      <p className="text-gray-600 text-xl mb-10">
        Create your account and send assets by replying to emails. Your email
        address will not be posted on-chain. We cannot control your assets, only
        your emails can.
      </p>
      <p className="text-base text-gray-500">
        If you have already{" "}
        <Link href="/" className="text-blue-600 hover:underline">
          Created an account
        </Link>{" "}
        , go to{" "}
        <Link href="/transfer" className="text-blue-600 hover:underline">
          Transfer Assets
        </Link>{" "}
        or{" "}
        <Link href="/wallet-balance" className="text-blue-600 hover:underline">
          Check Wallet Balance
        </Link>
        .
      </p>
      <p className="text-base text-gray-500">
        Find your created XION address{" "}
        <Link href="/get-wallet-address" className="text-blue-600 hover:underline">
          here
        </Link>
        {"."}
      </p>
    </div>
  );
}