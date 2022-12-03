"use strict";
const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");
const convertButtton = document.querySelector(".convert")
const clearButton = document.querySelector(".clear")
const swap = document.querySelector(".swap-button");
const inputElement = document.getElementById('date');
const resultElement = document.getElementById('result-date');
const Endpoint = 'https://binij-web-server.netlify.app/.netlify/functions/date-converter'
let dateBS2AD = true;

tabs.onclick = e => {
    const id = e.target.dataset.id;
    if (id) {
        tabButton.forEach(btn => {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");

        contents.forEach(content => {
            content.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
}
swap.onclick = () => {
    const labelElement = document.getElementById('label-header')
    if (labelElement.innerHTML == "AD TO BS") {
        labelElement.innerHTML = "BS TO AD"
        dateBS2AD = false;
    } else {
        labelElement.innerHTML = "AD TO BS"
        dateBS2AD = true;
    }
    inputElement.value = ''
}

convertButtton.onclick = async () => {
    const date = document.getElementById('date').value;
    if (date && dateBS2AD) {
        const response = await fetch(`${Endpoint}/datebs2ad?date=${date}`)
        if (response.ok == 200) {
            const dateBS = json.date;
            resultElement.innerHTML = dateBS;
        }
        else if (response.status == 501) {
            resultElement.innerHTML = "Invalid Date"
        }
    }
    else if (date && !dateBS2AD) {
        console.log(date)
        //Endpoint Missing to Convert BS TO AD
    }

}

clearButton.onclick = () => {
    inputElement.value = ''
}