import React, { useState } from "react";

import styles from "./QuizForm.module.css";
import shadowStyles from "../../styles/shadow.module.css";
import { useFormValidation } from "../../hooks/useFormValidation.jsx";
import { VisibilityManager } from "../VisibilityManager.jsx";
import formBack from "../../public/images/form_back.webp";

export const isText = RegExp(/^.{2,200}$$/i);
export const isEmail = RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
export const isPhone = RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i);
export const isChecked = RegExp(/[0-9]{1}/);

const stateShcema = {
  question_1: {
    type: "question",
    label: "Укажите ваше ФИО",
    placeholder: '',
    value: "",
    error: "",
  },
  question_2: {
    type: "question",
    label: "Укажите город проживания",
    placeholder: '',
    value: "",
    error: "",
  },
  checkbox_1: {
    type: "checkbox",
    label: "Уровень протезирования",
    values: ["Пальцы или часть кисти", "Предплечье (ниже локтевого сустава)", "Плечо (вычленение локтевого сустава)", "Вычленение плечевого сустава"],
    selected: undefined,
    error: "",
  },
  checkbox_2: {
    type: "checkbox",
    label: "Причина протезирования",
    values: ["Врожденный случай", "Ампутация", "Производственная травма"],
    selected: undefined,
    error: "",
  },
  checkbox_3: {
    type: "checkbox",
    label: "Есть ли у вас опыт пользования протезом?",
    values: ["Косметический протез", "Тяговый протез", "С внешним источником энергии", "Нет опыта"],
    selected: undefined,
    error: "",
  },
  checkbox_4: {
    type: "checkbox",
    label: "Наличие ИПР (индивидуальной программы реабилитации)",
    values: ["Да", "Нет"],
    selected: undefined,
    error: "",
  },
  question_3: {
    type: "question",
    label: "Какие задачи вам необходимо разрешать при помощи протеза?",
    value: "",
    placeholder: '',
    error: "",
  },
  checkbox_5: {
    type: "checkbox",   
    label: "Став участником фокус группы, готовы ли вы систематически делиться обратной связью с командой Модеста в формате видео или аудио звонков?",
    values: ["Да", "Нет", "Иногда проще писать текстом, но готов делиться всеми своими впечатлениями об использовании протеза"],
    selected: undefined,
    error: "",
  },
  question_4: {
    type: "question",
    label: "Оставьте ссылку на любую удобную для вас социальную сеть или мессенджер для связи",
    value: "",
    placeholder: '',
    error: "",
  },
  checkbox_6: {
    type: "checkbox",
    label: "",
    values: ["Я ознакомлен (ознакомлена) с правилами обработки персональных данных"],
    selected: undefined,
    error: "",
  },
};

const validateShcema = {
  question_1: {
    required: true,
    validator: {
      regEx: isText,
      error: "Поле содержит меньше 2 или больше 88 символов",
    },
  },
  question_2: {
    required: true,
    validator: {
      regEx: isText,
      error: "Поле содержит меньше 2 или больше 88 символов",
    },
  },
  checkbox_1: {
    required: true,
    validator: {
      regEx: isChecked,
      error: "Выберите ответ",
    },
  },
  checkbox_2: {
    required: true,
    validator: {
      regEx: isChecked,
      error: "Выберите ответ",
    },
  },
  checkbox_3: {
    required: true,
    validator: {
      regEx: isChecked,
      error: "Выберите ответ",
    },
  },
  checkbox_4: {
    required: true,
    validator: {
      regEx: isChecked,
      error: "Выберите ответ",
    },
  },
  question_3: {
    required: true,
    validator: {
      regEx: isText,
      error: "Поле содержит меньше 2 или больше 88 символов",
    },
  },
  checkbox_5: {
    required: true,
    validator: {
      regEx: isChecked,
      error: "Выберите ответ",
    },
  },
  question_4: {
    required: true,
    validator: {
      regEx: isText,
      error: "Поле содержит меньше 2 или больше 88 символов",
    },
  },
  checkbox_6: {
    required: true,
    validator: {
      regEx: isChecked,
      error: "Выберите ответ",
    },
  },
};

export function QuizForm() {
  const { state, disable, handleChange, handleSubmit } = useFormValidation(stateShcema, validateShcema, handleSend);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

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
          text: Object.entries(state).map(([key, item]) => { 
          if (item.type === 'question') {
            return `<b>${item.label}</b>: ${item.value}\n`
          }
          if (item.type === 'checkbox' && item.label) {
            return `<b>${item.label}</b>: ${item.values[item.selected]}\n`
          }
          return '';
          }).join('')
        }),
      })
        .then((response) => {
          setResponseMessage("Спасибо за уделённое время! Ваши ответы отправлены нам.");
        })
        .catch((error) => {
          setResponseMessage("Что-то пошло не так. Мы уже занимаемся решением проблемы.");
          setLoading(false);
          console.error("Ошибка:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    sendMessage();
  }

  return (
    <VisibilityManager className={styles["quiz-block"]} id="quiz-submit">
      <VisibilityManager as="div" onInit={false} className={`${styles["quiz-form"]}`}>
        <h2 className={styles["quiz-form__title"]}>Получение протеза Модеста 1.0</h2>
        <p className={styles["quiz-form__description"]}>
          Для того, чтобы стать участником фокус группы ответьте на несколько вопросов ниже. После прохождения опроса, мы проанализируем ваши данные и
          свяжемся с вами для уточнения необходимой информации. Спасибо! Все ответы хранятся в базе данных компании Модеста и не подлежат разглашению
          третьим лицам
        </p>
        <form className={styles.form} onSubmit={handleSubmit} method="POST" noValidate>
          {Object.entries(state).map(([key, item]) => {
            return (
              <>
                {item.type.includes("question") && (
                  <div key={key} className={styles["form-group"]}>
                    <label className={styles['form-label']}>{item.label}</label>
                    <input
                      className={`${styles["form-control"]} ${item.value ? styles["form-control--filled"] : ""} ${shadowStyles.shadow}`}
                      value={item.value}
                      onChange={(e) => {
                        handleChange({
                          target: { type: "question", key, value: e.target.value },
                        });
                      }}
                      placeholder={item.placeholder}
                      disabled={Boolean(responseMessage)}
                    />
                    {item.error ? (
                      <div className={styles.helper}>{item.error}</div>
                    ) : item.value ? (
                      <div className={`${styles.helper} ${styles["helper--green"]}`}>✔</div>
                    ) : (
                      ""
                    )}
                  </div>
                )}
                {item.type.includes("checkbox") && (
                  <div key={key} className={styles["form-group"]}>
                    <label className={styles['form-label']}>{item.label}</label>
                    {item.values.map((checkboxItem, i) => {
                      return (
                        <div key={key + checkboxItem + i} className={styles["form-checkbox"]}>
                          <input
                            name="checkbox"
                            className={styles["form-checkbox__input"]}
                            type="checkbox"
                            id={key + checkboxItem + i}
                            onChange={(e) => {
                              handleChange({
                                target: { type: "checkbox", selected: e.target.checked ? i : undefined, key},
                              });
                            }}
                            checked={item.selected === i}
                          />
                          <label
                            className={`${styles["form-checkbox__label"]}`}
                            htmlFor={key + checkboxItem + i}
                          >
                            {checkboxItem}
                          </label>
                        </div>
                      );
                    })}
                    {item.error ? (
                      <div className={styles.helper}>{item.error}</div>
                    ) : item.selected !== undefined ? (
                      <div className={`${styles.helper} ${styles["helper--green"]}`}>✔</div>
                    ) : (
                      ""
                    )}
                  </div>
                )}
              </>
            );
          })}
          <p className={styles["form-doc"]}>
            <a target="_blank" href="/agreement-data.pdf">
              Согласие на обработку персональных данных
            </a>
          </p>
          <button type="submit" className={`${styles.formSubmitButton} ${shadowStyles.shadow}`} disabled={disable}>
            <span>{responseMessage.length > 0 ? responseMessage : "Отправить"}</span>
            {loading && <div className={styles["loader-button"]} />}
          </button>
        </form>
      </VisibilityManager>
    </VisibilityManager>
  );
}
