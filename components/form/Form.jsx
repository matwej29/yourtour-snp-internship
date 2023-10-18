import Button from "../button/Button.jsx";
import Link from "../link/Link.jsx";
import React, { useEffect, useRef, useState } from "react";
import maskPhone from "./maskPhone.js";

import styles from "./Form.module.scss";
import classNames from "../../shared/helpers/classNames.js";

const ButtonFind = ({ children, onClick }) => (
  <Button className={classNames(styles.button_find, styles.p_n)} onClick={onClick}>
    {children}
  </Button>
);

const ButtonReset = ({ children, onClick }) => (
  <Button className={classNames(styles.button_reset, styles.p_n)} onClick={onClick}>
    {children}
  </Button>
);

const Element = ({ children }) => (
  <div className={styles.element}>{children}</div>
);

const ElementsLine = ({ children }) => (
  <div className={styles["elements-line"]}>{children}</div>
);

export const Checkbox = ({ name, children, checked, onChange }) => (
  <label className={styles["checkbox-group"]}>
    <input
      type="checkbox"
      id={name}
      name={name}
      checked={checked}
      onChange={onChange}
      className={styles.checkbox}
    />
    <span
      className={classNames(
        styles.p_n,
        styles.p_gray,
        styles["p_clear-margin"]
      )}>
      {children}
    </span>
  </label>
);

export const Input = React.forwardRef(function Input(
  { name, label, type, value, onChange, placeholder },
  ref
) {
  return (
    <label
      className={classNames(
        styles.element,
        styles.p_n,
        styles["p_clear-margin"]
      )}>
      {label}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={classNames(styles.input, styles.p_n)}
        placeholder={placeholder}
        ref={ref}
      />
    </label>
  );
});

export const Select = ({
  name,
  label,
  value,
  onChange,
  children,
  defaultValue,
}) => (
  <label className={classNames(styles.element, styles.p_n, styles["p_clear-margin"])}>
    {label}
    <select
      name={name}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      className={classNames(styles.select, styles.p_n)}
      required>
      {children}
    </select>
  </label>
);

export const Radio = ({ name, children, value, checked, onChange }) => (
  <label className={classNames(styles.radio, styles.p_n, styles["p_clear-margin"])}>
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className={classNames(styles.radio, styles.p_n)}
    />
    {children}
  </label>
);

export const Textarea = ({ name, label, value, onChange }) => (
  <label
    className={classNames(
      styles.element,
      styles.p_n,
      styles["p_clear-margin"]
    )}>
    {label}
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      className={classNames(styles.textarea, styles.p_n)}
    />
  </label>
);

const Line = ({ children }) => <div className={styles.line}>{children}</div>;

const Form = () => {
  const phoneRef = useRef(null);

  const [name, setName] = useState("");
  const [destination, setDestination] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [commentary, setCommentary] = useState("");
  const [age, setAge] = useState(false);
  const [agree, setAgree] = useState(false);

  const send = (e) => {
    e.preventDefault();

    console.log({
      name,
      destination,
      email,
      phone,
      dateFrom,
      dateTo,
      commentary,
      age,
      agree,
    });
  };

  const reset = (e) => {
    e.preventDefault();

    setName("");
    setDestination("");
    setEmail("");
    setPhone("");
    setDateFrom("");
    setDateTo("");
    setCommentary("");
    setAge(false);
    setAgree(false);
  };

  useEffect(() => {
    maskPhone(phoneRef);
  }, []);

  return (
    <form className={styles.form}>
      <Line>
        <Input
          name="name"
          label="Имя"
          placeholder="Введите ваше имя"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <Select
          name="destination"
          label="Направление"
          defaultValue="Выберите пункт"
          onChange={(e) => setDestination(e.target.value)}>
          <option value="" disabled hidden>
            Выберите пункт
          </option>
          <option value="">Первый пункт</option>
          <option value="">Второй пункт</option>
        </Select>
      </Line>

      <Line>
        <Input
          name="email"
          label="Email"
          placeholder="Введите ваш email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          name="phone"
          label="Телефон"
          placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _"
          type="tel"
          ref={phoneRef}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Line>

      <Line>
        <Input
          name="date-from"
          label="Дата от"
          placeholder="ДД.ММ.ГГГГ"
          type="date"
          onChange={(e) => setDateFrom(e.target.value)}
        />
        <Input
          name="date-to"
          label="Дата до"
          placeholder="ДД.ММ.ГГГГ"
          type="date"
          onChange={(e) => setDateTo(e.target.value)}
        />
      </Line>

      <Textarea name="commantary" label="Комментарий" />

      <Element>
        <p className={classNames(styles.p_n, styles["p_clear-margin"])}>
          Вам есть 18 лет?
        </p>
        <ElementsLine>
          <Radio name="age" value="yes" onChange={() => setAge(true)}>
            {" "}
            Да{" "}
          </Radio>
          <Radio name="age" value="no" onChange={() => setAge(false)}>
            {" "}
            Нет{" "}
          </Radio>
        </ElementsLine>
      </Element>

      <Checkbox name="agree" onChange={() => setAgree(!agree)}>
        Нажимая кнопку, я принимаю условия&nbsp;
        <Link href="#" className={classNames(styles.p_n, styles.p_black)}>
          Лицензионного договора
        </Link>
      </Checkbox>

      <Element>
        <ElementsLine>
          <ButtonFind onClick={(e) => send(e)}>
            Найти тур
          </ButtonFind>
          <ButtonReset onClick={(e) => reset(e)}>
            Сбросить
          </ButtonReset>
        </ElementsLine>
      </Element>
    </form>
  );
};

export default Form;
