import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navigation from "@/components/Navigation";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Hasib Ahmed - Software Developer Portfolio",
  description: "Passionate Software Developer with expertise in web technologies. Specializing in building responsive web experiences with intuitive design.",
  keywords: ["Hasib Ahmed", "Software Developer", "Web Developer", "Portfolio", "React", "Next.js", "JavaScript", "TypeScript"],
  authors: [{ name: "Hasib Ahmed" }],
  creator: "Hasib Ahmed",
  openGraph: {
    title: "Hasib Ahmed - Software Developer Portfolio",
    description: "Passionate Software Developer with expertise in web technologies.",
    url: "https://hasibdev.in",
    siteName: "Hasib Ahmed Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hasib Ahmed - Software Developer Portfolio",
    description: "Passionate Software Developer with expertise in web technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
