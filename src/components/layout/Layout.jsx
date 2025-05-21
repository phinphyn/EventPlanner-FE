import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "../ui/toaster";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20 container mx-auto max-w-7xl px-6">
        {children}
      </main>
      <Footer />
    
    </div>
  );
}