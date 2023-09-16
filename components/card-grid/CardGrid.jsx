import List from "../list/List";

export const CardGridHorizontal = ({ children }) => (
  <List className="card-grid">{children}</List>
);

const CardGridVertical = ({ children }) => (
  <List className="list card-grid card-grid_type_one-column">{children}</List>
);

export default CardGridVertical;
