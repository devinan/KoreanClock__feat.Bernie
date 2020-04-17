const widget = document.getElementsByClassName("widget");

// 6 13 20 27 34
const getTime = (): void => {
  const time = new Date();
  const hour = time.getHours();
  const min = time.getMinutes();
  const ampm = hour >= 12 ? "pm" : "am";
  console.log(hour, min, ampm);
  let htmlElements = [];
  for (let a = 0; a < 6; a++) {
    for (let i = a; i < 41; i += 7) {
      htmlElements.push(widget[0].children[i]);
    }
  }
  console.log(htmlElements);
  /*
    아이디로 html Element 가져오기 (o)
      근데 너무 코드가 조잡해서 마음에 안듦....ㅠㅠ
    클래스로 표시, 비표시 구분 -> class = "now" -> 빛
    조건문1 오후 오전 나누기
    오후 오전 따로 시간 표시 함수
        정오, 자정 함수
    분 표시 함수
  */
};

const init = () => {
  //setInterval(getTime, 1000);
  getTime();
};

init();
