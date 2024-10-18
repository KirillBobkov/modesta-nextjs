import React, {
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
} from "react";
import styles from "./Analytics.module.css";
import {
  Button,
  IconButton,
  ThemeProvider,
  Tooltip,
  createTheme,
} from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import { Subscription } from "rxjs";
import { connect, disconnect, getStatus, read } from "./connect";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { useGaugeState } from "@mui/x-charts/Gauge";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import { fromEvent, interval } from "rxjs";
import { mapTo, scan, startWith, tap } from "rxjs/operators";
import BluetoothRoundedIcon from "@mui/icons-material/BluetoothRounded";
import BluetoothDisabledRoundedIcon from "@mui/icons-material/BluetoothDisabledRounded";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import avatar from "../../public/images/avatar.png";

const INITIAL_COUNT = 0;

// Функция для создания Observable счётчика
export function createCounterObservable() {
  // Создаём поток интервалов, который будет увеличивать значение счётчика каждую секунду
  const counter$ = interval(1000).pipe(
    // Используем scan для накопления значений
    scan((acc, _) => acc + 1),
    // Начинаем с начального значения
    startWith(INITIAL_COUNT)
  );

  return counter$;
}

function formatSeconds(seconds) {
  const hours = Math.floor(seconds / 3600); // Часы
  seconds %= 3600; // Остаток от деления на 3600 (минуты)

  const minutes = Math.floor(seconds / 60); // Минуты
  seconds %= 60; // Секунды

  return `${("0" + hours).slice(-2)}:${("0" + minutes).slice(-2)}:${(
    "0" + seconds
  ).slice(-2)}`;
}

export const Analytics = () => {
  const [subscription, setSubscription] = useState(undefined);
  const [counterSub, setCounterSub] = useState(undefined);
  const [trainingData, setTrainingData] = useState([]);
  const [currentValue, setCurrentValue] = useState(undefined);
  const [timeStart, setSeconds] = useState(0);
  const connected = getStatus();

  const handleConnect = useCallback(() => {
    const newSubscription = connect().subscribe((value) => {
      const parsed = value.split(",");
      if (Array.isArray(parsed)) {
        setCurrentValue(parsed);
      }
    });
    setSubscription(newSubscription);

    // Пример использования
    const counterObj = createCounterObservable();
    const newSubscription2 = counterObj.subscribe({
      next: (value) => {
        connected && setSeconds((v) => v + 1);
      },
    });

    setCounterSub(newSubscription2);
  }, [connected]);

  useLayoutEffect(() => {
    if (window) {
      window?.localStorage.setItem("counterValue", `${timeStart}`);
    }
  }, [timeStart]);

  const handleDisconnect = useCallback(() => {
    disconnect();
    subscription?.unsubscribe();
    setSubscription(undefined);
    counterSub?.unsubscribe();
    setCounterSub(undefined);
  }, [subscription, counterSub]);

  useEffect(() => {
    if (currentValue !== undefined) {
      setTrainingData((prevData) =>
        prevData.length >= 20
          ? [...prevData.slice(1), currentValue]
          : [...prevData, currentValue]
      );
    }
  }, [currentValue]);

  const newTheme = createTheme({ palette: { mode: "dark" } });
  return (
    <ThemeProvider theme={newTheme}>
      <div className={styles.layout}>
        <div className={`${styles.column} ${styles.columnLeft}`}>
          <div className={styles.navigation}>
          </div>
          <div className={styles.title} style={{ width: "100%" }}>
            Модеста мониторинг
          </div>
          <div style={{ marginTop: "30px" }}></div>
          <div className={styles.container_buttons}>
            <h1 className={styles.secondary_title}>Управление Bluetooth</h1>
            {!connected ? (
              <h1 className={styles.status}>
                <BluetoothDisabledRoundedIcon />
                <span>Отключено</span>
              </h1>
            ) : (
              <h1 className={styles.status}>
                <BluetoothRoundedIcon />
                <span>Подключено</span>
              </h1>
            )}
            <div className={styles.buttons}>
              <Button
                variant="contained"
                style={{ backgroundColor: "#DCE359" }}
                onClick={handleConnect}
              >
                Подключить
              </Button>
              <Button
                variant="outlined"
                style={{ borderColor: "#DCE359", color: "#DCE359" }}
                onClick={handleDisconnect}
              >
                Отключить
              </Button>
            </div>
          </div>
          <div style={{ marginTop: "30px" }}></div>
          <h2 className={styles.menu_link}>
            <span>Комплектация</span>
            <Tooltip title="Функционал недоступен, так как находится в разработке">
              <IconButton>
                <InfoRoundedIcon />
              </IconButton>
            </Tooltip>
          </h2>
          <h2 className={styles.menu_link}>
            <span>Ремонт </span>
            <Tooltip title="Функционал недоступен, так как находится в разработке">
              <IconButton>
                <InfoRoundedIcon />
              </IconButton>
            </Tooltip>
          </h2>
          <h2 className={styles.menu_link}>
            <span>Прогресс </span>
            <Tooltip title="Функционал недоступен, так как находится в разработке">
              <IconButton>
                <InfoRoundedIcon />
              </IconButton>
            </Tooltip>
          </h2>
          <h2 className={styles.menu_link}>
            <span>Рейтинг </span>
            <Tooltip title="Функционал недоступен, так как находится в разработке">
              <IconButton>
                <InfoRoundedIcon />
              </IconButton>
            </Tooltip>
          </h2>
          <h2 className={styles.menu_link}>
            <span>Задания </span>
            <Tooltip title="Функционал недоступен, так как находится в разработке">
              <IconButton>
                <InfoRoundedIcon />
              </IconButton>
            </Tooltip>
          </h2>
        </div>
        <div className={`${styles.column} ${styles.columnCenter}`}>
          <div className={styles.title} style={{ width: "100%" }}>
            Уровень активности
          </div>

          <div className={styles.charts}>
            <ChartComponent
              title="Ось X"
              data={trainingData.map((tr) => tr[0])}
            />
            <ChartComponent
              title="Ось Y"
              data={trainingData.map((tr) => tr[1])}
            />
            <ChartComponent
              title="Ось Z"
              data={trainingData.map((tr) => tr[2])}
            />

            <div className={styles.container_chart_part}>
              <h1 className={styles.secondary_title}>Заряд </h1>
              <Gauge
                {...{
                  width: 200,
                  height: 200,
                  value: connected ? 87 : 0,
                }}
                title={"Заряд"}
                cornerRadius="50%"
                text={({ value, valueMax }) => `${value}%`}
                sx={(theme) => ({
                  [`& .${gaugeClasses.valueText}`]: {
                    fontSize: 40,
                  },
                  [`& .${gaugeClasses.valueArc}`]: {
                    fill: "#DCE359",
                  },
                  [`& .${gaugeClasses.referenceArc}`]: {
                    fill: theme.palette.text.disabled,
                  },
                })}
              />
            </div>

            <div className={styles.container_chart_part}>
              <h1 className={styles.secondary_title}>
                Общее время использования
              </h1>
              <h1 className={styles.title}>
                {connected ? formatSeconds(timeStart ?? 0) : "-"}
              </h1>
            </div>
          </div>
          <div
            className={styles.title}
            style={{ marginTop: "30px", width: "100%" }}
          >
            Расход комплектующих
          </div>
          <div className={styles.charts_2}>
            <div className={styles.container_chart_2}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h1 className={styles.secondary_title}>Втулки</h1>
                <Tooltip title="Расход отображается корректно только при использовании протеза с блютузом">
                  <IconButton>
                    <InfoRoundedIcon />
                  </IconButton>
                </Tooltip>
              </div>
              <CompositionExample val={connected ? 93 : 0} />
            </div>

            <div className={styles.container_chart_2}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h1 className={styles.secondary_title}>Пружины</h1>
                <Tooltip title="Расход отображается корректно только при использовании протеза с блютузом">
                  <IconButton>
                    <InfoRoundedIcon />
                  </IconButton>
                </Tooltip>
              </div>
              <CompositionExample val={connected ? 98 : 0} />
            </div>

            <div className={styles.container_chart_2}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h1 className={styles.secondary_title}>Наконечник</h1>
                <Tooltip title="Расход отображается корректно только при использовании протеза с блютузом">
                  <IconButton>
                    <InfoRoundedIcon />
                  </IconButton>
                </Tooltip>
              </div>
              <CompositionExample val={connected ? 85 : 0} />
            </div>

            <div className={styles.container_chart_2}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h1 className={styles.secondary_title}>Нити</h1>
                <Tooltip title="Расход отображается корректно только при использовании протеза с блютузом">
                  <IconButton>
                    <InfoRoundedIcon />
                  </IconButton>
                </Tooltip>
              </div>
              <CompositionExample val={connected ? 97 : 0} />
            </div>
          </div>
          <p
            style={{ marginTop: 30, textAlign: "left" }}
            className={styles.secondary_title}
          >
            При достижении износа детали в 10%, настоятельно рекомендуем
            обратиться в наш сервисный центр за заменой.
          </p>
        </div>
        <div className={`${styles.column} ${styles.columnRight}`}>
          <Profile connected={connected} />
          <Button variant="contained" style={{ backgroundColor: "#DCE359" }}>
            <a
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              href="https://t.me/laba2kvadratachat"
            >
              <ContactSupportIcon /> Техподдержка
            </a>
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
};
// interface ChartComponentProps {
//   title: string;
//   data: number[];
// }
const ChartComponent = ({ title, data }) => (
  <div className={styles.container_chart}>
    <h1 className={styles.secondary_title}>{title}</h1>
    <LineChart
      margin={{
        left: 40,
        right: 10,
        top: 0,
        bottom: 20,
      }}
      series={[
        {
          data: data,
          showMark: false,
          disableHighlight: true,
          connectNulls: true,
          color: "#DCE359",
        },
      ]}
    />
  </div>
);

const Profile = ({ connected }) => (
  <div>
    <div className={styles.person}>
      <div className={styles["person__avatar-container"]}>
        <img
          alt="Портрет члена команды"
          className={styles["person__avatar"]}
          src={
            connected
              ? avatar
              : "https://raw.githubusercontent.com/Mikescher/CS_GO_Avatars/master/question%20mark.png"
          }
        />
        <p itemProp="name" className={styles["person__name"]}>
          {connected ? "Ксения Ситоленко" : "-"}
        </p>
      </div>
    </div>

    <table className={styles.table}>
      <tr>
        <td>Дата рождения</td>
        <td className={styles["person__profession"]}>
          {connected ? "22.02.1994" : "-"}
        </td>
      </tr>
      <tr>
        <td>Телефон</td>
        <td>
          <p className={styles["person__profession"]}>
            <a href="tel:+79991202332">
              {connected ? "+7 999 120 23 32" : "-"}
            </a>
          </p>
        </td>
      </tr>
      <tr>
        <td>E-mail</td>
        <td>
          <p className={styles["person__profession"]}>
            <a href="mailto:test@mail.ru">{connected ? "test@mail.ru" : "-"}</a>
          </p>
        </td>
      </tr>
      <tr>
        <td>Статус</td>
        <td>
          <p className={styles["person__profession"]}>
            {connected ? "Новичок (Меньше 100 часов использования)" : "-"}
          </p>
        </td>
      </tr>
      <tr>
        <td>Идентификатор</td>
        <td>
          <p className={styles["person__profession"]}>
            {connected ? "XF-434" : "-"}
          </p>
        </td>
      </tr>
    </table>
  </div>
);

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    // No value to display
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="red" />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="red"
        strokeWidth={3}
      />
    </g>
  );
}

function CompositionExample({ val }) {
  return (
    <Gauge
      value={val}
      startAngle={-110}
      endAngle={110}
      sx={{
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 30,
          transform: "translate(0px, 0px)",
        },
        [`& .${gaugeClasses.valueArc}`]: {
          fill: "#DCE359",
        },
      }}
      text={({ value, valueMax }) => `${value}%`}
    />
  );
}
