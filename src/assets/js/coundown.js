/* coundown timer*/
var countDate = new Date("August 31, 2021 00:00:00 ").getTime();

function newYear() {
    let now = new Date().getTime();
    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / day);
    let h = Math.floor((gap % day) / hour);
    let m = Math.floor((gap % hour) / minute);
    let s = Math.floor((gap % minute) / second);

    document.getElementById("day").innerText = d;
    document.getElementById("hour").innerText = h;
    document.getElementById("minute").innerText = m;
    document.getElementById("second").innerText = s;
}

setInterval(function() {
    newYear();
}, 1000);

/*===== TẠO HÀM ALERT=========*/
function sweetAlert(title) {
    const template = ` <div class="sweet-alert">
<i class="fa fa-check sweet-icon"></i>
<p class="sweet-text">${title}</p>
</div>`;

    document.body.insertAdjacentHTML("beforeend", template);
}
/*======== Form Email =========*/

const subscriceform = document.querySelector(".subscrice-form");

subscriceform.addEventListener("submit", function(e) {
    e.preventDefault();
    const inputEmail = this.elements["email"].value.trim();
    const regex =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!inputEmail) {
        sweetAlert("Please enter your email");
        return;
    }
    if (regex.test(inputEmail)) {
        sweetAlert("You have entered the correct email");
    } else {
        sweetAlert("You entered the wrong email");
    }
});