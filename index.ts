const widget = document.getElementsByClassName("widget");

let htmlElements = [];
const LIGHT = "on";

const amClock = (time: object) => {};
const pmClock = (time: object) => {
  const minus12 = time["hour"] - 12;
  let static: string;
  if (minus12 < 10) {
    static = `0${minus12}`;
  } else {
    static = String(minus12);
  }
  const hourCase = static.split("");

  htmlElements[5].classList = LIGHT;
  if (hourCase[0] === "1" || static === "00") {
    htmlElements[14].classList = LIGHT;
  }
  switch (hourCase[1]) {
    case "0":
      if (hourCase[0] === "0") {
        htmlElements[26].classList = LIGHT;
      }
      break;
    case "1":
      if (hourCase[0] === "0") {
        htmlElements[0].classList = LIGHT;
      } else {
        htmlElements[20].classList = LIGHT;
      }
      break;
    case "2":
      htmlElements[6].classList = LIGHT;
      break;
    case "3":
      htmlElements[12].classList = LIGHT;
      break;
    case "4":
      htmlElements[18].classList = LIGHT;
      break;
    case "5":
      htmlElements[24].classList = LIGHT;
      htmlElements[30].classList = LIGHT;
      break;
    case "6":
      htmlElements[1].classList = LIGHT;
      htmlElements[7].classList = LIGHT;
      break;
    case "7":
      htmlElements[13].classList = LIGHT;
      htmlElements[19].classList = LIGHT;
      break;
    case "8":
      htmlElements[25].classList = LIGHT;
      htmlElements[31].classList = LIGHT;
      break;
    case "9":
      htmlElements[2].classList = LIGHT;
      htmlElements[8].classList = LIGHT;
      break;
  }
  console.log(hourCase);
};

const getTime = (): object => {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  const min = currentTime.getMinutes();
  const ampm = hour >= 12 ? "pm" : "am";
  const time = { hour, min, ampm };
  return time;
};

const getElements = (time: object): void => {
  for (let a = 0; a < 6; a++) {
    for (let i = a; i < 41; i += 7) {
      htmlElements.push(widget[0].children[i]);
    }
  }
  htmlElements[3].classList = LIGHT;
  htmlElements[32].classList = LIGHT;
  htmlElements[35].classList = LIGHT;
  if (time["ampm"] === "am") {
    amClock(time);
  } else {
    pmClock(time);
  }
  console.log(htmlElements);
};

const init = () => {
  //const currentTime = setInterval(getTime, 1000);
  const currentTime = getTime();
  getElements(currentTime);
};

init();
