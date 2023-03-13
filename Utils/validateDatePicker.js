function validateDatePicker() {
    let departureDay = document.getElementById("departure");
    let returnDay = document.getElementById("return");
    
    if(new Date(departureDay.value) > new Date(returnDay.value)) {
        document.getElementById("popup_wrapper-validate_date").style.display = "flex";
    } else {
        window.location.href = "./Pages/booking.html";
    }
}
function closeValidateDatePopup() {
    document.getElementById("popup_wrapper-validate_date").style.display = "none";
}