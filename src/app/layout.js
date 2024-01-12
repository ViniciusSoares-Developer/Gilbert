import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReturnTop from "@/components/ReturnTop";
import WhatsappButton from "@/components/WhatsappButton";

const inter = Inter({ subsets: ["latin-ext"] });

export const metadata = {
  title: "Gilbert",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`bg-gradient-to-tr from-white via-white to-cyan-100 text-purple-700 ${inter.className}`}>
        <Header />
        <main className="min-h-[70vh] my-4">{children}</main>
        <div className="fixed bottom-5 right-5 md:bottom-32 md:right-32 z-10 flex">
          <WhatsappButton />
          <ReturnTop />
        </div>
        <Footer />
      </body>
    </html>
  );
}
