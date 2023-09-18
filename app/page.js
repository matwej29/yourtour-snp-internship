"use client";

import Head from "next/head";
import Menu from "../components/menu/Menu.jsx";
import Footer from "../components/footer/Footer.jsx";
import PageHeaderBlock from "../components/PageHeaderBlock/PageHeaderBlock.jsx";
import ToursBlock from "../components/ToursBlock/ToursBlock.jsx";
import CreateTourBlock from "../components/CreateTourBlock/CreateTourBlock.jsx";
import ReviewsBlock from "../components/ReviewsBlock/ReviewsBlock.jsx";
import EndBlock from "../components/end-block/EndBlock.jsx";
import PhotoBlock from "../components/PhotoBlock/PhotoBlock.jsx";
import HistoriesBlock from "../components/HistoriesBlock/HistoriesBlock.jsx";

const IndexPage = () => {
  return (
    <>
      <title>YourTour</title>
      <Head>
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
      </Head>
      <header>
        <Menu />
      </header>
      <main className="main">
        <PageHeaderBlock />
        <ToursBlock />
        <CreateTourBlock />
        <ReviewsBlock />
        <PhotoBlock />
        <HistoriesBlock />
        <EndBlock />
      </main>

      <Footer />
    </>
  );
};

export default IndexPage;
