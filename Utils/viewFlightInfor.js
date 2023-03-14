var selectedTicket = null;
var isInforOpen = false;

function viewInfor(index) {
    let currentTicket = document.getElementsByClassName("ticket_infor_detail")[index];
    currentTicket.style.display = "none";
    selectedTicket = document.getElementsByClassName("ticket_detail")[index];
    selectedTicket.style.display = "flex";
}

function viewFlightInfor(index) {
    let currentTicket = document.getElementsByClassName("ticket_detail")[index];
    currentTicket.style.display = "none";
    selectedTicket = document.getElementsByClassName("ticket_infor_detail")[index];
    selectedTicket.style.display = "flex";
}

window.addEventListener("click", (e) => {
    if ((e.target).contains(selectedTicket)){
        selectedTicket.style.display = "none";
    }
})