import ListItem from "./__item/ListItem";

const List = ({
  children,
  className = "",
  itemClassName = "",
  wrapped = true,
}) => {
  const listStyles = className !== "" ? `list ${className}` : "list clear_list";

  if (!wrapped) return <ul className={listStyles}>{children}</ul>;

  return (
    <ul className={listStyles}>
      {children.map((child, index) => (
        <ListItem className={itemClassName} key={index}>
          {child}
        </ListItem>
      ))}
    </ul>
  );
};

export default List;
