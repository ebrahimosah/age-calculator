"use strict";
let char = 'boy';
console.log(char);
const form = document.querySelector('form');
const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const dayMsg = document.querySelector(".day-error");
const monthMsg = document.querySelector(".month-error");
const yearMsg = document.querySelector(".year-error");
const labelDay = document.querySelector(`label[for="day"]`);
const labelMonth = document.querySelector(`label[for="month"]`);
const labelYear = document.querySelector(`label[for="year"]`);
let emptyFields = [];
let invalidFields = [];
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => {
    e.preventDefault();
    const dayValue = parseInt(dayInput.value);
    const monthValue = parseInt(monthInput.value);
    const yearValue = parseInt(yearInput.value);
    function addError(label, day, msgDiv, msg) {
        label.classList.add('error-text');
        day.classList.add('error');
        msgDiv.textContent = msg;
    }
    function removeError(label, day, msgDiv) {
        label.classList.remove('error-text');
        day.classList.remove('error');
        msgDiv.textContent = "";
    }
    function isValidDate(day, month, year) {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        console.log(emptyFields);
        const isDayValid = day >= 1 && day <= 31;
        const isMonthValid = month >= 1 && month <= 12;
        const isYearValid = year >= 1 && year <= currentYear;
        if (!isDayValid) {
            addError(labelDay, dayInput, dayMsg, 'invalid day');
        }
        if (!isMonthValid) {
            addError(labelMonth, monthInput, monthMsg, 'invalid month');
        }
        if (!isYearValid || !(typeof year === 'number')) {
            addError(labelYear, yearInput, yearMsg, 'must be in the past');
        }
        console.log('i ran');
    }
    //CHECKS IF EMPTY
    if (!dayValue) {
        emptyFields.push('day');
    }
    if (!monthValue) {
        emptyFields.push('month');
    }
    if (!yearValue) {
        emptyFields.push('year');
    }
    // HANDLES ERROR FOR EMPTY
    if (emptyFields.includes('day')) {
        addError(labelDay, dayInput, dayMsg, "this field is required");
    }
    if (emptyFields.includes('month')) {
        addError(labelMonth, monthInput, monthMsg, "this field is required");
    }
    if (emptyFields.includes('year')) {
        addError(labelYear, yearInput, yearMsg, "this field is required");
    }
    if (emptyFields.length === 0) {
        console.log('i got here');
        isValidDate(dayValue, monthValue, yearValue);
    }
    //CLEARS EMPTY ARRAY
    dayInput.addEventListener("input", () => {
        removeError(labelDay, dayInput, dayMsg);
        if (emptyFields.length > 0)
            emptyFields = [];
        console.log(emptyFields);
    });
    monthInput.addEventListener("input", () => {
        removeError(labelMonth, monthInput, monthMsg);
        if (emptyFields.length > 0)
            emptyFields = [];
    });
    yearInput.addEventListener("input", () => {
        removeError(labelYear, yearInput, yearMsg);
        if (emptyFields.length > 0)
            emptyFields = [];
    });
    console.log(emptyFields.length);
});
