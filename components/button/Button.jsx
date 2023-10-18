import styles from "./button.module.scss";

import classNames from '../../shared/helpers/classNames';

const Button = ({ children, onClick, className = "" }) => (
  <button onClick={onClick} className={classNames(styles.button, className)}>
    {children}
  </button>
);

export const ButtonText = ({ children, onClick, className = "" }) => (
  <Button onClick={onClick} className={classNames(styles.button_text, className)}>
    {children}
  </Button>
)

export default Button;
