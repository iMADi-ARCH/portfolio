import SmoothScrollWrapper from "@/components/SmoothScrollWrapper";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

const title = "Aditya Nandan - Creative Web Developer and Designer";
const description =
    "Aditya Nandan is a self-taught Frontend Web Developer and Designer and he make unique web experiences for small to large scale brands.";
const url = "https://adityanandan.vercel.app/";
const images = [
    {
        url: "/og-image.webp",
        width: 1200,
        height: 628,
        alt: "Aditya Nandan's website",
    },
    {
        url: "/og-image.jpg",
        width: 1200,
        height: 628,
        alt: "Aditya Nandan's website",
    },
];

export const metadata = {
    title: title,
    description: description,
    generator: "Next.js",
    applicationName: "Aditya Nandan - Portfolio",
    referrer: "origin-when-cross-origin",
    keywords: [
        "Next.js",
        "React",
        "JavaScript",
        "Web developer",
        "website",
        "ui design",
        "Web designer",
    ],
    authors: [{ name: "Aditya Nandan" }],
    // colorScheme: "dark",
    creator: "Aditya Nandan",
    publisher: "Aditya Nandan",
    category: "technology",
    openGraph: {
        type: "website",
        url: url,
        title: title,
        description: description,
        images: images,
    },
    twitter: {
        card: "summary_large_image",
        site: url,
        title: title,
        description: description,
        images: images,
        creator: "@iMADi",
        creatorId: "69235681",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            className="w-full h-fit bg-stone-100 text-stone-900 dark:bg-stone-800 dark:text-stone-50 overflow-x-hidden antialiased"
            lang="en"
        >
            <head>
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#292524" />
                <meta
                    httpEquiv="Content-Security-Policy"
                    content="upgrade-insecure-requests"
                />
            </head>
            <body className={`w-full h-full ${inter.className}`}>
                <main className="w-full h-full px-5 md:px-10">
                    <SmoothScrollWrapper>
                        {children}
                        <Analytics />
                    </SmoothScrollWrapper>
                </main>
            </body>
        </html>
    );
}
