import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: "Developer Notebook | Next.js Prisma Notes App",

  description:
    "A developer notebook application built with Next.js App Router, Prisma ORM, MongoDB, and Tailwind CSS to practice database relationships, schema migrations, and Server Actions.",

  metadataBase: new URL("https://alamin-developer-note.vercel.app/"),

  openGraph: {
    title: "Developer Notebook | Next.js Prisma Notes App",

    description:
      "Step-by-step developer notebook demonstrating relational data fetching with Prisma ORM, MongoDB, and Next.js Server Actions.",

    siteName: "Developer Notebook",

    url: "https://alamin-developer-note.vercel.app/",

    type: "website",

    images: [
      {
        url: "/note.webp",
        width: 1200,
        height: 630,
        alt: "Developer Notebook Application Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Developer Notebook | Next.js Prisma Notes App",

    description:
      "Server-first note-taking application built with Next.js, Tailwind CSS, Prisma ORM, and MongoDB.",

    images: [
      "/note.webp",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};



export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} h-full antialiased selection:bg-neo-blue selection:text-neo-black`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
