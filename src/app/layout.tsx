import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khamtay - Fullstack Developer",
  description: "Premium portfolio of Khamtay, a modern fullstack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="font-sans antialiased selection:bg-accent selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
