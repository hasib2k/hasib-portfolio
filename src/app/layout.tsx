import type { Metadata } from "next";
import { Tilt_Neon } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const tiltNeon = Tilt_Neon({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-tilt-neon",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hasib Ahmed - QA Engineer & Frontend Developer Portfolio",
  description: "Dedicated QA Engineer & Frontend Developer with expertise in software quality assurance and modern web technologies. Specializing in testing automation, quality processes, and building exceptional user experiences.",
  keywords: ["Hasib Ahmed", "QA Engineer", "Quality Assurance", "Frontend Developer", "Software Testing", "Test Automation", "React", "Next.js", "JavaScript", "TypeScript", "Testing"],
  authors: [{ name: "Hasib Ahmed" }],
  creator: "Hasib Ahmed",
  openGraph: {
    title: "Hasib Ahmed - QA Engineer & Frontend Developer Portfolio",
    description: "Dedicated QA Engineer & Frontend Developer with expertise in software quality assurance and modern web technologies.",
    url: "https://hasibdev.in",
    siteName: "Hasib Ahmed Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hasib Ahmed - QA Engineer & Frontend Developer Portfolio",
    description: "Dedicated QA Engineer & Frontend Developer with expertise in software quality assurance and modern web technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={tiltNeon.variable} suppressHydrationWarning>
      <body className={`${tiltNeon.className} antialiased font-sans`}>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
