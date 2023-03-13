var selectedTicket = null;

function viewInfor(index) {
    if (selectedTicket === null) {
        selectedTicket = document.getElementsByClassName("ticket_detail")[index];
        selectedTicket.style.display = "flex"
    } else {
        selectedTicket.style.display = "none";
        selectedTicket = null;
    }
}