import type { Metadata,Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProviders from "./utils/reactQueryProvider";
import { Suspense } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Devtool from "./_components/devtool";

const inter = Inter({ subsets: ["latin"] });
const APP_NAME = "Andy";
const APP_DEFAULT_TITLE = "My Awesome PWA App";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION = "Best PWA app in the world!";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#ed8b0e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 

{
  return (
    <html lang="en">
        <body className={inter.className}>
          <ReactQueryProviders>
            {children}
            <Devtool />
          </ReactQueryProviders>
        </body>
    </html>
  );
}
