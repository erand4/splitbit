import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import config from "@/config";
import "./globals.css";

const manrope = Manrope({
    subsets: ["latin"],
    display: "swap"
});

export const metadata: Metadata = {
    title: config.title,
    description: config.description
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/icon.svg" type="image/svg+xml" />
                <link rel="mask-icon" href="/icon.svg" color="#000000" />
                <meta name="theme-color" content="#ffffff" />
                <link rel="preload" href="/profile_hover.jpg" as="image" />
            </head>
            <body className={cn("min-h-screen bg-background antialiased", manrope.className)}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    {children}
                    <Analytics />
                </ThemeProvider>
            </body>
        </html>
    );
}
