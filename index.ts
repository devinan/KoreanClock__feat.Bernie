const getTime = (): void => {
  const time = new Date();
  const hour = time.getHours();
  const min = time.getMinutes();
  const ampm = hour >= 12 ? "pm" : "am";
  console.log(hour, min, ampm);
  /*
    아이디로 html Element 가져오기
    클래스로 표시, 비표시 구분 -> class = "now" -> 빛
    조건문1 오후 오전 나누기
    오후 오전 따로 시간 표시 함수
        정오, 자정 함수
    분 표시 함수
  */
};

const init = () => {
  setInterval(getTime, 1000);
};

init();
