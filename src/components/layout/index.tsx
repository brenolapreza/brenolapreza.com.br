"use client";
import { ReactChild, ReactNode } from "react";
import { Header } from "../header";
import { LayoutProps } from "./Layout.types";

export const revalidate = 1000;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="min-h-screen ">
      <Header />
      {children}
    </main>
  );
};
