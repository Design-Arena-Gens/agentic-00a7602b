import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Nova Persona | Futuristic Profile",
  description: "A high-tech personal profile showcasing vision, skills, and mission.",
  openGraph: {
    title: "Nova Persona | Futuristic Profile",
    description: "Step into a futuristic profile experience blending design and storytelling.",
    url: "https://agentic-00a7602b.vercel.app",
    siteName: "Nova Persona",
    images: [
      {
        url: "https://agentic-00a7602b.vercel.app/og-card.svg",
        width: 1200,
        height: 630,
        alt: "Nova Persona Futuristic Profile"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Persona | Futuristic Profile",
    description: "Step into a futuristic profile experience blending design and storytelling.",
    images: ["https://agentic-00a7602b.vercel.app/og-card.svg"],
    creator: "@nova_persona"
  },
  icons: {
    icon: "/icon.svg"
  }
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
