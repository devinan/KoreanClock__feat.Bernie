const widget = document.getElementsByClassName("widget");

let htmlElements = [];
const LIGHT = "on";

const setHour = (time: object): void => {
  let timeset12: number;
  let static: string;

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
    htmlElements[14].classList.add(LIGHT);
  }
  switch (hourCase[1]) {
    case "0":
      if (hourCase[0] === "0") {
        htmlElements[16].classList.add(LIGHT);
      }
      break;
    case "1":
      if (hourCase[0] === "0") {
        htmlElements[0].classList.add(LIGHT);
      } else {
        htmlElements[15].classList.add(LIGHT);
      }
      break;
    case "2":
      htmlElements[1].classList.add(LIGHT);
      break;
    case "3":
      htmlElements[2].classList.add(LIGHT);
      break;
    case "4":
      htmlElements[3].classList.add(LIGHT);
      break;
    case "5":
      htmlElements[4].classList.add(LIGHT);
      htmlElements[5].classList.add(LIGHT);
      break;
    case "6":
      htmlElements[6].classList.add(LIGHT);
      htmlElements[7].classList.add(LIGHT);
      break;
    case "7":
      htmlElements[8].classList.add(LIGHT);
      htmlElements[9].classList.add(LIGHT);
      break;
    case "8":
      htmlElements[10].classList.add(LIGHT);
      htmlElements[11].classList.add(LIGHT);
      break;
    case "9":
      htmlElements[12].classList.add(LIGHT);
      htmlElements[13].classList.add(LIGHT);
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
    htmlElements[35].classList.remove(LIGHT);
  }

  htmlElements[23].classList.add(LIGHT);
  switch (minuteCase[0]) {
    case "0":
      htmlElements[23].classList.remove(LIGHT);
      break;
    case "2":
      htmlElements[19].classList.add(LIGHT);
      break;
    case "3":
      htmlElements[20].classList.add(LIGHT);
      break;
    case "4":
      htmlElements[21].classList.add(LIGHT);
      break;
    case "5":
      htmlElements[22].classList.add(LIGHT);
      break;
  }

  switch (minuteCase[1]) {
    case "1":
      htmlElements[25].classList.add(LIGHT);
      break;
    case "2":
      htmlElements[26].classList.add(LIGHT);
      break;
    case "3":
      htmlElements[27].classList.add(LIGHT);
      break;
    case "4":
      htmlElements[28].classList.add(LIGHT);
      break;
    case "5":
      htmlElements[29].classList.add(LIGHT);
      break;
    case "6":
      htmlElements[31].classList.add(LIGHT);
      break;
    case "7":
      htmlElements[32].classList.add(LIGHT);
      break;
    case "8":
      htmlElements[33].classList.add(LIGHT);
      break;
    case "9":
      htmlElements[34].classList.add(LIGHT);
      break;
  }
};

const getTime = (): void => {
  htmlElements = [];
  const currentTime = new Date();
  const hour = currentTime.getHours();
  const min = currentTime.getMinutes();
  const ampm = hour >= 12 ? "pm" : "am";
  const time = { hour, min, ampm };
  getElements(time);
};

const getElements = (time: object): void => {
  for (let a = 0; a < 6; a++) {
    for (let i = a; i < 41; i += 7) {
      htmlElements.push(widget[0].children[i]);
      widget[0].children[i].classList.remove(LIGHT);
    }
  }
  htmlElements.sort((a, b) => {
    return a.classList[0] - b.classList[0];
  });

  //console.log(htmlElements);

  htmlElements[17].classList.add(LIGHT);
  htmlElements[18].classList.add(LIGHT);
  htmlElements[35].classList.add(LIGHT);

  if (time["ampm"] === "am") {
    htmlElements[24].classList.add(LIGHT);
  } else {
    htmlElements[30].classList.add(LIGHT);
  }
  setHour(time);
  setMinute(time);
  setTimeout(getTime, 10000);
};

getTime();
