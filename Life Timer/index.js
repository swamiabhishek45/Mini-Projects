let isDOBOpen = false;
let dateofbirth;
const settingCogEl = document.getElementById("settingIcon");
const settingContentEl = document.getElementById("settingContent");
const initialTextEl = document.getElementById("initialText")
const afterDOBbtnTxtEl = document.getElementById("afterDOBbtnTxt")
const DOBbuttonEl = document.getElementById("DOBbutton")
const DOBinputEl = document.getElementById("DOBinput")

const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dayEl = document.getElementById('day');
const hourEl = document.getElementById('hour');
const minutesEl = document.getElementById('minutes');
const secondEl = document.getElementById('second');

const makeTwoDigitNumber = (number) => {
    return number > 9 ? number : '0${number}';
};

const toggleDateOfBirthSelector = () => {
    if (isDOBOpen) {
        settingContentEl.classList.add('hide');
    }
    else {
        settingContentEl.classList.remove('hide');

    }

    isDOBOpen = !isDOBOpen;
    console.log("Toggle", isDOBOpen);
};
const updateAge = () => {
    const currenDate = new Date();
    // console.log(currenDate);
    const dateDiff = currenDate - dateofbirth;
    const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
    const month = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365)) % 12;
    const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30;
    const hour = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(dateDiff / (1000 * 60)) % 60;
    const second = Math.floor(dateDiff / (1000)) % 60;
    // console.log(year,month, day, hour, minutes,second);
    yearEl.innerHTML = makeTwoDigitNumber(year);
    monthEl.innerHTML = makeTwoDigitNumber(month);
    dayEl.innerHTML = makeTwoDigitNumber(day);
    hourEl.innerHTML = makeTwoDigitNumber(hour);
    minutesEl.innerHTML = makeTwoDigitNumber(minutes);
    secondEl.innerHTML = makeTwoDigitNumber(second);
};

const localStorageGetter = () => {
    const year = localStorage.getItem("year");
    const month = localStorage.getItem("month");
    const Date = localStorage.getItem("Date");
    if (year && month && day) {
        dateofbirth = new Date(year, month, day);
    }
    updateAge();

};

const contentToggler = () => {
    updateAge();
    if (dateofbirth) {

        initialTextEl.classList.add('hide');
        afterDOBbtnTxtEl.classList.remove('hide');
        setInterval(() => updateAge(), 1000);
    } else {
        afterDOBbtnTxtEl.classList.add('hide');
        initialTextEl.classList.remove('hide');
    }
};

const setDOBHandler = () => {
    const dateString = DOBinputEl.value;
    dateofbirth = dateString ? new Date(dateString) : null;


    if (dateofbirth) {
        localStorage.setItem("year", dateofbirth.getFullYear());
        localStorage.setItem("month", dateofbirth.getMonth());
        localStorage.setItem("Date", dateofbirth.getDate());
    }
    contentToggler();
    setInterval(() => updateAge(), 1000);
};

localStorageGetter();
contentToggler();

settingCogEl.addEventListener('click', toggleDateOfBirthSelector);
DOBbuttonEl.addEventListener('click', setDOBHandler);