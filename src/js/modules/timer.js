function timer() {
  const countTo = "20 March 2024";
  const daysEl = document.querySelector("#days"),
    hoursEl = document.querySelector("#hours"),
    minetsEl = document.querySelector("#minets"),
    secondsEl = document.querySelector("#seconds");

  const c = setInterval(() => {
    const endDate = new Date(countTo);
    const dateNow = new Date();
    const totalSeconds = (endDate - dateNow) / 1000; //sec

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const min = Math.floor(totalSeconds / 60) % 60;
    const sec = Math.floor(totalSeconds) % 60;

    daysEl.innerText = formatZero(days);
    hoursEl.innerText = formatZero(hours);
    minetsEl.innerText = formatZero(min);
    secondsEl.innerText = formatZero(sec);

    if (totalSeconds < 0) {
      clearInterval(c);
      daysEl.innerText = "0";
      hoursEl.innerText = "0";
      minetsEl.innerText = "0";
      secondsEl.innerText = "0";
    }
  }, 1000);

  function formatZero(t) {
    return t < 10 ? `0${t}` : t;
  }
}

export default timer;
