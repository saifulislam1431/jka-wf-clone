import { Inter, Poppins } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: ['400', '500', '600', '700', '800']
});