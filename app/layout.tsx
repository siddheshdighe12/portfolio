import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Siddhesh Dighe | Full Stack Developer",
  description:
    "Portfolio of Siddhesh Dighe - Full Stack Developer, React, Next.js, React Native, Node.js & MongoDB Developer.",
  keywords: [
    "Siddhesh Dighe",
    "Portfolio",
    "Full Stack Developer",
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "Express",
    "MongoDB",
    "JavaScript",
    "TypeScript",
  ],
  authors: [
    {
      name: "Siddhesh Dighe",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={poppins.className}>

        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 3000,
            style: {
              background: "#171028",
              color: "#ffffff",
              border: "1px solid rgba(139,92,246,.35)",
              borderRadius: "14px",
              padding: "16px",
            },
            success: {
              iconTheme: {
                primary: "#8B5CF6",
                secondary: "#ffffff",
              },
            },
            error: {
              iconTheme: {
                primary: "#EF4444",
                secondary: "#ffffff",
              },
            },
          }}
        />

        {children}

      </body>

    </html>
  );
}