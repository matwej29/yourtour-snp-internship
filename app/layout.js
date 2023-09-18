import localFont from "next/font/local";
import "../styles/main.css";

const Roboto = localFont({
  src: [
    { path: "../public/fonts/Roboto/Roboto-Regular.ttf", weight: "400" },
    { path: "../public/fonts/Roboto/Roboto-Medium.ttf", weight: "500" },
    { path: "../public/fonts/Roboto/Roboto-Bold.ttf", weight: "700" },
  ],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={Roboto.className}>
      <body>{children}</body>
    </html>
  );
}
