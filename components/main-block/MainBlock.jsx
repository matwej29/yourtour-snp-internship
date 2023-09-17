const MainBlock = ({ children, id, container = true }) => {
  const sectionClassName = container ? "main-block container" : "main-block";

  return (
    <section className={sectionClassName} id={id}>
      {children}
    </section>
  );
};

export const MainBlock__title = ({ children }) => (
  <div className="main-block__title text-center">{children}</div>
);

export const MainBlock__description = ({ children }) => (
  <div className="p_s p_gray p_clear-margin">{children}</div>
);

export default MainBlock;
