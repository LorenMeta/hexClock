let clock = function () {
    let date = new Date();
    //console.log(date);
    //from date we need to extract the hours, minutes and seconds
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    //console.log(hours + ':' + minutes + ':' + seconds);


    //take every var in array and see if it is less than 10 then we need to add 0 before 
    //becuase the hex color are 6 decimals long
    let array = [hours, minutes, seconds].map(function (num) {
        return (num < 10) ? '0' + num : String(num);
    });
    hours = array[0]; //store the hours
    minutes = array[1]; //store the minutes
    seconds = array[2]; //store the seconds

    return hours + minutes + seconds;  //return the hex clock (for example: '#023525')
}

let output = function (clock) {
    let color = '#' + clock;
    document.body.bgColor = color;
    document.querySelector('#clock').textContent = color;
}

setInterval(function () {
    output(clock())
}, 1000);