import { Inter, Roboto, Montserrat } from "next/font/google";
export const inter = Inter({ subsets: ["latin"] });

export const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
});