import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import InputMask from "react-input-mask";
import { z } from "zod";
import { ArrowButton } from "../ScrollTopButton.jsx";

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

export default function NewForm({ popupOpened, setOpened }) {
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const inputFieldClasses =
    "w-full text-base border-2 border-card box-border leading-[25px] py-[7px] px-[15px] block bg-card rounded-[20px] transition-all duration-300 ease-in-out focus:border-accent focus:outline-none placeholder:text-font-secondary autofill:shadow-[inset_0_0_5px_50px_var(--card-bg-color)] autofill:!text-font autofill:![border-color:var(--card-bg-color)]";

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
        document.documentElement.classList.remove("overflow-hidden");
      }}
      className={`fixed top-0 left-0 w-full h-full bg-background-opacity flex justify-center items-center transition-all duration-1000 ease-in-out z-20 backdrop-blur-[20px] ${
        popupOpened ? "translate-y-0" : "translate-y-[-105%] "
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="p-[30px] rounded-[30px] w-full max-w-[500px] bg-transparent shadow-none box-border lg:p-[50px] lg:bg-background lg:shadow-[var(--box-shadow)_0px_6px_20px_0px] lg:w-[500px] lg:max-w-none"
      >
        <h2 className="text-[32px] leading-[40px] mb-[30px] font-bold text-center">
          Оставить заявку
        </h2>
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
            <Form className="flex flex-col">
              <div className="mb-[15px]">
                <Field
                  type="text"
                  disabled={responseMessage.length > 0}
                  placeholder="Ваше имя"
                  name="name"
                  className={inputFieldClasses}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-helper-red text-[10px] text-right leading-[14px] mt-0 mr-[5px]"
                />
              </div>
              <div className="mb-[15px]">
                <Field
                  type="email"
                  disabled={responseMessage.length > 0}
                  placeholder="E-mail"
                  name="email"
                  className={inputFieldClasses}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-helper-red text-[10px] text-right leading-[14px] mt-0 mr-[5px]"
                />
              </div>

              <div className="mb-[15px]">
                <Field
                  name="phone"
                  disabled={responseMessage.length > 0}
                  placeholder="+7 (999) 999-9999"
                  component={MaskedInput}
                  className={inputFieldClasses}
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-helper-red text-[10px] text-right leading-[14px] mt-0 mr-[5px]"
                />
              </div>

              <div className="mb-[15px]">
                <Field
                  placeholder="Напишите то, что нам важно знать"
                  disabled={responseMessage.length > 0}
                  as="textarea"
                  name="message"
                  className={`${inputFieldClasses} min-h-[100px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
                />
              </div>

              <div className="mb-[15px] text-[10px] leading-3 text-font flex items-center gap-[10px] cursor-pointer">
                <Field
                  id="id-form-checkbox"
                  type="checkbox"
                  disabled={responseMessage.length > 0}
                  name="checkbox"
                  className={`w-[15px] h-[15px] rounded-[3px] border flex-shrink-0 checked:bg-font checked:border-font ${
                    errors.checkbox
                      ? "border-helper-red"
                      : "border-font"
                  }`}
                />
                <label
                  htmlFor="id-form-checkbox"
                  className="text-[11px] leading-3 text-font-secondary"
                >
                  Я ознакомлен (ознакомлена) с{" "}
                  <a
                    target="_blank"
                    className="text-[11px] leading-3 cursor-pointer text-font"
                    href="/agreement-data.pdf"
                  >
                    правилами
                  </a>{" "}
                  обработки персональных данных
                </label>
              </div>
              <button
                type="submit"
                className="relative flex items-center justify-content-center mx-auto p-[7px] uppercase no-underline w-full bg-accent text-black rounded-[30px] font-bold text-center whitespace-pre-line mt-[5px] cursor-pointer leading-5 transition-all duration-300 hover:opacity-80 focus:opacity-80 disabled:pointer-events-none disabled:select-none disabled:opacity-50 shadow-lg"
                disabled={!(isValid && dirty) || responseMessage.length > 0}
              >
                <span className="inline-block py-[10px] px-[20px]">
                  {responseMessage.length > 0 ? responseMessage : "Отправить"}
                </span>
                {loading && (
                  <div className="w-5 h-5 rounded-full inline-block border-t-[3px] border-r-[3px] border-t-black border-r-transparent animate-[spin_0.5s_linear_infinite]" />
                )}
              </button>
            </Form>
          )}
        </Formik>
        <ArrowButton
          classes="absolute bottom-[15px] right-[15px] block lg:hidden"
          onClick={() => {
            setOpened(false);
            document.documentElement.classList.remove("overflow-hidden");
          }}
        />
      </div>
    </div>
  );
};
