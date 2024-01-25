let inputBox = document.getElementById("inputBox");
let text = document.querySelector(".text")


const Task = () => {
    if (inputBox.value == "") {
        alert("Please enter some task")
    } else {
        let newEl = document.createElement("ul");
        newEl.innerHTML = `${inputBox.value} <i class="fa-solid fa-trash"></i>`
        text.appendChild(newEl)
        inputBox.value = "";
        newEl.querySelector("i").addEventListener("click", remove)
        function remove(){
            newEl.remove();
        }
    }
}