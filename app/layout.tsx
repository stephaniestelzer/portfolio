import { Lexend } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Stephanie Stelzer",
    template: "%s"
  },
  description: "Hybrid software developer and designer passionate about combining art and technology to craft immersive experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
