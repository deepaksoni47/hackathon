// app/layout.js
import "./globals.css";

export const metadata = {
  title: "DNA.js Project",
  description: "A basic layout for our project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen  px-4">
          <div className="container">{children}</div>
        </main>
      </body>
    </html>
  );
}
