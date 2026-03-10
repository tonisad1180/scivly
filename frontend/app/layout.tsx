import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Scivly",
    template: "%s | Scivly",
  },
  description:
    "Scivly is the research intelligence layer for monitoring papers, generating digests, and running follow-up questions in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[var(--background)] font-[family:var(--font-body)] text-[var(--ink)] antialiased">
        {children}
      </body>
    </html>
  );
}
