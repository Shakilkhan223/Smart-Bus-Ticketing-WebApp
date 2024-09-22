const seatList = document.getElementById("seat-list");
const totalSeat = document.getElementById("total-seats");
const noSeat = document.getElementById("no-seat");
const avaiableSeat = document.getElementById("avaiable-seats");

let selectedSeat = [];

function handleSelectSeat(event) {
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
}
