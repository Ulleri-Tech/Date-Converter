"use strict";
const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");
const convertButtton = document.querySelector(".convert")
const clearButton = document.querySelector(".clear")
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
    if (date && dateBS2AD) {
        const response = await fetch(`${Endpoint}/datebs2ad?date=${date}`)
        if (response.ok) {
            const json = await response.json()
            const dateBS = json.date;
            resultElement.innerHTML = dateBS;
        }
        else if (response.status == 501) {
            resultElement.innerHTML = "Invalid Date"
        }
    }
    else if (date && !dateBS2AD) {

        //Endpoint Missing to Convert BS TO AD
    }
    hideLoading()

}

clearButton.onclick = () => {
    const inputElement = document.getElementById('input-date')
    inputElement.value = ''
}