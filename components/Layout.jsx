import Head from "next/head";
import React, { useEffect } from "react";
import Navbar from "../components/Navigation/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <main>
        <Navbar />
        {children}
      </main>
    </>
  );
}
