//function that adds two numbers together

function add(value1, value2) {
    return value1 + ' plus ' + value2 + ' = ' + value1 + value2
}

//function that subtracts two numbers

function subtract(value1, value2) {
    return value1 + ' minus ' + value2 + ' = ' + value1 - value2
}


//function that divides two numbers

function divide(value1, value2) {
    return value1 + ' divided by ' + value2 + ' = ' + value1 / value2
}


// function that multiples two number

function multiply(value1, value2) {
    return value1 + ' multiplied ' + value2 + ' = ' + value1 * value2
}




//Return formatted date



function getFormattedDate() {

    let now = new Date();

    let days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

    let months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');

    let date = ((now.getDate() < 10) ? "0" : "") + now.getDate();

    today = days[now.getDay()] + ", " +
        months[now.getMonth()] + " " +
        date + ", " +
        (getFourDigits(now.getYear()));

    return (today)

}


//Get four digit number used in the get FormateDate function
function getFourDigits(number) {


    return (number < 1000) ? number + 1900 : number;
}


