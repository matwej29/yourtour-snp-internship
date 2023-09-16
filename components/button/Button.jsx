export const ButtonDetails = ({ children, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`button button_type_details ${className}`}>
    {children}
  </button>
);

export const ButtonFind = ({ children, onClick, className = "" }) => (
  <button onClick={onClick} className={`button button_type_find ${className}`}>
    {children}
  </button>
);

export const ButtonReset = ({ children, onClick, className = "" }) => (
  <button onClick={onClick} className={`button button_type_reset ${className}`}>
    {children}
  </button>
);

export const ButtonTour = ({ children, onClick, className = "" }) => (
  <button onClick={onClick} className={`button button_type_tour ${className}`}>
    {children}
  </button>
);

const Button = ({ children, onClick, className = "" }) => (
  <button onClick={onClick} className={`button ${className}`}>
    {children}
  </button>
);

export default Button;
