const iconImgs = [
  "./sunny-icon.png",
  "./rainy-icon.png",
  "./snowy-icon.jpg",
  "./cloudy-icon.png",
];

const weathers = [
  {
    city: "New-York",
    temperature: 28,
    sky: "Sunny",
    icon: 0,
    day: "day",
    time: new Date().toLocaleTimeString("en-US", { timeZone:'America/New_York' }),
  },
  {
    city: "London",
    temperature: 18,
    sky: "Cloudy",
    icon: 3,
    day: "night",
    time: new Date().toLocaleTimeString("en-GB", {timeZone:'Europe/London'}),
  },
  {
    city: "Tokyo",
    temperature: 30,
    sky: "Rainy",
    icon: 0,
    day: "day",
    time: new Date().toLocaleTimeString("ja-JP", {timeZone:'Asia/Tokyo'}),
  },
  {
    city: "Sydney",
    temperature: 22,
    sky: "Partly Cloudy",
    icon: 3,
    day: "day",
    time: new Date().toLocaleTimeString("en-AU", {timeZone: 'Australia/Sydney'}),
  },
  {
    city: "Paris",
    temperature: 25,
    sky: "Clear",
    icon: 2,
    day: "night",
    time: new Date().toLocaleTimeString("fr-FR",{timeZone:'Europe/Paris'}),
  },
];

const dayNight = (day) => {
  if (day === "day") {
    return "./day-bck.png";
  } else {
    return "./night-bck.jpg";
  }
};

const CardComponent = (item) => {
  const { icon, city, temperature, sky, time, day } = item;
  const isItDay = dayNight(day);

  return `<div
        class="loc-city"
        id="loc-city"
        style="background-image:url(${isItDay})"
      >
        <div class="w-loc">
          <div class="location">
            <div class="city">${city}</div>
            <div class="time">${time}</div>
          </div>
          <div class="partly">${sky}</div>
        </div>
        <div class="weather-day">
          <div class="temperature">${temperature}<sup>o</sup></div>
          <div class="weather-icons" >
            <img class="icon" src=${iconImgs[icon]} alt="" />
            <img class="day" src="" alt="" />
          </div>
        </div>
      </div>`;
};

const cards = document.getElementById("cards");

weathers.forEach((item) => {
  cards.innerHTML += CardComponent(item);
});
