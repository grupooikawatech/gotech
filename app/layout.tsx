import { Inter } from "next/font/google";
import Header from "./_components/header";
import Footer from "./_components/footer";
import "./_components/globals.css";
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export default function HomepageLayout(
  { modal, children }: {
    modal: React.ReactNode,
    children: React.ReactNode
  }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {modal}
        <Header />
        {children}
        <div id="modal-root" />
        <Footer />
      </body>
    </html >
  )
}