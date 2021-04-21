// Russian for "WELCOME TO THE PRESIDENTIAL ELECTION. PLEASE VOTE WISELY."
// onload = setTimeout(() => {
//     alert(`ДОБРО ПОЖАЛОВАТЬ НА ВЫБОРЫ ПРЕЗИДЕНТА. ПОЖАЛУЙСТА, ГОЛОСОВАТЬ МУДРО`);
// }, 200);

// Background color changer mouse event
function bgChange(bg) {
    document.body.style.background = bg;
};

// Sends an alert when either button is clicked
function btnAlert() {
    document.getElementById('govBtn').addEventListener("click", function () {
        alert("CHOOSE WISELY");
    })
};

// Context menu event
const noContext = document.getElementById('noContextMenu');
noContext.addEventListener('contextmenu', e => {
    e.preventDefault();
});
