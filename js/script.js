console.log("Cześć");

let body = document.querySelector(".js__body");
let button = document.querySelector(".js__button");
let buttonStyle = document.querySelector(".js__button--style");


button.addEventListener("click", () =>{
    body.classList.toggle("body--gray");
    buttonStyle.innerText = body.classList.contains("body--gray") ? "Białe" : "Szare";
})