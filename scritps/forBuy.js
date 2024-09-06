var modal = document.getElementById("modal");
var buyTicketsBtns = document.getElementsByClassName("buyTicketsBtn");
var closeBtn = document.getElementsByClassName("close")[0];

for (var i = 0; i < buyTicketsBtns.length; i++) {
    buyTicketsBtns[i].onclick = function() {
        modal.style.opacity = '1';
        modal.style.visibility = 'visible';
    }
}

closeBtn.onclick = function() {
    modal.style.opacity = '0';
    modal.style.visibility = 'hidden';
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.opacity = '0';
      modal.style.visibility = 'hidden';
    }
}
