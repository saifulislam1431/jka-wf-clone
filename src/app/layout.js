import Provider from "@/Core/Provider/Provider";
import { poppins } from "./fonts";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";
import HeaderBar from "@/components/Shared/HeaderBar/HeaderBar";



export const metadata = {
  title: "JKA",
  description: "The “Japan Karate Association World Federation Bangladesh” (JKA WF Bangladesh), is the official Branch of Japan Karate Association World Federation(JKA WF)  in Bangladesh and was formed as a non-profit organisation to be governed under the umbrella of JKA WF Tokyo and adhere to its constitution.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>

        <header>
          <HeaderBar />
        </header>

        <nav>
          <Navbar />
        </nav>

        <body className={poppins.className}>
          {children}
        </body>

        <Footer />

      </Provider>
    </html>
  );
}
