import { Inter } from "next/font/google";
import "./styles/globals.css";

import { AuthProvider } from "./context/SessionsProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Avaliação Técnica | Eightware Technology",
  description:
    "Sistema de avaliação de conhecimentos técnicos em desenvolvimento full stack, com foco em autenticação, front-end e back-end integrados.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
