import React, { useState } from "react";
import Link from "next/link";

import { useFormValidation } from "../hooks/useFormValidation";
import { VisibilityManager } from "./VisibilityManager";

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

  const helperBaseClasses = "mt-[5px] inline-block w-full text-right text-[11px] leading-[12px]";

  return (
    <VisibilityManager className="mb-[20px] flex w-full items-center justify-center bg-cover bg-center bg-no-repeat p-[15px] md:min-h-[800px] md:mb-[120px] md:p-0" id="quiz-submit">
      <VisibilityManager as="div" onInit={false} className="w-full max-w-[500px] rounded-[30px] bg-background p-[40px_20px] md:w-[800px] md:max-w-none md:p-0">
        <h2 className="mb-[20px] text-left text-[25px] font-bold leading-[36px] md:mb-[30px] md:text-center md:text-[42px] md:leading-[52px]">Получение протеза Модеста 1.0</h2>
        <p className="mb-[40px] text-font-secondary">
          Для того, чтобы стать участником фокус группы ответьте на несколько вопросов ниже. После прохождения опроса, мы проанализируем ваши данные и
          свяжемся с вами для уточнения необходимой информации. 
        </p>
        <form className="w-full" onSubmit={handleSubmit} method="POST" noValidate>
          {Object.entries(state).map(([key, item]) => {
            if (item.type.includes("question")) {
              return (
                <div key={key} className="relative my-[22px] md:my-[25px]">
                  <label className="mb-[5px] block font-bold">{item.label}</label>
                  <input
                    className="shadow-lg block h-[35px] w-full rounded-[30px] border-none bg-card py-[10px] px-[15px] text-base leading-[25px] transition-all duration-300 ease-in-out focus:outline-none focus:bg-card placeholder:text-font! [&:-webkit-autofill]:!text-font [&:-webkit-autofill]:!shadow-[inset_0_0_0_50px_var(--card-bg-color)]"
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
                    <div className={`${helperBaseClasses} text-helper-red`}>{item.error}</div>
                  ) : item.value ? (
                    <div className={`${helperBaseClasses} text-helper-green`}>✔</div>
                  ) : null}
                </div>
              );
            }
            if (item.type.includes("checkbox")) {
              return (
                <div key={key} className="relative my-[22px] md:my-[25px]">
                  <label className="mb-[5px] block font-bold">{item.label}</label>
                  {item.values.map((checkboxItem, i) => {
                    return (
                      <div key={key + checkboxItem + i} className="mb-[3px] flex cursor-pointer items-center gap-[10px] text-font">
                        <input
                          name="checkbox"
                          className="h-[15px] w-[15px] shrink-0 rounded-[3px] border border-font checked:bg-font"
                          type="checkbox"
                          id={key + checkboxItem + i}
                          onChange={(e) => {
                            handleChange({
                              target: { type: "checkbox", selected: e.target.checked ? i : undefined, key },
                            });
                          }}
                          checked={item.selected === i}
                        />
                        <label
                          className="text-font-secondary"
                          htmlFor={key + checkboxItem + i}
                        >
                          {checkboxItem}
                        </label>
                      </div>
                    );
                  })}
                  {item.error ? (
                    <div className={`${helperBaseClasses} text-helper-red`}>{item.error}</div>
                  ) : item.selected !== undefined ? (
                    <div className={`${helperBaseClasses} text-helper-green`}>✔</div>
                  ) : null}
                </div>
              );
            }
            return null;
          })}
          <p className="cursor-pointer text-[11px] leading-[12px] text-font-secondary">
            <Link href="/agreement-data.pdf">
              Согласие на обработку персональных данных
            </Link>
          </p>
          <button type="submit" className="shadow-lg relative mt-[22px] flex w-full cursor-pointer items-center justify-center rounded-[30px] border-none bg-accent px-[10px] text-center font-bold text-black outline-none transition-all duration-300 whitespace-pre-line hover:opacity-80 focus:opacity-80 disabled:pointer-events-none disabled:select-none disabled:opacity-50" disabled={disable}>
            <span className="inline-block py-[10px] px-[20px]">{responseMessage.length > 0 ? responseMessage : "Отправить"}</span>
            {loading && <div className="box-border inline-block h-5 w-5 animate-spin rounded-full border-t-[3px] border-r-[3px] border-t-font border-r-transparent" />}
          </button>
        </form>
      </VisibilityManager>
    </VisibilityManager>
  );
}
