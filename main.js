let prev = document.querySelector(".prev")
let next = document.querySelector(".next")

next.addEventListener("click", () => {
     let items = document.querySelectorAll(".item")
     let slider = document.querySelector(".slide")
     slider.appendChild(items[0])
})

prev.addEventListener("click", () => {
     let items = document.querySelectorAll(".item")
     let slider = document.querySelector(".slide")
     slider.prepend(items[items.length - 1])
})