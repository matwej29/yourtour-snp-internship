import MainBlock, {MainBlock__description, MainBlock__title} from "../main-block/MainBlock";
import Form from "../form/Form";
import { H2 } from "../headings/Headings";

const CreateTourBlock = () => (
  <MainBlock id="create-tour">
    <MainBlock__title>
      <H2>Собери свой тур</H2>
      <MainBlock__description>
        Идейные соображения высшего порядка, <br />а также рамки и место
        обучения кадров
      </MainBlock__description>
    </MainBlock__title>

    <Form />
  </MainBlock>
);

export default CreateTourBlock;
