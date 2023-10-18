import localFont from "next/font/local";
import "../shared/styles/main.scss";

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
      <head>
        <title>YourTour</title>
        <link
          type="image/png"
          sizes="16x16"
          rel="icon"
          href="/icons/icons8-around-the-globe-pastel-16.png"
        />
        <link
          type="image/png"
          sizes="32x32"
          rel="icon"
          href="/icons/icons8-around-the-globe-pastel-32.png"
        />
        <link
          type="image/png"
          sizes="96x96"
          rel="icon"
          href="/icons/icons8-around-the-globe-pastel-96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="72x72"
          href="/icons/icons8-around-the-globe-pastel-72.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/icons/icons8-around-the-globe-pastel-96.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="57x57"
          href="/icons/icons8-around-the-globe-pastel-57.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="60x60"
          href="/icons/icons8-around-the-globe-pastel-60.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="72x72"
          href="/icons/icons8-around-the-globe-pastel-72.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="76x76"
          href="/icons/icons8-around-the-globe-pastel-76.png"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
