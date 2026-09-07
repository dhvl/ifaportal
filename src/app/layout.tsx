import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UK IFA Portal Creator | Multitenant Client Practice Builder",
  description: "FCA-compliant Independent Financial Adviser website portals with custom branding, AI concierge chatbots, and built-in social media retainers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
