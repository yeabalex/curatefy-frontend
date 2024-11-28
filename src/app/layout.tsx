"use client";

import "./globals.css";
import { DM_Sans } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const dmSans = DM_Sans({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={`${dmSans.className} antialiased`}>{children}</body>
      </Provider>
    </html>
  );
}
