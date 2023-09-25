import Link from "../link/Link";
import Image from "next/image";
import { H3 } from "../headings/Headings";
import MainBlock from "../main-block/MainBlock";

// TODO: возможно, стоит переименовать в contact-block
const EndBlock = () => (
  <MainBlock>
    <div className="end-block">
      <div className="end-block__image">
        <Image src="/images/footer photo.jpg" alt="Contact us image" fill />
      </div>
      <div className="end-block__text">
        <H3>Пора в путешествие вместе с нами!</H3>
        <p className="p_n p_gray p_clear-margin">
          Напиши на почту и узнай подробности на {" "}
          <Link
            href="mailto:yourtour@gmail.com"
            linkType="email"
            className="p_black">
            yourtour@gmail.com
          </Link>
        </p>
      </div>
    </div>
  </MainBlock>
);

export default EndBlock;
