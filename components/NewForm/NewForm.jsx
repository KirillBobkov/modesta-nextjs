import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import InputMask from "react-input-mask";
import { z } from "zod";
import styles from "./NewForm.module.css"; // Импортируем стили из модуля
import shadowStyles from "../../styles/shadow.module.css";
import { ArrowButton } from "../ScrollTopButton/ScrollTopButton";

// Компонент для форматирования поля телефона
const MaskedInput = ({ field, form, ...props }) => (
  <InputMask {...field} {...props} mask="+7 (999) 999-99-99" maskChar=" " />
);

const xssPattern =
  /(<([^>]+)>|javascript:|data:|eval\(|alert\(|document\.cookie|document\.write|<script>|<\/script>)/i;

const formSchema = z.object({
  name: z
    .string()
    .min(3, "Имя должно содержать не менее 3 символов")
    .refine((val) => !xssPattern.test(val), "Недопустимый символ в имени"),

  email: z
    .string()
    .email("Некорректный email")
    .refine((val) => !xssPattern.test(val), "Недопустимый символ в email"),

  phone: z
    .string()
    .regex(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, "Некорректный номер телефона")
    .refine(
      (val) => !xssPattern.test(val),
      "Недопустимый символ в номере телефона"
    ),

  message: z
    .string()
    .refine((val) => !xssPattern.test(val), "Недопустимый символ в сообщении")
    .optional(),

  checkbox: z
    .boolean()
    .refine((val) => val === true, "Необходимо согласиться с условиями"),
});

const RegistrationForm = ({ popupOpened, setOpened }) => {
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  function handleSend(fields, helpers) {
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
          text: `<b>Заявка на получние протеза</b>\n\n<b>Имя</b>: ${
            fields.name
          }\n<b>E-mail</b>: ${fields.email}\n<b>Номер телефона</b>: ${
            fields.phone
          }\n<b>Сообщение</b>: ${fields.message || "-"}`,
        }),
      })
        .then(() => {
          setResponseMessage("Спасибо, заявка отправлена!");
        })
        .catch((error) => {
          setResponseMessage(
            "Произошла ошибка при отправке. Пожалуйста, свяжитесь с нами через контакты"
          );
          setLoading(false);
          console.error("Ошибка:", error);
        })
        .finally(() => {
          helpers.resetForm();
          setLoading(false);
        });
    };
    sendMessage();
  }

  return (
    <div
      onClick={(e) => {
        setOpened(false);
        document.documentElement.classList.remove("mobile-menu-opened");
      }}
      className={
        styles["popup-overlay"] +
        " " +
        (popupOpened ? styles["popup-overlay--opened"] : "")
      }
    >
      <div onClick={(e) => e.stopPropagation()} className={styles.popup}>
        <h2 className={styles["popup__title"]}>Оставить заявку</h2>
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            message: "",
            checkbox: false,
          }}
          autoComplete="off"
          validate={(values) => {
            try {
              formSchema.parse(values);
              return {};
            } catch (error) {
              console.log(error.errors);
              return error.errors.reduce((acc, curr) => {
                acc[curr.path[0]] = curr.message;
                return acc;
              }, {});
            }
          }}
          onSubmit={handleSend}
        >
          {({ isValid, dirty, errors }) => (
            <Form className={styles.form}>
              <div className={styles["form-group"]}>
                <Field
                  type="text"
                  disabled={responseMessage.length > 0}
                  placeholder="Ваше имя"
                  name="name"
                  className={styles["input-field"]}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={styles["error-message"]}
                />
              </div>
              <div className={styles["form-group"]}>
                <Field
                  type="email"
                  disabled={responseMessage.length > 0}
                  placeholder="E-mail"
                  name="email"
                  className={styles["input-field"]}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={styles["error-message"]}
                />
              </div>

              <div className={styles["form-group"]}>
                <Field
                  name="phone"
                  disabled={responseMessage.length > 0}
                  placeholder="+7 (999) 999-9999"
                  component={MaskedInput}
                  className={styles["input-field"]}
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className={styles["error-message"]}
                />
              </div>

              <div className={styles["form-group"]}>
                <Field
                  placeholder="Напишите то, что нам важно знать"
                  disabled={responseMessage.length > 0}
                  as="textarea"
                  name="message"
                  className={
                    styles["input-field"] + " " + styles["form-textarea"]
                  }
                />
              </div>

              <div
                className={styles["form-group"] + " " + styles["form-checkbox"]}
              >
                <Field
                  id="id-form-checkbox"
                  type="checkbox"
                  disabled={responseMessage.length > 0}
                  name="checkbox"
                  className={`${styles["form-checkbox__input"]} ${
                    errors.checkbox ? styles["form-checkbox__input--error"] : ""
                  }`}
                />
                <label
                  htmlFor="id-form-checkbox"
                  className={`${styles["form-checkbox__label"]}`}
                >
                  Я ознакомлен (ознакомлена) с{" "}
                  <a
                    target="_blank"
                    className={styles["form-doc"]}
                    href="/agreement-data.pdf"
                  >
                    правилами
                  </a>{" "}
                  обработки персональных данных
                </label>
              </div>
              <button
                type="submit"
                className={`${styles.formSubmitButton} ${shadowStyles.shadow}`}
                disabled={!(isValid && dirty) || responseMessage.length > 0}
              >
                <span>
                  {responseMessage.length > 0 ? responseMessage : "Отправить"}
                </span>
                {loading && <div className={styles["loader-button"]} />}
              </button>
            </Form>
          )}
        </Formik>
        <ArrowButton
          classes={styles["close-button"]}
          onClick={() => {
            setOpened(false);
            document.documentElement.classList.remove("mobile-menu-opened");
          }}
        />
      </div>
    </div>
  );
};

export default RegistrationForm;
