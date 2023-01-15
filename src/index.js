"use strict";
const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");
const convertButtton = document.querySelector(".convert")
const switchButton = document.querySelector(".switch")
const clearButton = document.querySelector(".clear")
const todayDateBS = document.getElementById("today-date-BS");
const todayDateAD = document.getElementById("today-date-AD");
const resultElement = document.getElementById('result-date');
const labelHeader = document.getElementById('label-header');
import { BSTOAD, ADTOBS, getTodayDateBS, getTodayDateAD, formatedResponsAD, formatedResponsBS } from './utils.js'
let dateBS2AD = false;

labelHeader.innerHTML = "AD TO BS"
todayDateBS.innerHTML = getTodayDateBS();
todayDateAD.innerHTML = getTodayDateAD();
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
function hideLoading() {
    const loader = document.querySelectorAll(".loading");
    loader.forEach(l => {
        l.classList.remove("show")
    })
}

function showLoading() {
    const loader = document.querySelectorAll(".loading");
    loader.forEach(l => {
        l.classList.add("show")
    })
}
convertButtton.onclick = async () => {
    const date = document.getElementById('input-date').value;
    showLoading()
    const stringDate = date + ""
    const [year, month, day] = stringDate.split("-");
    if (date && !dateBS2AD) {
        const res = ADTOBS(year, month - 1, day);
        resultElement.innerHTML = formatedResponsBS(res)
    }
    else if (date && dateBS2AD) {
        if (year, month, day) {
            const res = BSTOAD(year, month - 1, day);
            resultElement.innerHTML = formatedResponsAD(res);
        }


    }
    hideLoading()

}


switchButton.onclick = () => {
    if (dateBS2AD) {
        labelHeader.innerHTML = "AD TO BS";
        dateBS2AD = false;
    }
    else {
        labelHeader.innerHTML = "BS TO AD"
        dateBS2AD = true;
    }
}

clearButton.onclick = () => {
    const inputElement = document.getElementById('input-date')
    inputElement.value = ''
}