import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gokul - Personal Brand",
  description:
    "The personal website of Gokul, featuring work, writing, and life outside of work.",
};

export const viewport: Viewport = {
  themeColor: "#17202a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#f7f2ea] text-[#1f2933] antialiased">
        {children}
      </body>
    </html>
  );
}
