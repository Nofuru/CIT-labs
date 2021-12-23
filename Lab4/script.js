const container = document.querySelector(".container");
const preloader = document.querySelector(".preloader");

const sex = {
  male: "мужской",
  female: "женский",
};

const getData = async () => {
  const repsonse = await fetch("https://randomuser.me/api/?results=5", {
    method: "GET",
  });

  const data = await repsonse.json();

  preloader.style.display = "none";

  data.results.forEach((el) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.innerHTML = `
                <div class="card__head">
                <h2 class="card__name">${el.name.title} ${el.name.first} ${
      el.name.last
    }</h2>
                <img src=${el.picture.medium} alt="">
                </div>
                <div class="card__body">
                    <p class="card__text">Пол: <span class="card__subtext">${
                      el.gender === "male" ? sex.male : sex.female
                    }</span></p>
                    <p class="card__text">Адрес: <span class="card__subtext">${
                      el.location.country
                    } ${el.location.state} ${el.location.city} ${
      el.location.street.name
    }, ${el.location.street.number}</span></p>
                    <p class="card__text">Email: <span class="card__subtext">${
                      el.email
                    }</span></p>
                    <p class="card__text">Телефон: <span class="card__subtext">${
                      el.phone
                    }</span></p>
                    <p class="card__text">Дата рождения: <span class="card__subtext">${el.dob.date
                      .substring(0, 10)
                      .split("-")
                      .reverse()
                      .join("/")}</span></p>
                    <p class="card__text">Возраст: <span class="card__subtext">${
                      el.dob.age
                    }</span></p>
                    </div>
                    `;

    container.appendChild(card);
  });
};

window.onload = () => getData();
