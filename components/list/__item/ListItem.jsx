const ListItem = ({ children, className='' }) => (
  <li className={`list__item ${className}`}>{children}</li>
);

export default ListItem;