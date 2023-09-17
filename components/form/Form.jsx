import Button, { ButtonFind, ButtonReset } from "../button/Button.jsx";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import maskPhone from "./__input/maskPhone.js";

export const Checkbox = ({ name, children, checked, onChange }) => (
  <label className="form__checkbox-group">
    <input
      type="checkbox"
      id={name}
      name={name}
      checked={checked}
      onChange={onChange}
      className="form__input_type_checkbox"
    />
    <span className="p_n p_gray p_clear-margin">{children}</span>
  </label>
);

export const Input = React.forwardRef(function Input(
  { name, label, type, value, onChange, placeholder },
  ref
) {
  return (
    <label className="form__element p_n p_clear-margin">
      {label}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="form__input p_n"
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
  <label className="form__element p_n p_clear-margin">
    {label}
    <select
      name={name}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      className="form__input form__input_type_select p_n"
      required>
      {children}
    </select>
  </label>
);

export const Radio = ({ name, children, value, checked, onChange }) => (
  <label className="form__input_type_radio p_n p_clear-margin">
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className="form__input_type_radio p_n"
    />
    {children}
  </label>
);

export const Textarea = ({ name, label, value, onChange }) => (
  <label className="form__element p_n p_clear-margin">
    {label}
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      className="form__input form__textarea p_n"
    />
  </label>
);

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
    <form className="form">
      <div className="form__line">
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
      </div>

      <div className="form__line">
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
      </div>

      <div className="form__line">
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
      </div>

      <Textarea name="commantary" label="Комментарий" />

      <div className="form__element">
        <p className="p_n p_clear-margin">Вам есть 18 лет?</p>
        <div className="form__elements-line">
          <Radio name="age" value="yes" onChange={() => setAge(true)}>
            {" "}
            Да{" "}
          </Radio>
          <Radio name="age" value="no" onChange={() => setAge(false)}>
            {" "}
            Нет{" "}
          </Radio>
        </div>
      </div>

      <Checkbox name="agree" onChange={() => setAgree(!agree)}>
        Нажимая кнопку, я принимаю условия&nbsp;
        <Link href="#" className="link p_n p_black">
          Лицензионного договора
        </Link>
      </Checkbox>

      <div className="form__element">
        <div className="form__elements-line">
          <ButtonFind onClick={(e) => send(e)} className="p_n">
            Найти тур
          </ButtonFind>
          <ButtonReset onClick={(e) => reset(e)} className="p_n">
            Сбросить
          </ButtonReset>
        </div>
      </div>
    </form>
  );
};

export default Form;
