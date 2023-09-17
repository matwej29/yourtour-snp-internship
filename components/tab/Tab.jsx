import React from "react";

const Tab = ({ children }) => {
  const new_children = React.Children.map(children, (child) => {
    const className =
      child.props.className +
      ` tab__element ${child.props.choosed ? "tab__element_choosed" : ""}`;

    // FIXME: возможно, так не стоит делать и нужно напрямую указать это в NavigationTab
    return React.cloneElement(child, { className });
  });

  return <div className="tab">{new_children}</div>;
};

export default Tab;
