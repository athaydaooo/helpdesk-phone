import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./style.css";

const popins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Suporte Telefônico",
  description: "Plataforma de suporte telefônico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${popins.variable} antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}
