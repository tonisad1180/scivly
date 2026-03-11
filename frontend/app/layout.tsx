import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

import { siteConfig } from "@/lib/site-config";
import { absoluteUrl, resolveSiteUrl } from "@/lib/site-url";

import "./globals.css";
import { ThemeProvider } from "./providers";
import { ScivlySessionProvider } from "@/lib/auth/scivly-session";

export const metadata: Metadata = {
  metadataBase: new URL(resolveSiteUrl()),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    url: resolveSiteUrl(),
    siteName: siteConfig.name,
    locale: "en_US",
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [absoluteUrl("/opengraph-image")],
  },
};

const FALLBACK_CLERK_PUBLISHABLE_KEY = "pk_test_c2Npdmx5LmNsZXJrLmFjY291bnRzLmRldiQ=";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? FALLBACK_CLERK_PUBLISHABLE_KEY}
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
      afterSignOutUrl="/"
    >
      <html lang="en" suppressHydrationWarning>
        <body className="bg-[var(--background)] font-[family:var(--font-body)] text-[var(--foreground)] antialiased transition-colors duration-300">
          <ThemeProvider>
            <ScivlySessionProvider>
              {children}
            </ScivlySessionProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
