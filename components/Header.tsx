"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="flex w-full items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link href="/">
          <Image 
            src="/xion.jpg" 
            alt="Logo" 
            width={64} 
            height={64} 
            className="h-16 w-16 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200" 
          />
        </Link>
        <nav className="hidden md:flex items-center gap-12">
          <Link 
            href="https://github.com/bjergsen243/xion-email-wallet-final/blob/master/README.md" 
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 relative group"
          >
            Docs
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-200"></span>
          </Link>
          <Link 
            href="https://github.com/bjergsen243/xion-email-wallet-final" 
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 relative group"
          >
            GitHub
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-200"></span>
          </Link>
          <Link 
            href="https://docs.prove.email/getting-started" 
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 relative group"
          >
            ZkEmail
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-200"></span>
          </Link>
        </nav>
      </div>
    </header>
  );
}