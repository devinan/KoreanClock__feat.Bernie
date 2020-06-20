const widgetDefault = document.getElementsByClassName("widgetDefault");
const widgetMilitary = document.getElementsByClassName("widgetMilitary");

let defaultElements = [];
let militaryElements = [];
let azeElements = [];
const LIGHT = "on";

const setDefaultHour = (time: object): void => {
  let timeset12: number;
  let static: string;

  defaultElements[17].classList.add(LIGHT);
  defaultElements[18].classList.add(LIGHT);
  defaultElements[35].classList.add(LIGHT);

  if (time["ampm"] === "am") {
    defaultElements[24].classList.add(LIGHT);
  } else {
    defaultElements[30].classList.add(LIGHT);
  }

  if (time["ampm"] === "pm") {
    timeset12 = time["hour"] - 12;
  } else if (time["ampm"] === "am") {
    timeset12 = time["hour"];
  }

  if (timeset12 < 10) {
    static = `0${timeset12}`;
  } else {
    static = String(timeset12);
  }
  const hourCase = static.split("");

  if (hourCase[0] === "1" || static === "00") {
    defaultElements[14].classList.add(LIGHT);
  }
  switch (hourCase[1]) {
    case "0":
      if (hourCase[0] === "0") {
        defaultElements[16].classList.add(LIGHT);
      }
      break;
    case "1":
      if (hourCase[0] === "0") {
        defaultElements[0].classList.add(LIGHT);
      } else {
        defaultElements[15].classList.add(LIGHT);
      }
      break;
    case "2":
      defaultElements[1].classList.add(LIGHT);
      break;
    case "3":
      defaultElements[2].classList.add(LIGHT);
      break;
    case "4":
      defaultElements[3].classList.add(LIGHT);
      break;
    case "5":
      defaultElements[4].classList.add(LIGHT);
      defaultElements[5].classList.add(LIGHT);
      break;
    case "6":
      defaultElements[6].classList.add(LIGHT);
      defaultElements[7].classList.add(LIGHT);
      break;
    case "7":
      defaultElements[8].classList.add(LIGHT);
      defaultElements[9].classList.add(LIGHT);
      break;
    case "8":
      defaultElements[10].classList.add(LIGHT);
      defaultElements[11].classList.add(LIGHT);
      break;
    case "9":
      defaultElements[12].classList.add(LIGHT);
      defaultElements[13].classList.add(LIGHT);
      break;
  }
};

const setMinute = (time: object): void => {
  const minute = time["min"];
  let static: string;

  if (minute < 10) {
    static = `0${minute}`;
  } else {
    static = String(minute);
  }
  const minuteCase = static.split("");

  //teststart
  //testend

  if (minuteCase[0] === "0" && minuteCase[1] === "0") {
    defaultElements[35].classList.remove(LIGHT);
    militaryElements[29].classList.remove(LIGHT);
  }

  defaultElements[23].classList.add(LIGHT);
  militaryElements[17].classList.add(LIGHT);

  switch (minuteCase[0]) {
    case "0":
      defaultElements[23].classList.remove(LIGHT);
      militaryElements[17].classList.remove(LIGHT);
      break;
    case "2":
      defaultElements[19].classList.add(LIGHT);
      militaryElements[13].classList.add(LIGHT);
      break;
    case "3":
      defaultElements[20].classList.add(LIGHT);
      militaryElements[14].classList.add(LIGHT);
      break;
    case "4":
      defaultElements[21].classList.add(LIGHT);
      militaryElements[15].classList.add(LIGHT);
      break;
    case "5":
      defaultElements[22].classList.add(LIGHT);
      militaryElements[16].classList.add(LIGHT);
      break;
  }

  switch (minuteCase[1]) {
    case "1":
      defaultElements[25].classList.add(LIGHT);
      militaryElements[19].classList.add(LIGHT);
      break;
    case "2":
      defaultElements[26].classList.add(LIGHT);
      militaryElements[20].classList.add(LIGHT);
      break;
    case "3":
      defaultElements[27].classList.add(LIGHT);
      militaryElements[21].classList.add(LIGHT);
      break;
    case "4":
      defaultElements[28].classList.add(LIGHT);
      militaryElements[22].classList.add(LIGHT);
      break;
    case "5":
      defaultElements[29].classList.add(LIGHT);
      militaryElements[23].classList.add(LIGHT);
      break;
    case "6":
      defaultElements[31].classList.add(LIGHT);
      militaryElements[25].classList.add(LIGHT);
      break;
    case "7":
      defaultElements[32].classList.add(LIGHT);
      militaryElements[26].classList.add(LIGHT);
      break;
    case "8":
      defaultElements[33].classList.add(LIGHT);
      militaryElements[27].classList.add(LIGHT);
      break;
    case "9":
      defaultElements[34].classList.add(LIGHT);
      militaryElements[28].classList.add(LIGHT);
      break;
  }
};

const setMilitaryHour = (time: object): void => {
  const hour = time["hour"];
  let static: string;

  militaryElements[12].classList.add(LIGHT);
  militaryElements[29].classList.add(LIGHT);
  militaryElements[18].classList.add(LIGHT);
  militaryElements[24].classList.add(LIGHT);

  if (hour < 10) {
    static = `0${hour}`;
  } else {
    static = String(hour);
  }
  const hourCase = static.split("");

  switch (hourCase[0]) {
    case "0":
      militaryElements[0].classList.add(LIGHT);
      break;
    case "1":
      militaryElements[2].classList.add(LIGHT);
      break;
    case "2":
      militaryElements[1].classList.add(LIGHT);
      militaryElements[2].classList.add(LIGHT);
  }

  switch (hourCase[1]) {
    case "1":
      militaryElements[3].classList.add(LIGHT);
      break;
    case "2":
      militaryElements[4].classList.add(LIGHT);
      break;
    case "3":
      militaryElements[5].classList.add(LIGHT);
      break;
    case "4":
      militaryElements[6].classList.add(LIGHT);
      break;
    case "5":
      militaryElements[7].classList.add(LIGHT);
      break;
    case "6":
      militaryElements[8].classList.add(LIGHT);
      break;
    case "7":
      militaryElements[9].classList.add(LIGHT);
      break;
    case "8":
      militaryElements[10].classList.add(LIGHT);
      break;
    case "9":
      militaryElements[11].classList.add(LIGHT);
      break;
  }
};

const getTime = (): object => {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  const min = currentTime.getMinutes();
  const ampm = hour >= 12 ? "pm" : "am";
  const time = { hour, min, ampm };
  return time;
};

const getElements = (): void => {
  defaultElements = [];
  militaryElements = [];
  azeElements = [];

  for (let a = 0; a < 6; a++) {
    for (let i = a; i < 41; i += 7) {
      defaultElements.push(widgetDefault[0].children[i]);
      widgetDefault[0].children[i].classList.remove(LIGHT);
    }
  }
  defaultElements.sort((a, b) => {
    return a.classList[0] - b.classList[0];
  });

  //console.log(widgetMilitary[0].children);

  for (let a = 0; a < 6; a++) {
    for (let i = a; i < 35; i += 7) {
      militaryElements.push(widgetMilitary[0].children[i]);
      widgetMilitary[0].children[i].classList.remove(LIGHT);
    }
  }
  militaryElements.sort((a, b) => {
    return a.classList[0] - b.classList[0];
  });

  console.log(defaultElements);
  console.log(militaryElements);
  //console.log(azeElements);
};

const init = (): void => {
  const time = getTime();
  getElements();
  setDefaultHour(time);
  setMilitaryHour(time);
  setMinute(time);
};

init();
setInterval(init, 10000);
