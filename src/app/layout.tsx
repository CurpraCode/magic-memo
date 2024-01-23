import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/provider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/utils/auth";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Magic Memo",
  description: "Magi Memo | Interactive, creative memo at your ease and fingertips",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header session={session} />
          {children}
        </Provider>
      </body>
    </html>
  );
}
