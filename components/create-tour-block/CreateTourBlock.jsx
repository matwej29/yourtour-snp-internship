import MainBlock, {MainBlockDescription, MainBlockTitle} from "../main-block/MainBlock";
import Form from "../form/Form";
import { H2 } from "../headings/Headings";

const CreateTourBlock = () => (
  <MainBlock id="create-tour">
    <MainBlockTitle>
      <H2>Собери свой тур</H2>
      <MainBlockDescription>
        Идейные соображения высшего порядка, <br />а также рамки и место
        обучения кадров
      </MainBlockDescription>
    </MainBlockTitle>

    <Form />
  </MainBlock>
);

export default CreateTourBlock;
