let modal_window = document.getElementById("modal-window")
let modal_img = document.getElementById("modal-window-image")
let modal_name = document.getElementById("modal-window-name")
let modal_description = document.getElementById("modal-window-description")
let modal_price = document.getElementById("modal-window-price")
let modal_button = document.getElementById("modal-window-button")

modal_button.onclick = function () {
    modal_window.style.display = "none"
}


cat.onclick = function() {

    modal_window.style.display = "block"
    modal_img.src = this.children[0].src

    modal_name.innerHTML = "first"

    modal_price.innerHTML = "100$"

    modal_description.innerHTML = this.children[0].alt
}

dog.onclick = function() {
    modal_window.style.display = "block"
    modal_img.src = this.children[0].src
    modal_name.innerHTML = "second"
    modal_price.innerHTML = "250$"
    modal_description.innerHTML = this.children[0].alt
}
