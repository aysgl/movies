const seatContainer = document.querySelector(".seat-container")
const ticket = document.querySelector(".ticket");
const ticketSelect = document.querySelector("#ticked-select")
const ticketCount = document.querySelector("#ticket-count")
const ticketAmount = document.querySelector("#ticket-amount")
const ticketSeat = document.querySelector("#ticket-seat")
const seats = document.querySelectorAll(".seat:not(.reserved)")

debugger;
let selectedSeatIndex

const createIndex = () => {
    const selectedSeats = seatContainer.querySelectorAll(".seat.selected")

    let selectedSeatsArray = []
    selectedSeats.forEach(element => {
        selectedSeatsArray.push(element.innerText)
    });

    selectedSeatIndex = selectedSeatsArray.filter((item, index) => {
        return selectedSeatsArray.indexOf(item) === index;
    });
}


let selectedSeatCount

const calculateTotal = () => {
    createIndex()

    selectedSeatCount = document.querySelectorAll(".seat.selected").length
    ticketCount.innerText = selectedSeatCount
    ticketSeat.innerText = selectedSeatIndex
    ticketAmount.innerText = selectedSeatCount * ticketSelect.value;

    if (selectedSeatCount > 0) {
        ticket.style.display = "block"
    } else {
        ticket.style.display = "none"
    }
}

seatContainer.addEventListener("click", (e) => {
    const clickedSeat = e.target
    if (clickedSeat.classList.contains("seat") && !clickedSeat.classList.contains("reserved") && !clickedSeat.classList.contains("full")) {
        if (selectedSeatCount >= 4) {
            alert("En fazla 4 bilet alabilirsiniz")
            clickedSeat.classList.remove("selected")
        } else {
            clickedSeat.classList.toggle("selected")

        }
    }
    calculateTotal()
})

ticketSelect.addEventListener("change", () => {
    calculateTotal()
})