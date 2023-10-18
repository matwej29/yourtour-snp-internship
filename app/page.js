"use client";

import Menu from "../components/menu/Menu.jsx";
import Footer from "../components/footer/Footer.jsx";
import PageHeaderBlock from "../components/PageHeaderBlock/PageHeaderBlock.jsx";
import ToursBlock from "../components/ToursBlock/ToursBlock.jsx";
import CreateTourBlock from "../components/create-tour-block/CreateTourBlock.jsx";
import ReviewsBlock from "../components/ReviewsBlock/ReviewsBlock.jsx";
import EndBlock from "../components/end-block/EndBlock.jsx";
import PhotoBlock from "../components/PhotoBlock/PhotoBlock.jsx";
import HistoriesBlock from "../components/HistoriesBlock/HistoriesBlock.jsx";

import '../shared/styles/main.scss';

const IndexPage = () => {
  return (
    <>
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
