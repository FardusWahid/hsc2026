import "./globals.css";
import Navbar from "./component/navbar";


export const metadata = {
  title: "Apple -2026",
  description: "Apple Academic 2026",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/><br/><br/><br/><br className="max-sm:hidden"/>
        {children}
      </body>
    </html>
  );
}
