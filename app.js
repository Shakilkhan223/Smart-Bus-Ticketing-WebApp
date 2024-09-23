const seatList = document.getElementById("seat-list");
const totalSeat = document.getElementById("total-seats");
const noSeat = document.getElementById("no-seat");
const avaiableSeat = document.getElementById("avaiable-seats");
const totalPrice = document.getElementById("total-price");
const cuponInput = document.getElementById("cupon-input");
const cuponBtn = document.getElementById("cupon-btn");
const grandTotal = document.getElementById("grand-total");
const nextBtn = document.getElementById("next-btn");
const phoneNumber = document.getElementById("phone-number");

let selectedSeat = [];

function handleSelectSeat(event) {
  const value = event.innerText;

  if (selectedSeat.includes(value)) {
    return alert("Seat Already Booked");
  } else if (selectedSeat.length < 4) {
    event.classList.add("bg-primary", "text-white");

    selectedSeat.push(event.innerText);
    totalSeat.innerText = selectedSeat.length;

    avaiableSeat.innerText = parseInt(avaiableSeat.innerText) - 1;

    if (selectedSeat.length > 0) {
      noSeat.classList.add("hidden");
    }

    seatList.innerHTML += `
  <li
  class="flex justify-between items-center text-base text-[#030712]/70 my-3"
  >
  <p>${event.innerText}</p>
  <p>Economy</p>
  <p>550</p>
  </li>
  `;

    let total = selectedSeat.length * 550;
    totalPrice.innerText = total.toFixed(2);

    if (selectedSeat.length > 3) {
      cuponInput.removeAttribute("disabled");
      cuponBtn.removeAttribute("disabled");
    }
  } else {
    return alert("Maximun Seat is Booked");
  }
}

// cupon button active
document.getElementById("cupon-btn").addEventListener("click", function () {
  const cuponValue = cuponInput.value;
  const totalPriceValue = parseInt(totalPrice.innerText);
  if (cuponValue === "NEW50") {
    const newTotalPrice = totalPriceValue - totalPriceValue * 0.15;
    grandTotal.innerText = newTotalPrice.toFixed(2);
    document.getElementById("cupon-form").innerHTML = `
    <div class="flex justify-between items-center">
                <p class="text-lg font-medium">Discount Price</p>
                <p class="text-lg font-medium">
                 - BDT <span>${totalPriceValue * 0.15}</span>
                </p>
              </div>
    `;
  } else if (cuponValue === "Couple 20") {
    const newTotalPrice = totalPriceValue - totalPriceValue * 0.2;
    grandTotal.innerText = newTotalPrice.toFixed(2);
    document.getElementById("cupon-form").innerHTML = `
             <div class="flex justify-between items-center">
                <p class="text-lg font-medium">Discount Price</p>
                <p class="text-lg font-medium">
                 - BDT <span>${totalPriceValue * 0.2}</span>
                </p>
              </div>
    `;
  } else {
    alert("Invalid Cupon");
  }
});

phoneNumber.addEventListener("keyup", function (event) {
  const value = event.target.value;
  if (value.length === 11 && selectedSeat.length > 0) {
    nextBtn.removeAttribute("disabled");
  } else {
    nextBtn.setAttribute("disabled", true);
  }
});

document.getElementById("btn-continue").addEventListener("click", function () {
  window.location.reload();
});
