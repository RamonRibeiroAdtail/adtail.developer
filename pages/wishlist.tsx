import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Wishlist() {
  return (
    <main className={`${inter.className}`}>Adtail Developer Wishlist</main>
  );
}
