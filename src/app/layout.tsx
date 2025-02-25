import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./style.css";

const poppins = Poppins({
  weight: ["500"],
  style: ["normal"],
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
      <body className={`${poppins.className} antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}
