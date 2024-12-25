let date = document.querySelector(".date");
let time = document.querySelector(".time");
setInterval(()=>{
    today()
},1000);
function today(){
    let today = new Date();
    let monthsName =["jan","Feb","March","April","may","June","Julay","Augost",
        "September","October","November","December"]
    let daysName =["Staurday", "Sunday","Monday","Tuesday","Wend","thru","friday"]
    // console.log(today.getHours());
        let currentTime = `${today.getHours() <= 9 ? "0"+ today.getHours() :today.getHours()} :${today.getMinutes()<= 9 ? "0"+ today.getMinutes() :today.getMinutes()}: ${today.getSeconds()<= 9 ? "0"+ today.getSeconds() :today.getSeconds()}`;
        let currentDate = `${daysName[today.getDay()+1]}, ${today.getDate()}, ${monthsName[today.getMonth()]}, ${today.getFullYear()}`;
        time.innerHTML = currentTime;
        date.innerHTML = currentDate;

}
