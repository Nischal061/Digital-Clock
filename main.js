
let time= "00:00:00";
let clock = document.createElement("div");  
let date = document.createElement("div");
clock.innerHTML = time;
clock.style.fontSize = "50px";
clock.style.textAlign = "center";
clock.style.marginTop = "20%";

let miti ='mm-dd-yyyy' ;
date.innerHTML = miti;
date.style.fontSize = "50px";
date.style.textAlign = "center";
date.style.fontSize = "30px";
document.body.appendChild(clock);
document.body.appendChild(date);



setInterval(() => {
const currentDate = new Date();
const time = currentDate.toLocaleTimeString();
clock.innerHTML = time;
const miti = currentDate.toDateString();


date.innerHTML = miti;
}, 1000);
