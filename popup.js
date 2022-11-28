const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");
const convertOneButtton = document.querySelector(".convertone")
const clearButton = document.querySelector(".clear")
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

convertOneButtton.onclick = () => {
    const dateAD = document.getElementById('dateAD').value;
    fetch(`http://localhost:5101/date-convert?date=${dateAD}`)
        .then(response => response.json())
        .then(json => {
            const dateBS = json.date;
            const resultElement = document.getElementById('dateBS');
            resultElement.innerHTML = dateBS;
        })
}

clearButton.onclick = () => {
    document.getElementById('dateAD').value = ''

}
