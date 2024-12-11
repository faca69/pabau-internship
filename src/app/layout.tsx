"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "@/lib/apollo-client";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ApolloProvider client={apolloClient}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased dark flex flex-col mx-auto justify-center px-10`}
        >
          {children}
        </body>
      </ApolloProvider>
    </html>
  );
}
