import React from "react";
import "./button.css";
import './_type/button_type_details.css';
import './_type/button_type_find.css';
import './_type/button_type_reset.css';
import './_type/button_type_tour.css';

export const ButtonDetails = ({ children, onClick }) => (
  <button onClick={onClick} className={'button button_type_details'}>{children}</button>
);

export const ButtonFind = ({ children, onClick }) => (
  <button onClick={onClick} className={'button button_type_find'}>{children}</button>
);

export const ButtonReset = ({ children, onClick }) => (
  <button onClick={onClick} className={'button button_type_reset'}>{children}</button>
);

export const ButtonTour = ({ children, onClick }) => (
  <button onClick={onClick} className={'button button_type_tour'}>{children}</button>
);

const Button = ({ children, onClick }) => (
  <button onClick={onClick} className={'button'}>{children}</button>
);

export default Button;
