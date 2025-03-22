import LeftSideBar from "@/components/layout/LeftSideBar";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eshop - Admin Dashboard",
  description: "Admin dashboard to manage eshop date",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="flex max-lg:flex-col text-purple-2">
            <LeftSideBar />
            <div className="purple-2">{children}</div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
