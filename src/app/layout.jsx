// app/layout.js
import Navbar from "../../components/Navbar";

import Footer from "../../components/Footer";
import "./globals.css";

export const metadata = {
  title: "DNA.js Project",
  description: "A basic layout for our project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className="min-h-screen  px-4">
          <div className="container">{children}</div>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
