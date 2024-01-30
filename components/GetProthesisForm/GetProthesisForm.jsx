import React, { useState } from "react";

import styles from "./GetProthesisForm.module.css";
import shadowStyles from '../../styles/shadow.module.css';
import { useFormValidation } from "../../hooks/useFormValidation.jsx";
import { VisibilityManager } from "../VisibilityManager.jsx";
import formBack from "../../public/images/form_back.webp";

export const isText = RegExp(/^.{2,44}$$/i);
export const isEmail = RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
export const isPhone = RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i
);
export const isChecked = RegExp(/true/i);

const stateShcema = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  phone: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
  checkbox: {
    value: false,
    error: "",
  },
};

const validateShcema = {
  name: {
    required: true,
    validator: {
      regEx: isText,
      error: "Имя меньше 2 или больше 44 символов",
    },
  },
  email: {
    required: true,
    validator: {
      regEx: isEmail,
      error: "Некорректный e-mail адрес",
    },
  },
  phone: {
    required: true,
    validator: {
      regEx: isPhone,
      error: "Некорректный номер телефона",
    },
  },
  message: {
    required: false,
  },
  checkbox: {
    required: true,
    validator: {
      regEx: isChecked,
      error: "Поле не может быть пустым",
    },
  },
};

export function GetProthesisForm() {
  const { state, disable, handleChange, handleSubmit } = useFormValidation(
    stateShcema,
    validateShcema,
    handleSend
  );
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const { name, email, phone, message, checkbox } = state;

  function handleSend() {
    setLoading(true);

    const sendMessage = () => {
      const token = "6684032618:AAG1TLXZ0dgsm0ippB4OrMffxJPTzj4N5oE";
      const chat_id = "-1002021633462";
      const url = `https://api.telegram.org/bot${token}/sendMessage`; // The url to request

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
          chat_id,
          parse_mode: "html",
          text: `<b>Имя</b>: ${name.value}\n<b>email</b>: ${
            email.value
          }\n<b>Номер телефона</b>: ${phone.value}\n<b>Сообщение</b>: ${
            message.value || "пусто"
          }`,
        }),
      })
        .then((response) => response.json())
        .catch((error) => {
          setResponseMessage(
            "Что-то пошло не так. Мы уже занимаемся решением проблемы."
          );
          setLoading(false);
          console.error("Ошибка:", error);
        })
        .finally(() => {
          setResponseMessage(
            "Спасибо, ваша заявка отправлена. Мы свяжемся с вами в ближайшее время."
          );
          setLoading(false);
        });
    };
    sendMessage();
  }

  return (
    <section className={styles['get-prothesis-block']} style={{ backgroundImage: `url(${formBack.src})` }} id="submit">
      <VisibilityManager
        as="div"
        onInit={false}
        classes={`${styles['get-prothesis-form']} ${shadowStyles.shadow}`}
      >
        <h2 className={styles['get-prothesis-form__title']}>Оставить заявку</h2>
        <form className={styles.form} onSubmit={handleSubmit} method="POST" noValidate>
          <div className={styles['form-group']}>
            <input
              name="name"
              autoComplete="name"
              className={`${styles['form-control']} ${
                name.value ? styles['form-control--filled'] : ""
              } ${shadowStyles.shadow}`}
              value={name.value}
              onChange={handleChange}
              placeholder="Ваше имя"
              disabled={!!responseMessage}
            />
            {name.error ? (
              <div className={styles.helper}>{name.error}</div>
            ) : name.value ? (
              <div className={`${styles.helper} ${styles['helper--green']}`}>Имя ✔</div>
            ) : (
              ""
            )}
            <span className={styles.bar} />
          </div>
          <div className={styles['form-group']}>
            <input
              type="email"
              name="email"
              autoComplete="email"
              className={`${styles['form-control']} ${
                email.value ? styles['form-control--filled'] : ""
              } ${shadowStyles.shadow}`}
              value={email.value}
              onChange={handleChange}
              placeholder="E-mail"
              disabled={!!responseMessage}
            />
            {email.error ? (
              <div className={styles.helper}>{email.error}</div>
            ) : email.value ? (
              <div className={`${styles.helper} ${styles['helper--green']}`}>E-mail ✔</div>
            ) : (
              ""
            )}
            <span className={styles.bar} />
          </div>
          <div className={styles['form-group']}>
            <input
              name="phone"
              autoComplete="phone"
              className={`${styles['form-control']}  ${
                phone.value ? styles['form-control--filled'] : ""
              } ${shadowStyles.shadow}`}
              value={phone.value}
              onChange={handleChange}
              placeholder="Телефон 89xxxxxxxx"
              disabled={!!responseMessage}
            />
            {phone.error ? (
              <div className={styles.helper}>{phone.error}</div>
            ) : phone.value ? (
              <div className={`${styles.helper} ${styles['helper--green']}`}>Телефон ✔</div>
            ) : (
              ""
            )}
            <span className={styles.bar} />
          </div>
          <div className={styles['form-group']}>
            <textarea
              name="message"
              value={message.value}
              className={`${styles['form-textarea']} ${styles['form-control']} ${
                message.value ? styles["form-control--filled"] : ""
              } ${shadowStyles.shadow}`}
              onChange={handleChange}
              disabled={!!responseMessage}
              placeholder="Напишите то, что нам важно знать"
            />
            {message.error && <div className={styles.helper}>{message.error}</div>}
            <span className={styles.bar} />
          </div>
          <div className={styles['form-group']}>
            <div className={styles['form-checkbox']}>
              <input
                name="checkbox"
                className={styles['form-checkbox__input']}
                type="checkbox"
                id="form-checkbox"
                onChange={(e) => {
                  handleChange({
                    target: { name: "checkbox", value: e.target.checked },
                  });
                }}
                value={checkbox.value === "true" ? true : false}
              />
              <label
                className={`${styles['form-checkbox__label']} ${checkbox.error ? styles['form-checkbox__label--error'] : ''}`}
                htmlFor="form-checkbox"
              >
                Я ознакомлен (ознакомлена) с правилами обработки персональных данных
              </label>
            </div>
          </div>
          <p className={styles['form-doc']}>
            <a target="_blank" href="/agreement-data.pdf">
              Согласие на обработку персональных данных
            </a>
          </p>
          <button
            type="submit"
            className={`${styles.formSubmitButton} ${shadowStyles.shadow}`}
            disabled={disable}
          >
            <span>
              {responseMessage.length > 0
                ? "Спасибо, заявка отправлена"
                : "Отправить"}
            </span>
            {loading && <div className={styles['loader-button']} />}
          </button>
        </form>
      </VisibilityManager>
    </section>
  );
}
