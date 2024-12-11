"use client";

import "./globals.css";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "@/lib/apollo-client";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ApolloProvider client={apolloClient}>
        <body
          className={` antialiased dark flex flex-col mx-auto justify-center px-10`}
        >
          {children}
        </body>
      </ApolloProvider>
    </html>
  );
}
