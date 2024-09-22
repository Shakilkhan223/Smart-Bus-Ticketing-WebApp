const seatList = document.getElementById("seat-list");
const totalSeat = document.getElementById("total-seats");
const noSeat = document.getElementById("no-seat");
const avaiableSeat = document.getElementById("avaiable-seats");
const totalPrice = document.getElementById("total-price");
const cuponInput = document.getElementById("cupon-input");
const cuponBtn = document.getElementById("cupon-btn");

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
