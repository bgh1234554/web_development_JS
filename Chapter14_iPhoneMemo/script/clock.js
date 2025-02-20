function clockRun(){
  const phoneClock = document.querySelector('.phone-clock');
  //내장 함수임

  setInterval(() => {
    const now = new Date();
    const nowHours = now.getHours();
    //0을 표시하기 위해.
    const nowMinutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
    const nowClockText = `${nowHours}:${nowMinutes}`;
    //1초마다 HTML 내용을 업데이트하겠다.
    //크롬 개발자도구로 확인하면 계속 반짝거린다.
    phoneClock.innerHTML = nowClockText;
  },1000);
}

clockRun();