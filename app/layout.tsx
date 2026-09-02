import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dmitriev's Bistro | Brooklyn",
  description: "Homestyle Eastern European food, breakfast, lunch, and dinner at 1212 Avenue Z in Brooklyn.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
