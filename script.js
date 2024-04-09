const buyButton = document.querySelector(".buyBtn");
const purchaseForm = document.querySelector(".purchaseForm");
const paymentMethod = document.getElementById("paymentMethod");
const bankCardInput = document.getElementById("bankCard");
const submitButton = document.querySelector(".submitBtn");
const orderInfoContainer = document.querySelector(".orderInfo");

buyButton.addEventListener("click", function () {
  purchaseForm.style.display = "block";
});

paymentMethod.addEventListener("change", function () {
  if (paymentMethod.value === "cash") {
    bankCardInput.style.display = "none";
  } else {
    bankCardInput.style.display = "block";
  }
});

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  const name = document.getElementById("userName").value;
  const userNumber = document.getElementById("userNumber").value;
  const email = document.getElementById("userEmail").value;
  const citySelect = document.getElementById("userCity");
  const city = citySelect.options[citySelect.selectedIndex].text;
  const postOffice = document.getElementById("postOffice").value;
  const amount = document.getElementById("amount").value;
  const paymentMethodValue = paymentMethod.value;
  const bankCardValue = bankCardInput.value;
  const comments = document.getElementById("comments").value;

  if (!name || !city || !postOffice || !amount || !paymentMethodValue) {
    alert("Будь ласка, заповніть усі обов'язкові поля!");
    return;
  }

  const fullNameRegex =
    /^[А-ЯҐЄІЇ][а-яґєії]+ [А-ЯҐЄІЇ][а-яґєії]+ [А-ЯҐЄІЇ][а-яґєії]+$/;

  if (!fullNameRegex.test(name)) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Некоректне ім'я!";
    errorMessage.style.color = "red";
    orderInfoContainer.appendChild(errorMessage);
    orderInfoContainer.style.display = "block";
    return;
  }

  const emailRegex =
    /^(?=.{14,})[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Некоректна електронна адреса!";
    errorMessage.style.color = "red";
    orderInfoContainer.appendChild(errorMessage);
    orderInfoContainer.style.display = "block";
    return;
  }

  const phoneNumberRegex = /^(?:\+?38)?(?:\d{3}\s?){2}\d{2}\s?\d{2}$/;

  if (!phoneNumberRegex.test(userNumber)) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Некоректний номер телефону!";
    errorMessage.style.color = "red";
    orderInfoContainer.appendChild(errorMessage);
    orderInfoContainer.style.display = "block";
    return;
  }

  const orderInfo = `
      <p><strong>Ім'я:</strong> ${name}</p>
      <p><strong>Номер мобільного:</strong> ${userNumber}</p>
      <p><strong>Пошта:</strong> ${email}</p>
      <p><strong>Місто:</strong> ${city}</p>
      <p><strong>Відділення Нової Пошти:</strong> ${postOffice}</p>
      <p><strong>Кількість товару:</strong> ${amount}</p>
      <p><strong>Метод оплати:</strong> ${paymentMethodValue}</p>
      <p><strong>Номер карти:</strong> ${bankCardValue}</p>
      <p><strong>Коментарі:</strong> ${comments}</p>
  `;

  orderInfoContainer.innerHTML = orderInfo;
  orderInfoContainer.style.display = "block";
});
